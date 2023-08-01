import { useState } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { FaSchool } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { MdSchool } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const menus = [
    {
      title: "Biology",
      courseCode: "BIO",
      submenu: true,
      submenuItems: [
        { title: "BIO 103" },
        { title: "BIO 106" },
        { title: "BIO 150" },
      ],
    },
    {
      title: "Computer Science",
      courseCode: "CSC",
      submenu: true,
      submenuItems: [
        { title: "CSC 126" },
        { title: "CSC 211" },
        { title: "CSC 326" },
      ],
    },
    {
      title: "Chemistry",
      courseCode: "CHM",
      submenu: true,
      submenuItems: [
        { title: "CHM 100" },
        { title: "CHM 141" },
        { title: "CHM 142" },
      ],
    },
    {
      title: "Accounting",
      courseCode: "ACC",
      submenu: true,
      submenuItems: [
        { title: "ACC 114" },
        { title: "ACC 218" },
        { title: "BUS 160" },
      ],
    },
  ];

  const [menusOpen, setMenusOpen] = useState(
    menus.reduce((acc, menu, index) => {
      acc[index] = menu.submenu;
      return acc;
    }, {})
  );

  const toggleMenu = (index) => {
    setMenusOpen({
      ...menusOpen,
      [index]: !menusOpen[index],
    });
  };

  return (
    <div className="bg-[#1f1f1f] text-white h-screen w-20 drop-shadow-[3px_2px_1px_rgba(0,0,0,0.25)]">
      <div
        className={`flex-shrink-0 p-5 pt-8 ${
          open ? "w-72 bg-[#1a031a]" : "w-20"
        } duration-300 relative`}
      >
        <div
          className={`max-h-screen ${
            open ? "h-screen overflow-y-auto" : "h-20"
          }  pr-5`}
        >
          <AiFillCaretLeft
            className={`bg-black text-white text-4xl absolute -right-8 top-1/2 transform -translate-y-1/2 border boarder-dark border-5 cursor-pointer ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />

          <div className="flex items-center">
            <div className="flex-shrink-0">
              <FaSchool
                className={`bg-fuchsia-100 text-[#1a031a] text-5xl rounded cursor-pointer block float-left px-1 mr-6 duration-500 ${
                  open && "rotate-[360deg]"
                }`}
              />
            </div>
            <h1
              className={`text-dark origin-left font-lg font-bold  text-2xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              College of Staten Island
            </h1>
          </div>

          <div
            className={`flex items-center rounded-md bg-white mt-5 ${
              open ? "p-2 px-6" : ""
            }`}
          >
            <BiSearch
              className={`text-black text-lg block float-left cursor-pointer ${
                open ? "mr-4" : "mr-1"
              }`}
            />

            <input
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`text-base bg-transparent w-full text-black focus:outline-none ${
                !open && "hidden"
              }`}
            />
          </div>

          <ul className="pt-2">
            {menus.map((menu, index) => (
              <>
                <li
                  key={index}
                  onClick={() => toggleMenu(index)}
                  className="text-black-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-indigo-400 rounded-md mt-2"
                >
                  <span className="text-2xl block float-left">
                    <MdSchool
                      className={`transition-transform ${
                        !open && "translate-x-[-12px]"
                      }`}
                    />
                  </span>
                  <span
                    className={`text-base font-medium flex-1 duration-200 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                  {menu.submenu && open && (
                    <BsChevronDown
                      className={`${menusOpen[index] && "rotate-180"}`}
                    />
                  )}
                </li>

                {menu.submenu && menusOpen[index] && open && (
                  <ul className="bg-cyan-50 rounded-md mt-2">
                    {menu.submenuItems
                      .filter(
                        (submenuItem) =>
                          submenuItem.title
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase()) || // Check if title matches search query
                          submenuItem.title
                            .toLowerCase()
                            .includes(
                              menu.courseCode.toLowerCase() +
                                " " +
                                searchQuery.toLowerCase()
                            ) // Check if course code + title matches search query
                      )
                      .map((submenuItem) => (
                        <li
                          key={submenuItem.title}
                          className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 px-7 hover:bg-indigo-400 rounded-md mt-2 "
                          onClick={() =>
                            navigate(
                              `/colleges/${menu.courseCode}/courses/${submenuItem.title}`
                            )
                          }
                        >
                          {submenuItem.title}
                        </li>
                      ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
