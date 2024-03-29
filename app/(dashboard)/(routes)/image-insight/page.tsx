"use client"

import * as React from 'react';
import * as LR from '@uploadcare/blocks';
import { PACKAGE_VERSION } from '@uploadcare/blocks';
import { Heading } from "@/components/heading";
import * as z from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState, useRef, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation";
import OpenAI from "openai";
import { BotAvatar } from "@/components/bot-avatar";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Loader } from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { Empty } from "@/components/ui/empty";
import { useProModal } from "@/hooks/use-pro-modal";
import { formSchema } from "./constants";
import st from './styles.module.css';
import { Eye, Image, ImageOff, MessageSquare } from 'lucide-react';


LR.registerBlocks(LR);

function Minimal() {
  
  const router = useRouter();
  const proModal = useProModal();
  const [messages, setMessages] = useState<OpenAI.Chat.CreateChatCompletionRequestMessage[]>([]);
  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      model: "gpt-4-vision-preview",
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = { role: "user", content: values.prompt };
      const newMessages = [...messages, userMessage];

      if (files.length > 0) {
        const fileUrls = files.map(file => file.cdnUrl);
        newMessages.push({ role: "user", content: fileUrls.join(", ") });
      }

      const response = await axios.post('/api/vision', { messages: newMessages });
      setMessages((current) => [...current, userMessage, response.data]);
      form.reset();
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

  const [files, setFiles] = React.useState<any[]>([]);
  const ctxProviderRef = React.useRef<any>(null);
  

  React.useEffect(() => {
    const ctxProvider = ctxProviderRef.current;
    if (!ctxProvider) return;

    const handleChangeEvent = (e: any) => {
      console.log('change event payload:', e);
      setFiles([...e.detail.allEntries.filter((f: any) => f.status === 'success')]);
    };

    ctxProvider.addEventListener('change', handleChangeEvent);
    return () => {
      ctxProvider.removeEventListener('change', handleChangeEvent);
    };
  }, [setFiles]);

  const formatSize = (bytes: number) => {
    if (!bytes) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / k ** i).toFixed(2))} ${sizes[i]}`;
  };

  return (
    <div className={st.pageWrapper}>
      <Heading
        title="Image Insight"
        description="Our most advanced take in images and answer questions model."
        icon={Eye}
        iconColor="text-blue-500"
        bgColor="bg-blue-500/10"
      />
      <hr className={st.separator} />
      
      <div className="px-4 lg:px-8">
        <div>
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
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      {/* Replace Input with Textarea */}
                      <Textarea
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Enter your text here"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className={st.center}> 
      <lr-config
        ctx-name="my-uploader"
        pubkey="cd4fd5fd4190239a70a6"
        source-list="local, url, camera, dropbox, facebook, gdrive, gphotos, instagram"
        multiple={false}
        img-only="true"
      ></lr-config>
      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@${PACKAGE_VERSION}/web/lr-file-uploader-regular.min.css`}
      ></lr-file-uploader-regular>
      <lr-upload-ctx-provider
        ctx-name="my-uploader"
        ref={ctxProviderRef}
      ></lr-upload-ctx-provider>
      </div>

              <Button
                className="rounded-md bg-zinc-800 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-500 col-span-12 lg:col-span-12 w-full mt-5"
                type="submit"
                disabled={isLoading}
                size="icon"
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="No conversation started." />
          )}
        


        <div className="flex flex-col-reverse gap-y-4">
          {messages.map((message, index) => (
            <div
              key={index} // Using index as key is not recommended for dynamic lists, consider using a unique ID
              className={cn(
                "relative p-8 w-full flex items-start gap-x-8 rounded-lg",
                message.role === "user" ? "bg-white border border-black/10" : "bg-muted",
              )}
            >
              <div className="flex items-start gap-x-8">
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <div className="text-sm whitespace-pre-wrap flex-1">
                  {message.content?.toString().split('\n').map((line, lineIndex) => {
                    if (line.includes("###")) {
                      return <h1 key={lineIndex}><strong>{line.replace(/###/g, '')}</strong></h1>;
                    } else if (line.includes("####")) {
                      return <h2 key={lineIndex}><strong>{line.replace(/####/g, '')}</strong></h2>;
                    } else {
                      return (
                        <p key={lineIndex}>
                          {line.split(/\*\*(.*?)\*\*/g).map((text, textIndex) => {
                            return textIndex % 2 === 0 ? text : <strong key={textIndex}>{text}</strong>;
                          })}
                        </p>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className={st.previews} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  {files.length > 0 && ( // Check if files array is not empty
    <Button variant="secondary" style={{ margin: 'auto' }}> Uploded Image</Button>
  )}
  </div>
        <div className={st.previews}>
  

  {/* Map through uploaded files */}
  {files.map((file) => (
    <div key={file.uuid} className={st.previewWrapper}>
      <img
        className={st.previewImage}
        key={file.uuid}
        src={`${file.cdnUrl}/-/preview/-/resize/x400/`}
        width="200"
        height="200"
        alt={file.fileInfo.originalFilename || ''}
        title={file.fileInfo.originalFilename || ''}
      />

      <p className={st.previewData}>
        {file.fileInfo.originalFilename}
      </p>
      <p className={st.previewData}>
        {formatSize(file.fileInfo.size)}
      </p>
      {/* Add the URL display here */}
      <p className={st.previewData}>
        Image URL: 
        <button onClick={() => window.open(`${file.cdnUrl}`, "_blank")} rel="noopener noreferrer">View Image</button>
      </p>
    </div>
  ))}
</div>
      </div>
    </div>
  );
}

export default Minimal;
