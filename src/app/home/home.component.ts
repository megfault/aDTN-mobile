import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { registerElement } from "nativescript-angular/element-registry";
import { CardView } from '@nstudio/nativescript-cardview';
registerElement('CardView', () => CardView);


import { NetworkService } from "../network.service";
import { Message } from "../message";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    messages: Message[] = [];

    constructor(
        private networkService: NetworkService,
    ) { }

    ngOnInit() {
        this.networkService.getMessages().subscribe(ms => this.messages = ms);
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
