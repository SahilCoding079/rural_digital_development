import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import Card from "../shared/Card";
import { FaPlantWilt, FaUsers } from "react-icons/fa6";
import { PiBuildingApartmentFill, PiStudentFill } from "react-icons/pi";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaRoad, FaRegComment, FaHeart, FaShareAlt } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import StatsCard from "../shared/StatsCard";
import { GiGraduateCap } from "react-icons/gi";

const Home = () => {
  return (
    <main className="overflow-x-hidden ">
      <section className="relative bg-[url('Hero_banner2.png')] object-cover bg-center bg-no-repeat mt-12 ">
        <div className="absolute inset-0 bg-black/20 opacity-50"></div>
        <div className="relative z-10 text-white max-w-3xl p-4 md:p-20 space-y-7 flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Suryapura Village Development Portal
          </h1>
          <ul className="sm:text-md sm:block md:text-lg md:flex justify-start gap-6 mt-4 list-disc list-inside bg-green-700 rounded-md px-3 py-2">
            <li className="md:list-none">Education</li>
            <li className="">Farmers</li>
            <li className="">Panchayat</li>
            <li className="">Road Development</li>
          </ul>
          <p className="text-base md:text-2xl max-w-2/3">
            A digital platform dedicated to bringing progress and prosperity to
            Suryapur
          </p>
          <div className="mt-6 flex flex-col md:flex-row justify-start gap-5">
            <Link
              to="/schemes"
              className="bg-green-700 text-white font-medium px-6 py-3 rounded-md text-lg hover:bg-white hover:text-green-700 transition-colors flex justify-center items-center gap-2"
            >
              Explore Schemes <GoArrowRight size={22} />
            </Link>
            <Link
              to="/schemes"
              className="bg-white text-black font-medium px-6 py-3 rounded-md text-lg hover:bg-white hover:text-green-700 transition-colors flex justify-center items-center gap-2"
            >
              Register a Complaint <GoArrowRight size={22} />
            </Link>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="p-8 md:p-10 ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="inline-block border-b-2 border-emerald-600 pb-1 text-3xl font-bold mb-4">
            Our Key Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-7xl mx-auto">
          <Card
            icon={<FaPlantWilt size={32} />}
            heading="Farmer Support"
            text="Get information about farming, resources, subsidies and training."
            btn={<GoArrowRight />}
            className="bg-green-100 rounded-full p-8 text-green-800"
          />
          <Card
            icon={<GiGraduateCap size={32} />}
            heading="Education"
            text="Information about schools, scholarships, admissions and education programs."
            btn={<GoArrowRight />}
            className="rounded-full p-8 bg-violet-100 text-violet-900"
          />
          <Card
            icon={<FaBuildingColumns size={32} />}
            heading="Panchayat Services"
            text="Access panchayat information, certificates, applications and other services."
            btn={<GoArrowRight />}
            className="rounded-full p-7 bg-orange-100 text-orange-500"
          />
          <Card
            icon={<FaRoad size={32} />}
            heading="Road Development"
            text="Get updates on road construction work and infrastructure projects."
            btn={<GoArrowRight />}
            className="rounded-full p-7 bg-sky-100 text-sky-600"
          />
          <Card
            icon={<FaRegCreditCard size={32} />}
            heading="Digital Services"
            text="Digital ID, documents, online registration and verification services."
            btn={<GoArrowRight />}
            className="rounded-full p-7 bg-teal-100 text-teal-800"
          />
          <Card
            icon={<FaHeartbeat size={32} />}
            heading="Health Services"
            text="Information about health centers, schemes and medical facilities."
            btn={<GoArrowRight />}
            className="rounded-full p-7 bg-red-100 text-red-600"
          />
        </div>
      </section>
      {/* Stats Section */}
      <section className="bg-green-50 p-8 md:p-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 inline-block border-b-2 border-emerald-600 pb-1">
            Development at a Glance
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 max-w-7xl mx-auto">
          <StatsCard
            icon={<FaUsers size={36}/>}
            number="500+"
            text="Farmers Connected"
            className="text-green-800"
          />
          <StatsCard icon={<FaRoad size={36} />} number="15 km" text="New Roads Built" className="text-orange-500" />
          <StatsCard
            icon={<PiBuildingApartmentFill size={36} />}
            number="5+"
            text="Digital Centers"
            className="text-sky-600"
          />
          <StatsCard
            icon={<GiGraduateCap size={36} />}
            number="3+"
            text="Schools Upgraded"
            className="text-violet-900"
          />
        </div>
      </section>
      {/* Social Posts Section */}
      <section className="p-6 md:p-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">From Our Community</h2>
            <p className="text-sm text-gray-600">Latest posts and highlights from our social feeds</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Post 1 */}
            <article className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-emerald-600 text-white p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold">Village Road Inauguration</h3>
                <p className="text-sm text-white/90 mt-2">Celebrating the opening of 5km of new road connecting neighboring hamlets.</p>
              </div>
              <div className="p-4 md:p-6 flex flex-col md:flex-row gap-8 bg-white">
                <div className="w-full md:w-1/3 bg-gray-100 rounded-md flex items-center justify-center h-44 md:h-32">
                  <img src="road_inauguration.png" alt="Road Inauguration Image" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 text-sm md:text-base mb-3 line-clamp-4">Local leaders and residents gathered today to mark the completion of the new road project. The road will greatly improve access to markets and healthcare for residents.</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 hover:text-emerald-600 cursor-pointer"><FaRegComment /> 12</button>
                      <button className="flex items-center gap-2 hover:text-rose-500 cursor-pointer"><FaHeart /> 86</button>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs">2d ago</span>
                      <button className="text-gray-500 hover:text-gray-700 cursor-pointer"><FaShareAlt /></button>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Post 2 */}
            <article className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-violet-700 text-white p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold">Education Drive Success</h3>
                <p className="text-sm text-white/90 mt-2">A week-long campaign reached hundreds of children with learning materials.</p>
              </div>
              <div className="p-4 md:p-6 flex flex-col md:flex-row gap-8 bg-white">
                <div className="w-full md:w-1/3 bg-gray-100 rounded-md flex items-center justify-center h-44 md:h-32">
                  <img src="books_distribution.png" alt="Education Drive Image" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 text-sm md:text-base mb-3 line-clamp-4">Volunteers distributed books and stationery and held interactive sessions in local schools to encourage enrollment and retention.</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 hover:text-emerald-600 cursor-pointer"><FaRegComment /> 8</button>
                      <button className="flex items-center gap-2 hover:text-rose-500 cursor-pointer"><FaHeart /> 120</button>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs">5d ago</span>
                      <button className="text-gray-500 hover:text-gray-700 cursor-pointer"><FaShareAlt /></button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
