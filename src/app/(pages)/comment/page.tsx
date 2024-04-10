'use client';

import { useState } from 'react';
import Edit from './_component/Edit';

export default function Comment() {
	const [isEdit, setIsEdit] = useState(false);
	return (
		<>
			<section>
				<h1>코멘트</h1>
				<button onClick={() => setIsEdit(true)}>글쓰기</button>
			</section>
			<section>{!isEdit ? <h1>목록자리</h1> : <Edit />}</section>
		</>
	);
}
