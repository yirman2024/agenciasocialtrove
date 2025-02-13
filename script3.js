document.addEventListener("DOMContentLoaded", function() {
    // Desplazamiento suave entre secciones
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Animaciones en botones y enlaces
    document.querySelectorAll('nav ul li a, .plan').forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'scale(1.05)';
            element.style.transition = 'transform 0.3s ease';
        });
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'scale(1)';
        });
    });

    // Efecto de aparición con fade-in
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Modal emergente para contacto
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div id="modal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Contacto</h2>
                <p>Correo: contacto@socialtrove.com</p>
                <p>WhatsApp: +[Tu número aquí]</p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    const modalElement = document.getElementById("modal");
    const closeModal = document.querySelector(".close");
    document.querySelector("#contacto h2").addEventListener("click", () => {
        modalElement.style.display = "block";
    });
    closeModal.addEventListener("click", () => {
        modalElement.style.display = "none";
    });
    window.addEventListener("click", (event) => {
        if (event.target === modalElement) {
            modalElement.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const servicios = document.querySelectorAll(".servicio");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        servicios.forEach(servicio => {
            const servicioTop = servicio.getBoundingClientRect().top;
            if (servicioTop < triggerBottom) {
                servicio.style.opacity = "1";
                servicio.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Ejecutar en carga inicial por si ya están visibles
});


// Efecto de aparición al hacer scroll
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        let section = document.getElementById("beneficios");
        if (!section) return; // Verifica que la sección existe
        
        let position = section.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;
        
        if (position < screenHeight * 0.75) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});



// Función para abrir el modal y guardar el plan elegido
function elegirPlan(plan) {
    document.getElementById("modal").style.display = "flex";

    // Cambiar el enlace de WhatsApp con el plan elegido
    let whatsappLink = `https://wa.me/573117947704?text=Hola,%20quiero%20contratar%20el%20plan%20${plan}%20de%20SocialTrove`;
    document.getElementById("confirmar").setAttribute("onclick", `window.location.href='${whatsappLink}'`);
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target === modal) {
        cerrarModal();
    }
}
