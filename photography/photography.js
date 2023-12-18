import { photo_list } from './photo_list.js'

function load_photo_gallery() {
    // operates on the photography.html page
    var portraits = shuffleArray(Object.keys(photo_list['portraits']))
    var landscapes = shuffleArray(Object.keys(photo_list['landscapes']))
    var panoramas = shuffleArray(Object.keys(photo_list['panoramas']))

    var container_div = d3.select("#photo-gallery")

    var portrait_ctr = 0
    var landscape_ctr = 0
    var panorama_ctr = 0

    while (portrait_ctr < portraits.length ||
            landscape_ctr < landscapes.length ||
            panorama_ctr < panoramas.length) {
        
        var photo_div = container_div.append("div")
                                    .attr("class", "row");

        photo_div.selectAll("figure")
                .data(portraits.slice(portrait_ctr, portrait_ctr+4))
                .enter()
                .append("figure")
                .attr("class", "col-md-3 col-sm-12 photo-gallery-image")
                .append("img")
                .attr("width", "100%")
                .attr("class", "portrait")
                .attr("loading", "lazy")
                .on("click", function(event, d) {
                    loadPhotoInViewer('portraits/' + d);
                });
        portrait_ctr = Math.min(portrait_ctr+4, portraits.length)

        var photo_div = container_div.append("div")
                                    .attr("class", "row");

        photo_div.selectAll("figure")
                .data(landscapes.slice(landscape_ctr, landscape_ctr+2))
                .enter()
                .append("figure")
                .attr("class", "col-md-6 col-sm-12 photo-gallery-image")
                .append("img")
                .attr("width", "100%")
                .attr("class", "landscape")
                .attr("loading", "lazy")
                .on("click", function(event, d) {
                    loadPhotoInViewer('landscapes/' + d);
                });
        landscape_ctr = Math.min(landscape_ctr+2, landscapes.length)
        
        if (panorama_ctr < panoramas.length) {
            var photo_div = container_div.append("div")
                                        .attr("class", "row");

            photo_div.selectAll("figure")
                .data([panoramas[panorama_ctr]])
                .enter()
                .append("figure")
                .attr("class", "col-md-12 col-sm-12 photo-gallery-image")
                .append("img")
                .attr("width", "100%")
                .attr("class", "panorama")
                .attr("loading", "lazy")
                .on("click", function(event, d) {
                    loadPhotoInViewer('panoramas/' + d);
                });
            panorama_ctr += 1
        }
    }

    // set image container dimensions for lazy loading to work as expected
    // compute portrait image height
    const portraitImgWidth = d3.select(".portrait").node().clientWidth;
    const portraitImgHeight = portraitImgWidth * 3/2;

    // compute landscape image height
    const landscapeImgWidth = d3.select(".landscape").node().clientWidth;
    const landscapeImgHeight = landscapeImgWidth * 2/3;

    // compute panorama image height
    const panoramaImgWidth = d3.select(".panorama").node().clientWidth;
    const panoramaImgHeight = panoramaImgWidth * 2/3;

    d3.selectAll(".portrait").attr("height", portraitImgHeight);
    d3.selectAll(".landscape").attr("height", landscapeImgHeight);
    d3.selectAll(".panorama").attr("height", panoramaImgHeight);

    // set image paths for the images to be actually loaded
    d3.selectAll(".portrait")
        .data(portraits)
        .enter()
        .attr("src", function(d) {
            photo_strip.push('portraits/' + d);
            return 'portraits/' + d;
        });

    d3.selectAll(".landscape")
        .data(landscapes)
        .enter()
        .attr("src", function(d) {
            photo_strip.push('landscapes/' + d);
            return 'landscapes/' + d;
        });
    
    d3.selectAll(".panorama")
        .data(panoramas)
        .enter()
        .attr("src", function(d) {
            photo_strip.push('panoramas/' + d);
            return 'panoramas/' + d;
        });

    d3.select("#previous-photo").node().addEventListener('click', previousPhoto);
    d3.select("#next-photo").node().addEventListener('click', nextPhoto);
    d3.select("#close-photo-viewer").node().addEventListener('click', closePhotoViewer);
}

var photo_strip = [];
var current_photo = null;

function loadPhotoInViewer(photo_path) {
    // console.log(photo_path);
    current_photo = photo_path;

    d3.select("#photo-viewer")
        .style("display", "block");

    if (photo_path.includes('panoramas')) {
        const img = new Image();
        img.src = photo_path;
        img.onload = function() {
            const imgWidth = img.width;
            const imgHeight = img.height;
            const imgAspectRatio = imgWidth/imgHeight;

            const divAspectRatio = d3.select("#photo-viewer-main").node().clientWidth/d3.select("#photo-viewer-main").node().clientHeight;

            // console.log(imgAspectRatio)
            // console.log(divAspectRatio)

            d3.select("#expandedImg")
                .attr("src", photo_path)
                .attr("width", function() {
                    return divAspectRatio > imgAspectRatio ? null : "100%";
                })
                .attr("height", function() {
                    return divAspectRatio > imgAspectRatio ? "100%" : null;
                });

            d3.select("#caption")
                .text(photo_list['panoramas'][photo_path.substring(photo_path.indexOf('/')+1)]['Caption']);

            d3.select("#story")
                .text(photo_list['panoramas'][photo_path.substring(photo_path.indexOf('/')+1)]['Story']);

            d3.select("#exif")
                .text(photo_list['panoramas'][photo_path.substring(photo_path.indexOf('/')+1)]['EXIF Details']);
        }
    }
    else if (photo_path.includes('landscapes')) {
        d3.select("#expandedImg")
            .attr("src", photo_path)
            .attr("width", null)
            .attr("height", "100%");

        d3.select("#caption")
            .text(photo_list['landscapes'][photo_path.substring(photo_path.indexOf('/')+1)]['Caption']);

        d3.select("#story")
            .text(photo_list['landscapes'][photo_path.substring(photo_path.indexOf('/')+1)]['Story']);

        d3.select("#exif")
            .text(photo_list['landscapes'][photo_path.substring(photo_path.indexOf('/')+1)]['EXIF Details']);
    }
    else {
        // photo_path.includes('portraits')
        d3.select("#expandedImg")
            .attr("src", photo_path)
            .attr("width", null)
            .attr("height", "100%");

        d3.select("#caption")
            .text(photo_list['portraits'][photo_path.substring(photo_path.indexOf('/')+1)]['Caption']);

        d3.select("#story")
            .text(photo_list['portraits'][photo_path.substring(photo_path.indexOf('/')+1)]['Story']);

        d3.select("#exif")
            .text(photo_list['portraits'][photo_path.substring(photo_path.indexOf('/')+1)]['EXIF Details']);
    }
}

function closePhotoViewer() {
    d3.select("#photo-viewer")
        .style("display", "none");
}

function previousPhoto() {
    var photo_sid = photo_strip.indexOf(current_photo);
    photo_sid = (photo_sid == 0) ? photo_strip.length-1 : photo_sid-1;
    loadPhotoInViewer(photo_strip[photo_sid]);
}

function nextPhoto() {
    var photo_sid = photo_strip.indexOf(current_photo);
    photo_sid = (photo_sid == photo_strip.length-1) ? 0 : photo_sid+1;
    loadPhotoInViewer(photo_strip[photo_sid]);
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) { 
   
        // Generate random number 
        var j = Math.floor(Math.random() * (i + 1));
                   
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
       
    return array;
}

load_photo_gallery();