"use state"

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-cards";
import Link from 'next/link';


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
          Create an alien planet&apos;s ecosystem, featuring bizarre flora and fauna, strange geology, and atmospheric anomalies
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
          <Link href='/dashboard'>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          </Link>
          <Link href='/dashboard'>
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
          Craft mandalas incorporating vibrant colors and unique patterns that will inspire feelings of happiness and well-being.
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
        <Link href='/dashboard'> 
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          </Link>
          <Link href='/dashboard'>
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
          Reimagine scenes from the literary classic 1700&apos;s, blending indian traditional and modern elements to add a unique artistic touch for a marriage.
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
        <Link href='/dashboard'> 
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          </Link>
          <Link href='/dashboard'> 
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
          Create an anime character with large, detailed eyes and distinctive Japanese anime aesthetics
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
        <Link href='/dashboard'> 
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          </Link>
          <Link href='/dashboard'> 
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
