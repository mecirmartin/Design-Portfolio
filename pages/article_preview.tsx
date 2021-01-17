import React from "react"
import Head from "next/head"

const Home = () => (
  <div className="m-10 bg-gray-200 ">
    <Head>
      <title>Article preview component</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="mx-auto lg:w-4/5 lg:flex">
      <div className="relative pb-2/3 lg:pb-0 lg:pr-2/3">
        <img
          className="absolute w-full h-full rounded-tr-md rounded-tl-md lg:rounded-bl-md lg:rounded-tr-none"
          src="/images/drawers.jpg"
          alt="Image with drawers"
        />
      </div>
      <div className="p-8 bg-white rounded-br-md rounded-bl-md lg:rounded-bl-none lg:rounded-tr-md">
        <h2 className="font-semibold text-gray-600">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h2>
        <p className="mt-4 text-sm text-gray-400">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="flex items-center justify-between mt-8">
          <div className="flex ">
            <img
              className="w-10 h-10 rounded-full"
              src="/images/avatar-michelle.jpg"
              alt="Person avatar"
            />

            <div className="ml-4">
              <p className="text-sm font-semibold text-gray-700">
                Michelle Appleton
              </p>
              <p className="text-sm text-gray-400">28 Jun 2020</p>
            </div>
          </div>
          <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
              <path
                fill="#6E8098"
                d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Home
