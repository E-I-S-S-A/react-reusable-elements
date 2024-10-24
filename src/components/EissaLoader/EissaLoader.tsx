import React from 'react'
import styles from './EissaLoader.module.css'

export type LoaderProps = {
    varient: "primary" | "secondary"
}


const EissaLoader = (props: LoaderProps) => {

    const { varient } = props;

    return (
        <div className={`${styles.loader} ${styles[varient]}`}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
        </div>
    )
}

export default EissaLoader
