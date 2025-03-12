import icon from "../assets/github.png";

const CategoryCard = ({ icon1, title, posts }) => {
  return (
    <div className="border-4  border-black/50 rounded-3xl mt-2 ">
      <div className="flex flex-col gap-4 p-5">
        <img src={icon} alt="icon" className="w-16 rounded-full" />
        <div>
          <h3 className="font-bold text-xl">Finance {title} </h3>
          <p>1,720 {posts} postings</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
