import styles from './about.module.css';

export default function About() {
	return (
		<main>
			<div className={styles.titleBox}>
				<h1 className={styles.title}>
					ABOUT <span className={styles.division}></span>
				</h1>
			</div>
			<div className={styles.container}>
				<div className={styles.about}>
					<h3>ABOUT ME</h3>
				</div>
				<div className={styles.education}>
					<h3>EDUCATION</h3>
				</div>
				<div className={styles.skill}>
					<h3>SKILL</h3>
				</div>
			</div>
		</main>
	);
}
