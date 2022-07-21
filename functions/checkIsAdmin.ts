import { User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../constants/firebase";

export const checkIsAdmin = async (currentUser: User) => {
    const docRef = doc(db, "admins", currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        return docSnap.data().admin;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
};
