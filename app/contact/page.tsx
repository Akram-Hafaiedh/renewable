import { FAQ } from "@/components/sections/FAQ";
import { Button } from "@/components/ui/Button";

export default function Contact() {
  return (
    <main className="overflow-x-hidden">
      {/* Contact Hero */}
      <section className="relative pt-48 pb-32 px-6 font-sans bg-texture">
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="text-white/90 text-sm font-semibold">Contact Us</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.05] mb-8 max-w-[12ch]">
              Let’s Talk About Solar
            </h1>
            <p className="text-white/60 text-xl font-light mb-12">
              Have questions about solar or want to see if your home qualifies?
            </p>
            
            <div className="p-10 border border-white/10 rounded-[32px] bg-white/5 backdrop-blur-sm shadow-xl">
              <h3 className="text-3xl font-bold mb-8 tracking-tight">Stop Renting Your Power.<br/>Start Owning It.</h3>
              <ul className="space-y-5 text-white/80 font-medium">
                <li className="flex items-center gap-4"><span className="text-primary">✔</span> Free custom estimates</li>
                <li className="flex items-center gap-4"><span className="text-primary">✔</span> Predictable energy bills</li>
                <li className="flex items-center gap-4"><span className="text-primary">✔</span> 25-Year system warranty</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white text-black p-10 md:p-14 rounded-[40px] shadow-2xl">
              <h2 className="text-3xl font-bold mb-8 tracking-tight">Send Us a Message</h2>
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-black/70">Full name</label>
                  <input type="text" className="w-full bg-[#F5F7FA] border border-black/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-black font-medium" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-black/70">Email</label>
                  <input type="email" className="w-full bg-[#F5F7FA] border border-black/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-black font-medium" placeholder="john@example.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-black/70">Subject</label>
                  <input type="text" className="w-full bg-[#F5F7FA] border border-black/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-black font-medium" placeholder="How can we help?" />
                </div>
                <Button size="lg" className="w-full mt-4 h-14 text-lg">Send message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </main>
  );
}
