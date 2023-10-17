'use client'
import { Provider } from 'react-redux'
import { store } from './appStore'
import Image from 'next/image'
import styles from './page.module.css'

import Link from 'next/link'
import { useFetchMovieListQuery } from '@/shared/api/baseApi'


export default function Home() {
    const {data: movieList} = useFetchMovieListQuery('Animation')

    console.log(movieList)

  return (
    <Provider store={store}>
         <main className={styles.main}>
            <h1>Главная страница</h1>
        </main>
    </Provider>
   
  )
}
