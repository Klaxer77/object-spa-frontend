'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type MobileMenuProps = {
    isOpenMenu: boolean
    setIsOpenMenu: (state: boolean) => void
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpenMenu, setIsOpenMenu }) => {
    const [isOpenDropDown,  setIsDropDown] = useState(false);

    return (
        <div className="max-xl:flex hidden pr-[14px] max-w-[300px]">
            <div className="flex items-center gap-[12px]">
                <p className={`font-[500] leading-[24px] ${isOpenMenu ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}>Menu</p>
                <div onClick={() => setIsOpenMenu(!isOpenMenu)} className="flex flex-col gap-[8px]">
                    <div className={`transition-all duration-200 h-[2px] w-[25px] ${isOpenMenu ? 'rotate-45 translate-y-[5px] bg-[#494949]' : 'bg-white'}`} />
                    <div className={`transition-all duration-200 h-[2px] w-[25px] ${isOpenMenu ? '-rotate-45 -translate-y-[5px] bg-[#494949]' : 'bg-white'}`} />
                </div>
            </div>
            {
                isOpenMenu && <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} transition={{ duration: 0.3 }} className="absolute left-0 top-[60px] bg-[#101010] w-full">
                    <div className="min-h-[calc(100svh-60px)] flex flex-col justify-between pb-[40px]">
                        <div>
                            <Link className="flex items-center px-[20px] h-[60px] w-full border border-t-0 border-white/15" href='/'>
                                <div className="flex justify-between items-center w-full">
                                    <div onClick={() => setIsDropDown(!isOpenDropDown)}>
                                        <p>Каталог услуг</p>     
                                        <svg className={`${isOpenMenu ? 'rotate-270' : ''}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536Z" fill="#F4F4F4" />
                                        </svg>
                                    </div>
                                </div>

                            </Link>
                            <Link className="flex items-center pl-[20px] h-[60px] w-full border border-t-0 border-white/15" href='/'>Программы отдыха</Link>
                            <Link className="flex items-center pl-[20px] h-[60px] w-full border border-t-0 border-white/15" href='/spa'>Аренда СПА</Link>
                            <Link className="flex items-center pl-[20px] h-[60px] w-full border border-t-0 border-white/15" href='/'>Меню ресторана</Link>
                        </div>

                        <div className="flex flex-col px-[20px] items-end">
                            <div className="flex flex-col w-full mb-[30px]">
                                <button className="bg-white h-[50px] text-black text-[14px] font-[500]">Забронировать</button>
                                <button className="bg-transparent h-[50px] border border-t-0 border-white/15">Связаться</button>
                            </div>
                            <Image src="/img/Logo.webp" width={140} height={16} alt="logo" />
                        </div>
                    </div>
                </motion.div>
            }
        </div>
    )
}