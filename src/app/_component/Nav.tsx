'use client';

import Image from 'next/image';
import styles from './Nav.module.css';
import { MenuBar } from '../_asset/icons';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useRef, useState } from 'react';

export default function Nav() {
	const [menu, setMenu] = useState(false);
	const segment = useSelectedLayoutSegment();
	const toggleRef = useRef<HTMLUListElement>(null);

	const toggleMenu = () => {
		if (toggleRef.current) {
			toggleRef.current.classList.toggle(styles.toggleMenu);
			setMenu(true);
		}
	};

	const listHandler = () => {
		if (toggleRef.current && menu) {
			toggleRef.current.classList.toggle(styles.toggleMenu);
			setMenu(false);
		}
	};

	return (
		<nav className={styles.container}>
			<div className={styles.logo}>
				<Link href="/">
					<Image src={'/logo.png'} width={100} height={100} alt="Logo" />
				</Link>
			</div>
			<ul className={styles.items} ref={toggleRef} onClick={listHandler}>
				{segment === null ? (
					<Link href="/">
						<li style={{ backgroundColor: 'rgba(0, 0, 0)', color: 'white' }}>Home</li>
					</Link>
				) : (
					<Link href="/">
						<li>Home</li>
					</Link>
				)}
				{segment === 'about' ? (
					<Link href="/about">
						<li style={{ backgroundColor: 'rgba(0, 0, 0)', color: 'white' }}>About</li>
					</Link>
				) : (
					<Link href="/about">
						<li>About</li>
					</Link>
				)}
				{segment === 'project' ? (
					<Link href="/project">
						<li style={{ backgroundColor: 'rgba(0, 0, 0)', color: 'white' }}>Project</li>
					</Link>
				) : (
					<Link href="/project">
						<li>Project</li>
					</Link>
				)}
				{segment === 'contact' ? (
					<Link href="contact">
						<li style={{ backgroundColor: 'rgba(0, 0, 0)', color: 'white' }}>Contact</li>
					</Link>
				) : (
					<Link href="contact">
						<li>Contact</li>
					</Link>
				)}
			</ul>

			<button className={styles.menuBtn} onClick={toggleMenu}>
				<MenuBar />
			</button>
		</nav>
	);
}
