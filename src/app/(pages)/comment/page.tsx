'use client';

import { useEffect, useRef, useState } from 'react';
import Edit from './_component/Edit';
import style from './page.module.css';
import { DocumentData, collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { db } from '@/firebase';
import Link from 'next/link';
import Pagination from './_component/Pagination';

interface Comment {
	title: string;
	name: string;
	password: string;
	comment: string;
	commentId: string;
	today: string;
	time: number;
}

export default function Comment() {
	const [isEdit, setIsEdit] = useState(false);
	const [title, setTitle] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [comment, setComment] = useState('');
	const [commentsList, setCommentsList] = useState<Comment[]>([]);
	const [page, setPage] = useState(1);
	const [currentDate, setCurrentDate] = useState('');
	const [currentTime, setCurrentTime] = useState(0);
	const [currentId, setCurrentId] = useState('');
	const limit = useRef(5);
	
	const amount = (page - 1) * limit.current;
	const getComments = async () => {
		const commentsDB = await getDocs(collection(db, 'comments'));
		return commentsDB;
	};
	

	useEffect(() => {
		const date = new Date();
		setCurrentDate(date.toLocaleDateString());
		setCurrentTime(Date.now());
		setCurrentId(uuidv4());
		getComments();
	},[]);


	async function setCommentData() {
		if (title.length === 0 || name.length === 0 || password.length === 0 || comment.length === 0) {
			setIsEdit(isEdit);
			alert('정보를 입력해 주세요.');
		} else {
			setIsEdit(!isEdit);
			const docRef = doc(db, 'comments', currentId);
			await setDoc(docRef, {
				title,
				name,
				password,
				comment,
				today: currentDate,
				time: currentTime,
				commentId: currentId,
			});
		}
	}



	useEffect(() => {
		async function getCommentsData() {
			const commentsData = await getComments();
			const data = commentsData.docs.map((doc: DocumentData) => ({ ...doc.data() }));
			setCommentsList(data);
		}
		if (!isEdit) {
			getCommentsData();
		}
	}, [isEdit]);

	return (
		<div className={style.comment__main}>
			<section className={style.comment__top}>
				<h1 className={style.comment__title}>Comments</h1>
				<p>수정이 필요한 부분이나 부족한 부분이 있다면 짧은 글이라도 남겨주세요. 저에게 많은 도움이 됩니다.</p>
			</section>
			<section className={style.comment__middle}>
				{!isEdit ? (
					<>
						<ul className={style.comment__list}>
							{commentsList
								.sort((a, b) => b.time - a.time)
								.map((item) => {
									return (
										<Link key={item.commentId} href={`/comment/${item.commentId}`}>
											<li className={style.list__item}>
												<span className={style.title}>{item.title}</span>
												<div className={style.item__info}>
													<span className={style.name}>{item.name}</span>
													<span className={style.today}>{item.today}</span>
												</div>
											</li>
										</Link>
									);
								})
								.slice(amount, amount + limit.current)}
						</ul>
						<div className={style.comment_nav}>
							<Pagination
								total={commentsList.length}
								limit={limit.current}
								page={page}
								setPage={setPage}
							/>
						</div>
					</>
				) : (
					<Edit onTitle={setTitle} onName={setName} onPassword={setPassword} onComment={setComment} />
				)}
			</section>
			<section className={style.comment__bottom}>
				{!isEdit ? (
					<button onClick={() => setIsEdit(!isEdit)} className={style.edit__btn}>
						<h1>글쓰기</h1>
					</button>
				) : (
					<div className={style.edit__btnBox}>
						<button
							onClick={async () => {
								setCommentData();
							}}
							className={style.edit__btn}>
							<h1>저장</h1>
						</button>

						<button onClick={() => setIsEdit(!isEdit)} className={style.cancel__btn}>
							<h1>취소</h1>
						</button>
					</div>
				)}
			</section>
		</div>
	);
}
