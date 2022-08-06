import NavBar from "./NavBar";
import Title from "./Title";
import { ContentContainer } from "./styles/Container.styles";
import CustomizedTables from "./Table";
import table_data from "../table_data/table_data";
import items from "../table_data/items";
import { TitleContainer } from "./styles/TitleContainer.styles";
import { Redirect } from "react-router-dom";

function InventoryPage() {
  if (!items.loginData[0].authorized) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <NavBar page="Inventory" />
      <TitleContainer>
        <Title text="Inventory" />
      </TitleContainer>
      <ContentContainer>
        {table_data.data.map((item) => (
          <CustomizedTables table_title={item.title} rows={item.rows} />
        ))}
      </ContentContainer>
    </div>
  );
}

export default InventoryPage;
