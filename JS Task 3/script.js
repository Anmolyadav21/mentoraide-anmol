const names = ["Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya"];
    let count = 0;

    function showName() {
        document.getElementById("name").textContent = names[count];
    }

    function previousName() {
        count = (count - 1 + names.length) % names.length;
        showName();
    }

    function nextName() {
        count = (count + 1) % names.length;
        showName();
    }

    showName();