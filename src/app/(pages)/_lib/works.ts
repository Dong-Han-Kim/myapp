import { v4 as uuidv4 } from 'uuid';

export const works = [
	{
		id: uuidv4(),
		name: 'TO DO List',
		img: '/todo.png',
		skill: 'React, React-dom, Css, uuid',
		description: 'React로 제작한 To Do List로 CRUD를 구현하였습니다.',
	},
	{
		id: uuidv4(),
		name: 'NETFLIX CLONE',
		img: '/netflix.png',
		skill: 'React, Next.js, Tailwind css, Vercel, Zustand, React Query, Firebase',
		description: 'Next.js와 React Query, Zustand를 공부하기 위해 만들었던 NETFLIX입니다.',
	},
];
