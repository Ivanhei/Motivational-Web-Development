import firebase from "firebase";

import { map } from "rxjs/operators";

import {
  SessionResult,
  TopicDocRef,
  TopicDocRefNoMiss,
  Tropy,
  TropyCondition,
  TropyInterface,
} from "./Types";


function topicPairArrayHasTopic(pairs: Array<TopicDocRefNoMiss>, topic: TopicDocRef, noMiss: boolean = false) {
  if (noMiss)
    return pairs.some(topicPair => topicPair.ref.isEqual(topic) && topicPair.noMiss)
  else
    return pairs.some(topicPair => topicPair.ref.isEqual(topic))
}

export function tropyChecker(tropyCondition: TropyCondition) {
  return (sessionResult: SessionResult) => {
    if (tropyCondition.clearWithin) {
      if (!(sessionResult.clearTime <= tropyCondition.clearWithin))
        return false
    }

    if (tropyCondition.clearTopics instanceof Array) {
      if (!((tropyCondition.clearTopics).every(topic => (topicPairArrayHasTopic(sessionResult.finishedTopics, topic, tropyCondition.noMiss))))) 
        return false
    }
    else if (tropyCondition.clearTopics instanceof firebase.firestore.DocumentReference) {
      if (!(topicPairArrayHasTopic(sessionResult.finishedTopics, tropyCondition.clearTopics, tropyCondition.noMiss)))
        return false
    }
    else if (tropyCondition.clearTopics) {
      if (!((sessionResult.finishedTopics).length >= (tropyCondition.clearTopics))) 
        return false
    }

    if (tropyCondition.noMiss && !tropyCondition.clearTopics) {
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
  map((tropyDocs: Array<TropyInterface>) => tropyDocs.map(tropyDoc => new Tropy(tropyDoc)))

export {
  convertTropyDocsToTropies,
}
