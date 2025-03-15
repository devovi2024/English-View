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
            </div>
        `).join("")
        : "<p class='text-red-500 text-lg font-semibold text-center'>No words available for this level.</p>";
}

// Fetch lessons on page load
fetchLevelLesson();
