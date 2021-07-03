import firebase from '@/common/firebase_init'
import 'firebase/firestore'

import { useEffect, useMemo, useState } from 'react';

const db = firebase.firestore();

export default function ProblemsTable() {
  const [problems, setProblems] = useState([]);
  const [topics, setTopics] = useState([]);

  const rows = useMemo(() => {
    const rows_ = [...problems];

    // for bettwe performance, use hashmap instead.
    for (let j = 0; j < rows_.length; j++) {
      rows_[j]._belongTopic = -1;
      if (!rows_[j].topic) continue;
      for (let i = 0; i < topics.length; i++) {
        if (rows_[j].topic.isEqual(topics[i]._ref))
          rows_[j]._belongTopic = i;
      }
    }

    return rows_;
  }, [problems, topics]);

  useEffect(() => {
    const unsubArray = [
      db.collection("problems").onSnapshot(snap => {
        setProblems(snap.docs.map(doc => ({...doc.data(), id: doc.id, _ref: doc.ref})))
      }),
      db.collection("topic").onSnapshot(snap => {
        setTopics(snap.docs.map(doc => ({...doc.data(), id: doc.id, _ref: doc.ref})))
      }),
    ];

    return () => {
      for (const unsub of unsubArray)
        unsub();
    }
  }, [])

  function changeTopicHandler(row) {
    return (e) => {
      const i = parseInt(e.target.value);
      if (i >= 0 && i < topics.length) {
        Promise.all ([
          // remove from old topic
          row.topic?.update({
            problems: firebase.firestore.FieldValue.arrayRemove(row._ref)
          }),

          // add to new topic
          topics[i]._ref.update({
            problems: firebase.firestore.FieldValue.arrayUnion(row._ref)
          }),

          // update topic
          row._ref.update({
            topic: topics[i]._ref
          }),
        ]).then(() => {
          console.log("Done Updating!!");
        }).catch(() => {
          console.error("Error occurred during update.");
        })
      }
    }
  }
  

  return <div>
    <h1>Problems Details</h1>
    <table className="border-collapse">
      <thead>
        <tr>
            <th>Document ID</th>
            <th>Details</th>
            <th>Topic</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => {
          const details = JSON.stringify(row, (key, value) => {
            if (key === '_ref') return undefined;
            if (key === 'topic') return value.id;
            return value;
          }, 2);
          return (
            <tr key={row.id}>
              <td className="border">{row.id}</td>
              <td className="border"><pre>{details}</pre></td>
              <td className="border">
                <select
                  name={`problem_${row.id}_topic`}
                  onChange={changeTopicHandler(row)}
                  value={row._belongTopic}
                >
                  {row._belongTopic === -1 ? 
                    <option 
                      value={-1} 
                      key={-1} 
                    >
                      (not selected)
                    </option> 
                  : null}
                  {topics.map((topic, i) => (
                    <option 
                      value={i} 
                      key={i} 
                    >
                      {topic.name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>;
}
