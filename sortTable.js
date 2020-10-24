function sortColumn(event, row) {
    const sortAttribute = event.target.getAttribute('data-sort');
    if (sortAttribute === 'asc' || sortAttribute === null) {
        sortByAscendingOrder(row);
        event.target.setAttribute('data-sort', 'desc')
    } else {
        sortByDescendingOrder(row);
        event.target.setAttribute('data-sort', 'asc')
    }
    const tableBody = document.getElementById('table-data');
    tableBody.innerHTML = "";
    renderedData.forEach((data) => {
        const tableRow = `<tr>
                <td>${data.name}</td>
                <td>${data.capital}</td>
                <td>${data.region}</td>
                <td>${data.subregion}</td>
                <td>${data.population}</td>
            </tr>`
        tableBody.innerHTML += tableRow;
    });
}

function sortByAscendingOrder(row) {
    renderedData.sort((a, b) => {
        let firstElmt = typeof (a[row]) === "string" ? a[row].toLowerCase() : a[row].toString().toLowerCase();
        let secondElmt = typeof (b[row]) === "string" ? b[row].toLowerCase() : b[row].toString().toLowerCase();
        if (firstElmt < secondElmt) {
            return -1;
        } else if (firstElmt > secondElmt) {
            return 1;
        } else {
            return 0;
        }
    });
}

function sortByDescendingOrder(row) {
    renderedData.sort((a, b) => {
        let firstElmt = typeof (a[row]) === "string" ? a[row].toLowerCase() : a[row].toString().toLowerCase();
        let secondElmt = typeof (b[row]) === "string" ? b[row].toLowerCase() : b[row].toString().toLowerCase();
        if (firstElmt > secondElmt) {
            return -1;
        } else if (firstElmt < secondElmt) {
            return 1;
        } else {
            return 0;
        }
    });
}