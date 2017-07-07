import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyAr997s1HveZG0Cn1S7iloReCFkBOWnCxM",
  authDomain: "contact-app-35d40.firebaseapp.com",
  databaseURL: "https://contact-app-35d40.firebaseio.com",
  projectId: "contact-app-35d40",
  storageBucket: "contact-app-35d40.appspot.com",
};

firebase.initializeApp(config);

var database = firebase.database();

export var User = {};
export function auth () {
  return new Promise(function (resolve, reject) {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        User.user = result.user;
        resolve(User);
        setTimeout(function () {
          database.ref('contacts/' + User.user.uid)
          .once('value').then(function(contacts) {
            console.log(contacts.val());
          });
        }, 2000);
        database.ref('contacts/' + User.user.uid)
        .on('value', function(contacts) {
          console.log(contacts.val());
        });
      })
      .catch(function (e) {
        reject(e);
      });
  });
}
export default database;
