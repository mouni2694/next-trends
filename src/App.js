import { Switch, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm/login";
import Home from "./components/Home/home";
import Products from "./components/Products/products";
import Cart from "./components/Cart/cart";
import NotFound from "./components/NotFound/notfound";
import ProtectedRoute from "./components/ProtectedRoute/protectedroute";
import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/cart" component={Cart} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
