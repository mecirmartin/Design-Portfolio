import React from "react"

const profileCard = () => {
  return (
    <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden bg-blue-teal">
      <img
        src="/images/profileCard/bg-pattern-top.svg"
        alt="circle pattern"
        className="absolute md:-top-3/4 -left-48 -top-48"
      />
      <img
        src="/images/profileCard/bg-pattern-bottom.svg"
        alt="circle pattern"
        className="absolute md:-bottom-3/4 -bottom-44 -right-48"
      />
      <div className="z-10 flex flex-col h-full overflow-hidden bg-white card-container rounded-xl">
        <img
          src="/images/profileCard/bg-pattern-card.svg"
          alt="background pattern"
          className="object-cover w-full h-1/3"
        />
        <div className="relative flex flex-col items-center justify-center h-full">
          <img
            src="/images/profileCard/image-victor.jpg"
            alt="face image"
            className="absolute border-4 border-white rounded-full left-28 -top-12"
          />
          <div className="h-full mt-16 ">
            <p className="pt-2 text-center">
              <span className="text-xl font-bold text-gray-700">
                Victor Crest
              </span>
              <span className="mx-2 text-xl text-gray-400">26</span>
            </p>
            <p className="mt-1 text-center text-gray-400">London</p>
          </div>
          <div className="absolute bottom-0 flex items-center w-full h-24 border-t-2 border-gray-400 border-opacity-30 justify-evenly">
            <div className="flex flex-col text-center">
              <span className="text-xl font-bold text-gray-700">80K</span>
              <span className="text-xs tracking-widest text-gray-400">
                Followers
              </span>
            </div>
            <div className="flex flex-col text-center">
              <span className="text-xl font-bold text-gray-700">803K</span>
              <span className="text-xs tracking-widest text-gray-400">
                Likes
              </span>
            </div>
            <div className="flex flex-col text-center">
              <span className="text-xl font-bold text-gray-700">1.4K</span>
              <span className="text-xs tracking-widest text-gray-400">
                Photos
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default profileCard
