let timer;
let score = 0;
let errors = 0;
let gameInterval;
let gameActive = false;
let wordDisplay = document.getElementById('word-display');
let scoreDisplay = document.getElementById('score');
let errorsDisplay = document.getElementById("errors")
let timerDisplay = document.getElementById('timer');
let startButton = document.getElementById('startBtn');
let optionsContainer = document.getElementById('options');

let words = [
    "Amabilidad", "Bienaventuranza", "Compasión", "Inconmensurable", "Irreemplazable", "Extraordinario", "Inexplicable", "Responsabilidad", "Impresionante", "Maravillosamente", "Consideración", "Establecimiento", "Interminable", "Desinteresado", "Comunicativo", "Imprescindible", "Conmemorativo", "Agradecimiento", "Independencia", "Intercultural", "Irrepetible", "Comprensiblemente", "Determinación", "Humanitario", "Interdisciplinario", "Reconocimiento", "Fenomenología", "Colaboración", "Desarrollador", "Prolongadamente", "Inigualable", "Inimaginable", "Satisfactoriamente", "Impresionabilidad", "Preocupadamente", "Espectacularidad", "Efectivamente", "Reconstrucción", "Constitucional", "Inestabilidad", "Previsiblemente", "Revolucionario", "Desenfadadamente", "Intercontinental", "Desapaciblemente", "Reproductividad", "Inalterablemente", "Insuperablemente", "Excepcionalidad", "Perceptiblemente", "Admirablemente", "Administración", "Agradecidamente", "Anticonvulsivo", "Antropocentrismo", "Aprehensiblemente", "Armoniosamente", "Autosuficiencia", "Autotransporte", "Benefactoramente", "Beneficiosamente", "Biodegradabilidad", "Capacidad", "Caracterización", "Categorización", "Cibernéticamente", "Clasificación", "Comercialización", "Comunicacional", "Comunicativamente", "Comprometedor", "Comprensiblemente", "Computacional", "Condecoración", "Conectividad", "Configuración", "Conmemorativo", "Consideración", "Constitucional", "Contaminación", "Contemporáneamente", "Contradictoriamente", "Contraproducente", "Convencionalismo", "Convergencia", "Cooperativamente", "Cosmopolita", "Criptografía", "Criticablemente", "Cualificación", "Curiosidad", "Decepcionante", "Definitivamente", "Degradabilidad", "Deliberadamente", "Democratización", "Desagradablemente", "Desalentadoramente", "Desalentamiento", "Desarticulación", "Desarrolladamente", "Descentralización", "Descompensación", "Desconfiguración", "Desconsiderado", "Desconsoladamente", "Desconstrucción", "Descontentamente", "Descontroladamente", "Desgarradoramente", "Deshumanización", "Desinteresadamente", "Desorganización", "Desproporcional", "Desproporcionado", "Desventajosamente", "Desvinculación", "Desvirtuación", "Desorientación", "Desnaturalización", "Desvinculadamente", "Devolutivamente", "Desplazamiento", "Despreciablemente", "Desvanecimiento", "Desventajosamente", "Devolutivamente", "Dignificación", "Discontinuamente", "Disfuncionalidad", "Disociación", "Disponibilidad", "Distinguidamente", "Distribuiblemente", "Diversificación", "Documentadamente", "Domiciliariamente", "Dramáticamente", "Eclesiásticamente", "Efectividad", "Electroacústico", "Electrocardiograma", "Electrodoméstico", "Electromagnetismo", "Elucidativamente", "Embellecedoramente", "Emotividad", "Emprendimiento", "Enajenadamente", "Enfáticamente", "Engrandecimiento", "Ensambladoramente", "Entendimiento", "Equidistantemente", "Estadísticamente", "Estereotípicamente", "Estructuración", "Eventualmente", "Evidentemente", "Exasperantemente", "Excesivamente", "Exclusivamente", "Explicablemente", "Experimentalmente", "Extraordinariamente", "Falsificabilidad", "Filantropía", "Flexibilización", "Fraternalmente", "Funcionalidad", "Fundamentalismo", "Generalización", "Geopolíticamente", "Gradualmente", "Gravitacional", "Habitabilidad", "Habilitación", "Harmoniosamente", "Heterogeneidad", "Hidroeléctrico", "Hipótesis", "Hospitalariamente", "Identificación", "Ilustración", "Imaginativamente", "Impecabilidad", "Imperfectamente", "Implícitamente", "Impredictibilidad", "Improbabilidad", "Impunemente", "Inalcanzablemente", "Inalterabilidad", "Inalteradamente", "Inamoviblemente", "Inatacablemente", "Incalculabilidad", "Incapacidad", "Incognoscibilidad", "Incomunicadamente", "Incondicionalidad", "Indescriptiblemente", "Independientemente", "Indestructibilidad", "Indisociabilidad", "Indiscriminación", "Indisolublemente", "Ineficazmente", "Inequívocamente", "Inescrupulosamente", "Ineficazmente", "Inequívocamente", "Infinitamente", "Inmensurabilidad", "Inmutabilidad", "Innavegabilidad", "Inquebrantablemente", "Insuficiencia", "Insatisfacción", "Insospechadamente", "Interdisciplinariamente", "Intercontinentalmente", "Intermitentemente", "Internacionalidad", "Intrascendencia", "Introspectivamente", "Invalorablemente", "Investigación", "Irrefutablemente", "Irreflexivamente", "Irritabilidad", "Irreconciliablemente", "Irremplazablemente", "Irracionalidad", "Jerarquización", "Legitimación", "Liberalización", "Magnificencia", "Materialización", "Mecanización", "Mediocridad", "Minuciosamente", "Misericordiosamente", "Multiplicación", "Multiplicativamente", "Mutuamente", "Necesariamente", "Objetivamente", "Observacionalmente", "Obstaculización", "Obtenible", "Ocultación", "Ofensivamente", "Ordinariamente", "Organización", "Paralelamente", "Particularmente"
]; // Lista de palabras que se distorsionarán

