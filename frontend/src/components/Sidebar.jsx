import { Link } from "react-router-dom";
import { useLoaderData, useNavigate } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { HiBars4 } from "react-icons/hi2";
import { IoHomeSharp } from "react-icons/io5";

const Sidebar = ({ majors, college }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  // Filter the major names based on the search query
  const filteredMajors = majors.filter((major) =>
    major.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="px-4 pt-5 flex justify-center fixed">
        <button ref={btnRef} onClick={onOpen}>
          <HiBars4 className="text-3xl text-white" />
        </button>
      </div>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="white" />
          <DrawerHeader>
            <div className="flex items-start justify-center ">
              <Link
                className="flex flex-col items-start justify-center mt-2 max-w-[15rem]"
                to="/"
              >
                <IoHomeSharp className="text-center" />
                <p className="text-2xl text-center">{college.name}</p>
              </Link>
            </div>
            <div className="mt-4">
              <Input placeholder="Search Major Forums..." />
            </div>
          </DrawerHeader>

          <DrawerBody>
            <ul className="">
              {filteredMajors.map((major) => (
                <li key={major.id} className="mb-3">
                  <Link
                    to={`/colleges/${college.id}/majors/${major.id}`}
                    title={major.name}
                    className="flex items-center cursor-pointer py-4 px-4 text-bold rounded-lg hover:shadow-md transition duration-50 ease-in-out transform hover:scale-105"
                  >
                    <p className="">{major.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
