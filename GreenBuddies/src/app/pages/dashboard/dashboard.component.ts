import { IDashboardReports } from './../../models/dashboard-reports.model';
import { tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DashboardReportsService } from 'src/app/services/dashboard-reports.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void { }

  handleLogout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

}
