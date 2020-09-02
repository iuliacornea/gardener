import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GreenhouseService {

  GREENHOUSE_IP_KEY = 'greenhouseIp';
  GET_DETAILS_URL = '/greenhouse_details.json';
  POST_MODE_URL = '/greenhouse_details_maintain_soil_humidity.json';
  greenhouseIp: string = localStorage.getItem(this.GREENHOUSE_IP_KEY);

  constructor(private http: HttpClient) {
  }

  getGreenhouseDetails(): Observable<any> {
    return this.greenhouseIp && this.http.get(
      this.greenhouseIp + this.GET_DETAILS_URL, {responseType: 'json'});
  }

  postGreenhouseOperatingMode(body: any): Observable<any> {
    // return this.greenhouseIp && this.http.post(
    //   this.greenhouseIp + this.POST_MODE_URL, body, { responseType: 'json'})
    return this.greenhouseIp && this.http.get(
      this.greenhouseIp + this.POST_MODE_URL, {responseType: 'json'});
  }

  getGreenhouseIp() {
    return this.greenhouseIp;
  }

  setGreenhouseIp(newIp: string) {
    localStorage.setItem(this.GREENHOUSE_IP_KEY, newIp);
    this.greenhouseIp = localStorage.getItem(this.GREENHOUSE_IP_KEY);
  }
}
