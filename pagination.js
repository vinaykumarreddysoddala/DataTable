function nextPage() {
    startIndex = pageNumber * entries;
    pageNumber = pageNumber + 1;
    createTable(startIndex + entries);
}
function previousPage() {
    pageNumber = pageNumber - 1;
    startIndex = (pageNumber * entries) - entries;
    createTable(startIndex + entries);
}
function changePage(event){
    pageNumber = parseInt(event.target.innerHTML);
    startIndex = (pageNumber * entries) - entries;
    createTable(startIndex + entries);
}