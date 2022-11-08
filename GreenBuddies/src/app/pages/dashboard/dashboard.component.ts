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
  public isLoading: boolean = true;
  public reports: IDashboardReports | undefined;

  constructor(private dashboardReportsService: DashboardReportsService, private userService: UserService, private router: Router) {
    this.dashboardReportsService
      .getReportsData()
      .pipe(
        tap((response) => {
          this.reports = response.record;
          this.isLoading = false;
          return response.record;
        })
      )
      .subscribe();
  }

  ngOnInit(): void { }

  handleLogout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

}
