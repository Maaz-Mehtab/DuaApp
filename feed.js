var database = firebase.database().ref('/');
var body = document.getElementById("body");

var nod = document.getElementById("nod");

database.child('post').on("child_added", function(snap) {
    var obj = snap.val();
    obj.key = snap.key;
    console.log(obj)


    var h4 = document.createElement('h4');
    h4.setAttribute('class', 'card-title')
    var p = document.createElement('p');
    p.setAttribute('class', 'card-text')
    var h4text = document.createTextNode(obj.sname);
    var ptext = document.createTextNode(obj.pos);
    var but = document.createElement('button')
    but.setAttribute('class', 'btn-success')
    var buttext = document.createTextNode("Comment")
    but.appendChild(buttext);
    h4.appendChild(h4text);
    p.appendChild(ptext);
    but.onclick = c;
    body.appendChild(h4)
    body.appendChild(p);
    body.appendChild(but)
    nod.appendChild(body)
    console.log(body);
})

function c() {
    var div = document.createElement("div");
    div.setAttribute('class', 'row')


    var inn = document.createElement("input");
    inn.setAttribute('id', 'comm');
    inn.setAttribute('placeholder', 'Enter comment');
    inn.setAttribute('class', 'form-control col-8 mt-2');
    var bttt = document.createElement('button');
    var bttex = document.createTextNode("submit");
    bttt.setAttribute('class', 'btn btn-outline-success mt-2')
    bttt.appendChild(bttex)
    div.appendChild(inn);
    div.appendChild(bttt);
    body.appendChild(div);
    nod.appendChild(body);

    // function commen() {
    //     var com = {
    //         comment: comm.value

    //     }
    //     comm.value = "";
    //     database.child('comment').push(com)
    //     console.log(com);

    // }


    bttt.onclick = sub;

    function sub() {
        var com = {
            comment: comm.value

        }
        comm.value = "";
        database.child('comment').push(com)
        console.log(com);

        var di = document.createElement("div");
        di.setAttribute('class', 'col-10 bg-off mt-3')
        var pa = document.createElement("p");



        database.child('comment').on("child_added", function(snap) {
            var objj = snap.val();
            objj.key = snap.key;
            // obj.key = snap.key();
            console.log(objj)

            var pte = document.createTextNode(objj.comment)
            pa.appendChild(pte);
            di.appendChild(pa)
            div.appendChild(di);
        });
    }
}