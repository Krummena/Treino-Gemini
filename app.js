// --- BIBLIOTECA DE GIFS (Links diretos) ---
// Se algum link parar de funcionar, você pode substituir pela URL de outro gif que encontrar.
const gifLibrary = {
    // PEITO
    "Supino Reto (Barra)": "https://media.giphy.com/media/l41Yh17HUb9mkYsBa/giphy.gif",
    "Supino Inclinado (Halteres)": "https://i.pinimg.com/originals/91/11/a6/9111a620242273d47d6e679237731248.gif",
    "Crucifixo no Cabo (Baixo p/ Cima)": "https://thumbs.gfycat.com/AlarmingVeneratedFawn-max-1mb.gif", // Exemplo genérico ou usar Peck Deck
    "Supino Máquina": "https://media.giphy.com/media/WOT9VPBE42yO3c5m5Z/giphy.gif", // Convergente
    
    // OMBROS
    "Desenvolvimento (Máq/Halteres)": "https://media.giphy.com/media/3o751ZGnnh1aRKf34Q/giphy.gif",
    "Elevação Lateral": "https://media.giphy.com/media/3o751XbJ7q7Jq84Wqs/giphy.gif",
    "Face Pull": "https://post.healthline.com/wp-content/uploads/2020/06/400x400_Face_Pull.gif", 
    
    // TRÍCEPS
    "Tríceps Polia (Corda/Barra)": "https://media.giphy.com/media/3o752UZ7p8fS6776z6/giphy.gif",
    "Tríceps Acima da Cabeça (Corda)": "https://j.gifs.com/mnKnKp.gif",
    "Tríceps Corda": "https://media.giphy.com/media/3o752UZ7p8fS6776z6/giphy.gif",
    
    // COSTAS
    "Puxada Barra/Puxador": "https://media.giphy.com/media/xT9IgHg51i8PszpQnm/giphy.gif",
    "Puxada no Puxador": "https://media.giphy.com/media/xT9IgHg51i8PszpQnm/giphy.gif",
    "Remada Baixa (Cabo)": "https://media.giphy.com/media/G1rFEy3Yjh5q155z9H/giphy.gif",
    "Remada Baixa (Triângulo)": "https://media.giphy.com/media/G1rFEy3Yjh5q155z9H/giphy.gif",
    "Remada Unilateral Halter": "https://media.giphy.com/media/d2Z8k1b0iR1t0tEI/giphy.gif",
    
    // BÍCEPS
    "Rosca Inclinada (Halteres)": "https://media.giphy.com/media/3o752QP7tQ7g0c1SQU/giphy.gif",
    "Rosca Martelo": "https://media.giphy.com/media/3o752QYgL6g3Q7S66I/giphy.gif",
    
    // PERNAS & GLÚTEOS
    "Leg Press": "https://media.giphy.com/media/3o7527pa7qs9k3tg8U/giphy.gif",
    "Terra Romeno (Stiff)": "https://media.giphy.com/media/3o7523oEyU4y7tK8kE/giphy.gif",
    "Lev. Terra Romeno (Halter)": "https://media.giphy.com/media/3o7523oEyU4y7tK8kE/giphy.gif", // Reutilizando Stiff
    "Cadeira Extensora": "https://media.giphy.com/media/3o7524L1k8Qy64yQ7u/giphy.gif",
    "Cadeira Abdutora": "https://media.giphy.com/media/l41Yy4J96X8ehDRx6/giphy.gif",
    "Panturrilha em Pé": "https://media.giphy.com/media/3o752f9c5p8F8w6qgE/giphy.gif",
    "Agachamento (Smith/Hack)": "https://media.giphy.com/media/l41YmQj7k7z4y5h5u/giphy.gif",
    "Hip Thrust (Elev. Pélvica)": "https://media.giphy.com/media/3o7524L1k8Qy64yQ7u/giphy.gif", // (Ajustar se necessário, usando extensora como placeholder se não houver específico)
    "Stiff no Smith": "https://media.giphy.com/media/3o7523oEyU4y7tK8kE/giphy.gif",

    // CORE
    "Core: Prancha + Abdominal": "https://media.giphy.com/media/3o7527pa7qs9k3tg8U/giphy.gif", // Placeholder
    "Abdominal Crunch": "https://media.giphy.com/media/l41Yy4J96X8ehDRx6/giphy.gif" // Placeholder
};

