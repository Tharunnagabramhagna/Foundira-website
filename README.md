# 🔍 Foundira - Smart Lost & Found Connect

> Reconnecting People with What They Lost

A modern, intelligent lost and found platform built for students and communities to safely recover lost items and return found items to their rightful owners.

## ✨ Features

- 🔐 **Secure Authentication** - Login/Signup with session management
- 📝 **Post Lost/Found Items** - Easy item posting with images and details
- 🤖 **Smart Matching** - AI-powered matching algorithm
- 💬 **Real-time Chat** - Direct messaging between users
- 🔔 **Notifications** - Stay updated on matches and messages
- 👤 **Profile System** - User profiles with customizable avatars
- 📧 **Email Integration** - "It's Me" claim feature with Make.com webhooks
- 🌓 **Dark Mode** - Beautiful dark/light theme toggle
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🎨 **Modern UI** - Clean, professional interface with smooth animations

## 🚀 Tech Stack

- **Frontend**: React 18, React Router, Tailwind CSS
- **Backend**: Mock API with localStorage (Demo/Prototype)
- **Integrations**: Make.com webhooks, DiceBear avatars, Unsplash images
- **Deployment**: Static hosting ready (GitHub Pages, Netlify, Vercel)

## 📦 Installation

1. **Clone the repository**:
```bash
git clone https://github.com/YOUR_USERNAME/foundira.git
cd foundira
```

2. **Open with a local server**:
```bash
npx http-server .
```

3. **Navigate to**: `http://localhost:8080`

That's it! No build process required - pure HTML, CSS, and React via CDN.

## 🎯 Usage

### Getting Started
1. **Sign Up** - Create a new account with email and password
2. **Login** - Access your personalized dashboard
3. **Post Items** - Report lost or found items with details and images
4. **Browse** - View community items in the dashboard
5. **My Items** - Manage your posted items
6. **Smart Matches** - Get AI-powered match suggestions
7. **Chat** - Connect with other users directly
8. **Claim Items** - Use "It's Me" button to claim found items

### "It's Me" Feature
When you find an item that belongs to you:
1. Click the **"It's Me"** button on the found item
2. Fill in the subject and message with proof of ownership
3. Click **"Send Email"**
4. The person who found the item will receive your message via email

## 🔧 Configuration

### Make.com Webhook Setup
To enable email notifications:

1. Create a Make.com account at https://make.com
2. Create a new scenario with:
   - **Webhook** module (to receive data)
   - **Email** module (to send emails)
3. Update the webhook URL in `src/frontend/pages/MyItems.jsx`:

```javascript
const response = await fetch('YOUR_WEBHOOK_URL', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(emailData)
});
```

## 📂 Project Structure

```
foundira/
├── index.html                 # Main entry point
├── README.md                  # Project documentation
├── .gitignore                # Git ignore rules
├── public/
│   └── images/               # Static images
│       ├── foundira_logo.png
│       └── foundira_icon.png
├── src/
│   ├── backend/
│   │   └── api/              # Mock API files
│   │       ├── authApi.js    # Authentication
│   │       ├── itemsApi.js   # Items CRUD
│   │       ├── chatApi.js    # Chat functionality
│   │       ├── notificationApi.js
│   │       └── userApi.js    # User profiles
│   ├── frontend/
│   │   ├── components/       # Reusable components
│   │   │   ├── Header.jsx
│   │   │   ├── ItemCard.jsx
│   │   │   ├── ThemeToggle.jsx
│   │   │   └── ...
│   │   └── pages/            # Page components
│   │       ├── Dashboard.jsx
│   │       ├── MyItems.jsx
│   │       ├── Profile.jsx
│   │       └── ...
│   ├── context/              # React context
│   │   ├── AuthContext.jsx
│   │   └── ThemeContext.jsx
│   └── utils/                # Utility functions
│       └── matchEngine.js    # Matching algorithm
└── Documentation/            # Additional docs
    ├── GITHUB_SETUP_GUIDE.md
    ├── FINAL_ERROR_CHECK.md
    └── ...
```

## 🎨 Key Features Explained

### Smart Matching Algorithm
The app uses an intelligent matching algorithm that considers:
- Item category and type
- Location proximity
- Time of loss/finding
- Description similarity
- Color and brand matching

### Profile System
- Customizable avatars using DiceBear API
- Trust score based on successful returns
- Activity history
- Editable profile information

### Real-time Chat
- Direct messaging between users
- Message history persistence
- Unread message indicators
- Typing indicators (planned)

## 🚀 Deployment

### GitHub Pages
1. Go to repository **Settings** → **Pages**
2. Select **main** branch as source
3. Click **Save**
4. Access at: `https://YOUR_USERNAME.github.io/foundira/`

### Netlify
1. Connect your GitHub repository
2. Build command: (leave empty)
3. Publish directory: `/`
4. Deploy!

### Vercel
1. Import your GitHub repository
2. Framework preset: **Other**
3. Deploy!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Tarun**
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)

## 🙏 Acknowledgments

- Built for **Code for Connection** Hackathon
- Theme: Building connections through technology
- Date: February 2026
- Special thanks to the open-source community

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Contact: your.email@example.com

## 🎯 Future Enhancements

- [ ] Real backend with database
- [ ] Mobile app (React Native)
- [ ] Push notifications
- [ ] QR code scanning
- [ ] Image recognition for items
- [ ] Multi-language support
- [ ] Admin dashboard
- [ ] Analytics and reporting

---

**Made with ❤️ for the community**

⭐ Star this repo if you find it helpful!
