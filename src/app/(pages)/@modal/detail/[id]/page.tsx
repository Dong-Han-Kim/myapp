'use client';

import { WorkModal } from '@/app/(pages)/_component/WorkModal';
import { useParams } from 'next/navigation';

type Props = {
	params: {
		id: string;
		img: string;
		name: string;
		skill: string;
		description: string;
	};
};

export default function Detail({ params }: Props) {
	const { id, img, name, skill, description } = params;
	console.log(id);

	return (
		<>
			<WorkModal id={id} img={img} name={name} skill={skill} description={description} />
		</>
	);
}
