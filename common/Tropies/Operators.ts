import firebase from "firebase";
import { SessionResult, Tropy, TropyCondition, TropyInterface } from "./Types";

export function tropyChecker(tropyCondition: TropyCondition) {
  return (sessionResult: SessionResult) => {
    if (tropyCondition.clearWithin) {
      if (!(sessionResult.clearTime <= tropyCondition.clearWithin))
        return false
    }

    if (tropyCondition.clearTopics instanceof Array) {
      if (!((tropyCondition.clearTopics).every(topic => (sessionResult.finishedTopics).includes(topic)))) 
        return false
    }
    else if (tropyCondition.clearTopics instanceof firebase.firestore.DocumentReference) {
      if (!((sessionResult.finishedTopics).includes(tropyCondition.clearTopics))) 
        return false
    }
    else if (tropyCondition.clearTopics) {
      if (!((sessionResult.finishedTopics).length >= (tropyCondition.clearTopics))) 
        return false
    }

    if (tropyCondition.noMiss) {
      if (!(sessionResult.noMiss))
        return false
    }

    if (tropyCondition.login) {
      if (!(sessionResult.login))
        return false
    }

    if (tropyCondition.sessionFinish) {
      if (!(sessionResult.sessionFinish))
        return false
    }

    return true
  }
}

const convertTropyDocsToTropies =
  (tropyDocs: Array<TropyInterface>) => tropyDocs.map(tropyDoc => new Tropy(tropyDoc))

export {
  convertTropyDocsToTropies
}
