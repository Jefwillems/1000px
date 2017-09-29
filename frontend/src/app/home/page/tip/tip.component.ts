import { StorageManagerService } from './../../../services/storage-manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.scss']
})
export class TipComponent implements OnInit {

  isVisible = true;

  constructor(private storageManager: StorageManagerService) {

  }

  ngOnInit() {
  }

  private disappear() {
    this.storageManager.store('isVisible', { value: false });
  }

}
