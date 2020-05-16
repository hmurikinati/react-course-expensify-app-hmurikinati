
import * as firebase from 'firebase';
import moment from 'moment';
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const database = firebase.database();
  export {firebase, googleAuthProvider, database as default};





















//   database.ref().set({
//       name : "Harish Murikinati",
//       age: 28,
//       isSingle : true,
//       location : {
//           city: "Warsaw",
//           country: "Poland"
//       }
//   }).then((response) => {
//     console.log('response 1: ', response)
//   }).catch((error) => {
//       console.log('Error 1: ', error)
//   })

//   database.ref('attributes').set({
//       height: 5.7,
//       weight: 70
//   }).then((response) => {
//     console.log('response 2: ', response)
//   }).catch((error) => {
//       console.log('Error 2: ', error)
//   })

// database.ref('age').remove()
// .then((response) => {
//     console.log('Successfully removed');
// }).catch((error) => {
//     console.log("Unable to remove error")
// })



// database.ref('age').update({age: 30})
// .then((response) => {
//     console.log('Successfully removed');
// }).catch((error) => {
//     console.log("Unable to remove error")
// })

// const getUserData = database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is ${data.age} years old`);
// })
// database.ref().update({
//     age: 40
// })

//database.ref().off('value', getUserData);

// const expenses = {
//     {
//     description: "Cofffe",
//     notes : "coffee is nice",
//     amount: "$3.58",
//     createdAt: moment().format('MMM DD, YYYY')
// },
// , {
//     description: "Cofffe",
//     notes : "coffee is nice",
//     amount: "$3.58",
//     createdAt: moment().format('MMM DD, YYYY')
// },
// {
//     description: "Cofffe",
//     notes : "coffee is nice",
//     amount: "$3.58",
//     createdAt: moment().format('MMM DD, YYYY')
// }
// }

// database.ref('expenses').push({
//     description: "Biscuit",
//     notes : "Biscuit is nice",
//     amount: "$87.58",
//     createdAt: moment().format('MMM DD, YYYY')
// })


// database.ref('expenses').once('value')
// .then((snapshot) => {
//     //console.log("snapshot  : ", snapshot.val());
//     const expenses = [];
//     snapshot.forEach((childSnapShot) => {
       
//         expenses.push({
//             id : childSnapShot.key,
//             ...childSnapShot.val()
//         })
//     })

//     console.log("snapshot  : ", expenses);
// })


// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapShot) => {
       
//         expenses.push({
//             id : childSnapShot.key,
//             ...childSnapShot.val()
//         })
//     })

//     console.log("snapshot  : ", expenses);
// })


// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
