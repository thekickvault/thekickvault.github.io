# 📸 Image Upload Guide

This guide shows you exactly where and how to upload images for your website.

## 📁 **Image Directory Structure**

Your images should go in the `mkdocs/assets/images/` folder:

```
mkdocs/assets/images/
├── cleats/          # Soccer cleat images
├── gallery/         # Gallery showcase images  
├── blog/           # Blog post images
└── icons/          # Icons and logos
```

## 🌐 **Method 1: Upload via GitHub Web Interface (Recommended)**

### Step-by-Step:

1. **Go to your repository**: [thekickvault.github.io](https://github.com/thekickvault/thekickvault.github.io)

2. **Navigate to images folder**:
   - Click on `mkdocs/` folder
   - Click on `assets/` folder  
   - Click on `images/` folder
   - Choose the appropriate subfolder (e.g., `cleats/`)

3. **Upload images**:
   - Click **"Add file"** → **"Upload files"**
   - Drag and drop your images OR click **"choose your files"**
   - Select your image files

4. **Commit changes**:
   - Add a commit message like "Add cleat images"
   - Click **"Commit changes"**

5. **Website updates automatically!** 🎉

## 💻 **Method 2: Upload via Local Git**

```bash
# Navigate to your project
cd thekickvault-browser-editable

# Copy images to the right folder
cp /path/to/your/image.jpg mkdocs/assets/images/cleats/

# Commit and push
git add mkdocs/assets/images/
git commit -m "Add new cleat images"
git push origin main
```

## 🖼️ **How to Use Images in Your Content**

### In Markdown Files:

```markdown
<!-- Basic image -->
![Cleat Name](assets/images/cleats/cleat1.jpg)

<!-- Image with custom size -->
<img src="assets/images/cleats/cleat1.jpg" alt="Futuristic Cleat" width="300">

<!-- Image with styling -->
<img src="assets/images/cleats/cleat1.jpg" alt="Futuristic Cleat" 
     style="width: 100%; max-width: 500px; border-radius: 8px;">

<!-- Gallery image -->
![Gallery Item](assets/images/gallery/gallery1.jpg)
```

### In HTML (for advanced styling):

```html
<div class="image-container">
  <img src="assets/images/cleats/cleat1.jpg" alt="Futuristic Cleat">
  <p class="image-caption">Revolutionary soccer cleat design</p>
</div>
```

## 📏 **Image Optimization Tips**

### Recommended Sizes:
- **Gallery images**: 800x600px or 1200x800px
- **Blog images**: 800x400px
- **Icons**: 64x64px or 128x128px
- **Hero images**: 1920x1080px

### File Formats:
- **JPEG**: Best for photos
- **PNG**: Best for graphics with transparency
- **WebP**: Best for web (smaller file sizes)
- **SVG**: Best for icons and logos

### File Size:
- Keep images under **500KB** for fast loading
- Use tools like [TinyPNG](https://tinypng.com/) to compress

## 🎯 **Specific Use Cases**

### 1. **Soccer Cleat Gallery**
```
Upload to: mkdocs/assets/images/cleats/
Use in: mkdocs/index.md (gallery section)
```

### 2. **Blog Post Images**
```
Upload to: mkdocs/assets/images/blog/
Use in: mkdocs/blog.md
```

### 3. **Tutorial Screenshots**
```
Upload to: mkdocs/assets/images/tutorials/
Use in: mkdocs/tutorials.md
```

### 4. **Profile/Logo Images**
```
Upload to: mkdocs/assets/images/icons/
Use in: mkdocs/contact.md or header
```

## 🔗 **External Image Options**

You can also use external images:

```markdown
<!-- From Pixabay -->
![Soccer Cleat](https://cdn.pixabay.com/photo/2023/01/15/soccer-cleat.jpg)

<!-- From other websites -->
![External Image](https://example.com/image.jpg)
```

**Note**: External images may load slower and could break if the source changes.

## 🛠️ **Advanced: Custom CSS for Images**

Add to `mkdocs/assets/css/custom.css`:

```css
/* Image styling */
img {
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* Gallery images */
.gallery img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
}

.gallery img:hover {
    transform: scale(1.05);
}

/* Responsive images */
.responsive-img {
    max-width: 100%;
    height: auto;
}
```

## 📱 **Mobile Optimization**

```markdown
<!-- Responsive image -->
<img src="assets/images/cleats/cleat1.jpg" 
     alt="Futuristic Cleat"
     style="width: 100%; max-width: 500px; height: auto;">
```

## 🚀 **Quick Upload Checklist**

- [ ] Choose the right folder (`cleats/`, `gallery/`, `blog/`, `icons/`)
- [ ] Optimize image size (< 500KB)
- [ ] Use descriptive filenames (`futuristic-cleat-1.jpg`)
- [ ] Add alt text for accessibility
- [ ] Test on mobile devices
- [ ] Commit changes with clear message

## 🎉 **Example: Adding a New Cleat Image**

1. **Upload**: `mkdocs/assets/images/cleats/nike-futuristic.jpg`
2. **Use in content**:
   ```markdown
   ![Nike Futuristic Cleat](assets/images/cleats/nike-futuristic.jpg)
   ```
3. **Commit**: "Add Nike futuristic cleat image"
4. **Result**: Image appears on your website automatically!

---

**Need help?** Check the [main editing guide](EDITING_GUIDE.md) or edit images directly in your browser at [GitHub](https://github.com/thekickvault/thekickvault.github.io)!
