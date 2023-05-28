import { FirebaseError, initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  setPersistence,
  browserLocalPersistence,
  UserInfo,
  updateProfile,
} from 'firebase/auth';
import { getFirestore, query, getDocs, collection, where, addDoc } from 'firebase/firestore';
import { AuthMsg } from '../languages/authMsg';

const firebaseConfig = {
  apiKey: 'AIzaSyDf8HM9qXgPB-snmATL-6D8VySuqFKWI38',
  authDomain: 'graphiql-app-lp.firebaseapp.com',
  projectId: 'graphiql-app-lp',
  storageBucket: 'graphiql-app-lp.appspot.com',
  messagingSenderId: '1046413540091',
  appId: '1:1046413540091:web:30cfa9d407c1b915f70e5e',
  measurementId: 'G-6W7EXZZ8PZ',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

// EITHER REMOVE OR ADD ERROR HANDLING
const signInWithGoogle = async () => {
  let errorObj = {
    type: '',
    message: '',
    format: false,
  };
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      errorObj = {
        type: 'other',
        message: error.message,
        format: false,
      };
    } else {
      errorObj = {
        type: 'other',
        message: AuthMsg.APIErrorUnknown,
        format: true,
      };
    }
    return errorObj;
  }
};

const logInWithEmailAndPassword = async (email: string, password: string) => {
  let errorObj = {
    type: '',
    message: '',
    format: false,
  };
  try {
    await setPersistence(auth, browserLocalPersistence);
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case 'auth/invalid-email':
          errorObj = {
            type: 'email',
            message: AuthMsg.APIErrorInvalidEmail,
            format: true,
          };
          break;
        case 'auth/user-not-found':
          errorObj = {
            type: 'email',
            message: AuthMsg.APIErrorUserNotFound,
            format: true,
          };
          break;
        case 'auth/wrong-password':
          errorObj = {
            type: 'password',
            message: AuthMsg.APIErrorWrongPwd,
            format: true,
          };
          break;
        case 'auth/missing-password':
          errorObj = {
            type: 'password',
            message: AuthMsg.APIErrorNoPwd,
            format: true,
          };
          break;
        default:
          errorObj = {
            type: 'other',
            message: error.message,
            format: false,
          };
          break;
      }
    } else {
      errorObj = {
        type: 'other',
        message: AuthMsg.APIErrorUnknown,
        format: true,
      };
    }
  }
  return errorObj;
};

const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
  let errorObj = {
    type: '',
    message: '',
    format: false,
  };
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name: name,
      authProvider: 'local',
      email,
    });
    await updateProfile(user, {
      displayName: name,
    });
  } catch (error) {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorObj = {
            type: 'email',
            message: AuthMsg.APIErrorEmailInUse,
            format: true,
          };
          break;
        case 'auth/invalid-email':
          errorObj = {
            type: 'email',
            message: AuthMsg.APIErrorInvalidEmail,
            format: true,
          };
          break;
        case 'auth/operation-not-allowed':
          errorObj = {
            type: 'other',
            message: AuthMsg.APIErrorNotAllowed,
            format: true,
          };
          break;
        case 'auth/wrong-password':
          errorObj = {
            type: 'password',
            message: AuthMsg.APIErrorWrongPwd,
            format: true,
          };
          break;
        default:
          errorObj = {
            type: 'other',
            message: error.message,
            format: false,
          };
          break;
      }
    } else {
      errorObj = {
        type: 'other',
        message: AuthMsg.APIErrorUnknown,
        format: true,
      };
    }
  }
  return errorObj;
};

const checkForAuthStatus = (
  callback: (user: { status: boolean; data: UserInfo | object }) => void
) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      callback({
        status: true,
        data: user.providerData[0],
      });
    } else {
      callback({
        status: false,
        data: {},
      });
    }
  });
};

const sendPasswordReset = async (email: string) => {
  let ret = {
    res: '',
    success: false,
    formatId: '',
  };
  try {
    await sendPasswordResetEmail(auth, email);
    ret = {
      res: '',
      success: true,
      formatId: AuthMsg.resetPwdResOk,
    };
  } catch (error) {
    if (error instanceof Error) {
      ret = {
        res: error.message,
        success: false,
        formatId: AuthMsg.resetPwdResError,
      };
    } else {
      ret = {
        res: '',
        success: false,
        formatId: AuthMsg.resetPwdResError,
      };
    }
  }
  return ret;
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  checkForAuthStatus,
};
