# Nebula Notes - AI Enhanced Notes App 🤖

A modern, responsive Notes App built with HTML, CSS, and JavaScript that allows users to create, edit, delete, and improve notes using Groq AI (powered by Llama 3). Features a stunning nebula-inspired design with user authentication and secure, private note storage.

## Features ✨

- **User Authentication**: Secure signup and login system
- **User-Specific Storage**: Each user's notes are stored separately and privately
- **Create Notes**: Add notes with title and rich content
- **Edit Notes**: Modify existing notes inline with advanced formatting
- **Delete Notes**: Remove unwanted notes with confirmation
- **AI Enhancement**: Improve note content using Groq AI (Llama 3 model)
- **Rich Text Editing**: Advanced formatting with custom fonts, colors, and styling
- **PDF Export**: Export notes as professionally styled PDF documents
- **Local Storage**: All notes are saved locally in your browser
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Beautiful nebula-inspired design with smooth animations
- **Dark/Light Mode**: Toggle between themes
- **Real-time Updates**: Instant UI updates when notes are modified

## Setup Instructions 🚀

### 1. Get Groq API Key

1. Go to [Groq Console](https://console.groq.com/)
2. Sign in with your account
3. Navigate to API Keys section
4. Create a new API key
5. Copy your API key (you'll need this later)

### 2. Configure the App

1. Copy `config.example.js` to `config.js`:
   ```bash
   cp config.example.js config.js
   ```
2. Open `config.js` in your code editor
3. Replace `'YOUR_GROQ_API_KEY_HERE'` with your actual Groq API key
4. Save the file

### 3. Run the App

1. Open `landing.html` in your web browser (or `index.html` to go directly to the app)
2. Create an account or sign in
3. Start creating and improving your notes!

## How to Use 📝

### Getting Started
1. Visit the landing page (`landing.html`)
2. Click "Get Started" to sign in or "Create Account" to register
3. Fill in your details and create your account
4. You'll be automatically logged in and redirected to the main app

### Creating Notes
1. Enter a title in the "Note title" field
2. Write your content in the rich text editor
3. Use the formatting toolbar for styling (bold, italic, colors, etc.)
4. Click "Add Note" or press Ctrl+Enter

### Editing Notes
1. Click the "✏️ Edit" button on any note
2. The note content will appear in the form above
3. Make your changes using the rich text editor
4. Click "Update Note"

### Improving Notes with AI
1. Click the "🤖 Improve with AI" button on any note
2. Wait for the AI to process your content (you'll see a loading spinner)
3. The improved version will automatically replace the original content
4. A green "✨ AI Improved" badge will appear on enhanced notes

### Exporting Notes
1. Click the "📄 Export as PDF" button on any note
2. The note will be exported as a professionally formatted PDF
3. The file will be automatically downloaded to your device

### Deleting Notes
1. Click the "🗑️ Delete" button on any note
2. Confirm the deletion in the popup dialog

### Logging Out
1. Click the "🚪 Logout" button in the top-right corner
2. Confirm the logout action
3. You'll be redirected to the login page

## Authentication System 🔐

### User Registration
- Full name, email, and password required
- Password must be at least 6 characters
- Email validation and duplicate checking
- Automatic login after successful registration

### User Login
- Email and password authentication
- Secure password verification
- Session persistence across browser sessions
- Automatic redirect to main app if already logged in

### Security Features
- User-specific note storage (`notes_${userId}`)
- Password hashing (simple hash for demo - use bcrypt in production)
- Session management with localStorage
- Automatic logout on session expiry

## API Configuration 🔧

The app uses Groq's OpenAI-compatible API with the following configuration:

- **Model**: `llama3-8b-8192` (Llama 3 8B model)
- **Temperature**: 0.3 (for consistent, focused improvements)
- **Max Tokens**: 2048
- **Prompt**: Optimized for grammar, clarity, and readability improvements

## File Structure 📁

```
makeYournotes/
├── landing.html        # Landing page with app overview
├── login.html          # User login page
├── signup.html         # User registration page
├── index.html          # Main notes app (requires authentication)
├── styles.css          # Main app CSS styles
├── auth-styles.css     # Authentication pages CSS styles
├── script.js           # Main app JavaScript functionality
├── auth.js             # Authentication system JavaScript
├── config.js           # API configuration (private - not in Git)
├── config.example.js   # Example configuration file
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Browser Compatibility 🌐

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Local Storage 📦

### User Data
- `nebula_users`: Array of registered users
- `nebula_current_user`: Currently logged-in user session
- `notes_${userId}`: User-specific notes storage
- `darkMode`: Theme preference

### Note Structure
Each note contains:
- `id`: Unique identifier
- `title`: Note title
- `content`: Rich HTML content
- `date`: Creation/update timestamp
- `createdAt`: Creation timestamp for auto-deletion
- `improved`: Boolean flag indicating if AI has improved the note

## Troubleshooting 🔧

### Authentication Issues
- Clear browser localStorage if login problems persist
- Ensure you're using the correct email/password combination
- Check browser console for any JavaScript errors

### API Key Issues
- Ensure your API key is correctly inserted in `config.js`
- Check that your API key has the necessary permissions
- Verify you have an active Groq account

### CORS Issues
- The app makes direct API calls to Groq's servers
- If you encounter CORS issues, consider using a local development server

### Local Storage Issues
- Clear your browser's localStorage if notes aren't loading
- Check browser console for any JavaScript errors
- Ensure you're logged in to access your notes

## Customization 🎨

### Changing Colors
Edit the CSS variables in `styles.css` and `auth-styles.css` to customize the app's appearance:

```css
/* Main nebula gradient */
--nebula-gradient: linear-gradient(135deg, #0a192f 0%, #304ffe 50%, #aeefff 100%);

/* Primary colors */
--primary-color: #304ffe;
--primary-light: #aeefff;
```

### Modifying AI Prompts
Edit the prompt in the `improveNoteWithAI` function in `script.js` to change how the AI improves your notes.

## Security Notes 🔒

- Your API key is stored in `config.js` which is excluded from Git tracking
- The `config.js` file is listed in `.gitignore` to keep it private
- User passwords are hashed before storage (use bcrypt in production)
- Each user's notes are stored separately with user-specific keys
- Session data is stored in localStorage (consider server-side sessions for production)
- Never commit your actual API key to version control
- For production use, consider implementing a backend service
- Monitor your API usage to avoid unexpected charges

## Future Enhancements 🚀

- Password reset functionality
- User profile management
- Note sharing between users
- Cloud storage integration
- Advanced AI features
- Mobile app version

## License 📄

This project is open source and available under the MIT License.

## Support 💬

If you encounter any issues or have questions:
1. Check the browser console for error messages
2. Verify your API key is correctly configured
3. Ensure you have an active internet connection for AI features
4. Try logging out and logging back in if experiencing issues

---

**Happy Note-Taking! 📝✨** 