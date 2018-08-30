import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: './layout-module/layout-module.module#LayoutModule'},
    { path: 'login', loadChildren: './login/login.module#LoginModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule],
     exports: [RouterModule],

  declarations: []
})
export class AppRoutingModule { }





















// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';

// const routes: Routes = [
// //     { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
// //     { path: 'login', loadChildren: './login/login.module#LoginModule' },
// //     { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
// //     { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
// //     { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
// //     { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
// //     { path: '**', redirectTo: 'not-found' }
// // ];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule {}
