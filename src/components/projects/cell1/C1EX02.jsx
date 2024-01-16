import React from 'react'
import Image from 'next/image'

const C1EX02 = () => {
  return (
    <div className='w-full h-full'>
      <h1 className='pt-5 text-3xl font-bold text-center'>Piscine Web</h1>
      <div className='flex items-center justify-center mt-20'>
        <Image src={`https://res.cloudinary.com/practicaldev/image/fetch/s--qxhk5XIO--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a27fjm2b4ub0gvq45i7f.jpg`} alt='image1' />
        <Image src={`https://qph.cf2.quoracdn.net/main-qimg-dc6eb236e58be9fa24d6c498afb63a4d-lq`} alt='image2' />
      </div>
    </div>
  )
}

export default C1EX02