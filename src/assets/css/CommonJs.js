import {useDateFormat} from "@vueuse/core";

export function dataFormat(timestamp){
    return useDateFormat(timestamp.cellValue,"YYYY-MM-DD HH:mm:ss").value;
}
export function getElementUIThemeState(){
    return localStorage.getItem('vueuse-color-scheme') !== null && localStorage.getItem('vueuse-color-scheme') !== "auto"
}
export function getMdEditThemeState(){
    return getElementUIThemeState() ? 'light':'dark'
}
