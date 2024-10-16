import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tittle',
  templateUrl: './tittle.component.html',
  styleUrl: './tittle.component.css'
})
export class TittleComponent implements OnChanges {
 
 @Input() title =  '';
 @Output() dataFromChild = new EventEmitter()

 ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
  this.dataFromChild.emit('data from child component')
  
}

}
