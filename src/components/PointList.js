import React from 'react';
import styles from "./styles/PointList.module.css"

const PointList = ({ item }) => {
    return (
        <div className={styles.pointItem}>
            <div className={styles.pointTitle}>{item.category}</div>
            <div className={styles.pointInfoBox}>
                <div className={styles.pointInfo}>{item.current}/{item.total}</div>
                <div className={styles.pointBarBox}><progress className={styles.pointBar} value={item.current} max={item.total}></progress></div>
            </div>
        </div>
    );
};

export default PointList;
