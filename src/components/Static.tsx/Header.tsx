import { useState } from "react";
import { FiSearch } from "react-icons/fi"
import logo from "../../assets/b0ddaa4bf50e7b2e044992775aca89a52788b07e501b7ded9c1e00a8c19233e9.png"
const Header = () => {
    return (
        <div className="w-[100%] h-[50px] bg-white flex
         items-center justify-center fixed">

            <div className="w-[97%] h-[40px] flex
             justify-between items-center">
                <div className="min-w h-[100%] flex justify-between 
                items-center  gap-[20px]">
                    <img
                        src={logo}
                        className="w-[30px] h-[30px] rounded-[50%] bg-orange
                    -500" />
                    <div className="text-[14px] font-semibold text-slate-600">product</div>
                    <div className="text-[14px] font-semibold  text-slate-600">Pricing</div>
                    <div className="text-[14px] font-semibold  text-slate-600">Enterprise</div>
                    <div className="text-[14px] font-semibold  text-slate-600">Resources and support</div>
                    <div className="text-[14px] font-semibold  text-slate-600">Public API Network</div>
                </div>

                <div className="w-[170px] h-[32px] flex 
                flex-row border-[1px] border-solid border-gray-500
                justify-center items-center gap-[7px] rounded-[5px] bg-gray-100
                ">
                    <div className="">
                        <FiSearch />
                    </div >
                    <input
                        placeholder="search postman"
                        className="w-[70%] h-[100%] bg-transparent
                        placeholder:text-black text-[15px]
                        ">
                    </input>
                </div>
                <div className="flex justify-between min-w gap-[10px]">
                    <button className="w-[110px] h-[32px]  text-[14px]
                    border-[1px] border-solid border-gray-500 rounded-[5px]
                    ">
                        contact sales
                    </button>
                    <button className="w-[80px] h-[32px]  text-[14px]
                    border-[1px] border-solid border-gray-500 rounded-[5px]
                    ">
                        Sign in
                    </button>
                    <button className="w-[110px] h-[32px]  text-[14px]
                      bg-orange-500 text-white rounded-[5px]
                    ">
                        sign up for free
                    </button>
                </div>
            </div>
        </div>


    );
};

export default Header;