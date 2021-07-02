import { Component, OnInit, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-new',
  templateUrl: './modal-new.component.html',
  styleUrls: ['./modal-new.component.scss'],
})
export class ModalNewComponent implements OnInit {
  @Input() title;
 
  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
 
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }



}
