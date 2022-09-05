import React from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import QrCodeIcon from "@mui/icons-material/QrCode";
import AddItemModal from "./AddItemModal.js";
import EditTableModal from "./EditTableModal";
import DeleteTableModal from "./DeleteTableModal";
import QrCodeModal from "./QrCodeModal";
import { useState } from "react";

export default function TableIcons({
  tableName,
  tableNum,
  tableRows,
  tableId,
}) {
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [showEditTableModal, setShowEditTableModal] = useState(false);
  const [showQrCodeModal, setShowQrCodeModal] = useState(false);
  const [showDeleteTableModal, setShowDeleteTableModal] = useState(false);
  return (
    <div>
      <QrCodeModal
        tableNum={tableNum}
        tableName={tableName}
        tableRows={tableRows}
        tableId={tableId}
        setShowQrCodeModal={setShowQrCodeModal}
        open={showQrCodeModal}
        onClose={() => {
          setShowQrCodeModal(false);
        }}
      />
      <AddItemModal
        tableName={tableName}
        tableId={tableId}
        showAddItemModal={showAddItemModal}
        setShowAddItemModal={setShowAddItemModal}
        open={showAddItemModal}
        onClose={() => {
          setShowAddItemModal(false);
        }}
      />
      <EditTableModal
        tableName={tableName}
        tableId={tableId}
        showEditTableModal={showEditTableModal}
        setShowEditTableModal={setShowEditTableModal}
        open={showEditTableModal}
        onClose={() => {
          setShowEditTableModal(false);
        }}
      />
      <DeleteTableModal
        tableName={tableName}
        tableId={tableId}
        showDeleteTableModal={showDeleteTableModal}
        setShowDeleteTableModal={setShowDeleteTableModal}
        open={showDeleteTableModal}
        onClose={() => {
          setShowDeleteTableModal(false);
        }}
      />
      <div class="flex pr-5">
        <button
          class="p-3 hover:bg-gray-200"
          onClick={() => setShowAddItemModal(true)}
        >
          <AddIcon />
        </button>
        <button
          class="p-3 hover:bg-gray-200"
          onClick={() => setShowEditTableModal(true)}
        >
          <EditIcon />
        </button>
        <button
          class="p-3 hover:bg-gray-200"
          onClick={() => setShowQrCodeModal(true)}
        >
          <QrCodeIcon />
        </button>
        <button
          class="p-3 hover:bg-gray-200"
          onClick={() => setShowDeleteTableModal(true)}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}
