import { ReactComponent as Logo } from "../media/logo.svg";

function UpdateInventoryNavBar() {
  return (
    <nav class="bg-white drop-shadow-lg sticky top-0 z-[100]">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
            <a
              href="/"
              class="flex-shrink-0 flex items-center p-3  hover:bg-neutral-200 rounded-md"
            >
              <Logo />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default UpdateInventoryNavBar;
