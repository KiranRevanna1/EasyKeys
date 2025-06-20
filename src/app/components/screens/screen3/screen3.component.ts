import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../../services/form-data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen3',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './screen3.component.html',
  styleUrl: './screen3.component.scss'
})
export class Screen3Component implements OnInit {
  data: any;

  constructor(private formService: FormDataService,  private router: Router) { }

  ngOnInit() {
    this.data = this.formService.getAllData();
  }

  submit() {
    this.formService.reset();  
    this.router.navigate(['/']);
  }

  goBack() {
    this.router.navigate(['/screen2']);
  }
}
