'use client';

import { useRef } from 'react';
import styles from './page.module.css';
import { motion } from 'framer-motion';

export default function Home() {
	const textRef = useRef<HTMLDivElement>(null);
	console.log(textRef.current);

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
					<div>Challenge</div>
					<div>Front-end</div>
					<div>Developer</div>
				</div>
			</div>
		</main>
	);
}
