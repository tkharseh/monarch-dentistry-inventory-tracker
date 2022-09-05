import React from "react";
import HomeNavBar from "./HomeNavBar";
import ContacUsIllustration from "../media/contactUsIllustration.svg";

export default function ContactPage() {
  return (
    <div>
      <HomeNavBar currentPage="Contact" class="absolute" />
      <div
        class="grid place-items-center pl-9 pr-9 "
        style={{ height: "92vh" }}
      >
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
  );
}
