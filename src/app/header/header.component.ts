import {Component, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl:'header.component.html'
})
export  class HeaderComponent {
collapsed = true;
featureSelected = new EventEmitter<string>();
onSelect(feature: string){

}
}
