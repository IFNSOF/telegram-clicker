let userId = null;
const tg = window.Telegram.WebApp;
tg.expand();  // Разворачиваем на весь экран

if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    userId = tg.initDataUnsafe.user.id;
}

const balanceElement = document.getElementById("balance");
const clickButton = document.getElementById("click-btn");

async function updateBalance() {
    const response = await fetch(`https://your-pythonanywhere-api.com/get_balance/${userId}`);
    const data = await response.json();
    balanceElement.innerText = data.balance;
}

clickButton.addEventListener("click", async () => {
    const response = await fetch(`https://your-pythonanywhere-api.com/click/${userId}`, { method: "POST" });
    const data = await response.json();
    balanceElement.innerText = data.balance;
});

updateBalance();
