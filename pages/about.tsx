import Link from "next/link";
import React from "react";
import { DarkLayout } from "../components/Layout/DarkLayout";
import { MainLayout } from "../components/Layout/MainLayout";

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>
      <p>Get Stated</p>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
