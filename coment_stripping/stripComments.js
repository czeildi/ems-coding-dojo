'use strict';

function stripComments(input, markers){
    return stripWhiteSpacesFromLineEnds(removeComments(input, markers));

}

function stripWhiteSpacesFromLineEnds(input) {
    return input.replace(/[ \t]*\n/g, '\n')
                .replace(/[ \t]*$/, '');
}

function removeComments(input, markers = []) {
    markers = markers.length > 0 ? markers : ['æ'];
    let stringOfMarkers = markers.join('|');
    return input.replace(new RegExp(`(${stringOfMarkers}).*\n`, 'g'), '\n')
                .replace(new RegExp(`(${stringOfMarkers}).*$`), '');
}

module.exports = stripComments;
