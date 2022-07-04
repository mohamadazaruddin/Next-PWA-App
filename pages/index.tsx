import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Products from './Products'

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <link rel='manifest' href='/manifest.json'/>
      </Head>
      <Products/>
    </Box>
  );
}

export default Home
