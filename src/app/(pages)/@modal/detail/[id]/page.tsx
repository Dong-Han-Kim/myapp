'use client';

import { WorkModal } from '@/app/(pages)/_component/WorkModal';
import { useParams } from 'next/navigation';
import styles from './detail.module.css';
import CloseButton from '../../_component/closeButton';
import { works } from '@/app/(pages)/_asset/works';
import { useRouter } from 'next/navigation';

type Props = {
	prop: {
		id: string;
		imgsrc: string;
		name: string;
		skill: string;
		description: string;
	};
};

export default function Detail({ prop }: Props) {
	const params = useParams();
	const router = useRouter();
	const backRoute = () => {
		router.back();
	};

	return (
		<>
			<CloseButton />
			<div className={styles.container} onClick={backRoute}>
				{works.map((work) => {
					return work.id === params.id ? (
						<div key={work.id} className={styles.item} id={work.id}>
							<WorkModal
								id={work.id}
								imgsrc={work.imgsrc}
								name={work.name}
								skill={work.skill}
								description={work.description}
							/>
						</div>
					) : null;
				})}
			</div>
		</>
	);
}
