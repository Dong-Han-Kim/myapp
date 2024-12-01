import type { Metadata } from 'next';
import Nav from '../../_component/Nav';
import './layout.css';
import Footer from '../../_component/Footer';

export const metadata: Metadata = {
	title: 'DH',
	description: 'Kim Dong Han Portfolio',
};

type Props = {
	children: React.ReactNode;
};

export default function contantLayout({ children }: Props) {
	return (
		<>
			<main className='main'>
				<section className='content'>
					{children}
				</section>
			</main>
		</>
	);
}
