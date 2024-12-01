import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { create } from "zustand";

export const useAdminAuth = create((set, get) => ({
    user: null,
    
    login: async (id:string, password:string) => {
        // console.log(get().user);
        try {
            const adminDoc = await getDoc(doc(db, 'user', id));
            console.log(adminDoc.data());
            if (!adminDoc.exists()) {
                toast.error("정보를 찾을 수 없습니다.", {position: 'top-center', autoClose: 2000});
                return;
            }

            const admin = adminDoc.data();
            console.log("admin",admin);
            
            if (admin.password !== password) {
                console.log(admin.password);
                
                toast.error("비밀번호가 일치하지 않습니다.", {position: 'top-center', autoClose: 2000});
                return;
            }

            set({user: {id}});
            toast.success("로그인 되었습니다.", {position: 'top-center', autoClose: 2000});
        } catch (error) {
            toast.error("로그인에 실패했습니다.", {position: "top-center", autoClose: 2000});
            console.log("로그인 실패", error);
            
        }
    },

    logout: async () => {
            set({user:null});
            toast.info("로그아웃되었습니다.", {position: "top-center", autoClose: 2000});
    }
}));