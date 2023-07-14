import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-open-source-projects',
  templateUrl: './open-source-projects.component.html',
  styleUrls: ['./open-source-projects.component.scss']
})
export class OpenSourceProjectsComponent implements OnInit {

  config: any;
  projects: any =[];

  constructor(private profileService:ProfileService) { }

  ngOnInit() {
    this.projects = this.profileService.getOpenSourceProjects()
    console.log(this.projects)
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.projects.length
    };
  }

  pageChanged(event: any){
    this.config.currentPage = event;
  }
}
