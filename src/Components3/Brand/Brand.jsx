const Brand = () => {
  return (
    <div className="bg-orange py-10 px-5 xl:p-10 xl:px-16  rounded-b-md w-full">
      <div className="grid grid-cols-6  items-center justify-center gap-x-5 gap-y-6 lg:gap-y-0">
        <div className="col-span-3 sm:col-span-2 lg:col-span-1 items-center justify-center grid">
          <img
            src="./images/home-3/brand-1.png"
            alt="brand-img"
            className=""
            draggable={!true}
          />
        </div>

        <div className="col-span-3 sm:col-span-2 lg:col-span-1 items-center justify-center grid">
          {" "}
          <img
            src="./images/home-3/brand-2.png"
            alt="brand-img"
            className=""
            draggable={!true}
          />
        </div>
        <div className="col-span-3 sm:col-span-2 lg:col-span-1 items-center justify-center grid">
          {" "}
          <img
            src="./images/home-3/brand-3.png"
            alt="brand-img"
            className=""
            draggable={!true}
          />
        </div>
        <div className="col-span-3 sm:col-span-2 lg:col-span-1 items-center justify-center grid">
          {" "}
          <img
            src="./images/home-3/brand-4.png"
            alt="brand-img"
            className=""
            draggable={!true}
          />
        </div>
        <div className="col-span-3 sm:col-span-2 lg:col-span-1 items-center justify-center grid">
          {" "}
          <img
            src="./images/home-3/brand-5.png"
            alt="brand-img"
            className=""
            draggable={!true}
          />
        </div>
        <div className="col-span-3 sm:col-span-2 lg:col-span-1 items-center justify-center grid">
          {" "}
          <img
            src="./images/home-3/brand-6.png"
            alt="brand-img"
            className=""
            draggable={!true}
          />
        </div>
      </div>
    </div>
  );
};

export default Brand;
