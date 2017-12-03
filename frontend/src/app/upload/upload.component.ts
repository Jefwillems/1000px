import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ImageService } from '../shared/services/image.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  public upload: FormGroup;
  public errorMsg: String;
  public img: String;

  constructor(
    private fb: FormBuilder,
    private is: ImageService) { }

  ngOnInit() {
    this.upload = this.fb.group({
      title: ['', Validators.required],
      file: ['', Validators.required]
    });
  }

  readUrl($event: any) {
    if ($event.target.files && $event.target.files[0]) {
      this.img = $event.target.files[0];

      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.img = e.target.result;
      };

      reader.readAsDataURL($event.target.files[0]);
    }
  }

  submit($event) {
    const title = this.upload.value.title;
    const file = $event.target[0].files[0];
    this.is.upload(title, file).subscribe(res => {
      console.log(res);
    });
  }

}
