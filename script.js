document.addEventListener('DOMContentLoaded', function() {
    const imageWrapper = document.querySelector('.image-wrapper');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.textContent = "Where my projects and skills come together to tell my story.\nClick on this to learn more!.";
    imageWrapper.appendChild(overlay);

    imageWrapper.addEventListener('mouseenter', function() {
        overlay.style.opacity = 1;
    });

    imageWrapper.addEventListener('mouseleave', function() {
        overlay.style.opacity = 0;
    });
});

function searchContainers() {
    const searchBar = document.getElementById('searchBar');
    const filter = searchBar.value.toLowerCase();
    const containers = document.querySelectorAll('.container');

    containers.forEach(container => {
        const name = container.getAttribute('data-name').toLowerCase();
        if (name.includes(filter)) {
            container.style.display = '';
        } else {
            container.style.display = 'none';
        }
    });
}

function openModal(projectName) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    modalTitle.textContent = `MY ${projectName.toUpperCase()}`;
    modalDescription.textContent = "This portfolio website is designed to showcase professional skills and projects in a clean, modern, and user-friendly format. It includes key sections such as About Me, Projects, Skills, Resume, and Contact Me, allowing visitors to easily navigate through the content and gain a comprehensive understanding of my expertise and background.";

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Function to stop event propagation
function stopPropagation(event) {
    event.stopPropagation();
}