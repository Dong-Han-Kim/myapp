'use client';

import { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react';
import style from './page.module.css';
import { useParams } from 'next/navigation';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase';

interface Comments {
	title: string;
	name: string;
	password: string;
	comment: string;
	commentId: string;
	today: string;
}

interface Comment {
	onTitle: Dispatch<SetStateAction<string>>;
	onName: Dispatch<SetStateAction<string>>;
	onPassword: Dispatch<SetStateAction<string>>;
	onComment: Dispatch<SetStateAction<string>>;
}

const initialComment = {
	title: '',
	name: '',
	password: '',
	comment: '',
	commentId: '',
	today: '',
};

export default function CommentDetail() {
	const [commentItem, setCommentItem] = useState<Comments>(initialComment);
	const [isModify, setIsModify] = useState(false);
	const [title, setTitle] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [comment, setComment] = useState('');
	const { commentId } = useParams() as { commentId: string };

	async function updateCommentData() {
		if (title.length === 0 || name.length === 0 || password.length === 0 || comment.length === 0) {
			setIsModify(isModify);
			alert('정보를 입력해 주세요.');
		} else {
			setIsModify(!isModify);
			const docRef = doc(db, 'comments', commentId);
			await updateDoc(docRef, {
				title,
				name,
				password,
				comment,
			});
		}
	}

	useEffect(() => {
		async function getCommentsData() {
			const docRef = doc(db, 'comments', commentId);
			const commentsData = await getDoc(docRef);
			const data = commentsData.data() as Comments;
			setCommentItem(data);
			setTitle(data.title);
			setName(data.name);
			setPassword(data.password);
			setComment(data.comment);
		}
		if (!isModify) {
			getCommentsData();
		}
	}, [commentId, isModify]);

	return (
		<main>
			<section>
				{!isModify ? (
					<div key={commentItem.commentId} className={style.content__box}>
						<div className={style.detail__title}>
							<h1 className={style.title__content}>{commentItem.title}</h1>
						</div>

						<div className={style.detail__login}>
							<span className={style.login__name}>작성자 : {commentItem.name}</span>
							<span className={style.login__today}>날짜 : {commentItem.today}</span>
						</div>

						<div className={style.comment__area}>
							<p className={style.comment__read}>{commentItem.comment}</p>
						</div>
					</div>
				) : (
					<>
						<div className={style.edit__title}>
							<input
								type="text"
								placeholder="제목을 입력해주세요."
								className={`${style.title__input} ${style.input}`}
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>

						<div className={style.edit__login}>
							<input
								type="text"
								placeholder="이름을 입력해주세요."
								className={`${style.edit__name} ${style.input}`}
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<input
								type="password"
								placeholder="비밀번호를 입력해주세요."
								className={`${style.edit__password} ${style.input}`}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						<div className={style.edit__comment}>
							<input
								type="text"
								placeholder="내용을 입력해주세요."
								className={`${style.comment__create} ${style.input}`}
								value={comment}
								onChange={(e) => setComment(e.target.value)}
							/>
						</div>
					</>
				)}
			</section>
			<section className={style.comment__bottom}>
				<div className={style.modify__box}>
					{!isModify ? (
						<button
							className={style.comment__modify}
							onClick={() => {
								const passwordCheck = prompt('비밀번호를 입력해 주세요.');
								console.log(password);
								console.log(passwordCheck);

								if (passwordCheck === commentItem.password) {
									setIsModify(true);
								} else {
									alert('비밀번호가 틀렸습니다.');
								}
							}}>
							수정
						</button>
					) : (
						<>
							<button
								className={style.comment__modify}
								onClick={() => {
									updateCommentData();
									setIsModify(false);
								}}>
								수정
							</button>
							<button className={style.modify__cancel} onClick={() => setIsModify(false)}>
								취소
							</button>
						</>
					)}
				</div>
			</section>
		</main>
	);
}
