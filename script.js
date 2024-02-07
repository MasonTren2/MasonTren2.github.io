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
    if (feedbackInput.trim() !== '') {
        alert(`Feedback submitted: ${feedbackInput}`);
    } else {
        alert('Please provide feedback before submitting.');
    }
}

function cancelFeedback() {
    document.getElementById('feedbackInput').value = '';
    alert('Feedback submission canceled.');
}

function shareOnSocialMedia() {
    alert('Shared on Social Media!');
}

function subscribe() {
    const emailInput = document.getElementById('emailInput').value;
    const errorText = document.getElementById('errorText');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput)) {
        alert(`Subscribed with email: ${emailInput}`);
        errorText.innerText = '';
    } else {
        errorText.innerText = 'Invalid email format';
    }
}

function playVideo() {
    const video = document.querySelector('video');
    video.play();
}

function pauseVideo() {
    const video = document.querySelector('video');
    video.pause();
}

function stopVideo() {
    const video = document.querySelector('video');
    video.currentTime = 0;
    video.pause();
}

