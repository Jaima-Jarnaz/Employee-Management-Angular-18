import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  count = signal(0);

  increment() {
    // this.count.set(this.count() + 1);
    this.count.update((value) => value + 1);
  }

  ngOnInit(): void {}
}
