/// <reference path="types.d.ts" />

import '@locomain/braw';

function component(componentDescription:any){
    return function (target:any) {
        componentDescription.controller = target;
        braw.component(componentDescription);
    }
}

function directive(directiveDescription:any){
    return function (target:any) {
        directiveDescription.controller = target;
        braw.directive(directiveDescription);
    }
}



