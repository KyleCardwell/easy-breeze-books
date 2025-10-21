# How to Add New Blog Posts

## Quick Steps

1. Open `/src/utils/blogData.ts`
2. Add a new blog post object to the `blogPosts` array
3. Save the file
4. The new post will automatically appear on the blog page and be clickable!

## Blog Post Template

```typescript
{
  slug: "your-url-friendly-title",  // Used in the URL
  title: "Your Blog Post Title",
  excerpt: "A short 1-2 sentence summary that appears on the blog listing page.",
  date: "2025-01-20",  // Format: YYYY-MM-DD
  category: "Category Name",  // e.g., "QuickBooks Tips", "Business Tips", "Pricing"
  author: "Darren Cardwell",
  keywords: [
    "keyword one",
    "keyword two",
    "keyword three"
  ],
  content: `
    <h2>Your First Heading</h2>
    <p>Your paragraph text goes here.</p>

    <h3>A Subheading</h3>
    <p>More content...</p>

    <ul>
      <li>Bullet point one</li>
      <li>Bullet point two</li>
    </ul>

    <h2>Another Section</h2>
    <p>More content with <strong>bold text</strong> and <em>italic text</em>.</p>

    <p>Add links like this: <a href="/contact">contact us</a></p>
  `
}
```

## HTML Tags You Can Use in Content

- `<h2>` - Main headings
- `<h3>` - Subheadings
- `<p>` - Paragraphs
- `<ul>` and `<li>` - Bullet lists
- `<ol>` and `<li>` - Numbered lists
- `<strong>` - Bold text
- `<em>` - Italic text
- `<a href="/page">` - Links
- `<blockquote>` - Quotes

## Important Notes

1. **Slug**: Must be unique and URL-friendly (lowercase, hyphens instead of spaces)
2. **Keywords**: Include 3-5 keywords you want to rank for
3. **Content**: Use HTML tags, escape apostrophes with `&apos;`
4. **Date**: Use YYYY-MM-DD format
5. **Excerpt**: Keep it short and compelling (150-160 characters is ideal)

## Example: Adding a New Post

Open `/src/utils/blogData.ts` and add this to the `blogPosts` array:

```typescript
export const blogPosts: BlogPost[] = [
  // ... existing posts ...
  {
    slug: "tax-deductions-small-business",
    title: "Top 10 Tax Deductions for Small Businesses in Utah",
    excerpt: "Don't miss these valuable tax deductions that could save your Utah small business thousands of dollars.",
    date: "2025-01-20",
    category: "Tax Tips",
    author: "Darren Cardwell",
    keywords: [
      "tax deductions Utah",
      "small business tax tips",
      "Utah business deductions",
      "save on taxes",
      "business write-offs"
    ],
    content: `
      <h2>Maximize Your Tax Savings</h2>
      <p>As a small business owner in Utah, taking advantage of all available tax deductions can significantly reduce your tax burden. Here are the top 10 deductions you should know about.</p>

      <h2>1. Home Office Deduction</h2>
      <p>If you work from home, you can deduct a portion of your home expenses...</p>

      <!-- Add more content here -->
    `
  }
];
```

## SEO Best Practices

1. **Title**: Include your main keyword, keep under 60 characters
2. **Excerpt**: Include keywords, make it compelling
3. **Keywords**: Use specific, searchable terms
4. **Content**: 
   - Aim for 1,500+ words
   - Use H2 and H3 headings with keywords
   - Include internal links to your services/contact pages
   - Add external links to authoritative sources
5. **Call-to-Action**: End with a clear next step (already included automatically)

## After Adding a Post

1. Save the file
2. The post will automatically:
   - Appear on `/blog`
   - Be clickable and readable at `/blog/your-slug`
   - Be added to the sitemap
   - Have proper SEO metadata
3. Deploy your changes
4. Submit updated sitemap to Google Search Console

## Need Help?

If you need help formatting content or have questions, refer to the existing blog posts in `/src/utils/blogData.ts` as examples.
