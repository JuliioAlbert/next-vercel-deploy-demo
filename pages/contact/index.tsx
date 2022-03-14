import Link from "next/link";
import { MainLayout } from "../../components/Layout/MainLayout";

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact</h1>
      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>
      <p>Get Stated</p>
    </MainLayout>
  );
}
