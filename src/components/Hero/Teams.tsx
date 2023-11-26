

import data2 from "../../Data/data2.json"
import { FaArrowRight } from "react-icons/fa"
const Teams = () => {
    return (
        <div className='w-[100%] h-[300px] bg-white flex items-center
        justify-center
        '>
            <div className='w-[78%] h-[100%]  flex flex-col 
            justify-center gap-[20px]'>
                <div className='flex flex-row gap-[10px] 
                items-center 
                '>
                    <p className='font-bold text-[20px]'>Popular teams</p>
                    <p className='text-blue-700 text-[14px]
                    
                    '>View all teams</p>
                    <FaArrowRight />
                </div>

                <div className='w-[100%] h-[230px] flex flex-row gap-[15px]'>
                    {
                        data2.map((el) => (
                            <div className='w-[25%] h-[100%]
                        bg-white
                        border-[1px] border-solid border-gray-500 rounded-[10px]
                        pl-[20px] flex flex-col justify-center gap-[10px]
                        '>
                                <img src={el.img} className="
                           w-[40px] h-[40px]
                           "/>
                                <div>{el.title}</div>
                                <div className="text-[15px]">
                                    {el.desc}
                                </div>
                                <div className='flex flex-row gap-[10px]'>
                                    <div className="text-[12px]">
                                        {el.views}
                                    </div>
                                    <div className="text-[12px]">
                                        {el.col}
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>


            </div>

        </div>
    )
}

export default Teams