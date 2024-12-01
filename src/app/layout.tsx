import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] });

type Props = { children: React.ReactNode };

export const metadata: Metadata = {
	title: 'DH',
	description: 'Kim Dong Han Portfolio',
};

export default function RootLayout({ children }: Props) {
	return (
		<html>
			<body className={inter.className}>
				{children}
			<ToastContainer className="toastContainer" autoClose={2000} closeOnClick />
			</body>
		</html>
	);
}
