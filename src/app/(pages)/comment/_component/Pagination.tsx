import { Dispatch, SetStateAction } from 'react';
import style from './Pagination.module.css';
import clsx from 'clsx';

interface Pagination {
	total: number;
	limit: number;
	page: number;
	setPage: Dispatch<SetStateAction<number>>;
}

export default function Pagination({ total, limit, page, setPage }: Pagination) {
	const pages = Math.ceil(total / limit);
	return (
		<div>
			{Array(pages)
				.fill(1)
				.map((ele, i) => {
					return (
						<button
							key={i + 1}
							onClick={() => setPage(i + 1)}
							className={`${clsx({
								[style.isActive]: page === i + 1,
								[style.isInactive]: page !== i + 1,
							})}`}>
							{i + 1}
						</button>
					);
				})}
		</div>
	);
}
