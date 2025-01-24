import { clearBoard, createHeader, createSubHeader, createItem } from "./base.js";

function createMenuPage(){
    clearBoard();

    createHeader('Menu')
    createSubHeader('Beverages')

    createItem('Jeff\'s Maxim', 'A bold, invigorating blend of espresso, hazelnut, and a touch of caramel, topped with a velvety cream swirl.');
    createItem('The General','A commanding mix of spiced rum, fresh lime juice, and ginger beer, finished with a hint of bitters.');
    createItem('Supreme Dream', 'A luxurious fusion of vanilla vodka, white chocolate liqueur, and a splash of cream, topped with a dusting of cocoa.');

    createSubHeader('Sides')

    createItem('The Side Pizza', 'For when it is not your pizza, just your turn');
    createItem('Mashed Brotatoes','Creamy, buttery mashed potatoes with a hearty twist, blended with roasted garlic and topped with a sprinkle of chives.');
    createItem('A Spare of Gus', 'Crispy, golden potato wedges seasoned to perfection and served with a side of zesty dipping sauce.');

    createSubHeader('Mains')

    createItem('The Big Cheese', 'A towering, triple-stacked cheeseburger layered with sharp cheddar, smoked gouda, and creamy havarti, topped with caramelized onions and a tangy house sauce. Served with a side of crispy fries, this is a cheese lover\'s ultimate indulgence.');
    createItem('Captain’s Catch','A perfectly grilled salmon fillet brushed with a citrus-herb glaze, served over a bed of wild rice and seasonal vegetables. This dish is as fresh and vibrant as the ocean breeze.');
    createItem('Gus’s Grand Feast', 'Slow-roasted beef short ribs, braised to tender perfection in a rich red wine sauce, accompanied by garlic mashed potatoes and buttered green beans. A hearty and satisfying meal fit for a true gourmand.');
};
export { createMenuPage };