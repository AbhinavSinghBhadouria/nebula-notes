# Notes App with AI Enhancement 🤖

A modern, responsive Notes App built with HTML, CSS, and JavaScript that allows users to create, edit, delete, and improve notes using Groq AI (powered by Llama 3).

## Features ✨

- **Create Notes**: Add notes with title and content
- **Edit Notes**: Modify existing notes inline
- **Delete Notes**: Remove unwanted notes with confirmation
- **AI Enhancement**: Improve note content using Groq AI (Llama 3 model)
- **Local Storage**: All notes are saved locally in your browser
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations
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

1. Open `index.html` in your web browser
2. Start creating and improving your notes!

## How to Use 📝

### Creating Notes
1. Enter a title in the "Note title" field
2. Write your content in the "Write your note content here" textarea
3. Click "Add Note" or press Ctrl+Enter

### Editing Notes
1. Click the "✏️ Edit" button on any note
2. The note content will appear in the form above
3. Make your changes
4. Click "Update Note"

### Improving Notes with AI
1. Click the "🤖 Improve with AI" button on any note
2. Wait for the AI to process your content (you'll see a loading spinner)
3. The improved version will automatically replace the original content
4. A green "✨ AI Improved" badge will appear on enhanced notes

### Deleting Notes
1. Click the "🗑️ Delete" button on any note
2. Confirm the deletion in the popup dialog

## API Configuration 🔧

The app uses Groq's OpenAI-compatible API with the following configuration:

- **Model**: `llama3-8b-8192` (Llama 3 8B model)
- **Temperature**: 0.3 (for consistent, focused improvements)
- **Max Tokens**: 2048
- **Prompt**: Optimized for grammar, clarity, and readability improvements

## File Structure 📁

```
makeYournotes/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
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

All notes are stored in your browser's localStorage under the key `'notes'`. Each note contains:
- `id`: Unique identifier
- `title`: Note title
- `content`: Note content
- `date`: Creation/update timestamp
- `improved`: Boolean flag indicating if AI has improved the note

## Troubleshooting 🔧

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

## Customization 🎨

### Changing Colors
Edit the CSS variables in `styles.css` to customize the app's appearance:

```css
/* Main gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Button colors */
.btn-improve {
    background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
}
```

### Modifying AI Prompts
Edit the prompt in the `improveNoteWithAI` function in `script.js` to change how the AI improves your notes.

## Security Notes 🔒

- Your API key is stored in `config.js` which is excluded from Git tracking
- The `config.js` file is listed in `.gitignore` to keep it private
- Never commit your actual API key to version control
- For production use, consider implementing a backend service
- Monitor your API usage to avoid unexpected charges

## License 📄

This project is open source and available under the MIT License.

## Support 💬

If you encounter any issues or have questions:
1. Check the browser console for error messages
2. Verify your API key is correctly configured
3. Ensure you have an active internet connection for AI features

---

**Happy Note-Taking! 📝✨** 