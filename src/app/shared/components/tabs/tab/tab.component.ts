import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.sass']
})
export class TabComponent implements OnInit {

  @Input() tabTitle = 'Tab';
  @Input() active = false;

  constructor() { }

  ngOnInit() {}
}
