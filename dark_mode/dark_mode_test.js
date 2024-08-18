document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const modeIcon = document.getElementById('mode-icon');

    if (localStorage.getItem('darkMode') === 'true') {
                document.documentElement.classList.add('dark-mode');
            }

    // Function to set the dark mode
    function setDarkMode(isDark) {
        if (isDark) {
            document.body.classList.add('dark-mode');
            modeIcon.textContent = 'light_mode';
        } else {
            document.body.classList.remove('dark-mode');
            modeIcon.textContent = 'dark_mode';
        }
        localStorage.setItem('darkMode', isDark);
    }

    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');

    // Apply the saved preference or default to light mode
    setDarkMode(savedDarkMode === 'true');

    // Toggle dark mode on click
    darkModeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        const isDarkMode = document.body.classList.toggle('dark-mode');
        setDarkMode(isDarkMode);
    });
});