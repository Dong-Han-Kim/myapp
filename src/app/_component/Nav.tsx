'use client';

import Image from 'next/image';
import styles from './Nav.module.css';
import { MenuBar } from '../_asset/icons';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function Nav() {
	const segment = useSelectedLayoutSegment();

	const toggleRef = useRef<HTMLUListElement>(null);
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);

	useEffect(() => {
		const resizeListener = () => {
			setInnerWidth(window.innerWidth);
		};
		window.addEventListener('resize', resizeListener);
		window.addEventListener('beforeunload', resizeListener);
	}, [window]);

	console.log(innerWidth);

	const toggleMenu = () => {
		if (toggleRef.current) {
			toggleRef.current.classList.toggle(styles.toggleMenu);
		}
	};
	return (
		<nav className={styles.container}>
			<div className={styles.logo}>
				<Image src={'/logo.png'} width={100} height={100} alt="Logo" />
			</div>
			<ul className={styles.items} ref={toggleRef}>
				{segment === null ? (
					<Link href="/">
						<li style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>Home</li>
					</Link>
				) : (
					<Link href="/">
						<li>Home</li>
					</Link>
				)}
				{segment === 'about' ? (
					<Link href="/about">
						<li style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>About</li>
					</Link>
				) : (
					<Link href="/about">
						<li>About</li>
					</Link>
				)}
				{segment === 'project' ? (
					<Link href="/project">
						<li style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>Project</li>
					</Link>
				) : (
					<Link href="/project">
						<li>Project</li>
					</Link>
				)}
				{segment === 'contact' ? (
					<Link href="contact">
						<li style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>Contact</li>
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
