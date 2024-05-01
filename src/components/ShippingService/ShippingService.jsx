import React from "react";
import ShippingServiceRight from "./ShippingServiceRight";
import ShippingServiceLeft from "./ShippingServiceLeft";

function ShippingService() {
  return (
    <div className="w-[100%] flex justify-center">
      <div className="w-full 2xl:container flex flex-wrap bg-[#fbfbfd] py-[50px] xl:px-[100px]">
            <ShippingServiceRight />
            <ShippingServiceLeft />
      </div>
    </div>
  );
}

export default ShippingService;
