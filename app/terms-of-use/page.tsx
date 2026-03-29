import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use - Elyssa Energy",
  description: "Read our terms of use for using the Elyssa Energy website and services.",
};

export default function TermsOfUse() {
  return (
    <main className="overflow-x-hidden pt-32 md:pt-48 pb-20 px-6 font-sans bg-texture">
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
          <span className="text-white/90 text-sm font-semibold">Legal</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.05] mb-16">
          Terms of Use
        </h1>

        <div className="space-y-12 text-white/70 text-lg md:text-xl font-light leading-relaxed">
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">1. Agreement to Terms</h2>
            <p>
              By accessing our website and using our services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">2. Use of Services</h2>
            <p className="mb-4">
              You agree to use our website and services in accordance with all applicable laws and regulations. You are responsible for ensuring the accuracy of the information you provide to us.
            </p>
            <p>
              You may not use our services for any unauthorized or illegal purposes, including but not limited to, interfering with the operation of the website or attempting to gain unauthorized access to our systems.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of Elyssa Energy or its content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">4. Limitation of Liability</h2>
            <p>
              Elyssa Energy is not liable for any direct, indirect, incidental, or consequential damages resulting from the use of our services or the inability to access our website. We provide our services on an "as-is" and "as-available" basis.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">5. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to our website and services at any time, without notice, for any reason, including but not limited to, a breach of these terms.
            </p>
          </section>

          <section className="pt-8 border-t border-white/10">
            <p className="text-sm text-white/40">
              Last Updated: March 29, 2026
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
