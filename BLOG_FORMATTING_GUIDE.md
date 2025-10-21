# Blog Post Formatting Guide

## Yes! You CAN Use Tailwind Classes in Your Blog Content

You can add Tailwind classes directly to HTML tags in your blog posts for custom styling.

## Enhanced Formatting Examples

### Basic Text Formatting

```html
<!-- Regular paragraph -->
<p>This is a normal paragraph.</p>

<!-- Highlighted text with background -->
<p class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border-l-4 border-indigo-600">
  This is an important callout box with a colored background!
</p>

<!-- Large intro paragraph -->
<p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
  This is a larger intro paragraph that stands out.
</p>
```

### Styled Lists

```html
<!-- Checklist style -->
<ul class="space-y-2">
  <li class="flex items-start">
    <span class="text-green-600 mr-2">✓</span>
    <span>Completed item</span>
  </li>
  <li class="flex items-start">
    <span class="text-green-600 mr-2">✓</span>
    <span>Another completed item</span>
  </li>
</ul>

<!-- Numbered list with custom styling -->
<ol class="space-y-3 list-decimal list-inside">
  <li class="text-lg font-medium text-gray-900 dark:text-white">
    First important step
  </li>
  <li class="text-lg font-medium text-gray-900 dark:text-white">
    Second important step
  </li>
</ol>
```

### Callout Boxes

```html
<!-- Info Box -->
<div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
  <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Pro Tip</h3>
  <p class="text-blue-800 dark:text-blue-200">
    This is a helpful tip that stands out from the main content.
  </p>
</div>

<!-- Warning Box -->
<div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
  <h3 class="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">⚠️ Warning</h3>
  <p class="text-yellow-800 dark:text-yellow-200">
    Important warning or caution for readers.
  </p>
</div>

<!-- Success Box -->
<div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
  <h3 class="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">✅ Key Takeaway</h3>
  <p class="text-green-800 dark:text-green-200">
    Main point or conclusion to remember.
  </p>
</div>
```

### Comparison Tables

```html
<div class="overflow-x-auto my-8">
  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
    <thead class="bg-gray-50 dark:bg-gray-800">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Feature
        </th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Option A
        </th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Option B
        </th>
      </tr>
    </thead>
    <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
          Price
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
          $500/mo
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
          $750/mo
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### Quote Blocks

```html
<!-- Styled blockquote -->
<blockquote class="border-l-4 border-indigo-600 pl-6 py-4 my-6 italic text-xl text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 rounded-r-lg">
  "This is an inspiring quote that adds credibility to your content."
  <footer class="text-sm text-gray-600 dark:text-gray-400 mt-2 not-italic">
    — Client Name, Business Owner
  </footer>
</blockquote>
```

### Buttons and CTAs

```html
<!-- Inline CTA button -->
<div class="my-8 text-center">
  <a href="/contact" class="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
    Schedule Your Free Consultation
  </a>
</div>

<!-- Button with description -->
<div class="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-xl my-8 text-center">
  <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    Ready to Get Started?
  </h3>
  <p class="text-gray-600 dark:text-gray-400 mb-6">
    Let's discuss how we can help your business succeed.
  </p>
  <a href="/contact" class="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
    Contact Us Today
  </a>
</div>
```

### Image Placeholders (for future use)

```html
<!-- When you add images -->
<div class="my-8">
  <img 
    src="/blog/image-name.jpg" 
    alt="Descriptive alt text" 
    class="rounded-lg shadow-lg w-full"
  />
  <p class="text-sm text-gray-500 dark:text-gray-400 text-center mt-2 italic">
    Image caption goes here
  </p>
</div>
```

### Step-by-Step Instructions

```html
<div class="space-y-6 my-8">
  <div class="flex gap-4">
    <div class="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
      1
    </div>
    <div>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">First Step</h3>
      <p class="text-gray-600 dark:text-gray-400">Description of the first step.</p>
    </div>
  </div>
  
  <div class="flex gap-4">
    <div class="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
      2
    </div>
    <div>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Second Step</h3>
      <p class="text-gray-600 dark:text-gray-400">Description of the second step.</p>
    </div>
  </div>
</div>
```

### Stats or Numbers Highlight

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

## Complete Example Blog Post with Enhanced Formatting

```typescript
{
  slug: "example-formatted-post",
  title: "Example Blog Post with Beautiful Formatting",
  excerpt: "See how to use Tailwind classes to make your blog posts visually stunning.",
  date: "2025-01-20",
  category: "Examples",
  author: "Darren Cardwell",
  keywords: ["example", "formatting", "blog"],
  content: `
    <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
      This is a large intro paragraph that grabs attention and sets the tone for the article.
    </p>

    <h2>Main Section Heading</h2>
    <p>Regular paragraph text goes here with normal styling.</p>

    <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
      <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Pro Tip</h3>
      <p class="text-blue-800 dark:text-blue-200">
        This is a helpful tip that stands out from the main content.
      </p>
    </div>

    <h3>Subsection with List</h3>
    <ul class="space-y-2">
      <li class="flex items-start">
        <span class="text-green-600 mr-2">✓</span>
        <span>First benefit with a checkmark</span>
      </li>
      <li class="flex items-start">
        <span class="text-green-600 mr-2">✓</span>
        <span>Second benefit with a checkmark</span>
      </li>
    </ul>

    <div class="my-8 text-center">
      <a href="/contact" class="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
        Get Started Today
      </a>
    </div>
  `
}
```

## Tips for Using Tailwind in Blog Posts

1. **Dark Mode**: Always include dark mode classes (e.g., `dark:bg-gray-800`)
2. **Spacing**: Use `my-6` or `my-8` for vertical spacing between sections
3. **Consistency**: Use the same color scheme (indigo-600) throughout
4. **Responsive**: Use responsive classes like `md:grid-cols-3` for mobile-friendly layouts
5. **Accessibility**: Maintain good contrast ratios for text

## Quick Copy-Paste Components

Save these in a separate file for easy reuse:

- Info boxes (blue)
- Warning boxes (yellow)
- Success boxes (green)
- CTA buttons
- Step-by-step layouts
- Stats grids
- Quote blocks

Just copy and paste these HTML snippets directly into your blog post content in `/src/utils/blogData.ts`!
