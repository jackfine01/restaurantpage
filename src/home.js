import { clearBoard, createHeader, createSubHeader, createItem } from "./base.js";

function createHomePage(){
    clearBoard();

    createHeader('Home')
    createSubHeader('About')

    createItem('Hours', 'Monday-Sunday: 7am-9pm')
    createItem('About', 
        'Sample Resturaunt is the best resturaunt this side of the Lorem Ipsum!  Come visit us at 12345 Rd')
};
export { createHomePage };