import { Component } from '@angular/core';
import { Add } from 'src/app/Pfs';


@Component({
  selector: 'app-pfs',
  templateUrl: './pfs.component.html',
  styleUrls: ['./pfs.component.css']
})
export class PfsComponent {

add:Add[]

localitem:string|null;

constructor(){
  this.localitem=localStorage.getItem("add")
  if(this.localitem==null){
    this.add=[]
  }
  else{
    this.add=JSON.parse(this.localitem)
  }
  
}
deleteAdd(i:Add){
  console.log("delete click")
  const index=this.add.indexOf(i)
  this.add.splice(index,1)
  localStorage.setItem('add',JSON.stringify(this.add))
}
itemAdd(add:Add){
  this.add.push(add)  
  localStorage.setItem('add',JSON.stringify(this.add))

}

}
