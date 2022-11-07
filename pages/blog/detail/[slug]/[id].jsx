import React from "react";
import Head from "next/head";
import styles from "../../../../styles/page.module.css";
import { useState } from "react";

export default function Id({ slug, id }) {

    // state ubah background color hitam
    const [light, setLight] = useState(false);

    // menghandle button dark
    const handleLight = () => {
        setLight(!light)
    }

    return (
        <div className={`${styles.container_center} ${light ? styles.light : styles.nolight}`} >

            <Head>
                <title>Halaman Detail Blog</title>
                <meta name="deskripsi" content="halaman detail blog" />
            </Head>

            <h1>Halaman Id</h1>
            <p>
                slug:{slug}
                id:{id}
            </p>

            <button onClick={handleLight}>Dark / Light</button>
        </ div>
    )
}

export async function getServerSideProps(ctx) {

    // menampilkan output
    // console.info(ctx)

    const { slug, id } = ctx.params

    return {
        props: {
            slug: slug,
            id: id
        }
    }

    // membuat state
}