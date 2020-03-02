import { NgModule } from '@angular/core';




import {
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule
} from '@angular/material';

@NgModule({

    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatFormFieldModule,
        MatCardModule
    ]
})
export class MaterialModule { }