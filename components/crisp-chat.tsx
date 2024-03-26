"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("5f06ac2c-e393-4179-a7aa-04db4ac58b76");
  }, []);

  return null;
};
