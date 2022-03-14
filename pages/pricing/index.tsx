import Link from "next/link";

import { MainLayout } from "../../components/Layout/MainLayout";

const PricingPage = () => {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>
      <p>
        Get Stated
        <code className="code">page/pricing/index.jsx</code>
      </p>
    </MainLayout>
  );
};

export default PricingPage;
