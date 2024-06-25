document.addEventListener('DOMContentLoaded', function() {
    const itemsPerPage = 10;
    const totalItems = 100; // Example total items
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let currentPage = 1;

    function displayContent(page) {
        var table = document.getElementById('table');
        table.innerHTML = ''; // Clear previous content

        // Example header row
        const headerRow = document.createElement('tr');
        const headerCell = document.createElement('th');
        headerCell.colSpan = 2;
        headerCell.innerText = `Content for Page ${page}`;
        headerRow.appendChild(headerCell);
        table.appendChild(headerRow);

        // Example content rows
        for (let i = 1; i <= itemsPerPage; i++) {
            const row = document.createElement('tr');
            const cell1 = document.createElement('td');
            cell1.innerText = `Item ${(page - 1) * itemsPerPage + i}`;
            const cell2 = document.createElement('td');
            cell2.innerText = `Description for item ${(page - 1) * itemsPerPage + i}`;
            row.appendChild(cell1);
            row.appendChild(cell2);
            table.appendChild(row);
        }
    }

    function createPagination(totalPages, currentPage) {
        const paginationContainer = document.getElementById('pagination');
        paginationContainer.innerHTML = ''; // Clear any existing pagination

        const ul = document.createElement('ul');
        ul.className = 'pagination';

        // First Button
        const firstLi = document.createElement('li');
        const firstLink = document.createElement('a');
        firstLink.href = '#';
        firstLink.innerText = 'First';
        if (currentPage === 1) {
            firstLink.classList.add('disabled');
        } else {
            firstLink.addEventListener('click', function() {
                createPagination(totalPages, 1);
                displayContent(1);
            });
        }
        firstLi.appendChild(firstLink);
        ul.appendChild(firstLi);

        // Previous Button
        const prevLi = document.createElement('li');
        const prevLink = document.createElement('a');
        prevLink.href = '#';
        prevLink.innerText = 'Previous';
        if (currentPage === 1) {
            prevLink.classList.add('disabled');
        } else {
            prevLink.addEventListener('click', function() {
                createPagination(totalPages, currentPage - 1);
                displayContent(currentPage - 1);
            });
        }
        prevLi.appendChild(prevLink);
        ul.appendChild(prevLi);

        // Page Numbers
        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.innerText = i;
            if (i === currentPage) {
                a.classList.add('active');
            } else {
                a.addEventListener('click', function() {
                    createPagination(totalPages, i);
                    displayContent(i);
                });
            }
            li.appendChild(a);
            ul.appendChild(li);
        }

        // Next Button
        const nextLi = document.createElement('li');
        const nextLink = document.createElement('a');
        nextLink.href = '#';
        nextLink.innerText = 'Next';
        if (currentPage === totalPages) {
            nextLink.classList.add('disabled');
        } else {
            nextLink.addEventListener('click', function() {
                createPagination(totalPages, currentPage + 1);
                displayContent(currentPage + 1);
            });
        }
        nextLi.appendChild(nextLink);
        ul.appendChild(nextLi);

        // Last Button
        const lastLi = document.createElement('li');
        const lastLink = document.createElement('a');
        lastLink.href = '#';
        lastLink.innerText = 'Last';
        if (currentPage === totalPages) {
            lastLink.classList.add('disabled');
        } else {
            lastLink.addEventListener('click', function() {
                createPagination(totalPages, totalPages);
                displayContent(totalPages);
            });
        }
        lastLi.appendChild(lastLink);
        ul.appendChild(lastLi);

        paginationContainer.appendChild(ul);
    }

    // Initial load
    createPagination(totalPages, currentPage);
    displayContent(currentPage);
});
A