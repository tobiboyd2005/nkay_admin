// app/products/page.tsx (Server Component)
import db from "@/db/db";
import { cache } from "@/lib/cache";
import { Product } from "@prisma/client";
import ProductsPage from "../page";
import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


// Cache the product fetching function
export const getProducts = cache(() => {
  return db.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { name: "asc" },
  });
}, ["/products", "getProducts"]);

export default async function Page() {
  const products = await getProducts();
  return <ProductsPage products={products} />;
}

type ProductGridSectionProps = {
  title?: string;
  productsFetcher: () => Promise<Product[]>;
  home?: boolean;
};

export function ProductGridSection({
  productsFetcher,
  title,
  home,
}: ProductGridSectionProps) {
  return (
    <div className="space-y-6">
      {/* Title and View All Button */}
      <div className="flex items-center gap-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h2>
        {home && (<Button variant="outline" asChild>
          <Link href="/products" className="flex items-center space-x-2">
            <span className="text-lg lg:text-xl">View All</span>
            <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </Link>
        </Button>)}
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        <Suspense
          fallback={
            <>
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </>
          }
        >
          <ProductSuspense productsFetcher={productsFetcher} />
        </Suspense>
      </div>
    </div>
  );
}

async function ProductSuspense({
  productsFetcher,
}: {
  productsFetcher: () => Promise<Product[]>;
}) {
  return (await productsFetcher()).map((product) => (
    <ProductCard key={product.id} {...product} />
  ));
}

