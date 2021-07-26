import firebase from '@/common/firebase_init';

export interface UserDoc {
    finishedTopics?: firebase.firestore.DocumentReference[]
    finishedTropies?: firebase.firestore.DocumentReference[]
    queuedTropyNotifications?: firebase.firestore.DocumentReference[]
    bestTime?: number
}
