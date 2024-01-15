'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import clsx from 'clsx';

export default function Home() {
	const [view, setView] = useState<number>(0);

	useEffect(() => {
		const viewerTimer = () => {
			if (view < 3) {
				setView(view + 1);
			}
		};

		const timer = setTimeout(() => {
			viewerTimer();
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [view]);

	console.log(`name: ${view}`);

	return (
		<main>
			<div className={styles.titleBox}>
				<h1 className={styles.title}>
					HOME <span className={styles.division}></span>
				</h1>
			</div>
			<div className={styles.container}>
				<h1
					className={`${styles.myNameOne} ${clsx({
						[styles.isActive]: view > 1,
					})}`}>
					KIM DONGHAN
				</h1>

				<h3
					className={`${styles.myNameTwo} ${clsx({
						[styles.isActive]: view > 0,
					})}`}>
					KIM DONGHAN
				</h3>

				<h5
					className={`${styles.myNameThree} ${clsx({
						[styles.isActive]: view >= 0,
					})}`}>
					KIM DONGHAN
				</h5>
			</div>
		</main>
	);
}
