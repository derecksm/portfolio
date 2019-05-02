
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBDP_kASY_SZP4OV6xzTwqFCeXVvOMDCI4",
    authDomain: "derecks-portfolio.firebaseapp.com",
    databaseURL: "https://derecks-portfolio.firebaseio.com",
    projectId: "derecks-portfolio",
    storageBucket: "derecks-portfolio.appspot.com",
    messagingSenderId: "871542971538"
  }
  firebase.initializeApp(config)

  let db = firebase.firestore()

document.querySelector('#button').addEventListener('click', e => {
    e.preventDefault()
    let name = document.querySelector('#name').value 
    let email = document.querySelector('#email').value
    let subject = document.querySelector('#subject').value
    let id = db.collection('users').doc().id

    console.log(name)
    console.log(email)
    console.log(subject)

    db.collection('users').doc(id).set({
        name: name,
        email: email,
        subject: subject
    })

    document.querySelector('#name').value = '' 
    document.querySelector('#email').value = ''
    document.querySelector('#subject').value = ''

})