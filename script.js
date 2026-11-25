// CREATE FLOATING STARS

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 70; i++) {
    const star = document.createElement("div");

    star.classList.add("star");
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";

    starsContainer.appendChild(star);
}


// GET THE MAIN SCREEN

const welcomeScreen = document.getElementById("welcomeScreen");


// STAGE 1: OPEN THE GARDEN

const beginButton = document.getElementById("beginButton");

beginButton.addEventListener("click", function () {

    welcomeScreen.style.opacity = "0";
    welcomeScreen.style.transition = "opacity 1s ease";

    setTimeout(function () {

        welcomeScreen.innerHTML = `

            <div class="glow"></div>

            <div class="flower-bouquet">
                <div class="rose rose-one">🌻</div>
                <div class="rose rose-two">🌻</div>
                <div class="rose rose-three">🌻</div>
                <div class="rose rose-four">🌻</div>
                <div class="rose rose-five">🌻</div>
            </div>

            <p class="small-heading">
                A GARDEN MADE JUST FOR YOU
            </p>

            <h1>
                Stop and smell<br>
                <span>the sunflowers.</span>
            </h1>

            <p class="welcome-message">
                Just as flowers bloom in their own time,
                remember that you are growing beautifully
                in every season of your life.
            </p>

            <button id="openEnvelopeButton">
                There's Something For You ♡
            </button>

        `;

        welcomeScreen.style.opacity = "1";


        // STAGE 2: SHOW THE ENVELOPE

        document.getElementById("openEnvelopeButton")
            .addEventListener("click", showEnvelope);

    }, 1000);

});


// SHOW THE ENVELOPE

