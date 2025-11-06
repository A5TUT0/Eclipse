# Eclipse Dark Theme Collection 🌙

[![Version](https://img.shields.io/visual-studio-marketplace/v/NoahLezama.eclipse-dark)](https://marketplace.visualstudio.com/items?itemName=NoahLezama.eclipse-dark)
[![Downloads](https://img.shields.io/visual-studio-marketplace/d/NoahLezama.eclipse-dark)](https://marketplace.visualstudio.com/items?itemName=NoahLezama.eclipse-dark)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/NoahLezama.eclipse-dark)](https://marketplace.visualstudio.com/items?itemName=NoahLezama.eclipse-dark)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/NoahLezama.eclipse-dark)](https://marketplace.visualstudio.com/items?itemName=NoahLezama.eclipse-dark)

Beautiful dark themes for Visual Studio Code with vibrant colors, excellent contrast, and distinct parameter highlighting designed for comfortable long coding sessions.

## ✨ Features

- **Enhanced Comments** 💬 - Better visibility with italic styling and brighter colors
- **Progressive property coloring** - Different colors for chained properties
- **Distinct parameter highlighting** - Never lose track of function arguments
- **Enhanced string styling** - Bold escape characters (`\n`, `\t`, etc.) and template expressions
- **Vibrant regex patterns** - Easy-to-read regular expressions with bold styling
- **Modern color palette** - Carefully selected for optimal readability
- **Semantic token support** - Intelligent syntax highlighting
- **Beautiful brackets** - Rainbow bracket pairs
- **Color value highlighting** - Hex/RGB colors stand out with bold purple styling

## 💡 Enhanced Comment Tags 🏷️

**Good news!** When you install Eclipse Dark, the [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) extension is **automatically installed** for you! 🎉

### One-time Setup (1 minute)

After installation, just configure the colors once:

1. **Open Settings**: `Ctrl+,` → Search "better-comments.tags"
2. **Click "Edit in settings.json"** and add this configuration:

```json
"better-comments.tags": [
  {
    "tag": "TODO:",
    "color": "#82aaff",
    "bold": true
  },
  {
    "tag": "FIXME:",
    "color": "#ffa657",
    "bold": true
  },
  {
    "tag": "HACK:",
    "color": "#c792ea",
    "bold": true
  },
  {
    "tag": "NOTE:",
    "color": "#4ec9b0",
    "bold": true
  },
  {
    "tag": "IMPORTANT:",
    "color": "#4ec9b0",
    "bold": true
  },
  {
    "tag": "BUG:",
    "color": "#f07178",
    "bold": true
  }
]
```

3. **Reload VS Code**: `Ctrl+Shift+P` → "Reload Window"

Now your comments will look amazing! 🎨

**Example:**

```javascript
// TODO: This appears in bright cyan and bold ✨
// FIXME: This appears in orange and bold 🔥
// HACK: This appears in purple and bold 💜
// NOTE: This appears in teal and bold 📝
```

## 🎨 What You'll See

- **Comments**: Italic style with better visibility (`#7a85b8` / `#7582ba`)
- **Escape characters**: Bold cyan styling (`\n`, `\t`, `\"`, etc.)
- **Template expressions**: Orange highlighting (`${variable}`)
- **Regex patterns**: Bold orange with distinct pattern elements
- **Color values**: Bold purple for hex/rgb values (`#ff0000`, `rgb(255,0,0)`)
- **Strings**: Vibrant green (`#a6e22e` / `#9ece6a`)

## 🎨 Color Highlights

- **Functions**: `#7aa2f7` (Blue)
- **Parameters**: `#ffa657` (Orange)
- **Variables**: `#c0caf5` (Light Blue)
- **Properties**: `#4fd6be` (Teal)
- **Strings**: `#9ece6a` (Green)
- **Keywords**: `#bb9af7` (Purple)
- **Comments**: `#5f6996` (Gray)

## 📸 Screenshots

### Eclipse Dark Pro

![Eclipse Dark Pro](https://raw.githubusercontent.com/A5TUT0/Eclipse/main/screenshots/Eclipse-Dark-Darker.png)

### Eclipse Dark Flat

![Eclipse Dark Flat](https://raw.githubusercontent.com/A5TUT0/Eclipse/main/screenshots/Eclipse-Dark-Flat.png)

## 🚀 Installation

1. Open **Extensions** sidebar in VS Code (`Ctrl+Shift+X`)
2. Search for `Eclipse Dark`
3. Click **Install**
4. Go to **File > Preferences > Theme > Color Theme** (or `Ctrl+K Ctrl+T`)
5. Select **Eclipse Dark Pro** or **Eclipse Dark Flat**

## 🎯 Which Theme Should I Choose?

- **Eclipse Dark Pro**: If you like depth and visual separation between UI elements
- **Eclipse Dark Flat**: If you prefer minimal, distraction-free, uniform design

## 🔧 Manual Installation

1. Download the `.vsix` file from releases
2. Open VS Code
3. Go to Extensions (`Ctrl+Shift+X`)
4. Click on `...` → `Install from VSIX...`
5. Select the downloaded file

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for details.

## 🤝 Contributing

Found a bug or have a suggestion? Please open an issue on [GitHub](https://github.com/A5TUT0/Eclipse/issues).

## 📄 License

MIT License - feel free to use and modify!

## ❓ FAQ

### Why do I need to configure Better Comments?

VS Code's security model prevents themes from automatically modifying your settings. However, Better Comments is automatically installed with Eclipse Dark, you just need to configure the colors once.

### Does this theme work with all languages?

Yes! Eclipse Dark uses semantic highlighting and TextMate scopes that work with all languages supported by VS Code.

### Which theme variant should I use?

- **Eclipse Dark Pro**: Best for those who like visual depth and UI separation
- **Eclipse Dark Flat**: Best for minimal, distraction-free coding

### The comment tags aren't showing colors

Make sure you:

1. Have Better Comments extension installed (auto-installed with Eclipse Dark)
2. Added the configuration to your settings.json
3. Reloaded VS Code (`Ctrl+Shift+P` → "Reload Window")
4. Are using the correct format: `// TODO:` (with colon)

### Can I customize the colors?

Absolutely! You can override any color in your `settings.json`:

```json
"workbench.colorCustomizations": {
  "[Eclipse Dark Pro]": {
    "editor.background": "#your-color"
  }
}
```

## 💖 Credits

Created with ❤️ by Noah

---

**Enjoy coding!** 🚀
