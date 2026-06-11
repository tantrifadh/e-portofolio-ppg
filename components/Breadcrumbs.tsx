"use client";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((x) => x);

  return (
    <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
      <Link href="/" className="hover:text-blue-600 flex items-center gap-1">
        <Home size={16} /> Beranda
      </Link>
      {paths.map((p, i) => (
        <div key={i} className="flex items-center gap-2 capitalize">
          <ChevronRight size={14} />
          <span className={i === paths.length - 1 ? "text-blue-700 font-bold" : ""}>
            {p.replace("-", " ")}
          </span>
        </div>
      ))}
    </nav>
  );
}