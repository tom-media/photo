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
{/* <a class="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
  <img class="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-3.jpg" alt="Golden Gate Bridge with San Francisco in distance">
</a> */}

    for(let i = 0; i < items.length; i++) {
        setTimeout(()=>{
            let a = document.createElement('a');
            a.href = `full/${items[i]}`;
            a.setAttribute('data-lightbox','example');
            a.setAttribute('data-title','example title');
            let img = document.createElement('img');
            img.classList='fadeIn';
            img.src = `thumbnails/${items[i]}`;
            a.append(img);
            container.append(a); 
            console.log('appended')
        },i*100)
    };
}

main();