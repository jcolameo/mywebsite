var greetings = [
    "IT-Student",
    "Hobby-Photographer",
    "Hobby-Videomaker",
    "Jeremy Colameo"
];

//To change the text after 2 seconds
setInterval(function () {
    var greeting_id = Math.floor(Math.random() * greetings.length);
    document.getElementById('textme').innerHTML = greetings[greeting_id];
}, 2000);

