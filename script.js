const languageSelector = document.getElementById('language-selector');
const translatableElements = document.querySelectorAll('[data-en]');

languageSelector.addEventListener('change', (e) => {
    const selectedLanguage = e.target.value;

    translatableElements.forEach((el) => {
        el.textContent = el.getAttribute(`data-${selectedLanguage}`);
    });
});
