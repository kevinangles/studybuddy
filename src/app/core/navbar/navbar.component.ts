import { Component, OnInit } from '@angular/core';
import { CoreService } from '.././core.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public coreService: CoreService) { }

  ngOnInit() {
  }
}
