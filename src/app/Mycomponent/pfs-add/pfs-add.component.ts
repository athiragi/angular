import { Component, EventEmitter, Output } from '@angular/core';
import { Add } from 'src/app/Pfs';

@Component({
  selector: 'app-pfs-add',
  templateUrl: './pfs-add.component.html',
  styleUrls: ['./pfs-add.component.css']
})
export class PfsAddComponent {
  title!:string;
  desc!:string;
  @Output() addItem:EventEmitter<Add>=new EventEmitter()
onSubmit(){
   const add={
    sno:4,
    title:this.title,
    desc:this.desc,
    active:true
   }
   this.addItem.emit(add)
}

}
