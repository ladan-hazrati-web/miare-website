import vector from "../../assets/img/Vector-4-2.svg";
import { IoIosArrowBack } from "react-icons/io";
function ShippingServiceRight() {
  return (
    <div className="w-full md:w-[50%] px-8 sm:px-16 flex flex-wrap md:mt-[150px]">
      <h1 className="text-center font-bold text-3xl md:text-right">
        سرویس ارسال سریع میاره
      </h1>
      <p className="my-[25px] text-justify">
        در فرایند ارسال سفارش مشتریان، هر ثانیه ارزشمند است. همه کسب‌وکارهایی که
        محصولات‌شان را به صورت روزانه ارسال می‌کنند، با استفاده از سرویس ارسال
        میاره، می‌توانند روی کار اصلی خود تمرکز کنند و دیگر دغدغه ارسال سفارش
        مشتریان را نداشته باشند.
      </p>
      <div className="w-full flex flex-wrap items-center gap-1">
        <button className="flex w-[100%] md:w-[135px] items-center justify-between bg-[#8b03ff] p-2 rounded-[50px] my-5">
          <p className="w-full felx justify-center text-white font-bold">
            سفیر هستم
          </p>
          <IoIosArrowBack color="white" />
        </button>
        <button className="flex w-[100%] md:w-[135px] items-center justify-between bg-[#fec725] p-2 rounded-[50px] ">
          <p className="w-full felx justify-center font-bold">کسب و کار دارم</p>
          <IoIosArrowBack />
        </button>
      </div>
      <figure className="hidden lg:flex md:ms-[100px]">
        <img src={vector} alt="" className="h-[220px]" />
      </figure>
    </div>
  );
}

export default ShippingServiceRight;
