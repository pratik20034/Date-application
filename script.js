const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Initial position
noBtn.style.left = "60%";
noBtn.style.top = "55%";

const messages = [
"One chance, just press YES 🥺❤️",
"Are you really trying to say no? 😭",
"Pretty please? 🥹💕",
"I promise I'll make you smile ❤️",
"Come on, don't break my heart 😢💔",
"The YES button is feeling lonely 🥺",
"Just imagine our cute dates together 🌹❤️",
"I already know you'd look adorable beside me 😘",
"You caught me, I really like you ❤️🥰",
"Fine... I'll stop running if you press YES 😆💕"
];

let index = 0;

noBtn.addEventListener("mouseover", ()=>{

    let x = Math.random() * (window.innerWidth - 150);
    let y = Math.random() * (window.innerHeight - 100);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    noBtn.innerHTML = messages[index];

    index++;

    if(index >= messages.length){
        index = 0;
    }

});

// Yes button
yesBtn.addEventListener("click", ()=>{

    document.body.innerHTML = `
    <div style="
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100vh;
    background:linear-gradient(135deg,#ff758c,#ff7eb3);
    color:white;
    text-align:center">

    <h1>Thank You My Love ❤️🥰</h1>

    <h2>You just made me the happiest person alive 💕</h2>

    <h2>I can't wait for our date ❤️🌹</h2>

    </div>
    `;
});
