
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".faq-toggle").forEach(button => {
        button.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            const answer = document.getElementById(`answer-${id}`);
            
            if (answer.classList.contains("hidden")) {
                answer.classList.remove("hidden");
                this.textContent = "−";
            } else {
                answer.classList.add("hidden");
                this.textContent = "+";
            }
        });
    });
});
