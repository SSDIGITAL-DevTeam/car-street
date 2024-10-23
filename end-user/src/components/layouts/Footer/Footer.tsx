import React from "react";
import Logo from "@/components/partials/Logo/Logo";
import { navLinks } from "@/constant/Navlink";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-secondary py-8 md:py-20 text-white">
      <div className="lg:w-3/4 mx-auto">
        <div className="container p-4 md:p-8">
          <div className="flex flex-col lg:flex-row gap-y-8 justify-between">
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <Logo />

              <div>
                <h4 className="font-medium">SHOWROOM ADDRESS</h4>
                <a className="text-white/50">
                  2 Jln Kilang Barat, #03-01, <br /> Singapore 159346
                </a>
              </div>

              <div>
                <h4 className="font-medium">Opening Hours</h4>
                <span className="text-white/50">10 AM to 6:30 PM daily</span>
              </div>
            </div>

            <div>
              <h3 className="uppercase mb-4">Navigation</h3>
              <ul className="space-y-4">
                {navLinks.map((nav, index: number) => (
                  <li key={index} className="text-white/50">
                    <Link href={nav.path}>{nav.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="uppercase mb-4">Connect With us</h3>
              <ul className="flex gap-4 md:gap-8 items-center">
                <li>
                  <FaInstagram className="w-10 h-10" />
                </li>
                <li>
                  <FaFacebook className="w-10 h-10" />
                </li>
                <li>
                  <FaWhatsapp className="w-10 h-10" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
