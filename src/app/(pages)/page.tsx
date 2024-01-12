'use client';

import { useRef, useState } from 'react';
import styles from './page.module.css';
import { useInterval } from '../hook/interval';
import clsx from 'clsx';

export default function Home() {
	const textRef = useRef<HTMLDivElement>(null);
	const [view, setView] = useState<number>(0);
	let currentCount = 0;

	const changeText = () => {
		setView(view + 1);
		if (view === 2) {
			setView(0);
		}

		console.log(view);
	};

	useInterval(() => {
		changeText();
	}, 3000);

	return (
		<main>
			<div className={styles.titleBox}>
				<h1 className={styles.title}>
					HOME <span className={styles.division}></span>
				</h1>
			</div>
			<div className={styles.container}>
				<h1 className={styles.myName}>KIM DONGHAN</h1>
				<div className={styles.changeTextBox} ref={textRef}>
					<div className={clsx({ [styles.isActive]: view === 0, [styles.isHidden]: view !== 0 })}>
						Challenge
					</div>
					<div className={clsx({ [styles.isActive]: view === 1, [styles.isHidden]: view !== 1 })}>
						Front-end
					</div>
					<div className={clsx({ [styles.isActive]: view === 2, [styles.isHidden]: view !== 2 })}>
						Developer
					</div>
				</div>
			</div>
		</main>
	);
}
