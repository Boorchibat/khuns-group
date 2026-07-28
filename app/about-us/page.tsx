import React from "react";
const Goals = {
  goal1: {
    Image: "/quality.png",
    Motto: "Quality Products",
    title: "Quality Products",
    description:
      "We prioritize quality in every step of our production process, ensuring that our products meet the highest standards.",
  },
    goal2: {
    Image: "/quality.png",
    Motto: "Quality Products",
    title: "Quality Products",
    description:
      "We prioritize quality in every step of our production process, ensuring that our products meet the highest standards.",
  },
}

const page = () => {
  return (
    <div className="max-w-3xl flex flex-col mt-[120px] mx-8">
      <div className="text-center rounded-full p-3 border-2 border-khuns-green bg-white/90 mb-6 w-[100px]">
        <h1 className="font-bold text-khuns-green">About us</h1>
      </div>
      <h2 className="text-2xl  sm:text-3xl md:text-4xl font-bold">
        About Khuns Group
      </h2>

      <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl">
        Khuns Group is a leading company in Mongolia specializing in meat
        production, export, and food manufacturing. We are committed to
        delivering high-quality products to customers worldwide.
      </p>

      <div className="w-full flex flex-wrap mt-8">
        {Object.values(Goals).map((goal, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white/90 border-2 border-khuns-green rounded-lg p-6">
              <h3 className="text-xl font-bold text-khuns-green">
                {goal.title}
              </h3>
              <p className="text-gray-600 mt-2">{goal.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default page;
