import { v4 as uuidv4 } from 'uuid';

const workId = uuidv4();

export const works = [
	{
		id: 'todo',
		name: 'TO DO List',
		imgsrc: '/todo.png',
		skill: 'React, React-dom, Css, uuid',
		description: 'React로 제작한 To Do List로 CRUD를 구현하였습니다.',
	},
	{
		id: 'netflix',
		name: 'NETFLIX CLONE',
		imgsrc: '/netflix.png',
		skill: 'React, Next.js, Tailwind css, Vercel, Zustand, React Query, Firebase',
		description: 'Next.js와 React Query, Zustand를 공부하기 위해 만들었던 NETFLIX입니다.',
	},
];
