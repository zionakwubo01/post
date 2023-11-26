import React from 'react'
import api from "../../assets/api.png"
const Future = () => {
    return (
        <div className='w-[100%] h-[300px] bg-gray-100
        flex items-center justify-center
        '>
            <div className='w-[78%] h-[100%]
            flex justify-between items-center flex-row
            '>

                <div className='flex flex-col gap-[20px]'>
                    <div>
                        The future is API-first
                    </div>
                    <div className='text-[13px]'>At Postman, we believe the future will be built with APIs. The API-first World graphic novel tells the story <br />

                        of how and why the API-first worl
                        d is coming to be.</div>
                    <button className='text-[10px] w-[150px] h-[30px]
                    border-[1px] border-solid border-y-gray-400
                    '>
                        Read the graphic Novel
                    </button>
                </div>
                <img src={api} className='w-[30%]' />
            </div>

        </div>
    )
}

export default Future