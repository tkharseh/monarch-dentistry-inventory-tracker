import ReactDom from "react-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

import axios from "axios";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "25px",
  zIndex: 1000,
  borderRadius: "15px",
  maxHeight: "75%",
  overflow: "auto",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function AddItemModal({
  tableName,
  tableId,
  setShowAddItemModal,
  open,
  onClose,
}) {
  const [itemName, setItemName] = useState("N/A");
  const [itemUom, setItemUom] = useState("N/A");
  const [itemInventory, setItemInventory] = useState(0);
  const [itemOrder, setItemOrder] = useState(0);
  const itemData = {
    name: itemName,
    uom: itemUom,
    inventory: itemInventory,
    order: itemOrder,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://inventori-project.herokuapp.com/tables/${tableId}`, itemData);
    setShowAddItemModal(false);
  };

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES}>
        <div class="flex justify-between pb-5">
          <h1 class="font-medium text-4xl">Add Item</h1>
          <button onClick={onClose}>
            <div class="hover:bg-neutral-200	rounded-md">
              <CloseIcon />
            </div>
          </button>
        </div>
        <h1 class="pb-3">
          Enter the information regarding the item you want to add to table{" "}
          "<b>{tableName}</b>"
        </h1>
        <form onSubmit={handleSubmit} class="">
          <div class="flex justify-center">
            <div class="pr-4">
              <div class="flex items-center pb-5">
                <h1>Name:</h1>
                <div class="px-3">
                  <input
                    autoFocus
                    onChange={(e) => {
                      setItemName(e.target.value);
                    }}
                    style={{width: '500px'}}
                    class="border border-black text-center p-2"
                    min="0"
                  ></input>
                </div>
              </div>
              <div class="flex items-center">
                <div class="flex items-center">
                  <h1>UOM:</h1>
                  <div class="px-3">
                    <input
                      autoFocus
                      onChange={(e) => {
                        setItemUom(e.target.value);
                      }}
                      class="border border-black text-center p-2 w-36"
                      min="0"
                    ></input>
                  </div>
                </div>
                <div class="flex items-center">
                  <h1>Inventory:</h1>
                  <div class="px-3">
                    <input
                      type="number"
                      autoFocus
                      onChange={(e) => {
                        setItemInventory(Number(e.target.value));
                      }}
                      class="border border-black text-center p-2 w-24"
                      min="0"
                    ></input>
                  </div>
                </div>
                <div class="flex items-center">
                  <h1>Order:</h1>
                  <div class="px-3">
                    <input
                      type="number"
                      autoFocus
                      onChange={(e) => {
                        setItemOrder(Number(e.target.value));
                      }}
                      class="border border-black text-center p-2 w-24"
                      min="0"
                    ></input>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
          <div class="flex justify-center pt-5">
            <button class="border border-black p-2 rounded-md hover:bg-neutral-200">
              ADD ITEM
            </button>
          </div>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
}
