import {NgModule} from "@angular/core";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCheckboxModule} from "@angular/material/checkbox";





@NgModule({
    exports:[
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatCheckboxModule
    ]
})
export class MaterialModule {}

