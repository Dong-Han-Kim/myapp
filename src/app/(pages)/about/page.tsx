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
					<div className={styles.skillIcons}>
						<div className={styles.skillBox}>
							<h5 className={styles.subTitle}>Basic</h5>
							<Image src={'/HTML.png'} width={50} height={50} alt="HTML" />
							<Image src={'/CSS.png'} width={50} height={50} alt="CSS" />
							<Image src={'/js.svg'} width={50} height={50} alt="JavaScript" />
						</div>
						<div className={styles.skillBox}>
							<h5 className={styles.subTitle}>Library & Framework</h5>
							<Image src={'/React.svg.png'} width={50} height={50} alt="React" />
							<Image src={'/next.svg'} width={50} height={50} alt="Next.js" />
							<Image src={'/tailwindcss.svg'} width={50} height={50} alt="Tailwind-css" />
						</div>

						<div className={styles.skillBox}>
							<h5 className={styles.subTitle}>etc</h5>
							<GitHub />
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
