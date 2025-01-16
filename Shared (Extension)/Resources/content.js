browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
});


document.addEventListener("DOMContentLoaded", () => {
    console.log('running ataraxy 3333...')
    const targetId = "shorts-container"; // Replace with your actual ID
    const element = document.getElementById(targetId);
    
    if (element) {
        element.style.display = "none";
        console.log(`Element with ID '${targetId}' was hidden.`);
    } else {
        console.log(`Element with ID '${targetId}' not found.`);
    }
});

