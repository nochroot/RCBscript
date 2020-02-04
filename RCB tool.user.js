// ==UserScript==
// @name         RCB tool
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Grab RCB data elements
// @author       SN
// @match        http://www3.mdanderson.org/app/medcalc/index.cfm?pagename=jsconvert3
// @grant        none
// ==/UserScript==

/*
/////////////////////////
/////////////////////////
// Get readable values for easy pasting
// from md anderson RCB breast CA score
// http://www3.mdanderson.org/app/medcalc/index.cfm?pagename=jsconvert3
//
// 1/2020: as of now crudely just makes a button to press
// i need to better understand javascript w some basic
// youtube videso bc hitting another button after calculate is not ideal
//
// probably better to use an event listener for that button (eventlistener."click"?)?
// or jquery or something else entirely
//
//TODO
//first thing is just work with the stupid button for now so can start getting
//readable text to put into real reports
//this implementation (tampermonikey with button) probably not a long term solution
//
//need to understand their webpage and script
//
// alternatives is just make a website or webapp that puts in the values with no extra bullshit
//and returns the RCB calculation and score and all elenemts in human readable format
//should be ok as long as disclaimer stating this is experimental and
//to use the original calculator, which is propietary and can be found to public
// on mdanderson's site.
*/

(function() {
    'use strict'; // just leave this. Not worth understanding why



    //make a button so DOM(?) can load. otherwise the values we want are null
var customButton=document.createElement("input");
customButton.type="button";
customButton.value="COPY VALUES TO CLIPBOARD";
customButton.onclick = doWork;

//document.body.appendChild(input);
    //^Puts button way at bottom of page. Don't like...

//this is better button placement for now
var parentElement = document.getElementsByClassName("section-title")[0]; //where i want the button to be after. returns all elements (plural) as a "node list" so needs index
parentElement.appendChild(customButton); //puts our button into the right spot



function doWork()
{
//grab the stuff and put into readable text
//interestingly they dont use "id" (which are unique and able to use css) so cant use getElementById
    //get elements by name returns a "node list" so you have to access by index
    var d1 = document.getElementsByName("d1")[0].value;
    var d2 = document.getElementsByName("d2")[0].value;
    var primaryTumorBedArea = "Primary tumor bed area: " + d1 + " mm X "  + d2 +  " mm ";
 //   console.log( 'Primary tumor bed area: '+ primaryTumorBedArea);
   // alert('Primary tumor bed area: '+ primaryTumorBedArea);

    var pCell = document.getElementsByName("pCell")[0].value;
    var cellularity = "Overall Cancer Cellularity (as percentage of area):" + pCell + "%";

    var pInSitu = document.getElementsByName("pInSitu")[0].value;
    var inSitu = "Percentage of cancer that is in situ disease: " + pInSitu + "%";

    var nLn = document.getElementsByName("nLn")[0].value;
    var numberOfPositiveNodes = "Number of positive lymph nodes: " + nLn;

    var dMet = document.getElementsByName("dMet")[0].value;
    var diameter = "Diameter of largest metastasis :" + dMet + " mm ";

    var rcbIndex = document.getElementsByName("rcbIndex")[0].value;

    var rcbClass = document.getElementsByName("rcbClass")[0].value;

    var finalString = "Primary Tumor Bed \n" + primaryTumorBedArea + "\n" + cellularity + "\n" + inSitu + "\n"
                + "\n"
                + "Lymph nodes: " + "\n" + numberOfPositiveNodes + "\n" + diameter + "\n"
                + "\n"
                + "RCB index: " + rcbIndex + "\n"
                + "RCB Class: " + rcbClass + "\n";
    alert ( "copy to clipboard" + finalString);

}
})(





);


