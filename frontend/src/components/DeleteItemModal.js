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

export default function DeleteItemModal({
  selectedItem,
  selectedTableId,
  setShowDeleteItemModal,
  open,
  onClose,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.delete(`https://inventori-project.herokuapp.com/tables/${selectedTableId}/${String(selectedItem.id)}`);
    setShowDeleteItemModal(false);
  };

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES}>
        <div class="flex justify-between pb-5">
          <h1 class="font-medium text-4xl">Delete Item</h1>
          <button onClick={onClose}>
            <div class="hover:bg-neutral-200	rounded-md">
              <CloseIcon />
            </div>
          </button>
        </div>
        <h1 class="pb-3">
          Are you sure you want to delete item <b>{selectedItem.dynamicId + ': '+ selectedItem.name}</b>
        </h1>
        <form onSubmit={handleSubmit} class="flex place-content-center">
          <button class="border border-black p-2 rounded-md hover:bg-neutral-200">
            DELETE
          </button>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
}
