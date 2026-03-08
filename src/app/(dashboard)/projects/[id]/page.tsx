type Props = { params: Promise<{ id: string }> };

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  return (
    <div>
      <h1>Project</h1>
      <p>ID: {id}</p>
    </div>
  );
}
