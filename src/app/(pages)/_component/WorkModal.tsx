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
						<span className={styles.textTitle}>Name:</span> {name}
					</h3>
					<p className={styles.text}>
						<span className={styles.textTitle}>Skill:</span> {skill}
					</p>
					<p className={styles.text}>
						<span className={styles.textTitle}>Description:</span> {description}
					</p>
				</div>
			</div>
		</div>
	);
}
