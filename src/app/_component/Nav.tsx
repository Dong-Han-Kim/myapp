'use client'

import Image from 'next/image';
import styles from './Nav.module.css';
import { MenuBar } from './../../../public/icons';

export default function Nav() {
  const navItems = ['Home', 'About', 'Project', 'Contact'];
  const Items = document.querySelector('.items');
  

  function toggleMenu(event: Element) {
    if (Items) {
      Items.classList.add('open');
    }
  }

  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Image src={'/logo.png'} width={100} height={100} alt='Logo' />
      </div>
        <ul className={styles.items}>
          {navItems.map((item, index) => { 
            return (
              <li key={index}>{item}</li>
            )
          })}
          </ul>


        <button className={styles.menuBtn}>
          <MenuBar />
        </button>
    </nav>
  );
}