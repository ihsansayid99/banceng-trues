"use client";

import { BallWrapper } from "@/components";
import { dummyUser } from "@/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen items-center justify-center relative">
      <div className="logo-landing">
        <Image
          src="/banceng-trues-logo-big.png"
          width={250}
          height={250}
          alt="Banceng Trues"
        />
      </div>
      <BallWrapper data={dummyUser} />
    </main>
  );
}
