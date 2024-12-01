import Link from 'next/link';
import { GitHub, Mail } from '../_asset/icons';
import styles from './Footer.module.css';

export default function Footer() {
	return (
		<div className={styles.footer}>
			<ul className={styles.contact}>
				<li className={styles.my_address}>
					<div className={styles.icon}>
						<Mail />
					</div>
					<Link href={'https://www.naver.com'}>
						<p>dh32110@naver.com</p>
					</Link>
				</li>
				<li className={styles.my_address}>
					<div className={styles.icon}>
						<GitHub />
					</div>
					<Link href={'https://github.com/Dong-Han-Kim'}>
						<p>github.com/Dong-Han-Kim</p>
					</Link>
				</li>
				<li className={styles.my_address}>
					<div className={styles.icon}>
						<Link href={'/admin/login'}>관리자모드</Link>
					</div>
						
				</li>
			</ul>
		</div>
	);
}
