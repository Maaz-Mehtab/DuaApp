var database = firebase.database().ref('/');
var input = document.getElementById('input')
var unOrderList = document.getElementById('unOrderList');
var nam=localStorage.getItem('user');

var a=localStorage.getItem('user');
var b=JSON.parse(a);
console.log(b);
var ab=b.name;
console.log(ab)
document.getElementById('name').innerHTML=ab;
// var color = ["list-group-item-info", "list-group-item-warning", "list-group-item-danger"];

function todo() {
    if (input.value.length === 0) {
        alert("Please Enter Todo Item");
        input.style.border = "2px solid red";
    } else {


        var todo = {
            item: input.value,
            todo: 'DONE'
        }
        database.child('todo').push(todo)
    }

}


database.child('todo').on("child_added", function(snapshot) {
    var demo = snapshot.val()
    demo.id = snapshot.key;



    //List Create
    var list = document.createElement('LI');
    var tagText = document.createTextNode(demo.item);
    var colors = ["#c3e6cb", "#9fcdff", "#fff3cd", "#fefefe", "#b9bbbe"];
    list.setAttribute("class", "list-group-item");
    list.setAttribute("id", demo.id);
    list.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    list.appendChild(tagText)

    //Edit Button Create
    var btn1 = document.createElement('button');
    var btn1text = document.createTextNode('Edit');
    btn1.appendChild(btn1text);
    btn1.setAttribute("class", 'btn btn-warning float-right rig')
        // Remove button Create
    var btn = document.createElement('button');
    var btntext = document.createTextNode('Remove');
    btn.setAttribute("class", 'btn btn-danger float-right');
    btn.appendChild(btntext);

    //remove function firebase
    btn.onclick = function() {
        remove(demo.id);
    }
    list.appendChild(btn1)
    list.appendChild(btn);
    unOrderList.appendChild(list)
    input.value = "";
})

//remove function Render
function remove(key) {
    database.child("todo/" + key).remove();
}
database.child("todo").on("child_removed", function(data) {
    var deleteLi = document.getElementById(data.key);
    deleteLi.remove();



})