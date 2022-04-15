"use strict";
$(document).ready(function () {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            for (let property of json) {
             $('#users').append(`
                      <td id="userid">${property.userId}</td>`)
            }
            for (let property of json) {
                $('#userid').click(function(){

                    $('#title').append(`
                    <td>${property.title}</td>`)
                    $('#tbody').append(`
                    <td>${property.body}</td>`)
                })
            }
        })


        const createClickHandler = (row) => {
            return () => {
                const [cell] = row.getElementsByTagName("td");
                const id = cell.innerHTML;
                console.log(id);
            };
        };

    const table = document.querySelector("table");
    for (const currentRow of table.rows) {
        currentRow.onclick = createClickHandler(currentRow);
    }


})
