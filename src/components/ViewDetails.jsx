import React from "react";
import { FaBackspace, FaRecycle } from "react-icons/fa";
import { IoIosArrowRoundBack, IoIosSearch } from "react-icons/io";
import { MdSync } from "react-icons/md";
import venueLogo from '../assets/image/company.png'
import exb1 from '../assets/image/exb1.jpg'
import exb2 from '../assets/image/exb2.jpg'
import { useNavigate } from "react-router-dom";
import { useProject } from "./ProjectContext";
const ViewDetails = () => { 
    const { selectedProject } = useProject(); // ✅ Get selected project
  const navigate = useNavigate();

  if (!selectedProject) {
    return <p>No project selected. <button onClick={() => navigate("/")}>Go Back</button></p>;
  }
  return (
    <>
    <button className="flex items-center border p-1 rounded-md px-3 gap-2" onClick={() => navigate("/")}><IoIosArrowRoundBack size={20} className="text-gray-500"/>Go Back</button>
      {/* <!-- Navbar --> */}
      <div className="flex items-center justify-between mb-4 mt-2">
        <h1 className="text-3xl font-bold">{selectedProject.name}</h1>
        <div className="relative ms-auto">
          <input
            type="text"
            placeholder="Search by location, user..."
            className=" w-[240px] px-2 py-2 pl-10 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <IoIosSearch
            size={22}
            color="#333"
            className="absolute left-3 top-3 text-gray-400 text-lg"
          />
        </div>
      </div>
      {/* <!-- Tabs --> */}
      <nav class="flex">
        <div className="flex space-x-8 border-b mt-4">
          <button class="pb-2 border-b-2 border-blue-500 text-blue-600 font-semibold">
            Details
          </button>
          <button class="pb-2 text-gray-500 hover:text-blue-600">
            Contractors
          </button>
          <button class="pb-2 text-gray-500 hover:text-blue-600">
            Quotations
          </button>
        </div>

        <button className="ms-auto rounded-3xl h-[35px] w-[80px] text-white flex items-center " style={{background:'#000',padding:'10px'}}>
          Sync <MdSync size={20} style={{position:'relative',left:'6px'}}/>
        </button>
      </nav>

      {/* <!-- Details Section --> */}
      <section class="bg-white  rounded-lg p-6 mx-8 mt-6">
        <div class="flex items-center space-x-6">
          {/* <!-- Company Logo --> */}
          <img
            src={venueLogo}
            alt="Company Logo"
            class="w-[150px] h-[150px] rounded-full object-cover"
          />

          {/* <!-- Details --> */}
          <div class="grid grid-cols-4 gap-4 w-full">
            <div>
              <p class="text-gray-500 text-sm">Start date</p>
              <p class="text-md font-semibold">{selectedProject.start_date}</p>
            </div>
            <div>
              <p class="text-gray-500 text-sm">End date</p>
              <p class="text-md font-semibold">{selectedProject.end_date}</p>
            </div>
            <div>
              <p class="text-gray-500 text-sm">Venue name</p>
              <p class="text-md font-semibold">{selectedProject.venue}</p>
            </div>
            <div>
              <p class="text-gray-500 text-sm">Venue country</p>
              <p class="text-md font-semibold">UAE</p>
            </div>
            <div>
              <p class="text-gray-500 text-sm">Venue hall number</p>
              <p class="text-md font-semibold">{selectedProject.hall_number}</p>
            </div>
            <div>
              <p class="text-gray-500 text-sm">Venue stand number</p>
              <p class="text-md font-semibold">{selectedProject.stand_number}</p>
            </div>
            <div>
              <p class="text-gray-500 text-sm">Venue city</p>
              <p class="text-md font-semibold">Dubai</p>
            </div>
            <div>
              <p class="text-gray-500 text-sm">Total sq. mtr</p>
              <p class="text-md font-semibold">{selectedProject.total_area}</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Images Grid --> */}
      <section class="bg-white  rounded-lg p-6 mx-8 mt-6">
        <div class="grid grid-cols-3 gap-6">
          <img
            src={exb1}
            alt="Exhibition Stand"
            class="rounded-lg "
          />
          <img
            src={exb2}
            alt="Exhibition Stand"
            class="rounded-lg "
          />
          <img
            src={exb1}
            alt="Exhibition Stand"
            class="rounded-lg "
          />
          <img
            src={exb2}
            alt="Exhibition Stand"
            class="rounded-lg "
          />
          <img
            src={exb1}
            alt="Exhibition Stand"
            class="rounded-lg "
          />
          <img
            src={exb2}
            alt="Exhibition Stand"
            class="rounded-lg "
          />
        </div>
      </section>
    </>
  );
};

export default ViewDetails;
