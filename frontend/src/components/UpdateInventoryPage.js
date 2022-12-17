import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UpdateInventoryNavBar from "./UpdateInventoryNavBar";
import { TitleContainer } from "./styles/TitleContainer.styles";
import Title from "./Title";
import { PASSCODE } from "./SECRETS";
import Add from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function UpdateInventoryPage() {
  const { tableId, itemId } = useParams();
  const [item, setItem] = useState({});
  const [auth, setAuth] = useState(false);
  const [submittedCode, setSubmittedCode] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [updatedInventory, setUpdatedInventory] = useState(0);
  const [updatedOrder, setUpdatedOrder] = useState(0);
  const [option, setOption] = useState("");

  const updatedItem = {
    name: item.name,
    uom: item.uom,
    inventory: updatedInventory,
    order: updatedOrder,
  };

  useEffect(() => {
    setUpdatedInventory(item.inventory);
    setUpdatedOrder(item.order);
  }, [item]);

  useEffect(() => {
    if (hasSubmitted && submittedCode === PASSCODE) {
      axios.patch(
        `https://monarch-dentistry-inventory-tracker.onrender.com/tables/${tableId}/${itemId}`,
        updatedItem
      );
    }
  }, [auth, hasSubmitted, submittedCode]);

  useEffect(() => {
    console.log(submittedCode);
    setHasSubmitted(false);
    if (submittedCode === PASSCODE) {
      setAuth(true);
    }
  }, [submittedCode]);

  useEffect(() => {
    async function fetchData() {
      try {
        const itemData = await axios.get(
          `https://monarch-dentistry-inventory-tracker.onrender.com/tables/${tableId}/${itemId}`
        );
        setItem(itemData.data[0]);
      } catch (err) {}
    }
    fetchData();
  }, []);

  return (
    <div>
      {Object.keys(item).length === 0 && (
        <div
          class="grid place-items-center"
          style={{ height: "92vh" }}
          role="status"
        >
          <svg
            aria-hidden="true"
            class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-500"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      )}
      {Object.keys(item).length !== 0 && (
        <div>
          <UpdateInventoryNavBar />
          <div class="px-5">
            <div class="grid place-content-center pt-9">
              <h1 class="text-black text-3xl font-medium py-2 rounded w-auto">
                Update Item "{item.name}"
              </h1>
            </div>
            <div class="flex justify-center px-">
              <div class="flex justify-center pt-5 px-4">
                <button
                  onClick={() => setOption("inventory")}
                  class="border border-black p-2 rounded-md hover:bg-neutral-200"
                >
                  Update Inventory
                </button>
              </div>
              <div
                onClick={() => setOption("orders")}
                class="flex justify-center pt-5 px-4"
              >
                <button class="border border-black p-2 rounded-md hover:bg-neutral-200">
                  Update Orders
                </button>
              </div>
            </div>
            {option === "inventory" && (
              <div>
                {" "}
                <div class="grid place-content-center">
                  <h1 class="pt-3 text-center">
                    Click + or - to update the inventory of item "{item.name}".
                    Then enter the passcode below and click CONFIRM
                  </h1>
                </div>
                <div class="grid place-content-center">
                  <div class="flex items-center">
                    <button
                      onClick={() => {
                        setUpdatedInventory(Number(updatedInventory) - 1);
                      }}
                      disabled={updatedInventory <= 0}
                      class="p-0 w-12 h-12 bg-red-500 rounded-full hover:bg-red-600 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
                    >
                      <RemoveIcon sx={{ color: "white" }} />
                    </button>
                    <h1 class="p-5 text-center text-3xl">{updatedInventory}</h1>
                    <button
                      onClick={() => {
                        setUpdatedInventory(Number(updatedInventory) + 1);
                      }}
                      class="p-0 w-12 h-12 bg-green-500 rounded-full hover:bg-green-600 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
                    >
                      <Add sx={{ color: "white" }} />
                    </button>
                  </div>
                </div>
                <div class="grid place-content-center pt-5">
                  <input
                    onChange={(e) => {
                      setSubmittedCode(e.target.value);
                    }}
                    type="number"
                    type="password"
                    name="password"
                    class="px-4 py-3 w-full rounded-md border border-[f0f0f0] focus:border-gray-500 focus:bg-white focus:ring-0 text-sm text-center"
                  />
                </div>
                <div class="grid place-content-center pt-5">
                  {
                    <button
                      disabled={auth && hasSubmitted}
                      onClick={() => setHasSubmitted(true)}
                      class="border border-black p-2 rounded-md hover:bg-neutral-200"
                    >
                      CONFIRM
                    </button>
                  }
                </div>
              </div>
            )}
            {option === "orders" && (
              <div>
                {" "}
                <div class="grid place-content-center">
                  <h1 class="pt-3 text-center">
                    Click + or - to update the orders of item "{item.name}".
                    Then enter the passcode below and click CONFIRM
                  </h1>
                </div>
                <div class="grid place-content-center">
                  <div class="flex items-center">
                    <button
                      onClick={() => {
                        setUpdatedOrder(Number(updatedOrder) - 1);
                      }}
                      disabled={updatedOrder <= 0}
                      class="p-0 w-12 h-12 bg-red-500 rounded-full hover:bg-red-600 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
                    >
                      <RemoveIcon sx={{ color: "white" }} />
                    </button>
                    <h1 class="p-5 text-center text-3xl">{updatedOrder}</h1>
                    <button
                      onClick={() => {
                        setUpdatedOrder(Number(updatedOrder) + 1);
                      }}
                      class="p-0 w-12 h-12 bg-green-500 rounded-full hover:bg-green-600 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
                    >
                      <Add sx={{ color: "white" }} />
                    </button>
                  </div>
                </div>
                <div class="grid place-content-center pt-5">
                  <input
                    onChange={(e) => {
                      setSubmittedCode(e.target.value);
                    }}
                    type="number"
                    type="password"
                    name="password"
                    class="px-4 py-3 w-full rounded-md border border-[f0f0f0] focus:border-gray-500 focus:bg-white focus:ring-0 text-sm text-center"
                  />
                </div>
                <div class="grid place-content-center pt-5">
                  {
                    <button
                      disabled={auth && hasSubmitted}
                      onClick={() => setHasSubmitted(true)}
                      class="border border-black p-2 rounded-md hover:bg-neutral-200"
                    >
                      CONFIRM
                    </button>
                  }
                </div>
              </div>
            )}
            {!auth && hasSubmitted && (
              <div class="grid place-content-center">
                <h1 class="pt-3 text-center text-red-600">Incorrect code</h1>
              </div>
            )}
            {auth && hasSubmitted && (
              <div class="grid place-content-center">
                <h1 class="pt-3 text-center text-green-600">
                  Item has been updated!
                </h1>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
