export const AboutNew = () => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 p-10 bg-black text-white">
            <div className="p-4">
            <div className="flex-col flex align-middle rounded-3xl p-6 border-1 border-white bg-slate-800">
                <div className="md:w-1/2 w-full">
                    <h1 className=" p-6 md:text-5xl text-3xl font-bold">What is AURORA?</h1>
                </div>
                <div>
                    <p className="p-6 text-xl">
                    Get ready to embark on an unforgettable journey into the realms of technology with TechWeek: Aurora, brought to you by ISTE Manipal. This year, we're taking it to the next level with an incredible lineup of student workshops that cover a wide range of technical domains, from software to Collaborating with esteemed student bodies from MIT, we've created a one-of-a-kind platform for you to dive deep into hands-on projects within your field of interest. 
                    </p>
                </div>
            </div>
            </div>

            <div className ="flex flex-col">
                <div className="p-4">
                <div className="bg-slate-800 border-1 border-white h-[14.5rem] rounded-3xl">

                </div>
                </div>
                <div className="p-4">
                <div className="flex flex-row justify-center flex-wrap bg-slate-800 border-1 border-white rounded-3xl">
                    <div className="px-10 py-5">
                        <div className="p-4 border-1 rounded-xl">
                            <h1 className="py-2 text-2xl font-bold">250 +</h1>
                            Previous Registrations
                        </div>
                    </div>
                    <div className="px-10 py-5">
                        <div className="p-4 border-1 rounded-xl">
                            <h1 className="py-2 text-2xl font-bold">45 +</h1>
                            Hours of skill sharing
                        </div>
                    </div>
                    <div className="px-10 py-5">
                        <div className="p-4 border-1 rounded-xl">
                            <h1 className="py-2 text-2xl font-bold">8 +</h1>
                            Clubs in collaborations
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}