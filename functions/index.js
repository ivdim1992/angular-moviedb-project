const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const toUpperCase = string => string.toUpperCase();

exports.addMessage = functions.https.onRequest((req, res) => {
  const text = req.query.text;
  const secretText = toUpperCase(text);

  admin
    .database()
    .ref('messages')
    .push({ text: secretText })
    .then(() => res.json({ message: 'added successfuly', text }))
    .catch(() => res.json({ message: 'error appeared' }));
});

// exports.addKey = functions.https.onRequest(async (req, res) => {
//   res.set('Access-Control-Allow-Origin', '*');
//   res.send('d6dcfd8148979550d8765390572dde53');
// });
// exports.addBaseURL = functions.https.onRequest(async (req, res) => {
//   res.set('Access-Control-Allow-Origin', '*');
//   res.send('https://api.themoviedb.org/3/movie/');
// });
