const toogleList = document.querySelector('button#toggleList');
const listDiv = document.querySelector('.list');
const descriptionP = document.querySelector('p.description');
const descriptionInput = document.querySelector('input.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li');
const listUl = listDiv.querySelector('ul');
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

firstListItem.style.background = 'lightskyblue';
lastListItem.style.background = 'lightsteelblue';

// 在載入頁面時加入 up, down, remove 按鈕
function attachListItemButtons(li) {

    let ul = li.parentNode;
    let up = document.createElement('button');
    up.className = 'up';
    up.textContent = 'Up';
    li.appendChild(up);


    let down = document.createElement('button');
    down.className = 'down';
    down.textContent = 'Down';
    li.appendChild(down);

    let remove = document.createElement('button');
    remove.className = 'remove';
    remove.textContent = 'Remove';
    li.appendChild(remove);
}
for (let i = 0; i < lis.length; i++) {
    attachListItemButtons(lis[i]);
}

// 隱藏或顯示 list
toogleList.addEventListener('click', () => {
    if (listDiv.style.display != 'none') {
        listDiv.style.display = 'none';
        toogleList.textContent = 'Show list';
    }
    else {
        listDiv.style.display = 'block';
        toogleList.textContent = 'Hide list';
    }

});

// 在輸入框輸入值後，修改顯示字樣
descriptionButton.addEventListener('click', () => {
    if (descriptionInput.value != '') {
        descriptionP.textContent = descriptionInput.value + ' :';
        descriptionInput.value = "";
    }

});

// 在輸入框輸入值後，增加 list 物件
addItemButton.addEventListener('click', () => {
    let li = document.createElement('li');
    let ul = document.getElementsByTagName('ul')[0];
    if (addItemInput.value != '') {
        li.textContent = addItemInput.value;
        ul.appendChild(li);
        addItemInput.value = "";
    }
    attachListItemButtons(li);

});

// 刪除 list 物件
removeItemButton.addEventListener('click', () => {
    let li = document.querySelector('li:last-child');
    let ul = document.getElementsByTagName('ul')[0];
    ul.removeChild(li);
});

// 上移或下移 list 物件
listUl.addEventListener('click', (event) => {


    if (event.target.className == 'remove') {
        let li = event.target.parentNode;
        // let ul = li.parentNode;
        // ul.removeChild(li);
        listUl.removeChild(li);
    }
    if (event.target.className == 'up') {
        let li = event.target.parentNode;
        // unlike previousSibling, previousElementSibling always returns a DOM element
        let prevLi = li.previousElementSibling;
        let ul = li.parentNode;
        // listUl.insertBefore(li, prevLi);

        // insertedNode = parentNode.insertBefore(newNode, referenceNode);
        if (prevLi) ul.insertBefore(li, prevLi);
    }
    if (event.target.className == 'down') {
        let li = event.target.parentNode;
        let nextLi = li.nextElementSibling;
        let ul = li.parentNode;
        if (nextLi) ul.insertBefore(nextLi, li);
    }
});


/* Add the mouseover and mouseout event to all list
// But this method using much browsers memory for all those individual listeners */
// 滑鼠移過去時，list 物件的字會變大寫，滑鼠離開則變小寫
// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener('mouseover', () => {
//         listItems[i].textContent = listItems[i].textContent.toUpperCase();
//     });
//     listItems[i].addEventListener('mouseout', () => {
//         listItems[i].textContent = listItems[i].textContent.toLowerCase();
//     });
// }


/* Using parent element to handle */
// Method 1
// listDiv.addEventListener('mouseover', (event) => {
//     if (event.target.tagName == 'LI') {
//         event.target.textContent = event.target.textContent.toUpperCase();

//     }
// });
// listDiv.addEventListener('mouseout', (event) => {
//     if (event.target.tagName == 'LI') {
//         event.target.textContent = event.target.textContent.toLowerCase();
//     }
// });

// Method 2

// listUl.addEventListener('mouseover', (event) => {
//     if (event.target.tagName == 'LI') {
//         event.target.textContent = event.target.textContent.toUpperCase();
//     }
//     console.log('over: ', event.target);
// });
// listUl.addEventListener('mouseout', (event) => {
//     if (event.target.tagName == 'LI') {
//         event.target.textContent = event.target.textContent.toLowerCase();
//     }
//     console.log('out: ', event.target);
// });

// When mouseover, remove the list item 
// let li = event.target;
// let ul = li.parentNode;
// ul.removeChild(li);



document.addEventListener('click', (event) => {
    console.log(event.target.tagName);

});
