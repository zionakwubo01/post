
import apple from "../../assets/apple-logo-light.9aeb13f1af08313aa1f197b04a99ea87.svg"
import win from "../../assets/microsoft-logo-light.2f70292c9f6d8d9903077809421531b6.svg"
import linux from "../../assets/linux-logo-light.4487a9e083695f6e9d471661374c3a5d.svg"
import home3 from "../../assets/post3.png"
const Heropage = () => {
    return (
        <div>
            <div className="w-[100%] h-[650px]
            flex items-center justify-center 
            ">
                <div className="w-[78%] h-[100%] flex flex-row
                justify-between items-center
                ">

                    {/* build */}
                    <div className="flex flex-col gap-[30px]">
                        <div>
                            <div className="font-bold text-[40px]">Build</div>
                            <div className="font-bold text-[25px]">APIs together</div>
                            <p className="text-[16px]">
                                Over 25 million developers use Postman. Get<br />
                                started
                                by signing up or downloading the desktop<br /> app.
                            </p>
                        </div>
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
                        <div className="flex flex-col gap-[5px]">
                            <div className="text-[12px] font-bold text-gray-600">
                                Download the desktop app for</div>
                            <div className="flex flex-row gap-[20px]">
                                <img src={win} />
                                <img src={apple} />
                                <img src={linux} />
                            </div>

                        </div>
                    </div>
                    {/* build */}
                    <div className="w-[80%] h-[90%] ">
                        <img src={home3} />
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Heropage;