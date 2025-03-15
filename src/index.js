const URL = "https://openapi.programming-hero.com/api/levels/all";

// Fetch Levels & Display Buttons
async function fetchLevelLesson() {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log("Fetched Lessons Data:", data);

        if (data.status && Array.isArray(data.data)) {
            displayData(data.data);
        } else {
            displayData([]);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Display Level Buttons
function displayData(dataArray) {
    let displayDiv = document.getElementById("displayArea");
    displayDiv.innerHTML = "";

    // Show total levels count
    document.getElementById("totalData").textContent = `Total Levels: ${dataArray.length}`;

    dataArray.forEach((item) => {
        let button = document.createElement("button");
        button.textContent = `Level ${item.level_no}`;
        button.className = "bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full";
        button.addEventListener("click", () => fetchWordsByLevel(item.level_no));

        displayDiv.appendChild(button);
    });
}

// Fetch Words by Level ID
async function fetchWordsByLevel(levelId) {
    const wordsURL = `https://openapi.programming-hero.com/api/level/${levelId}`;

    try {
        const response = await fetch(wordsURL);
        const data = await response.json();
        console.log(`Fetched Words for Level ${levelId}:`, data);

        displayWords(data.status && Array.isArray(data.data) ? data.data : []);
    } catch (error) {
        console.error("Error fetching words:", error);
    }
}

// Display Words List with Effects
function displayWords(wordsArray) {
    const wordsDiv = document.getElementById("wordsArea");
    wordsDiv.innerHTML = wordsArray.length
        ? wordsArray.map(word => `
            <div class="p-5 rounded-xl shadow-lg bg-gradient-to-br from-gray-200 to-gray-50 border border-gray-300 backdrop-blur-xl text-center animate-fadeIn transform transition-all duration-300 hover:scale-105">
                <p class="font-extrabold text-blue-600 text-shadow text-lg">${word.word}</p>
                <p class="text-gray-700 font-medium">Meaning: ${word.meaning}</p>
                <p class="text-gray-500 italic text-sm">Pronunciation: ${word.pronunciation}</p>
                <button onclick="speak('${word.pronunciation}')" class="bg-blue-500 text-white px-3 py-1 rounded-md mt-2">🔊</button>
                <button onclick="fetchWordDetails('${word.id}')" class="bg-green-500 text-white px-3 py-1 rounded-md mt-2">📖</button>
            </div>
        `).join("")
        : "<p class='text-red-500 text-lg font-semibold text-center'>No words available for this level.</p>";
}

// Fetch Word Details
async function fetchWordDetails(wordId) {
    const wordURL = `https://openapi.programming-hero.com/api/word/${wordId}`;
    try {
        const response = await fetch(wordURL);
        const data = await response.json();
        if (data.status) {
            showModal(data.data);
        }
    } catch (error) {
        console.error("Error fetching word details:", error);
    }
}

// Show Modal with Word Details
function showModal(word) {
    const modal = document.getElementById("modal");
    modal.innerHTML = `
        <div class="modal-content p-5 bg-white rounded-lg shadow-lg relative">
            <button class="absolute top-2 right-2 text-xl" onclick="closeModal()">🗙</button>
            <h2 class="text-xl font-bold text-blue-600">${word.word}</h2>
            <p><strong>Sentence:</strong> ${word.sentence}</p>
            <p><strong>Parts of Speech:</strong> ${word.partsOfSpeech}</p>
            <p><strong>Pronunciation:</strong> ${word.pronunciation}</p>
            <p><strong>Level:</strong> ${word.level}</p>
            <p><strong>Synonyms:</strong> ${word.synonyms.join(", ")}</p>
            <p><strong>Points:</strong> ${word.points}</p>
        </div>
    `;
    modal.classList.remove("hidden");
}

// Close Modal
function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}

// Speak Pronunciation
function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-EN"; 
    speechSynthesis.speak(speech);
}

fetchLevelLesson();
