let URL = "https://openapi.programming-hero.com/api/levels/all";

async function fetchLevelLesson() {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.error(error);
        
    }
}