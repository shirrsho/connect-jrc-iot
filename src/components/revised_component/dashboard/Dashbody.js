    import React from 'react'
    import DeviceLinks from '../../device_management/DeviceLinks'
    function Dashbody() {
    return (
        <>
       
         {/*first segement */}
        <div className="flex mx-[15%] my-[100px] relative">
                <div className="w-[50%] flex">
                <input
                    type="text"
                    placeholder="Search"
                    className="px-4 py-2 border-b border-gray-400 min-w-[180px] bg-[#A3A3A3] text-white rounded-sm mt-3  w-[40%] text-2xl "
                
                />
                <button className='ml-[-40px] mt-4 text-lg text-white '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
                </button>


                <button className="pl-7 mt-4 text-lg" >
                    {" "}
                    Search
                </button>
                <button className="pl-4 mt-4 text-lg" >
                    {" "}
                    Reset
                </button>
                </div>
                <div className=" w-[50%] relative flex-col items-center">
                <div className="flex absolute right-0 text-white text-lg bg-[#052C39] px-4 py-3  mt-[9px] rounded-sm hover:cursor-pointer hover:text-[#FEFF01] hover:bg-[#083763] hover:text-xl">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mt-1"
                    >
                    <path
                        fillRule="evenodd"
                        d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                        clipRule="evenodd"
                    />
                    </svg>

                    <button className="pl-3 text-lg" >
                    {" "}
                    Add Device
                    </button>
                
                </div>
                </div>
            </div>
              {/*second segement */}
              <div className='mx-[15%] bg-gray-200 h-screen'>
                  {/*second segement */}
          <div>
          <div className="w-[100%] bg-[#5791A1] my-3">
            <ul className="flex  text-white text-center text-sm sm:text-md md:text-xl mx-3 p-5">
              <li className="w-[8%]">SL</li>
              <li className="w-[16%]">Device Name</li>
              <li className="w-[16%]">Microcontroller</li>
              <li className="w-[16%]">Microprocessor</li>
              <li className="w-[16%]">Controller</li>
              <li className="w-[16%]">Status</li>
              <li className="w-[12%]">Date Added</li>
            </ul>
          </div>
          
         
        
        </div>
     
    
              </div>
            </>
    )
    }

    export default Dashbody