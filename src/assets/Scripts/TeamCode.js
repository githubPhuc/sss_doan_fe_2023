//cookies

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}


var config_search = {
    '.chosen-select-search': {},
    '.chosen-select-deselect': { allow_single_deselect: true },
    '.chosen-select-no-single': { disable_search_threshold: 10 },
    '.chosen-select-no-results': { no_results_text: 'Oops, nothing found!' },
    '.chosen-select-width': { width: "95%" },
    'search_contains': true
}
for (var selector in config_search) {
    $(selector).chosen(config_search);
}
