var getPostData = document.getElementById('exa');
var getSenderName = document.getElementById('sendername');
var postDiv = document.getElementById('postDiv');
var getPostPara = document.getElementById('postPara');
var getNameHead = document.getElementById('nameHead');







var a = localStorage.getItem('user');
var b = JSON.parse(a);
console.log(b);
var ab = b.name;
console.log(ab)
document.getElementById('fname').innerHTML = b.name;
document.getElementById('lname').innerHTML = b.lname;
document.getElementById('email').innerHTML = b.email;
document.getElementById('age').innerHTML = b.age;
document.getElementById('phone').innerHTML = b.number;
document.getElementById('gender').innerHTML = b.gender;
document.getElementById('username').innerHTML = b.name + " " + b.lname;

var database = firebase.database().ref('/');
var sname = document.getElementById("sname");
var post = document.getElementById("ppost");
var ab = document.getElementById("comment");
var pak = document.getElementById('pak');




function posts() {
    var post = {
        sname: sname.value,
        pos: ppost.value
    }
    if (ppost.value == '') {
        alert('Please Enter Something')
    } else {
        database.child('post').push(post)
        console.log(post);
    }

}

database.child('post').on("child_added", function(snapshot) {

    var posted = snapshot.val();

    var postDivv = document.createElement('div');
    postDivv.setAttribute('class', 'container p-3 text-dark bg-light mb-3 rounded card');
    postDivv.setAttribute('style', 'box-shadow: 0 0 10px 5px #E0E0E0');

    var userHead = document.createElement('h1');
    userHead.setAttribute('class', 'display-4 mb-3 text-dark card-title');
    userHead.setAttribute('style', 'font-size: 36px;');
    userHead.innerHTML = posted.name;
    postDivv.appendChild(userHead);

    var userPost = document.createElement('p');
    userPost.setAttribute('class', 'container p-3 bg-light text-dark rounded card-text');
    userPost.innerHTML = posted.post;
    postDivv.appendChild(userPost);

    var likeCommDiv = document.createElement('div');
    likeCommDiv.setAttribute('class', 'row');

    var commInput = document.createElement('input');
    commInput.setAttribute('type', 'text');
    commInput.setAttribute('placeholder', 'Write a comment');
    commInput.setAttribute('class', 'form-control col-8 ml-2');
    likeCommDiv.appendChild(commInput);


    var likeButt = document.createElement('button');
    likeButt.appendChild(document.createTextNode('Like'));
    likeButt.setAttribute('class', 'btn btn-outline-primary ml-2');
    likeCommDiv.appendChild(likeButt);


    var commButt = document.createElement('button');
    commButt.appendChild(document.createTextNode('Comment'));
    commButt.setAttribute('class', 'btn btn-outline-success ml-2');
    likeCommDiv.appendChild(commButt);

    postDivv.appendChild(likeCommDiv);

    // postDivv.setAttribute('class', 'rounded');
    postDiv.appendChild(postDivv);
    console.log(posted);




    getPostData.value = "";

})































// database.child('post').on("child_added", function(snapshot) {

//     var demo = snapshot.val();
//     console.log(demo.pos);
//     console.log(demo.sname);

//     // var r = localStorage.setItem('Post', JSON.stringify(snapshot.val()));

//     sname.value = "";
//     post.value = "";

//     var sn = document.getElementById('nam').innerHTML = b.name + " " + b.lname;
//     // var sna = document.getElementById('snam').innerHTML = b.name + " " + b.lname + " To  " + demo.sname;
//     var sna = document.getElementById('snam').innerHTML = "To  " + demo.sname;
//     var po = document.getElementById('po').innerHTML = demo.pos;
// })


// // var t = localStorage.getItem('Post');
// // var y = JSON.parse(t);
// // console.log(y);
// // var ty = y.sname;
// // console.log(ty);

// // var sn = document.getElementById('nam').innerHTML = b.name + " " + b.lname;
// // var sna = document.getElementById('snam').innerHTML = b.name + " " + b.lname + " To  " + y.sname;
// // var po = document.getElementById('po').innerHTML = y.pos;


// function commentss() {
//     var a = document.getElementById("comment").innerHTML = "<br><textarea class='container' id='comm' placeholder ='enter comment'>  </textarea> <button onclick='commm()' class='btn btn-success'>Comment</button> "
// }

// function commm() {
//     var co = document.getElementById('comm');

//     var coo = {
//         comm: comm.value
//     }
//     var lo = localStorage.setItem('comment', JSON.stringify(coo));

//     var ab = document.getElementById("comment");
//     ab.setAttribute('style', 'visibility:hidden');
//     show.setAttribute('style', 'visibility:visible');
//     var show = document.getElementById('show').innerHTML = "<b> <u>" + b.name + " " + b.lname + "</u> </b>" + log.comm;



// }

// var log = JSON.parse(localStorage.getItem('comment'));
// // console.log(log.comm);