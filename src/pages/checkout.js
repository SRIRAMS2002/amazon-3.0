import Header from "@/components/Header";
import Image from "next/legacy/image";
import React from "react";

function checkout() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* LEFT */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            alt=""
            objectFit="contain"
            height={280}
            width={1080}
            className="w-100 h-100"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">Your Cart</h1>
          </div>
        </div>

        {/* RIGHT */}
      </main>
    </div>
  );
}

export default checkout;
