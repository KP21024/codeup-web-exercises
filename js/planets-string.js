(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune"
    var planetsArray;
    planetsArray = planetsString.split("|");
    console.log(planetsArray);




    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

      // console.log(planetsArray);
    //
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?

      var brString = "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune";

     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    var planets2 = planetsArray.join('br');
    console.log(planets2);
    var planetsList = '<ul><li>' + planetsArray.join('</li><li>') + '<li></ul>';
    console.log(planetsList);

    // var unorderedList = <ul><li> + "Mercury"<li>Venus<li>Earth<li>Mars<li>Jupiter<li>Saturn<li>Uranus<li>Neptune<li>"</ul>
 })();