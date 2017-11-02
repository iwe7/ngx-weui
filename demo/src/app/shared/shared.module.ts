import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { WeUiModule, ButtonConfig } from 'ngx-weui';

import { CountdownModule } from 'ngx-countdown';
import { NotifyModule } from 'ngx-notify';
import { GesturePasswordModule } from 'ngx-gesture-password';
import { AqmModule } from 'angular-qq-maps';
import { JsonpModule } from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        JsonpModule,
        WeUiModule.forRoot(),
        CountdownModule,
        NotifyModule.forRoot({
            notify: {
                progress: false
            }
        }),
        GesturePasswordModule,
        AqmModule.forRoot({
            apiKey: 'I3TBZ-QTN3J-MWPFI-FERMS-IBOCQ-LBBWY'
        })
    ],
    providers: [
        // { provide: ButtonConfig, useFactory: ()=> { return Object.assign(new ButtonConfig(), { type: 'warn' }); } }
    ],
    declarations: [
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        JsonpModule,
        RouterModule,

        WeUiModule,

        CountdownModule, NotifyModule, GesturePasswordModule, AqmModule
    ],
    entryComponents: [
    ]
})

// https://github.com/ocombe/ng2-translate/issues/209
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}
