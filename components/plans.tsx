import { LampComponent } from '@/components/global/lamp'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-cards'
import { CheckIcon } from 'lucide-react'
import Link from 'next/link';



export const Plans = () =>{
    return (

        <section className="mt-[10px] top-100">
        <LampComponent />
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Hobby
                <h2 className="text-6xl ">₹0</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Generative AI at your tip where {"you'll"} get total of 50 generation for free
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />50 Free generation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Including Image generation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Including Image Insight
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Limited Chatgpt-4 Access
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    More comming soon
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
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
                  Get Started Now
                </CardItem>
                </Link>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-[#E2CBFF] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Pro Plan
                <h2 className="text-6xl ">₹299</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Generative AI at your tip where {"you'll"} get unlimited AI generation. 
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />Unlimited Chat generation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />Unlimited Voice generation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Unlimited Image generation - Version 2
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Including Image Insight
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />Unlimited Code generation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Unlimited Chatgpt-4 Access
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
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
                  Get Started Now
                </CardItem>
                </Link>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Unlimited
                <h2 className="text-6xl ">₹999</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Generative AI at your tip where {"you'll"} get unlimited generation and instant customer support 
                <ul className="my-4 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                    <CheckIcon />Unlimited Chat generation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />Unlimited Voice generation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Unlimited Image generation - Version 2
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />Unlimited Image Insight
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />Unlimited Code generation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Unlimited Chatgpt-4 Access
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Premium Customer Support instant reply
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Instant feedback and feature request
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
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
                  Get Started Now
                </CardItem>
                </Link>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>
    )
}