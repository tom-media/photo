function main(){
    $.ajax({
        url: '/img',
        type: 'GET',
        success: function(response, status, http) {
            if (response) {
                    console.log('AJAX worked!');
                    console.log(response);
                    createThumb(response);
                }
            }
        });
};

function createThumb(items){
    let container =  $('#card-container');
    items.forEach(element => {
        let img = document.createElement('img');
        img.src = `thumbnails/${element}`;
        container.append(img); 
    });
}

main();