import { Component, OnInit } from '@angular/core';
import { CONTENTS } from 'src/app/mock_content';
import { Content } from 'src/app/contents_interf';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})

export class ScreenComponent implements OnInit {
  contents: Content[] = CONTENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
