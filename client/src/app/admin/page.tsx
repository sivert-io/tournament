"use client";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import Title from "@/components/Title/Title";
import { useAdmin } from "@/hooks/useAdmin";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default function Page() {
  const { isAdmin, status } = useAdmin();
  const session = useSession();

  if (
    (status === "finished" && !isAdmin) ||
    session.status === "unauthenticated"
  )
    redirect("/");

  return (
    <PageWrapper>
      <Title>Admin</Title>
    </PageWrapper>
  );
}
