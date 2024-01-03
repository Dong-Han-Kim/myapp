import type { Metadata } from 'next'
import Nav from '../_component/Nav';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: 'DH',
  description: 'Kim Dong Han Portfolio',
}

type Props = { children: React.ReactNode };

export default function RootLayout({
  children,
}: Props) {
  return (
    <div className={styles.mainAlign}>
      <div className={styles.navPosition}>
        <Nav />
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}
