/* Trigger for MasonryLayout */
setTimeout(MasonryLayout,200);
/* Cubes colorlist */
var colorsList = [
    "#EB6161",
    "#5B5EB3",
    "#C8DE42",
    "#4193A5",
    "#EFCECE",
    "#6A286B",
    "#CE3B44",
    "#899ED2",
    "#C843A3",
    "#2CE25F",
    "#3B3B4F",
    "#C09DDB",
    "#B9672C",
    "#DBDE4A",
    "#32A5A5",
    "#FFA0C2",
    "#7990E3",
    "#76DA86",
    "#878787",
    "#907195",
    "yellowgreen"
];
MasonryCubes();

/*Masonry layout function */
function MasonryLayout(){
    var elem = document.querySelector(".grid");
    var msnry = new Masonry(elem, {
        // options
        itemSelector: ".grid-item",
        columnWidth: 20,
        horizontalOrder: true,
        fitWidth: true
    });
}
/* MasonryCubes function creates the cubes width:200px and height is dynamicly grows and background color from colorsList array. And append the .grid class every cube*/
function MasonryCubes() {
    for (var i = 0; i <= 20; i++) {
        $(".grid").append(
            `<div class="grid-item box${i}" style="background-color:${
            colorsList[i]}; height:${i + 5}rem; width:200px;margin:5px;"><span>${i + 1}<span></div>`
        );
    }
}
