const pricingData = [
    {
        name: "Starter Plan",
        description: "Perfect for beginners stepping into the world of English.",
        price: "€5 / month",
        features: [
            "✅ Access to beginner lessons",
            "✅ Weekly practice exercises",
            "✅ Audio pronunciation guides"
        ],
        bgColor: "bg-[#5A3E1B]",
        borderColor: "border-yellow-500",
        buttonBg: "bg-yellow-500 hover:bg-yellow-600",
        buttonText: "Get Started"
    },
    {
        name: "Explorer Plan",
        description: "Advance your skills with interactive learning experiences.",
        price: "€10 / month",
        features: [
            "✅ Everything in Starter Plan",
            "✅ Interactive video lessons",
            "✅ Live Q&A sessions"
        ],
        bgColor: "bg-[#7C4A1A]",
        borderColor: "border-green-500",
        buttonBg: "bg-green-500 hover:bg-green-600",
        buttonText: "Upgrade Now"
    },
    {
        name: "Mastery Plan",
        description: "Achieve fluency with our expert coaching and personalized content.",
        price: "€20 / month",
        features: [
            "✅ Everything in Explorer Plan",
            "✅ 1-on-1 coaching sessions",
            "✅ Certification upon completion"
        ],
        bgColor: "bg-[#A66321]",
        borderColor: "border-red-500",
        buttonBg: "bg-red-500 hover:bg-red-600",
        buttonText: "Become a Pro"
    }
];

function renderPricing() {
    const container = document.getElementById("pricing-container");
    container.innerHTML = "";

    pricingData.forEach(plan => {
        const planElement = document.createElement("div");
        planElement.className = `${plan.bgColor} text-white p-8 rounded-xl shadow-lg border-2 ${plan.borderColor}`;
        
        planElement.innerHTML = `
            <h2 class="text-xl font-semibold">${plan.name}</h2>
            <p class="mt-2 text-gray-300">${plan.description}</p>
            <p class="mt-6 text-3xl font-bold">${plan.price}</p>
            <ul class="mt-4 space-y-3 text-sm">
                ${plan.features.map(feature => `<li class="flex items-center">${feature}</li>`).join("")}
            </ul>
            <a href="#" class="mt-6 block w-full ${plan.buttonBg} text-white py-3 rounded-md transition p-4 text-center">
                ${plan.buttonText}
            </a>
        `;

        container.appendChild(planElement);
    });
}


document.addEventListener("DOMContentLoaded", renderPricing);
