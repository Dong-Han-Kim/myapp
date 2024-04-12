'use client';

import { Dispatch, SetStateAction } from 'react';
import style from './Edit.module.css';

interface Comment {
	onTitle: Dispatch<SetStateAction<string>>;
	onName: Dispatch<SetStateAction<string>>;
	onPassword: Dispatch<SetStateAction<string>>;
	onComment: Dispatch<SetStateAction<string>>;
}
export default function Edit({ onTitle, onName, onPassword, onComment }: Comment) {
	return (
		<>
			<div className={style.edit__title}>
				<input
					type="text"
					placeholder="제목을 입력해주세요."
					className={`${style.title__input} ${style.input}`}
					onChange={(e) => onTitle(e.target.value)}
				/>
			</div>

			<div className={style.edit__login}>
				<input
					type="text"
					placeholder="이름을 입력해주세요."
					className={`${style.login__name} ${style.input}`}
					onChange={(e) => onName(e.target.value)}
				/>
				<input
					type="password"
					placeholder="비밀번호를 입력해주세요."
					className={`${style.login__password} ${style.input}`}
					onChange={(e) => onPassword(e.target.value)}
				/>
			</div>

			<div className={style.edit__comment}>
				<input
					type="text"
					placeholder="내용을 입력해주세요."
					className={`${style.comment__create} ${style.input}`}
					onChange={(e) => onComment(e.target.value)}
				/>
			</div>
		</>
	);
}
