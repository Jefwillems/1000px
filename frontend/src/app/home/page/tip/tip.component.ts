import { StorageManagerService } from './../../../shared/services/storage-manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.scss']
})
export class TipComponent implements OnInit {
  key = 'isVisible';
  isVisible = true;

  constructor(private storageManager: StorageManagerService) {
    if (this.storageManager.exists(this.key)) {
      this.isVisible = this.storageManager.retrieveObject(this.key).value;
    }
  }

  ngOnInit() {
  }

  private disappear() {
    this.isVisible = false;
    this.storageManager.store(this.key, { value: false });
  }

}
