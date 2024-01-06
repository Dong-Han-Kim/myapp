import styles from './project.module.css';
import { works } from '../_lib/works';
import Image from 'next/image';
import Link from 'next/link';

export default function Project() {
	console.log(works[0]);

	return (
		<div className={styles.container}>
			{works.map((work, index) => {
				return (
					<Link key={work.id} href={`detail/${work.id}`}>
						<div className={styles.project} key={work.id}>
							<div>
								<Image src={work.img} width={200} height={130} alt="projectImage" />
							</div>
							<h3 className={styles.title}>{work.name}</h3>
						</div>
					</Link>
				);
			})}
		</div>
	);
}
