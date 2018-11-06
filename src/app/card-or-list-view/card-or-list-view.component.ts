import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { CardItemDirective } from './card-item.directive';
import { ListItemDirective } from './list-item.directive';

@Component({
  selector: 'card-or-list-view',
  templateUrl: './card-or-list-view.component.html',
  styleUrls: ['./card-or-list-view.component.scss'],
})
export class CardOrListViewComponent implements OnInit {
  @Input()
  items: any[] = [];

  @Input()
  mode: 'card' | 'list' = 'card';

  // Read in our structural directives as TemplateRefs
  @ContentChild(CardItemDirective, { read: TemplateRef })
  cardItemTemplate;
  @ContentChild(ListItemDirective, { read: TemplateRef })
  listItemTemplate;

  constructor() {}

  ngOnInit() {}
}
