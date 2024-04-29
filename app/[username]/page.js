import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      <div className='cover w-full bg-red-50 relative'>
        <img className='object-cover w-full h-[350px]' src="https://images.unsplash.com/photo-1615196534055-7aa534f6836b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='absolute -bottom-20 right-[45%] '>
          <img width={150} height={150} className=' border-white border-2 rounded-lg ' src="https://hips.hearstapps.com/hmg-prod/images/cute-photos-of-cats-looking-at-camera-1593184780.jpg?crop=0.6672958942897593xw:1xh;center,top&resize=980:*" alt="" />
        </div>
      </div>
      <div className="info flex justify-center items-center my-24 flex-col gap-2">
        <div className='font-bold flex flex-col items-center text-lg'>
          {params.username}
        </div>
        <div className='text-slate-300'>
          Creating Animated art for VTT's
        </div>
        <div className='text-slate-300'>
          10,684 members. 83 posts. $15,640/release
        </div>

        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
            {/* Show the list of all the supporters as a leaderboard */}
            <h2 className='my-5 text-center text-2xl font-bold'>Supporters</h2>
            <ul className='mx-5 text-lg '>
              <li className='my-4 flex gap-2 items-center'>
                <img width={35} src="avatar.gif" alt="user avatar" />
                <span>
                  Ratan donated  <span className='font-bold'>$500</span> with a message " I support you lots of love ❤️"
                </span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <img width={35} src="avatar.gif" alt="user avatar" />
                <span>
                  Ratan donated  <span className='font-bold'>$30</span> with a message " I love your work ❤️"
                </span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <img width={35} src="avatar.gif" alt="user avatar" />
                <span>
                  Ratan donated  <span className='font-bold'>$100</span> with a message " love ya! ❤️"
                </span>
              </li>
            </ul>
          </div>

          <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className="my-5 text-2xl font-bold">Make a Payment</h2>
            <div className='flex gap-2 flex-col'>
              {/* input for name and message */}
              <div>
                <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
              </div>
              <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
              <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
              <button className='text-white bg-gradient-to-br from-purple-700 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Pay</button>
            </div>

            {/* Or choose from these amounts */}
            <div className="flex gap-2 mt-5">
              <button className="bg-slate-800 p-3 rounded-lg hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-900 from-blue-700 to-purple-800">Pay $10</button>
              <button className="bg-slate-800 p-3 rounded-lg hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-900 from-blue-700 to-purple-800">Pay $25</button>
              <button className="bg-slate-800 p-3 rounded-lg hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-900 from-blue-700 to-purple-800">Pay $50</button>
              <button className="bg-slate-800 p-3 rounded-lg hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-900 from-blue-700 to-purple-800">Pay $100</button>
              <button className="bg-slate-800 p-3 rounded-lg hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-900 from-blue-700 to-purple-800">Pay $500</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Username
