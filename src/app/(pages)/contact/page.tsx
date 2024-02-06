import { GitHub, Mail } from '@/app/_asset/icons';
import styles from './contact.module.css';
import Link from 'next/link';

export default function Contact() {
	return (
		<div>
			<div className={styles.container}>
				<div className={styles.contact}>
					<div className={styles.icon}>
						<Mail />
					</div>
					<Link href={'https://www.gmail.com'}>
						<p>dh32110@gmail.com</p>
					</Link>
				</div>

				<div className={styles.contact}>
					<div className={styles.icon}>
						<GitHub />
					</div>
					<Link href={'https://github.com/Dong-Han-Kim'}>
						<p>github.com/Dong-Han-Kim</p>
					</Link>
				</div>
			</div>
		</div>
	);
}
