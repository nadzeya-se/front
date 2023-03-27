import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.scss'
import { NextPage } from 'next'
import Home from '@/components/screens/home/home'


const HomePage: NextPage = () =>{
  return (
    <Home/>
  )
}

export default HomePage