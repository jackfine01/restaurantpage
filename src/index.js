console.log("I am live")
import "./styles.css";
// import { clearBoard, createHeader, createSubHeader, createItem } from "./base.js";
import { createHomePage } from "./home.js";
import { createContactPage } from "./contact.js";
// createHeader('SampleTitle');
// createSubHeader('SubSampleTitle')
// createItem('Item', 'She lorem till I ipsum')
createContactPage();
createHomePage();