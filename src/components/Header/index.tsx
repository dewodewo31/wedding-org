"use client";

import React from "react";
import Logo from "@/app/assets/images/logo.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
  hasPadding?: boolean
}

function Header({ hasPadding }: Props) {
  const pathName = usePathname();
  const mainMenus = [
    { key: "homepage", label: "Home", slug: "/" },
    { key: "category", label: "Category", slug: "/categories" },
    { key: "packages", label: "Packages", slug: "/packages" },
    { key: "testimonials", label: "Testimonials", slug: "/testimonials" },
  ];

  return (
    <header className={["flex justify-between max-w-[1200px] w-full mx-auto items-center", hasPadding ? "p-5 bg-white rounded-2xl z-20" : ""].join(" pt-8 -mb-8 ")}>
      <span className="flex gap-x-3 items-center">
        <span className="text-color2">
          <Logo />
        </span>
        <span className="text-2xl font-bold cursor-default">WeddingOrg</span>
      </span>

      {/* Navigation Menu */}
      <ul className="flex gap-x-10">
        {mainMenus.map((menu) => {
          let isActive = false;
          if (!!menu.slug) {
            if(
              pathName === menu.slug || (pathName.startsWith(menu.slug) && pathName.charAt(menu.slug.length) === "/")
            )
            isActive = true
          }

          return (
            <li key={menu.key}>
              <Link
                href={menu.slug}
                className={["hover:underline", isActive ? "font-bold" : ""].join(" ")}
                aria-current={isActive ? "true" : "false"}
              >
                {menu.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Contact Buttons */}
      <ul className="flex gap-x-4">
        <li>
          <Link
            href="/contacts"
            className="border border-dark1 px-5 py-3 rounded-full font-semibold"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            href="/bookings"
            className="bg-color2 text-light1 px-5 py-3 rounded-full font-semibold"
          >
            My Bookings
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
