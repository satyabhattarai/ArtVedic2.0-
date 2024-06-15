import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import React from "react";

const About = () => {
  return (
    <div className="bg-[#1E2433]">
      <div>
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div>
            <div className="grid justify-between grid-rows-3 text-white">
              <div className="rounded-lg h-max animate-fadeinright">
                <h1 className="text-[28px] px-5 ">Introduction</h1>
                <p className="px-5 pt-2 text-justify">
                  Welcome to Artvedic, where art comes to life in vibrant colors
                  and diverse forms. We are not just a platform; were like a big
                  family that loves all kinds of art. Whether its paintings,
                  drawings, or something totally new, weve got it. Were here to
                  show off amazing art from artists all around. Its not just
                  about buying; its about having fun, exploring, and finding art
                  that makes you go wow Join us in this awesome adventure where
                  art is like a big, colorful story waiting for you to discover.
                  Its not just pictures; its a whole world of imagination and
                  fun. Come on in and lets make art a big, happy part of your
                  day!
                </p>
              </div>
              <div className="mt-4 rounded-lg h-max animate-fadeinright">
                <h1 className="text-[28px] px-5 ">Our Goals and Mission</h1>
                <p className="px-5 pt-2 text-justify">
                  Our goal for the art website is to inspire creativity and
                  support artists while celebrating diverse forms of art from
                  around the world. We aim to make art accessible, engaging, and
                  educational for everyone, fostering a welcoming community that
                  connects people who share a passion for artistic expression.
                  By providing a platform for artists to showcase their work and
                  offering resources that enhance art appreciation, we strive to
                  have a positive impact on the art world and society at large,
                  making art a unifying and transformative force for individuals
                  and communities alike.
                </p>
              </div>
              <div>
                <p className="px-5 pt-2 text-justify">
                  Artvedic is more than just a place to buy art—its like a big,
                  friendly club for artists and people who love art. We want to
                  show off all kinds of cool art and help new artists get
                  noticed. Our goal is to make the art world a fun and welcoming
                  place where everyone can enjoy and be a part of something
                  creative. Come join us as we make art more awesome for
                  everyone!
                </p>
              </div>
            </div>
          </div>
          <div>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 768: 2, 800: 2 }}
            >
              <Masonry gutter="24px">
                <img
                  className="w-full h-auto animate-fadeinup"
                  src="/CV-Satya.jpeg"
                  alt="imagebrowse3"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <img
                  className="w-full h-auto animate-fadeinup"
                  src="/CV-Satya.jpeg"
                  alt="imagebrowse3"
                  width={0}
                  height={0}
                  sizes="100vw"
                />

                <img
                  className="w-full h-auto animate-fadeinup"
                  src="/CV-Satya.jpeg"
                  alt="imagebrowse3"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
      <h1 className="text-6xl text-center text-white">Developed By:</h1>
      <div className="grid justify-between grid-rows-3 gap-4">
        <div className="mt-[100px] ">
          <div className="grid grid-cols-2 mb-4">
            <div>
              <h1 className="text-4xl text-white">Satya Bhattarai</h1>
              <p className="text-2xl text-white"> Full-Stack Developer </p>
              <p className="text-2xl text-white">
                Contact No: 9847039601 <br />
                Email: satyabhattarai.055@gmail.com
              </p>
            </div>
            <div>
              <div className="relative w-32 h-32 ">
                <img
                  className=" max-w-full  rounded-full  overflow-hidden ml-[650px]"
                  src="/CV-Satya.jpeg"
                  alt="Satya"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 mb-4">
            <div>
              <h1 className="text-4xl text-white">Sushant Karki</h1>
              <p className="text-2xl text-white"> Full-Stack Developer </p>
              <p className="text-2xl text-white">
                Contact No: 9863328198 <br />
                Email: sushant@gmail.com
              </p>
            </div>
            <div className="relative w-32 h-32 ">
              <img
                className=" max-w-full  rounded-full  overflow-hidden ml-[650px]"
                src="/CV-Satya.jpeg"
                alt="Subidha"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 mb-4">
            <div>
              <h1 className="text-4xl text-white">Rohit Kumar Dhakal</h1>
              <p className="text-2xl text-white"> Full-Stack Developer </p>
              <p className="text-2xl text-white">
                Contact No: 9863328198 <br />
                Email: rohit@gmail.com
              </p>
            </div>
            <div className="relative w-32 h-32 ">
              <img
                className=" max-w-full  rounded-full  overflow-hidden ml-[650px]"
                src="/CV-Satya.jpeg"
                alt="rohit"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 mb-4">
            <div>
              <h1 className="text-4xl text-white">Utsav Shrestha</h1>
              <p className="text-2xl text-white"> Full-Stack Developer </p>
              <p className="text-2xl text-white">
                Contact No: 9808425193 <br />
                Email: Utsav@gmail.com
              </p>
            </div>

            <div className="relative w-32 h-32 ">
              <img
                className=" max-w-full  rounded-full  overflow-hidden ml-[650px]"
                src="/CV-Satya.jpeg"
                alt="Utsav"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
