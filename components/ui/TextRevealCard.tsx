"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="desktop-only">
      <TextRevealCard
        text="Your goals set the stage"
        revealText="we'll script the story."
      >
        <TextRevealCardTitle>
        Experience the Unveiling.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
        Delve into the mystery; uncover the secrets hidden beneath the surface.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
