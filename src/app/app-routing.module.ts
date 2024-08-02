import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { ErrorPageTestComponent } from './components/error-page-test/error-page-test.component';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'error-page-test', component: ErrorPageTestComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
