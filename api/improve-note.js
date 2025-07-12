export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { content } = req.body;
    
    if (!content) {
      return res.status(400).json({ error: 'Content is required' });
    }

    const API_KEY = process.env.GROQ_API_KEY;
    if (!API_KEY) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    const API_URL = 'https://api.groq.com/openai/v1/chat/completions';
    const prompt = `Please improve the following text for better grammar, clarity, and readability. Keep the original meaning and tone, but make it more polished and professional. Here's the text:\n\n"${content}"\n\nPlease return only the improved text without any additional explanations or formatting.`;
    
    const requestBody = {
      model: "llama3-8b-8192",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.3,
      max_tokens: 2048,
      top_p: 0.95
    };

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    if (data.choices && data.choices[0] && data.choices[0].message) {
      const improvedContent = data.choices[0].message.content.trim().replace(/\n/g, '<br>');
      return res.status(200).json({ improvedContent });
    } else {
      throw new Error('Invalid response format from API');
    }

  } catch (error) {
    console.error('Error improving note with AI:', error);
    return res.status(500).json({ error: 'Failed to improve note. Please try again.' });
  }
} 