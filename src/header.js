

function loadUserData() {
    const savedUsername = localStorage.getItem("username");
    const savedImage = localStorage.getItem("profileImage");

    if (savedUsername) {
        document.getElementById("loginBtn").classList.add("hidden");
        document.getElementById("profileDropdown").classList.remove("hidden");
        document.getElementById("form").classList.add("hidden");
        document.getElementById("selectContent").classList.add("hidden");
        document.getElementById("welcome").classList.remove("hidden");
        document.getElementById("wordsArea").classList.remove("hidden");
        document.getElementById("welcomeUsername").textContent = savedUsername;
    }

    if (savedImage) {
        document.getElementById("navbarProfileImg").src = savedImage;
        document.getElementById("welcomeImg").src = savedImage;
    }
}




function handleSubmit() {
    const username = document.getElementById("username").value.trim();
    if (username === "") {
        alert("Please enter your name.");
        return;
    }
    localStorage.setItem("username", username);
    location.reload();
}


document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.removeItem("username");
    localStorage.removeItem("profileImage");
    location.reload();
});


document.getElementById("profileBtn").addEventListener("click", function () {
    document.getElementById("dropdownMenu").classList.toggle("hidden");
});

window.onload = loadUserData;

