import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonasService } from 'app/services/personas.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private persona: PersonasService) { }
  

  personForm = new FormGroup({
    name: new FormControl(''),
    birth: new FormControl(''),
  });


  ngOnInit() {
  }

  onSubmit(){
    console.log('Entró',this.personForm.value);

    const body = {
      name: this.personForm.value.name,
      birth: this.personForm.value.birth
    }
    console.log(body);
    this.persona.postPersona(body).subscribe();
  }
}
/*this.persona.getPersonas().subscribe(data => {
      console.log(data,'*******');
      console.log('hpola vivi')

      this.personas = data; */