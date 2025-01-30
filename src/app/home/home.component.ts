import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    // Keresés ikon 
    const searchIcon = document.querySelector('.search-icon');
    if (searchIcon) {
      searchIcon.addEventListener('click', () => {
        const searchBar = document.querySelector('.search-bar') as HTMLElement;
        searchBar.classList.toggle('active');
      });
    }

    // Lenyitható menü
    const menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
      menuIcon.addEventListener('click', () => {
        const dropdownMenu = document.querySelector('.dropdown-menu') as HTMLElement;
        dropdownMenu.classList.toggle('show');
      });
    }
  }
}



