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
	console.log(id);

	return (
		<div className={styles.container}>
			<div className={styles.item} key={id}>
				<div>
					<Image src={imgsrc} width={250} height={180} alt="work-image" />
				</div>
				<h3>{name}</h3>
				<p>{skill}</p>
				<p>{description}</p>
			</div>
		</div>
	);
}
