import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import GoodStatus from "./GoodStatus";
import BadStatus from "./BadStatus";
import InventoryModal from "./InventoryModal";
import OrderModal from "./OrderModal";
import TableIcons from "./TableIcons";
import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";
import DeleteItemModal from "./DeleteItemModal";
import EditItemNameModal from "./EditItemNameModal";
import EditItemUomModal from "./EditItemUomModal";
import EditItemInventoryModal from "./EditItemInventoryModal";
import EditItemOrderModal from "./EditItemOrderModal";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export default function Tables({
  type,
  table_id,
  table_num,
  table_title,
  rows,
}) {
  const [selectedItem, setSelectedItem] = useState({});
  const [showEditItemOrderModal, setShowEditItemOrderModal] = useState(false);
  const [showEditItemInventoryModal, setShowEditItemInventoryModal] =
    useState(false);
  const [showEditItemUomModal, setShowEditItemUomModal] = useState(false);
  const [showEditItemNameModal, setShowEditItemNameModal] = useState(false);
  const [showDeleteItemModal, setShowDeleteItemModal] = useState(false);
  return (
    <div>
      <EditItemOrderModal
        selectedItem={selectedItem}
        tableId={table_id}
        setShowEditItemOrderModal={setShowEditItemOrderModal}
        open={showEditItemOrderModal}
        onClose={() => {
          setShowEditItemOrderModal(false);
        }}
      />
      <EditItemInventoryModal
        selectedItem={selectedItem}
        tableId={table_id}
        setShowEditItemInventoryModal={setShowEditItemInventoryModal}
        open={showEditItemInventoryModal}
        onClose={() => {
          setShowEditItemInventoryModal(false);
        }}
      />
      <EditItemUomModal
        selectedItem={selectedItem}
        tableId={table_id}
        setShowEditItemUomModal={setShowEditItemUomModal}
        open={showEditItemUomModal}
        onClose={() => {
          setShowEditItemUomModal(false);
        }}
      />
      <EditItemNameModal
        selectedItem={selectedItem}
        tableId={table_id}
        setShowEditItemNameModal={setShowEditItemNameModal}
        open={showEditItemNameModal}
        onClose={() => {
          setShowEditItemNameModal(false);
        }}
      />
      <DeleteItemModal
        selectedItem={selectedItem}
        selectedTableId={table_id}
        setShowDeleteItemModal={setShowDeleteItemModal}
        open={showDeleteItemModal}
        onClose={() => {
          setShowDeleteItemModal(false);
        }}
      />
      <TableContainer component={Paper} class="pb-9">
        <div class="bg-white drop-shadow-xl outline outline-black rounded-md overflow-x-auto">
          <div class="flex items-center justify-between">
            <h1 class="text-black justify-left pl-4 pt-5 text-4xl py-2 rounded w-auto">
              {table_num + ". " + table_title}
            </h1>
            {type != "orderPage" && (
              <TableIcons
                class="pt-9"
                tableNum={table_num}
                tableName={table_title}
                tableRows={rows}
                tableId={table_id}
              />
            )}
          </div>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }} align="center">
                  ID
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">
                  Name
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">
                  Status
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">
                  UOM
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">
                  Inventory
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">
                  Order
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold" }}
                  align="center"
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="center">
                    {table_num + "." + (index + 1)}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <button
                      class="px-5 py-2 bg-transparent hover:bg-neutral-200 text-center"
                      onClick={() => {
                        setSelectedItem({
                          id: row._id,
                          dynamicId: table_num + "." + (index + 1),
                          name: row.name,
                          uom: row.uom,
                          inventory: row.inventory,
                          order: row.order,
                        });
                        setShowEditItemNameModal(true);
                      }}
                    >
                      {row.name}
                    </button>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.inventory >= 10 && <GoodStatus />}
                    {row.inventory < 10 && <BadStatus />}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <button
                      onClick={() => {
                        setSelectedItem({
                          id: row._id,
                          dynamicId: table_num + "." + (index + 1),
                          name: row.name,
                          uom: row.uom,
                          inventory: row.inventory,
                          order: row.order,
                        });
                        setShowEditItemUomModal(true);
                      }}
                      class="px-5 py-2 bg-transparent hover:bg-neutral-200 text-center"
                    >
                      {row.uom}
                    </button>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <button
                      class="px-5 py-2 bg-transparent hover:bg-neutral-200 text-center"
                      onClick={() => {
                        setSelectedItem({
                          id: row._id,
                          dynamicId: table_num + "." + (index + 1),
                          name: row.name,
                          uom: row.uom,
                          inventory: row.inventory,
                          order: row.order,
                        });
                        setShowEditItemInventoryModal(true);
                      }}
                    >
                      {row.inventory}
                    </button>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <button
                      class="px-5 py-2 bg-transparent hover:bg-neutral-200 text-center"
                      onClick={() => {
                        setSelectedItem({
                          id: row._id,
                          dynamicId: table_num + "." + (index + 1),
                          name: row.name,
                          uom: row.uom,
                          inventory: row.inventory,
                          order: row.order,
                        });
                        setShowEditItemOrderModal(true);
                      }}
                    >
                      {row.order}
                    </button>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <ClearIcon
                      sx={{
                        "&:hover": {
                          color: "red",
                        },
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setSelectedItem({
                          id: row._id,
                          dynamicId: table_num + "." + (index + 1),
                          name: row.name,
                          uom: row.uom,
                          inventory: row.inventory,
                          order: row.order,
                        });
                        setShowDeleteItemModal(true);
                      }}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </div>
  );
}
