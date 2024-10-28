import React from "react";
import { Button } from "@nextui-org/react";
import { FaLongArrowAltRight, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function HeaderHero() {
  return (
    <div>
      <div className="container p-4 md:p-8">
        <div className="py-8">
          <div className="border-b-5 lg:border-b-8 border-primary max-w-24 lg:max-w-56"></div>

          <div className="space-y-4">
            <h1 className="leading-snug  md:max-w-2xl font-extrabold text-black/85">
              BRING HOME <br /> YOUR DREAM CAR
            </h1>

            <p className="max-w-lg lg:text-xl md:text-lg text-gray-400 leading-snug capitalize tracking-wide">
              CarStreet - Your Trusted New Car Dealership in Singapore! Come by
              For a cup of coffee on us, while our friendly advisors help you
              through your car-buying journey.{" "}
            </p>

            <div className="pt-6">
              <Button
                as={Link}
                href="#"
                radius="full"
                color="primary"
                size="lg"
                endContent={<FaLongArrowAltRight className="text-white" />}
              >
                BOOK A TEST DRIVE
              </Button>
            </div>
          </div>

          <div className="space-y-2 mt-8 lg:mt-12">
            <div className="flex items-center gap-2">
              <FaInstagram className="text-primary w-8 h-8 " />
              <FaFacebook className="text-primary w-8 h-8 " />
            </div>

            <p className="uppercase md:text-lg lg:text-lg font-bold">
              “with flexible financing schemes”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
