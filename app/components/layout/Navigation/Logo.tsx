import Link from "next/link"
import { FC } from "react"
import Image from "next/image"

import logoImage from '@/assets/images/MaCherie.png'

const Logo:FC = () =>{
    return <Link href='/'>
    <Image src ={logoImage} 
    width={247} 
    height ={20} 
    alt ='Ma cherie'
    draggable={false} />
    </Link>
}

export default Logo