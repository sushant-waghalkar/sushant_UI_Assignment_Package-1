import { Routes, RouterModule } from '@angular/router';
import { NewPageComponent } from './new/index';
import { ProductComponent } from './product/index';
import { RegisterNewComponent } from './register_new/index';

const appRoutes: Routes = [
    { path: '', component: NewPageComponent },
    { path: 'registernew', component: RegisterNewComponent },
    { path: 'product', component: ProductComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);