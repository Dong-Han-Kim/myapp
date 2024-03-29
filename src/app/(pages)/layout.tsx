import type { Metadata } from 'next';
import Nav from '../_component/Nav';
import styles from './layout.module.css';
import { Header } from '../_component/Header';

export const metadata: Metadata = {
	title: 'DH',
	description: 'Kim Dong Han Portfolio',
};

type Props = {
	children: React.ReactNode;
	modal: React.ReactNode;
};

export default function contantLayout({ children, modal }: Props) {
	return (
		<main className={styles.main}>
			<div className={styles.leftSection}>
				<Nav />
			</div>

			<div className={styles.rightSection}>
				<div className={styles.headerLayout}>
					<Header />
				</div>

				<div className={styles.mainContent}>
					{children}
					{modal}
				</div>
			</div>
		</main>
	);
}
