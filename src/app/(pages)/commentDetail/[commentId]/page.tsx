'use client';

import { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react';
import style from './page.module.css';
import { useParams } from 'next/navigation';
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { db } from '@/firebase';

interface Comments {
	title: string;
	name: string;
	password: string | number;
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

export default function CommentDetail() {
	const [commentsList, setCommentsList] = useState<Comments[]>([]);
	const params = useParams();
	console.log(params);

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
			console.log(data);
		}
		getCommentsData();
	}, []);

	console.log(commentsList);

	return (
		<>
			{commentsList
				.filter((item) => item.commentId === params.commentId)
				.map((item) => {
					return (
						<main key={item.commentId} className={style.main}>
							<section className={style.detail__title}>
								<h1 className={style.title__content}>{item.title}</h1>
							</section>

							<section className={style.detail__login}>
								<h3 className={style.login__name}>작성자 : {item.name}</h3>
								<h3 className={style.login__today}>작성 날짜 : {item.today}</h3>
							</section>

							<section className={style.comment__area}>
								<p className={style.comment__read}>{item.comment}</p>
							</section>
						</main>
					);
				})}
		</>
	);
}
