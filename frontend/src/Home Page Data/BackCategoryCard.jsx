import image from "../assets/share.png";

const BackCategoryCard = ({ jobs }) => {
  return (
    <div className="border-4 border-black/50 text-black rounded-3xl mt-2 p-2 bg-blue-600/70">
      <div className="flex flex-col gap-6 p-2">
        <div className="flex flex-col px-3">
          <h3 className="font-bold text-3xl">+10 {jobs} k jobs </h3>
          <p>Available now!</p>
        </div>
        <div className="flex justify-between m-2">
          <button className="p-2 border-2 border-black rounded-xl w-28 ">
            View all
          </button>
          <img src={image} alt="icon" className=" rounded-2xl w-10" />
        </div>
      </div>
    </div>
  );
};

export default BackCategoryCard;
