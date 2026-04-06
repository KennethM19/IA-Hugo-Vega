import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  activeSection: string = 'inicio';
  isNavOpen: boolean = false;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  closeNav() {
    this.isNavOpen = false;
  }

  openSyllabus() {
    window.open('https://drive.google.com/file/d/1RAhUb8pFAWpVOwnSLO5NfyHaDNZbVbTi/view?usp=drive_link','_blank');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 70;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id') || '';
      }
    });

    this.activeSection = current;
  }
}
