"use client"
import { Footer, Navbar } from '@/components/UI';
import EX00 from '@/components/projects/cell1/EX00';
import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";
import { IoMdDocument } from "react-icons/io";


const page = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className='flex justify-center'>
          <div className='text-center'>
            <h1 className='text-3xl font-bold'>Titulo del Proyecto</h1>
            <p className='mt-2 text-xl text-blue-400 underline hover:cursor-pointer'>Ver Subject <IoMdDocument className='inline' /></p>
          </div>
        </div>
        <div className='text-2xl font-bold divider'>Preview</div>
        <div className='flex justify-center'>
          <div className="previews bg-slate-900 mt-10 mb-20 h-[600px] w-[50%] border-white border-2 rounded-lg">
            <EX00 />
          </div>
        </div>
        <div className='text-2xl font-bold divider'>Code</div>
        <div className='flex justify-center'>
          <div className="border-2 border-white rounded-lg">
            <CopyBlock
              text={``}
              language={"html"}
              showLineNumbers={true}
              theme={dracula}
              wrapLines
              codeBlock
            />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default page