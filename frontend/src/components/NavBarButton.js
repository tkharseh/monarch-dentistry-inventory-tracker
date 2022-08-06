import React from "react";

export default function NavBarButton({ text }) {
  return (
    <div class="drop-shadow-md">
      <button class="text-sm bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
        {text}
      </button>
    </div>
  );
}
