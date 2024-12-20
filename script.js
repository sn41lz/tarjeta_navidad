// script.js
const nieveContainer = document.querySelector('.nieve');

function crearCopoDeNieve() {
    const copo = document.createElement('div');
    copo.classList.add('copos');
    const tamaño = Math.random() * 10 + 5; // Tamaño aleatorio entre 5 y 15px
    copo.style.width = `${tamaño}px`;
    copo.style.height = `${tamaño}px`;
    copo.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
    copo.style.animationDuration = `${Math.random() * 3 + 2}s`; // Duración aleatoria entre 2 y 5s
    nieveContainer.appendChild(copo);

    // Eliminar el copo después de que haya caído
    copo.addEventListener('animationend', () => {
        copo.remove();
    });
}

// Crear copos de nieve cada 300ms
setInterval(crearCopoDeNieve, 300);

function calcularTiempoParaAnoNuevo() {
    const hoy = new Date();
    const anoNuevo = new Date(hoy.getFullYear() + 1, 0, 1); // 1 de enero del próximo año
    const diferencia = anoNuevo - hoy; // Diferencia en milisegundos

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    return { dias, horas, minutos, segundos };
}

function actualizarContador() {
    const tiempo = calcularTiempoParaAnoNuevo();
    document.getElementById('tiempo').textContent = 
        `${tiempo.dias} días, ${tiempo.horas} horas, ${tiempo.minutos} minutos, ${tiempo.segundos} segundos`;
}

// Actualizar el contador cada segundo
setInterval(actualizarContador, 1000);
actualizarContador(); // Llamar una vez al cargar la página