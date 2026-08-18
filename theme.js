(function () {
    const THEME_STORAGE_KEY = 'theme';
    const TRIED_LIGHT_KEY = 'theme_tried_light';
    const TRIED_DARK_KEY = 'theme_tried_dark';
    const DISCO_UNLOCKED_KEY = 'theme_disco_unlocked';

    function getPreferredTheme() {
        const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        if (storedTheme) {
            return storedTheme;
        }
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    }

    function isDiscoUnlocked() {
        return localStorage.getItem(DISCO_UNLOCKED_KEY) === 'true';
    }

    function recordThemeVisit(theme) {
        if (theme === 'light') {
            localStorage.setItem(TRIED_LIGHT_KEY, 'true');
        } else if (theme === 'dark') {
            localStorage.setItem(TRIED_DARK_KEY, 'true');
        }

        const triedLight = localStorage.getItem(TRIED_LIGHT_KEY) === 'true';
        const triedDark = localStorage.getItem(TRIED_DARK_KEY) === 'true';

        if (triedLight && triedDark && !isDiscoUnlocked()) {
            localStorage.setItem(DISCO_UNLOCKED_KEY, 'true');
            showDiscoUnlockedToast();
        }
    }

    function showDiscoUnlockedToast() {
        if (document.getElementById('disco-toast')) return;

        const toast = document.createElement('div');
        toast.id = 'disco-toast';
        toast.className = 'disco-toast';
        toast.setAttribute('role', 'alert');
        toast.innerHTML = `
            <div class="disco-toast-content">
                <span class="disco-toast-icon">🪩</span>
                <div class="disco-toast-text">
                    <strong>Hidden Mode Unlocked!</strong>
                    <span>Disco mode is ready. Hit the theme button to dance!</span>
                </div>
                <button class="disco-toast-btn" id="disco-toast-action" aria-label="Enter Disco Mode">Let's Party!</button>
                <button class="disco-toast-close" id="disco-toast-close" aria-label="Close notification">&times;</button>
            </div>
        `;
        document.body.appendChild(toast);

        requestAnimationFrame(() => {
            toast.classList.add('is-visible');
        });

        const actionBtn = document.getElementById('disco-toast-action');
        if (actionBtn) {
            actionBtn.addEventListener('click', () => {
                applyTheme('disco');
                localStorage.setItem(THEME_STORAGE_KEY, 'disco');
                dismissToast();
            });
        }

        const closeBtn = document.getElementById('disco-toast-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', dismissToast);
        }

        let timeout = setTimeout(dismissToast, 6500);

        function dismissToast() {
            clearTimeout(timeout);
            toast.classList.remove('is-visible');
            setTimeout(() => {
                if (toast.parentNode) toast.parentNode.removeChild(toast);
            }, 350);
        }
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        recordThemeVisit(theme);
        updateToggleButton(theme);
    }

    function getNextTheme(currentTheme) {
        const discoUnlocked = isDiscoUnlocked();
        if (currentTheme === 'light') {
            return 'dark';
        }
        if (currentTheme === 'dark') {
            return discoUnlocked ? 'disco' : 'light';
        }
        return 'light';
    }

    function updateToggleButton(theme) {
        const toggleBtn = document.getElementById('theme-toggle');
        if (!toggleBtn) return;

        const discoUnlocked = isDiscoUnlocked();
        let label = 'Switch to dark mode';
        if (theme === 'light') {
            label = 'Switch to dark mode';
        } else if (theme === 'dark') {
            label = discoUnlocked ? 'Switch to Disco Mode 🪩' : 'Switch to light mode';
        } else if (theme === 'disco') {
            label = 'Switch to light mode';
        }

        toggleBtn.setAttribute('aria-label', label);
        toggleBtn.setAttribute('title', label);
        toggleBtn.setAttribute('data-disco-unlocked', discoUnlocked ? 'true' : 'false');
    }

    function initThemeToggle() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || getPreferredTheme();
        applyTheme(currentTheme);

        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                const activeTheme = document.documentElement.getAttribute('data-theme') || 'light';
                const nextTheme = getNextTheme(activeTheme);
                localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
                applyTheme(nextTheme);
            });
        }

        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (!localStorage.getItem(THEME_STORAGE_KEY)) {
                    applyTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initThemeToggle);
    } else {
        initThemeToggle();
    }
})();
