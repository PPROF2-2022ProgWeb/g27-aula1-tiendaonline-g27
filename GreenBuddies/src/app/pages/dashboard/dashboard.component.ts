import { IDashboardReports } from './../../models/dashboard-reports.model';
import { tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DashboardReportsService } from 'src/app/services/dashboard-reports.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  public isLoading: boolean = true;
  public reports: IDashboardReports | undefined;
  
  constructor(private dashboardReportsService: DashboardReportsService) {
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

}
