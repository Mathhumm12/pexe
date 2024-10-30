const questions = [
    {
        question: "O que define a Idade Média?",
        options: [
            "Um período histórico do século V ao século XV.",
            "A Revolução Industrial.",
            "O Renascimento.",
            "A era dos descobrimentos."
        ],
        answer: 0
    },
    {
        question: "Qual evento é considerado o marco inicial da Idade Média?",
        options: [
            "A descoberta da América.",
            "A construção da Grande Muralha da China.",
            "A queda do Império Romano do Ocidente.",
            "A Revolução Francesa."
        ],
        answer: 2
    },
    {
        question: "O que foi o feudalismo?",
        options: [
            "Uma escola de pensamento.",
            "Uma forma de governo.",
            "Um sistema social e econômico.",
            "Uma religião."
        ],
        answer: 2
    },
    {
        question: "Quem foi Carlos Magno?",
        options: [
            "Um famoso artista.",
            "Um filósofo grego.",
            "Rei dos Francos que unificou a Europa.",
            "Um imperador romano."
        ],
        answer: 2
    },
    {
        question: "O que eram as Cruzadas?",
        options: [
            "Viagens comerciais.",
            "Eventos culturais.",
            "Expedições militares para a Terra Santa.",
            "Descobrimentos de novas terras."
        ],
        answer: 2
    },
    {
        question: "Quem foi o responsável pela criação da Inquisição?",
        options: [
            "O Papa.",
            "Carlos Magno.",
            "O Imperador Romano.",
            "Os vikings."
        ],
        answer: 0
    },
    {
        question: "Qual era a principal religião da Idade Média?",
        options: [
            "O Judaísmo.",
            "O Cristianismo.",
            "O Islamismo.",
            "O Budismo."
        ],
        answer: 1
    },
    {
        question: "Qual dos seguintes castelos é famoso na Idade Média?",
        options: [
            "Castelo de Windsor.",
            "Castelo de Neuschwanstein.",
            "Castelo de Dracula.",
            "Castelo de Hogwarts."
        ],
        answer: 0
    },
    {
        question: "O que eram as guildas?",
        options: [
            "Organizações de comerciantes e artesãos.",
            "Reuniões de nobres.",
            "Escolas de filosofia.",
            "Exércitos medievais."
        ],
        answer: 0
    },
    {
        question: "O que era o suserano?",
        options: [
            "Um agricultor.",
            "Um nobre que protegia vassalos.",
            "Um tipo de mercador.",
            "Um cavaleiro."
        ],
        answer: 1
    },
    {
        question: "Qual foi a importância da Peste Negra?",
        options: [
            "Aumento populacional.",
            "Diminuição da população e mudanças sociais.",
            "Fim da Idade Média.",
            "Início das Cruzadas."
        ],
        answer: 1
    },
    {
        question: "Quem eram os monges?",
        options: [
            "Líderes militares.",
            "Pessoas que dedicavam suas vidas à religião.",
            "Artistas.",
            "Nobres."
        ],
        answer: 1
    },
    {
        question: "Qual foi uma das principais universidades da Idade Média?",
        options: [
            "Universidade de Oxford.",
            "Universidade de Harvard.",
            "Universidade de Yale.",
            "Universidade de Stanford."
        ],
        answer: 0
    },
    {
        question: "Qual foi um importante livro da Idade Média?",
        options: [
            "O Príncipe de Maquiavel.",
            "A Divina Comédia de Dante.",
            "Dom Quixote.",
            "Os Lusíadas."
        ],
        answer: 1
    },
    {
        question: "O que era a vassalagem?",
        options: [
            "Uma forma de governo.",
            "Um sistema de proteção entre senhores e vassalos.",
            "Uma religião.",
            "Uma prática comercial."
        ],
        answer: 1
    },
    {
        question: "Quem era João Sem Terra?",
        options: [
            "Um rei que assinou a Magna Carta.",
            "Um famoso artista.",
            "Um filósofo grego.",
            "Um líder militar."
        ],
        answer: 0
    },
    {
        question: "Qual foi a função das catedrais na Idade Média?",
        options: [
            "Escolas.",
            "Centros administrativos.",
            "Igrejas e centros de comunidade.",
            "Mercados."
        ],
        answer: 2
    },
    {
        question: "O que eram os trovadores?",
        options: [
            "Artistas que compunham músicas e poemas.",
            "Guerreiros.",
            "Cientistas.",
            "Monges."
        ],
        answer: 0
    },
    {
        question: "Qual a importância da Idade Média para a história?",
        options: [
            "Foi um período de estagnação.",
            "Foi crucial para a formação da Europa moderna.",
            "Não teve importância.",
            "Foi a época do Renascimento."
        ],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextButton = document.getElementById("next-button");
    const resultElement = document.getElementById("result");

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Embaralhar as opções
    const shuffledOptions = [...currentQuestion.options];
    shuffleArray(shuffledOptions);

    // Manter o índice da resposta correta
    const correctAnswerIndex = currentQuestion.options.indexOf(currentQuestion.options[currentQuestion.answer]);

    optionsElement.innerHTML = '';
    shuffledOptions.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => checkAnswer(option, currentQuestion, shuffledOptions, correctAnswerIndex);
        optionsElement.appendChild(button);
    });

    nextButton.classList.add("hidden");
    resultElement.textContent = '';
}

function checkAnswer(selectedOption, currentQuestion, shuffledOptions, correctAnswerIndex) {
    const resultElement = document.getElementById("result");
    const nextButton = document.getElementById("next-button");
    const options = document.querySelectorAll(".option");
    const scoreDisplay = document.getElementById("score");

    options.forEach((button, index) => {
        if (shuffledOptions[index] === currentQuestion.options[currentQuestion.answer]) {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
    });

    if (selectedOption === currentQuestion.options[currentQuestion.answer]) {
        resultElement.textContent = "Você acertou! 🍐";
        score++; // Incrementa a pontuação apenas se a resposta estiver correta
    } else {
        resultElement.textContent = "Você errou! 💩";
    }

    // Atualizar a pontuação exibida
    scoreDisplay.textContent = score;

    // Mostrar botão de próxima pergunta apenas se não for a última pergunta
    if (currentQuestionIndex < questions.length - 1) {
        nextButton.classList.remove("hidden");
    } else {
        nextButton.textContent = "Ver Resultados";
        nextButton.classList.remove("hidden");
    }
}

document.getElementById("next-button").onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showFinalResult();
    }
};

// Exibir o resultado final
function showFinalResult() {
    const finalScore = score; // Cada resposta correta vale 1 ponto
    document.getElementById("result").textContent = `Você terminou o jogo! Sua pontuação: ${finalScore}`;
}

// Carregar a primeira pergunta
loadQuestion();
