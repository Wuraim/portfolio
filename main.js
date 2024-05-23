import './style.css'
import './font.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.addEventListener("DOMContentLoaded", function() {
    function calculateAge(birthdate) {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    const ageElement = document.getElementById("age");
    const birthdate = "1998-07-29";
    ageElement.textContent = calculateAge(birthdate) + " ans";

    const twitterFrame = document.querySelector('#twitter');

    const interval = setInterval(function() {
        const iframe = twitterFrame.querySelector('iframe');
        if (iframe) {
            clearInterval(interval);
            iframe.addEventListener('load', function() {
                twitterFrame.classList.remove('hidden');
            });
        }
    }, 100);
});

setupCounter(document.querySelector('#counter'))
