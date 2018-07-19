
const config = {
    apiKey: "AIzaSyAGzoKSlBBKPjGtTFqzsqPn35zHjsQcOuY",
    authDomain: "mercador-dev.firebaseapp.com",
    databaseURL: "https://mercador-dev.firebaseio.com",
    projectId: "mercador-dev",
    storageBucket: "",
    messagingSenderId: "304584817796"
  }

  const Rebase = require('re-base')
  const firebase = require('firebase/app')
  require('firebase/database')

  const app =firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export default base