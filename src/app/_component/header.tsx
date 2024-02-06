'use client';

import { usePathname } from 'next/navigation';
import { ChangeText } from './ChangeText';
import style from './header.module.css';

export function Header() {
	const pathname = usePathname();
	console.log(pathname);

	return (
		<main className={style.main}>
			<ChangeText />
			<div className={style.changeTitle}>
				{pathname === '/' ? (
					<div className={style.titleBox}>
						<h1>HOME</h1>
						<div className={style.division}></div>
					</div>
				) : null}

				{pathname === '/about' ? (
					<div className={style.titleBox}>
						<h1>ABOUT</h1>
						<div className={style.division}></div>
					</div>
				) : null}

				{pathname === '/project' ? (
					<div className={style.titleBox}>
						<h1>PROJECT</h1>
						<div className={style.division}></div>
					</div>
				) : null}

				{pathname === '/contact' ? (
					<div className={style.titleBox}>
						<h1>CONTACT</h1>
						<div className={style.division}></div>
					</div>
				) : null}
			</div>
		</main>
	);
}
