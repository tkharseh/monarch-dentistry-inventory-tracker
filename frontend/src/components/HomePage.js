import HomeNavBar from "./HomeNavBar";
import LandingPage from "./LandingPage";
import Instruction from "./Instruction";
import Title from "./Title";
import { TitleContainer } from "./styles/TitleContainer.styles";

const HomePage = () => {
  return (
    <div>
      <HomeNavBar currentPage="Home" />
      <div class="grid gap-48 py-36 px-28">
        <LandingPage />
        <Instruction
          imgStr="InventoriStep1"
          direction="right"
          title="Add tables"
          description="On the main inventory page, click the + icon at the bottom right of the screen to add a table. Enter the name of your table then click save."
        />
        <Instruction
          imgStr="InventoriStep2"
          direction="left"
          title="Add items to your table"
          description="Click the + icon in the table to add an item. Enter the name, unit of measure, total inventory and how many units of this item you would like to order."
        />
        <Instruction
          imgStr="InventoriStep3"
          direction="right"
          title="View your orders"
          description="After setting up a few tables and adding in a couple of items, click the 'View Orders' button in the nav bar to filter out all the items with orders above 0. Then print your orders!"
        />
        <Instruction
          imgStr="InventoriStep4"
          direction="left"
          title="Print the QR codes for your items"
          description="Click the QR code icon in the table and select the items you would like to print QR codes for."
        />
        <div class="h-1/5">
          <Instruction
            imgStr="InventoriStep5"
            type="phone"
            direction="right"
            title="Scan your QR Codes"
            description="Once you scan a QR code, you can easily update the inventory and orders directly from your phone!"
          />
        </div>
      </div>
      <div class="grid place-content-center pb-12">
        <h1>
          Made with 💙 by{" "}
          <a href="https://www.tariqkharseh.com" target="_blank" class='text-blue-500 underline'>
            {" "}
            Tariq Kharseh
          </a>
        </h1>
      </div>
    </div>
  );
};
export default HomePage;
