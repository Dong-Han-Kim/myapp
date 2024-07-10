import styles from './project.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { works } from '@/app/(pages)/_asset/works';

export default function Project() {
	return (
		<div className={styles.container}>
			<h3>Project</h3>
			<div className={styles.works}>
				{works.map((work) => {
					return (
						<Link key={work.id} href={`detail/${work.id}`}>
							<div id={work.id} className={styles.project} key={work.id}>
								<div>
									<Image src={work.imgsrc} fill alt="projectImage" />
								</div>
								<h3 className={styles.title}>{work.name}</h3>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
