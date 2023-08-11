import { useEffect, useState } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { FaSchool } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { MdSchool } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useLoaderData, useNavigate } from "react-router-dom";


const Sidebar = ({ majors, college }) => {
// console.log(queryString)

  // console.log(URLSearchParams(this.props.location.search) )
  const [open, setOpen] = useState(false);
  const [sidebarMajors, setsidebarMajors] = useState(majors);
  const [searchQuery, setSearchQuery] = useState("");
  // const [majors, setMajors] = useState([]);
 const collapse=(open)=>{
 
  if (!open) {
    setsidebarMajors(majors);
    setOpen(!open);
  }else{
    setsidebarMajors([]);
    setOpen(!open);
  } 
  
 }

  const navigate = useNavigate();

  const menus = [
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
    <div className="bg-[#272727] text-white min-h-screen w-20 drop-shadow-[0px_0px_5px_rgba(0,0,0,0.50)]">
      <div
        className={`flex-shrink-0 p-5 pt-8 ${
          open ? "w-72 bg-fuchsia-700 duration-300" : "w-20 duration-100"
        } relative`}
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
            onClick={() => collapse(open)}
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
              
              {college.name}
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
            {sidebarMajors.map((major) => (
              <li key={major.id} className="mb-1">
               {/* { console.log(params)} */}
                <Link
                  to={`/colleges/27/majors/${major.id}`}
                  title={major.name}
                  className="truncate w-full text-black-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-indigo-400 rounded-md"
                >
                  {/* <span className="text-2xl block float-left">
                    <MdSchool
                      className={`transition-transform ${
                        !open && "translate-x-[-12px]"
                      }`}
                    />
                  </span> */}
                  <span
                    className={`text-base font-medium flex-1 duration-200 ${
                      !open && "hidden"
                    }`}
                  >
                    {major.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
