function filterColumn(evt, row) {
    const value = typeof (evt.target.value) === 'string' ?
        evt.target.value.toLowerCase()
        :
        evt.target.value.toString().toLowerCase();
    filteredParams = { ...filteredParams, [row]: value };
    const tableBody = document.getElementById('table-data');
    tableBody.innerHTML = "";
    renderedData.forEach((data) => {
        if (Object.keys(filteredParams).every(key => {
            return typeof (data[key]) === 'string' ?
                data[key].toLowerCase().indexOf(filteredParams[key]) > -1
                :
                data[key].toString().toLowerCase().indexOf(filteredParams[key]) > -1;
        })
        ) {
            const tableRow = `<tr>
            <td>${data.name}</td>
            <td>${data.capital}</td>
            <td>${data.region}</td>
            <td>${data.subregion}</td>
            <td>${data.population}</td>
        </tr>`
            tableBody.innerHTML += tableRow;
        }
    });
}

function filterData(evt) {
    const value = typeof (evt.target.value) === 'string' ?
        evt.target.value.toLowerCase()
        :
        evt.target.value.toString().toLowerCase();
    const tableBody = document.getElementById('table-data');
    tableBody.innerHTML = "";
    renderedData.forEach((data) => {
        if (Object.keys(filteredParams).some(key => {
            return typeof (data[key]) === 'string' ?
                data[key].toLowerCase().indexOf(value) > -1
                :
                data[key].toString().toLowerCase().indexOf(value) > -1
        })
        ) {
            const tableRow = `<tr>
            <td>${data.name}</td>
            <td>${data.capital}</td>
            <td>${data.region}</td>
            <td>${data.subregion}</td>
            <td>${data.population}</td>
        </tr>`
            tableBody.innerHTML += tableRow;
        }
    });
}