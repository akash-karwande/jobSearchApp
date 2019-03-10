import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JobService } from './job.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FilterPipeModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
