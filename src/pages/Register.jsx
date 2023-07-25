import React from 'react'
import { AiFillCaretRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import RegisterForm from '../components/RegisterForm'

const Register = () => {
  return (
    <div className='lg:w-[1170px] my-0 mx-auto  pr-[15px] pl-[15px] w-full'>
           <ul className='flex gap-4 mt-[20px] mr-[0px] mb-[20px] ml-[0px] text-sm'>
            <li className="flex items-center gap-2">
                <Link to="/home" className='hover:text-[#f15803]'>Ana səhifə</Link>
                <AiFillCaretRight/>
            </li>
            <li className='flex items-center gap-2'>
                <Link>Hesab</Link>
                <AiFillCaretRight/>
            </li>
            <li>
                <Link className='text-[#f15803]'>Qeydiyyat</Link>
            </li>
        </ul>
        <h1 className='text-[#6b6a81] text-[20px] mb-[20px]'>HESAB QEYDIYYATI</h1>
        <p className='text-[#666]'>Əgər artıq hesabınızı yaratmısınızsa, giriş səhifəsinə  keçin.</p>
        <RegisterForm/>
    </div>
  )
}

export default Register