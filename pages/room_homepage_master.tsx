import React from "react"

const room_homepage_master = () => {
  return (
    <div className="relative ">
      <nav className="relative z-10 flex items-center justify-center pt-12">
        <div className="absolute left-0 ">
          <svg
            width="20"
            height="14"
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-600 stroke-current"
          >
            <path
              d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
              fill="#FFF"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <h1 className="font-sans text-white">room</h1>
      </nav>
      <img
        className="absolute top-0 object-cover"
        src="/images/room_homepage_master/mobile-image-hero-1.jpg"
        alt="chair"
      />
    </div>
  )
}

export default room_homepage_master
