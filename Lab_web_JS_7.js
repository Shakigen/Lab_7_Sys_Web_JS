function showList(list) {

    function arrToUl(root, arr) {
        let ul = document.createElement('ul');
        let li;

        root.appendChild(ul);

        arr.forEach(function(item) {
            if (Array.isArray(item)) {
                arrToUl(li, item);
                return;
            }

            li = document.createElement('li');
            li.appendChild(document.createTextNode(item));
            ul.appendChild(li);
        });
    }

    let div = document.getElementById('myList');

    arrToUl(div, list);

    let i = 10;
    let timerId = setInterval(function() {
        document.getElementById("timer").innerText = i;
        if (i === 0) {
        document.getElementById('myList').classList.add("none");
        document.getElementById('timer').classList.add("none");
        clearInterval(timerId);
        list = [];
        }

        i--;
    }, 1000);

}

showList(['hello', 'world', ["Shika","Shaki"], 'Kiev', 'Kharkiv', 'Odessa', 'Lviv']);
//works only for lists in array;
