import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataService } from '../../services/form-data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-screen2',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './screen2.component.html',
  styleUrl: './screen2.component.scss'
})
export class Screen2Component {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private formService: FormDataService) {
    this.form = this.fb.group({
      accountNumber: [''],
      ifsc: ['']
    });
  }

  goBack() {
    this.formService.setPersonalData(this.form.value);
    this.router.navigate(['/screen1']);
  }

  goNext() {
    this.formService.setBankData(this.form.value);
    this.router.navigate(['/screen3']);
  }
}
