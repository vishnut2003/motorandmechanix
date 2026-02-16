"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import LayoutProvider from "./layout.provider";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <LayoutProvider>
        {children}
      </LayoutProvider>
    </LazyMotion>
  );
};

export default Provider;
