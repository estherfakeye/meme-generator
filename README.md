# Meme Generator 🎭

A modern, fully responsive meme generator built with React that allows users to create custom memes with top and bottom text overlays and download them as images.

## 🚀 Live Demo

[View Live Site](https://esthercodes-meme-generator.vercel.app/)

## ✨ Features

- **Random Meme Images**: Fetches 100 popular meme templates from the Imgflip API
- **Custom Text Overlay**: Add top and bottom text with classic meme styling (white text with black outline)
- **Download Functionality**: Save your created memes as PNG images
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Modern UI**: Clean black, white, and purple color scheme with floating button effects
- **Loading State**: Displays loading indicator while fetching meme templates

## 🛠️ Built With

- **React 19** - UI library
- **Vite 8** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Imgflip API** - Meme image data source
- **Canvas API** - Image manipulation for downloads
- **Vercel** - Deployment platform

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/meme-generator.git
cd meme-generator
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 How It Works

1. **Fetch Memes**: On page load, the app fetches 100 popular meme templates from the Imgflip API
2. **Add Text**: Users can type custom text in the top and bottom input fields
3. **Generate Random Meme**: Click "Get a new meme image" to display a random meme template
4. **Download**: Click "Download Meme" to save the meme with text overlay as a PNG file

## 📁 Project Structure
```
meme-generator/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Meme.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 🎨 Key Concepts Demonstrated

- **React Hooks**: `useState` for state management, `useEffect` for API calls
- **API Integration**: Fetching data from external APIs
- **Event Handling**: Managing user inputs and button clicks
- **Conditional Rendering**: Displaying loading states and conditional content
- **Canvas Manipulation**: Drawing images and text for downloads
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🚀 Deployment

This project is deployed on Vercel. Every push to the main branch automatically triggers a new deployment.

## 📝 Future Enhancements

- [ ] Add ability to customize font size and color
- [ ] Save favorite memes
- [ ] Share memes directly to social media
- [ ] Add more text positions (center, corners)
- [ ] User-uploaded images support

## 👤 Author

**Esther Fakeye**
- GitHub: [@estherfakeye](https://github.com/estherfakeye)
- Digital Business Card: [View Card](https://digital-business-card.vercel.app)

## 🙏 Acknowledgments

- [Imgflip API](https://imgflip.com/api) for providing meme templates
- React community for excellent documentation
- Learning resources from Scrimba

## 📄 License

This project is open source and available under the MIT License.