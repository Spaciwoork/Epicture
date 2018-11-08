import { Component } from '@angular/core';
import { UploadService } from './upload.service';

@Component({
  selector: 'upload',
  templateUrl: 'upload.html'
})


export class upload_inPage {
  private base64textString: string="";

  handleImage(e){
    var images = e.target.files;
    var image = images[0];

    if (images && image) {
      var reader = new FileReader();

      reader.onload =this.handleReaderLoaded.bind(this);

      reader.readAsBinaryString(image);
    }
  }

  handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
  }

  data: any[];
  errorMessage: string;

  constructor (
    private uploadService: UploadService
  ){}

  uploadImage(){
    this.uploadService.uploaddata(this.base64textString)
      .then(
        data => this.data=data,
        error =>this.errorMessage = <any>error

      );
  }
}
