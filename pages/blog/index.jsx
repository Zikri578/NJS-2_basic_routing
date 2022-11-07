import React from 'react'
import styles from "../../styles/page.module.css"
import Head from 'next/head'

export default function Blog() {

    return (
        <div className={styles.container_center}>
            <Head>
                <title>Halaman Blog</title>
                <meta name='deskripsi' content='ini merupakan halaman blog' />
            </Head>

            <h1>Halaman Blog</h1>
        </div>
    )
}
