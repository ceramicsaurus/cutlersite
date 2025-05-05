const form = document.getElementById('dataForm');
const tableBody = document.querySelector('#dataTable tbody');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData,  // Let browser handle headers
        });

        if (response.ok) {
            const data = await response.json();
            addRowToTable(data);
        } else {
            alert('Error submitting data');
        }
    } catch (err) {
        console.error('Fetch error:', err);
        alert('Fetch failed');
    }
});

function addRowToTable(data) {
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = data.name;
    newRow.insertCell(1).textContent = data.description;
    newRow.insertCell(2).textContent = data.year;
}
