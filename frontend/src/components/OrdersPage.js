import NavBar from "./NavBar";
import Title from "./Title";
import { ContentContainer } from "./styles/Container.styles";
import CustomizedTables from "./Table";
import table_data from "../table_data/table_data";
import items from "../table_data/items";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { TitleContainer } from "./styles/TitleContainer.styles";
import { Redirect } from "react-router-dom";

function OrdersPage() {
  if (!items.loginData[0].authorized) {
    return <Redirect to="/login" />;
  }
  const data = [];
  for (let i = 0; i < table_data.data.length; i++) {
    let currTable = table_data.data[i];
    const tableOrderRows = [];
    for (let j = 0; j < currTable.rows.length; j++) {
      let itemId = currTable.rows[j].itemId;
      let item = items.items[itemId - 1];
      if (item.order > 0) {
        tableOrderRows.push({ itemId: itemId });
      }
    }
    const tableOrder = {
      id: currTable.id,
      title: currTable.title,
      rows: tableOrderRows,
    };
    data.push(tableOrder);
  }
  console.log("order", data);
  console.log("table", table_data);
  const orderData = { data: data };

  return (
    <div>
      <NavBar page="Orders" />
      <TitleContainer>
        <a href="./inventory" class="hover:bg-neutral-200 p-1 rounded">
          <ArrowBackIcon fontSize="large" />
        </a>
        <div class="pl-4">
          <Title text="Orders" />
        </div>
      </TitleContainer>
      <ContentContainer>
        {orderData.data.map((item) => (
          <CustomizedTables table_title={item.title} rows={item.rows} />
        ))}
      </ContentContainer>
    </div>
  );
}

export default OrdersPage;
