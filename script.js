const flashcard = document.getElementById('flashcard');
const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const wordButton = document.getElementById('wordButton');
const sentenceButton = document.getElementById('sentenceButton');
const front = document.getElementById('front');
const back = document.getElementById('back');

const words = [
    { german: 'Hallo', english: 'Hello' },
    { german: 'Tschüss', english: 'Goodbye' },
    { german: 'Bitte', english: 'Please' },
    { german: 'Danke', english: 'Thank you' },
    { german: 'Ja', english: 'Yes' },
    { german: 'Nein', english: 'No' },
    { german: 'Wie geht\'s?', english: 'How are you?' },
    { german: 'Gut', english: 'Good' },
    { german: 'Schlecht', english: 'Bad' },
    { german: 'Entschuldigung', english: 'Excuse me' },
    { german: 'Wo?', english: 'Where?' },
    { german: 'Warum?', english: 'Why?' },
    { german: 'Wann?', english: 'When?' },
    { german: 'Was?', english: 'What?' },
    { german: 'Wer?', english: 'Who?' },
    { german: 'Wie?', english: 'How?' },
    { german: 'Kalt', english: 'Cold' },
    { german: 'Heiß', english: 'Hot' },
    { german: 'Langsam', english: 'Slow' },
    { german: 'Schnell', english: 'Fast' }
];

const sentences = [
    { german: 'Wie spät ist es?', english: 'What time is it?' },
    { german: 'Ich liebe dich', english: 'I love you' },
    { german: 'Es tut mir leid', english: 'I\'m sorry' },
    { german: 'Ich verstehe nicht', english: 'I don\'t understand' },
    { german: 'Können Sie das bitte wiederholen?', english: 'Can you repeat that, please?' },
    { german: 'Was machst du gerne in deiner Freizeit?', english: 'What do you like to do in your free time?' },
    { german: 'Ich habe Hunger', english: 'I\'m hungry' },
    { german: 'Wie lange dauert es?', english: 'How long will it take?' },
    { german: 'Kannst du mir helfen?', english: 'Can you help me?' },
    { german: 'Ich bin müde', english: 'I\'m tired' },
    { german: 'Wie ist das Wetter heute?', english: 'What\'s the weather like today?' },
    { german: 'Ich bin ein Student', english: 'I am a student' },
    { german: 'Wie viel kostet das?', english: 'How much does it cost?' },
    { german: 'Ich mag Musik', english: 'I like music' },
    { german: 'Wo wohnst du?', english: 'Where do you live?' },
    { german: 'Wann kommst du an?', english: 'When will you arrive?' },
    { german: 'Was ist dein Lieblingsessen?', english: 'What\'s your favorite food?' },
    { german: 'Wie lange lernst du schon Deutsch?', english: 'How long have you been learning German?' },
    { german: 'Kannst du mir das zeigen?', english: 'Can you show me that?' },
    { german: 'Ich bin glücklich', english: 'I am happy' }
];

let currentDeck = words; // Start with words deck
let currentCardIndex = 0;

function updateCard() {
    front.textContent = currentDeck[currentCardIndex].german;
    back.textContent = currentDeck[currentCardIndex].english;
    flashcard.classList.remove('flip');
}

flipButton.addEventListener('click', () => {
    flashcard.classList.toggle('flip');
});

nextButton.addEventListener('click', () => {
    currentCardIndex = (currentCardIndex + 1) % currentDeck.length;
    updateCard();
});

wordButton.addEventListener('click', () => {
    currentDeck = words;
    currentCardIndex = 0;
    updateCard();
});

sentenceButton.addEventListener('click', () => {
    currentDeck = sentences;
    currentCardIndex = 0;
    updateCard();
});

// Initialize the first card
updateCard();
