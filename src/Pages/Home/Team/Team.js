import React from "react";

const Team = () => {
  return (
    <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Dream Team
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="text-red-400">Welcome </span>
          to our talented team of professionals
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Everyone says it, but in our case it’s true: our team is the secret to
          our success. Each of our employees is amazing in their own right, but
          together they are what makes <span className="text-red-400 font-semibold">Legal Network</span> such a fun and rewarding place to
          work.
        </p>
      </div>
      <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://i.postimg.cc/14xwTz51/mezbahul.png?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Mezbaul Abedin Forhan
            </p>
            <p className="text-sm text-gray-800">Manager</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://i.postimg.cc/Mpg2L21b/md-gias.png?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">MD GIAS UDDIN</p>
            <p className="text-sm text-gray-800">Senior Adviser</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://i.postimg.cc/3xHyp6cN/asif.png"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Md. Asif Iqbal
            </p>
            <p className="text-sm text-gray-800">Senior Adviser</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://i.postimg.cc/8zPJkYX6/sagor.png"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Sagar Biswas
            </p>
            <p className="text-sm text-gray-800">Senior Adviser</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://i.postimg.cc/5yRGHTq2/shabaj.png"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Mohammad Shabaj Khan
            </p>
            <p className="text-sm text-gray-800">Senior Adviser</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://i.postimg.cc/k4ZzGLyX/mir.png"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Mir Hussain Murtaza
            </p>
            <p className="text-sm text-gray-800">Senior Adviser</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://i.postimg.cc/k52yGGYK/mehdi.png"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Md. Mehedi Hasan
            </p>
            <p className="text-sm text-gray-800">Senior Adviser</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://i.postimg.cc/JzNLg753/rokib.png"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Rokibul Hasan Rokib
            </p>
            <p className="text-sm text-gray-800">Senior Adviser</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://i.postimg.cc/XJ0xP3x5/zakaria.png"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Mir Jakariya
            </p>
            <p className="text-sm text-gray-800">Senior Adviser</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Team;
