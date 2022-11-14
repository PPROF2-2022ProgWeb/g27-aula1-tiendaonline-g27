import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  query: string | undefined = undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleSearch() {
    this.router.navigate([`productos/${this.query}`]);
  }
}
