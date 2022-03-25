import { Navbar, Footer, Contact } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Shop, SingleProduct, Cart, LoginScreen, RegisterScreen, Profile, CheckoutPage, PaymentPage, PlaceOrderScreen, OrderSummary} from './pages'
import './index.css'
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/owl.carousel.css'
import './assets/css/responsive.css'
function App() {
  return (
    <div >
      <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/">
            {" "}
            <Home />{" "}
            </Route>
            <Route exact path="/products">
            {" "}
            <Shop />{" "}
            </Route>
            <Route exact path="/product/:id">
            {" "}
            {<SingleProduct />}
          </Route>
          <Route exact path="/cart/:id?">
            {" "}
            <Cart />{" "}
            </Route>
            <Route exact path="/login/">
            {" "}
            <LoginScreen />{" "}
            </Route>
            <Route exact path="/register/">
            {" "}
            <RegisterScreen />{" "}
            </Route>
            <Route exact path="/profile">
            {" "}
            <Profile />{" "}
            </Route>
            <Route exact path="/shipping">
            {" "}
            <CheckoutPage />{" "}
            </Route>
            <Route exact path="/payment">
            {" "}
            <PaymentPage />{" "}
            </Route>
            <Route exact path="/place-order">
            {" "}
            <PlaceOrderScreen />{" "}
            </Route>
            <Route exact path="/order/:id">
            {" "}
            {<OrderSummary />}
          </Route>
        </Switch>

      <Contact/>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
