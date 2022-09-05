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

export default function EditItemInventoryModal({
  selectedItem,
  tableId,
  setShowEditItemInventoryModal,
  open,
  onClose,
}) {
  const { id, dynamicId, name, uom, inventory, order } = selectedItem;
  const [newItemInventory, setNewItemInventory] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItem = {
      name: name,
      uom: uom,
      inventory: newItemInventory,
      order: order,
    };
    axios.patch(
      `https://inventori-project.herokuapp.com/tables/${tableId}/${String(id)}`,
      updatedItem
    );
    setShowEditItemInventoryModal(false);
  };

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES}>
        <div class="flex justify-between pb-5">
          <h1 class="font-medium text-4xl">Edit Item Inventory</h1>
          <button onClick={onClose}>
            <div class="hover:bg-neutral-200	rounded-md">
              <CloseIcon />
            </div>
          </button>
        </div>
        <h1 class="pb-3">
          Enter a new inventory value for item <b>{dynamicId + ": " + name}</b>
        </h1>
        <form onSubmit={handleSubmit} class="flex place-content-center">
          <div class="pr-4">
            <input
              type="number"
              autoFocus
              onChange={(e) => {
                setNewItemInventory(e.target.value);
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
