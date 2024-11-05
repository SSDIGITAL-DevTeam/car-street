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
              <Link href={"/"}>
                <Logo />
              </Link>

              <div>
                <h4 className="font-medium">SHOWROOM ADDRESS</h4>
                <a
                  className="text-white/50"
                  href="https://maps.app.goo.gl/M18vu4fa44xYGk8N9"
                  target="_blank"
                >
                  2 Jln Kilang Barat, #03-01, <br /> Singapore 159346
                </a>
              </div>

              <div>
                <h4 className="font-medium uppercase">Opening Hours</h4>
                <span className="text-white/50">10 AM to 6:30 PM daily</span>
              </div>
            </div>

            <div>
              <h4 className="uppercase mb-4">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map((nav, index: number) => (
                  <li key={index} className="text-white/50">
                    <Link href={nav.path}>{nav.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="uppercase mb-4">Connect With us</h4>
              <ul className="flex gap-4 md:gap-8 items-center">
                <li>
                  <a
                    href="https://www.instagram.com/carstreet.singapore?igsh=YnBnbWhheDZ4MjMw"
                    target="_blank"
                  >
                    <FaInstagram className="w-10 h-10" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61563071715479&mibextid=ZbWKwL"
                    target="_blank"
                  >
                    <FaFacebook className="w-10 h-10" />
                  </a>
                </li>
                <li>
                  <a
                    href={
                      "https://wa.me/6598785558?text=Hello%20Car%20Street%20Singapore,%20I%20need%20assistance"
                    }
                    target="_blank"
                  >
                    <FaWhatsapp className="w-10 h-10" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
