'use client'

import Image from 'next/image';
import styles from './Nav.module.css';
import { MenuBar } from './../../../public/icons';

export default function Nav() {
  const navItems = ['Home', 'About', 'Project', 'Contact'];

  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <Image src={'/logo.png'} width={100} height={100} alt='Logo' />
        <ul className={styles.items}>
          {navItems.map((item, index) => { 
            return (
              <li key={index}>{item}</li>
            )
          })}
          </ul>

      </div>
        <div className={styles.menuBtn}>
          <MenuBar />
        </div>
    </div>
  );
}