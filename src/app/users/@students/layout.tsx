import React from "react";

export default function Layout({
  children,
  studentCard
}: {
  children: React.ReactNode;
  studentCard: React.ReactNode;
}) {
  return (
    <div className="layout">
      <h2>Students Layout</h2>
      <div className="flex flex-col gap-4">
        <div className="w-full">{children}</div>
        <div className="w-full">{studentCard}</div>

      </div>
    </div>
  );
}
