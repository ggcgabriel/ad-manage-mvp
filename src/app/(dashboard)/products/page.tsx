export default function ProductsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Products</h1>
        <p className="mt-1 text-sm text-zinc-500">
          Manage your products. Create manually or import from a URL.
        </p>
      </div>

      <div className="rounded-lg border border-dashed border-zinc-300 p-12 text-center text-sm text-zinc-400 dark:border-zinc-700">
        Product list will render here
      </div>
    </div>
  );
}
