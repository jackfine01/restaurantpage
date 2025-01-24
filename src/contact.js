import { clearBoard, createHeader, createSubHeader, createItem } from "./base.js";

function createContactPage(){
    clearBoard();

    createHeader('Contact')
    createSubHeader('Contact Information')

    createItem('Jefe Maximo', 'Phone: 111-222-333  Email: JefeMax@sample.com')
    createItem('General Contactman', 'Phone: 444-555-666  Email: gencon@sample.com')
    createItem('Sampler Supreme', 'Phone: 777-888-999  Email: samsupreme@sample.com')
};
export { createContactPage };