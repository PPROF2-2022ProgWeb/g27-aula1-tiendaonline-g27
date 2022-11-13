import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { DashboardReportsService } from './../../../services/dashboard-reports.service';
import { IDashboardReports } from './../../../models/dashboard-reports.model';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';

@Component({
  selector: 'app-admin-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesAdminComponent implements OnInit {

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
