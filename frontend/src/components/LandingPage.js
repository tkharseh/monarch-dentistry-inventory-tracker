import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeIlustration from "../media/homeIllustration.svg";

export default function LandingPage() {
  return (
    <div class="grid grid-cols-2 gap-4">
      <div>
        <h1 class="text-7xl font-semibold">Inventory management made easy.</h1>
        <h1 class="text-2xl font-normal pt-12">
          Keep track of all your inventory and orders without breaking a sweat!
        </h1>
        <div class="flex">
          <div class="pt-12">
            <a
              href="/login"
              class="text-2xl text-white bg-blue-500 p-4 rounded-lg flex items-center hover:bg-blue-600"
            >
              <h1 class="pr-4">Login</h1> <ArrowForwardIcon />
            </a>
          </div>
          <div class="pt-12 pl-12">
            <a
              href="/contact"
              class="text-2xl outline p-4 rounded-lg flex items-center hover:bg-slate-100"
            >
              <h1 class="pr-4">Book a demo</h1> <ArrowForwardIcon />
            </a>
          </div>
        </div>
      </div>
      <div class="grid place-content-center">
        <img src={HomeIlustration} alt="Home Illustration" />
      </div>
    </div>
  );
}