function showEnvelope() {

    welcomeScreen.style.opacity = "0";

    setTimeout(function () {

        welcomeScreen.innerHTML = `

            <div class="glow"></div>

            <div class="envelope-scene">

                <p class="small-heading">
                    A LITTLE SOMETHING FROM THE HEART
                </p>

                <h1>
                    A letter <span>for you.</span>
                </h1>

                <div class="envelope" id="envelope">

                    <div class="envelope-back"></div>

                    <div class="envelope-letter">
                        <p>
                            A reminder of how special
                            you truly are ♡
                        </p>
                    </div>

                    <div class="envelope-front"></div>

                    <div class="envelope-flap"></div>

                    <div class="wax-seal">♡</div>

                </div>

                <p class="envelope-hint" id="envelopeHint">
                    CLICK THE ENVELOPE TO OPEN
                </p>

                <div class="letter-reveal" id="letterReveal">

                    <h2>Dear Sis,</h2>

                    <p>
                        Before you read any further,
                        take a moment to remember that
                        your presence makes a difference.
                    </p>

                    <br>

                    <p>
                        God sees your efforts, your kindness
                        and the strength you carry.
                        Never underestimate the beauty
                        of the person you are becoming.
                    </p>

                    <br>

                    <p>
                        With love, always ♡
                        <button id="enterGardenButton">
                        Explore Your Garden 🌻
                        </button>
                    </p>

                </div>

            </div>

        `;

        welcomeScreen.style.opacity = "1";

        // ENVELOPE CLICK INTERACTION

        const envelope = document.getElementById("envelope");

        envelope.addEventListener("click", function () {

            envelope.classList.add("open");

            document.getElementById("envelopeHint")
                .textContent = "YOUR LETTER IS OPENING...";

            setTimeout(function () {
                
                //HIDE THE ENVELOPE AFTER OPENING

            envelope.style.display= "none";

                document.getElementById("letterReveal")
                    .classList.add("visible");
                document.getElementById("enterGardenButton")
                .addEventListener("click",showFlowerGarden);

                document.getElementById("envelopeHint")
                    .textContent = "A MESSAGE FROM THE HEART ♡";

            }, 1200);

        });

    }, 1000);
}
function showFlowerGarden() {

    const welcomeScreen = document.getElementById("welcomeScreen");

    // FADE OUT
    welcomeScreen.style.opacity = "0";

    setTimeout(function () {

        // CREATE THE FLOWER GARDEN

        welcomeScreen.innerHTML = `
            <div class="glow"></div>
        
            <p class="small-heading">A GARDEN OF ENCOURAGEMENT</p>

            <h1>Choose a <span>Sunflower.</span></h1>

            <p class="welcome-message">
                Every flower holds a little reminder
                for your heart. Choose one to discover yours.
            </p>

            <div class="garden-flowers">
                <button class="garden-flower" data-flower="strength"><span>🌻</span></button>
                <button class="garden-flower" data-flower="faith"><span>🌻</span></button>
                <button class="garden-flower" data-flower="kindness"><span>🌻</span></button>
                <button class="garden-flower" data-flower="purpose"><span>🌻</span></button>
                <button class="garden-flower" data-flower="joy"><span>🌻</span></button>
            </div>

            <div class="flower-message" id="flowerMessage">
                <h2 id="flowerTitle"></h2>
                <p id="flowerText"></p>
                <p id="flowerVerse"></p>
            </div>

            <p class="footer-message">
                Take your time. There is something special in every flower ♡
            </p>

            <button id="heartCheckButton">
                Let's Check In With Your Heart 💛
            </button>
        `;

        // FADE IN
        welcomeScreen.style.opacity = "1";

        // FLOWER MESSAGES

        const flowerMessages = {
            strength: {
                title: "The Sunflower of Strength 💪",
                text: "There is strength in the way you keep showing up, even when life is not easy. Remember that you do not have to carry everything alone. God is with you through every season.",
                verse: '"I can do all this through him who gives me strength."',
                reference: "Philippians 4:13 (NIV)"
            },

            faith: {
                title: "The Sunflower of Faith 🕊️",
                text: "Even when the path ahead is unclear, you can trust the One who sees the whole journey. Keep placing your confidence in God. He is faithful.",
                verse: '"For we live by faith, not by sight."',
                reference: "2 Corinthians 5:7 (NIV)"
            },

            kindness: {
                title: "The Sunflower of Kindness 💗",
                text: "Never underestimate the impact of your kindness. The care you show others matters, and the love you give can brighten someone's day in ways you may never know.",
                verse: '"Be kind and compassionate to one another."',
                reference: "Ephesians 4:32 (NIV)"
            },

            purpose: {
                title: "The Sunflower of Purpose ✨",
                text: "Your life has meaning, and your gifts have a place in this world. Do not rush your journey or compare your progress. God is still working in and through you.",
                verse: '"For we are God’s handiwork, created in Christ Jesus to do good works."',
                reference: "Ephesians 2:10 (NIV)"
            },

            joy: {
                title: "The Sunflower of Joy ☀️",
                text: "You deserve moments of rest, laughter and happiness too. May you always find reasons to celebrate the little blessings and remember that joy can be found in God's presence.",
                verse: '"The joy of the LORD is your strength."',
                reference: "Nehemiah 8:10 (NIV)"
            }
        };

        // CONNECT THE FLOWERS TO THEIR MESSAGES

        const gardenFlowers = document.querySelectorAll(".garden-flower");

        gardenFlowers.forEach(function (flower) {

            flower.addEventListener("click", function () {

                const flowerType = flower.dataset.flower;
                const message = flowerMessages[flowerType];

                document.getElementById("flowerTitle").textContent = message.title;
                document.getElementById("flowerText").textContent = message.text;

                document.getElementById("flowerVerse").textContent =
                    message.verse + " " + message.reference;

                document.getElementById("flowerMessage")
                    .classList.add("visible");

            });

        });

        // CONNECT HEART CHECK-IN BUTTON

        document.getElementById("heartCheckButton")
            .addEventListener("click", showHeartCheckIn);

    }, 600);
}

