// Object with project video IDs
const projectVideos = {
    // Proyectos Universitarios
    'videojuego-pyqt5': 'PbvTVBqzxwM',
    'ecommerce-asistente': 'u6K3EpKrczY',

    // Proyectos de Pasantías
    'sistema-horarios': 'L9iwjkEU7Ig',

    // Proyectos Propios
    'fidelizacion-hotelera': '0u7GAMRCsEc',
    'asistente-turistico': 'S-fwYDYiVjA',
    'app-listas-compras': 'AyTw-qVZbPk',
    'sistema-web-compras': '-Q5VzyLhDqI'
};

// Funcionalidad para el modal de videos
const modal = document.getElementById('videoModal');
const videoFrame = document.getElementById('youtubeFrame');
const closeBtn = document.getElementsByClassName('close-modal')[0];
const viewButtons = document.querySelectorAll('.view-btn');

// Abrir modal al hacer clic en "Ver Proyecto"
viewButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const projectKey = this.getAttribute('data-project');
        const videoId = projectVideos[projectKey];

        if (videoId) {
            videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Evitar scroll
        }
    });
});

// Cerrar modal
closeBtn.addEventListener('click', function () {
    videoFrame.src = '';
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaurar scroll
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', function (event) {
    if (event.target == modal) {
        videoFrame.src = '';
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll
    }
});

// Funcionalidad para el modal de imágenes
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeImageBtn = document.getElementsByClassName('close-image-modal')[0];
const galleryImages = document.querySelectorAll('.gallery-image');

// Abrir modal al hacer clic en una imagen de la galería
galleryImages.forEach(image => {
    image.addEventListener('click', function () {
        modalImage.src = this.src;
        imageModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Evitar scroll
    });
});

// Cerrar modal de imágenes
closeImageBtn.addEventListener('click', function () {
    imageModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaurar scroll
});

// Cerrar modal de imágenes al hacer clic fuera del contenido
window.addEventListener('click', function (event) {
    if (event.target == imageModal) {
        imageModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll
    }
});

// Funcionalidad para el botón "Ver más" y modal de información
document.addEventListener('DOMContentLoaded', function () {
    const projectDescriptions = document.querySelectorAll('.project-info p');
    const infoModal = document.getElementById('infoModal');
    const modalTitle = document.querySelector('.info-modal-title');
    const modalDescription = document.querySelector('.info-modal-description');
    const modalTechStack = document.querySelector('.info-modal-tech-stack');
    const closeInfoBtn = document.querySelector('.close-info-modal');

    projectDescriptions.forEach(description => {
        const originalText = description.textContent;
        const parentCard = description.closest('.project-card');
        const projectTitle = parentCard.querySelector('h3').textContent;
        
        // Verificar si el texto es lo suficientemente largo para truncarlo
        if (description.scrollHeight > description.clientHeight || originalText.length > 150) {
            // Truncar el texto a aproximadamente 100 caracteres
            const truncatedText = originalText.substring(0, 100) + '...';
            description.textContent = truncatedText;
            
            // Crear botón "Ver más" y colocarlo justo después del texto truncado
            const readMoreBtn = document.createElement('span');
            readMoreBtn.className = 'read-more-btn';
            readMoreBtn.textContent = 'Ver más';
            description.after(readMoreBtn);

            // Evento para mostrar el modal con la información completa
            readMoreBtn.addEventListener('click', function () {
                modalTitle.textContent = projectTitle;
                modalDescription.textContent = originalText;
                // Ya no mostramos las tecnologías en el modal
                modalTechStack.innerHTML = '';
                infoModal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Evitar scroll
            });
        }
    });

    // Cerrar modal de información
    closeInfoBtn.addEventListener('click', function () {
        infoModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll
    });

    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener('click', function (event) {
        if (event.target == infoModal) {
            infoModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restaurar scroll
        }
    });
});