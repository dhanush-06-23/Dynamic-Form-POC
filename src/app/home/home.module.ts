import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {MatIconModule} from '@angular/material/icon';
import { HomePageRoutingModule } from './home-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { DynamicTextBlockComponent } from '../dynamic-text-block/dynamic-text-block.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,


  ],
  declarations: [HomePage, DynamicFormComponent, DynamicTextBlockComponent]
})
export class HomePageModule {}
