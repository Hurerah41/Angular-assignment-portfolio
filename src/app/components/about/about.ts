import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  developerName = 'Alex Mercer';
  role = 'Creative Frontend Developer & UI Designer';
  profileImg = 'profile.png';
  
  introduction = 'I design and build beautiful, high-performance web applications. With a passion for pixel-perfect detail, clean code, and robust user experiences, I bridge the gap between creative visual designs and high-performance typescript engineering. I specialize in building responsive layouts using modern frontend architectures.';

  bioParagraph1 = 'For the past 5+ years, I have worked with design systems, custom component architectures, and responsive web systems. I am dedicated to creating clean, semantic markup paired with highly scalable stylesheets.';
  
  bioParagraph2 = 'Outside of development, I focus on responsive design, performance tuning, and exploring cutting-edge browser capabilities. I believe in writing code that is clean, self-documenting, and highly reusable.';

  skills: Skill[] = [
    { name: 'Angular & Standalone Components', level: 92, category: 'Frontend' },
    { name: 'TypeScript & ES6+', level: 88, category: 'Languages' },
    { name: 'CSS3 Custom Properties & HTML5', level: 95, category: 'Design' },
    { name: 'RxJS State & Dynamic Signals', level: 82, category: 'Frontend' },
    { name: 'Git / Version Control', level: 85, category: 'Tools' },
    { name: 'UI/UX Visual Prototyping', level: 90, category: 'Design' }
  ];
}
