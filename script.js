const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    let cardText = document.getElementById('card-content');
    if(showingTerm) {
        cardText.innerText = flashcards[currentIndex].term;
    } else {
        cardText.innerHTML = flashcards[currentIndex].definition;
    }
    
    showingTerm = !showingTerm;

}

function addCard(term, definition) {
    flashcards.push({term,definition});
}

function tryIndexMinusOne() {
    if(currentIndex === 0) {
        currentIndex = flashcards.length-1;
    } else {
        currentIndex--;
    }

    showingTerm = true;
    displayCard();

}
function tryIndexPlusOne() {

    if(currentIndex === flashcards.length-1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    showingTerm = true;
    displayCard();

}

// The rest of the code you will write is apart of event listeners
document.getElementById('flashcard').addEventListener('click', displayCard)
document.getElementById('add-card-btn').addEventListener('click', ()=>addCard(document.getElementById('new-term').value, document.getElementById('new-definition').value))
document.getElementById("prev-btn").addEventListener('click', tryIndexMinusOne)
document.getElementById("next-btn").addEventListener('click', tryIndexPlusOne)

// This line will display the card when the page is refreshed
window.onload = displayCard;
