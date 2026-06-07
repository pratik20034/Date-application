const home = document.getElementById("home");
const letter = document.getElementById("letter");
const petals = document.getElementById("petals");
const treasure = document.getElementById("treasure");
const game = document.getElementById("game");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const letterNext = document.getElementById("letterNext");
const petalNext = document.getElementById("petalNext");

const music = document.getElementById("bgMusic");

const messages = [
    "One chance, just press YES 🥺❤️",
    "Pretty please? 🥹💕",
    "I promise I'll make you smile ❤️",
    "Come on, don't break my heart 😢💔",
    "Just imagine our cute dates together 🌹❤️",
    "You caught me, I really like you ❤️🥰"
];

let index = 0;

// RUNNING NO BUTTON
noBtn.addEventListener("mouseover", ()=>{

    let x = Math.random() * (window.innerWidth - 250);
    let y = Math.random() * (window.innerHeight - 100);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    noBtn.innerHTML = messages[index];

    index++;

    if(index >= messages.length){
        index = 0;
    }

});


// YES BUTTON
yesBtn.addEventListener("click", ()=>{

    music.play();

    home.classList.remove("active");
    letter.classList.add("active");

});


// LETTER PAGE
letterNext.addEventListener("click", ()=>{

    letter.classList.remove("active");
    petals.classList.add("active");

});


// PETALS PAGE
petalNext.addEventListener("click", ()=>{

    petals.classList.remove("active");
    treasure.classList.add("active");

});


// FALLING HEARTS BACKGROUND
for(let i = 0; i < 60; i++){

    let heart = document.createElement("div");

    heart.className = "petal";
    heart.innerHTML = "♥";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize =
        (Math.random()*20+15) + "px";

    heart.style.animationDuration =
        (Math.random()*5+4) + "s";

    heart.style.opacity = Math.random();

    document.body.appendChild(heart);

}



// =====================
// TREASURE HUNT
// =====================

const question =
    document.getElementById("question");

const answers =
    document.querySelectorAll(".answer");

let level = 1;

answers.forEach(button=>{

    button.addEventListener("click", ()=>{

        if(level === 1){

            question.innerHTML =
                "Ready for our first date? ❤️";

            answers[0].innerHTML =
                "YES ❤️";

            answers[1].innerHTML =
                "ABSOLUTELY ❤️";

            answers[2].innerHTML =
                "SUPER YES ❤️";

            level++;

        }

        else if(level === 2){

            question.innerHTML =
                "Who do I like the most? ❤️";

            answers[0].innerHTML =
                "You ❤️";

            answers[1].innerHTML =
                "You ❤️";

            answers[2].innerHTML =
                "You ❤️";

            level++;

        }

        else{

            question.innerHTML =
                "🎉 Treasure Unlocked 🎉<br><br>♥ You Found My Heart ♥";

            answers[0].style.display = "none";
            answers[1].style.display = "none";

            answers[2].innerHTML =
                "Continue ❤️";

            answers[2].onclick = ()=>{

                treasure.classList.remove("active");
                game.classList.add("active");

            };

        }

    });

});



// =====================
// HEART GAME
// =====================

const scoreText =
    document.getElementById("score");

const gameArea =
    document.getElementById("gameArea");

const gameNext =
    document.getElementById("gameNext");

let score = 0;


// CREATE FALLING HEARTS
setInterval(()=>{

    if(!game.classList.contains("active"))
        return;

    let heart =
        document.createElement("div");

    heart.className =
        "heartGame";

    heart.innerHTML =
        "❤️";

    heart.style.left =
        Math.random()*90 + "vw";

    gameArea.appendChild(heart);


    heart.addEventListener("click", ()=>{

        score++;

        scoreText.innerHTML =
            score;

        heart.remove();

        if(score >= 10){

            gameNext.style.display =
                "inline-block";

        }

    });


    setTimeout(()=>{

        heart.remove();

    },5000);

},700);

// =====================
// LOVE ROULETTE
// =====================

const roulette =
document.getElementById("roulette");

const spinBtn =
document.getElementById("spinBtn");

const rouletteTitle =
document.getElementById("rouletteTitle");

const rouletteResult =
document.getElementById("rouletteResult");

const rouletteNext =
document.getElementById("rouletteNext");


const dateType = [

"🍕 Pizza Date",

"🍦 Chats Date",

"🎥 Movie Date",

"☕ Coffee Date",


];

const dateTime = [

"🌅 Morning",

"☀️ Afternoon",

"🌆 Evening",

"🌙 Night"

];

const surprise = [

"🌹 Rose",

"🧸 Teddy Bear Hug",

"📸 Selfie Together",

"💌 Love Letter",

"🎁 Surprise Gift"

];

let stage = 1;

let result1 = "";
let result2 = "";
let result3 = "";



// HEART GAME → ROULETTE

gameNext.addEventListener("click", ()=>{

    game.classList.remove("active");

    roulette.classList.add("active");

});



spinBtn.addEventListener("click", ()=>{


    if(stage === 1){

        result1 =
        dateType[
            Math.floor(
                Math.random()*dateType.length
            )
        ];

        rouletteResult.innerHTML =
        result1;

        rouletteTitle.innerHTML =
        "Stage 2: When? ❤️";

        stage++;

    }


    else if(stage === 2){

        result2 =
        dateTime[
            Math.floor(
                Math.random()*dateTime.length
            )
        ];

        rouletteResult.innerHTML =
        result2;

        rouletteTitle.innerHTML =
        "Stage 3: Special Surprise ❤️";

        stage++;

    }


    else{

        result3 =
        surprise[
            Math.floor(
                Math.random()*surprise.length
            )
        ];

        rouletteTitle.innerHTML =
        "❤️ Our Perfect Date ❤️";

        rouletteResult.innerHTML =

        result1 +

        "<br><br>" +

        result2 +

        "<br><br>" +

        result3 +

        "<br><br>" +

        "✨ Fate has planned something beautiful for us ❤️";

        spinBtn.style.display =
        "none";

        rouletteNext.style.display =
        "inline-block";

    }

});


const nasa =
document.getElementById("nasa");

const finalPage =
document.getElementById("final");

const nasaNext =
document.getElementById("nasaNext");

const surpriseBtn =
document.getElementById("surpriseBtn");



rouletteNext.addEventListener("click", ()=>{

    roulette.classList.remove("active");

    nasa.classList.add("active");

});



nasaNext.addEventListener("click", ()=>{

    nasa.classList.remove("active");

    finalPage.classList.add("active");

});


surpriseBtn.addEventListener("click", ()=>{

    finalPage.innerHTML = `

    <div class="card">

        <h1>
            ❤️ Thank You ❤️
        </h1>

        <h2>
            You made this journey special.
        </h2>

        <h2>
            ✨ To many beautiful memories ahead ✨
        </h2>

        <h2>
            Forever Yours,
            <br><br>

            ETHAN ♥
        </h2>

    </div>

    `;


    for(let i=0;i<150;i++){

        let heart =
        document.createElement("div");

        heart.className =
        "celebrationHeart";

        heart.innerHTML =
        "❤️";

        heart.style.left =
        Math.random()*100 + "vw";

        heart.style.animationDuration =
        (Math.random()*4+3)+"s";

        document.body.appendChild(heart);

    }

});
