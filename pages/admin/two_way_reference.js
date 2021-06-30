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
      for (let i = 0; i < topics.length; i++) {
        const topic_problems = topics[i].problems;
        for (let k = 0; k < topic_problems.length; k++) {
          if (topic_problems[k].isEqual(rows_[j]._ref)) {
            rows_[j]._belongTopic = i;
          }
        }
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

  function addTopicRef(problemDoc) {
    const i = problemDoc._belongTopic;
    if (i !== -1) {
      problemDoc._ref.update({
          topic: topics[i]._ref
      })
    }
  }
  
  return <div>
    <button onClick={() => {
      for (const row of rows)
        addTopicRef(row)
    }}>Update problems</button>
    <h1>Problems Details</h1>
    <table className="border-collapse">
      <thead>
        <tr>
            <th>Document ID</th>
            <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => {
          let details = '';
          for (const property in row) {
            details += `${property}: ${row[property]}\n`;
          }
          return (
            <tr key={row.id}>
              <td className="border">{row.id}</td>
              <td className="border"><pre>{details}</pre></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>;
}
