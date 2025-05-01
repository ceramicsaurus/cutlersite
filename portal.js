function openModal() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('modal').style.display = 'block';
  }

  function closeModal() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
    document.getElementById('fileInput').value = '';
  }

  function submitForm() {
    const name = document.getElementById('name').value.trim();
    const description = document.getElementById('description').value.trim();
    const year = document.getElementById('year').value.trim();

    if (!year) {
      alert("Year is required.");
      return;
    }

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${name || '-'}</td>
      <td>${description || '-'}</td>
      <td>${year}</td>
    `;
    document.getElementById("tableBody").appendChild(row);
    closeModal();

    // Clear fields
    document.getElementById('name').value = '';
    document.getElementById('description').value = '';
    document.getElementById('year').value = '';
  }

  // Close modal if clicking outside
  document.getElementById('overlay').addEventListener('click', closeModal);
