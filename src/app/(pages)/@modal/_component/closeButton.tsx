'use client';

import { useRouter } from 'next/navigation';
import styles from './closeButton.module.css';

export function CloseButton() {
	const router = useRouter();
	const backRoute = () => {
		router.back();
	};
	return (
		<>
			<button className={styles.closeBtn} onClick={backRoute}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
				</svg>
			</button>
		</>
	);
}
