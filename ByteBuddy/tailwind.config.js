/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
            },
            colors: {
                // Neutral Colors
                background: '#F8F9FA', // Light gray for background
                text: '#212529',       // Dark gray for text (high contrast)
                border: '#DEE2E6',     // Light gray for borders
            
                // Primary Colors
                primary: '#4A90E2',    // Soft blue for primary actions
                primaryHover: '#357ABD', // Darker blue for hover states
            
                // Secondary Colors
                secondary: '#6C757D',  // Gray for secondary elements
                secondaryHover: '#5A6268', // Darker gray for hover states
            
                // Accent Colors
                accent: '#7397c9',     // Coral for accents (e.g., buttons, highlights)
                accentHover: '#FF5252', // Darker coral for hover states
            
                // Success, Warning, and Error Colors
                success: '#28A745',    // Green for success messages
                warning: '#FFC107',    // Yellow for warnings
                error: '#DC3545',      // Red for errors
            
                // Additional Colors
                info: '#17A2B8',       // Teal for informational messages
                light: '#F8F9FA',      // Light gray for backgrounds
                dark: '#343A40',       // Dark gray for dark-themed elements
            },

            fontSize: {
                base: '1.25rem', // Sets the base font size to `text-xl`
            },
        },
    },
    plugins: [],
}
