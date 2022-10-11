import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-photosapp',
  templateUrl: './photosapp.component.html',
  styleUrls: ['./photosapp.component.css']
})
export class PhotosappComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  fetchData=()=>{
    this.myapi.viewPhotos().subscribe(
      (data)=>{
        this.photosData=data
      }
    )
  }


 photosData:any=[]

  ngOnInit(): void {
  }

}
