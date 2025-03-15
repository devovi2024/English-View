let URL = "https://openapi.programming-hero.com/api/levels/all";

async function fetchLevelLesson() {
    try {
        const response = await fetch(URL);
        const data = await response.json();

        console.log("Fetched Lessons Data:", data);
        if (data.status === true && Array.isArray(data.data)) {
            displayData(data.data);
        } else {
            displayData([]);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayData(dataArray) {
    let displayDiv = document.getElementById("displayArea");
    displayDiv.innerHTML = "";
    
    const totalData = dataArray.length;
    document.getElementById("totalData").textContent = totalData;

    dataArray.forEach((item) => {
        let button = document.createElement("button");
        button.textContent = `Level ${item.level_no}: ${item.lessonName}`;
        button.classList.add("bg-blue-500", "text-white", "p-2", "rounded", "m-2", "hover:bg-blue-700");

        button.onclick = () => wordWithLesson(item.id);
        displayDiv.appendChild(button);
    });
}


fetchLevelLesson();
