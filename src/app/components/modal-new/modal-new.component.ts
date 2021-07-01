import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-modal-new',
  templateUrl: './modal-new.component.html',
  styleUrls: ['./modal-new.component.scss'],
})
export class ModalNewComponent implements OnInit {
  @Input() title;

  constructor(
  ) { }

  ngOnInit() {
 
  }


}
