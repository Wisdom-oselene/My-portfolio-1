/**
 * CORE LOGIC ENGINE: WISCODE PORTFOLIO
 * SYSTEM RUNTIME: VANILLA ES6 ARCHITECTURE
 */

document.addEventListener("DOMContentLoaded", () => {

    // --- 1. BOOT SEQUENCE & LOADING CONTROLLER ---
    const loader = document.getElementById("loader");
    const progressFill = document.querySelector(".pixel-progress-fill");
    let bootProgress = 0;

    const bootInterval = setInterval(() => {
        bootProgress += Math.floor(Math.random() * 15) + 5;
        if (bootProgress >= 100) {
            bootProgress = 100;
            clearInterval(bootInterval);
            setTimeout(() => {
                loader.classList.add("sys-loaded");
            }, 400);
        }
        progressFill.style.width = `${bootProgress}%`;
    }, 80);


    // --- 2. HARDWARE CUSTOM MOUSE TRACKING ENGINE ---
    // --- 2. HARDWARE CUSTOM MOUSE TRACKING ENGINE (MINECRAFT EDITION) ---
    const cursorCore = document.querySelector(".custom-cursor-core");
    const cursorTrail = document.querySelector(".custom-cursor-trail");
    let isMobileDevice = window.matchMedia("(max-width: 768px)").matches;

    if (!isMobileDevice) {
        // Inject an authentic 8-bit Minecraft Pixel Arrow directly into the core element
        cursorCore.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(-15deg);">
                <path d="M0 0V18H3V15H6V12H9V9H12V6H15V3H18V0H0Z" fill="black"/>
                <path d="M9 15V24H12V15H9Z" fill="black"/>
                <path d="M12 12V21H15V12H12Z" fill="black"/>
                <path d="M15 9V15H18V9H15Z" fill="black"/>
                <path d="M3 3V12H6V9H9V6H12V3H3Z" fill="white"/>
                <path d="M6 12H9V15H12V18H15V12H12V9H9V12H6Z" fill="white"/>
                <path d="M12 15V21H15V15H12Z" fill="white"/>
            </svg>
        `;

        document.addEventListener("mousemove", (e) => {
            // Centers the Minecraft arrow point directly onto the true cursor point coordinate
            cursorCore.style.left = `${e.clientX}px`;
            cursorCore.style.top = `${e.clientY}px`;

            cursorTrail.style.left = `${e.clientX}px`;
            cursorTrail.style.top = `${e.clientY}px`;
        });

        // Interactive Matrix Element Hovers
        const interactiveElements = document.querySelectorAll("a, button, .skill-node-card, .project-matrix-card");
        interactiveElements.forEach(elem => {
            elem.addEventListener("mouseenter", () => {
                cursorTrail.style.transform = "translate(-50%, -50%) scale(1.8)";
                cursorTrail.style.borderColor = "var(--neon-green)";
                // Changes inner SVG body color structure on link hover
                cursorCore.querySelectorAll("path[fill='white']").forEach(p => p.style.fill = "var(--neon-green)");
            });
            elem.addEventListener("mouseleave", () => {
                cursorTrail.style.transform = "translate(-50%, -50%) scale(1)";
                cursorTrail.style.borderColor = "var(--neon-blue)";
                cursorCore.querySelectorAll("path[fill='var(--neon-green)']").forEach(p => p.style.fill = "white");
            });
        });
    } else {
        cursorCore.style.display = "none";
        cursorTrail.style.display = "none";
    }


    // --- 3. CANVAS PIXEL RAIN FIELD GRAPHICS ENGINE ---
    const canvas = document.getElementById("pixel-rain");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const pixelSymbols = "01010101010101010101100101010010110101001010101001011010110101101011";
    const symbolArray = pixelSymbols.split("");
    const fontRenderSize = 14;
    let horizontalGridColumns = canvas.width / fontRenderSize;
    let verticalDropArray = [];

    function initializeDrops() {
        horizontalGridColumns = canvas.width / fontRenderSize;
        verticalDropArray = [];
        for (let x = 0; x < horizontalGridColumns; x++) {
            verticalDropArray[x] = 1;
        }
    }
    initializeDrops();
    window.addEventListener("resize", initializeDrops);

    function drawPixelRainMatrix() {
        ctx.fillStyle = "rgba(5, 5, 8, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#39ff14"; // Neon Green drop values
        ctx.font = `${fontRenderSize}px 'Press Start 2P'`;

        for (let i = 0; i < verticalDropArray.length; i++) {
            const outputText = symbolArray[Math.floor(Math.random() * symbolArray.length)];
            ctx.fillText(outputText, i * fontRenderSize, verticalDropArray[i] * fontRenderSize);

            if (verticalDropArray[i] * fontRenderSize > canvas.height && Math.random() > 0.975) {
                verticalDropArray[i] = 0;
            }
            verticalDropArray[i]++;
        }
    }
    setInterval(drawPixelRainMatrix, 33); // Maps performance matrix to approx 30fps boundary lock


    // --- 4. ASYNCHRONOUS AUTO-TYPING ALGORITHM ---
    const typingEngineElement = document.getElementById("typing-engine");
    const operationalPhrases = [
        "16 Year Old Full Stack Developer",
        "Discord Bot Creator",
        "Backend Architecture Engineer",
        "Python Automation Specialist"
    ];
    let activePhraseIndex = 0;
    let activeCharacterIndex = 0;
    let characterDeconstructionFlag = false;

    function executeTypeSequence() {
        const fullCurrentPhrase = operationalPhrases[activePhraseIndex];

        if (!characterDeconstructionFlag) {
            typingEngineElement.textContent = fullCurrentPhrase.substring(0, activeCharacterIndex + 1);
            activeCharacterIndex++;

            if (activeCharacterIndex === fullCurrentPhrase.length) {
                characterDeconstructionFlag = true;
                setTimeout(executeTypeSequence, 2000); // Wait on word terminal hold
            } else {
                setTimeout(executeTypeSequence, 70);
            }
        } else {
            typingEngineElement.textContent = fullCurrentPhrase.substring(0, activeCharacterIndex - 1);
            activeCharacterIndex--;

            if (activeCharacterIndex === 0) {
                characterDeconstructionFlag = false;
                activePhraseIndex = (activePhraseIndex + 1) % operationalPhrases.length;
                setTimeout(executeTypeSequence, 400); // Matrix pause before generation loop
            } else {
                setTimeout(executeTypeSequence, 45);
            }
        }
    }
    setTimeout(executeTypeSequence, 1500);


    // --- 5. PROGRESSIVE SKILL METER INTERSECTION ANIMATOR ---
    const skillMeterElements = document.querySelectorAll(".skill-meter-fill");

    const skillObserverEngine = new IntersectionObserver((observedEntries, observerInstance) => {
        observedEntries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetedBar = entry.target;
                const allocationTargetWidth = targetedBar.getAttribute("data-width");
                targetedBar.style.width = allocationTargetWidth;
                observerInstance.unobserve(targetedBar); // Free tracking cycles post execution
            }
        });
    }, { threshold: 0.1 });

    skillMeterElements.forEach(bar => skillObserverEngine.observe(bar));


    // --- 6. REAL-TIME STATISTICAL COUNTING INCREMENTER ---
    const metricCounterElements = document.querySelectorAll(".stat-count");

    const statsObserverEngine = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetCounter = entry.target;
                const targetedNumericCap = parseInt(targetCounter.getAttribute("data-target"), 10);
                let numericalStartingPoint = 0;
                const countingStepRate = targetedNumericCap / 40; // Scales velocity execution curve

                const counterProcessingLoop = setInterval(() => {
                    numericalStartingPoint += countingStepRate;
                    if (numericalStartingPoint >= targetedNumericCap) {
                        targetCounter.textContent = targetedNumericCap.toLocaleString();
                        clearInterval(counterProcessingLoop);
                    } else {
                        targetCounter.textContent = Math.floor(numericalStartingPoint).toLocaleString();
                    }
                }, 20);
                observer.unobserve(targetCounter);
            }
        });
    }, { threshold: 0.2 });

    metricCounterElements.forEach(stat => statsObserverEngine.observe(stat));


    // --- 7. HUD LINK POSITION CORRELATION MONITOR ---
    const structuralSectionArray = document.querySelectorAll(".view-section");
    const navigationLinksArray = document.querySelectorAll(".hud-link");

    window.addEventListener("scroll", () => {
        let executionScrolledPosition = window.scrollY + 120; // Adds validation padding offset

        structuralSectionArray.forEach(sectionElement => {
            if (executionScrolledPosition >= sectionElement.offsetTop && executionScrolledPosition < (sectionElement.offsetTop + sectionElement.offsetHeight)) {
                let targetedIDValue = sectionElement.getAttribute("id");
                navigationLinksArray.forEach(linkElement => {
                    linkElement.classList.remove("active");
                    if (linkElement.getAttribute("href") === `#${targetedIDValue}`) {
                        linkElement.classList.add("active");
                    }
                });
            }
        });
    });


    // --- 8. GLOBAL PERSISTENT HARDWARE AUDIO CONTROLLER ---
    const audioToggleBtn = document.getElementById("audio-toggle");
    const backgroundAudioStream = document.getElementById("bg-music");
    let audioStateActive = false;

    audioToggleBtn.addEventListener("click", () => {
        audioStateActive = !audioStateActive;
        if (audioStateActive) {
            backgroundAudioStream.play().catch(() => {
                console.log("Audio pipeline requires manual structural system interaction override.");
            });
            audioToggleBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i> AUD_ON';
            audioToggleBtn.style.color = "var(--neon-green)";
            audioToggleBtn.style.borderColor = "var(--neon-green)";
        } else {
            backgroundAudioStream.pause();
            audioToggleBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i> AUD_OFF';
            audioToggleBtn.style.color = "var(--neon-purple)";
            audioToggleBtn.style.borderColor = "var(--neon-purple)";
        }
    });


    // --- 9. EASTER EGG CONSOLE MATRIX SHORTCUT SYSTEM ---
    document.addEventListener("keydown", (eventKeyData) => {
        // Listen for internal system keyboard event calls (Alt + Shift + T)
        if (eventKeyData.altKey && eventKeyData.shiftKey && eventKeyData.key.toLowerCase() === "t") {
            alert("SYSTEM TRACE: WisCode Portfolio Matrix Kernel v1.0.0 Online. Operator Wisdom is active.");
        }
    });


    // --- 10. SCROLL-DRIVEN VISIBILITY HOOKS ---
    const structuralVisibilityObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("element-visible");
            }
        });
    }, { threshold: 0.05 });

    structuralSectionArray.forEach(section => structuralVisibilityObserver.observe(section));
});