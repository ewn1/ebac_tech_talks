AOS.init();

const dataDoEvento = new Date("Dec 12, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaTempo = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horasEmMs); // % é o resto da divisão, ou seja, o que sobra depois de tirar os dias completos
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs); // % é o resto da divisão, ou seja, o que sobra depois de tirar as horas completas
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000); // % é o resto da divisão, ou seja, o que sobra depois de tirar os minutos completos

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = "O evento já começou!";
    }
}, 1000);