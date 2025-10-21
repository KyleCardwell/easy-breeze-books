import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/utils/blogData";

export const metadata: Metadata = {
  title: "Bookkeeping Tips & Resources",
  description: "Expert bookkeeping advice, QuickBooks tips, and financial insights for small business owners in Utah and nationwide.",
  keywords: [
    "bookkeeping tips",
    "QuickBooks tutorials",
    "small business finance",
    "accounting advice Utah",
    "bookkeeping best practices"
  ],
  alternates: {
    canonical: "https://www.easybreezebooks.com/blog"
  },
  openGraph: {
    title: "Bookkeeping Tips & Resources | Breeze Bookkeeping",
    description: "Expert bookkeeping advice and QuickBooks tips for small business owners.",
    url: "https://www.easybreezebooks.com/blog"
  }
};

export default function Blog() {
  return (
    <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Bookkeeping Tips & Resources
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Expert advice, QuickBooks tips, and financial insights to help your business thrive.
        </p>

        <div className="mt-16 space-y-16 border-t border-gray-200 dark:border-gray-700 pt-10">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex max-w-xl flex-col items-start"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span className="relative z-10 rounded-full bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1.5 font-medium text-indigo-600 dark:text-indigo-400">
                  {post.category}
                </span>
              </div>
              <div className="group relative">
                <h2 className="mt-3 text-2xl font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                >
                  Read more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-10">
          <p className="text-center text-gray-600 dark:text-gray-400">
            More articles coming soon! Subscribe to stay updated.
          </p>
        </div>
      </div>
    </div>
  );
}
