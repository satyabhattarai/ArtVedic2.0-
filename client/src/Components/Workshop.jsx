import { useEffect, useState } from "react";

import React from "react";
import { fetchDataFromApi } from "../API/api";
import { useParams } from "react-router-dom";

const Workshop = () => {
  const [workitem, setworkitem] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getworkshopitem();
  }, []);

  async function getworkshopitem() {
    let result = await fetchDataFromApi(
      `/api/workshops?populate=*&filters[id]=${id}`
    );
    setworkitem(result.data);
  }
  console.log(workitem);
  return (
    <>
      {workitem && workitem.length > 0 && (
        <div className="flex flex-cols-1">
          <div>
            <h1 className="mt-8 mb-8 text-4xl font-bold text-white">
              {workitem[0].attributes.name}
            </h1>
            <div className="grid grid-cols-2 p-8 mx-auto gap-9">
              <div>
                <img
                  className="border rounded-s border-[#5C6B94] p-[16px]"
                  src={
                    process.env.REACT_APP_DEV_URL +
                    workitem[0].attributes.img.data.attributes.url
                  }
                  alt="Product Item"
                  width={627}
                  height={727}
                />
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-semibold text-white">
                  {/* {workshop.name || "Painting Workshop"} */}
                  {workitem[0].attributes.name}
                </h2>
                <p className="mb-4 text-gray-300">
                  {/* {workshop.attributes.description} */}
                  {workitem[0].attributes.desc}
                </p>
                <p className="pb-8 text-gray-600 ">
                  You can join the workshop when the organizer starts their
                  meeting. Click the link below to join your workshop.
                </p>
                <a
                  href="/"
                  // workshop.zoomLink ||
                  // "https://meet.google.com/ogt-ypft-bgw?pli=1&ijlm=1703890538693&adhoc=1&hs=187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Join Workshop on Google Meet
                </a>
              </div>
            </div>
            {/* {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
              className="p-6 transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <h2 className="mb-4 text-2xl font-semibold">{workshop.title}</h2>
              <p className="mb-4 text-gray-600">{workshop.description}</p>
              <a
                href={workshop.zoomLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Join Workshop on Zoom
              </a></div> */}
          </div>
          <div class="flex py-8 pl-4 flex-row-reverse ">
            <div class="max-w-sm w-full shadow-lg">
              <div class="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-lg border-8s">
                <div class="px-4 flex items-center justify-between">
                  <span
                    tabindex="0"
                    class="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800"
                  >
                    October 2020
                  </span>
                  <div class="flex items-center">
                    <button
                      aria-label="calendar backward"
                      class="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-chevron-left"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="15 6 9 12 15 18" />
                      </svg>
                    </button>
                    <button
                      aria-label="calendar forward"
                      class="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler  icon-tabler-chevron-right"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="9 6 15 12 9 18" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="flex items-center justify-between pt-12 overflow-x-auto">
                  <table class="w-full">
                    <thead>
                      <tr>
                        <th>
                          <div class="w-full flex justify-center">
                            <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                              Mo
                            </p>
                          </div>
                        </th>
                        <th>
                          <div class="w-full flex justify-center">
                            <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                              Tu
                            </p>
                          </div>
                        </th>
                        <th>
                          <div class="w-full flex justify-center">
                            <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                              We
                            </p>
                          </div>
                        </th>
                        <th>
                          <div class="w-full flex justify-center">
                            <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                              Th
                            </p>
                          </div>
                        </th>
                        <th>
                          <div class="w-full flex justify-center">
                            <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                              Fr
                            </p>
                          </div>
                        </th>
                        <th>
                          <div class="w-full flex justify-center">
                            <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                              Sa
                            </p>
                          </div>
                        </th>
                        <th>
                          <div class="w-full flex justify-center">
                            <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                              Su
                            </p>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="pt-6">
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                        </td>
                        <td class="pt-6">
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                        </td>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                        </td>
                        <td class="pt-6">
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                              1
                            </p>
                          </div>
                        </td>
                        <td class="pt-6">
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                              2
                            </p>
                          </div>
                        </td>
                        <td class="pt-6">
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100">
                              3
                            </p>
                          </div>
                        </td>
                        <td class="pt-6">
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100">
                              4
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                              5
                            </p>
                          </div>
                        </td>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                              6
                            </p>
                          </div>
                        </td>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                              7
                            </p>
                          </div>
                        </td>
                        <td>
                          <div class="w-full h-full">
                            <div class="flex items-center justify-center w-full rounded-full cursor-pointer">
                              <a
                                role="link"
                                tabindex="0"
                                class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full"
                              >
                                8
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                              9
                            </p>
                          </div>
                        </td>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100">
                              10
                            </p>
                          </div>
                        </td>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100">
                              11
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                              12
                            </p>
                          </div>
                        </td>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                              13
                            </p>
                          </div>
                        </td>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                              14
                            </p>
                          </div>
                        </td>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                              15
                            </p>
                          </div>
                        </td>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                              16
                            </p>
                          </div>
                        </td>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100">
                              17
                            </p>
                          </div>
                        </td>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100">
                              18
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                              19
                            </p>
                          </div>
                        </td>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                              20
                            </p>
                          </div>
                        </td>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                              21
                            </p>
                          </div>
                        </td>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                              22
                            </p>
                          </div>
                        </td>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                              23
                            </p>
                          </div>
                        </td>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100">
                              24
                            </p>
                          </div>
                        </td>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100">
                              25
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                              26
                            </p>
                          </div>
                        </td>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                              27
                            </p>
                          </div>
                        </td>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                              28
                            </p>
                          </div>
                        </td>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                              29
                            </p>
                          </div>
                        </td>
                        <td>
                          <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                              30
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
                <div class="px-4">
                  <div class="border-b pb-4 border-gray-400 border-dashed">
                    <p class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                      9:00 AM
                    </p>
                    <a
                      tabindex="0"
                      class="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
                    >
                      Zoom call with design team
                    </a>
                    <p class="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                      Discussion on UX sprint and Wireframe review
                    </p>
                  </div>
                  <div class="border-b pb-4 border-gray-400 border-dashed pt-5">
                    <p class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                      10:00 AM
                    </p>
                    <a
                      tabindex="0"
                      class="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
                    >
                      Orientation session with new hires
                    </a>
                  </div>
                  <div className="text-center">
                    <button className="p-3 mt-4 rounded-lg bg-cyan-100">
                      Book an appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Workshop;
