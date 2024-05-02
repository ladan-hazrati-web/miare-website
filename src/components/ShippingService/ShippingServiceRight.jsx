import vector from "../../assets/img/Vector-4-2.svg";
import { IoIosArrowBack } from "react-icons/io";
function ShippingServiceRight() {
  return (
    <div className="w-full md:w-[60%] px-8 sm:px-16 flex flex-wrap md:mt-[50px] xl:mt-[100px]">
      <h1 className="text-center font-extrabold text-3xl md:text-right">
        سرویس ارسال سریع میاره
      </h1>
      <p className="my-[25px] text-justify">
        در فرایند ارسال سفارش مشتریان، هر ثانیه ارزشمند است. همه کسب‌وکارهایی که
        محصولات‌شان را به صورت روزانه ارسال می‌کنند، با استفاده از سرویس ارسال
        میاره، می‌توانند روی کار اصلی خود تمرکز کنند و دیگر دغدغه ارسال سفارش
        مشتریان را نداشته باشند.
      </p>
      <div className="w-full flex flex-wrap items-center gap-1">
        <button className="flex w-[100%] md:w-[135px] items-center justify-between bg-[#8b03ff] p-2 rounded-[50px] my-4">
          <a href="" className="w-full felx justify-center text-white font-bold">
            سفیر هستم
          </a>
          <IoIosArrowBack color="white" />
        </button>
        <button className="flex w-[100%] md:w-[135px] items-center justify-between bg-[#fec725] p-2 rounded-[50px] ">
          <a href="" className="w-full felx justify-center font-bold">کسب و کار دارم</a>
          <IoIosArrowBack />
        </button>
      </div>
      <figure className="hidden lg:flex md:ms-[70px]">
        <img src={vector} alt="" className="h-[250px]" />
      </figure>
    </div>
  );
}

export default ShippingServiceRight;
