import React from 'react'
import Image from 'next/image';
import styles from "./styles/Highlight.module.css";

const Highlight = ({ title, imageSrc, alt, itemName, stats }) => {
    return (
        <div className={styles.highlightBox}>
            <div>{title}</div>
            <div className={styles.icon}>
                <Image src={imageSrc} height={50} width={70} alt={alt} />
            </div>
            <div>
                <div>{itemName}</div>
                <div>{stats}</div>
            </div>
        </div>
    )
}

export default Highlight