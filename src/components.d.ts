/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LmiAmbulanceWlApp {
        "ambulanceId": string;
        "apiBase": string;
        "basePath": string;
    }
    interface LmiAmbulanceWlEditor {
        "ambulanceId": string;
        "apiBase": string;
        "entryId": string;
    }
    interface LmiAmbulanceWlList {
        "ambulanceId": string;
        "apiBase": string;
    }
}
export interface LmiAmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLmiAmbulanceWlEditorElement;
}
export interface LmiAmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLmiAmbulanceWlListElement;
}
declare global {
    interface HTMLLmiAmbulanceWlAppElement extends Components.LmiAmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLLmiAmbulanceWlAppElement: {
        prototype: HTMLLmiAmbulanceWlAppElement;
        new (): HTMLLmiAmbulanceWlAppElement;
    };
    interface HTMLLmiAmbulanceWlEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLLmiAmbulanceWlEditorElement extends Components.LmiAmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLLmiAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLLmiAmbulanceWlEditorElement, ev: LmiAmbulanceWlEditorCustomEvent<HTMLLmiAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLLmiAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLLmiAmbulanceWlEditorElement, ev: LmiAmbulanceWlEditorCustomEvent<HTMLLmiAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLLmiAmbulanceWlEditorElement: {
        prototype: HTMLLmiAmbulanceWlEditorElement;
        new (): HTMLLmiAmbulanceWlEditorElement;
    };
    interface HTMLLmiAmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLLmiAmbulanceWlListElement extends Components.LmiAmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLLmiAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLLmiAmbulanceWlListElement, ev: LmiAmbulanceWlListCustomEvent<HTMLLmiAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLLmiAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLLmiAmbulanceWlListElement, ev: LmiAmbulanceWlListCustomEvent<HTMLLmiAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLLmiAmbulanceWlListElement: {
        prototype: HTMLLmiAmbulanceWlListElement;
        new (): HTMLLmiAmbulanceWlListElement;
    };
    interface HTMLElementTagNameMap {
        "lmi-ambulance-wl-app": HTMLLmiAmbulanceWlAppElement;
        "lmi-ambulance-wl-editor": HTMLLmiAmbulanceWlEditorElement;
        "lmi-ambulance-wl-list": HTMLLmiAmbulanceWlListElement;
    }
}
declare namespace LocalJSX {
    interface LmiAmbulanceWlApp {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "basePath"?: string;
    }
    interface LmiAmbulanceWlEditor {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "entryId"?: string;
        "onEditor-closed"?: (event: LmiAmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface LmiAmbulanceWlList {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "onEntry-clicked"?: (event: LmiAmbulanceWlListCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "lmi-ambulance-wl-app": LmiAmbulanceWlApp;
        "lmi-ambulance-wl-editor": LmiAmbulanceWlEditor;
        "lmi-ambulance-wl-list": LmiAmbulanceWlList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "lmi-ambulance-wl-app": LocalJSX.LmiAmbulanceWlApp & JSXBase.HTMLAttributes<HTMLLmiAmbulanceWlAppElement>;
            "lmi-ambulance-wl-editor": LocalJSX.LmiAmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLLmiAmbulanceWlEditorElement>;
            "lmi-ambulance-wl-list": LocalJSX.LmiAmbulanceWlList & JSXBase.HTMLAttributes<HTMLLmiAmbulanceWlListElement>;
        }
    }
}
