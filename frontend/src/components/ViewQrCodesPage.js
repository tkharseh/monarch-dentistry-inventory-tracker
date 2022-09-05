import ReactDom from "react-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import axios from "axios";
import QRCode from "qrcode";
import NavBar from "./NavBar";
import { TitleContainer } from "./styles/TitleContainer.styles";
import Title from "./Title";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation } from "react-router";
import { useParams } from "react-router-dom";
import { useRef } from "react";

export default function ViewQrCodesPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const { tableId } = useParams();
  const location = useLocation();
  const { state } = location;
  const { selectedItems, tableName } = state;
  console.log("location", location);
  console.log("selectedItems", selectedItems);
  const [itemQrCodeUrls, setItemQrCodeUrls] = useState(
    new Array(selectedItems.length).fill("")
  );
  const [itemQrCodeSrcs, setItemQrCodeSrcs] = useState(
    new Array(selectedItems.length).fill("")
  );
  const zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);
  const printQrCodes = () => {
    window.print();
  };

  const printRef = useRef();
  useEffect(() => {
    const currItemQrCodes = new Array(selectedItems.length).fill("");
    for (let i = 0; i < selectedItems.length; i++) {
      const itemUrl = `http://localhost:3000/inventory/${tableId}/${String(
        selectedItems[i]._id
      )}`;
      currItemQrCodes[i] = itemUrl;
    }
    setItemQrCodeUrls(currItemQrCodes);
  }, [selectedItems]);

  useEffect(() => {
    const currItemQrCodeSrcs = [];
    for (let i = 0; i < itemQrCodeUrls.length; i++) {
      QRCode.toDataURL(itemQrCodeUrls[i]).then((data) => {
        currItemQrCodeSrcs.push(data);
      });
    }
    setItemQrCodeSrcs(currItemQrCodeSrcs);
  }, [itemQrCodeUrls]);

  return (
    <>
      {/* <div class="pl-4 text-center grid place-content-center pt-9 px-12">
        <h1 class="text-black text-5xl font-medium  rounded w-auto">
          {'QR Codes for "' + tableName + '"'}
        </h1>
      </div>
      <a href="../../inventory" class="hover:bg-neutral-200 p-1 rounded">
        <ArrowBackIcon fontSize="large" />
      </a> */}
      <div class="grid place-content-center">
        <TitleContainer>
          <a href="../../inventory" class="hover:bg-neutral-200 p-1 rounded">
            <ArrowBackIcon fontSize="large" sx={{width: '30px'}} />
          </a>
          <div class="pl-4">
            {/* <Title text={'QR Codes for "' + tableName + '"'} /> */}
            <h1 class="text-black text-3xl font-medium  rounded w-auto">
              {'QR Codes for "' + tableName + '"'}
            </h1>
          </div>
        </TitleContainer>
      </div>

      <div>
        <form onSubmit={handleSubmit} class="pt-2">
          <div class="pr-9 grid grid-cols-3">
            {zip(selectedItems, itemQrCodeSrcs).map((item, index) => {
              return (
                <div class="grid justify-items-center p-3">
                  <div
                    class={
                      (index % 12 === 0) |
                        (index % 12 === 1) |
                        (index % 12 === 2) &&
                      index !== 0 &&
                      index !== 1 &&
                      index !== 2 &&
                      "pt-20"
                    }
                  >
                    <img src={item[1]} />
                    <b class="text-sm grid place-items-center">
                      {item[0].name}
                    </b>
                  </div>
                </div>
              );
            })}
          </div>
          <div class="grid place-content-center py-14">
            <button
              onClick={printQrCodes}
              class="border border-black p-2 rounded-md hover:bg-neutral-200"
            >
              PRINT
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
