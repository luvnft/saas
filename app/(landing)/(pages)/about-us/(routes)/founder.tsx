"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/pages/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Shubham Sharma",
    designation: "Founder and CEO",
    image:
      "https://lh3.googleusercontent.com/pw/AP1GczPBxsCBKOF3XBsMdxZthh6J1RHoJMY_N1wHTg1823_e19ZqcvLxqg1dpRPVSft1kEvlFBbUxRPbpAggJEH_-ZmAFYis0lTTCPI_GassdQdMOMbdxVk32WAytzsxIw9qsFWNDjyYzlq4StfUH64foNavsg=w3132-h2088-s-no?authuser=0",
  },
  // {
  //   id: 2,
  //   name: "Robert Johnson",
  //   designation: "Product Manager",
  //   image:
  //     "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  // },
  // {
  //   id: 3,
  //   name: "Jane Smith",
  //   designation: "Data Scientist",
  //   image:
  //     "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  // },
  // {
  //   id: 4,
  //   name: "Emily Davis",
  //   designation: "UX Designer",
  //   image:
  //     "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  // },
  // {
  //   id: 5,
  //   name: "Tyler Durden",
  //   designation: "Soap Developer",
  //   image:
  //     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  // },
  // {
  //   id: 6,
  //   name: "Dora",
  //   designation: "The Explorer",
  //   image:
  //     "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  // },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center  w-full">
      <AnimatedTooltip items={people} />
      <p> </p>
    </div>
  );
}
