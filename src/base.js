function clearBoard(){
    // find all p, delete them
    // find all .items, delete them
    // find all .subheaders, delete them
    // find all .headers, delete them
    const paragraphs = document.querySelectorAll('p')
    paragraphs.forEach(paragraph=>{
        paragraph.remove();
        }
    )

    const items = document.querySelectorAll('.item')
    items.forEach(item=>{
        item.remove();
        }
    )

    const subheaders = document.querySelectorAll('.subheader')
    subheaders.forEach(subheader=>{
        subheader.remove();
        }
    )

    const headers = document.querySelectorAll('.header')
    headers.forEach(header=>{
        header.remove();
        }
    )

    console.log('board cleared');
};
export { clearBoard };

function createHeader(title){
    const content = document.getElementById('content');
    const headerDiv = document.createElement('div');
    headerDiv.className = 'header';
    headerDiv.textContent = title;
    content.appendChild(headerDiv);
};
export { createHeader };

function createSubHeader(title){
    const content = document.getElementById('content');
    const subheaderDiv = document.createElement('div');
    subheaderDiv.className = 'subheader';
    subheaderDiv.textContent = title;
    content.appendChild(subheaderDiv);
};
export { createSubHeader };

function createItem(title, paragraph){
    const content = document.getElementById('content');
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    itemDiv.textContent = title;
    content.appendChild(itemDiv);
    const paragraphText = document.createElement('p');
    paragraphText.textContent = paragraph;
    itemDiv.appendChild(paragraphText);
};
export { createItem };