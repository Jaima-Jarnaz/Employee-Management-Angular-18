import { Component } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { DesignationComponent } from '../designation/designation.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../common/navbar/navbar.component';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [
    RolesComponent,
    DesignationComponent,
    CommonModule,
    NavbarComponent,
  ],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css',
})
export class MasterComponent {
  currentComponent: string = 'Roles';

  changeCurrentComponent(componentName: string) {
    this.currentComponent = componentName;
  }
}
