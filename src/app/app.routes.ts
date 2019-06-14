import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ClinicaComponent } from './clinica/clinica.component';
import { FormComponent } from './clientes/form.component';
import { AuthGuard } from './usuarios/guards/auth.guard';
import { RoleGuard } from './usuarios/guards/role.guard';
import { LoginComponent } from './usuarios/login.component';
import { DetalleFacturaComponent } from './facturas/detalle-factura.component';
import { FacturasComponent } from './facturas/facturas.component';
import { CitaComponent } from './cita/cita.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CitaFormComponent } from './cita/form.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/clinica', pathMatch: 'full' },
    { path: 'clinica', component: ClinicaComponent},
    { path: 'cita/form', component: CitaFormComponent},
    { path: 'perfil', component: PerfilComponent},
    { path: 'clientes', component: ClientesComponent },
    { path: 'obt_cita', component: CitaComponent },
    { path: 'clientes/page/:page', component: ClientesComponent },
    { path: 'clientes/form', component: FormComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
    { path: 'clientes/form/:id', component: FormComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
    { path: 'login', component: LoginComponent },
    { path: 'facturas/:id', component: DetalleFacturaComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_USER' } },
    { path: 'facturas/form/:clienteId', component: FacturasComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } }
  ];

  export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});