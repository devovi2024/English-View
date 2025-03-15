let URL = "https://openapi.programming-hero.com/api/levels/all";

async function fetchLevelLesson() {
    try {
        const response = await fetch(URL);
        const data = await response.json();

        if (data.status === true && Array.isArray(data.data)) {
            totalData(data.data.length); 
            displayData(data.data); 
        } else {
            totalData(0);
            displayData([]); 
        }

        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Function to update total count
function totalData(length) {
    document.getElementById("totalData").textContent = isNaN(length) ? 0 : length;
}

// Function to display lesson names as buttons
function displayData(dataArray) {
    let displayDiv = document.getElementById("displayArea");
    displayDiv.innerHTML = ""; 

    dataArray.forEach((item) => {
        let button = document.createElement("button");
        button.textContent = `Level ${item.level_no}: ${item.lessonName}`; 
        button.style.margin = "5px";
        button.style.padding = "10px";
        button.style.cursor = "pointer";
        button.onclick = () => alert(`You clicked: ${item.lessonName}`); 
        displayDiv.appendChild(button);
    });
}

fetchLevelLesson();