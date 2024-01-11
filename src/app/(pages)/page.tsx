'use client';

import { useRef } from 'react';
import styles from './page.module.css';

export default function Home() {
	const textRef = useRef<HTMLDivElement>(null);
	let currentCount = 0;

	const changeText = () => {
		if (textRef.current) {
			textRef?.current.children[0].classList.replace('isHidden', 'isActive');
			textRef?.current.children[1].classList.replace('isActive', 'isHidden');
			textRef?.current.children[2].classList.replace('isActive', 'isHidden');
		} else if (currentCount === 1) {
			textRef.current!.children[0].classList.replace('isActive', 'isHidden');
			textRef.current!.children[1].classList.replace('isHidden', 'isActive');
			textRef.current!.children[2].classList.replace('isActive', 'isHidden');
		} else if (currentCount === 2) {
			textRef.current!.children[0].classList.replace('isActive', 'isHidden');
			textRef.current!.children[1].classList.replace('isActive', 'isHidden');
			textRef.current!.children[2].classList.replace('isHidden', 'isActive');
		}

		currentCount++;
	};

	setInterval(changeText, 3000);

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
					<div className={styles.isActive}>Challenge</div>
					<div className={styles.isHidden}>Front-end</div>
					<div className={styles.isHidden}>Developer</div>
				</div>
			</div>
		</main>
	);
}
