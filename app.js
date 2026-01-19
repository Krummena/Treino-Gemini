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
                { name: 'Supino Máquina/Halteres', sets: '3', reps: '8–12', cue: 'Padrão.', alt: '' },
                { name: 'Puxada (Neutra/Pronada)', sets: '3', reps: '8–12', cue: 'Padrão.', alt: '' },
                { name: 'Stiff no Smith', sets: '2', reps: '8–12', cue: 'Padrão.', alt: '' },
                { name: 'Elevação Lateral', sets: '2', reps: '12–15', cue: 'Padrão.', alt: '' },
                { name: 'Tríceps Corda + Rosca Cabo', sets: '2', reps: '10–14', cue: 'Sequência sem descanso longo.', alt: '' }
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
                { name: 'Desenvolvimento Máquina', sets: '3', reps: '8–12', cue: 'Ou halteres.', alt: '' },
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
    
    // Configura Busca no Youtube (já que não temos arquivos de vídeo locais)
    const searchQuery = `${exercise.name} execução correta`;
    document.getElementById('youtube-link').href = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`;
    
    // Limpa imagem anterior (você pode adicionar URLs reais no objeto workoutData se quiser)
    document.getElementById('modal-gif').src = ""; 
    
    renderLogs();
    document.getElementById('exercise-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('exercise-modal').classList.add('hidden');
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

    // Filtra logs apenas desse exercício e desse usuário
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
    
    // Filtra logs do usuário atual
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
