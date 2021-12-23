import React, { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Popup = ({ data, setSelected, getSelected }) => {
  const [selectedItem, setSelectedItem] = useState(getSelected);
  useEffect(() => {
    setSelected(selectedItem);
  }, [selectedItem]);

  return (
    <Listbox value={selectedItem} onChange={setSelectedItem}>
      {({ open }) => (
        <>
          <div className="mt-2 relative w-1/2 py-0.5 z-50 border-2 border-gray-400 rounded-lg">
            <Listbox.Button className="relative w-full text-black text-xl bg-white  rounded-lg shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none  sm:text-sm lg:text-xs 2xl:text-sm">
              <span className="flex items-center">
                <span className="ml-3 block text-base font-bold truncate">
                  {selectedItem}
                </span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full dark:text-white  bg-white  shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm lg:text-xs 2xl:text-sm">
                {data.map((value, id) => (
                  <Listbox.Option
                    key={id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-secondary" : "dark:text-white",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={value}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {value}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default Popup;
