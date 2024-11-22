import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard"
import db from "@/db/db"
import { cache } from "@/lib/cache"
import React, { Suspense } from "react"
import {AppSidebar} from "@/components/Home/sidebar";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";

const getProducts = cache(() => {
  return db.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { name: "asc" },
  })
}, ["/products", "getProducts"])

export default function ProductsPage() {
  return (
    <div className="">
      <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>
      {/*<Suspense*/}
      {/*  fallback={*/}
      {/*    <>*/}
      {/*      <ProductCardSkeleton />*/}
      {/*      <ProductCardSkeleton />*/}
      {/*      <ProductCardSkeleton />*/}
      {/*      <ProductCardSkeleton />*/}
      {/*      <ProductCardSkeleton />*/}
      {/*      <ProductCardSkeleton />*/}
      {/*    </>*/}
      {/*  }*/}
      {/*>*/}
      {/*  <ProductsSuspense />*/}
      {/*</Suspense>*/}
    </div>
  )
}

async function ProductsSuspense() {
  const products = await getProducts()

  return products.map(product => <ProductCard key={product.id} {...product} />)
}
