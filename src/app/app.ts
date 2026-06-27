import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, About, Services, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'personal-portfolio';
}
