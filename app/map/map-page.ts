import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { MapViewModel } from "./map-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new MapViewModel();
}


