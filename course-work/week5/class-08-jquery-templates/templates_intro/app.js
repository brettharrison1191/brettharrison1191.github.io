var presidentObject = {
    presidents: [
        'Washington',
        'Adams',
        'Jefferson',
        'Madison',
        'Monroe',
        'Adams',
        'Jackson',
        'Van Buren',
        'Harrison',
        'Tyler',
        'Polk',
        'Taylor',
        'Fillmore',
        'Pierce',
        'Buchanan',
        'Lincoln',
        'Johnson',
        'Grant',
        'Hayes',
        'Garfield',
        'Arthur',
        'Cleveland',
        'Harrison',
        'Cleveland',
        'McKinley',
        'Roosevelt',
        'Taft',
        'Wilson',
        'Harding',
        'Coolidge',
        'Hoover',
        'Roosevelt',
        'Truman',
        'Eisenhower',
        'Kennedy',
        'Johnson',
        'Nixon',
        'Ford',
        'Carter',
        'Reagan',
        'Bush',
        'Clinton',
        'Bush',
        'Obama',
    ]
}

presidentObject.presidents.forEach(function(president){
    $('#jquery-list').append('<option>' + president + '</option>')
})

var titleObj = {
        title: 'US Presidents',
        description: 'A JSD project',
}

//2: get template and compile using handlebars
var titleSource = $('#title-template').html();
var titleCompile = Handlebars.compile(titleSource)

// 3: pass compiled template JS object
var titleTemplate = titleCompile(titleObj);

// 4: append template to the Dom
$('#title').append(titleTemplate);

//President List append

var presidentSource = $('#president-template').html();
var presidentCompile = Handlebars.compile(presidentSource);
var presidentTemplate = presidentCompile(presidentObject);

console.log(presidentSource);
console.log(presidentCompile);
console.log(presidentTemplate);

$('#handlebars-list').append(presidentTemplate);




