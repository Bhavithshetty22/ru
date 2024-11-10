const memories = [
    {
        title: "Home with you",
        date: "October 20, 2024",
        description: "I’ll never forget the day you came over, when everything just felt so easy and perfect. We ended up tangled up together, laughing and falling asleep in the most comfortable, beautiful way. It was crazy, but in the sweetest, most natural way and I can’t stop smiling thinking about how good it feels to be with you.",
        image: "./home.jpeg"
    },
    {
        title: "Our First Diwali",
        date: "November 2, 2024",
        description: "You looked absolutely stunning in that saree—so kissable, I couldn’t take my eyes off you. I had the best time with you, laughing and burning fireworks together. Every moment felt perfect with you.",
        image: "./diwali1.mp4"
    },
    {
        title: "Cute Memory",
        date: "October 27, 2024",
        description: "The day we went to see Venom was unforgettable. Watching you smile like that so genuinely happy made me realize something I never expected: seeing you so happy makes my heart feel lighter. Your smile, your laugh... you were so incredibly cute. That day, I couldn’t stop smiling too, just from being with you. I’ll never forget how perfect that day felt, and how much I loved every single second of it.",
        image: "./cute.jpeg"
    },
    {
        title: "Our First Kiss",
        date: "October 23, 2024",
        description: "The world stood still. Your lips on mine, hearts racing .That first kiss with you I was nervous, but all I could think was how much I wanted to kiss you. I don’t even know if that’s a good or bad thing, but it’s just how much I love you. Kissing you felt like the perfect way to show everything I was feeling, even if I didn’t know exactly how to do it. But when you kissed me back, so gently and effortlessly, I couldn’t help but smile inside. You made me feel so confident, so loved, in a way I never expected. I didn’t feel awkward or bad I just felt right. It was like you wanted me to kiss you just as much as I wanted you to kiss me, and that thought still makes my heart race.I remember noticing everything you did that day, and I loved it all—your smile, your touch, the way you made me feel like I was the only person in the world. I’ve never felt so loved. And yeah, maybe I’m selfish, but I want to feel that every day. Every second with you feels like the most beautiful thing in the world.The next time I kissed you, I knew exactly what I wanted. I wanted that feeling again—wanted to show you how much I love you. This time, I kissed you with no fear, no doubts—just pure love. I think that’s why you liked it. It was real, it was me, it was us. And honestly, I want to kiss you like that forever.I know I sometimes overthink, and I’m sorry for that. I just want you to always feel comfortable, especially when it comes to things like this. Nothing is more important than you feeling safe and loved. I just want to make you feel as amazing as you make me feel every time I’m with you.",
        image: "./firstkiss.jpeg"
    },
    {
        title: "Five Months of Love",
        date: "November 14, 2024",
        description: "Five months of bullying, roasting and loving SPECIAL SONG FOR YOU",
        image: "./song.mp4"
    }
];

let currentMemory = 0;

function updateMemoryCard() {
    const memory = memories[currentMemory];
    const mediaContainer = document.getElementById('memoryMedia');
    mediaContainer.innerHTML = ''; // Clear previous media

    if (memory.image.endsWith('.mp4')) {
        const video = document.createElement('video');
        video.src = memory.image;
        video.controls = true;
        video.className = 'memory-media';
        video.muted = false;
        mediaContainer.appendChild(video);
        video.load();
        video.play();
    } else {
        const img = document.createElement('img');
        img.src = memory.image;
        img.alt = memory.title;
        img.className = 'memory-media';
        mediaContainer.appendChild(img);
    }

    document.getElementById('memoryTitle').textContent = memory.title;
    document.getElementById('memoryDate').textContent = memory.date;
    document.getElementById('memoryDescription').textContent = memory.description;

    document.getElementById('prevBtn').disabled = currentMemory === 0;
    document.getElementById('nextBtn').disabled = currentMemory === memories.length - 1;

    document.getElementById('memoryCard').classList.remove('active');
    setTimeout(() => {
        document.getElementById('memoryCard').classList.add('active');
    }, 50);

    if (currentMemory === memories.length - 1) {
        showHearts();
        document.getElementById('finalMessage').classList.add('show');
    } else {
        hideHearts();
        document.getElementById('finalMessage').classList.remove('show');
    }
}

function changeMemory(direction) {
    currentMemory = Math.max(0, Math.min(memories.length - 1, currentMemory + direction));
    updateMemoryCard();
}

function showHearts() {
    const heartsContainer = document.getElementById('heartsContainer');
    heartsContainer.innerHTML = '';
    heartsContainer.style.opacity = 1;

    for (let i = 0; i < 50; i++) {
        createHeart();
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 2 + 2}s`;
        heart.style.animationDelay = `${Math.random() * 3}s`;
        heartsContainer.appendChild(heart);

        heart.addEventListener('animationend', () => {
            heart.remove();
            createHeart();
        });
    }
}

function hideHearts() {
    document.getElementById('heartsContainer').style.opacity = 0;
}

updateMemoryCard();