import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { jwtClaimsService } from './jwt.service';
import { RolesEnum } from './role.type';
import { Claims } from './claims.type';

@Directive({
  selector: '[orgClaims]',
  standalone: true,
})
export class ClaimsDirective {
  protected jwtClaimsService = jwtClaimsService();
  protected templateRef = inject(TemplateRef<unknown>);
  protected viewContainer = inject(ViewContainerRef);

  @Input({ required: true })
  public set orgClaims(value: RolesEnum) {
    const userRole = this.jwtClaimsService.getClaims<Claims>();
    
    // This is only an example permissions would have a hierarchy of access
    // and your logic would reflect that better here
    if (userRole?.role === value) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      return;
    }

    this.viewContainer.clear();
  }
}
