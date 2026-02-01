"use client";
const Category = () => {
  const categoryList = [
    {
      name: "Ayakkabı",
    },
    {
      name: "Ayakkabı",
    },
    {
      name: "Ayakkabı",
    },
    {
      name: "Ayakkabı",
    },
    {
      name: "Ayakkabı",
    },
    {
      name: "Ayakkabı",
    },
    {
      name: "Ayakkabı",
    },
  ];
  return (
    <div className="flex items-center justify-center px:3 md:px-10 gap-3 md:gap-10 py-5 md:py-8 overflow-x-auto">
      {categoryList.map((category, index) => (
        <div
          key={index}
          className="border text-slate-500 rounded-full min-w-30 flex items-center justify-center cursor-pointer  flex-1 px-4 py-2 text-center"
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Category;
