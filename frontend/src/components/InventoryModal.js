import ReactDom from "react-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import items from "../table_data/items";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "25px",
  zIndex: 1000,
  borderRadius: "15px",
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

export default function InventoryModal({
  open,
  onClose,
  setShowInventoryModal,
  id,
  customId,
  order,
  name,
  uom,
}) {
  const [inventory, setInventory] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(order);
    const item = { customId, inventory, order, name, uom };

    fetch("http://localhost:3000/items/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    setShowInventoryModal(false);
  };

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES}>
        <div class="flex justify-between pb-5">
          <h1 class="font-medium text-4xl">{name}</h1>
          <button onClick={onClose}>
            <div class="hover:bg-neutral-200	rounded-md">
              <CloseIcon />
            </div>
          </button>
        </div>
        <h1 class="pb-3">
          To update the inventory for item {customId}: {name}, enter a number
          below and click save.
        </h1>
        <form onSubmit={handleSubmit} class="flex place-content-center">
          <div class="pr-4">
            <input
              type="number"
              autoFocus
              onChange={(e) => {
                setInventory(e.target.value);
              }}
              class="border border-black text-center p-2 w-24"
              placeholder={items.items[id - 1].inventory}
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
