function addNewSite() {
    var name = $('#name').val();
    var url = $('#url').val();
    var type = $('#type').val();

    if (name && url && type) {
        var licence = {name: name, url: url, type: type};

        console.log('sending licence = ' + licence);

        var postedElement = $.ajax('http://localhost:3123/api/licences', {
            data: JSON.stringify(licence),
            type: 'POST',
            contentType: 'application/json'
        });
        
        console.log('postedElement: ' + postedElement);
    }
}
