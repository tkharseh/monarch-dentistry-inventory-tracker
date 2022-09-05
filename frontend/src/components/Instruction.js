import React from "react";
import RandomImg from "../media/randomImg.svg";

function Instruction({ imgStr, title, description, type, direction }) {
  return (
    <div>
      {direction === "left" && type !== "phone" && (
        <div class="flex items-center">
          <div class="px-12 w-1/2">
            <h1 class="text-4xl font-semibold pb-4">{title}</h1>
            <h1 class="text-2xl font-normal">{description}</h1>
          </div>
          <div class="grid place-content-center px-12 w-3/4">
            <img
              src={require(`../media/${imgStr}.gif`)}
              alt="Home Illustration"
            />
          </div>
        </div>
      )}
      {direction === "right" && type !== "phone" && (
        <div class="flex items-center">
          <div class="grid place-content-center px-12 w-3/4">
            <img
              src={require(`../media/${imgStr}.gif`)}
              alt="Home Illustration"
            />
          </div>
          <div class="px-12 w-1/2">
            <h1 class="text-4xl font-semibold pb-4">{title}</h1>
            <h1 class="text-2xl font-normal">{description}</h1>
          </div>
        </div>
      )}
      {direction === "right" && type === "phone" && (
        <div class="flex items-center">
          <div class="grid place-content-center px-12">
            <img
              src={require(`../media/${imgStr}.gif`)}
              alt="Home Illustration"
            />
          </div>
          <div class="px-12">
            <h1 class="text-4xl font-semibold pb-4">{title}</h1>
            <h1 class="text-2xl font-normal">{description}</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Instruction;
