var data=[
  {name:"Code with Harry",src:"https://www.vetbossel.in/wp-content/uploads/2022/12/code-with-harry-founder-haris-khan.jpg"},
  {name:"Apna College",src:"https://yt3.ggpht.com/QarpqRg-lKcH7b-fzOrwzN6S6zZbQEpDBFhEXpg1KtEiOkHVuRn4DFI2pXoLvc-284bcrzIBkw=s900-c-k-c0x00ffffff-no-rj"},
  {name:"Chai aur Code",src:"https://i.ytimg.com/vi/RDagRV7ueMI/maxresdefault.jpg"},
  {name:"ez Snippet",src:"https://tse2.mm.bing.net/th?id=OIP.kJxBYhkDMu_9X1CtbDfU6AAAAA&pid=Api&P=0&h=180"},
  {name:"Harkirat's Cohort",src:"https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/p4bOWmCbRRaNAyuO00UL"}
]
var pers=""
data.forEach(function(elem){
  pers+=`<div class="person">
          <div class="img">
            <img src="${elem.src}">
          </div>
          <h4>${elem.name}</h4>
        </div>`
})
document.querySelector(".people").innerHTML=pers;


var input=document.querySelector("input");
input.addEventListener("input",function(){
  var matching=data.filter(function(e){
    return e.name.startsWith(input.value);
  })

var newusers="";
matching.forEach(function(elem){
  newusers+=`<div class="person">
          <div class="img">
            <img src="${elem.src}">
          </div>
          <h4>${elem.name}</h4>
        </div>`
})
document.querySelector(".people").innerHTML=newusers;
})
