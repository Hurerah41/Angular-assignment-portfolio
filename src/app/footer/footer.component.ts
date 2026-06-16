import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-black text-white select-none relative overflow-hidden border-t border-white/5">
      <!-- Dotted grid visual backdrop details -->
      <div class="absolute inset-0 bg-[#ffffff03] bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px]"></div>
      
      <div class="max-w-6xl mx-auto px-6 py-16 relative z-10 space-y-12">
        <!-- Main contact suggestion -->
        <div id="contact" class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start md:items-center border-b border-white/10 pb-12">
          <div class="space-y-4">
            <h3 class="font-display text-2xl md:text-3xl font-black uppercase tracking-tight">Let's build something beautiful together.</h3>
            <p class="font-sans text-sm text-white/50 leading-relaxed">Available for contract consulting and architectural frontend code guidance.</p>
          </div>
          <div class="md:text-right" id="footer-contact-link">
            <a href="mailto:alex@riversdesign.dev" class="inline-block px-7 py-3.5 rounded-none border border-white hover:bg-white hover:text-black font-mono text-xs font-bold uppercase tracking-widest transition-all shadow-lg">
              alex&#64;riversdesign.dev
            </a>
          </div>
        </div>

        <!-- Secondary row matching Bold Layout specifications -->
        <div class="flex flex-col md:flex-row items-center justify-between gap-6" id="footer-copyright-row">
          <p class="text-[10px] uppercase tracking-widest text-white/30 text-center md:text-left">
            &copy; {{ currentYear }} {{ designerName | uppercase }} PORTFOLIO — BUILT WITH ANGULAR
          </p>
          <div class="flex gap-6 text-[10px] font-bold uppercase tracking-widest">
            <span class="text-white/30">Based in San Francisco, CA</span>
            <a href="#about" class="text-blue-500 hover:underline">About me</a>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  designerName: string = 'Alex Rivers';
  initials: string = 'AR';
  currentYear: number = new Date().getFullYear();
  copyrightInfo: string = `© ${this.currentYear} ${this.designerName}. All rights reserved.`;
}
