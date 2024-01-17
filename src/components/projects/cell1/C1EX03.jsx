import React from 'react'
import Image from 'next/image'

const C1EX03 = () => {
  return (
    <div className='w-full h-full'>
      <h1 className='mt-5 text-4xl text-center'>Piscine Web</h1>
      <div className='flex items-center justify-center mt-20'>
        <a href="https://www.youtube.com/watch?v=INscMGmhmX4">
          <Image src="https://res.cloudinary.com/practicaldev/image/fetch/s--qxhk5XIO--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a27fjm2b4ub0gvq45i7f.jpg" width={250} height={250} alt="image1" className='border-4 rounded-xl borde-white' />
        </a>
        <Image src="https://qph.cf2.quoracdn.net/main-qimg-dc6eb236e58be9fa24d6c498afb63a4d-lq" alt='image2' width={250} height={250} className='object-fill ml-5 border-4 border-white rounded-xl' />
      </div>
    </div>
  )
}

export default C1EX03