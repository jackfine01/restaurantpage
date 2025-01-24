console.log("I am live")
import "./styles.css";
// import { clearBoard, createHeader, createSubHeader, createItem } from "./base.js";
import { createHomePage } from "./home.js";
import { createContactPage } from "./contact.js";
import { createMenuPage } from "./menu.js";
// createHeader('SampleTitle');
// createSubHeader('SubSampleTitle')
// createItem('Item', 'She lorem till I ipsum')
// createContactPage();
createHomePage();
// createMenuPage();

let contact = document.getElementById('contact')
contact.addEventListener('click', function(){
    createContactPage();
    console.log('creating contact page');
}
);

let menu = document.getElementById('menu')
menu.addEventListener('click', function(){
    createMenuPage();
    console.log('creating menu page');
}
);

let home = document.getElementById('home')
home.addEventListener('click', function(){
    createHomePage();
    console.log('creating home page');
}
);

