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
    <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
      <div className="relative pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] sm:left-[calc(50%-30rem)] sm:w-288.75 opacity-20"
          />
        </div>
      </div>
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Bookkeeping Tips & Resources
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Expert advice, QuickBooks tips, and financial insights to help your business thrive.
        </p>

        <div className="mt-16 space-y-16 border-t border-gray-700 pt-10">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex max-w-xl flex-col items-start"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-gray-400">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span className="relative z-10 rounded-full bg-indigo-900/20 px-3 py-1.5 font-medium text-indigo-400">
                  {post.category}
                </span>
              </div>
              <div className="group relative">
                <h2 className="mt-3 text-2xl font-semibold leading-6 text-white group-hover:text-indigo-400">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold leading-6 text-indigo-400 hover:text-indigo-500"
                >
                  Read more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-gray-700 pt-10">
          <p className="text-center text-gray-400">
            More articles coming soon! Check back to stay updated.
          </p>
        </div>
      </div>
    </div>
  );
}
