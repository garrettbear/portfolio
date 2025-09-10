import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-agrandir mb-4">Page Not Found</h1>
        <p className="text-xl text-white/80 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors group"
        >
          <span className="font-inter group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          <span className="ml-2">Back to home</span>
        </Link>
      </div>
    </div>
  );
}
