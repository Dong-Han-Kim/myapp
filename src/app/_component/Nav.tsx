'use client';

import Image from 'next/image';
import styles from './Nav.module.css';
import { MenuBar } from '../_asset/icons';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useRef, useState } from 'react';
import clsx from 'clsx';

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
					<Image src={'/logo.png'} width={90} height={90} alt="Logo" />
				</Link>
			</div>
			<ul className={styles.items} ref={toggleRef} onClick={listHandler}>
				<Link href="/">
					<li
						className={clsx({
							[styles.isActive]: segment === null,
						})}>
						Home
					</li>
				</Link>

				<Link href="/about">
					<li
						className={clsx({
							[styles.isActive]: segment === 'about',
						})}>
						About
					</li>
				</Link>

				<Link href="/project">
					<li
						className={clsx({
							[styles.isActive]: segment === 'project',
						})}>
						Project
					</li>
				</Link>

				<Link href="/contact">
					<li
						className={clsx({
							[styles.isActive]: segment === 'contact',
						})}>
						Contact
					</li>
				</Link>

				<Link href="/comment">
					<li
						className={clsx({
							[styles.isActive]: segment === 'comment',
						})}>
						Comment
					</li>
				</Link>
			</ul>

			<button className={styles.menuBtn} onClick={toggleMenu}>
				<MenuBar />
			</button>
		</nav>
	);
}
