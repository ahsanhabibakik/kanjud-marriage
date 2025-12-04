// Add some interactive fun to the page

// Counter for days waiting (just for fun)
let daysCounter = 0;

// Animate the hope meter randomly
setInterval(() => {
    const hopeFill = document.querySelector('.hope-fill');
    const randomWidth = Math.floor(Math.random() * 30) + 10; // Between 10% and 40%
    hopeFill.style.width = randomWidth + '%';
}, 3000);

// Add click counter on character
const character = document.querySelector('.character');
let clickCount = 0;
const messages = [
    "Please help! 🙏",
    "I promise I'm not that bad! 😅",
    "My mom says I'm handsome! 👩",
    "I can cook... instant noodles! 🍜",
    "I'm running out of hope here! 😢",
    "Just one chance! ✨",
    "I'm a catch! ...right? 🎣",
    "Wedding bells? 🔔"
];

character.addEventListener('click', () => {
    clickCount++;
    const message = messages[clickCount % messages.length];

    // Create floating message
    const floatingMsg = document.createElement('div');
    floatingMsg.textContent = message;
    floatingMsg.style.position = 'fixed';
    floatingMsg.style.left = '50%';
    floatingMsg.style.top = '30%';
    floatingMsg.style.transform = 'translate(-50%, -50%)';
    floatingMsg.style.background = 'rgba(210, 105, 30, 0.9)';
    floatingMsg.style.color = 'white';
    floatingMsg.style.padding = '15px 25px';
    floatingMsg.style.borderRadius = '25px';
    floatingMsg.style.fontSize = '1.2em';
    floatingMsg.style.zIndex = '1000';
    floatingMsg.style.animation = 'fadeInOut 2s forwards';

    document.body.appendChild(floatingMsg);

    setTimeout(() => {
        floatingMsg.remove();
    }, 2000);
});

// Add CSS animation for floating messages
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
        50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
    }
`;
document.head.appendChild(style);

// Easter egg: Konami code for special message
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-8);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        alert('🎉 SECRET UNLOCKED! Muabbaz is actually a great guy and deserves all the happiness! Please help him find his soulmate! 💍');
    }
});

// Random encouraging messages on scroll
let hasScrolledToBottom = false;

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100 && !hasScrolledToBottom) {
        hasScrolledToBottom = true;

        setTimeout(() => {
            const encouragement = document.createElement('div');
            encouragement.innerHTML = '❤️ Thanks for scrolling all the way down! You must really care about Muabbaz! ❤️';
            encouragement.style.position = 'fixed';
            encouragement.style.bottom = '20px';
            encouragement.style.left = '50%';
            encouragement.style.transform = 'translateX(-50%)';
            encouragement.style.background = 'rgba(255, 105, 180, 0.95)';
            encouragement.style.color = 'white';
            encouragement.style.padding = '20px 30px';
            encouragement.style.borderRadius = '15px';
            encouragement.style.fontSize = '1.1em';
            encouragement.style.zIndex = '1000';
            encouragement.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
            encouragement.style.animation = 'slideUp 0.5s forwards';

            document.body.appendChild(encouragement);

            setTimeout(() => {
                encouragement.style.animation = 'slideDown 0.5s forwards';
                setTimeout(() => encouragement.remove(), 500);
            }, 3000);
        }, 500);
    }
});

// Add slide animations
const slideStyle = document.createElement('style');
slideStyle.textContent = `
    @keyframes slideUp {
        from {
            bottom: -100px;
            opacity: 0;
        }
        to {
            bottom: 20px;
            opacity: 1;
        }
    }

    @keyframes slideDown {
        from {
            bottom: 20px;
            opacity: 1;
        }
        to {
            bottom: -100px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(slideStyle);

// Social Share Functionality
const pageUrl = 'https://kanjudmuabbaz.com'; // Update this after deploying to Vercel
const shareTitle = "Help Muabbaz Find Love! 💍";
const shareText = "Meet Muabbaz - a charming bachelor on a quest for matrimony! Can make toast, will clean (twice a month), and has pre-installed dad jokes. Help him find his soulmate! 😄";

// WhatsApp Share
document.getElementById('shareWhatsApp').addEventListener('click', (e) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + '\n\n' + pageUrl)}`;
    window.open(whatsappUrl, '_blank');
});

// Facebook Share
document.getElementById('shareFacebook').addEventListener('click', (e) => {
    e.preventDefault();
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
});

// Twitter Share
document.getElementById('shareTwitter').addEventListener('click', (e) => {
    e.preventDefault();
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
});

// LinkedIn Share
document.getElementById('shareLinkedIn').addEventListener('click', (e) => {
    e.preventDefault();
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
    window.open(linkedinUrl, '_blank', 'width=600,height=400');
});

// Copy Link
document.getElementById('copyLink').addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(pageUrl);

        // Show success message
        const btn = document.getElementById('copyLink');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span class="share-icon">✅</span><span>Copied!</span>';

        setTimeout(() => {
            btn.innerHTML = originalText;
        }, 2000);
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = pageUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        alert('Link copied to clipboard!');
    }
});
