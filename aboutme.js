function animateSkillBars() {
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(skillLevel => {
        const level = skillLevel.dataset.level;
        skillLevel.style.width = `${level}%`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // ... other code

    // Theme Toggle code
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        body.classList.add(currentTheme);
        themeToggle.checked = currentTheme === 'dark-mode'; // Set the toggle state
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark-mode' : '');
    });
    // ... Event delegation

    // Animate skill bars
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(skillLevel => {
        const level = skillLevel.dataset.level;
        skillLevel.style.width = `${level}%`;
    });

    // Create a Mutation Observer
    const observer = new MutationObserver(() => {
        animateSkillBars();
    });

    // Observe the main content for changes
    const mainContent = document.querySelector('main'); // Or a more specific container if possible
    if (mainContent) {
        observer.observe(mainContent, { childList: true, subtree: true });
    }
});