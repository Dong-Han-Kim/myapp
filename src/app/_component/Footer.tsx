import Link from "next/link";
import { GitHub, Mail } from "../_asset/icons";

export default function Footer() {
  return (
    <div className="w-full h-24 flex items-center">
      <ul className="w-full flex justify-around items-center">
        <li className="flex justify-between items-center">
          <div className="m-4">
            <Mail />
          </div>
          <Link href={"mailto:dh32110@naver.com"}>
            <p>dh32110@naver.com</p>
          </Link>
        </li>
        <li className="flex justify-between items-center">
          <div className="m-4">
            <GitHub />
          </div>
          <Link href={"https://github.com/Dong-Han-Kim"}>
            <p>github.com/Dong-Han-Kim</p>
          </Link>
        </li>
        {/* <li className={styles.my_address}>
					<div className={styles.icon}>
						<Link href={'/admin/login'}>관리자모드</Link>
					</div>
						
				</li> */}
      </ul>
    </div>
  );
}
