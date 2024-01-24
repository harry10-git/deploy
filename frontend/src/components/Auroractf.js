import P1 from "../images/1st.svg"
import P2 from "../images/2nd.svg"
import P3 from "../images/3rd.svg"
import gr from "../images/Group.svg"
import hecker from "../images/Hacker-cuate-2 1.svg"
import calen from "../images/calendar.svg"
import clock from "../images/clock.svg"
import ctfevents from '../images/ctfevents.svg'
import laptop from "../images/laptop.svg"

export const Auroractf = () => {
    return (
        <div className="p-10">
            <div className="text-white bg-aurora-bg bg-cover bg-center rounded-3xl">
                <img src={ctfevents} alt="dg" className="col-span-2 mx-auto" />
                <div className="grid  md:grid-cols-2 grid-cols-1 rounded-3xl ">

                    <div className="flex justify-center align-middle">
                        <img className="m-auto mt-6" src={hecker}></img>
                    </div>
                    <div className="flex-col justify-center align-middle">
                        <img className="h-72 w-72 object-center m-auto" src={gr}></img>
                        <p className="text-center w-5/6 m-auto">
                            Magnam et id commodi non quia. Cumque sed aut architecto.Laboriosam est a quae aliquam. Tempora et impedit eos praesentium voluptatem. Reprehenderit unde consequatur quia. Dignissimos provident error fugit. Ut exercitationem impedit voluptas consequatur ut dicta. Provident dicta magnam est qui porro. Ratione similique dignissimos beatae. Qui repellat quam eaque dolores.
                        </p>
                    </div>
                    <div className="flex-col flex m-auto justify-center align-middle md:text-3xl text-xl p-6">
                        <div className="pt-4 pl-10 flex flex-row">
                            <img src={calen}></img>
                            <span className="pt-4 pl-10 [font-family:'Inter-Medium',Helvetica] font-semibold"> Date: 31-01-2024</span>
                        </div>
                        <div className="pt-6 pl-10 flex flex-row">
                            <img src={clock}></img>
                            <span className="pt-1 pl-10 [font-family:'Inter-Medium',Helvetica] font-semibold"> Time: 12:30 PM</span>
                        </div>
                        <div className="pt-6 pl-10 flex flex-row">
                            <img src={laptop}></img>
                            <span className="pt-2 pl-10 [font-family:'Inter-Medium',Helvetica] font-semibold"> Mode: Online</span>
                        </div>
                    </div>
                    <div className="p-6 justify-center align-middle">
                        <div className="[text-shadow:0px_4px_37.2px_#0070f3] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0070f3] md:text-[58px] text-[35px] tracking-[0] leading-[normal]">
                            <h1 className="text-center p-6 text-[#0070f3]">Cash Prizes</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="p-6 flex-col items-center">
                                <img className="w-36 h-36" src={P1} alt="gdg"></img>
                            </div>
                            <div className="flex flex-row justify-center flex-wrap">
                                <div className="p-6 flex-col items-center">
                                    <img className="w-36 h-36" src={P2} alt="ggd"></img>
                                </div>
                                <div className="p-6 flex-col items-center">
                                    <img className="w-36 h-36" src={P3} alt="dgztg"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}