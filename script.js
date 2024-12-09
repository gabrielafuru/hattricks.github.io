// Función para desplazarse a las secciones
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Función para filtrar la tabla
function filterTable() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const table = document.getElementById('driversTable');
    const rows = table.getElementsByTagName('tr');
    let found = false;

    // Restablecer resaltado
    for (let i = 1; i < rows.length; i++) {
        rows[i].classList.remove('highlight');
    }

    // Buscar y resaltar coincidencias
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        for (let j = 0; j < cells.length; j++) {
            if (cells[j].innerText.toLowerCase().includes(searchInput)) {
                rows[i].classList.add('highlight');
                rows[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                found = true;
                return;
            }
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
