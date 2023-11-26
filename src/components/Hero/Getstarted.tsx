import space2 from "../../assets/space2.svg"

const Getstarted = () => {
    return (
        <div className="w-[100%] h-[300px] bg-gray-200
        flex items-center justify-center
        ">
            <div className="w-[78%] h-[100%]
            flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[10px]">
                    <p>  Get started with Postman</p>
                    <div className="flex flex-row items-center justify-
                        min-w
                        ">
                        <input
                            placeholder="jsmith@example.com"
                            className="w-[250px] h-[35px]
                                bg-white border-[1px] border-solid border-orange-600
                                placeholder:pl-[5px]
                                "

                        />
                        <button className="w-[110px] h-[35px]  text-[14px]
                      bg-orange-500 text-white 
                    ">
                            sign up for free
                        </button>
                    </div>
                </div>

                <img src={space2} className="w-[50%]" />

            </div>
        </div>
    )
}

export default Getstarted