// Sample character names
const characters = ['Diluc', 'Jean', 'Venti', 'Childe', 'Zhongli'];

function selectCharacter() {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const selectedCharacter = characters[randomIndex];
    document.getElementById('characterName').innerText = `Selected Character: ${selectedCharacter}`;
}

function loadEvents() {
    const events = ['Windborne Bard Event', 'Unreconciled Stars', 'Ganyu Banner'];
    const eventList = document.getElementById('eventList');

    // Clear existing event list
    eventList.innerHTML = '';

    // Populate event list
    events.forEach(event => {
        const li = document.createElement('li');
        li.innerText = event;
        eventList.appendChild(li);
    });
}

function submitFeedback() {
    const feedbackInput = document.getElementById('feedbackInput').value;
    alert(`Feedback submitted: ${feedbackInput}`);
}
