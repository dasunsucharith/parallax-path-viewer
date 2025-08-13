"use client";

import { TextRevealByWord } from "@/components/ui/text-reveal";
import { cn } from "@/lib/utils";

export function TextRevealDemo() {
  return (
    <div className="w-full h-[500px] bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      <TextRevealByWord text="From “hmm” ideas to “heck yes” launches — we design, code, and optimise sites that look great, work flawlessly, and secretly make your rivals jealous." />
    </div>
  );
}
