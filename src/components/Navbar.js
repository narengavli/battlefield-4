"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './styles/navbar.module.css';
import Brand from './Brand';
import BarIcon from '@/assets/icons/BarIcon';
import CloseIcon from '@/assets/icons/CloseIcon';

const Navbar = () => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const openNav = () => {
        setIsOverlayOpen(true);
    }

    const closeNav = () => {
        setIsOverlayOpen(false);
    }

    const pages = [
        { path: '/', label: 'Home' },
        { path: '/multiplayer', label: 'Multiplayer' },
        { path: '/campaign', label: 'Campaign' },
        { path: '/soldier', label: 'Soldier' },
        { path: '/store', label: 'Store' },
        { path: '/more', label: 'More' }
    ];

    return (
        <main className={styles.main}>
            <div className={styles.overlay} style={{ height: isOverlayOpen ? '100%' : '0%' }}>
                <a href="#" className={styles.closebtn} onClick={closeNav}>
                    <CloseIcon size={18} />
                </a>
                <div className={styles.overlayContent}>
                    {pages.map((page, index) => (
                        <Link href={page.path} key={index} onClick={closeNav}>
                            {page.label}
                        </Link>
                    ))}
                </div>
            </div>
            <div className={styles.navbar}>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        {pages.map((page, index) => (
                            <li key={index}>
                                <Link href={page.path}>
                                    {page.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={styles.navbarBorder}></div>
            </div>
            <div className={styles.brand}>
                <Brand />
                <div className={styles.brandText}>
                    Battlefield 4
                </div>
            </div>
            <div className={styles.bar} onClick={openNav}>
                <BarIcon size={18} />
            </div>
        </main>
    )
}

export default Navbar;
