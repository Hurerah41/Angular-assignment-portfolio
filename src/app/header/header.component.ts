import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="sticky top-0 z-50 backdrop-blur-md bg-[#0A0A0A]/90 border-b border-white/10 select-none">
      <div class="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <!-- Logo / Initials -->
        <a href="#home" class="flex items-center space-x-2 group">
          <div class="text-2xl font-black tracking-tighter uppercase font-display text-white" id="logo-text">
            ALEX<span class="text-blue-500">.</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-10" id="desktop-nav">
          <a *ngFor="let item of navItems" [href]="item.link" 
             class="font-sans text-xs font-bold uppercase tracking-widest text-[#F5F5F5]/70 hover:text-blue-500 transition-colors relative">
            {{ item.name }}
          </a>
          <a href="#contact" class="px-5 py-2.5 rounded-none border border-white/20 hover:border-blue-500 hover:text-blue-500 bg-transparent text-white text-xs font-bold uppercase tracking-widest transition-all">
            Contact
          </a>
        </nav>

        <!-- Mobile Nav Toggle button -->
        <button id="mobile-toggle-btn" (click)="toggleMobileMenu()" class="md:hidden flex items-center justify-center p-2 rounded-lg text-[#F5F5F5]/70 hover:text-white hover:bg-white/5 focus:outline-none">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path *ngIf="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path *ngIf="isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div *ngIf="isMobileMenuOpen" class="md:hidden bg-[#0A0A0A] border-b border-white/10 transition-all duration-300" id="mobile-dropdown">
        <div class="px-4 pt-2 pb-6 space-y-3">
          <a *ngFor="let item of navItems" [href]="item.link" (click)="isMobileMenuOpen = false"
             class="block px-4 py-3 rounded-none text-sm font-bold uppercase tracking-widest text-[#F5F5F5]/70 hover:bg-white/5 hover:text-blue-500 transition-all">
            {{ item.name }}
          </a>
          <div class="pt-4 border-t border-white/5 px-4">
            <a href="#contact" (click)="isMobileMenuOpen = false" 
               class="block w-full py-3 rounded-none border border-white/20 hover:border-blue-500 text-center text-white text-xs font-bold uppercase tracking-widest transition-all">
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  designerName: string = 'Alex Rivers';
  initials: string = 'AR';

  navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Services', link: '#services' },
  ];

  isMobileMenuOpen: boolean = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
