'use client';

import { usePathname } from 'next/navigation';
import style from './Title.module.css';

export default function Title() {
	const pathname = usePathname();
	console.log(pathname);

	return (
		<main className={style.main}>
			<div className={style.changeTitle}>
				{pathname === '/' ? (
					<div className={style.titleBox}>
						<h1 className={style.title}>HOME</h1>
					</div>
				) : null}

				{pathname === '/about' ? (
					<div className={style.titleBox}>
						<h1 className={style.title}>ABOUT</h1>
					</div>
				) : null}

				{pathname === '/project' ? (
					<div className={style.titleBox}>
						<h1 className={style.title}>PROJECT</h1>
					</div>
				) : null}

				{pathname === '/contact' ? (
					<div className={style.titleBox}>
						<h1 className={style.title}>CONTACT</h1>
					</div>
				) : null}

				{pathname === '/comment' ? (
					<div className={style.titleBox}>
						<h1 className={style.title}>Comment</h1>
					</div>
				) : null}
			</div>
		</main>
	);
}
