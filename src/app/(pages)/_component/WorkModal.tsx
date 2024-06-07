import Image from 'next/image';
import styles from './WorkModal.module.css';
import Link from 'next/link';

type Props = {
	id: string;
	imgsrc: string;
	name: string;
	skill: string;
	description: string;
	site: string;
	github: string;
};

export function WorkModal({ id, name, imgsrc, skill, description, site, github }: Props) {
	return (
		<div className={styles.container}>
			<div className={styles.item} key={id}>
				<div className={styles.imgBox}>
					<Image src={imgsrc} fill alt="work-image" />
				</div>
				<div className={styles.textBox}>
					<h3 className={styles.text}>
						<p className={styles.textTitle}>Name:</p>
						<p className={styles.textContent}>{name}</p>
					</h3>
					<div className={styles.text}>
						<p className={styles.textTitle}>Skill:</p>
						<p className={styles.textContent}>{skill}</p>
					</div>
					<div className={styles.text}>
						<p className={styles.textTitle}>Description:</p>
						<p className={styles.textContent}>{description}</p>
					</div>
					<div className={styles.text}>
						<p className={styles.textTitle}>Site:</p>
						<Link href={site}>
							<p className={styles.textContent}>{site}</p>
						</Link>
					</div>
					<div className={styles.text}>
						<p className={styles.textTitle}>Github:</p>
						<Link href={github}>
							<p className={styles.textContent}>{github}</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
