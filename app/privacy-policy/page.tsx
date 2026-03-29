import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Elyssa Energy",
  description: "Learn how Elyssa Energy collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-32 md:pt-48 pb-20 px-6 font-sans bg-texture">
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
          <span className="text-white/90 text-sm font-semibold">Legal</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.05] mb-16">
          Privacy Policy
        </h1>

        <div className="space-y-12 text-white/70 text-lg md:text-xl font-light leading-relaxed">
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">1. Introduction</h2>
            <p>
              At Elyssa Energy, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">2. Information We Collect</h2>
            <p className="mb-4">
              We may collect personal information that you provide to us directly, such as:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Name and contact information (email, phone number)</li>
              <li>Address and property details for solar estimates</li>
              <li>Energy consumption data</li>
              <li>Communications and inquiries</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">3. How We Use Your Information</h2>
            <p className="mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Provide personalized solar energy estimates</li>
              <li>Communicate with you regarding our services</li>
              <li>Improve our website and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. If you have any questions or requests regarding your data, please contact us at support@elyssaenergy.com.
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
