import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  category: string = 'All';

  constructor() { }

  ngOnInit(): void {
  }

  canviEvent(category: string): void {
    this.category = category;
  }

}
