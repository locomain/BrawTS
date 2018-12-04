type VDom = {
    name: string;
    value: string;
    attributes: any
    childs: VDom[];
}

type Directive = {
    new():Directive;
    onDataReceived(component: HTMLElement, context : any, value: any) : void
}

type Component = {
    new():Component;
    render() : VDom;
    draw():void,
    redraw():void,
    clear():void,
    onRedraw():void,
    onRender():void
}

type Braw = {
    instance(): Braw,
    navigator(obj:any): void,
    component(obj:any):void
    directive(obj:any): void,
}

declare var Component: Component;
declare var Directive: Directive;

declare var braw : Braw;
declare var _ : Braw;