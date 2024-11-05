"use client";

import React from "react";
import { Image, Input, Textarea } from "@nextui-org/react";
import hero from "@/assets/images/hero-contact.webp";
import { FiMapPin } from "react-icons/fi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function Contact() {
  return (
    <div>
      <header>
        <div className="relative">
          <Image
            src={hero.src}
            alt="hero about"
            radius="none"
            removeWrapper
            className="w-full object-cover"
          />

          <div className="container p-4 md:p-8 absolute inset-0 flex flex-col  justify-center z-20">
            <h1 className="text-2xl font-semibold uppercase leading-snug sm:text-5xl sm:leading-snug lg:text-7xl lg:leading-tight text-white">
              Contact Carstreet <br /> Today!
            </h1>
          </div>
        </div>
      </header>

      <section className="bg-[#f5f5f5] py-8 md:p-16 lg:py-24">
        <div className="container p-4 md:p-8">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-24 items-center">
            <div className="lg:w-2/5">
              <div className="flex flex-col gap-4 md:gap-8">
                <h3 className="font-bold">Get In Touch</h3>
                <p className="md:text-lg max-w-md text-black/85 tracking-wide">
                  Questions, comments, or suggestions? Simply fill in the form
                  and we’ll be in touch shortly.
                </p>

                <div className="flex flex-col gap-2">
                  <a
                    href="https://maps.app.goo.gl/M18vu4fa44xYGk8N9"
                    target="_blank"
                    className="flex items-start gap-2"
                  >
                    <FiMapPin className="text-primary w-6 h-6" />

                    <span className="font-bold md:text-lg max-w-xs text-black/85">
                      2 Jln Kilang Barat, #03-01, Singapore 159346
                    </span>
                  </a>

                  <a
                    href="tel:+6598785558"
                    target="_blank"
                    className="flex items-start gap-2"
                  >
                    <MdOutlinePhoneInTalk className="text-primary w-6 h-6" />

                    <span className="font-bold md:text-lg max-w-xs text-black/85">
                      +65 98785558
                    </span>
                  </a>

                  <a
                    href="mailto:contact@carstreet.com.sg"
                    target="_blank"
                    className="flex items-start gap-2"
                  >
                    <IoMailOutline className="text-primary w-6 h-6" />

                    <span className="font-bold md:text-lg max-w-xs text-black/85">
                      contact@carstreet.com.sg
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-3/5 w-full">
              <div className="bg-white border-2 rounded-lg p-4 md:p-8">
                <form action="" className="">
                  <div className="space-y-4">
                    <div className="flex flex-col lg:flex-row justify-between gap-4">
                      <Input
                        size="sm"
                        type="text"
                        label="First Name"
                        name="first_name"
                        radius="sm"
                        variant="bordered"
                      />
                      <Input
                        size="sm"
                        label="Last Name"
                        name="last_name"
                        radius="sm"
                        variant="bordered"
                      />
                    </div>

                    <Input
                      size="sm"
                      type="email"
                      label="Email"
                      name="email"
                      radius="sm"
                      variant="bordered"
                    />

                    <PhoneInput
                      required
                      name="phone"
                      inputProps={{
                        style: {
                          width: "100%",
                          backgroundColor: "transparent",
                          height: "42px",
                          fontSize: "14px",
                        },
                      }}
                      className="rounded-md border border-[#DCDCDC]  w-full"
                      // inputStyle={{
                      //   backgroundColor: "transparent",
                      // }}
                      countrySelectorStyleProps={{
                        className: "bg-transparent border ",
                        buttonStyle: {
                          backgroundColor: "transparent",
                          borderStyle: "solid",
                          border: "10px",
                          height: "38px",
                          padding: "0 4px",
                        },
                      }}
                      inputClassName="border border-primary rounded-md"
                      defaultCountry="sg"
                    />

                    <Textarea
                      label="Message"
                      name="email"
                      radius="sm"
                      variant="bordered"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63821.021080713064!2d103.7358634!3d1.2857181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1b2f3a55c3d7%3A0x72f086c5b20a1bc3!2sCarStreet%20Singapore!5e0!3m2!1sen!2sen!4v1730800234361!5m2!1sen!2sen" width="600" height="450"   allowFullScreen  loading="lazy"  ></iframe> */}

      <section className=" ">
        <div className="container p-4 md:p-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63821.021080713064!2d103.7358634!3d1.2857181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1b2f3a55c3d7%3A0x72f086c5b20a1bc3!2sCarStreet%20Singapore!5e0!3m2!1sen!2sen!4v1730800234361!5m2!1sen!2sen"
            className="lg:h-[450px] w-full"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
