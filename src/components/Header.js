import Image from "next/legacy/image";
import React from "react";

import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

function Header() {
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        {/* Left */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
          onClick={() => router.push('/')}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search */}
        <div
          className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer 
         bg-yellow-400 hover:bg-yellow-500"
        >
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <MagnifyingGlassIcon className="h-12 p-4 " />
        </div>
        {/* Right */}
        <div className="text-white flex space-x-6 text-xs items-center mx-6 whitespace-nowrap">
          <div
            className="link"
            onClick={!session ? () => signIn() : () => signOut()}
          >
            {session ? (<p>Hello {session.user.name}</p>) : (<p>SignIn</p>)}
            <p className="font-extrabold md:text-sm">Accounts & Lists</p>
          </div>
          <div className="link">
            <p>Accounts</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div onClick={() => router.push('/checkout')} className="link relative flex items-center">
            <span
              className="absolute top-0 right-0 sm:right-10 md:right-11 h-4 w-4 
            bg-yellow-400 rounded-full text-center text-black font-bold"
            >
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden sm:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <Bars3BottomLeftIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
