import { ReactComponent as Logo } from "../media/logo.svg";

function HomeNavBar({ currentPage }) {
  return (
    <nav class="bg-white drop-shadow-lg sticky top-0 z-[100]">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
            <a
              href="/"
              class="flex-shrink-0 flex items-center p-3  hover:bg-neutral-200 rounded-md"
            >
              <Logo />
            </a>
          </div>

          {currentPage !== "Home" && (
            <div class="absolute inset-y-0 right-0 flex items-center pr-16 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div class="ml-3 relative">
                <a
                  class="hover:bg-neutral-200 hover:rounded-md p-3"
                  href="/"
                >
                  Home
                </a>
              </div>
            </div>
          )}

          {currentPage === "Home" && (
            <div class="absolute inset-y-0 right-0 flex items-center pr-16 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div class="ml-3 relative">
                <a class="p-3 bg-neutral-200 rounded-md" href="/">
                  Home
                </a>
              </div>
            </div>
          )}

          {currentPage !== "Login" && (
            <div class="absolute inset-y-0 right-0 flex items-center pr-16 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div class="ml-3 relative">
                <a
                  class="hover:bg-neutral-200 hover:rounded-md p-3"
                  href="/login"
                >
                  Login
                </a>
              </div>
            </div>
          )}

          {currentPage === "Login" && (
            <div class="absolute inset-y-0 right-0 flex items-center pr-16 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div class="ml-3 relative">
                <a class="p-3 bg-neutral-200 rounded-md" href="/login">
                  Login
                </a>
              </div>
            </div>
          )}

          {currentPage !== "Contact" && (
            <div class="absolute inset-y-0 right-0 flex items-center pr-16 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div class="ml-3 relative">
                <a
                  class="hover:bg-neutral-200 hover:rounded-md p-3"
                  href="/contact"
                >
                  Contact
                </a>
              </div>
            </div>
          )}

          {currentPage === "Contact" && (
            <div class="absolute inset-y-0 right-0 flex items-center pr-16 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div class="ml-3 relative">
                <a class="p-3 bg-neutral-200 rounded-md" href="/contact">
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default HomeNavBar;
