export const AboutHackathon = () => {
    return (
        <div className="w-screen bg-black flex flex-col items-center justify-center" id="hackathonpage">
            <div className="[text-shadow:0px_4px_37.2px_#0070f3] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0070f3] md:text-[78px] text-[35px] tracking-[0] leading-[normal]">
                <h1 className="text-center p-6 text-[#0070f3]">Rules </h1>
            </div>
            <ul className="text-white lg:text-2xl text-[0.7rem] flex-col p-6 justify-center w-2/3 list-disc my-5">
                <li className="p-4">
                Each team can have a minimum of 2 and maximum of 4 members. 
                </li>
                <li className="p-4">
                Each team should have one team leader, who will be responsible for forwarding all necessary information to his/her team.
                </li>
                <li className="p-4">
                Only the team leader is required to register on behalf of their team.
                </li>

                <li className="p-4">
                Each team has to select 1 track of their choice out of the 4 given tracks and provide a problem statement relevant to that track while registering. No team can change their track and/or problem statement once registered.   
                </li> 
                <li className="p-4">
                We expect all team members to be present at the Team Check-In on Day 1. A team won't be registered if all the members are not physically present.
                </li>
                <li className="p-4">
                Any further details will be provided during the event itself.
                </li>
            </ul>
        </div>
    )
}