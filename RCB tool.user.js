// ==UserScript==
// @name         RCB tool
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Grab RCB data elements
// @author       SN
// @match        http://www3.mdanderson.org/app/medcalc/index.cfm?pagename=jsconvert3
// @grant        none
// ==/UserScript==



(function() {
    'use strict'; // just leave this. Not worth understanding why

    

    //make a button so DOM(?) can load. otherwise the values we want are null
var input=document.createElement("input");
input.type="button";
input.value="Custom Button to do shit~!~!~!~!";
input.onclick = doWork;

//document.body.appendChild(input); //Puts button way at bottom. Don't like...

//this is ok button placement for now
var parentElement = document.getElementsByClassName("section-title")[0]; //where i want the button to be after. returns all elements (plural) as a "node list" so needs index
parentElement.appendChild(input); //puts our button into the right spot



function doWork()
{

    //get elements by name returns a "node list" so you have to access by index
   var primaryTumorBedArea = document.getElementsByName("d1")[0].value;

  console.log( 'Primary tumor bed area: '+ primaryTumorBedArea);
//  console.log( primaryTumorBedArea);

    alert('Primary tumor bed area: '+ primaryTumorBedArea);
}
})(





);


