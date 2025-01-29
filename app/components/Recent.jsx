import Sports from "./groupedCategory/Sports";
import Music from "./groupedCategory/Music";
import Politics from "./Politics";
import Food from "./groupedCategory/Food";
const Recent = async () => {
  return (
    <div className="my-10 bg-gray-100  mb-3 md:mb-10 w-full py-3 md:py-10 px-2 md:px-10">
      <h1 className="font-bold text-2xl md:text-4xl">Recent Post</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 space-y-5 px-2 items-center py-5 justify-between ">
        <Sports />

        <Politics />

        <Music />

        <Food />
      </div>
    </div>
  );
};

export default Recent;
