
import dialogStyles from '@/styles/DialogBox.module.css'

import {
  CrossIcon,
  LoadingIcon,
} from '@/assets/Icons';

import firebase from '@/common/firebase_init';
import 'firebase/storage'

const storageRef = firebase.storage().ref();

import React, {
  useEffect,
  useState,
  useCallback,
} from 'react';

import { useDropzone } from 'react-dropzone';

import { useUserSubject } from '@/common/utils';

export default function ChangeAvatarDialog({shown, onSave, onClose}) {
  // drop and keep the file
  const [currentFile, setCurrentFile] = useState<File>(null);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setCurrentFile(acceptedFiles[0])
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop})

  // show image when updated
  const [imageURL, setImageURL] = useState<string>(undefined);
  useEffect(() => {
    if (!currentFile)
      setImageURL(undefined)
    else
      setImageURL(URL.createObjectURL(currentFile))
  }, [currentFile])

  // fade in (not working) and fade out
  const delay = 250;
  const [shouldShow, setShouldShow] = useState(false);
  const [visualShow, setVisualShow] = useState(false);
  useEffect(() => {
    if (shown) { // from not shown to shown
      setShouldShow(true);
      setVisualShow(true);
    }
    else { // from shown to not shown
      setVisualShow(false);
      setTimeout(() => {
        setShouldShow(false);
      }, delay)
    }
  }, [shown]);

  // loading UI
  const [loading, setLoading] = useState(false);

  // current user
  const subjectUser = useUserSubject();
  const [uid, setUid] = useState(null);

  useEffect(() => {
    subjectUser.subscribe((user) => {
      if (!user) setUid(null);
      else setUid(user.uid)
    })
  }, [subjectUser])

  return <div className="overlay-layout"
    style={{
      opacity: visualShow ? 1 : 0, 
      display: shouldShow ? "flex" : "none",
      transition: delay + "ms",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div className={dialogStyles.box}>
        <div className={dialogStyles.head}>
          <div className={dialogStyles.title}>Change Icon</div>
          <div className={dialogStyles.close} onClick={(e) => {
            setCurrentFile(null)
            onClose()
          }}><CrossIcon/></div>
        </div>
        <div className={dialogStyles.content}>
          <div {...getRootProps()} className={dialogStyles.imageDrag + " " + (isDragActive ? dialogStyles.dragging : "")}>
          <input {...getInputProps()} />
            {
              isDragActive ?
                <div>Drop the files here...</div> :
                imageURL ? 
                <div className="w-full h-full rounded-full" 
                  style={{background: `url(${imageURL}) 0% 0% / cover`}}/> :
                  <div>Drag and drop some files here, or click to select files.</div>
            }
            {loading ? <div className={dialogStyles["loading-overlay"]}><div className={dialogStyles.icon}>
              <LoadingIcon />
            </div></div> : null}
          </div>
        </div>
        <div className={dialogStyles.foot}>
          <div className={dialogStyles.primary}>
            <button disabled={!currentFile || loading} onClick={(e) => {
              setLoading(true);
              storageRef.child('UserAvatar/' + uid).put(currentFile)
                .then(() => {
                  setLoading(false);
                  setCurrentFile(null)
                  onSave()
                })
                .catch((e) => {
                  setLoading(false);
                  // show error UI
                })
            }}>Save</button>
          </div>
          <div className={dialogStyles.secondary}></div>
        </div>
      </div>
    </div>;
}

