import React from "react";
import Header from "./Header/Header";
import ShippingService from "./ShippingService/ShippingService";
import WhatIsMiare from "../WhatIsMiare/WhatIsMiare";
import Cards from "./Cards/Cards";
function MainPage() {
  return (
    <>
      <Header />
      <ShippingService />
      <WhatIsMiare />
      <Cards />
    </>
  );
}

export default MainPage;
