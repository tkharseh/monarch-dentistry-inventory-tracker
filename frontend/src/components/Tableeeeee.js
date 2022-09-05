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

export default function CustomizedTables({ table_title, rows }) {
  const [showInventoryModal, setShowInventoryModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);

  const [selectedItemId, setSelectedItemId] = useState();
  const [selectedItemCustomId, setSelectedItemCustomId] = useState();
  const [selectedItemName, setSelectedItemName] = useState("");
  const [selectedItemUom, setSelectedItemUom] = useState();
  const [selectedItemInventory, setSelectedItemInventory] = useState();
  const [selectedItemOrder, setSelectedItemOrder] = useState();

  return (
    <div>
      <InventoryModal
        showInventoryModal={showInventoryModal}
        setShowInventoryModal={setShowInventoryModal}
        open={showInventoryModal}
        onClose={() => {
          setShowInventoryModal(false);
        }}
        id={selectedItemId}
        customId={selectedItemCustomId}
        order={selectedItemOrder}
        name={selectedItemName}
        uom={selectedItemUom}
      />
      <OrderModal
        showOrderModal={showOrderModal}
        setShowOrderModal={setShowOrderModal}
        open={showOrderModal}
        onClose={() => {
          setShowOrderModal(false);
        }}
        id={selectedItemId}
        inventory={selectedItemInventory}
        customId={selectedItemCustomId}
        name={selectedItemName}
        uom={selectedItemUom}
      />
      <TableContainer component={Paper} class="pb-9">
        <div class="bg-white drop-shadow-xl outline outline-black rounded-md overflow-x-auto">
          <h1 class="text-black justify-left pl-4 pt-5 text-4xl py-2 rounded w-auto">
            {table_title}
          </h1>
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
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="center">
                    {items.items[row.itemId - 1].customId}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {items.items[row.itemId - 1].name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {items.items[row.itemId - 1].inventory >=
                      10 && (
                      <GoodStatus />
                    )}
                    {items.items[row.itemId - 1].inventory <
                      10 && (
                      <BadStatus />
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {items.items[row.itemId - 1].uom}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <button
                      customId={row.customId}
                      name={row.customId + " inventory"}
                      class="p-2 w-12 bg-transparent hover:bg-neutral-200 text-center"
                      onClick={() => {
                        setSelectedItemCustomId(
                          items.items[row.itemId - 1].customId
                        );
                        setSelectedItemName(items.items[row.itemId - 1].name);
                        setSelectedItemUom(items.items[row.itemId - 1].uom);
                        setSelectedItemId(items.items[row.itemId - 1].id);
                        setSelectedItemOrder(items.items[row.itemId - 1].order);
                        setShowInventoryModal(true);
                      }}
                    >
                      {items.items[row.itemId - 1].inventory}
                    </button>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <button
                      customId={row.customId}
                      name={row.customId + " order"}
                      class="p-2 w-12 bg-transparent hover:bg-neutral-200 text-center"
                      onClick={() => {
                        setSelectedItemCustomId(
                          items.items[row.itemId - 1].customId
                        );
                        setSelectedItemName(items.items[row.itemId - 1].name);
                        setSelectedItemUom(items.items[row.itemId - 1].uom);
                        setSelectedItemId(items.items[row.itemId - 1].id);
                        setSelectedItemInventory(items.items[row.itemId - 1].inventory);
                        setShowOrderModal(true);
                      }}
                    >
                      {items.items[row.itemId - 1].order}
                    </button>
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
