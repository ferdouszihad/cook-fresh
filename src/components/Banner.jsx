import React, { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Banner = ({ setRecipies }) => {
  const alldata = useLoaderData();
  const searchref = useRef();

  const handleSubmit = () => {
    const search = searchref?.current?.value.toLowerCase();

    const filterData = alldata.filter((item) =>
      item.strCategory.toLowerCase().includes(search)
    );

    if (filterData.length > 0) {
      toast.success(`Toatal ${filterData.length} Recipies Found`);
      console.log(filterData);
      setRecipies(filterData);
    } else {
      toast.error("inVaalid search");
    }

    // console.log();
  };
  return (
    <div
      className="hero min-h-screen bg-top"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1549590143-d5855148a9d5)",
      }}
    >
      <div className="hero-overlay bg-white bg-opacity-80 "></div>
      <div className="hero-content text-center ">
        <div className="max-w-9/12">
          <h1 className="mb-5 text-5xl font-bold">
            Embrace the art of cooking
          </h1>
          <p className="mb-5">
            where every ingredient becomes a stroke on the canvas of flavor, and
            every dish a masterpiece of creativity and passion.
          </p>
          <div className="relative">
            <input
              ref={searchref}
              defaultValue={""}
              type="text"
              placeholder="Search recipies by category"
              className="input input-bordered w-full pr-16"
            />
            <button
              onClick={handleSubmit}
              className="btn btn-primary absolute top-0 right-0 rounded-l-none"
            >
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
