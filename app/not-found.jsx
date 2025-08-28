import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-black text-center px-6">
      {/* 404 Illustration */}
      <div className="max-w-md w-full">
        <Image
          src="/notfound/404-error-img.png" // <-- replace with your uploaded image path
          alt="404 Page Not Found"
          width={600}
          height={400}
          className="mx-auto"
          priority
        />
      </div>

      {/* Text */}
      <p className="mt-6 text-2xl md:text-3xl font-bold text-white">
        Oops! <span className="text-lime-400">page not found</span>
      </p>
      <p className="mt-2 text-gray-400">
        The page you are looking for does not exist.
      </p>

      {/* Button */}
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-lime-400 text-black font-semibold shadow-lg hover:bg-lime-500 transition"
        >
          Back To Home <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
