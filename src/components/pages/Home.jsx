import React from "react";
import Hero from "../layouts/Hero";
import lottery from "../../assets/lottery.png";
import avatar from "../../assets/bigSmall.png";
import slots from "../../assets/casino.png";
import sports from "../../assets/sport.png";
import rummy from "../../assets/rummy.png";
import famous from "../../assets/famous.png";
import rummy2 from "../../assets/last image.png";
import fishing from "../../assets/last image 2.png";
import { GrAnnounce } from "react-icons/gr";
import { Link } from "react-router-dom";

// Optional: Use Helmet for SEO metadata
import { Helmet } from "react-helmet";

function Home() {
  return (
    <main className="flex flex-col items-center mb-2 overflow-y-auto ">
      {/* SEO Metadata */}
      <Helmet>
        <title>BDG Game - Play Lottery, Sports, Rummy & More</title>
        <meta
          name="description"
          content="Play Lottery, Casino Slots, Rummy, and Sports games with BDG Game. Fast, secure, and fun!"
        />
      </Helmet>
      /* Hero Section */
      <header className="mx-2 lg:mt-16 mt-14 w-full">
        <Hero />
      </header>
      <div
        className="flex justify-between px-2 items-center lg:bg-transparent w-[95%] rounded-lg mt-2 py-1 text-white text-center lg:py-4  lg:text-2xl"
        role="region"
        aria-label="Notifications"
      >
        <span className=" text-2xl stroke-cyan-500 lg:text-4xl">
          <GrAnnounce />
        </span>
        <div className="overflow-hidden flex-1 mx-2 relative h-8">
          <p
            className="whitespace-nowrap absolute animate-marquee-right lg:text-3xl"
            style={{ animation: "marquee-right 10s linear infinite" }}
          >
            Latest Notification or Offers
          </p>
        </div>
        <button className="bg-gradient-to-b from-[#FAE59F] to-[#C4933F] px-1 rounded-lg text-black lg:text-3xl">
          Details
        </button>
      </div>
      <style>
        {`
      @keyframes marquee-right {
        0% {
          left: -100%;
        }
        100% {
          left: 100%;
        }
      }
      .animate-marquee-right {
        will-change: left;
        animation: marquee-right 20s linear infinite;
      }
      `}
      </style>
      {/* Top Category Section */}
      <section
        className="w-full px-3 mt-3 flex justify-between gap-2 lg:justify-center lg:gap-6"
        aria-label="Top Game Categories"
      >
        <article className="bg-gradient-to-b from-[#FAE59F] to-[#C4933F] text-black  w-1/3 h-34 rounded-lg text-center lg:h-60 lg:w-1/4 lg:flex lg:flex-col lg:items-center md:h-42 flex flex-col items-center">
          <Link
            to="/lottery"
            className="flex flex-col items-center w-full h-full"
          >
            <img
              src={avatar}
              alt="Lottery Games"
              className="object-cover w-[85%] md:w-[35%] mx-auto mb-2 mt-1"
            />
            <h2 className="font-bold lg:text-3xl md:text-2xl">Original</h2>
          </Link>
        </article>

        <article className="bg-gradient-to-b from-[#FAE59F] to-[#C4933F] text-black w-1/3 h-34 rounded-lg text-center lg:h-60 lg:w-1/4 lg:flex lg:flex-col lg:items-center md:h-42 flex flex-col items-center">
          <Link
            to="/mine"
            className="flex flex-col items-center w-full h-full"
          >
            <img
              src={lottery}
              alt="Lottery Games"
              className="object-cover w-[85%] md:w-[35%] mx-auto mb-2"
            />
            <h2 className="font-bold lg:text-3xl md:text-2xl">Mines</h2>
          </Link>
        </article>

        <article className="bg-gradient-to-b from-[#FAE59F] to-[#C4933F] text-black w-1/3 h-34 rounded-lg text-center lg:h-60 lg:w-1/4 lg:flex lg:flex-col lg:items-center md:h-42 flex flex-col items-center">
          <img
            src={slots}
            alt="Casino Slots"
            className="object-cover w-[85%] md:w-[30%] mx-auto mb-2"
          />
          <h2 className="font-bold lg:text-3xl md:text-2xl">Slots</h2>
        </article>
      </section>
      {/* Second Category Section */}
      <section
        className="secondSection w-[95%] bg-gradient-to-b from-[#FAE59F] to-[#C4933F] rounded-lg mt-3 grid grid-cols-3 text-black text-center gap-0 lg:w-[98%] lg:grid-cols-4 "
        aria-label="More Game Options"
      >
        <article className="w-full flex flex-col items-center">
          <img
            src={sports}
            alt="Sports Betting"
            className="object-cover w-[85%] lg:w-[50%] md:w-[45%] mx-auto"
          />
          <h3 className="lg:text-2xl font-bold">Sports</h3>
        </article>

        <article className="w-full flex flex-col items-center">
          <img
            src={famous}
            alt="Popular Games"
            className="object-cover w-[85%] lg:w-[50%] md:w-[45%] mx-auto"
          />
          <h3 className="lg:text-2xl font-bold">Popular</h3>
        </article>

        <article className="w-full flex flex-col items-center">
          <img
            src={rummy}
            alt="Rummy Card Game"
            className="object-cover w-[85%] lg:w-[50%] md:w-[45%] mx-auto"
          />
          <h3 className="lg:text-2xl font-semibold">Casino</h3>
        </article>

        {/* Extra hidden for mobile */}
        <article className="w-full hidden lg:flex flex-col items-center">
          <img
            src={rummy}
            alt="Rummy Game Again"
            className="object-cover w-[85%] lg:w-[50%] mx-auto"
          />
          <h3 className="lg:text-2xl font-bold">Casino</h3>
        </article>
      </section>


      {/* third Category Section */}
      <section
        className="secondSection w-[95%]  gap-4 rounded-lg mt-3 grid grid-cols-2 text-black text-center  lg:w-[98%] lg:grid-cols-4 lg:mb-30 mb-30"
        aria-label="More Game Options"
      >
        <article className="w-full flex flex-col items-center bg-gradient-to-b from-[#FAE59F] to-[#C4933F] rounded-2xl">
          <img
            src={rummy2}
            alt="Sports Betting"
            className="object-cover w-[85%] lg:w-[50%] md:w-[45%] mx-auto "
          />
          <h3 className="lg:text-2xl font-bold">Rummy</h3>
        </article>

        <article className="w-full flex flex-col items-center bg-gradient-to-b from-[#FAE59F] to-[#C4933F] rounded-2xl">
          <img
            src={fishing}
            alt="Popular Games"
            className="object-cover w-[85%] lg:w-[50%] md:w-[45%] mx-auto"
          />
          <h3 className="lg:text-2xl font-bold">Fishing</h3>
        </article>



        {/* Extra hidden for mobile */}
        {/* <article className="w-full hidden lg:flex flex-col items-center">
          <img
            src={rummy}
            alt="Rummy Game Again"
            className="object-cover w-[85%] lg:w-[50%] mx-auto"
          />
          <h3 className="lg:text-2xl font-bold">Rummy</h3>
        </article> */}
      </section>
      {/* Footer */}
    </main>
  );
}

export default Home;
