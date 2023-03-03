module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        sans: "'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        serif: "'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'",
        mono:  "'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'",
        open: "'Open Sans', 'sans-serif'",
        roboto: "'Roboto','sans-serif'",
        arial: "'-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','sans-serif'",
        blink: "'Gotham SSm','-apple-system' 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','sans-serif'",
        barlow: ['Barlow', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
        deca: ['Lexend Deca', 'sans-serif'],
        exa: ['Lexend Exa', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        rubik: ['Rubik', 'Lexend Deca', 'Lexend Exa', 'sans-serif'],
        // display: ['Roboto','Arial' ,'sans-serif'],
        // body: ['Roboto','Arial' ,'sans-serif']
        
      },
      extend: {
        fontSize: {
          14: '14px',
        },
        backgroundColor: {
          'main-bg': '#FAFBFB',
          'main-dark-bg': '#20232A',
          'secondary-dark-bg': '#33373E',
          'light-gray': '#F7F7F7',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
        },
        borderWidth: {
          1: '1px',
        },
        borderColor: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        screens: {
          '2xl': {'max': '1535px'},
          // => @media (max-width: 1535px) { ... }
    
          'xl': {'max': '1279px'},
          // => @media (max-width: 1279px) { ... }
    
          'lg': {'max': '1023px'},
          // => @media (max-width: 1023px) { ... }
    
          'md': {'max': '767px'},
          // => @media (max-width: 767px) { ... }
    
          'sm': {'max': '639px'},
          // => @media (max-width: 639px) { ... }

          'xs': {'max': '500px'},
          // => @media (max-width: 350px) { ... }
        },
        backgroundImage: {
          'hero-pattern':
            "url('https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/welcome-bg-2x-svg.25338f53.svg')",
        },
      },
    },
    plugins: [],
};