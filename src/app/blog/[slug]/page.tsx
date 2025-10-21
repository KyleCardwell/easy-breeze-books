import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { type BlogPost, blogPosts } from "@/utils/blogData";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p: BlogPost) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `https://www.easybreezebooks.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.easybreezebooks.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post: BlogPost) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts.find((p: BlogPost) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Back to blog link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 mb-8"
        >
          ← Back to Blog
        </Link>

        {/* Article Header */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-8">
            <div className="flex items-center gap-x-4 text-sm mb-4">
              <time dateTime={post.date} className="text-gray-500 dark:text-gray-400">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="relative z-10 rounded-full bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1.5 font-medium text-indigo-600 dark:text-indigo-400">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {post.excerpt}
            </p>
          </div>

          {/* Article Content */}
          <div
            className="mt-8 text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Call to Action */}
        <div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-10">
          <div className="rounded-2xl bg-indigo-600 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Need Help with Your Bookkeeping?
            </h2>
            <p className="text-lg text-indigo-100 mb-6">
              Let&apos;s discuss how we can help your business with professional bookkeeping services.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-md bg-white px-6 py-3 text-base font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            More Articles
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts
              .filter((p: BlogPost) => p.slug !== post.slug)
              .slice(0, 2)
              .map((relatedPost: BlogPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:border-indigo-600 dark:hover:border-indigo-400 transition-colors">
                    <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                      {relatedPost.category}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {relatedPost.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
