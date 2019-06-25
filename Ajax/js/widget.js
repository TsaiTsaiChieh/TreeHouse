// employee
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        var employees = JSON.parse(xhr.responseText);
        var statusHTML = '<ul class="bulleted">';
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].inoffice === true) {
                statusHTML += '<li class="in">';
            } else {
                statusHTML += '<li class="out">';
            }
            statusHTML += employees[i].name;
            statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('employeeList').innerHTML = statusHTML;
    }
};
xhr.open('GET', '../data/employees.json');
xhr.send();

//room
var req = new XMLHttpRequest();
req.onreadystatechange = function () {
    if (req.readyState === 4) {
        var rooms = JSON.parse(req.responseText);
        var roomsHTML = '<ul class="rooms">';
        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i].available === true) {
                console.log('rooms[i].available');

                roomsHTML += '<li class="empty">';
            }
            else if (rooms[i].available === false) {
                console.log('rooms[i].available');
                roomsHTML += '<li class="full">';
            }
            roomsHTML += rooms[i].room;
            roomsHTML += '</li>';
        }
        roomsHTML += '</ul>';
        document.getElementById('roomList').innerHTML = roomsHTML;
    }

};
req.open('GET', '../data/rooms.json');
req.send();