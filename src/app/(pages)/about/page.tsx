import { Next, GitHub } from '@/app/_asset/icons';
import styles from './about.module.css';
import Image from 'next/image';

export default function About() {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<section className={styles.about}>
					<h3 className={styles.categories}>ABOUT ME</h3>
					<p>안녕하세요. 프론트엔드 개발자가 되고 싶은 김동한입니다. 방문해 주셔서 감사합니다.</p>
				</section>
				<section className={styles.education}>
					<h3 className={styles.categories}>EDUCATION</h3>
					<ul>
						<li>
							<p>중원대학교 경찰행정학과</p>
							<p className={styles.date}>2011.02 ~ 2018.02</p>
						</li>
						<li>
							<p>충청 ICT취·창업 역량강화 프로그램</p>
							<p className={styles.date}>2023.10 ~ 2023.11</p>
						</li>
					</ul>
				</section>
				<section className={styles.skill}>
					<h3 className={styles.categories}>SKILL</h3>
					<div>
						<h5 className={styles.subTitle}>Basic</h5>
						<div className={styles.skillBox}>
							<Image src={'/HTML5.svg.png'} width={50} height={50} alt="HTML" />
							<Image src={'/CSS.svg.png'} width={50} height={50} alt="CSS" />
							<Image src={'/JavaScript.svg.png'} width={50} height={50} alt="JavaScript" />
						</div>
						<h5 className={styles.subTitle}>Library</h5>
						<div className={styles.skillBox}>
							<Image src={'/React.svg.png'} width={50} height={50} alt="React" />
						</div>
						<h5 className={styles.subTitle}>Framework</h5>
						<div className={styles.skillBox}>
							<Next />
							<Image src={'/Tailwind.svg.png'} width={150} height={50} alt="Tailwind-css" />
						</div>
						<h5 className={styles.subTitle}>etc</h5>
						<div className={styles.skillBox}>
							<GitHub />
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
