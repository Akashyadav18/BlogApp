import React from 'react'
import styles from './menu.module.css'
import Link from 'next/link'
import Image from 'next/image'
import MenuPosts from '../menuPosts/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'


const Menu = () => {
  return (
    <div className={styles.container}>

      {/* most Popular */}
      <p className={styles.subtitle}>what's hot</p>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts widthImage={false}/>

      {/* Category */}
      <p className={styles.subtitle}>Discover by topics</p>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories/>

      {/* Editor pick */}
      <p className={styles.subtitle}>Chosen by the editor</p>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts widthImage={true}/>

    </div>
  )
}

export default Menu
