import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Add } from 'src/app/Pfs';

@Component({
  selector: 'app-pfs-item',
  templateUrl: './pfs-item.component.html',
  styleUrls: ['./pfs-item.component.css']
})
export class PfsItemComponent {
  @Input() i !:Add;
  @Output() addDelete:EventEmitter<Add>= new EventEmitter()

  onclick(i:Add){
    console.log("on click has been triggred")
    this.addDelete.emit(i)
  }
}
