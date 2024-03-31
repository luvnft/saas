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
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Loaderimage} from "@/components/loader";
import { Empty } from "@/components/ui/empty";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useProModal } from "@/hooks/use-pro-modal";


import { amountOptions, modelforImage, formSchema, resolutionOptions } from "./constants";

import { audioquestionsByPage } from "./audioquestion";

const getRandomQuestion = () => {
  // Randomly select a page
  const pages = Object.keys(audioquestionsByPage);
  const randomPageIndex = Math.floor(Math.random() * pages.length);
  const randomPage = pages[randomPageIndex];
  
  // Randomly select a question from that page
  const questionsOnSelectedPage = audioquestionsByPage[randomPage as keyof typeof audioquestionsByPage];
  const randomQuestionIndex = Math.floor(Math.random() * questionsOnSelectedPage.length);
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
      resolution: "512x512",
      modelImage: "dall-e-2"
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setPhotos([]);

      const response = await axios.post('/api/image', values);

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
  }
  const [randomQuestion, setRandomQuestion] = useState(getRandomQuestion());
  const modelImage = form.getValues("modelImage"); // Extracted variable
  const [showSecondMessage, setShowSecondMessage] = useState(false);



  useEffect(() => {
    // Show a custom toast message based on the model image
    if (modelImage === "dall-e-3") {
      toast.success("DALL-3 is a highest-quality model and can generate only 1 image with 1024*1024 Quality. It may take longer to generate images or sometime fail.");

      // Set a timeout to show the second message after 3 seconds
      const timeoutId = setTimeout(() => {
        setShowSecondMessage(true);
      }, 3000);

      // Clear the timeout on component unmount or when modelImage changes
      return () => clearTimeout(timeoutId);
    } else {
      toast.success("DALL-2 is a low-quality model and can generate upto 5 images with different quality. It is faster than DALL-E 3.");
    }
  }, [modelImage])
  useEffect(() => {
    // Show the second message when showSecondMessage state is true
    if (showSecondMessage) {
      toast.success("You can switch back to DALL-E 2 for more images quality");
    }
  }, [showSecondMessage]);
  
useEffect(() => {
  if (modelImage === "dall-e-3") {
    form.setValue("amount", "1");
    form.setValue("resolution", "1024x1024");
  } else {
    // Reset default values for other models
    form.setValue("amount", "1");
    form.setValue("resolution", "512x512");
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
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      disabled={isLoading} 
                      placeholder={randomQuestion} 
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
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
                      {form.getValues("modelImage") === "dall-e-3" ? (
                        <SelectItem key="1024x1024" value="1024x1024">
                          1024x1024
                        </SelectItem>
                      ) : (
                        resolutionOptions.map((option) => (
                          <SelectItem 
                            key={option.value} 
                            value={option.value}
                          >
                            {option.label}
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
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
                          <SelectItem 
                            key={option.value} 
                            value={option.value}
                          >
                            {option.label}
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
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
                        <SelectItem 
                          key={option.value} 
                          value={option.value}
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                     
                    </SelectContent>
                  </Select>
                  
                </FormItem>
              )}
            />
              <Button className="rounded-md bg-zinc-800 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-500 col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
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
                  fill
                  alt="Generated"
                  src={src}
                />
              </div>
              <CardFooter className="p-2">
                <Button onClick={() => window.open(src)} variant="secondary" className="w-full">
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
}

export default PhotoPage;