import type { Metadata } from 'next';
import Nav from '../_component/Nav';
import styles from './layout.module.css';
import Footer from '../_component/Footer';

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
		<>
			<header>
				<Nav />
			</header>
			<main className={styles.main}>
				<section className={styles.content}>
					{children}
					{modal}
				</section>
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}
