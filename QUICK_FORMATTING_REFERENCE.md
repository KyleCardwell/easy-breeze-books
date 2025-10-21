# Quick Formatting Reference for Blog Posts

## Copy & Paste These Snippets

### 📦 Pricing/Feature Box (Like the one I just added)
```html
<div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg my-6 space-y-3">
  <div class="flex items-start gap-3">
    <span class="text-2xl">💰</span>
    <div>
      <div class="font-bold text-indigo-900 dark:text-indigo-100">Title</div>
      <div class="text-indigo-800 dark:text-indigo-200">Description</div>
    </div>
  </div>
</div>
```

### 💡 Pro Tip Box (Blue)
```html
<div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
  <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Pro Tip</h3>
  <p class="text-blue-800 dark:text-blue-200">
    Your helpful tip goes here.
  </p>
</div>
```

### ⚠️ Warning Box (Yellow)
```html
<div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
  <h3 class="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">⚠️ Important</h3>
  <p class="text-yellow-800 dark:text-yellow-200">
    Your warning message goes here.
  </p>
</div>
```

### ✅ Success/Key Takeaway Box (Green)
```html
<div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
  <h3 class="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">✅ Key Takeaway</h3>
  <p class="text-green-800 dark:text-green-200">
    Your main point goes here.
  </p>
</div>
```

### 📝 Checklist with Icons
```html
<ul class="space-y-2 my-4">
  <li class="flex items-start gap-2">
    <span class="text-green-500 mt-1">✓</span>
    <div>First item</div>
  </li>
  <li class="flex items-start gap-2">
    <span class="text-green-500 mt-1">✓</span>
    <div>Second item</div>
  </li>
</ul>
```

### 🎯 CTA Button Section (Like the one I just added)
```html
<div class="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-xl my-8 text-center">
  <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    Your Headline Here
  </h3>
  <p class="text-gray-600 dark:text-gray-400 mb-6">
    Your supporting text here.
  </p>
  <a href="/contact" class="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg">
    Button Text
  </a>
</div>
```

### 📊 Stats Grid
```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
  <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg text-center">
    <div class="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">10+</div>
    <div class="text-gray-600 dark:text-gray-400">Years Experience</div>
  </div>
  <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg text-center">
    <div class="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">100+</div>
    <div class="text-gray-600 dark:text-gray-400">Happy Clients</div>
  </div>
  <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg text-center">
    <div class="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">$1M+</div>
    <div class="text-gray-600 dark:text-gray-400">Saved in Taxes</div>
  </div>
</div>
```

### 📖 Large Intro Paragraph
```html
<p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
  Your compelling intro paragraph that grabs attention.
</p>
```

### 🔢 Numbered Steps
```html
<div class="space-y-6 my-8">
  <div class="flex gap-4">
    <div class="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
      1
    </div>
    <div>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Step Title</h3>
      <p class="text-gray-600 dark:text-gray-400">Step description.</p>
    </div>
  </div>
</div>
```

## Emoji Quick Reference

Use these emojis to make content more visual:

- 💰 Money/Pricing
- 💼 Business
- 🏢 Company/Enterprise
- ✓ Checkmark
- ⚠️ Warning
- 💡 Tip/Idea
- ✅ Success
- 📊 Stats/Data
- 📝 Checklist
- 🎯 Goal/Target
- 🔢 Numbers
- 📖 Reading/Content
- 🚀 Growth/Launch
- ⏰ Time
- 📞 Contact
- 📧 Email
- 🌟 Featured/Special

## How to Use

1. Copy the HTML snippet you want
2. Paste it into your blog post content in `/src/utils/blogData.ts`
3. Replace the placeholder text
4. Save the file
5. Done! The formatting will automatically apply

## Example: Before & After

### Before (Plain)
```html
<p>This is important information.</p>
```

### After (Styled)
```html
<div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
  <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Pro Tip</h3>
  <p class="text-blue-800 dark:text-blue-200">
    This is important information.
  </p>
</div>
```

Much better! 🎨
