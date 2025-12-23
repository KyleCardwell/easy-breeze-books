export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  keywords: string[];
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "bookkeeping-costs-utah",
    title: "How Much Does Bookkeeping Cost in Utah?",
    excerpt:
      "Understanding bookkeeping costs and what you should expect to pay for professional services in Utah.",
    date: "2025-08-28",
    category: "Pricing",
    author: "Darren Cardwell",
    keywords: [
      "bookkeeping costs Utah",
      "bookkeeping prices Herriman",
      "how much does bookkeeping cost",
      "Utah bookkeeper rates",
      "affordable bookkeeping services",
    ],
    content: `
      <p class="text-xl text-gray-300 leading-relaxed mb-6">
        If you&apos;re a small business owner in Utah, you&apos;ve probably wondered: "How much should I budget for bookkeeping?" The answer depends on several factors, but I&apos;ll break down what you can expect to pay and what influences the cost.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">Average Bookkeeping Costs</h2>
      <p>Whether you&apos;re in Utah (Herriman, Salt Lake City area) or anywhere nationwide, professional bookkeeping services typically range from:</p>
      
      <div class="bg-indigo-900/20 p-6 rounded-lg my-6 space-y-3">
        <div class="flex items-start gap-3">
          <span class="text-2xl">💰</span>
          <div>
            <div class="font-bold text-indigo-100">$300-$500/month</div>
            <div class="text-indigo-200">Basic bookkeeping for small businesses with simple transactions</div>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-2xl">💼</span>
          <div>
            <div class="font-bold text-indigo-100">$500-$1,000/month</div>
            <div class="text-indigo-200">Standard bookkeeping for businesses with moderate complexity</div>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-2xl">🏢</span>
          <div>
            <div class="font-bold text-indigo-100">$1,000-$2,500/month</div>
            <div class="text-indigo-200">Comprehensive services for larger businesses or complex needs</div>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-white mb-6">What Affects Bookkeeping Costs?</h2>

      <div class="space-y-6 my-8">
  <div class="flex gap-4">
    <div class="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
      1
    </div>
    <div>
      <h3 class="text-lg font-semibold text-white mb-2">Transaction Volume</h3>
      <p class="text-gray-400">The more transactions your business has each month, the more time it takes to categorize and reconcile them. A business with 50 transactions will cost less than one with 500.</p>
    </div>
  </div>
</div>
      
      <div class="space-y-6 my-8">
  <div class="flex gap-4">
    <div class="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
      2
    </div>
    <div>
      <h3 class="text-lg font-semibold text-white mb-2">Complexity of Your Business</h3>
      <p class="text-gray-400">Factors that increase complexity (and cost) include:</p>
    </div>
    </div>
    <div class="pl-14">
    <ul class="space-y-2 my-4">
      <li class="flex items-start gap-2">
        <span class="text-green-500 mt-1">✓</span>
        <div>Multiple bank accounts or credit cards</div>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-green-500 mt-1">✓</span>
        <div>Inventory management</div>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-green-500 mt-1">✓</span>
        <div>Job costing requirements</div>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-green-500 mt-1">✓</span>
        <div>Multiple revenue streams</div>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-green-500 mt-1">✓</span>
        <div>Sales tax in multiple states</div>
      </li>
    </ul>
</div>
</div>


      <div class="space-y-6 my-8">
  <div class="flex gap-4">
    <div class="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
      3
    </div>
    <div>
      <h3 class="text-lg font-semibold text-white mb-2">Services Included</h3>
      <p class="text-gray-400">Basic bookkeeping might include just transaction categorization and reconciliation, while comprehensive services could include:</p>
    </div>
  </div>
  <div class="pl-14">
    <ul class="space-y-2 my-4">
      <li class="flex items-start gap-2">
        <span class="text-green-500 mt-1">✓</span>
        <div>Payroll processing</div>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-green-500 mt-1">✓</span>
        <div>Accounts payable/receivable management</div>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-green-500 mt-1">✓</span>
        <div>Financial statement preparation</div>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-green-500 mt-1">✓</span>
        <div>Sales tax filing</div>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-green-500 mt-1">✓</span>
        <div>Financial analysis and consulting</div>
      </li>
    </ul>
</div>
</div>

      <h2 class="text-2xl font-bold text-white mb-6">DIY vs. Professional Bookkeeping</h2>
      <p>While DIY bookkeeping might seem cheaper, consider the hidden costs:</p>
      <ul class="space-y-2 my-4">
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">⚠️</span>
          <div><strong>Your time:</strong> What&apos;s your hourly rate worth? If you spend 10 hours/month on bookkeeping, that&apos;s significant.</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">⚠️</span>
          <div><strong>Errors:</strong> Mistakes can lead to tax penalties, missed deductions, or poor business decisions.</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">⚠️</span>
          <div><strong>Opportunity cost:</strong> Time spent on bookkeeping is time not spent growing your business.</div>
        </li>
      </ul>

      <div class="bg-blue-900/20 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
        <h3 class="text-lg font-semibold text-blue-100 mb-2">💡 Pro Tip</h3>
        <p class="text-blue-200">
          Calculate your true DIY cost: (Hours spent per month × Your hourly rate) + Risk of errors. Many business owners find that professional bookkeeping actually <em>saves</em> them money!
        </p>
      </div>

      <h2 class="text-2xl font-bold text-white mb-6">What You Get with Breeze Bookkeeping</h2>
      <p>At Breeze Bookkeeping, we serve clients in Utah and nationwide with transparent, affordable pricing tailored to your specific needs. As a Certified QuickBooks ProAdvisor, I ensure your books are accurate, up-to-date, and optimized for tax savings.</p>
      <br />
      <p>Our services include:</p>

      <ul class="space-y-2 my-4">
  <li class="flex items-start gap-2">
    <span class="text-green-500 mt-1">✓</span>
    <div>Monthly transaction categorization and reconciliation</div>
  </li>
  <li class="flex items-start gap-2">
    <span class="text-green-500 mt-1">✓</span>
    <div>Financial statement preparation</div>
  </li>
  <li class="flex items-start gap-2">
    <span class="text-green-500 mt-1">✓</span>
    <div>QuickBooks setup and optimization</div>
  </li>
  <li class="flex items-start gap-2">
    <span class="text-green-500 mt-1">✓</span>
    <div>Ongoing support and consulting</div>
  </li>
  <li class="flex items-start gap-2">
    <span class="text-green-500 mt-1">✓</span>
    <div>Tax-ready financials</div>
  </li>
</ul>
      
      <h2 class="text-2xl font-bold text-white mb-6">Is Professional Bookkeeping Worth It?</h2>
      <p>Most business owners find that professional bookkeeping pays for itself through:</p>

      <ul class="space-y-2 my-4">
  <li class="flex items-start gap-2">
    <span class="text-green-500 mt-1">✓</span>
    <div>Time saved (10-20 hours per month)</div>
  </li>
  <li class="flex items-start gap-2">
    <span class="text-green-500 mt-1">✓</span>
    <div>Tax deductions you might have missed</div>
  </li>
  <li class="flex items-start gap-2">
    <span class="text-green-500 mt-1">✓</span>
    <div>Avoiding costly errors and penalties</div>
  </li>
  <li class="flex items-start gap-2">
    <span class="text-green-500 mt-1">✓</span>
    <div>Better financial insights for decision-making</div>
  </li>
</ul>

      <h2 class="text-2xl font-bold text-white mb-6">Is Professional Bookkeeping Worth It?</h2>
      <p>Most business owners find that professional bookkeeping pays for itself through:</p>

      <ul class="space-y-2 my-4">
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Time saved (10-20 hours per month)</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Tax deductions you might have missed</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Avoiding costly errors and penalties</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Better financial insights for decision-making</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Peace of mind knowing your books are accurate</div>
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-white mb-6">Get a Custom Quote</h2>
      <p>Every business is unique, and so are its bookkeeping needs. I offer free consultations to discuss your specific situation and provide a transparent quote with no hidden fees.</p>
    `,
  },
  {
    slug: "bookkeeping-mistakes",
    title: "5 Common Bookkeeping Mistakes Small Businesses Make",
    excerpt:
      "Avoid these costly bookkeeping errors that could be hurting your business finances and learn how to fix them.",
    date: "2025-09-16",
    category: "Bokkeeping Tips",
    author: "Darren Cardwell",
    keywords: [
      "bookkeeping mistakes",
      "bookkeeping errors",
      "bookkeeping tips",
      "bookkeeping best practices",
      "avoid bookkeeping problems",
    ],
    content: `
      <p class="text-xl text-gray-300 leading-relaxed mb-6">
        As a Certified QuickBooks ProAdvisor serving Utah and nationwide, I&apos;ve seen countless businesses make the same mistakes. These errors can lead to inaccurate financial reports, tax problems, and poor business decisions. Here are the top 5 mistakes and how to avoid them.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">1. Not Reconciling Bank Accounts Regularly</h2>
      
      <div class="bg-red-900/20 border-l-4 border-red-600 p-6 my-6 rounded-r-lg">
        <h3 class="text-lg font-semibold text-red-100 mb-2">❌ The Mistake</h3>
        <p class="text-red-200">
          Many business owners skip monthly bank reconciliations or do them irregularly.
        </p>
      </div>
      
      <p class="font-semibold text-white mb-2">Why It&apos;s Costly:</p>
      <ul class="space-y-2 my-4">
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">⚠️</span>
          <div>Missed or duplicate transactions go unnoticed</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">⚠️</span>
          <div>Bank errors aren&apos;t caught</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">⚠️</span>
          <div>Financial reports are inaccurate</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">⚠️</span>
          <div>Tax preparation becomes a nightmare</div>
        </li>
      </ul>

      <div class="bg-green-900/20 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
        <h3 class="text-lg font-semibold text-green-100 mb-2">✅ The Fix</h3>
        <p class="text-green-200">
          Reconcile every bank account and credit card monthly. Set a recurring calendar reminder. If you&apos;re behind, catch up immediately—your future self will thank you.
        </p>
      </div>

      <h2 class="text-2xl font-bold text-white mb-6">2. Using the Wrong Account Types</h2>
      
      <div class="bg-red-900/20 border-l-4 border-red-600 p-6 my-6 rounded-r-lg">
        <h3 class="text-lg font-semibold text-red-100 mb-2">❌ The Mistake</h3>
        <p class="text-red-200">
          Setting up accounts with incorrect types (e.g., using an expense account instead of cost of goods sold).
        </p>
      </div>
      
      <p class="font-semibold text-white mb-2">Why It&apos;s Costly:</p>
      <ul class="space-y-2 my-4">
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">⚠️</span>
          <div>Financial statements are incorrect</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">⚠️</span>
          <div>Tax returns may be filed incorrectly</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">⚠️</span>
          <div>You can&apos;t accurately track profitability</div>
        </li>
      </ul>

      <div class="bg-green-900/20 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
        <h3 class="text-lg font-semibold text-green-100 mb-2">✅ The Fix</h3>
        <p class="text-green-200">
          Review your chart of accounts with a Certified QuickBooks ProAdvisor. Make sure each account is the correct type and properly categorized.
        </p>
      </div>

      <h2 class="text-2xl font-bold text-white mb-6">3. Mixing Personal and Business Expenses</h2>
      
      <div class="bg-red-900/20 border-l-4 border-red-600 p-6 my-6 rounded-r-lg">
        <h3 class="text-lg font-semibold text-red-100 mb-2">❌ The Mistake</h3>
        <p class="text-red-200">
          Recording personal expenses in your business bookkeeping file or using your business account for personal purchases.
        </p>
      </div>
      
      <p class="font-semibold text-white mb-2">Why It&apos;s Costly:</p>
      <ul class="space-y-2 my-4">
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">⚠️</span>
          <div>Inflates business expenses artificially</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">⚠️</span>
          <div>Creates tax complications</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">⚠️</span>
          <div>Makes it hard to understand true business profitability</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">⚠️</span>
          <div>Can trigger IRS audits</div>
        </li>
      </ul>

      <div class="bg-green-900/20 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
        <h3 class="text-lg font-semibold text-green-100 mb-2">✅ The Fix</h3>
        <p class="text-green-200">
          Keep personal and business finances completely separate. If you accidentally use the business account for personal expenses, code them to Owner&apos;s Draw or Distributions, not business expenses.
        </p>
      </div>

      <h2 class="text-2xl font-bold text-white mb-6">4. Not Backing Up Your Data</h2>
      
      <div class="bg-red-900/20 border-l-4 border-red-600 p-6 my-6 rounded-r-lg">
        <h3 class="text-lg font-semibold text-red-100 mb-2">❌ The Mistake</h3>
        <p class="text-red-200">
          Assuming your accounting software automatically protects all your data or not backing up your accounting software.
        </p>
      </div>
      
      <p class="font-semibold text-white mb-2">Why It&apos;s Costly:</p>
      <ul class="space-y-2 my-4">
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">⚠️</span>
          <div>Data loss from technical issues</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">⚠️</span>
          <div>No way to recover from accidental deletions</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">⚠️</span>
          <div>Business disruption if you can&apos;t access your data</div>
        </li>
      </ul>

      <div class="bg-green-900/20 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
        <h3 class="text-lg font-semibold text-green-100 mb-2">✅ The Fix</h3>
        <p class="text-green-200">
          For desktop software, create monthly backups stored in multiple locations. For online applications, export reports regularly and consider using a third-party backup service.
        </p>
      </div>

      <h2 class="text-2xl font-bold text-white mb-6">5. Ignoring Undeposited Funds</h2>
      
      <div class="bg-red-900/20 border-l-4 border-red-600 p-6 my-6 rounded-r-lg">
        <h3 class="text-lg font-semibold text-red-100 mb-2">❌ The Mistake</h3>
        <p class="text-red-200">
          Letting payments pile up in the Undeposited Funds account without properly depositing them.
        </p>
      </div>
      
      <p class="font-semibold text-white mb-2">Why It&apos;s Costly:</p>
      <ul class="space-y-2 my-4">
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">⚠️</span>
          <div>Bank reconciliations become impossible</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">⚠️</span>
          <div>Cash flow reports are inaccurate</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">⚠️</span>
          <div>You can&apos;t track which payments have actually been deposited</div>
        </li>
      </ul>

      <div class="bg-green-900/20 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
        <h3 class="text-lg font-semibold text-green-100 mb-2">✅ The Fix</h3>
        <p class="text-green-200">
          Clear out Undeposited Funds regularly by creating bank deposits that match your actual bank deposits. Group payments together exactly as they appear on your bank statement.
        </p>
      </div>

      <div class="bg-blue-900/20 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
        <h3 class="text-lg font-semibold text-blue-100 mb-2">💡 Bonus Tip: Not Using Classes or Locations</h3>
        <p class="text-blue-200">
          If you have multiple profit centers, departments, or locations, use accounting software class or location tracking features. This allows you to see profitability by segment and make better business decisions.
        </p>
      </div>
    `,
  },
  {
    slug: "choosing-bookkeeper",
    title: "How to Choose the Right Bookkeeper for Your Business",
    excerpt:
      "Essential factors to consider when hiring a bookkeeper in Herriman or Salt Lake City to ensure you get quality service.",
    date: "2025-10-09",
    category: "Business Tips",
    author: "Darren Cardwell",
    keywords: [
      "choosing a bookkeeper",
      "hire bookkeeper Utah",
      "find bookkeeper Herriman",
      "best bookkeeper Salt Lake City",
      "bookkeeper qualifications",
    ],
    content: `
      <p class="text-xl text-gray-300 leading-relaxed mb-6">
        Choosing a bookkeeper is one of the most important decisions you&apos;ll make for your business. The right bookkeeper doesn&apos;t just record transactions—they become a trusted partner who helps you understand your finances and make better business decisions.
      </p>

      <p>Here&apos;s what to look for when hiring a bookkeeper, whether you&apos;re in Utah or anywhere nationwide.</p>

      <h2 class="text-2xl font-bold text-white mb-6 mt-4">1. Certifications and Qualifications</h2>
      
      <h3 class="text-xl font-semibold text-white mb-3">Certified QuickBooks ProAdvisor</h3>
      <p>If you use QuickBooks software (and most small businesses do), look for a <strong>Certified QuickBooks ProAdvisor</strong>. This certification means the bookkeeper has:</p>
      <ul class="space-y-2 my-4">
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Passed rigorous QuickBooks exams</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Stays current with annual recertification</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Has access to advanced QuickBooks support</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Understands best practices and advanced features</div>
        </li>
      </ul>

      <h3 class="text-xl font-semibold text-white mb-3">Other Valuable Certifications</h3>
      <ul class="space-y-2 my-4">
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div><strong>Certified Bookkeeper (CB)</strong> from the American Institute of Professional Bookkeepers</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div><strong>Certified Public Bookkeeper (CPB)</strong> from the National Association of Certified Public Bookkeepers</div>
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-white mb-6">2. Industry Experience</h2>
      <p>Every industry has unique bookkeeping needs:</p>
      <ul class="space-y-2 my-4">
        <li class="flex items-start gap-2">
          <span class="text-indigo-400 mt-1">🔨</span>
          <div><strong>Contractors:</strong> Need job costing and progress billing</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-indigo-400 mt-1">🛒</span>
          <div><strong>Retail:</strong> Requires inventory management</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-indigo-400 mt-1">💼</span>
          <div><strong>Service businesses:</strong> Focus on time tracking and project profitability</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-indigo-400 mt-1">🛍️</span>
          <div><strong>E-commerce:</strong> Needs multi-channel sales reconciliation</div>
        </li>
      </ul>

      <div class="bg-blue-900/20 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
        <h3 class="text-lg font-semibold text-blue-100 mb-2">💡 Pro Tip</h3>
        <p class="text-blue-200">
          Ask potential bookkeepers about their experience with businesses like yours. Industry-specific knowledge can save you time and money.
        </p>
      </div>

      <h2 class="text-2xl font-bold text-white mb-6">3. Services Offered</h2>
      <p>Make sure the bookkeeper offers the services you need:</p>

      <h3 class="text-xl font-semibold text-white mb-3">Basic Services</h3>
      <ul class="space-y-2 my-4">
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Transaction categorization</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Bank and credit card reconciliation</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Financial statement preparation</div>
        </li>
      </ul>

      <h3 class="text-xl font-semibold text-white mb-3">Advanced Services</h3>
      <ul class="space-y-2 my-4">
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Payroll processing</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Accounts payable/receivable management</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Sales tax filing</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Financial analysis and consulting</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>QuickBooks setup and training</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Tax preparation coordination</div>
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-white mb-6">4. Technology and Tools</h2>
      <p>A modern bookkeeper should be comfortable with:</p>
      <ul class="space-y-2 my-4">
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div><strong>Cloud-based accounting:</strong> QuickBooks, Xero, etc.</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div><strong>Receipt management:</strong> Dext, Hubdoc, Receipt Bank</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div><strong>Bill pay:</strong> Bill.com, Melio</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div><strong>Time tracking:</strong> TSheets, Harvest</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div><strong>Secure communication:</strong> Encrypted file sharing and messaging</div>
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-white mb-6">5. Communication Style</h2>
      <p>Your bookkeeper should:</p>
      <ul class="space-y-2 my-4">
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Explain financial concepts in plain English</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Respond to questions promptly</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Proactively alert you to issues</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Be available for regular check-ins</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Provide clear, understandable reports</div>
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-white mb-6">6. Pricing Structure</h2>
      <p>Bookkeepers typically charge in one of three ways:</p>

      <div class="bg-indigo-900/20 p-6 rounded-lg my-6 space-y-4">
        <div>
          <h3 class="text-lg font-semibold text-indigo-100">Hourly Rates ($50-$150/hour)</h3>
          <p class="text-indigo-200 mt-2"><strong>Pros:</strong> Pay only for time used<br>
          <strong>Cons:</strong> Unpredictable monthly costs</p>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-indigo-100">Monthly Retainer ($300-$2,500/month)</h3>
          <p class="text-indigo-200 mt-2"><strong>Pros:</strong> Predictable costs, often includes unlimited support<br>
          <strong>Cons:</strong> May pay for unused time in slow months</p>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-indigo-100">Per-Transaction ($1-$3 per transaction)</h3>
          <p class="text-indigo-200 mt-2"><strong>Pros:</strong> Scales with business size<br>
          <strong>Cons:</strong> Can get expensive for high-volume businesses</p>
        </div>
      </div>

      <div class="bg-yellow-900/20 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
        <h3 class="text-lg font-semibold text-yellow-100 mb-2">⚠️ Red Flag</h3>
        <p class="text-yellow-200">
          Be wary of bookkeepers who won&apos;t provide clear pricing or seem evasive about costs.
        </p>
      </div>

      <h2 class="text-2xl font-bold text-white mb-6">7. References and Reviews</h2>
      <p>Always check:</p>
      <ul class="space-y-2 my-4">
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Google reviews</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Testimonials on their website</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>References from current clients</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Better Business Bureau rating</div>
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-white mb-6">8. Local vs. Virtual</h2>
      <p>With cloud technology, your bookkeeper doesn&apos;t need to be local. At Breeze Bookkeeping, we serve both local Utah clients and businesses nationwide. Here are the benefits of each:</p>

      <h3 class="text-xl font-semibold text-white mb-3">Local Service (Utah - Herriman/Salt Lake City)</h3>
      <ul class="space-y-2 my-4">
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Face-to-face meetings available</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Deep understanding of Utah tax requirements</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Can pick up documents if needed</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Familiar with local business community</div>
        </li>
      </ul>

      <h3 class="text-xl font-semibold text-white mb-3">Nationwide Virtual Service</h3>
      <ul class="space-y-2 my-4">
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Same expert service regardless of location</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Flexible scheduling across time zones</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>Secure cloud-based collaboration</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div>All communication via video, phone, or email</div>
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-white mb-6">Questions to Ask Before Hiring</h2>
      <ol class="space-y-2 my-4 list-decimal list-inside">
        <li class="text-gray-300">What accounting software do you specialize in?</li>
        <li class="text-gray-300">Do you have experience with businesses in my industry?</li>
        <li class="text-gray-300">What&apos;s your typical response time for questions?</li>
        <li class="text-gray-300">How do you handle tax season?</li>
        <li class="text-gray-300">What reports will I receive and how often?</li>
        <li class="text-gray-300">Do you carry errors and omissions insurance?</li>
        <li class="text-gray-300">What happens if you&apos;re sick or on vacation?</li>
        <li class="text-gray-300">How do you stay current with tax law changes?</li>
      </ol>

      <h2 class="text-2xl font-bold text-white mb-6">Red Flags to Watch For</h2>
      <ul class="space-y-2 my-4">
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">🚩</span>
          <div>Unwilling to provide references</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">🚩</span>
          <div>No professional certifications or ongoing education</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">🚩</span>
          <div>Vague about services or pricing</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">🚩</span>
          <div>Promises unrealistic tax savings</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">🚩</span>
          <div>Poor communication during initial contact</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-red-500 mt-1">🚩</span>
          <div>No written service agreement</div>
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-white mb-6">Why Choose Breeze Bookkeeping?</h2>
      <p>At Breeze Bookkeeping, I bring:</p>
      <ul class="space-y-2 my-4">
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div><strong>Certified QuickBooks ProAdvisor</strong></div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div><strong>Transparent pricing</strong> with no hidden fees</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div><strong>Responsive communication</strong>—usually within 24 hours</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div><strong>Cloud-based systems</strong> for secure, convenient access</div>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✓</span>
          <div><strong>Proven track record</strong> with Utah businesses and nationwide!</div>
        </li>
      </ul>
    `,
  },
];
