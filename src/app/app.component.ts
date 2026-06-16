import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen flex flex-col justify-between bg-[#0A0A0A]">
      <app-header id="home"></app-header>
      
      <main class="flex-grow">
        <!-- Hero Section directly in App Component for visual anchor -->
        <section class="relative bg-[#0A0A0A] pt-24 pb-20 border-b border-white/5 overflow-hidden select-none">
          <!-- Subtle top neon blue light bleed element -->
          <div class="absolute -top-40 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div class="max-w-6xl mx-auto px-6 relative z-10" id="hero-content">
            <div class="space-y-8 max-w-3xl">
              <div class="space-y-2">
                <p class="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs italic">
                  Introduction
                </p>
                
                <h1 class="text-[52px] sm:text-[72px] md:text-[84px] leading-[0.9] font-black tracking-tighter uppercase font-display text-white">
                  CRAFTING<br/>DIGITAL<br/><span class="text-outline-lg">IDEAS.</span>
                </h1>
              </div>
              
              <p class="font-sans text-base sm:text-lg text-white/60 leading-relaxed max-w-lg">
                Creative developer specialized in Angular standalone patterns, premium component engineering, and high-performance digital aesthetics.
              </p>
              
              <div class="flex flex-wrap items-center gap-4 pt-2" id="hero-actions">
                <a href="#about" class="px-6 py-3.5 border border-white bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-white transition-all">
                  Discover more
                </a>
                <a href="#services" class="px-6 py-3.5 border border-white/20 hover:border-blue-500 text-white hover:text-blue-500 font-mono text-xs font-bold uppercase tracking-widest transition-all">
                  View expertise
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- About Component -->
        <app-about></app-about>

        <!-- Services Component -->
        <app-services></app-services>
      </main>

      <app-footer></app-footer>
    </div>
  `
})
export class AppComponent {}
