const dateElement = document.querySelector("date");

//document.onload = _ => {
    console.log("Page loaded");

    setInterval(_ => {
        dateElement.textContent = new Date().toLocaleString();
    }, 1000);
//};
