"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Conversation",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Conversation Tab</p>
          <DummyContent src="/2.svg" />
        </div>
      ),
    },
    {
      title: "Text-to-Speech Generation",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Text-to-Speech Generation</p>
          <DummyContent src="/3.svg" />
        </div>
      ),
    },
    {
      title: "Image Generation",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Image Generation</p>
          <DummyContent src="/1.svg" />
        </div>
      ),
    },
    {
      title: "Entertainment Suggestion",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Entertainment Suggestion</p>
          <DummyContent src="/4.svg" />
        </div>
      ),
    },
    {
      title: "Code Generation",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Code Generation</p>
          <DummyContent src="/5.svg" />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-center justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
  
}

const DummyContent = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
