import type { NextPage } from 'next'

import { IconContext } from "react-icons";

import { BiNetworkChart, BiHomeAlt,BiTrash } from 'react-icons/bi'
import { MdClose } from 'react-icons/md';
import { HiDotsVertical, HiOutlineLightBulb, HiOutlinePencil } from 'react-icons/hi';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import { CgChevronDown, CgChevronRight, CgChevronLeft, CgChevronUp } from 'react-icons/cg';
import { RiCheckboxBlankCircleFill, RiCheckboxBlankCircleLine } from 'react-icons/ri';
import { TbUnlink } from 'react-icons/tb';
import { FaRegCalendarCheck, FaGlasses } from 'react-icons/fa';
import { BsPlusLg } from 'react-icons/bs';
import { IoMdAlert } from 'react-icons/io';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';



const Home: NextPage = () => {

  const size = 35
  const arrayIcons: any = []
  arrayIcons.push(<BiNetworkChart size={size} />)
  arrayIcons.push(<BiHomeAlt size={size} />)
  arrayIcons.push(<BiTrash size={size} />)
  arrayIcons.push(<MdClose size={size} />)
  arrayIcons.push(<HiDotsVertical size={size} />)
  arrayIcons.push(<HiOutlineLightBulb size={size} />)
  arrayIcons.push(<HiOutlinePencil size={size} />)
  arrayIcons.push(<FiChevronsLeft size={size} />)
  arrayIcons.push(<FiChevronsRight size={size} />)
  arrayIcons.push(<CgChevronDown size={size} />)
  arrayIcons.push(<CgChevronRight size={size} />)
  arrayIcons.push(<CgChevronLeft size={size} />)
  arrayIcons.push(<CgChevronUp size={size} />)
  arrayIcons.push(<RiCheckboxBlankCircleFill size={size} />)
  arrayIcons.push(<RiCheckboxBlankCircleLine size={size} />)
  arrayIcons.push(<TbUnlink size={size} />)
  arrayIcons.push(<FaRegCalendarCheck size={size} />)
  arrayIcons.push(<BsPlusLg size={size} />)
  arrayIcons.push(<IoMdAlert size={size} />)
  arrayIcons.push(<BsChevronLeft size={size} />)
  arrayIcons.push(<BsChevronRight size={size} />)


  return (
    <div style={{margin:'10%'}}>
      <div className='main-card'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div style={{ width: 600, margin: 'auto' }}>
        {
          arrayIcons.map((e: any, i: any) => {
            return (
              <div style={{ display: 'inline-block' }} key={`div${i}`}>
                <button className='icon-button'>
                  <IconContext.Provider value={{ className: "icon-button-Svg" }} key={i}>{e}</IconContext.Provider>
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
