import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../types';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="py-24 bg-[#0F0F0F] border-b border-white/5 select-none">
      <div class="max-w-6xl mx-auto px-6">
        
        <!-- Header -->
        <div class="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16" id="services-header">
          <div class="space-y-3">
            <span class="font-mono text-xs font-bold uppercase tracking-[0.3em] text-blue-500 italic text-left">
              Expertise
            </span>
            <h2 class="font-display text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
              My Services
            </h2>
          </div>
          <div class="h-[1px] hidden lg:block flex-grow mx-8 bg-white/10"></div>
          <p class="font-sans text-sm text-white/50 max-w-sm leading-relaxed">
            Beautifully crafted architectural and modular layouts tailored for performance and responsive accessibility.
          </p>
        </div>

        <!-- Services Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8" id="services-grid-container">
          <div *ngFor="let service of servicesList" class="bg-black/40 border border-white/10 hover:border-blue-500/50 p-8 flex flex-col justify-between transition-all duration-300 relative group min-h-[300px]">
            <div class="space-y-6">
              <!-- Service Count and Icon -->
              <div class="flex items-center justify-between">
                <div class="text-blue-500 font-mono text-xs font-bold">
                  0{{ service.id }}.
                </div>
                <!-- Mini Icon representation -->
                <div class="text-white/30 group-hover:text-blue-500 transition-colors">
                  <svg *ngIf="service.iconName === 'web-design'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <svg *ngIf="service.iconName === 'frontend'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <svg *ngIf="service.iconName === 'ui-ux'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              <!-- Service Details -->
              <div class="space-y-3">
                <h3 class="font-display text-xl font-bold uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  {{ service.name }}
                </h3>
                <p class="font-sans text-sm text-white/50 leading-relaxed">
                  {{ service.description }}
                </p>
              </div>
            </div>

            <!-- Simple arrow links -->
            <div class="pt-8 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-[#F5F5F5]/40 group-hover:text-blue-500 transition-colors">
              <span>Expertise details</span>
              <svg class="w-4 h-4 translate-x-0 transition-transform group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
})
export class ServicesComponent {
  servicesList: Service[] = [
    {
      id: 1,
      name: 'Web Design',
      description: 'Stunning layouts crafted with typographical rhythm, fluid layouts, and strict vertical grid integration.',
      iconName: 'web-design',
    },
    {
      id: 2,
      name: 'Frontend Development',
      description: 'Pristine, lightweight, and type-safe Angular web engines using standalone components and responsive state.',
      iconName: 'frontend',
    },
    {
      id: 3,
      name: 'UI/UX Design',
      description: 'Engaging user flows, atomic component frameworks, and digital visual assets focusing strictly on user experience.',
      iconName: 'ui-ux',
    },
  ];
}
