import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ClaimsDirective } from '../claims.directive';
import { jwtClaimsService } from '../jwt.service';
import { RolesEnum } from '../role.type';
import { Claims } from '../claims.type';

@Component({
  selector: 'org-role',
  standalone: true,
  imports: [
    CommonModule, 
    ClaimsDirective
  ],
  templateUrl: './role.component.html',
  styleUrl: './role.component.scss',
})
export class RoleComponent {
  protected router = inject(Router);
  protected claimsService = jwtClaimsService();
  protected claims = this.claimsService.getClaims<Claims>();
  protected roles = RolesEnum;
}
