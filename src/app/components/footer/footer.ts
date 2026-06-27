import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();
  developerName = 'Alex Mercer';
  copyrightMessage = 'All rights reserved.';

  quickLinks = [
    { label: 'Home', url: '#home' },
    { label: 'About', url: '#about' },
    { label: 'Services', url: '#services' },
    { label: 'Portfolio', url: '#portfolio' },
    { label: 'Contact', url: '#contact' }
  ];
}
