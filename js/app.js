// Array of affirmations for different categories
const affirmations = {
    health: [
        "I am healthy, strong, and full of energy.",
        "Every day, I feel better and better.",
        "My body is a vessel of wellness."
    ],
    money: [
        "I am a magnet for abundance and prosperity.",
        "Money flows to me easily and effortlessly.",
        "I am worthy of financial success."
    ],
    love: [
        "I attract loving and positive people into my life.",
        "I am deserving of deep and fulfilling relationships.",
        "Love surrounds me and fills me with joy."
    ]
};

// Function to generate a random affirmation based on the selected category
function generateAffirmation(category) {
    if (!affirmations[category]) {
        // Handle error if the category is not found
        return "Sorry, something went wrong. Please try again later.";
    }

    const categoryAffirmations = affirmations[category];
    const randomIndex = Math.floor(Math.random() * categoryAffirmations.length);
    return categoryAffirmations[randomIndex];
}

// Event listeners for category buttons
document.getElementById("healthBtn").addEventListener("click", () => {
    displayAffirmation("health");
});

document.getElementById("moneyBtn").addEventListener("click", () => {
    displayAffirmation("money");
});

document.getElementById("loveBtn").addEventListener("click", () => {
    displayAffirmation("love");
});

// Function to display affirmation for the selected category
function displayAffirmation(category) {
    const affirmation = generateAffirmation(category);
    document.getElementById("affirmationText").innerText = affirmation;
}

// Event listener for the generate button (if you still want it to work in addition)
document.getElementById("generateBtn").addEventListener("click", () => {
    // Example: Random category, you can adjust this
    const categories = ["health", "money", "love"];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    displayAffirmation(randomCategory);
});
