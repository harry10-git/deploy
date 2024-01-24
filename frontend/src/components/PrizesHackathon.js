import P1 from "../images/hack1st.svg"
import P2 from "../images/hack2nd.svg"
import P3 from "../images/hack3rd.svg"

export const PrizesHackathon = () => {
    return(
        <div className="w-screen bg-black flex flex-col items-center justify-center" id="hackathonpage">
            <div className="[text-shadow:0px_4px_37.2px_#0070f3] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0070f3] md:text-[78px] text-[35px] tracking-[0] leading-[normal]">
                <h1 className="text-center p-6 text-[#0070f3]">Cash Prizes</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="p-6 flex-col items-center"> 
                    <img src={P1} alt="hd" ></img> 
                </div>
                <div className="flex flex-row justify-center flex-wrap">
                    <div className="p-6 flex-col items-center"> 
                        <img src={P2} alt="h"></img> 
                    </div>
                    <div className="p-6 flex-col items-center"> 
                        <img src={P3} alt="hd"></img> 
                    </div>
                </div>
            </div>
        </div>
    )
}