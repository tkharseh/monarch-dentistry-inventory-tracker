import LogoutIcon from "@mui/icons-material/Logout";
import { ReactComponent as Logo } from "../media/logo.svg";
import NavBarButton from "./NavBarButton";
import { useRef } from "react";

function NavBar({ page }) {
  const handleSubmit = () => {
    const auth = { id: 1, authorized: false };
    fetch("http://localhost:3000/loginData/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(auth),
    });
  };

  const printOrders = () => {
    printRef.current.style.visibility = "hidden";
    window.print();
    printRef.current.style.visibility = "visible";
  };

  const printRef = useRef();

  return (
    <nav class="bg-white drop-shadow-lg sticky top-0 z-[100]" ref={printRef}>
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center ">
              <Logo />
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-16 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {page === "Inventory" && (
              <div class="ml-3 relative ">
                <a href="./orders">
                  <NavBarButton text="View Orders" />
                </a>
              </div>
            )}
            {page === "Orders" && (
              <div class="ml-3 relative ">
                <button
                  onClick={() => {
                    printOrders();
                  }}
                >
                  <NavBarButton text="Print Orders" />
                </button>
              </div>
            )}
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a href="./login" onClick={handleSubmit}>
              <div class="ml-3 relative hover:bg-neutral-200 p-2 rounded-md">
                <LogoutIcon />
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
