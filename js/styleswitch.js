/*------------------------------------------------------------------------
 * set_cookie(name, value, days)
 * 
 * Set a cookie with the name and value passed as the first two arguments, 
 * set to expire in the number of days specified in the third argument.
 *------------------------------------------------------------------------*/

function set_cookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toGMTString();
    }
    else 
        expires = "";

    document.cookie = name + "=" + value + expires + "; path=/";
}


/*------------------------------------------------------------------------
 * get_cookie(name)
 * 
 * Returns the value of the cookie identified by the name argument.
 *------------------------------------------------------------------------*/

function get_cookie(name) {
    var namestr  = name + "=";
    var cookbits = document.cookie.split(';');
    var n;

    for(n = 0; n < cookbits.length; n++) {
        var c = cookbits[n];

        /* remove leading whitespace */
        while (c.charAt(0) == ' ') 
            c = c.substring(1, c.length);

        /* if the name start this cookie fragment, return the value */
        if (c.indexOf(namestr) == 0) 
            return c.substring(namestr.length, c.length);
    }
    return null;
}

/*------------------------------------------------------------------------
 * functions to handle multiple handler for onload and onunload events.
 *------------------------------------------------------------------------*/

var onload_functions   = new Array();
var onunload_functions = new Array();

function page_onload(func) {
    onload_functions.push(func);
}

function page_onunload(func) {
    onunload_functions.push(func);
}

function page_load() {
    for(var i = 0; i < onload_functions.length; i++) {
        try { eval(onload_functions[i]); }
        catch(err) { alert(err) }
    }
}

function page_unload() {
    for(var i = 0; i < onunload_functions.length; i++)
        eval(onunload_functions[i]);
}

window.onload   = page_load;
window.onunload = page_unload;
page_onload('load_style()');
// page_onunload('save_style()');

/*------------------------------------------------------------------------
 * load_style()
 * 
 * Initialises the stylesheet based on any cookie currently set.
 *------------------------------------------------------------------------*/

function load_style() {
    var style;
    if (style = get_cookie("stylesheet"))
        set_style(style);
    if (style = get_cookie("body"))
        document.getElementById("body").className = style;
}


/*------------------------------------------------------------------------
 * save_style()
 * 
 * Saves the stylesheet name back to a cookie
 *------------------------------------------------------------------------*/

function save_style() { 
    var style;
    if (style = get_style())
        set_cookie("stylesheet", style, 365);
}


/*------------------------------------------------------------------------
 * get_style()
 * 
 * Returns the title of the current active stylesheet.
 *------------------------------------------------------------------------*/

function get_style() {
    var elems = document.getElementsByTagName("link");
    var n, elem, title;

    for (n = 0; (elem = elems[n]); n++) {
        if (elem.getAttribute("rel").indexOf("style") != -1 
        && (title = elem.getAttribute("title"))
        && ! elem.disabled)
            return title;
    }
    return null;
}


/*------------------------------------------------------------------------
 * set_style(title)
 * 
 * Set the active stylesheet by enabling the <link rel="style" ...> 
 * element that has a title attribute matching the title argument,
 * and disabling all others.
 *------------------------------------------------------------------------*/

function set_style(title) {
    var elems = document.getElementsByTagName("link");
    var n, elem, tattr;
//    alert("SET " + title);

    set_cookie("stylesheet", title, 365);

    for (n = 0; n < elems.length; n++) {
        elem = elems[n];

        if (elem.getAttribute("rel").indexOf("style") != -1 
        && (tattr = elem.getAttribute("title"))) {
            elem.disabled = true;
            if (tattr == title) {
                elem.disabled = false;
            }
        }
    }
    return false;
}
