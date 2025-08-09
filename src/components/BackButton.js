import Link from "next/link";

export default function BackButton() {
  return (
    <div className="p-4">
      <Link
        href="/"
        className="inline-block px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
