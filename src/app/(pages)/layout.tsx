import type { Metadata } from 'next';
import Nav from '../_component/Nav';
import styles from './layout.module.css';
import { phrase } from './_asset/phrase';
import { ChangeText } from './_component/changeText';

export const metadata: Metadata = {
	title: 'DH',
	description: 'Kim Dong Han Portfolio',
};

type Props = {
	children: React.ReactNode;
	modal: React.ReactNode;
};

export default function contantLayout({ children, modal }: Props) {
	const textIndex = Math.floor(Math.random() * phrase.length);
	const headerContent = phrase[textIndex];
	return (
		<main className={styles.main}>
			<div className={styles.leftSection}>
				<Nav />
			</div>

			<div className={styles.rightSection}>
				<div className={styles.headerLayout}>
					<ChangeText />
				</div>

				<div className={styles.mainContent}>
					{children}
					{modal}
				</div>
			</div>
		</main>
	);
}
