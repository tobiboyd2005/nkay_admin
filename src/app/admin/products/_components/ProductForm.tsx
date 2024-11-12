"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActionState, useState } from "react";
import { addProduct, updateProduct } from "../../_actions/products";
import { useFormStatus } from "react-dom";
import { Product } from "@prisma/client";
import Image from "next/image";
import { formatCurrency } from "@/lib/formatter";
import { toast } from "sonner";
import { FormEvent } from "react";


export function ProductForm({ product }: { product?: Product | null }) {
const [error, action] = useActionState(
  product == null ? addProduct : updateProduct.bind(null, product.id),
  {}
);

const [priceInNaira, setPriceInNaira] = useState<number | undefined>(
  product?.priceInNaira
);

const handleSave = async (event: FormEvent) => {
  event.preventDefault(); // Prevent default form submission

  // Create the data object
  const data = {
    name: product?.name, // You can access `name` or any other fields from the product
    priceInNaira,
    filePath: product?.filePath,
    imagePath: product?.imagePath,
  };

  try {
    // Perform the action (either add or update the product)
    await action(data); // Use action (addProduct or updateProduct) to perform the actual API call

    // If successful, show a success toast
    toast.success(
      product == null
        ? "Product Created Successfully"
        : "Product Updated Successfully"
    );

    // You can also handle additional logic if necessary (e.g., resetting fields, redirecting, etc.)
  } catch (error) {
    // If an error occurs, show an error toast
    toast.error("An error occurred while creating/updating the product");
    console.error("Error:", error);
  }
};



  return (
    <form action={action} className="grid grid-cols-2 w-full gap-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          className="rounded"
          type="text"
          id="name"
          name="name"
          required
          defaultValue={product?.name || ""}
        />
        {error.name && <div className="text-destructive">{error.name}</div>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="priceInNaira">Price In Naira</Label>
        <Input
          className="rounded"
          type="number"
          id="priceInNaira"
          name="priceInNaira"
          required
          value={priceInNaira !== undefined ? priceInNaira : ""}
          onChange={(e) => {
            const value = e.target.value;
            setPriceInNaira(value ? Number(value) : 0);
          }}
        />
        <div className="text-muted-foreground">
          {formatCurrency(priceInNaira || 0)}
        </div>
        {error.priceInNaira && (
          <div className="text-destructive">{error.priceInNaira}</div>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          className="rounded"
          required
          defaultValue={product?.description}
        />
        {error.description && (
          <div className="text-destructive">{error.description}</div>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="file">File</Label>
        <Input
          type="file"
          className="rounded"
          id="file"
          name="file"
          required={product == null}
        />
        {product != null && (
          <div className="text-muted-foreground">{product.filePath}</div>
        )}
        {error.file && <div className="text-destructive">{error.file}</div>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">Image</Label>
        <Input
          type="file"
          className="rounded"
          id="image"
          name="image"
          required={product == null}
        />
        {product != null && (
          <Image
            src={product.imagePath}
            height="400"
            width="400"
            alt="Product Image"
          />
        )}
        {error.image && <div className="text-destructive">{error.image}</div>}
      </div>

      {/* Submit button in its own row */}
      <div className="col-span-1 sm:col-span-2">
        <SubmitButton />
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="bg-[#4B4376] rounded text-white hover:opacity-80"
    >
      {pending ? "Saving..." : "Save"}
    </Button>
  );
}
