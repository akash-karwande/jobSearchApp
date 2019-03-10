import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) {
  	console.log('service works');
   }

	getJobs() {

		return this.http.get('https://api.myjson.com/bins/kez8a');
	}
}
