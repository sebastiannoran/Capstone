import React, { useState } from 'react';
import { AiFillCaretLeft } from 'react-icons/ai';
import { FaSchool } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { MdSchool } from 'react-icons/md';
import { BsChevronDown } from 'react-icons/bs';

const Sidebar = () => {

  const [open, setOpen] = useState(true);

  const [menusOpen, setMenusOpen] = useState({});

  const toggleMenu = (index) => {
    setMenusOpen({
      ...menusOpen, 
      [index]: !menusOpen[index]
    });
  }

  const menus = [
    {
      title: 'Biology',
      submenu: true,
      submenuItems: [
        { title: 'BIO 101L' },
        { title: 'CHEM 101' },
        { title: 'BUS 101' }
      ]
    },
    {
      title: 'Computer Science',
      submenu: true,
      submenuItems: [
        { title: 'CSC 126' },
        { title: 'CSC 211' },
        { title: 'CSC 326' }
      ]
    }
  ];

  return (
    <div className="flex">

      <div className={`bg-cyan-400 h-screen p-5 pt-8 ${open ? 'w-72' : 'w-20'} duration-300 relative`}>

        <AiFillCaretLeft
          className={`bg-black text-white text-4xl absolute -right-8 top-1/2 transform -translate-y-1/2 border boarder-dark border-5 cursor-pointer ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)} 
        />

        <div className="inline-flex">
          <FaSchool 
            className={`bg-indigo-400 text-4xl rounded cursor-pointer block float-left mr-5 duration-500 ${open && 'rotate-[360deg]'}`} 
          />
          <h1 className={`text-dark origin-left font-medium text-2xl duration-300 ${!open && 'scale-0'}`}>
            College
          </h1>
        </div>

        <div className={`flex items-center rounded-md bg-white mt-5 ${!open ? 'px-2.5' : 'px-7'}`}>
          <BiSearch
            className={`text-black text-lg block float-left cursor-pointer ${open && 'mr-2'}`} 
          />
          <input 
            type="search"
            placeholder="Search"
            className={`text-base bg-transparent w-full text-black focus:outline-none ${!open && 'hidden'}`}
          />
        </div>

        <ul className="pt-2">
          {menus.map((menu, index) => (
            <>
              <li
                key={index}
                onClick={() => toggleMenu(index)}
                className="text-black-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-indigo-400 rounded-md mt-2"
              >
                <span className="text-2xl block float-left">
                  <MdSchool />
                </span>
                <span className={`text-base font-medium flex-1 duration-200 ${!open && 'hidden'}`}>
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <BsChevronDown
                    className={`${menusOpen[index] && 'rotate-180'}`}
                  />
                )}
              </li>

              {menu.submenu && menusOpen[index] && open && (
                <ul>
                  {menu.submenuItems.map(submenuItem => (
                    <li 
                      key={submenuItem.title}
                      className="text-black-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-7 hover:bg-indigo-400 rounded-md mt-2"
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
  );
}

export default Sidebar;