import { Component, OnInit, Input } from '@angular/core';
import { Content } from 'src/app/contents_interf';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() content!: Content;

  constructor() { }

  ngOnInit(): void {
  }

}
