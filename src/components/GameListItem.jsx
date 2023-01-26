import React from 'react';

function GameListItem({ img, title, excitement }) {
  function clicky() {
    console.log(title);
  }

  return (
    <div onClick={clicky} className="border-solid border-2 rounded-lg border-slate-900 cursor-pointer transform transition duration-300 hover:scale-105">
      <img
        src={img}
        alt="game image"
        className="w-full h-36 md:h-48 object-fill cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
        <dl>
          <dt className="text-sm font-medium text-slate-900">Excitement</dt>
          <dd className="flex items-end mb-3">
            <div className="sm:w-full md:w-full lg:w-1/2 bg-gray-500 rounded h-2.5 mr-2">
              <div className="bg-blue-600 h-2.5 rounded w-4/5"></div>
            </div>
            <span className="text-sm font-medium text-slate-900">{excitement}</span>
          </dd>
        </dl>
      </div>
    </div>
  )
}

export default GameListItem;