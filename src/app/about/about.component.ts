import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-24 bg-[#0A0A0A] border-b border-white/5 select-none">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <!-- Image Placeholder / Visual Side -->
          <div class="lg:col-span-5 flex justify-center relative select-none" id="about-visual-col">
            <div class="absolute w-72 h-72 bg-blue-600/10 profile-clip blur-3xl"></div>
            <div class="relative w-80 h-96 bg-neutral-900/40 profile-clip overflow-hidden border border-white/10 flex items-center justify-center p-8 group transition-all duration-500 hover:border-blue-500/30">
              <!-- Grid background inside the image container -->
              <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:14px_24px]"></div>
              
              <!-- Abstract visual shape representing user placeholder -->
              <div class="relative z-10 w-44 h-44 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-500 shadow-2xl transition-transform duration-500 hover:scale-105" id="profile-placeholder">
                <span class="font-display text-5xl font-black tracking-wider text-outline">{{ initials }}</span>
              </div>
              
              <!-- Clean decorative caption overlay -->
              <div class="absolute bottom-6 left-6 right-6 bg-black/90 backdrop-blur-md border border-white/10 px-5 py-3 flex items-center justify-between" id="location-badge">
                <div>
                  <p class="font-mono text-[9px] uppercase tracking-widest text-[#F5F5F5]/40 font-bold">Location</p>
                  <p class="font-sans text-xs font-bold text-white uppercase tracking-wider">{{ location }}</p>
                </div>
                <div class="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
              </div>
            </div>
          </div>

          <!-- Description Side -->
          <div class="lg:col-span-7 space-y-8" id="about-details-col">
            <div class="space-y-4">
              <span class="font-mono text-xs font-bold uppercase tracking-[0.2em] text-blue-500 italic">
                Who I Am
              </span>
              <h2 class="font-display text-4xl md:text-5xl font-black tracking-tighter text-white uppercase leading-tight">
                Hi, I'm <span class="text-transparent" style="-webkit-text-stroke: 1.5px #f5f5f5">{{ name }}</span>
              </h2>
              <p class="font-mono text-xs font-bold uppercase tracking-wider text-blue-500/80">
                // {{ role }}
              </p>
            </div>

            <p class="font-sans text-lg text-white/70 leading-relaxed max-w-2xl">
              {{ biography }}
            </p>

            <!-- Key attributes -->
            <div class="grid grid-cols-2 gap-6 pt-2" id="about-stats-grid">
              <div *ngFor="let stat of keyStats" class="space-y-1 border-l-2 border-white/10 pl-4 py-1 hover:border-blue-500 transition-colors">
                <p class="font-display text-2xl font-black text-white tracking-tight uppercase">{{ stat.value }}</p>
                <p class="font-sans text-[10px] text-white/50 uppercase tracking-widest font-bold">{{ stat.label }}</p>
              </div>
            </div>

            <!-- Skills chips -->
            <div class="space-y-3">
              <p class="font-mono text-xs font-bold uppercase tracking-widest text-white/40">// Core Expertise</p>
              <div class="flex flex-wrap gap-2.5" id="about-skills-row">
                <span *ngFor="let skill of coreSkills" class="font-mono text-[11px] font-bold uppercase tracking-wider text-white/80 bg-white/5 hover:bg-blue-500/10 hover:text-blue-400 border border-white/5 hover:border-blue-500/20 px-4 py-2 transition-all">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  name: string = 'Alex Rivers';
  initials: string = 'AR';
  role: string = 'Frontend Architect & UI Platform Engineer';
  location: string = 'San Francisco, CA';
  biography: string = 'I design and build dynamic digital assets that pair beautiful modern typography with lightning-fast modular frontends. Specialized in standalone component architecture, standard web interfaces, and fluid interactions, I turn concepts into pristine web apps.';
  
  keyStats = [
    { value: '5+', label: 'Years of Experience' },
    { value: '40+', label: 'Delivered Projects' },
    { value: '100%', label: 'Commitment to Quality' },
    { value: '14kb', label: 'Lighter Bundle Target' }
  ];

  coreSkills: string[] = ['Angular Component Design', 'TypeScript Core', 'Vite & Bundling', 'Tailwind CSS V4', 'UI Architecture', 'Responsive Layouts'];
}
