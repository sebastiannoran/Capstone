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
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { HiBars4 } from "react-icons/hi2";
import { MdManageSearch } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";

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
      <button ref={btnRef} onClick={onOpen}>
        <div
          className="bg-[#1f1f1f] rounded-lg px-2 py-2 mx-4 flex flex-col
      justify-center items-center fixed shadow-[0_0px_5px_rgb(0,0,0,0.6)]"
        >
          <HiBars4 className="text-3xl text-white" />
        </div>
      </button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="#1f1f1f" textColor="white">
          <div>
            <DrawerCloseButton
              color="white"
              size="md"
              className="rounded-lg bg-[#1f1f1f] hover:hover:bg-fuchsia-500 transition 
              border-b-[1px] border-fuchsia-700 duration-500
              shadow-[0px_0px_5px_rgba(0,0,0,0.40)]
              "
            />
          </div>
          <DrawerHeader>
            <div className="flex items-center justify-center mb-2">
              <Link
                className="flex flex-col items-start justify-center mt-2 max-w-[15rem]"
                to={`/colleges/${college.id}`}
              >
                <FaUniversity className="text-center text-4xl" />
              </Link>
            </div>
            <p className="mb-4 text-3xl text-center">{college.name}</p>
            <div className="flex items-center justify-center gap-2">
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <MdManageSearch className="text-2xl" />
                </InputLeftElement>
                <Input
                  variant="flushed"
                  placeholder="Search Major Forums..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  focusBorderColor="#701a75"
                />
              </InputGroup>
            </div>
          </DrawerHeader>
          <DrawerBody>
            <ul className="">
              {filteredMajors.map((major) => (
                <li key={major.id} className="mb-[3px]">
                  <Link
                    to={`/colleges/${college.id}/majors/${major.id}`}
                    title={major.name}
                    className="
                    flex items-center cursor-pointer py-4 px-4 text-bold rounded-lg
                    hover:bg-fuchsia-900 transition duration-50
                    "
                  >
                    <p className="">{major.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </DrawerBody>
          <div className="flex items-center justify-center pb-2 pt-1">
            <DrawerFooter>
              <Button
                textColor="white"
                variant=""
                onClick={onClose}
                className="
                rounded-lg bg-[#1f1f1f] hover:hover:bg-fuchsia-500 transition 
                border-b-[1px] border-fuchsia-700 duration-500
                shadow-[0px_0px_5px_rgba(0,0,0,0.40)]
                "
              >
                Close
              </Button>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
