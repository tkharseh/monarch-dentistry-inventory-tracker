import ReactDom from "react-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

export default function QrCodeModal({
  tableName,
  tableNum,
  tableId,
  setShowQrCodeModal,
  open,
  onClose,
}) {
  const [tableRows, setTableRows] = useState([]);
  const [checkedState, setCheckedState] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSubmit = () => {
    setShowQrCodeModal(false);
  };

  useEffect(() => {
    const checked = new Array(tableRows.length).fill(true);
    setCheckedState(checked);
  }, [tableRows.length]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://monarch-dentistry-inventory-tracker.onrender.com/tables/${tableId}`
        );
        const rows = result.data;
        setTableRows(rows);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [tableRows]);

  useEffect(() => {
    let checkedItems = [];
    for (let i = 0; i < checkedState.length; i++) {
      if (checkedState[i] === true) {
        checkedItems.push(tableRows[i]);
      }
    }
    setSelectedItems(checkedItems);
  }, [tableRows, checkedState]);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const handleSelectDeselectAll = () => {
    const count = checkedState.filter(Boolean).length;
    count < checkedState.length
      ? setCheckedState(new Array(tableRows.length).fill(true))
      : setCheckedState(new Array(tableRows.length).fill(false));
  };

  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES}>
        <div class="flex justify-between pb-5">
          <h1 class="font-medium text-4xl">Download the QR codes</h1>
          <button onClick={onClose}>
            <div class="hover:bg-neutral-200	rounded-md">
              <CloseIcon />
            </div>
          </button>
        </div>
        <h1 class="pb-3">
          Check off the items you would like to download a QR code for from
          table "<b>{tableName}</b>"
        </h1>
        <form onSubmit={handleSubmit} class="">
          <div class="pr-4">
            {checkedState.filter(Boolean).length < checkedState.length &&
              tableRows.length > 0 && (
                <div class="grid place-content-center">
                  <button
                    class="border border-black p-2 rounded-md hover:bg-neutral-200"
                    onClick={handleSelectDeselectAll}
                  >
                    SELECT ALL
                  </button>
                </div>
              )}
            {checkedState.filter(Boolean).length === checkedState.length &&
              tableRows.length > 0 && (
                <div class="grid place-content-center">
                  <button
                    class="border border-black p-2 rounded-md hover:bg-neutral-200"
                    onClick={handleSelectDeselectAll}
                  >
                    DESELECT ALL
                  </button>
                </div>
              )}
            <ul>
              {tableRows.map((row, index) => {
                return (
                  <li class="">
                    <div class="flex items-center pl-3">
                      <input
                        type="checkbox"
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index)}
                        class="w-4 h-4 "
                      />
                      <label class="py-3 ml-2 w-full text-sm font-medium ">
                        {tableNum + "." + (index + 1) + ": " + row.name}
                      </label>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div class="grid place-content-center">
            <Link
              onClick={handleSubmit}
              // target="_blank"
              to={"qr/" + tableId}
              state={{ selectedItems: selectedItems, tableName: tableName }}
              class="border border-black p-2 rounded-md hover:bg-neutral-200"
            >
              NEXT
            </Link>
          </div>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
}
