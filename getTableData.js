let tableData = [];
let renderedData = [];
let filteredParams = { name: '', capital: '', region: '', subregion: '', population: '' };
let pageNumber = 1;
let entries = 10;
let startIndex = 0;
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.status === 200 && xhr.readyState === 4) {
        let response = JSON.parse(xhr.responseText);
        tableData = response
        createTable(10);
    }
};
xhr.open('GET', 'https://restcountries.eu/rest/v2/all');
xhr.send();
