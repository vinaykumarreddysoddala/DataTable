function createTable(tableEntries) {
    const tableBody = document.getElementById('table-data')
    renderedData = tableData.slice(startIndex, tableEntries);
    tableBody.innerHTML = ""
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
    let paginationData = document.getElementById('pagination-details');
    paginationData.innerHTML = ""
    paginationData.innerHTML = paginationData.innerHTML +
        `<button id="pagination-previous" ${pageNumber === 1 ? 'disabled' : ''} onclick="previousPage(event)"><i class="arrow left"></i></button>`
    const startDetails = pageNumber + 5 > tableData.length / entries ? (tableData.length / entries - 5) * entries : (pageNumber - 1) * entries;
    const pageDetails = pageNumber + 5 > tableData.length / entries ? (tableData.length / entries - 4) : pageNumber
    for (let i = startDetails, j = pageDetails, k = 0; k < 5 && i < tableData.length; i += entries, j++ , k++) {
        const page = `<button class="${j === pageNumber ? 'active' : ''}" onclick="changePage(event)">${j}</button>`;
        paginationData.innerHTML += page;
    }
    paginationData.innerHTML = paginationData.innerHTML +
        `<button id="pagination-next" ${pageNumber === tableData.length / entries ? 'disabled' : ''} onclick="nextPage(event)"><i class="arrow right"></i></button>`;
}