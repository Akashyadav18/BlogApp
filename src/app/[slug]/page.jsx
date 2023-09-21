import React from 'react'
import styles from "./singlePage.module.css"
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Lorem ipsum dolor sit amet alism</h1>
            <div className={styles.user}>
                <div className={styles.userImageContainer}>
                    <Image src="/p1.jpeg" alt='' fill className={styles.avatar}/>
                </div>
                <div className={styles.userTextContainer}>
                    <span className={styles.username}>Jhon dev</span>
                    <span className={styles.date}>10.03.2310</span>
                </div>
            </div>
        </div>
        <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
        <div className={styles.description}>
            <p>Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since March 2018, with its chapters collected and published in 23 tankōbon volumes as of July 2023.</p>
            <p>Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since March 2018, with its chapters collected and published in 23 tankōbon volumes as of July 2023.</p>
            <p>Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since March 2018, with its chapters collected and published in 23 tankōbon volumes as of July 2023.</p>
            <p>Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since March 2018, with its chapters collected and published in 23 tankōbon volumes as of July 2023.</p>
        </div>
        <div className={styles.comment}> 
            <Comments/>
        </div>
        </div>
        <Menu/>
      </div>
    </div>
  )
}

export default SinglePage
