function scrollToSection(sectionId) {
    // Oculta todas las secciones
    const sections = document.querySelectorAll('#Top-10, #All, #top-3, #table');
    sections.forEach(section => {
        section.classList.add('hidden'); // Oculta todas las secciones
        const images = section.querySelectorAll('img');
        images.forEach(img => img.classList.add('hidden')); // Oculta todas las imágenes
    });

    // Muestra solo la sección seleccionada
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.classList.remove('hidden');
        const imagesToShow = sectionToShow.querySelectorAll('img');
        imagesToShow.forEach(img => img.classList.remove('hidden')); // Muestra las imágenes de la sección
        sectionToShow.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Función para filtrar la tabla
function filterTable() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const table = document.getElementById('driversTable');
    const rows = table.getElementsByTagName('tr');
    let found = false;

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let rowContainsText = false;
        for (let j = 0; j < cells.length; j++) {
            if (cells[j].innerText.toLowerCase().includes(searchInput)) {
                rowContainsText = true;
            }
        }
        if (rowContainsText) {
            rows[i].classList.add('highlight');
            if (!found) {
                rows[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                found = true;
            }
        } else {
            rows[i].classList.remove('highlight');
        }
    }

    if (!found) {
        alert('No matches found!');
    }
}
// Mostrar/Ocultar el botón dependiendo del scroll
window.onscroll = function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

// Función para desplazar hasta la parte superior
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.getElementById('searchInput').addEventListener('input', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = searchInput.nextElementSibling;
    searchButton.disabled = searchInput.value.trim() === '';
});
function reloadPage() {
    location.reload(); // Recarga la página actual
}