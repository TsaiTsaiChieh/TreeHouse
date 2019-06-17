const toogleList = document.querySelector('button#toggleList');
const listDiv = document.querySelector('.list');
const descriptionP = document.querySelector('p.description');
const descriptionInput = document.querySelector('input.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');

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

descriptionButton.addEventListener('click', () => {
    if (descriptionInput.value != '') {
        descriptionP.textContent = descriptionInput.value + ' :';
        descriptionInput.value = "";
    }

});


addItemButton.addEventListener('click', () => {
    let li = document.createElement('li');
    let ul = document.getElementsByTagName('ul')[0];
    if (addItemInput.value != '') {
        li.textContent = addItemInput.value;
        ul.appendChild(li);
        addItemInput.value = "";
    }

});

removeItemButton.addEventListener('click', () => {
    let li = document.querySelector('li:last-child');
    let ul = document.getElementsByTagName('ul')[0];
    ul.removeChild(li);
});
