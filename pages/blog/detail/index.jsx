import React from 'react'
import styles from "../../../styles/page.module.css"
import Head from 'next/head'

export default function Detail() {
    return (
        <div className={styles.container_center}>
            <Head>
                <title>Halaman detail blog</title>
                <meta name='dekripsi' content='ini merupakan halaman detail blog' />
            </Head>

            <h1>Halaman Detail</h1>
        </div>
    )
}
