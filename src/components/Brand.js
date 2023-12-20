import Image from "next/image"
import styles from './styles/brand.module.css';

import soldier_level_icon from "@/assets/images/soldier_level_icon.png";
const Brand = () => {
    return (
        <div>
            <div className={styles.brandRing}>
                <Image src={soldier_level_icon} height={40} width={40} alt="Soldier Level Icon" />
            </div>
        </div>
    )
}

export default Brand