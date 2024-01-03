'use client'

import Image from 'next/image';
import styles from './Nav.module.css';
import { MenuBar } from './../../../public/icons';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';


export default function Nav() {
  const segment = useSelectedLayoutSegment();
  console.log(segment);
  
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Image src={'/logo.png'} width={100} height={100} alt='Logo' />
      </div>
      <ul className={styles.items}>
        {
          segment === null ? 
          <li style={{backgroundColor: '#004225'}}>
            <Link href='/'>
              Home
            </Link>
          </li> :
          <li>
            <Link href='/'>
              Home
            </Link>
          </li>
        }
        {
          segment === 'about' ?
          <li style={{backgroundColor: '#004225'}}>
            <Link href='/about'>
              About
            </Link>
          </li> :
          <li>
            <Link href='/about'>
              About
            </Link>
          </li>
        }
        {
          segment === 'project' ?
          <li style={{backgroundColor: '#004225'}}>
            <Link href='/project'>
              Project
            </Link>
          </li> :
          <li>
            <Link href='/project'>
              Project
            </Link>
          </li>
        }
        {
          segment === 'contact' ?
          <li style={{backgroundColor: '#004225'}}>
            <Link href='contact'>
              Contact
            </Link>
            </li> :
          <li>
            <Link href='contact'>
              Contact
            </Link>
          </li>
        }
      </ul>


        <button className={styles.menuBtn}>
          <MenuBar />
        </button>
    </nav>
  );
}