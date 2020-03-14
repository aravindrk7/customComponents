import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-multiple-dropdown',
  templateUrl: './select-multiple-dropdown.component.html',
  styleUrls: ['./select-multiple-dropdown.component.scss']
})
export class SelectMultipleDropdownComponent implements OnInit {
  open: boolean = false;
  optionList: string[];
  selectionList: string[];
  constructor() { }

  ngOnInit(): void {
    this.optionList = ['HTML & CSS', 'JavaScript', 'Java', 'Python', 'Node JS', 'Go'];
    this.selectionList = [];
  }
  showOptions() {
    this.open = !this.open;
  }
  selectOption(option){
    this.optionList.splice(this.optionList.indexOf(option),1);
    this.selectionList.push(option);
  }
  removeSelectedOption(option){
    this.selectionList.splice(this.selectionList.indexOf(option),1);
    this.optionList.push(option);
  }
}