function showHeartCheckIn() {

    const welcomeScreen = document.getElementById("welcomeScreen");

    welcomeScreen.style.opacity = "0";

    setTimeout(function () {

        welcomeScreen.innerHTML = `
            <div class="glow"></div>

            <p class="small-heading">A MOMENT JUST FOR YOU</p>

            <h1>How is your <span>heart?</span></h1>

            <p class="welcome-message">
                Before moving forward, take a moment for yourself.
                Whatever you're feeling, there is room for it here.
            </p>

            <div class="mood-options">

                <button class="mood-button" data-mood="happy">
                    ☀️<br>Happy
                </button>

                <button class="mood-button" data-mood="tired">
                    🌧️<br>A little tired
                </button>

                <button class="mood-button" data-mood="overwhelmed">
                    🌊<br>Overwhelmed
                </button>

                <button class="mood-button" data-mood="uncertain">
                    🌱<br>Uncertain
                </button>

                <button class="mood-button" data-mood="hopeful">
                    🌻<br>Hopeful
                </button>

            </div>

            <div class="mood-message" id="moodMessage">
                <h2 id="moodTitle"></h2>
                <p id="moodText"></p>
                <p id="moodVerse"></p>
            </div>

            <p class="footer-message">
                You are loved in every season of life ♡
            </p>
          <button id="finalSurpriseButton">
            One Last Thing... 💌
          </button>  
        `;

        welcomeScreen.style.opacity = "1";

        const moodMessages = {

            happy: {
                title: "Keep That Joy Shining ☀️",
                text: "Celebrate the beautiful moments. You deserve to appreciate the blessings God places in your life. May your joy continue to overflow into the lives of others.",
                verse: "Psalm 118:24 (NIV): This is the day the LORD has made."
            },

            tired: {
                title: "It's Okay to Rest 🌧️",
                text: "You don't have to have everything figured out today. Give yourself permission to slow down. Rest is not a failure, and God remains faithful even in quiet seasons.",
                verse: "Matthew 11:28 (NIV): Come to me, all you who are weary and burdened."
            },

            overwhelmed: {
                title: "Take It One Step at a Time 🌊",
                text: "You don't need to solve everything at once. Take a breath, focus on what is in front of you, and remember that you can bring your worries to God.",
                verse: "1 Peter 5:7 (NIV): Cast all your anxiety on him because he cares for you."
            },

            uncertain: {
                title: "Trust the Journey 🌱",
                text: "Not knowing every answer doesn't mean you're lost. Some seasons require patience and faith. Keep walking forward, trusting that God is with you.",
                verse: "Proverbs 3:5 (NIV): Trust in the LORD with all your heart."
            },

            hopeful: {
                title: "Keep Looking Forward 🌻",
                text: "Hold on to that hope. There are still beautiful things ahead, new opportunities to grow and new reasons to be grateful. Keep trusting God's timing.",
                verse: "Jeremiah 29:11 (NIV): For I know the plans I have for you."
            }

        };

        const moodButtons = document.querySelectorAll(".mood-button");

        moodButtons.forEach(function (button) {

            button.addEventListener("click", function () {

                const selectedMood = button.dataset.mood;
                const message = moodMessages[selectedMood];

                document.getElementById("moodTitle").textContent = message.title;

                document.getElementById("moodText").textContent = message.text;

                document.getElementById("moodVerse").textContent = message.verse;

                document.getElementById("moodMessage")
                    .classList.add("visible");

            });
          
            document.getElementById("finalSurpriseButton")
          .addEventListener("click", showFinalSurprise);  

        });

    }, 1000);
}
function showFinalSurprise() {

    const welcomeScreen = document.getElementById("welcomeScreen");

    welcomeScreen.style.opacity = "0";

    setTimeout(function () {

        welcomeScreen.innerHTML = `

            <div class="glow"></div>

            <div class="final-sunflower">
                🌻
            </div>

            <p class="small-heading">
                A FINAL REMINDER
            </p>

            <h1>
                Never forget<br>
                <span>how special you are.</span>
            </h1>

            <div class="final-letter">

             <h2>Dear Mitchell, ♡</h2>
                <p>
                    I hope this little garden reminded you
                    of something important:
                    you are appreciated more than words can express.
                </p>

                <br>

                <p>
                    Your kindness, your encouragement,
                    your faith and the way you show up
                    for others do not go unnoticed.
                </p>

                <br>

                <p>
                    I pray that God continues to guide your steps,
                    strengthen your heart and remind you of
                    the beautiful purpose He has placed within you.
                </p>

                <br>

                <p>
                    Never feel that you have to be strong
                    every single day. Give yourself grace,
                    keep growing and remember that you are
                    deeply valued.
                </p>

                <br>

                <p>
                    Thank you for being so so encouraging.
                    The world needs more hearts like yours.
                </p>

                <br>

                <p>
                    With love and appreciation
                </p>
                
                <br>

                <p>
                    Kyle ♡
                </p>

            </div>

            <button id="revealLastMessageButton">
                A Little More Love ♡
            </button>

            <div class="last-message" id="lastMessage">
                <h2>Isaiah 40:31 🌻</h2>

                <p>
                    May you continue to find renewed strength
                    in the Lord, rise above life's challenges
                    and keep walking in the purpose He has
                    prepared for you.
                </p>

                <p>
                    Keep blooming. Your season is not over. ♡
                </p>
            </div>

        `;

        welcomeScreen.style.opacity = "1";

        document.getElementById("revealLastMessageButton")
            .addEventListener("click", function () {

                document.getElementById("lastMessage")
                    .classList.add("visible");

                this.style.display = "none";

            });

    }, 1000);
}