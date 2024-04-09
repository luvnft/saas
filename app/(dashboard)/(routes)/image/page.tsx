"use client";

import * as z from "zod";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Download, ImageIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Loaderimage } from "@/components/loader";
import { Empty } from "@/components/ui/empty";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProModal } from "@/hooks/use-pro-modal";

import {
  amountOptions,
  modelforImage,
  formSchema,
  resolutionOptions,
  styleOption,
  colorOption,
} from "./constants";

import { audioquestionsByPage } from "./audioquestion";
import { Textarea } from "@/components/ui/textarea";

const getRandomQuestion = () => {
  // Randomly select a page
  const pages = Object.keys(audioquestionsByPage);
  const randomPageIndex = Math.floor(Math.random() * pages.length);
  const randomPage = pages[randomPageIndex];

  // Randomly select a question from that page
  const questionsOnSelectedPage =
    audioquestionsByPage[randomPage as keyof typeof audioquestionsByPage];
  const randomQuestionIndex = Math.floor(
    Math.random() * questionsOnSelectedPage.length
  );
  const randomQuestion = questionsOnSelectedPage[randomQuestionIndex];

  return randomQuestion;
};

const PhotoPage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [photos, setPhotos] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512", // Default resolution for DALL-E 2
      modelImage: "dall-e-2",
      styleOption: "Emotion",
      colorOption: "Tone",
    },
  });

  const filteredResolutionOptions = (modelImage: string) => {
    if (modelImage === "dall-e-3") {
      // If DALL-E 3 is selected, exclude certain resolutions
      return resolutionOptions.filter(
        (option) => !["256x256", "512x512"].includes(option.value)
      );
    } else if (modelImage === "dall-e-2") {
      // If DALL-E 2 is selected, exclude certain resolutions
      return resolutionOptions.filter(
        (option) => !["1024x1792", "1792x1024"].includes(option.value)
      );
    }
    // Default case: return all resolution options
    return resolutionOptions;
  };

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setPhotos([]);

      // Get the current prompt value
      let prompt = values.prompt;

      // Get the selected style option
      const selectedStyleOption = values.styleOption;

      // Find the corresponding style option label based on its value
      const selectedStyleLabel =
        styleOption.find((option) => option.value === selectedStyleOption)
          ?.label || "";

      const selectedcolorOption = values.colorOption;
      const selectedcolorLabel =
        colorOption.find((option) => option.value === selectedcolorOption)
          ?.label || "";

      // Concatenate the selected style option label with the prompt
      prompt += " " + selectedStyleLabel + selectedcolorLabel;

      // Make the API request with the updated prompt
      const response = await axios.post("/api/image", { ...values, prompt });
      const urls = response.data.map((image: { url: string }) => image.url);
      setPhotos(urls);
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      router.refresh();
    }
  };

  function chunkArray<T>(array: T[], size: number): T[][] {
    const chunkedArray: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }

  const [randomQuestion, setRandomQuestion] = useState(getRandomQuestion());
  const modelImage = form.getValues("modelImage"); // Extracted variable
  const [showSecondMessage, setShowSecondMessage] = useState(false);

  useEffect(() => {
    // Show a custom toast message based on the model image
    if (modelImage === "dall-e-3") {
      toast.success(
        "DALL-3 is a highest-quality model and can generate only 1 image with 1024*1024 Quality. It may take longer to generate images or sometime fail."
      );

      // Set a timeout to show the second message after 3 seconds
      const timeoutId = setTimeout(() => {
        setShowSecondMessage(true);
      }, 3000);

      // Clear the timeout on component unmount or when modelImage changes
      return () => clearTimeout(timeoutId);
    } else {
      toast.success(
        "DALL-2 is a low-quality model and can generate upto 5 images with different quality. It is faster than DALL-E 3."
      );
    }
  }, [modelImage]);
  useEffect(() => {
    // Show the second message when showSecondMessage state is true
    if (showSecondMessage) {
      toast.success(
        "You can switch back to DALL-E 2 for more images at a time"
      );
    }
  }, [showSecondMessage]);

  useEffect(() => {
    if (modelImage === "dall-e-3") {
      form.setValue("amount", "1");
      form.setValue("resolution", "1024x1024"); // Set default resolution to 1024x1024
    } else {
      // Reset default values for other models
      form.setValue("amount", "1");
      form.setValue("resolution", "512x512"); // Set default resolution to 512x512 for DALL-E 2
    }
  }, [modelImage, form]);

  return (
    <div>
      <Heading
        title="Image Generation"
        description="Turn your prompt into an image."
        icon={ImageIcon}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
      />
      <div className="px-4 lg:px-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="
      rounded-lg 
      border 
      w-full 
      p-4 
      px-3 
      md:px-6 
      focus-within:shadow-sm
      grid
      grid-cols-12
      gap-2
    "
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-4">
                  <FormControl className="m-0 p-0">
                    <Textarea
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      disabled={isLoading}
                      placeholder={randomQuestion}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {["dall-e-3"].includes(form.getValues("modelImage")) && (
              <FormField
                control={form.control}
                name="resolution"
                render={({ field, fieldState: { error } }) => (
                  <FormItem className="col-span-12 lg:col-span-2">
                    <Select
                      disabled={isLoading}
                      onValueChange={(value) => {
                        field.onChange(value);
                        // This is to clear errors if the users pick an option after an error was shown
                        form.clearErrors("resolution");
                      }}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          className={`border-2 ${
                            error ? "border-red-500" : "border-gray-300"
                          } rounded-md shadow-sm`}
                        >
                          <SelectValue>
                            {field.value
                              ? resolutionOptions.find(
                                  (option) => option.value === field.value
                                )?.label
                              : "Resolution"}
                          </SelectValue>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {filteredResolutionOptions(
                          form.getValues("modelImage")
                        ).map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {error && (
                      <span className="text-red-500 text-sm mt-1">
                        {"Kindly select the resolution" || "Required"}
                      </span>
                    )}
                  </FormItem>
                )}
              />
            )}

            {["dall-e-3"].includes(form.getValues("modelImage")) && (
              <FormField
                control={form.control}
                name="styleOption"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue>
                            {field.value= "Style"}
                          </SelectValue>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {chunkArray(styleOption, 2).map((row, rowIndex) => (
                          <div
                            key={rowIndex}
                            style={{ display: "flex", marginBottom: "5px" }}
                          >
                            {row.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                                style={{ marginRight: "5px" }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <img
                                    src={option.image}
                                    alt={option.label}
                                    style={{
                                      width: "50px",
                                      height: "40px",
                                      marginRight: "5px",
                                    }}
                                  />
                                  <span>{option.label}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </div>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            )}

            {form.getValues("modelImage") === "dall-e-3" && (
              <FormField
                control={form.control}
                name="colorOption"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                        <SelectValue>
                            {field.value= "Color"}
                          </SelectValue>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {colorOption.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            )}

            {form.getValues("modelImage") === "dall-e-2" && (
              <FormField
                control={form.control}
                name="resolution"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {filteredResolutionOptions(
                          form.getValues("modelImage")
                        ).map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            )}

            {form.getValues("modelImage") === "dall-e-2" && (
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {form.getValues("modelImage") === "dall-e-3" ? (
                          <SelectItem key="1" value="1">
                            1 Photo
                          </SelectItem>
                        ) : (
                          amountOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))
                        )}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="modelImage"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-2">
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {modelforImage.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <Button
              className="rounded-md bg-zinc-800 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-500 col-span-12 lg:col-span-12 w-full"
              type="submit"
              disabled={isLoading}
              size="icon"
            >
              Generate
            </Button>
          </form>
        </Form>

        {isLoading && (
          <div className="p-20">
            <Loaderimage />
          </div>
        )}
        {photos.length === 0 && !isLoading && (
          <Empty label="No images generated." />
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
          {photos.map((src) => (
            <Card key={src} className="rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={src}
                  alt="Generated"
                  width={1} // Set your desired width
                  height={1} // Set your desired height
                  layout="responsive" // Use responsive layout for better performance
                  loading="lazy" // Enable lazy loading
                />
              </div>
              <CardFooter className="p-2">
                <Button
                  onClick={() => window.open(src)}
                  variant="secondary"
                  className="w-full"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoPage;
