import { useState } from "react";
import { productsData } from "../../data/products";

import ProductCard from "./ProductCard";

export default function Product() {
  const [products, setProducts] = useState(productsData);

  return (
    <section id="product" className="px-4 py-8 mx-auto lg:px-12 lg:pb-16">
      <h2 className="mb-10 text-2xl text-center text-green-900 lg:mb-8 md:text-4xl font-latoRegular lg:text-4xl">
        What We Offer To You
      </h2>
      <div className="grid gap-8 lg:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
