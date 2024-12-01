import type { Metadata } from 'next';
import Nav from '../../../_component/Nav';
import styles from './layout.module.css';
import Footer from '../../../_component/Footer';
import { Fragment } from 'react';


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
		<Fragment>
			<header>
				<Nav />
			</header>
			<main className={styles.main}>
				<section className={styles.content}>
					{children}
				</section>
			</main>
			<footer>
				<Footer />
			</footer>
		</Fragment>
	);
}
