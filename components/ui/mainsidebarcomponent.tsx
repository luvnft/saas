import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { Button } from "@/components/ui/button"
  import Link from 'next/link';
  import  GradientButton  from "./buttongrad";

  
  export function AccordionDemo() {
    return (
        <div style={{ marginTop: '50px' }}>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>AI Services</AccordionTrigger>
          <AccordionContent>
            <Link href="/conversation" > 
            <GradientButton buttonText="Conversation" />
          </Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/text-to-speech" > 
            <GradientButton buttonText="Text-to-Speech Generation" />
          </Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/image" > 
            <GradientButton buttonText="Image Generation" />
          </Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/code" > 
            <GradientButton buttonText="Code Generation" />
          </Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/entertainment" > 
            <GradientButton buttonText="Entertainment Suggestion" />
          </Link>
          </AccordionContent>

        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent>
            <Link href="/price" > 
            <GradientButton buttonText="Hobby" />
          </Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/price" > 
            <GradientButton buttonText="Pro Plan" />
          </Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/price" > 
            <GradientButton buttonText="Unlimited" />
          </Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Contact Us</AccordionTrigger>

          <AccordionContent>
            <Link href="/feedback" > 
            <GradientButton buttonText="Feedback" />
          </Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/Help" > 
            <GradientButton buttonText="Help" />
          </Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/Refund" > 
            <GradientButton buttonText="Refund" />
          </Link>
          </AccordionContent>
          <AccordionContent>
            <Link href="/Join-Us" > 
            <GradientButton buttonText="Join Us" />
          </Link>
          </AccordionContent>

        </AccordionItem>
        <Link href="/about-us" > 
        <Button variant="link">About us</Button>
        </Link>
      </Accordion>
      </div>
    )
  }
  