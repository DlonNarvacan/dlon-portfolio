"use client";

import Image from "next/image";
import Navigation from "../components/navbar.js"; // Updated import path
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navigation currentPath={router.pathname} />
      <div className="flex flex-col items-center">
        <Image src="/dlon-logo.png" alt="dlon logo" width="128" height="128" />
        <h1 className="text-4xl font-bold">
          Arnold Narvacan | Website Portfolio
        </h1>
      </div>
    </main>
  );
}
