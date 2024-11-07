import { PageHeader } from "../../_components/PageHeader";
import { ProductForm } from "../_components/ProductForm";

export default function NewProductPage(){
   return (
      <div className="w-full">
      <PageHeader>Add Product</PageHeader>
      <ProductForm />
      </div>
   )
}