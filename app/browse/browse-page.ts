import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { BrowseViewModel } from "./browse-view-model";
import { EventData } from 'tns-core-modules/data/observable';
// import { Page } from 'tns-core-modules/ui/page';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new BrowseViewModel();
}

// Event handler for Page "pageLoaded" event attached in home-page.xml
export function pageLoaded(args: EventData) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    let page = <Page>args.object;
    page.bindingContext = new BrowseViewModel();
}