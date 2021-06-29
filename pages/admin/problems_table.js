import firebase from '../../common/firebase_init'
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

  function changeTopicHandler(problemDocRef) {
    return (e) => {
      const i = parseInt(e.target.value);
      if (i !== -1) {
        topics[i]._ref.update({
          problems: firebase.firestore.FieldValue.arrayUnion(problemDocRef)
        });
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
          let details = '';
          for (const property in row) {
            details += `${property}: ${row[property]}\n`;
          }
          return (
            <tr key={row.id}>
              <td className="border">{row.id}</td>
              <td className="border"><pre>{details}</pre></td>
              <td className="border">
                <select name={`problem_${row.id}_topic`} onChange={changeTopicHandler(row._ref)} value={row._belongTopic} disabled={i !== -1}>
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
