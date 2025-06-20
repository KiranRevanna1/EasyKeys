import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataService } from '../../services/form-data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-screen1',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './screen1.component.html',
  styleUrl: './screen1.component.scss'
})
export class Screen1Component {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private formService: FormDataService) {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      phone: ['']
    });
  }

  goNext() {
    this.formService.setPersonalData(this.form.value);
    this.router.navigate(['/screen2']);
  }
}
