"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";

type Props = {
  children: React.ReactNode;
};

export default function SubmitButton({ children }: Props) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="secondary"
      size="lg"
      className={cn("w-full py-5 text-lg font-bold hover:bg-white transition-colors rounded-[4px] mt-4 h-auto", {
        "cursor-not-allowed": pending,
      })}
    >
      {pending ? <Spinner /> : children}
    </Button>
  );
}
