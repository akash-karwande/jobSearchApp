import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'ngx-filter-pipe';


import { JobService } from '../job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
	jobs:{}
  jobFilter: any = { experience: '', skills:'',location:''};

  constructor( private jobservice: JobService,private filterPipe: FilterPipe) { }

  ngOnInit() {
     this.jobservice.getJobs().subscribe(res => {
      this.jobs = res;
      console.log(this.jobs);
    });

  }

  getJobs() {
    // this.jobservice.getJobs().subscribe(res => {
    //   this.jobs = res;
    //   console.log(this.jobs);
    // });


  }

}
