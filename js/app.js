/* metodos para seleccionar elementos del DOM (Nodos del tipo 1)*/

/*var title = document.getElementById('title');
console.log(title);
console.log(title.firstChild);

var linkslist = document.getElementsByTagName('a');
console.log(linkslist);
console.log(linkslist[0]);
console.log(linkslist[0].firstChild);

var itemlist= document.getElementsByClassName('item');
console.log(itemlist);
console.log(itemlist[4]);
console.log(itemlist[4].firstElementChild);
console.log(itemlist[4].firstElementChild.firstChild);*/

var title = document.querySelector("#title");
console.log(title);
console.log(title.firstChild);

var navbar = document.querySelector("#navbar");
console.log(navbar);

var item = document.querySelector(".item");
console.log(item);

var listsitem = document.querySelectorAll(".item");
console.log(listsitem);
