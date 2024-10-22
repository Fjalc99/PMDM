import { Component, OnInit } from '@angular/core';
import { People } from '../../models/people-list.interface';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent implements OnInit {

  peopleList: People[] = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getPeopleList().subscribe((resp) => {
      this.peopleList = resp.results;
    });
  }

  getImageUrl(peopleUrl: string) {
    return `https://starwars-visualguide.com/assets/img/characters/${peopleUrl.split("/")[5]}.jpg`;
    }  
}