// URL de imagem padrão caso não encontre o GIF (um ícone de halter)
const defaultImage = "https://img.icons8.com/ios-filled/300/cccccc/dumbbell.png";


// --- DADOS DOS TREINOS (VINÍCIUS E BÁRBARA) ---
const workoutData = {
    vinicius: [
        {
            id: 'vinicius_a',
            name: 'TREINO A (Peito + Ombros + Tríceps)',
            exercises: [
                { name: 'Supino Reto (Barra)', sets: '4', reps: '6–10', cue: 'Escápulas para trás, pés firmes. Punhos neutros.', alt: 'Supino Máquina / Halteres' },
                { name: 'Supino Inclinado (Halteres)', sets: '3', reps: '8–12', cue: 'Banco 30-45°. Ênfase peitoral superior.', alt: 'Máquina Inclinada' },
                { name: 'Crucifixo no Cabo (Baixo p/ Cima)', sets: '2-3', reps: '12–15', cue: 'Abraça e fecha mantendo tensão. Cotovelos semi-flexionados.', alt: 'Peck-deck' },
                { name: 'Desenvolvimento (Máq/Halteres)', sets: '3', reps: '8–12', cue: 'Não arquear lombar. Cotovelos levemente à frente.', alt: 'Smith' },
                { name: 'Elevação Lateral', sets: '3', reps: '12–15', cue: 'Sobe até linha do ombro, cotovelo puxa o movimento.', alt: 'Máquina Lateral' },
                { name: 'Tríceps Polia (Corda/Barra)', sets: '3', reps: '10–14', cue: 'Cotovelos colados, extensão completa.', alt: '' },
                { name: 'Tríceps Acima da Cabeça (Corda)', sets: '2', reps: '12–15', cue: 'Cotovelos para frente, alonga bem.', alt: 'Halter unilateral' }
            ]
        },
        {
            id: 'vinicius_b',
            name: 'TREINO B (Costas + Bíceps + Delt. Post)',
            exercises: [
                { name: 'Puxada Barra/Puxador', sets: '4', reps: '6–10', cue: 'Peito pro cabo, cotovelos no bolso.', alt: '' },
                { name: 'Remada Baixa (Cabo)', sets: '3', reps: '8–12', cue: 'Tronco firme, puxa com costas, não lombar.', alt: 'Remada Máquina' },
                { name: 'Remada Unilateral Halter', sets: '2-3', reps: '10–12', cue: 'Puxa cotovelo para o teto.', alt: 'Máquina Unilateral' },
                { name: 'Face Pull', sets: '3', reps: '12–15', cue: 'Puxa p/ testa, abre mãos no final.', alt: 'Crucifixo Inverso' },
                { name: 'Rosca Inclinada (Halteres)', sets: '3', reps: '8–12', cue: 'Ombros para trás, não balança.', alt: 'Cabo Barra Reta' },
                { name: 'Rosca Martelo', sets: '2', reps: '10–14', cue: 'Braquial. Alternativa: Corda na polia.', alt: '' }
            ]
        },
        {
            id: 'vinicius_c',
            name: 'TREINO C (Pernas + Core)',
            exercises: [
                { name: 'Leg Press', sets: '4', reps: '8–12', cue: 'Pés médios=quadríceps. Altos=glúteo. Não tirar quadril do banco.', alt: '' },
                { name: 'Terra Romeno (Stiff)', sets: '3', reps: '8–12', cue: 'Dobra quadril, coluna neutra, sente posterior.', alt: 'Mesa Flexora' },
                { name: 'Cadeira Extensora', sets: '2-3', reps: '12–15', cue: '1s de contração no topo.', alt: '' },
                { name: 'Cadeira Abdutora', sets: '4', reps: '12–20', cue: '1s pausa aberta, volta 2s controlada.', alt: '' },
                { name: 'Panturrilha em Pé', sets: '4', reps: '10–15', cue: '2s alongando + 1s contraindo.', alt: '' },
                { name: 'Core: Prancha + Abdominal', sets: '3', reps: 'Falha/20', cue: 'Lombar colada no chão no Crunch.', alt: '' }
            ]
        },
        {
            id: 'vinicius_fb',
            name: 'FULL BODY (Estímulo Geral)',
            exercises: [
                { name: 'Agachamento (Smith/Hack)', sets: '3', reps: '6–10', cue: 'Amplitude segura.', alt: 'Leg Press' },
                { name: 'Supino Máquina', sets: '3', reps: '8–12', cue: 'Padrão.', alt: '' }, // Ajustado nome p/ bater com gif
                { name: 'Puxada (Neutra/Pronada)', sets: '3', reps: '8–12', cue: 'Padrão.', alt: '' },
                { name: 'Stiff no Smith', sets: '2', reps: '8–12', cue: 'Padrão.', alt: '' },
                { name: 'Elevação Lateral', sets: '2', reps: '12–15', cue: 'Padrão.', alt: '' },
                { name: 'Tríceps Corda', sets: '2', reps: '10–14', cue: 'Sequência sem descanso longo.', alt: '' }
            ]
        }
    ],
    barbara: [
        {
            id: 'barbara_a',
            name: 'FULL BODY A (Força + Pump)',
            exercises: [
                { name: 'Leg Press', sets: '3', reps: '10–12', cue: 'Descanso 60-75s.', alt: '' },
                { name: 'Supino Máquina', sets: '3', reps: '8–12', cue: 'Ritmo: 2s descendo, 1s subindo.', alt: 'Halteres' },
                { name: 'Remada Baixa (Triângulo)', sets: '3', reps: '10–12', cue: 'Pegada neutra.', alt: '' },
                { name: 'Hip Thrust (Elev. Pélvica)', sets: '3', reps: '10–12', cue: 'Foco em Glúteos.', alt: '' },
                { name: 'Elevação Lateral', sets: '2', reps: '12–15', cue: 'Máquina ou Halteres.', alt: '' },
                { name: 'Abdominal Crunch', sets: '3', reps: '12–20', cue: 'Costelas em direção ao quadril.', alt: '' }
            ]
        },
        {
            id: 'barbara_b',
            name: 'FULL BODY B (Posterior + Condic.)',
            exercises: [
                { name: 'Lev. Terra Romeno (Halter)', sets: '3', reps: '10–12', cue: 'Descanso 75-90s.', alt: '' },
                { name: 'Puxada no Puxador', sets: '3', reps: '8–12', cue: 'Pegada neutra/triângulo.', alt: '' },
                { name: 'Desenvolvimento (Máq/Halteres)', sets: '3', reps: '8–12', cue: 'Ou halteres.', alt: '' },
                { name: 'Cadeira Abdutora', sets: '3', reps: '12–20', cue: 'Glúteo médio.', alt: '' },
                { name: 'Rosca Martelo', sets: '2', reps: '10–14', cue: 'Halter ou corda.', alt: '' },
                { name: 'Tríceps Corda', sets: '2', reps: '10–14', cue: 'Foco na extensão.', alt: '' }
            ]
        }
    ]
};

