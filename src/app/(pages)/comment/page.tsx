'use client';

import { Fragment, useCallback, useEffect, useState } from 'react';
import Edit from './_component/Edit';
import style from './page.module.css';
import { DocumentData, collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { db } from '@/firebase';
import Link from 'next/link';

interface Comment {
	title: string;
	name: string;
	password: string | number;
	comment: string;
	commentId: string;
	today: string;
}

export default function Comment() {
	const [isEdit, setIsEdit] = useState(false);
	const [title, setTitle] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [comment, setComment] = useState('');
	const [commentsList, setCommentsList] = useState<Comment[]>([]);
	const date = new Date();
	const today = date.toLocaleDateString();
	const commentId = uuidv4();

	async function setCommentData() {
		if (title.length === 0 || name.length === 0 || password.length === 0 || comment.length === 0) {
			setIsEdit(isEdit);
			alert('정보를 입력해 주세요.');
		} else {
			setIsEdit(!isEdit);
			const docRef = doc(db, 'comments', commentId);
			await setDoc(docRef, {
				title,
				name,
				password,
				comment,
				today,
				commentId,
			});
		}
	}

	const getComments = async () => {
		const commentsDB = await getDocs(collection(db, 'comments'));
		return commentsDB;
	};
	getComments();

	useEffect(() => {
		async function getCommentsData() {
			const commentsData = await getComments();
			const data = commentsData.docs.map((doc: DocumentData) => ({ ...doc.data() }));
			setCommentsList(data);
		}
		getCommentsData();
	}, []);

	return (
		<main className={style.comment__main}>
			<section className={style.comment__top}>
				<h1 className={style.comment__title}>Comments</h1>

				{!isEdit ? (
					<button onClick={() => setIsEdit(!isEdit)} className={style.edit__btn}>
						<h1>글쓰기</h1>
					</button>
				) : (
					<button
						onClick={async () => {
							setCommentData();
						}}
						className={style.edit__btn}>
						<h1>저장</h1>
					</button>
				)}
			</section>
			<section className={style.comment__middle}>
				{!isEdit ? (
					<ul>
						{commentsList.map((item) => {
							return (
								<Link key={item.commentId} href={`/commentDetail/${item.commentId}`}>
									<li>
										<span>{item.title}</span>
										<span>{item.name}</span>
										<span>{item.today}</span>
									</li>
								</Link>
							);
						})}
					</ul>
				) : (
					<Edit onTitle={setTitle} onName={setName} onPassword={setPassword} onComment={setComment} />
				)}
			</section>
			<section></section>
		</main>
	);
}
