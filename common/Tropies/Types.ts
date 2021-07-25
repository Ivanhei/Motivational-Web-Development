
import firebase from '@/common/firebase_init';
import { tropyChecker } from './Operators';
// import 'firebase/firestore';

export type TopicDocRef = firebase.firestore.DocumentReference
export type TopicDocRefNoMiss = {ref: TopicDocRef, noMiss: boolean}

export interface SessionResult {
  // tropies for quizes
  clearTime: number
  noMiss: boolean

  // tropies for across multiple quizes
  finishedTopics: Array<TopicDocRefNoMiss>
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
  _ref: firebase.firestore.DocumentReference
}

export type TropyChecker = (sessionResult: SessionResult) => boolean;

export class Tropy implements TropyInterface {
  color: string
  condition: TropyCondition
  name: string
  _ref: firebase.firestore.DocumentReference

  private checker: TropyChecker

  constructor({color, condition, name, _ref}: TropyInterface) {
    this.color = color
    this.condition = condition
    this.name = name
    this._ref = _ref
    this.checker = tropyChecker(this.condition)
  }

  check(sessionResult: SessionResult) {
    return this.checker(sessionResult)
  }
}
