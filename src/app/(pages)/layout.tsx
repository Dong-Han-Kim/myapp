import type { Metadata } from 'next';
import Nav from '../_component/Nav';
import styles from './layout.module.css';
import Title from '../_component/Title';

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
			<section className={styles.topSection}>
				<Nav />
			</section>

			<section className={styles.bottomSection}>
				<div className={styles.leftLayout}>
					<Title />
				</div>
				<div className={styles.rightContent}>
					{children}
					{modal}
				</div>
			</section>
		</main>
	);
}
