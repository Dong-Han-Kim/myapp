import Image from 'next/image';
import styles from './workModal.module.css';

type Props = {
	id: string;
	imgsrc: string;
	name: string;
	skill: string;
	description: string;
};

export function WorkModal({ id, name, imgsrc, skill, description }: Props) {
	return (
		<div className={styles.container}>
			<div className={styles.item} key={id}>
				<div className={styles.imgBox}>
					<Image src={imgsrc} width={350} height={280} alt="work-image" />
				</div>
				<div className={styles.textBox}>
					<h3 className={styles.text}>
						<p className={styles.textTitle}>Name:</p>
						<p className={styles.textContent}>{name}</p>
					</h3>
					<p className={styles.text}>
						<p className={styles.textTitle}>Skill:</p>
						<p className={styles.textContent}>{skill}</p>
					</p>
					<p className={styles.text}>
						<p className={styles.textTitle}>Description:</p>
						<p className={styles.textContent}>{description}</p>
					</p>
				</div>
			</div>
		</div>
	);
}
