import ProductImages from "@/components/ProductImages";

function DetailPage() {
  return (
    <div className="mt-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG  */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>

      {/* TEXTS  */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">product.name</h1>
        <p className="text-gray-500">product.description</p>
      </div>
    </div>
  );
}

export default DetailPage;
