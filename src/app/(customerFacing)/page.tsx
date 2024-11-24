import Banner from "@/components/Home/banner";
import Category from "@/components/Home/category";
import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import db from "@/db/db";
import { cache } from "@/lib/cache";
import { Product } from "@prisma/client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const getMostPopularProducts = cache(
  () => {
    return db.product.findMany({
      where: { isAvailableForPurchase: true },
      orderBy: { orders: { _count: "desc" } },
      take: 4,
    });
  },
  ["/", "getMostPopularProducts"],
  { revalidate: 60 * 60 * 24 }
);

const getNewestProducts = cache(() => {
  return db.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { createdAt: "desc" },
    take: 4,
  });
}, ["/", "getNewestProducts"]);

export default function Home() {
  return (
    <div className="h-auto">
      <Banner />
      <div className="grid grid-rows-2 w-full justify-center gap-8 my-24">
        <ProductGridSection
          title="Most Popular"
          productsFetcher={getMostPopularProducts}
        />
        <ProductGridSection
          title="Newest"
          productsFetcher={getNewestProducts}
        />
      </div>
      <Category />
    </div>
  );
}

type ProductGridSectionProps = {
  title: string;
  productsFetcher: () => Promise<Product[]>;
};

function ProductGridSection({
  productsFetcher,
  title,
}: ProductGridSectionProps) {
  return (
    <div className="space-y-6">
      {/* Title and View All Button */}
      <div className="flex items-center gap-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h2>
        <Button variant="outline" asChild>
          <Link href="/products" className="flex items-center space-x-2">
            <span className="text-lg lg:text-xl">View All</span>
            <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </Link>
        </Button>
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
