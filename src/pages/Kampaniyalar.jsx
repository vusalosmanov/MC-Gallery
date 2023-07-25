import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillCaretRight } from 'react-icons/ai'
import image1 from "../assets/images/image/kampaniya.png"
import image2 from "../assets/images/image/kampaniya1.png"
import image3 from "../assets/images/image/kampaniya2.png"
const Kampaniyalar = () => {
  return (
    <div className="lg:w-[1170px] my-0 mx-auto  pr-[15px] pl-[15px] border-1 border-t w-full ">
        <ul className='flex gap-4 mt-[20px] mr-[0px] mb-[20px] ml-[0px] text-sm'>
            <li className="flex items-center gap-2">
                <Link to="/home" className='hover:text-[#f15803]'>Ana səhifə</Link>
                <AiFillCaretRight/>
            </li>
            <li>
                <Link  className='text-[#f15803]'>Kampaniyalar</Link>
            </li>
        </ul>
        <div className='mb-[17px] w-full'>
            <div className='lg:w-[100%] '>
                <div className='mb-[17px] lg:flex gap-6 '>
                    <div className='border-4 border-[#ffff] rounded-[14px] shadow-lg '>
                        <img src={image1} alt="" className='w-[440px] h-[274px] rounded-[11px]' />
                    </div>
                    <div>
                        <h4 className='text-[#f15803] mb-[10px] mt-[10px]'>İndi Ucard-la daha sərfəli!</h4>
                        <p>Ucard-la bütün məhsulları 24 ayadək faizsiz taksitlə əldə etmək mümkündür!</p>
                    </div>
                </div>
                <div className='mb-[17px] lg:flex gap-6'>
                    <div className='border-4 border-[#ffff] rounded-[14px] shadow-lg'>
                        <img src={image2} alt="" className='w-[440px] h-[274px] rounded-[11px]' />
                    </div>
                    <div>
                        <h4 className='text-[#f15803] mb-[10px] mt-[10px]'>Onlayn sifariş et, 5%-dək endirim qazan!</h4>
                        <p>Onlayn sifarişlə daha sərfəli</p>
                    </div>
                </div>
                <div className='mb-[17px] lg:flex gap-6'>
                    <div className='border-4 border-[#ffff] rounded-[14px] shadow-lg'>
                        <img src={image3} alt="" className='w-[440px] h-[274px] rounded-[11px]' />
                    </div>
                    <div>
                        <h4 className='text-[#f15803] mb-[10px] mt-[10px]'>Onlayn sifarişlə daha sərfəli</h4>
                        <p>İlkin ödənişsiz, faizsiz, komissiyasız, 15 ayadək</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Kampaniyalar