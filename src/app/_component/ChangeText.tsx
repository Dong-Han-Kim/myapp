'use client';

import clsx from 'clsx';
import { useState } from 'react';
import styles from './changeText.module.css';
import { useInterval } from '@/app/hook/interval';

export const ChangeText = () => {
	const [view, setView] = useState<number>(0);

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
		<div className={styles.changeTextBox}>
			<div className={`${styles.text} ${clsx({ [styles.isActive]: view === 0, [styles.isHidden]: view !== 0 })}`}>
				Challenge
			</div>
			<div className={`${styles.text} ${clsx({ [styles.isActive]: view === 1, [styles.isHidden]: view !== 1 })}`}>
				Front-end
			</div>
			<div className={`${styles.text} ${clsx({ [styles.isActive]: view === 2, [styles.isHidden]: view !== 2 })}`}>
				Developer
			</div>
		</div>
	);
};
