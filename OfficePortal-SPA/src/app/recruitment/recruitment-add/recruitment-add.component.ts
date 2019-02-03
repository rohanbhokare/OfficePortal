import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-recruitment-add',
  templateUrl: './recruitment-add.component.html',
  styleUrls: ['./recruitment-add.component.css']
})
export class RecruitmentAddComponent implements OnInit {
  @Output() addNewCandidate = new EventEmitter();
  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit() {
  }



  addClick() {
    this.addNewCandidate.emit();
  }
}
