import { User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../constants/firebase";

export const checkIsAdmin = async (currentUser: User) => {
    const docRef = doc(db, "admins", currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data().admin;
    } else {
        console.log("No such document!");
    }
};
