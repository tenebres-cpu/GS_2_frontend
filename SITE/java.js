
document.getElementById('menuToggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('navLinks').classList.toggle('active');
});


document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menuToggle').classList.remove('active');
        document.getElementById('navLinks').classList.remove('active');
    });
});


let currentSlide = 0;
const slides = document.querySelectorAll('.slider-img');
const dotsContainer = document.querySelector('.slider-dots');


slides.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if(index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function goToSlide(n) {
    currentSlide = n;
    updateSlider();
}

document.querySelector('.slider-next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
});

document.querySelector('.slider-prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const alertButton = document.createElement('button');
alertButton.textContent = 'Simular Alerta de Enchente';
alertButton.classList.add('alert-button');
alertButton.addEventListener('click', showAlertDemo);
document.querySelector('.solution-section .container').appendChild(alertButton);

function showAlertDemo() {
    const alertBox = document.createElement('div');
    alertBox.classList.add('emergency-alert-box');
    alertBox.innerHTML = `
        <div class="emergency-alert-content">
            <i class="fas fa-exclamation-triangle"></i>
            <h3>ALERTA DE ENCHENTE!</h3>
            <p>Área de risco alto detectada em sua localização</p>
            <p><strong>Recomendação:</strong> Dirija-se imediatamente para área elevada</p>
            <button class="close-alert">Entendi</button>
        </div>
    `;
    
    document.body.appendChild(alertBox);
    

    console.log("ALERTA SONORO: BEEP BEEP BEEP");
    
    document.querySelector('.close-alert').addEventListener('click', () => {
        alertBox.remove();
    });
}


function loadRiskData() {

    const mockData = {
        riskLevels: [
            { location: "Centro", risk: "high" },
            { location: "Zona Norte", risk: "medium" },
            { location: "Zona Sul", risk: "low" }
        ]
    };
    
    console.log("Dados de risco carregados:", mockData);

}


document.addEventListener('DOMContentLoaded', () => {
    loadRiskData();
    updateSlider();
    

    if(slides.length > 0) {
        slides[0].classList.add('active');
    }
});