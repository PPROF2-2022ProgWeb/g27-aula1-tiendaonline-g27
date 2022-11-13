import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DashboardReportsService {
  private API_DASHBOARD_REPORTS = "https://api.jsonbin.io/v3/b/6304bbcaa1610e63860b8854/latest";

  constructor(public http: HttpClient) { }

  public getReportsData(): Observable<any> {
    return this.http.get<any>(this.API_DASHBOARD_REPORTS);
  }

}
