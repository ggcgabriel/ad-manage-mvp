type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Project Detail</h1>
        <p className="mt-1 text-sm text-zinc-500">
          Project ID: <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs dark:bg-zinc-800">{id}</code>
        </p>
      </div>

      <div className="rounded-lg border border-dashed border-zinc-300 p-12 text-center text-sm text-zinc-400 dark:border-zinc-700">
        Generated images will render here
      </div>
    </div>
  );
}
