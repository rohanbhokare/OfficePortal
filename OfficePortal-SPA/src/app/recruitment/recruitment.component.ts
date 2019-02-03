import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { RecruitmentAddComponent } from './recruitment-add/recruitment-add.component';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent implements OnInit {
  statusParam = 'inprocess';
  pagination = { totalItems: 20, currentPage: 1, itemPerPage: 5};
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {

  }

  loadUsers() {

  }

  pageChanged(event: any) {

  }
  alertthis() {
    alert(this.statusParam);
  }

  addCandidateModal () {
    const initialState = {
      backdrop: true,
      ignoreBackdropClick: true,
      keyboard: false
    };
    this.bsModalRef = this.modalService.show(RecruitmentAddComponent, initialState);
    this.bsModalRef.setClass('modal-lg');
  }
}
