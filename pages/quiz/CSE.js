import QuizApp from "@/components/QuizApp";

import firebase from '@/common/firebase_init';
import "firebase/firestore";
const db = firebase.firestore();

export default function Quiz_CSE(props) {
    return <QuizApp topic={db.collection('topic').doc('CSE')} {...props}/>
}
