import Link from "next/link";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="min-h-100 flex flex-col justify-center items-center">
      <p className="font-playfair tracking-wider text-3xl sm:text-4xl md:text-5xl mb-12 text-center py-4 px-8">
        This <span className="italic">{slug.split("-").join(" ")}</span> page is
        just for demo purpose of the footer link.
      </p>
      <Link
        className="font-sans bg-(--accent) text-white py-5 px-12 text-[0.95rem] tracking-[0.08em] uppercase transition-all duration-300 font-medium relative overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-90 before:from-transparent before:via-[rgba(255,255,255,0.2)] before:to-transparent before:transition-[left] before:duration-500 hover:bg-(--accent-light) hover:-translate-y-0.5 hover:shadow-[0_8px_20px_var(--shadow)] hover:before:left-full"
        href={"/"}
      >
        Back to Home
      </Link>
    </div>
  );
}
