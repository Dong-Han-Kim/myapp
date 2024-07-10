import { GitHub } from '@/app/_asset/icons';
import styles from './about.module.css';
import Image from 'next/image';

export default function About() {
	return (
		<div className={styles.container}>
			<section className={styles.about}>
				<div className={styles.about_me}>
					<h3 className={styles.categories}>ABOUT ME</h3>
					<p>안녕하세요.</p>
					<p>정체되지 않고 꾸준히 성장하는 프론트엔드 개발자가 되고 싶은 김동한입니다.</p>
					<p>방문해주셔서 감사합니다.</p>
				</div>
				<div className={styles.education}>
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
				</div>
			</section>

			<section className={styles.skill}>
				<div>
					<h3 className={styles.categories}>SKILL</h3>
					<div>
						<div className={styles.skillBox}>
							<div>
								<h5 className={styles.subTitle}>Basic</h5>
							</div>
							<div className={styles.icons}>
								<div className={styles.icon}>
									<Image src={'/HTML.png'} fill alt="HTML" />
								</div>
								<div className={styles.icon}>
									<Image src={'/CSS.png'} fill alt="CSS" />
								</div>
								<div className={styles.icon}>
									<Image src={'/js.svg'} fill alt="JavaScript" />
								</div>
							</div>
						</div>
						<div className={styles.skillBox}>
							<div>
								<h5 className={styles.subTitle}>Library & Framework</h5>
							</div>
							<div className={styles.icons}>
								<div className={styles.icon}>
									<Image src={'/React.svg.png'} fill alt="React" />
								</div>
								<div className={styles.icon}>
									<Image src={'/next.svg'} fill alt="Next.js" />
								</div>
								<div className={styles.icon}>
									<Image src={'/tailwindcss.svg'} fill alt="Tailwind-css" />
								</div>
								<div className={styles.icon}>
									<Image src={'/reactquery.svg'} fill alt="React Query" />
								</div>
							</div>
						</div>
						<div className={styles.skillBox}>
							<div>
								<h5 className={styles.subTitle}>Database</h5>
							</div>
							<div className={styles.icons}>
								<div className={styles.icon}>
									<Image src={'/firebase-48.svg'} fill alt="firebase" />
								</div>
							</div>
						</div>
						<div className={styles.skillBox}>
							<div>
								<h5 className={styles.subTitle}>etc</h5>
							</div>
							<div className={styles.icons}>
								<div className={styles.icon}>
									<Image src={'/github.png'} fill alt="firebase" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
