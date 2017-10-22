var database = firebase.database().ref('/');

var lemail = document.getElementById('lemail');
var lpass = document.getElementById('lpass');
document.getElementById("stop").addEventListener("submit", submit)

function submit(event) {
    event.preventDefault()
        // alert()
    var user = {
        lemail: lemail.value,
        lpass: lpass.value
    }

    firebase.auth().signInWithEmailAndPassword(user.lemail, user.lpass)
        .then(function(success) {
            var a = success.uid;
            console.log(a)
            var b = success.username;
            console.log(b);
            database.child('users/' + success.uid).once('value', function(snapshot) {
                console.log(snapshot.val())
                localStorage.setItem('user', JSON.stringify(snapshot.val()))
                location = "duaapp.html";
            })
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
    // console.log(user);
    // console.log(firebase)

    var users = firebase.auth().currentUser;

    // if (users != null) {
    //     users.providerData.forEach(function(profile) {
    //         console.log("Sign-in provider: " + profile.providerId);
    //         console.log("  Provider-specific UID: " + profile.uid);
    //         console.log("  Name: " + profile.name);
    //         console.log("  Email: " + profile.email);
    //         // console.log("  Photo URL: " + profile.photoURL);
    //     });
    // }

    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;

    if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;

    }
    console.log(name);
    console.log(email);
}