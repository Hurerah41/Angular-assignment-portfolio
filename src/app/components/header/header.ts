import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  brandName = 'Alex Mercer';
  
  navLinks = [
    { label: 'Home', url: '#home' },
    { label: 'About', url: '#about' },
    { label: 'Services', url: '#services' },
    { label: 'Portfolio', url: '#portfolio' },
    { label: 'Contact', url: '#contact' }
  ];

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
