'use client';

import "./style/login.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {useAdminAuth} from "@/app/store/useAuth";

interface admin {
	id: string;
	password: string;
}

const initialAdmin = {
	id: '',
	password: '',
}

export default function AdminPage() {
	const [adminId, setAdminId] = useState('');
	const [adminPw, setAdminPw] = useState('');
	const [adminData, setAdminData] = useState<admin>(initialAdmin);
	const {login} = useAdminAuth() as { login: (id: string, pw: string) => Promise<void> };
	const router = useRouter();


	const onSubmitAction = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await login(adminId, adminPw);
			console.log("성공");
			
			// router.push('/admin/dashboard');
		} catch (error) {
			console.log("로그인 실패:", error);
			
		}
	}


	return (
		<div id="admin_page">
			<form onSubmit={onSubmitAction}>
			<fieldset className="admin_form">
				<legend>관리자 모드</legend>
				<div>
					<label htmlFor="adminId">
						ID
					</label>
					<input type="text" id="adminId" value={adminId} autoFocus onChange={(e) => setAdminId(e.target.value)} />
				</div>
				<div>
					<label htmlFor="adminPw">
						PW
					</label>
					<input type="password" id="adminPw" value={adminPw} onChange={(e) => setAdminPw(e.target.value)} />
				</div>
				<button>로그인</button>
			</fieldset>
			</form>
		</div>
	);
}