let wordIndex = 0;
const gameTime = 180; // Duración del juego en segundos

// Iniciar el juego
startButton.addEventListener('click', startGame);

function startGame() {
    if (gameActive) return;  // Evita que inicie el juego si ya está activo
    gameActive = true;
    score = 0;
    errors = 0; // Reiniciar los errores al inicio del juego
    scoreDisplay.textContent = 'Puntos: 0';
    errorsDisplay.textContent = 'Errores: 0'; // Mostrar los errores iniciales
    wordIndex = 0;
    document.getElementById("timer").classList.remove("hidden");
    document.getElementById("score").classList.remove("hidden");
    document.getElementById("errors").classList.remove("hidden");
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("instructions").classList.add("hidden");


    startTimer();
    showNextWord();
}

// Temporizador
function startTimer() {
    let timeLeft = gameTime;
    timerDisplay.textContent = `Tiempo restante: ${formatTime(timeLeft)}`;

    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Tiempo restante: ${formatTime(timeLeft)}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            gameOver();
        }
    }, 1000);
}

// Formato de tiempo
function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// Mostrar la siguiente palabra
function showNextWord() {
    if (wordIndex >= words.length) {
        gameOver();
        return;
    }

    // Seleccionar una palabra aleatoria
    let randomWord = words[Math.floor(Math.random() * words.length)];

    // Distorsionar la palabra
    let distortedWord = distortWord(randomWord);
    wordDisplay.textContent = distortedWord;

    // Generar opciones
    generateOptions(randomWord);
}

// Función para distorsionar una palabra
function distortWord(word) {
    let wordArray = word.split('');
    for (let i = wordArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    return wordArray.join('');
}

// Generar opciones de respuesta
function generateOptions(correctWord) {
    // Crear 3 palabras incorrectas aleatorias
    let options = [correctWord];
    while (options.length < 4) {
        let randomWord = words[Math.floor(Math.random() * words.length)];
        if (!options.includes(randomWord)) {
            options.push(randomWord);
        }
    }

    // Barajar las opciones
    options = options.sort(() => Math.random() - 0.5);

    // Mostrar las opciones en la pantalla
    optionsContainer.innerHTML = '';
    options.forEach(option => {
        let optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.classList.add('option');
        optionButton.onclick = () => checkAnswer(option, correctWord);
        optionsContainer.appendChild(optionButton);
    });
}

// Verificar la respuesta
function checkAnswer(selectedWord, correctWord) {
    if (selectedWord === correctWord) {
        score++;
        scoreDisplay.textContent = 'Puntos: ' + score;
    } else {
        errors++; // Incrementar los errores si la respuesta es incorrecta
        errorsDisplay.textContent = 'Errores: ' + errors; // Actualizar la visualización de errores
    }

    // Mostrar la siguiente palabra
    showNextWord();
}

// Fin del juego
function gameOver() {
    gameActive = false;
    alert('¡Juego terminado! Puntos finales: ' + score);
    document.getElementById("word-display").classList.add("hidden");
    document.getElementById("options").classList.add("hidden");

}