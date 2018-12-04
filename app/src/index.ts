/// <reference path="types.d.ts" />

import '@locomain/braw';

export function component(componentDescription:any): any{
    return function (target:any) {
        componentDescription.controller = target;
        braw.component(componentDescription);
    }
}

export function directive(directiveDescription:any): any{
    return function (target:any) {
        directiveDescription.controller = target;
        braw.directive(directiveDescription);
    }
}


