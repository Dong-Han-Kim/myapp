'use client';

import { WorkModal } from '@/app/(pages)/_component/WorkModal';
import { useParams } from 'next/navigation';
import styles from './detail.module.css';
import { works } from '@/app/(pages)/_asset/works';
import { useRouter } from 'next/navigation';
import CloseButton from '@/app/(pages)/_component/CloseButton';

export default function Detail() {
	const params = useParams();
	const router = useRouter();
	const backRoute = () => {
		router.back();
	};

	return (
		<>
			<div className={styles.CloseButton}>
				<CloseButton />
			</div>
			<div className={styles.container} onClick={backRoute}>
				{works.map((work) => {
					return work.id === params.id ? (
						<div key={work.id} className={styles.item} id={work.id} onClick={(e) => e.stopPropagation()}>
							<WorkModal
								id={work.id}
								imgsrc={work.imgsrc}
								name={work.name}
								skill={work.skill}
								description={work.description}
								site={work.site}
								github={work.github}
							/>
						</div>
					) : null;
				})}
			</div>
		</>
	);
}
