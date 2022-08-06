import React from "react";
import HomeNavBar from "./HomeNavBar";
import ContacUsIllustration from "../media/contactUsIllustration.svg";

export default function ContactPage() {
  return (
    <div>
      <HomeNavBar currentPage="Contact" />
      <div class="p-16">
        <div class="container">
          <div class="flex flex-wrap lg:justify-between -mx-4 items-center">
            <div class="w-full lg:w-1/2 xl:w-6/12 px-4">
              <div class="max-w-[570px] mb-12 lg:mb-0">
                <h2
                  class="
                  text-dark
                  mb-6
                  uppercase
                  font-bold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  "
                >
                  CONTACT
                </h2>
                <p class="text-base text-body-color leading-relaxed mb-4">
                  Need to get in touch? Please fill out and submit the form with
                  your inquiry! You will be contacted within 1-2 business days.
                </p>
                <p class="text-base text-body-color leading-relaxed mb-9">
                  <b>
                    If you would like to book a demo, please include this in
                    your message.
                  </b>
                </p>
                <img src={ContacUsIllustration} alt="Contact Us Illustration" />
              </div>
            </div>
            <div class="w-full lg:w-1/2 xl:w-5/12 px-4">
              <div class="bg-white relative rounded-lg p-8 border border-black sm:p-12 shadow-2xl">
                <form action="https://formspree.io/f/xwkyjrzo" method="POST">
                  <h1 class="text-lg font-bold mb-6">Contact</h1>
                  <div class="mb-6">
                    <input
                      name="name"
                      placeholder="Your Name"
                      class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      name="phone"
                      placeholder="Your Phone"
                      class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    />
                  </div>
                  <div class="mb-6">
                    <textarea
                      rows="6"
                      name="message"
                      placeholder="Your Message"
                      class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      class="
                        w-full
                        text-white
                        bg-primary
                        rounded
                        border border-primary
                        p-3
                        transition
                        bg-blue-500
                        hover:bg-blue-600
                        "
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
