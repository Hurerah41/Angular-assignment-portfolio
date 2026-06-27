import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Service } from '../../models/service.model';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  sectionTitle = 'My Services';
  sectionSubtitle = 'WHAT I OFFER';

  portfolioTitle = 'Featured Projects';
  portfolioSubtitle = 'MY PORTFOLIO';

  contactTitle = 'Get In Touch';
  contactSubtitle = 'CONTACT';

  services: Service[] = [
    {
      id: 1,
      name: 'Web Design',
      description: 'Creating visually stunning, modern, and user-centric website designs tailored to showcase your unique brand identity.',
      icon: 'palette'
    },
    {
      id: 2,
      name: 'Frontend Development',
      description: 'Engineering responsive, fast, and interactive web applications using clean TypeScript, Angular, and advanced styling.',
      icon: 'code'
    },
    {
      id: 3,
      name: 'UI/UX Design',
      description: 'Mapping out user journeys, creating interactive wireframes, and designing seamless user experiences that delight users.',
      icon: 'layers'
    }
  ];

  projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Admin Dashboard',
      description: 'A high-performance SaaS dashboard featuring real-time financial tracking, customizable graphs, and detailed analytics reports.',
      image: 'project-ecommerce.png',
      tags: ['Angular', 'TypeScript', 'RxJS', 'CSS Grid'],
      link: 'https://github.com'
    },
    {
      id: 2,
      title: 'Agile Kanban Board',
      description: 'An interactive project management app with columns, task cards, drag-and-drop mechanics, and workspace statistics.',
      image: 'project-kanban.png',
      tags: ['TypeScript', 'HTML5', 'CSS Modules', 'WebSockets'],
      link: 'https://github.com'
    },
    {
      id: 3,
      title: 'Creative Agency Portal',
      description: 'A beautiful and minimalist landing page for a creative agency, showcasing responsive glassmorphic layouts and micro-animations.',
      image: 'project-agency.png',
      tags: ['HTML5', 'Vanilla CSS', 'Responsive Layout', 'Intersection Observer'],
      link: 'https://github.com'
    }
  ];

  contactModel = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  formSubmitted = false;
  successMessage = false;

  onSubmitContactForm() {
    this.formSubmitted = true;
    setTimeout(() => {
      this.successMessage = true;
      this.contactModel = { name: '', email: '', subject: '', message: '' };
      this.formSubmitted = false;
      
      // Auto-hide success alert
      setTimeout(() => {
        this.successMessage = false;
      }, 5000);
    }, 1500);
  }
}
