"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { SparkleIcon } from "lucide-react";
import { useUserRole } from "@/hooks/useUserRole";

export function DashboardBtn() {
  const { isLoading, isCandidate } = useUserRole();
  if (isCandidate || isLoading) return null;
  return (
    <Link href="/dashboard">
      <Button className="gap-2 fron-meduim" size="sm">
        <SparkleIcon className="size-4" />
        Dashboard
      </Button>
    </Link>
  );
}
