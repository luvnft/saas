"use state";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-cards";
import Link from "next/link";

export function Card1() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Image Generation
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl text-neutral-600 dark:text-white"
        >
          Prompt:
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          A dog owner feeding his dog with biscuits where his owner wearing blue shirt and white shoe inside a forest{" "}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/1.svg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <Link href="/dashboard">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
          </Link>
          <Link href="/dashboard">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Get start →
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export function Card2() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Image Generation
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl text-neutral-600 dark:text-white"
        >
          Prompt:
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
         Few montains with snow androma galaxy in the background, a large comet from Galaxy{" "}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/2.svg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <Link href="/dashboard">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
          </Link>
          <Link href="/dashboard">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Get start →
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}
export function Card3() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Image Generation
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl text-neutral-600 dark:text-white"
        >
          Prompt:
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          A girl having some groceries, rushing to her home while there is a war outside with tank {"COMIC STYLE"}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/3.svg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <Link href="/dashboard">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
          </Link>
          <Link href="/dashboard">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Get start →
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}
export function Card4() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-semibold text-neutral-600 dark:text-white"
        >
          Image Generation
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl text-neutral-600 dark:text-white"
        >
          Prompt:
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          A charming street in early BC in india, where all the vendors are female wearing saree and selling clay items{" "}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/4.svg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <Link href="/dashboard">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
          </Link>
          <Link href="/dashboard">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Get start →
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}
