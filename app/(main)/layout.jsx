"use client";

import { Toaster } from "@/components/ui/sonner";
import { Authenticated } from "convex/react";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <Authenticated>
      <div className="container mx-auto mt-24 mb-20 px-4">
        {children}
        <Toaster/>
        </div>
    </Authenticated>
  );
};

export default MainLayout;
