import React, { useState, useEffect, useRef } from 'react';

interface InterverType {
	(callback: () => void, interval: number): void;
}

export const useInterval: InterverType = (callback, delay) => {
	const savedCallback = useRef<(() => void) | null>(undefined); // 클로저 역할, 렌더해도 초기화 X

	// callback이 변경될 때 감지해서 최신상태 저장
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// interval과 clear 세팅
	useEffect(() => {
		function tick() {
			if (savedCallback.current) {
				savedCallback.current();
			}
		}
		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id); // 바로 클리어해줘서 메모리 차지 X
		}
		console.log(delay);
	}, [delay]);
};
