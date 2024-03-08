document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const tableBody = document.querySelector('#contactsTable tbody');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');

        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();

        if (name === '' || phone === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        addContact(name, phone);

        nameInput.value = '';
        phoneInput.value = '';
    });

    function addContact(name, phone) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${phone}</td>
        `;
        tableBody.appendChild(newRow);
    }
});
