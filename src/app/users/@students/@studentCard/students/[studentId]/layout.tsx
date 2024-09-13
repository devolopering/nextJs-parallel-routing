"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Layout({ children,  }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <div className="layout">
      <div className="flex  items-center gap-5"><h2>Student</h2>
      <button onClick={() => router.back()}>&larr; &nbsp; Go back</button>
      </div>
      {children}
      
    </div>
  );
}
