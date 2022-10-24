import React from "react";
import Body from "./assets/components/Body";
import CartWidget from "./assets/components/CartWidget";
import Footer from "./assets/components/Footer";
import ItemListContainer from "./assets/components/ItemListContainer";
import ResponsiveAppBar from "./assets/components/ResponsiveAppBar";
import "./assets/css/App.css";

// Father component - smart
export default function Pepe() {
  return (
    <>
      <div className="AppBar">
        <ResponsiveAppBar color={"#000000"} />
        <CartWidget />
      </div>
      <div className="ItemList">
        <ItemListContainer greeting={true} />
      </div>
      <div className="Body">
        <Body />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}
