import React from 'react';
import Image from 'next/image';
import styles from './soldier.module.css';
import Brand from '@/components/Brand';
import PointList from '@/components/PointList';
import Highlight from '@/components/Highlight';

import soldierPic from '@/assets/images/soldier_pic.png';
import soldierTankWhite from '@/assets/images/soldier_tank_white.png';
import acwWhite from '@/assets/images/acw_white.png';
import m9White from '@/assets/images/m9_white.png';
import engineerWhite from '@/assets/images/engineer_white.png';

const pointData = [
    { category: 'Weapons', current: 134, total: 185 },
    { category: 'Kits', current: 46, total: 64 },
    { category: 'Vehicles', current: 77, total: 182 },
    { category: 'Medals', current: 11, total: 54 },
    { category: 'Assignments', current: 21, total: 110 },
    { category: 'Dog Tags', current: 357, total: 720 },
];

const Soldier = () => {
    return (
        <div className={styles.page}>
            <div className={styles.col1}>
                <Image src={soldierPic} height={372.935} width={219.168} alt='Soldier' />
            </div>
            <div className={styles.col2}>
                <div className={styles.row1}>
                    <div className={styles.brandLogo}>
                        <Brand />
                    </div>
                    <div>
                        <div className={styles.cookieTitle}>Cookie</div>
                        <div className={styles.cookieInfoBox}>
                            <div className={styles.levelProgressBox}>
                                <div className={styles.levelProgress}>
                                    63
                                </div>
                            </div>
                            <div className={styles.rankBox}>
                                <span>69,840 / 110,000</span>
                                - Estimated rank up in 1h
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.row2}>
                    <div className={styles.pointList}>
                        {pointData.map((item, index) => (
                            <PointList key={index} item={item} />
                        ))}
                    </div>
                    <div>
                        <div className={styles.scores}>
                            <div className={styles.scoreBox}>
                                <div className={styles.scoreTitle}>wins</div>
                                <div className={styles.scoreValue}>44%</div>
                            </div>
                            <div className={styles.scoreBox}>
                                <div className={styles.scoreTitle}>score/min</div>
                                <div className={styles.scoreValue}>592</div>
                            </div>
                            <div className={styles.scoreBox}>
                                <div className={styles.scoreTitle}>kills/min</div>
                                <div className={styles.scoreValue}>0.60</div>
                            </div>
                        </div>
                        <div className={styles.highlightsBox}>
                            <Highlight
                                title="top vehicle"
                                imageSrc={soldierTankWhite}
                                alt="soldier tank"
                                itemName="Main Battle tank"
                                stats="33 kills"
                            />
                            <Highlight
                                title="top primary"
                                imageSrc={acwWhite}
                                alt="ACW-r"
                                itemName="ACW-r"
                                stats="495 kills"
                            />
                            <Highlight
                                title="top class"
                                imageSrc={engineerWhite}
                                alt="engineer"
                                itemName="engineer"
                                stats="828,514 score"
                            />
                            <Highlight
                                title="top sidearm"
                                imageSrc={m9White}
                                alt="m9"
                                itemName="m9"
                                stats="112 kills"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Soldier;
