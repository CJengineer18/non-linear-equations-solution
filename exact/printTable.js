// Para pintar las tablas

let resultsContainer = [];
let results = [];
let container = '';

const initializeTable = (columns, containerId) => {
    container = containerId;
    resultsContainer = ['<table border="1">', '<thead>', '<tr>'];
    results = ['<tbody>'];

    columns = columns.map(item => {
        return `<th>${item}</th>`;
    });

    resultsContainer = resultsContainer
        .concat(columns)
        .concat('</tr>', '</thead>');
};

const closeResults = () => {
    results = results.concat('</tbody>');
    resultsContainer = resultsContainer.concat(results).concat('</table>');
    document.getElementById(container).innerHTML = resultsContainer.join('');
};

const addRow = row => {
    let htmlRow = ['<tr>'];

    row.forEach(item => {
        htmlRow = htmlRow.concat(`<td>${item}</td>`);
    });

    htmlRow = htmlRow.concat('</tr>');
    results = results.concat(htmlRow);
};
