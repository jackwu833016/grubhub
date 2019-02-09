import React, {Component} from 'react';




export function searchFunc(str, receipts){
    return receipts.filter((receipts)=>
       receipts.ingredients.some(e=>e.indexOf(str)>=0))
}