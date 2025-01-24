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

    const items = document.querySelectorAll('.food')
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
export {clearBoard}