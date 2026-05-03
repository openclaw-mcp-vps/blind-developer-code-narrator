export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Accessibility Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Audio Code Navigation for{" "}
          <span className="text-[#58a6ff]">Visually Impaired Developers</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Code Narrator is a browser extension that uses AST parsing and AI to deliver intelligent audio descriptions of code structure, diffs, and function relationships — directly through your screen reader.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Free Trial — $29/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
          <li className="flex items-center gap-2">
            <span className="text-[#58a6ff] font-bold">✓</span> Works with NVDA, JAWS &amp; VoiceOver
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#58a6ff] font-bold">✓</span> GitHub, GitLab &amp; VS Code Web
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#58a6ff] font-bold">✓</span> AI-powered natural language
          </li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$29</div>
          <p className="text-[#8b949e] text-sm mb-6">per month · cancel anytime</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Browser extension for Chrome &amp; Firefox",
              "AI narration of code diffs &amp; structure",
              "AST-based function relationship mapping",
              "Screen reader API integration",
              "Priority support &amp; updates"
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
                <span dangerouslySetInnerHTML={{ __html: feature }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started
          </a>
          <p className="text-xs text-[#8b949e] mt-4">14-day free trial · No credit card required</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which screen readers does Code Narrator support?</h3>
            <p className="text-[#8b949e] text-sm">Code Narrator integrates with NVDA, JAWS, and VoiceOver via standard screen reader APIs. It works alongside your existing accessibility setup without replacing it.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which coding platforms are supported?</h3>
            <p className="text-[#8b949e] text-sm">The extension currently supports GitHub, GitLab, Bitbucket, and VS Code for the Web. Support for additional platforms is added regularly based on user feedback.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can my employer purchase a team plan?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Team and enterprise plans are available with centralized billing and seat management. Contact us after signing up and we will set up your organization.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} Code Narrator. Built for accessibility.
      </footer>
    </main>
  );
}
