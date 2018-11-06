import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss'],
})
export class UsageComponent implements OnInit {
  mode = 'list';
  items = [
    {
      header: 'Creating Reuseable Components with NgTemplateOutlet in Angular',
      content: 'The single responsibility principle...',
    }, // ... more items
  ];

  constructor() {}

  ngOnInit() {}
}
