
        // Toggle light/dark theme
        const toggle = document.getElementById('theme-toggle');
        toggle.addEventListener('click', () => {
            const html = document.documentElement;
            html.getAttribute('data-theme') === 'dark'
                ? html.removeAttribute('data-theme')
                : html.setAttribute('data-theme', 'dark');
        });
