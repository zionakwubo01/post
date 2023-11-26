
import data from "../../Data/Data.json"
import space from "../../assets/space.svg"
const What = () => {
    return (
        <div className="w-[100%] h-[500px] bg-gray-100
        flex justify-center items-center
        ">
            <div className="w-[78%] h-[100%] 
            flex flex-col justify-center gap-[30px] relative

            ">
                <img
                    className="absolute w-[300px] right-0 bottom-[370px]"
                    src={space} />
                <div className="flex flex-col gap-[10px]">

                    <div className="text-[25px] font-bold">What is Postman</div>
                    <p className="text-[13px] text-gray-600">
                        Postman is an API platform for
                        building and using APIs. Postman
                        simplifies each step of <br />the API lifecycle and
                        streamlines collaboration so you can
                        create better APIs—faster.
                    </p>
                </div>
                <div className="flex flex-row gap-[20px]">
                    {
                        data.map((el: any) => (
                            <div className="w-[280px] h-[190px] bg-white 
                        rounded-[5px] pl-[10px] flex  flex-col justify-center
                        gap-[10px] 
                        ">
                                <img src={el.img} className="w-[30px] h-[30px]" />
                                <div className="font-bold text-[18px]">{el.titlt}</div>
                                <div className="text-[12px]">
                                    {el.desc}
                                </div>

                            </div>
                        ))
                    }
                </div>
                <div className="flex w-[100%] items-center justify-center">
                    <button className="h-[30px] w-[70px] border-[1px] border-solid
                 border-gray-600 text-[10px]
                 ">
                        learn more
                    </button>
                </div>

            </div>

        </div>
    )
}

export default What