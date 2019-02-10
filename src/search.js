import React, {Component} from 'react';




export function searchFunc(sArray, receipts){
    let strArray = sArray;
    let count=0;
    return receipts.filter((receipts)=>
     {
     receipts.ingredients.forEach((e,index,arr)=>
       {
           console.log(e);
             for(const ele of strArray){
               console.log(strArray);
            if(!e.includes(ele)){
                console.log('---------');
                   count=0;
               }
               else{
                    count++;
                    strArray=strArray.filter(e=>e!=ele);
                    console.log(count);
                    break;
               }
             }
          console.log(count);
          if(count!=sArray.length && !arr[index + 1])
                count=0;
           console.log(count==sArray.length);
           console.log(sArray.length);
       })
      return count==sArray.length;
     }  
        );
        
    }