import React, { useState, Fragment } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import SidebarSubSubMenu from "./SidebarSubSubMenu";

function SidebarSubmenu({ route, router }) {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  function handleDropdownMenuClick() {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  }

  return (
    <>
      <a onClick={handleDropdownMenuClick}>
        <li className="inline-flex items-center text-sm px-[15px] hover:px-3 py-4 hover:border-l-[3px] hover:border-white hover:font-semibold text-primary text-opacity-70 hover:text-primary transform transition duration-[125ms] cursor-pointer w-full hover:bg-primary-darker-darker hover:bg-opacity-10">
          <span className="flex-shrink-0 w-1/12">
            <i className={route.icon}></i>
          </span>
          <div className="flex-auto ml-2">{route.name}</div>
          <Transition
            show={true}
            as={Fragment}
            enter="transition ease-in-out duration-175"
            enterFrom="transform rotate-[-120deg]"
            enterTo="transform rotate-0"
            leave="transition ease-in-out duration-175"
            leaveFrom="transform rotate-0"
            leaveTo="transform rotate-[-120deg]"
          >
            <span>
              <i
                className={
                  "fas fa-chevron-down transform transition-all duration-500 ease-in-out " + (isDropdownMenuOpen ? "fa-rotate-180" : "")
                }
              ></i>
            </span>
          </Transition>
        </li>
      </a>
      <Transition
        show={isDropdownMenuOpen}
        as={Fragment}
        enter="transition ease-in-out duration-175"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition ease-in-out duration-200"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0"
      >
        <ul className="w-full">
          {route.routes.map((r) => (
            r.routes ? (
              <SidebarSubSubMenu route={r} router={router} key={r.name} />
            ) : (
              <Link href={r.path} key={r.name}>
                <li
                  className={
                    (router.pathname == r.path
                      ? "border-l-[3px] border-white px-2 text-primary text-opacity-100 font-semibold"
                      : "text-primary text-opacity-70 px-[41px] ") +
                    "inline-flex items-center my-1 text-sm 2xl:py-4 py-3 hover:px-[38px] hover:border-l-[3px]  hover:border-white text-primary hover:bg-primary-darker hover:bg-opacity-10 hover:text-opacity-100 hover:font-semibold transform transition duration-150 cursor-pointer w-full"
                  }
                >
                  <div className="flex-auto">{r.name}</div>
                </li>
              </Link>
            )
          ))}
        </ul>
      </Transition>
    </>
  )
}

export default SidebarSubmenu;
