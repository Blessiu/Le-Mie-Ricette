import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FabComponent } from './fab/fab.component';

@NgModule({
  declarations:[ToolbarComponent, FabComponent],
  imports:[IonicModule],
  exports:[ToolbarComponent, FabComponent]
})
export class ComponentsModule{}
