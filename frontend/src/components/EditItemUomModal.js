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

export default function EditItemUomModal({
  selectedItem,
  tableId,
  setShowEditItemUomModal,
  open,
  onClose,
}) {
  const { id, dynamicId, name, uom, inventory, order } = selectedItem;
  const [newItemUom, setNewItemUom] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItem = {
      name: name,
      uom: newItemUom,
      inventory: inventory,
      order: order,
    };
    axios.patch(
      `https://monarch-dentistry-inventory-tracker.onrender.com/tables/${tableId}/${String(id)}`,
      updatedItem
    );
    setShowEditItemUomModal(false);
  };

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES}>
        <div class="flex justify-between pb-5">
          <h1 class="font-medium text-4xl">Edit Item UOM</h1>
          <button onClick={onClose}>
            <div class="hover:bg-neutral-200 rounded-md">
              <CloseIcon />
            </div>
          </button>
        </div>
        <h1 class="pb-3">
          Enter a new UOM for item <b>{dynamicId + ": " + name}</b>
        </h1>
        <form onSubmit={handleSubmit} class="flex place-content-center">
          <div class="pr-4">
            <input
              autoFocus
              onChange={(e) => {
                setNewItemUom(e.target.value);
              }}
              class="border border-black text-center p-2 w-72"
              min="0"
            ></input>
          </div>
          <button class="border border-black p-2 rounded-md hover:bg-neutral-200">
            SAVE
          </button>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
}
