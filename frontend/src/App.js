import "./App.css";
import InventoryPage from "./components/InventoryPage";
import LoginPage from "./components/Login";
import NotFound from "./components/NotFound";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OrdersPage from "./components/OrdersPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/inventory">
          <InventoryPage />
        </Route>
        <Route exact path="/orders">
          <OrdersPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
