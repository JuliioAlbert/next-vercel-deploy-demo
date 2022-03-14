import Link from "next/link";
import { MainLayout } from "../components/Layout/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home</h1>
      <h1 className="title">
        Ir a <Link href="/about">About</Link>
        {/* Ir a <a href="/about">About</a> */}
      </h1>
      <p>Get Stated</p>
    </MainLayout>
  );
}
