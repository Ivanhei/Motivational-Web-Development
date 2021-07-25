
import firebase from '@/common/firebase_init';
import { tropyChecker } from './Operators';
// import 'firebase/firestore';

export interface SessionResult {
  // tropies for quizes
  clearTime: number
  noMiss: boolean

  // tropies for across multiple quizes
  finishedTopics: Array<firebase.firestore.DocumentReference>
  sessionFinish: boolean // indicate whther it's a quiz session finishing or not

  // other tropies
  login: boolean
}

export interface TropyCondition {
  clearWithin?: number
  noMiss?: boolean
  clearTopics?: number | firebase.firestore.DocumentReference | Array<firebase.firestore.DocumentReference>
  sessionFinish?: boolean
  login?: boolean
}

export interface TropyInterface {
  color: string
  condition: TropyCondition
  name: string
}

export type TropyChecker = (sessionResult: SessionResult) => boolean;

export class Tropy implements TropyInterface {
  color: string
  condition: TropyCondition
  name: string

  private checker: TropyChecker

  constructor({color, condition, name}: TropyInterface) {
    this.color = color
    this.condition = condition
    this.name = name
    this.checker = tropyChecker(this.condition)
  }

  check(sessionResult: SessionResult) {
    return this.checker(sessionResult)
  }
}
