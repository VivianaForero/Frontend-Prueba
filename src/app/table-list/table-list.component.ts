import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PersonasService } from 'app/services/personas.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(private persona: PersonasService,
              private cd: ChangeDetectorRef) { }

  public personas: any;


  ngOnInit() {
    this.persona.getPersonas().subscribe(data => {
      this.personas = data['personas'];
      console.log(this.personas,'data')      
    })

  }

}
