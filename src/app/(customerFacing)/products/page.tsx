"use client";
import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard";
import db from "@/db/db";
import { cache } from "@/lib/cache";
import React, { Suspense } from "react";
import ProductLayout from "@/app/(customerFacing)/products/layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { CheckboxWithLabel } from "@/components/form/formCheckbox";


const getProducts = cache(() => {
  return db.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { name: "asc" },
  });
}, ["/products", "getProducts"]);



export default function ProductsPage() {
  const [values, setValues] = React.useState<number[]>([1000, 5000]);
  return (
    <div className="flex mx-20 my-8">
      <div className="w-52">
        <section>
          <h2 className="uppercase py-4 font-bold text-xl">Browse By</h2>
          <hr />
          <section className="my-4 flex flex-col gap-0.5">
            <p>All Products</p>
            <p>Best Sellers</p>
            <p>Categories</p>
            <p>Sales</p>
          </section>
        </section>
        <section>
          <h2 className="uppercase py-4 font-bold text-xl">Filter By</h2>
          <hr />
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Price</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {/* Display the current values */}
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Min: ₦{values[0]}</span>
                    <span>Max: ₦{values[1]}</span>
                  </div>

                  {/* Slider component */}
                  <Slider
                    className="my-1.5"
                    defaultValue={[1000, 5000]} // Default range
                    min={1000} // Minimum value
                    max={10000} // Maximum value
                    step={100} // Step size
                    value={values} // Controlled value
                    onValueChange={(newValues) => setValues(newValues)} // Update state on change
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Color</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-6 gap-4">
                  <div className="h-5 w-5 bg-red-600 rounded-full border border-gray-400"></div>
                  <div className="h-5 w-5 bg-blue-600 rounded-full border border-gray-400"></div>
                  <div className="h-5 w-5 bg-yellow-600 rounded-full border border-gray-400"></div>
                  <div className="h-5 w-5 bg-green-600 rounded-full border border-gray-400"></div>
                  <div className="h-5 w-5 bg-black rounded-full border border-gray-400"></div>
                  <div className="h-5 w-5 bg-white rounded-full border border-gray-400"></div>
                  <div className="h-5 w-5 bg-gray-800 rounded-full border border-gray-400"></div>
                  <div className="h-5 w-5 bg-orange-900 rounded-full border border-gray-400"></div>
                  <div className="h-5 w-5 bg-red-500 rounded-full border border-gray-400"></div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Category</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col px-4 gap-y-2">
                  <CheckboxWithLabel id="ankara" label="Ankara" />
                  <CheckboxWithLabel id="aso-oke" label="Aso-Oke" />
                  <CheckboxWithLabel id="lace" label="Lace" />
                  <CheckboxWithLabel id="chiffon" label="Chiffon" />
                  <CheckboxWithLabel id="silk" label="Silk" />
                  <CheckboxWithLabel id="ankara" label="Ankara" />
                  <CheckboxWithLabel id="ankara" label="Ankara" />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
      <div></div>
    </div>
  );
}

ProductsPage.getLayout = function getLayout(page: React.ReactNode) {
  return <ProductLayout>{page}</ProductLayout>;
};

async function ProductsSuspense() {
  const products = await getProducts();
  return products.map((product) => (
    <ProductCard key={product.id} {...product} />
  ));
}