// --- VARIÁVEIS DE ESTADO ---
let currentUser = null;
let currentWorkout = null;
let currentExercise = null;

// --- NAVEGAÇÃO ---
function selectUser(user) {
    currentUser = user;
    document.getElementById('user-title').innerText = `Treinos de ${user === 'vinicius' ? 'Vinícius' : 'Bárbara'}`;
    renderWorkouts();
    changeScreen('workout-list');
}

function changeScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.remove('hidden');
    document.getElementById(screenId).classList.add('active');
}

function goBack(targetScreen) {
    changeScreen(targetScreen);
}

// --- RENDERIZAÇÃO ---
function renderWorkouts() {
    const container = document.getElementById('workouts-container');
    container.innerHTML = '';
    
    workoutData[currentUser].forEach(workout => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `<h3>${workout.name}</h3><p>${workout.exercises.length} Exercícios</p>`;
        div.onclick = () => openWorkout(workout);
        container.appendChild(div);
    });
}

function openWorkout(workout) {
    currentWorkout = workout;
    document.getElementById('workout-title').innerText = workout.name;
    const container = document.getElementById('exercises-container');
    container.innerHTML = '';

    workout.exercises.forEach(ex => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <h3>${ex.name}</h3>
            <p>${ex.sets} Séries | ${ex.reps} Reps</p>
            <small style="color:#888">${ex.cue}</small>
        `;
        div.onclick = () => openModal(ex);
        container.appendChild(div);
    });

    changeScreen('exercise-view');
}

// --- MODAL & LOG DE TREINO ---
function openModal(exercise) {
    currentExercise = exercise;
    document.getElementById('modal-title').innerText = exercise.name;
    document.getElementById('modal-sets').innerText = exercise.sets;
    document.getElementById('modal-reps').innerText = exercise.reps;
    document.getElementById('modal-cues').innerText = exercise.cue;
    
    // 1. Busca GIF na biblioteca
    // Tenta encontrar o nome exato OU verifica se alguma chave da biblioteca está contida no nome do exercício
    let gifUrl = gifLibrary[exercise.name] || defaultImage;
    
    // Fallback inteligente: se não achar pelo nome exato, tenta achar palavras chaves
    if (gifUrl === defaultImage) {
        for (const [key, url] of Object.entries(gifLibrary)) {
            if (exercise.name.includes(key)) {
                gifUrl = url;
                break;
            }
        }
    }

    const imgElement = document.getElementById('modal-gif');
    imgElement.src = gifUrl;
    
    // Botão Youtube continua lá como backup caso o gif não carregue ou seja insuficiente
    const searchQuery = `${exercise.name} execução correta`;
    document.getElementById('youtube-link').href = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`;
    
    renderLogs();
    document.getElementById('exercise-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('exercise-modal').classList.add('hidden');
    // Limpa o src para economizar dados e parar animação em background
    document.getElementById('modal-gif').src = "";
}

// --- LÓGICA DE SALVAMENTO (LOCALSTORAGE) ---
function saveLog() {
    const weight = document.getElementById('log-weight').value;
    const reps = document.getElementById('log-reps').value;

    if (!weight || !reps) return alert('Preencha carga e repetições!');

    const log = {
        date: new Date().toLocaleDateString(),
        user: currentUser,
        exercise: currentExercise.name,
        weight: weight,
        reps: reps
    };

    let history = JSON.parse(localStorage.getItem('gym_history')) || [];
    history.push(log);
    localStorage.setItem('gym_history', JSON.stringify(history));

    document.getElementById('log-weight').value = '';
    document.getElementById('log-reps').value = '';
    
    renderLogs();
}

function renderLogs() {
    const history = JSON.parse(localStorage.getItem('gym_history')) || [];
    const list = document.getElementById('log-list');
    list.innerHTML = '';

    const filtered = history.filter(h => h.user === currentUser && h.exercise === currentExercise.name).reverse().slice(0, 5);

    filtered.forEach(h => {
        const li = document.createElement('li');
        li.innerText = `${h.date}: ${h.weight}kg x ${h.reps} reps`;
        list.appendChild(li);
    });
}

function showHistory() {
    const history = JSON.parse(localStorage.getItem('gym_history')) || [];
    const list = document.getElementById('global-history-list');
    list.innerHTML = '';
    
    const userHistory = history.filter(h => h.user === currentUser).reverse();

    if(userHistory.length === 0) {
        list.innerHTML = '<li style="border:none; text-align:center;">Nenhum treino registrado ainda.</li>';
    } else {
        userHistory.forEach(h => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${h.exercise}</strong><br>${h.date} - ${h.weight}kg | ${h.reps} reps`;
            list.appendChild(li);
        });
    }
    
    changeScreen('history-view');
}
