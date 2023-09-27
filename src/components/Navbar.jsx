import React from "react";
import { useState } from "react";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';



export default function Narbar()
{
    const navigateTo = (path) => {
        window.location.pathname = path;
      };

    return(
        <div className="text-white flex justify-between items-center h-24  mx-auto px-4 max-w-[1024px]">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">
                Action Pack Game
            </h1>
            <ul className="flex">
                <li className="p-4 cursor-pointer text-blue-500 hover:text-blue-700 transition duration-300" onClick={() => navigateTo('/')}>Home</li>
                <li className="p-4 cursor-pointer text-blue-500 hover:text-blue-700 transition duration-300" onClick={() => navigateTo('/about')}>About</li>
                <li className="p-4 cursor-pointer text-blue-500 hover:text-blue-700 transition duration-300" onClick={() => navigateTo('/story')}>Story</li>
                <li className="p-4 cursor-pointer text-blue-500 hover:text-blue-700 transition duration-300" onClick={() => navigateTo('/characters')}>Characters</li>
            </ul>
        </div>
    )
}