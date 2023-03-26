//localStorage.setItem("first","10");
//console.log(localStorage.getItem("first"));

(function run(){
    var i=0;
    for(var key in localStorage) {
    i+=1;
    if(localStorage.getItem(key)!=null && localStorage.length>=1){
    let a=localStorage.getItem(key);
    let newdiv=document.createElement('div');
    let img=document.createElement('img');
    img.src='trash.png';
    img.type=a;
    console.log(img.type);
    img.id="image1";
    newdiv.id="todo";
    if(i%2==0){
        newdiv.style.backgroundColor='black';
         newdiv.style.color='yellow';
     }
     else{
         newdiv.style.backgroundColor='white';
     }
    let textnode=document.createTextNode(a);
    newdiv.appendChild(textnode);
    console.log(newdiv);
    console.log(document.getElementsByClassName('container2'));
    var node=document.getElementsByClassName('container2');
    node[0].appendChild(newdiv);
    node[0].appendChild(img);
        }
      }
})();
function run2(){
    var i=0;
    for(var key in localStorage) {
    i+=1;
    if(localStorage.getItem(key)!=null && localStorage.length>=1){
    let a=localStorage.getItem(key);
    let newdiv=document.createElement('div');
    let img=document.createElement('img');
    img.src='trash.png';
    img.type=a;
    console.log(img.type);
    img.id="image1";
    newdiv.id="todo";
    if(i%2==0){
        newdiv.style.backgroundColor='black';
         newdiv.style.color='yellow';
     }
     else{
         newdiv.style.backgroundColor='white';
     }
    let textnode=document.createTextNode(a);
    newdiv.appendChild(textnode);
    console.log(newdiv);
    console.log(document.getElementsByClassName('container2'));
    var node=document.getElementsByClassName('container2');
    node[0].appendChild(newdiv);
    node[0].appendChild(img);
        }
      }
}
var view=document.getElementById('todo');
var button=document.getElementById('image');
button.addEventListener('click',(e)=>{
    let a=view.value;
    if(localStorage.getItem(a)!=null){view.value=""}
    else{
    localStorage.setItem(view.value,view.value);
    view.value="";
    let newdiv=document.createElement('div');
    newdiv.id="todo";
    let img=document.createElement('img');
    img.src='trash.png';
    img.type=a;
    img.id="image1";
    let getImage=document.querySelectorAll("#image1");
    if(getImage.length%2==1){
        newdiv.style.backgroundColor='black';
        newdiv.style.color='yellow';
    }
    else{
        newdiv.style.backgroundColor='white';
    }
    img.addEventListener('click',(e)=>{
        console.log(e.target.previousSibling.type);
        e.target.previousSibling.outerHTML="";
        e.target.outerHTML="";
        localStorage.removeItem(e.target.type);
        // run();
    })
    let textnode=document.createTextNode(a);
    newdiv.appendChild(textnode);
    console.log(newdiv);
    console.log(document.getElementsByClassName('container2'));
    var node=document.getElementsByClassName('container2');
    node[0].appendChild(newdiv);
    node[0].appendChild(img);
    console.log(img.type);
}})
    let getImage=document.querySelectorAll("#image1");
    console.log(getImage);
    console.log("Hello");
    getImage.forEach(i=>i.addEventListener('click',(e)=>{
        console.log(e.target.previousSibling.id);
        e.target.previousSibling.outerHTML="";
        e.target.outerHTML="";
        var node=document.getElementsByClassName('container2');
        localStorage.removeItem(e.target.type);
        // run();
    }))
    
    let trash=document.querySelectorAll(".todo");

   