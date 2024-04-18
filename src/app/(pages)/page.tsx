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
		<main className={styles.main}>
			<div className={styles.container}>
				<div className={styles.myNames}>
					<p
						className={`${styles.myNameOne} ${clsx({
							[styles.isActive]: view > 1,
						})}`}>
						KIMDONGHAN
					</p>

					<p
						className={`${styles.myNameTwo} ${clsx({
							[styles.isActive]: view > 0,
						})}`}>
						KIMDONGHAN
					</p>

					<p
						className={`${styles.myNameThree} ${clsx({
							[styles.isActive]: view >= 0,
						})}`}>
						KIMDONGHAN
					</p>
				</div>
			</div>
		</main>
	);
}
