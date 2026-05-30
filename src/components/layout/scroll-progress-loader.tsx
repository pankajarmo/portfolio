"use client";

import dynamic from "next/dynamic";

const ScrollProgress = dynamic(
  () => import("./scroll-progress"),
  { ssr: false }
);

export default function ScrollProgressLoader() {
  return <ScrollProgress />;
}
