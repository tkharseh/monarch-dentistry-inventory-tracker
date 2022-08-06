import React from "react";
import RandomImg from "../media/randomImg.svg";

function Instruction({ img, title, description, direction }) {
  return (
    <div>
      {direction === "left" && (
        <div class="grid grid-cols-2 gap-32">
          <div>
            <h1 class="text-4xl font-semibold pb-4">{title}</h1>
            <h1 class="text-2xl font-normal">{description}</h1>
          </div>
          <div class="grid place-content-center">
            <img src={RandomImg} alt="Home Illustration" />
          </div>
        </div>
      )}
      {direction === "right" && (
        <div class="grid grid-cols-2 gap-32">
          <div class="grid place-content-center">
            <img src={RandomImg} alt="Home Illustration" />
          </div>
          <div>
            <h1 class="text-4xl font-semibold pb-4">{title}</h1>
            <h1 class="text-2xl font-normal">{description}</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Instruction;
