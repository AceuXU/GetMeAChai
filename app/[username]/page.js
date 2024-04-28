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
      <div className="info flex justify-center items-center my-24 flex-col gap-4">
        <div className='font-bold flex flex-col items-center text-lg'>
          {params.username}
        </div>
        <div className='text-slate-300'>
          Creating Animated art for VTT's
        </div>
        <div className='text-slate-300'>
          10,684 members. 83 posts. $15,640/release
        </div>
      </div>
    </>
  )
}

export default Username
