import React from 'react'
import styles from "./comments.module.css"
import Link from 'next/link'
import Image from 'next/image'

const Comments = () => {

    const status = "authenticated"

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
            <textarea placeholder='Write a comment...' className={styles.input}/>
            <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to Write Comments</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
            <div className={styles.user}>
                <Image src="/p1.jpeg" alt='' width={50} height={50} className={styles.image}/>
                <div className={styles.userINfo}>
                    <span className={styles.username}>Jhon Dev</span>
                    <span className={styles.date}>23.06.2023</span>
                </div>
            </div>
            <p className={styles.desc}>Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since March 2018, with its chapters collected and published in 23 tankōbon volumes as of July 2023.</p>
        </div>

        <div className={styles.comment}>
            <div className={styles.user}>
                <Image src="/p1.jpeg" alt='' width={50} height={50} className={styles.image}/>
                <div className={styles.userINfo}>
                    <span className={styles.username}>Jhon Dev</span>
                    <span className={styles.date}>23.06.2023</span>
                </div>
            </div>
            <p className={styles.desc}>Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since March 2018, with its chapters collected and published in 23 tankōbon volumes as of July 2023.</p>
        </div>

        <div className={styles.comment}>
            <div className={styles.user}>
                <Image src="/p1.jpeg" alt='' width={50} height={50} className={styles.image}/>
                <div className={styles.userINfo}>
                    <span className={styles.username}>Jhon Dev</span>
                    <span className={styles.date}>23.06.2023</span>
                </div>
            </div>
            <p className={styles.desc}>Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since March 2018, with its chapters collected and published in 23 tankōbon volumes as of July 2023.</p>
        </div>

        <div className={styles.comment}>
            <div className={styles.user}>
                <Image src="/p1.jpeg" alt='' width={50} height={50} className={styles.image}/>
                <div className={styles.userINfo}>
                    <span className={styles.username}>Jhon Dev</span>
                    <span className={styles.date}> - 23.06.2023</span>
                </div>
            </div>
            <p className={styles.desc}>Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since March 2018, with its chapters collected and published in 23 tankōbon volumes as of July 2023.</p>
        </div>
      </div>
    </div>
  )
}

export default Comments
