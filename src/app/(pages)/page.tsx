import styles from './page.module.css';

export default function Home() {
	return (
		<main>
			<div className={styles.titleBox}>
				<h1 className={styles.title}>
					HOME <span className={styles.division}></span>
				</h1>
			</div>
			<div className={styles.container}>
				<h1>KIM DONGHAN</h1>
			</div>
		</main>
	);
}
