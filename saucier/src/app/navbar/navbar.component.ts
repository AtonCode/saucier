import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nabvar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NabvarComponent implements OnInit {
  pageTitle: string;


  constructor(private router: Router) { 
    this.pageTitle = router.url.replace("/", "");  }

  ngOnInit(): void {
  }

  home() {
    this.router.navigate(['home']);
  }
  register() {
    this.router.navigate(['register']);
  }
}