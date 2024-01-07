import styles from './project.module.css';
import { works } from '../_asset/works';
import Image from 'next/image';
import Link from 'next/link';

export default function Project() {
	return (
		<div className={styles.container}>
			{works.map((work) => {
				return (
					<Link key={work.id} href={`detail/${work.id}`}>
						<div id={work.id} className={styles.project} key={work.id}>
							<div>
								<Image src={work.imgsrc} width={200} height={130} alt="projectImage" />
							</div>
							<h3 className={styles.title}>{work.name}</h3>
						</div>
					</Link>
				);
			})}
		</div>
	);
}
