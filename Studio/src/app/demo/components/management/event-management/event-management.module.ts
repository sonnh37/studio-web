import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventManagementRoutingModule } from './event-management-routing.module';


@NgModule({
  imports: [
    CommonModule,
    EventManagementRoutingModule
  ]
})
export class EventManagementModule { }