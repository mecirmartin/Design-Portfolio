import React from "react"

const room_homepage_master = () => {
  return (
    <div className="">
      <div className="relative">
        <nav className="absolute z-10 flex items-center justify-center w-full pt-11">
          <div className="absolute left-0 ml-5 ">
            <svg
              width="20"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white "
            >
              <path
                d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
                fill="#FFF"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="font-sans text-2xl font-semibold text-white">room</h1>
        </nav>

        <div className="relative">
          <img
            className=""
            src="/images/room_homepage_master/mobile-image-hero-1.jpg"
            alt="chair"
          />
          <div className="absolute bottom-0 right-0 z-10 flex bg-black">
            <div className="flex items-center justify-center w-14 h-14">
              <svg
                width="14"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white "
              >
                <path
                  d="M13 0L1 12l12 12"
                  stroke="#FFF"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </div>

            <div className="flex items-center justify-center w-14 h-14">
              <svg
                width="14"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white "
              >
                <path
                  d="M1 0l12 12L1 24"
                  stroke="#FFF"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="white-container">
        <div className="mt-16 mx-9">
          <h1 className="text-2xl font-semibold">
            Discover innovative ways to decorate
          </h1>
          <p className="my-6 leading-relaxed text-gray-400 font-small">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
        </div>
      </div>
    </div>
  )
}

export default room_homepage_master
