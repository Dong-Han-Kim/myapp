import type { Metadata } from 'next';
import Nav from '../../_component/Nav';
import './layout.css';
import Footer from '../../_component/Footer';
import { ToastContainer } from 'react-toastify';
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
				<ToastContainer className="toastContainer" position="top-center"
  					autoClose={2000}
  					closeButton={true}
  					closeOnClick={true}  />
					{children}
				</section>
			</main>
		</>
	);
}
