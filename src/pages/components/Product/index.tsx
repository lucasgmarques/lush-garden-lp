import { useState } from "react";
import { productsData } from "../../../data/products";

import ProductCard from "./ProductCard";

export default function Product() {
  const [products, setProducts] = useState(productsData);

  return (
    <section className="container p-8 mx-auto lg:px-12 lg:py-24">
      <h2 className="mb-10 text-2xl text-center text-green-900 lg:mb-8 md:text-4xl font-latoRegular lg:text-4xl">
        What We Offer To You
      </h2>
      <div className="grid gap-8 lg:gap-20 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
