news = [
    {
        'timestamp': 'August 2023',
        'event': 'Short paper accepted at IEEE VIS 2023 - "WhaleVis: Visualizing the History of Commercial Whaling"'
    },
    {
        'timestamp': 'August 2023',
        'event': 'Presented a talk and poster for HydroVis - an interactive dashboard for understanding ensemble data assimilation forecasts for the WRF-Hydro hydrology model, at the National Center for Atmospheric Research (NCAR)'
    },
    {
        'timestamp': 'May 2023 to September 2023',
        'event': 'Summer internship in the SIParCS program at the National Center for Atmospheric Research (NCAR)'
    },
    {
        'timestamp': 'April 2023',
        'event': 'Presented my work - "WhaleVis: A New Visualization Tool for the IWC Catch Database" at the International Whaling Commission Scientific Committeee meeting'
    },
    {
        'timestamp': 'October 2022',
        'event': 'Presented my paper - "Studying Early Decision Making with Progressive Bar Charts" at IEEE VIS 2022 Oklahoma City'
    },
    {
        'timestamp': 'July 2022',
        'event': 'Paper accepted at IEEE VIS 2022 - "Studying Early Decision Making with Progressive Bar Charts"'
    },
    {
        'timestamp': 'September 2021',
        'event': 'Transferred to University of Washington, Seattle with Dr. Leilani Battle'
    },
    {
        'timestamp': 'June 2021 to September 2021',
        'event': 'Research Intern at INRIA Saclay, France with Dr. Jean-Daniel Fekete'
    },
    {
        'timestamp': 'January 2021',
        'event': 'Started PhD in Computer Science at the University of Maryland, College Park with Dr. Leilani Battle'
    },
    {
        'timestamp': 'December 2020',
        'event': 'Graduated with a Masters in Computer Science from the University of Maryland, College Park'
    },
    {
        'timestamp': 'June 2019 to August 2019',
        'event': 'Research Assistant Intern at Fraunhofer CESE, Maryland, USA with Dr. Marcel Schäfer'
    },
    {
        'timestamp': 'August 2018',
        'event': 'Started Masters in Computer Science at the University of Maryland, College Park'
    },
    {
        'timestamp': 'July 2016 to July 2018',
        'event': 'Software Developer at nVIDIA in the GeForce Experience Team'
    },
    {
        'timestamp': 'August 2016',
        'event': 'Graduated with a Bachelors in Computer Science from BITS-Pilani Goa Campus'
    },
    {
        'timestamp': 'July 2015 to December 2015',
        'event': 'Software Development Intern at nVIDIA in the GeForce Experience Team'
    },
    {
        'timestamp': 'June 2015',
        'event': 'Videography Intern at Zone Startups India'
    },
    {
        'timestamp': 'June 2014 to August 2014',
        'event': 'Web Development Intern at Infibeam Avenues'
    },
    {
        'timestamp': 'August 2012',
        'event': 'Started Bachelors in Computer Science at BITS-Pilani Goa Campus'
    }
]

function load_news() {
    d3.select("#news-list")
        .selectAll("li")
        .data(news.slice(0,5), d => d.timestamp)
        .enter()
            .append("li")
            .attr("class", "list-group-item")
            .append("text").html(d => "<b>" + d.timestamp + "</b> - " + d.event)
}

function expandContractNews() {
    var btn = d3.select("#news-expand-contract")
    
    if (btn.node().value === "contracted") {
        btn.node().value = "expanded"
        btn.text("-")

        d3.select("#news-list")
            .selectAll("li")
            .data(news, d => d.event)
            .enter()
                .append("li")
                .attr("class", "list-group-item")
                .append("text").html(d => "<b>" + d.timestamp + "</b> - " + d.event)
    }
    else {
        btn.node().value = "contracted"
        btn.text("+")

        d3.select("#news-list")
            .selectAll("li")
            .select(function(d,i) {
                return i > 4 ? this : null
            })
            .remove()            
    }
}

blogs = [
    {
        'title': 'Visualizing Historical Whaling Voyages over Time',
        'url': 'https://dl.acm.org/doi/10.1145/3611650',
        'authors': 'Leilani Battle, Ameya Patil, Zoe Rand, Trevor Branch'
    },
    {
        'title': 'A Bifocal View of Data Visualization Research of the Past and Present',
        'url': 'https://medium.com/hcil-at-umd/a-bifocal-view-data-visualization-research-of-the-past-and-present-46e23e24cba7',
        'authors': 'Deepthi Raghunandan, Ameya Patil'
    },
    {
        'title': 'Devkund - A Travelogue',
        'url': 'https://ameyabp.wordpress.com/2017/06/09/devkund/',
        'authors': 'Ameya Patil'
    },
    {
        'title': 'The Secret of Cycling',
        'url': 'https://ameyabp.wordpress.com/2016/12/03/the-secret-of-cycling/',
        'authors': 'Ameya Patil'
    },
    {
        'title': 'Of Humans and Festivals',
        'url': 'https://ameyabp.wordpress.com/2016/10/16/of-humans-and-festivals/',
        'authors': 'Ameya Patil'
    },
    {
        'title': "Virat Kohli's Batting Nuances",
        'url': 'https://ameyabp.wordpress.com/2016/10/01/kohlis-batting-nuances/',
        'authors': 'Ameya Patil'
    },
    {
        'title': 'The Humble Kachchh - A Travelogue',
        'url': 'https://ameyabp.wordpress.com/2016/12/31/the-humble-kachchh/',
        'authors': 'Ameya Patil'
    },
    {
        'title': 'Amdavad - A Travelogue',
        'url': 'https://ameyabp.wordpress.com/2016/09/18/amdavad/',
        'authors': 'Ameya Patil'
    },
    {
        'title': 'Himalayan Saga - A Travelogue',
        'url': 'https://ameyabp.wordpress.com/2016/09/24/himalayan-saga/',
        'authors': 'Ameya Patil'
    },
]

function load_blogs() {
    d3.select("#blogs-list")
        .selectAll("li")
        .data(blogs.slice(0,5), d => d.title)
        .enter()
            .append("li")
            .attr("class", "list-group-item")
            .append("text").html(d => "<a href=" + d.url + " target=\"_blank\" rel=\"noopener noreferrer\">" + d.title + "</a><br>by " + d.authors)
}

function expandContractBlogs() {
    var btn = d3.select("#blogs-expand-contract")
    
    if (btn.node().value === "contracted") {
        btn.node().value = "expanded"
        btn.text("-")

        d3.select("#blogs-list")
            .selectAll("li")
            .data(blogs, d => d.title)
            .enter()
                .append("li")
                .attr("class", "list-group-item")
                .append("text").html(d => "<a href=" + d.url + " target=\"_blank\" rel=\"noopener noreferrer\">" + d.title + "</a><br>by " + d.authors)
    }
    else {
        btn.node().value = "contracted"
        btn.text("+")

        d3.select("#blogs-list")
            .selectAll("li")
            .select(function(d,i) {
                return i > 4 ? this : null
            })
            .remove()            
    }
}

projects = [
    {
        'title': 'HydroVis',
        'subtitle': 'Visualization Dashboard for Ensemble Data Assimilation Forecasting using WRF-Hydro',
        'teaser': 'projects/hydroVis/teaser.png',
        'teaser-alt-text': 'Snapshot of the HydroVis interface',
        'description': 'Designed and implemented an interactive dashboard for analyzing ensemble data assimilation forecasts of freshwater floods in river systems. The forecasts are made using the WRF-Hydro hydrology model. This was an internship project in the Data Assimilation Research Section (DAReS) team at the National Center for Atmospheric Research (NCAR).',
        'url': 'https://github.com/ameyabp/DART/tree/main/hydroVis',
        'button-text': 'Code'
    },
    {
        'title': 'WhaleVis',
        'subtitle': 'Visualization Tool for the IWC Catch Database',
        'teaser': 'projects/whaleVis/teaser.png',
       ' teaser-alt-text': 'Snapshot of the WhaleVis interface',
        'description': 'Created an interactive dashboard for visual analysis of historical commercial whale hunting. The dashboard is aimed to facilitate inferring spatial distribution of whale populations from the catch numbers and the whale search effort, eventually helping in whale conservation efforts.',
        'url': 'https://observablehq.com/@whales/whale-vis-dashboard-expedition-routes',
        'button-text': 'Dashboard'
    },
    {
        'title': 'Lumos! - Board and Video Game',
        'subtitle': 'Course Project for Game Design - INST728E',
        'teaser': 'projects/lumos/teaser.png',
       ' teaser-alt-text': 'Snapshots of the board and video game',
        'description': 'Designed a board game and a video game based on the theme of propagating light in a 2D space.',
        'url': 'projects/lumos/lumos.html',
        'button-text': 'Details'
    },
    {
        'title': 'Natural Calamities Visualization Tool',
        'subtitle': 'Course Project for Interactive Data Analytics - CMSC828D',
        'teaser': 'projects/calamities/teaser.png',
       ' teaser-alt-text': 'Snapshot of the Natural Calamities Visualization Tool',
        'description': 'Implemented a geo data analysis/visualization tool with interactions to understand the natural calamities that happened in the US over 20 years from 1950 to 2022. Front end was designed using d3, server was setup using python Flask and Postgres was used for backend.',
        'url': 'projects/calamities/calamities.html',
        'button-text': 'Details'
    },
    {
        'title': 'Physically Based Clustering Visualization',
        'subtitle': 'Course Project for Physically Based Modelling, Simulation and Animation - CMSC828X',
        'teaser': 'projects/pbcv/teaser.png',
       ' teaser-alt-text': 'Snapshot of the Physically Based Clustering Visualization Tool',
        'description': 'Implemented a data analysis/visualization tool with interactions modelled on real-life physical forces using the D3-Force API. The specific use case targeted was evaluating word embeddings created by different methods, where words closer in the vector space belonged to the same cluster.',
        'url': 'projects/pbcv/pbcv.html',
        'button-text': 'Details'
    },
    {
        'title': 'ShadowGAN',
        'subtitle': 'Course Project for Advanced Computer Graphics - CMSC740',
        'teaser': 'projects/shadowGan/teaser.png',
       ' teaser-alt-text': 'Sample input and outputs for ShadowGAN',
        'description': 'Trained a cGAN (Conditional Generative Adversarial Network) model to generate shadows in a scene, given the scene without shadows, the depth map and the lightsource position map. Used the pix2pixmodel for the task.',
        'url': 'https://github.com/ameyabp/pytorch-CycleGAN-and-pix2pix',
        'button-text': 'Details'
    },
    {
        'title': 'Tunebox - Virtual Music Instrument Dashboard',
        'subtitle': 'Course Project for Creative Multimedia - BITSF398',
        'teaser': 'projects/tunebox/teaser.png',
       ' teaser-alt-text': 'Snapshots of the board and video game',
        'description': 'Created a gesture based virtual music instrument dashboard using LEAP Motion. Implemented string instruments like piano and harp, and percussion instrument like drums. Implementation done using Java Swing and LEAP Motion SDK',
        'url': null,
        'button-text': null
    }
]

function load_projects(data) {
    var project_cards_div = d3.select("#project-cards")

    for (var i=0; i<data.length; i++) {
        const project = data[i]

        var card = project_cards_div.append("div")
                                        .attr("class", "card col-md-6 col-sm-12 mb-3 mr-5 ml-5")

        card.append("h5")
            .attr("class", "card-header")
            .text(project.title)

        card.append("img")
            .attr("class", "card-img-top mt-2")
            .attr("src", project.teaser)
            .attr("alt", project['teaser-alt-text'])

        var card_body = card.append("div")
                            .attr("class", "card-body")
            
        card_body.append("h6")
                    .attr("class", "card-subtitle")
                    .text(project.subtitle)
        
        card_body.append("br")

        card_body.append("p")
                    .attr("class", "card-text")
                    .text(project.description)

        if (project.url) {
            card_body.append("a")
                    .attr("href", project.url)
                    .attr("class", "btn btn-primary")
                    .attr("target", "_blank")
                    .attr("rel", "noopener noreferrer")
                    .text(project['button-text'])
        }
    }
}

function expandContractProjects() {
    var btn = d3.select("#projects-expand-contract")
    
    if (btn.node().value === "contracted") {
        btn.node().value = "expanded"
        btn.text("-")

        load_projects(projects.slice(4))
    }
    else {
        btn.node().value = "contracted"
        btn.text("+")

        d3.select("#project-cards")
            .selectAll(".card")
            .select(function(d,i) {
                return i > 3 ? this : null
            })
            .remove()            
    }
}

publications = {
    'whaleVisShort': {
        'title': 'WhaleVis: Visualizing the History of Commercial Whaling',
        'venue': 'IEEE Transactions on Visualization and Computer Graphics, 2024',
        'authors': 'A. Patil, Z. Rand, T. Branch, L. Battle',
        'doi': null,
        'paper': 'https://arxiv.org/pdf/2308.04552.pdf',
        'video': null,
        'presentation': null,
        'data': null,
        'bibtex': '\n\
            @misc{patil2023whalevis,\n\
            title={WhaleVis: Visualizing the History of Commercial Whaling},\n\
            author={Ameya Patil and Zoe Rand and Trevor Branch and Leilani Battle},\n\
            year={2023},\n\
            eprint={2308.04552},\n\
            archivePrefix={arXiv},\n\
            primaryClass={cs.DB}\n\
        }'
    },
    'whaleVis': {
        'title': 'WhaleVis: A New Visualization Tool for the IWC Catch Database',
        'venue': 'International Whaling Commission, SC/69A/GDR/04, 2023',
        'authors': 'A. Patil, Z. Rand, T. Branch, L. Battle',
        'doi': 'https://archive.iwc.int/?r=20005&k=46e2592325',
        'paper': 'projects/whaleVis/SC_69A_GDR_04_Patil_etal.pdf',
        'video': 'projects/whaleVis/whaleVis.mp4',
        'presentation': null,
        'data': null,
        'bibtex': '\n\
        @article{patil2023whalevis,\n\
            title={WhaleVis: A new visualization tool for the IWC catch database.},\n\
            author={Patil, Ameya and Rand, Zoe and Branch, Trevor and Battle, Leilani},\n\
            journal={Scientific Committee of the International Whaling Commission},\n\
            volume={SC/69A/GDR/04},\n\
            year={2023}\n\
        }'
    },
    'dancing-bars': {
        'title': 'Studying Early Decision Making with Progressive Bar Charts',
        'venue': 'IEEE Transactions on Visualization and Computer Graphics, 2023',
        'authors': 'A. Patil, G. Richer, C. Jermaine, D. Moritz, J.-D. Fekete',
        'doi': 'https://dx.doi.org/10.1109/TVCG.2022.3209426',
        'paper': 'https://hal.archives-ouvertes.fr/hal-03738461/',
        'video': 'https://youtu.be/ygpu92JMhA0',
        'presentation': 'https://www.youtube.com/watch?v=L523gBLIM5c&t=10260s',
        'data': 'https://osf.io/tn2ph/?view_only=5a25891ca4a8431085488a8f3e38affc',
        'bibtex': '\n\
        @ARTICLE{patil2023studying,\n\
            author={Patil, Ameya and Richer, Gaëlle and Jermaine, Christopher and Moritz, Dominik and Fekete, Jean-Daniel},\n\
            journal={IEEE Transactions on Visualization and Computer Graphics}, \n\
            title={Studying Early Decision Making with Progressive Bar Charts}, \n\
            year={2023},\n\
            volume={29},\n\
            number={1},\n\
            pages={407-417},\n\
            doi={10.1109/TVCG.2022.3209426}\n\
        }'
    },
    'kdGan': {
        'title': 'Compressing GANs using Knowledge Distillation',
        'venue': 'CoRR, vol. abs/1902.00159, 2019.',
        'authors': 'A. Aguinaldo, P.-Y. Chiang, A. Gain, A. Patil, K. Pearson and S. Feizi',
        'doi': 'https://arxiv.org/abs/1902.00159',
        'paper': 'https://arxiv.org/pdf/1902.00159.pdf',
        'video': null,
        'presentation': null,
        'data': null,
        'bibtex': '\n\
        @article{aguinaldo2019compressing,\n\
            author       = {Angeline Aguinaldo and Ping{-}Yeh Chiang and Alexander Gain and Ameya Patil and Kolten Pearson and Soheil Feizi},\n\
            title        = {Compressing GANs using Knowledge Distillation},\n\
            journal      = {CoRR},\n\
            volume       = {abs/1902.00159},\n\
            year         = {2019},\n\
            url          = {http://arxiv.org/abs/1902.00159},\n\
            eprinttype    = {arXiv},\n\
            eprint       = {1902.00159},\n\
            timestamp    = {Tue, 21 May 2019 18:03:39 +0200},\n\
            biburl       = {https://dblp.org/rec/journals/corr/abs-1902-00159.bib},\n\
            bibsource    = {dblp computer science bibliography, https://dblp.org}\n\
        }'
    }
}

// publication_keys = [
//     'whaleVisShort',
//     'whaleVis',
//     'dancing-bars',
//     'kdGan'
// ]

function load_publications(data) {
    var publications_list = d3.select("#publications-list");

    for (var i=0; i<data.length; i++) {
        const publication = publications[data[i]]

        var entry = publications_list.append("li")
                                    .attr("class", "list-group-item")

        entry.append("h5")
            .text(publication.title)

        entry.append("i")
            .text(publication.venue)

        entry.append("br")
        entry.append("text").text(publication.authors)
        entry.append("br")

        // doi
        if (publication.doi) {
            entry.append("a")
                .attr("href", publication.doi)
                .attr("target", "_blank")
                .attr("rel", "noopener noreferrer")
                .attr("class", "tab")
                .append("img")
                .attr("src", "logos/doi.png")
                .attr("height", 22)
                .attr("class", "zoom")

            entry.append("text").text(" DOI ")
        }

        // paper
        entry.append("a")
        .attr("href", publication.paper)
        .attr("target", "_blank")
        .attr("rel", "noopener noreferrer")
        .attr("class", "tab")
        .append("img")
        .attr("src", "logos/pdf.png")
        .attr("height", 22)
        .attr("class", "zoom")

        entry.append("text").text(" Paper ")

        // video
        if (publication.video) {
            entry.append("a")
            .attr("href", publication.video)
            .attr("target", "_blank")
            .attr("rel", "noopener noreferrer")
            .attr("class", "tab")
            .append("img")
            .attr("src", "logos/video.png")
            .attr("height", 22)
            .attr("class", "zoom")

            entry.append("text").text(" Video ")
        }

        // presentation
        if (publication.presentation) {
            entry.append("a")
            .attr("href", publication.presentation)
            .attr("target", "_blank")
            .attr("rel", "noopener noreferrer")
            .attr("class", "tab")
            .append("img")
            .attr("src", "logos/presentation.png")
            .attr("height", 22)
            .attr("class", "zoom")

            entry.append("text").text(" Presentation ")
        }

        // data
        if (publication.data) {
            entry.append("a")
            .attr("href", publication.data)
            .attr("target", "_blank")
            .attr("rel", "noopener noreferrer")
            .attr("class", "tab")
            .append("img")
            .attr("src", "logos/folder.png")
            .attr("height", 22)
            .attr("class", "zoom")

            entry.append("text").text(" Data ")
        }

        // bibtex
        entry.append("button")
        .attr("id", "bibtex-button")
        .style("border", "none")
        .attr("type", "button")
        .attr("onclick", "openModal('" + data[i] + "')")
        .append("img")
        .attr("src", "logos/cite.png")
        .attr("height", 22)
        .attr("class", "zoom")

        entry.append("text").text(" Bibtex ")
    }
}

// When the user clicks on the button, open the modal
function openModal(publicationKey) {
    var modal = d3.select("#bibtex-modal-div").node()
    modal.style.display = "block";
    d3.select("#bibtex").text(publications[publicationKey].bibtex)
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
    var modal = d3.select("#bibtex-modal-div").node()
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modal = d3.select("#bibtex-modal-div").node()
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

photo_list = {
    'landscapes': [
        'DSC_0002.JPG',
        'DSC_0004.JPG',
        'DSC_0024.JPG',
        'DSC_0025.JPG',
        'DSC_0051.JPG',
        'DSC_0109.JPG',
        'DSC_0147.jpg',
        'DSC_0166.JPG',
        'DSC_0180.JPG',
        'DSC_0193.JPG',
        'DSC_0221.JPG',
        'DSC_0261.JPG',
        'DSC_0339.JPG',
        'DSC_0392.jpg',
        'DSC_0436.JPG',
        'DSC_0446.jpg',
        'DSC_0449.jpg',
        'DSC_0463.JPG',
        'DSC_0488.JPG',
        'DSC_0569.JPG',
        'DSC_0693.JPG',
        'IMG_1702.jpg',
        'IMG_1838.jpg',
        'IMG_2166.jpg',
        'IMG_2297.JPG',
        'IMG_2785.jpg',
        'IMG_2786.jpg',
        'IMG_2805.jpg',
        'IMG_2814.jpg',
        'IMG_2874.jpg',
        'IMG_3061.jpg',
        'IMG_3265.jpg',
        'IMG_3446.jpg',
        'IMG_4063.jpg',
        'IMG_4303.jpg',
        'IMG_4306.jpg',
        'IMG_4320.jpg',
        'IMG_4325.jpg',
        'IMG_5492-Edit.jpg',
        'IMG_5637.jpg',
        'IMG_5710.jpg',
        'IMG_7341.jpg',
        'PXL_20210708_182444148.jpg',
        'PXL_20210716_180052945.jpg',
        'PXL_20210716_185055994.jpg',
        'PXL_20210730_103352598.jpg',
        'PXL_20210801_152019626.jpg',
        'PXL_20210801_154645341.jpg',
        'IMG_8359.jpg',
        'IMG_8734.jpg',
        'IMG_8493.jpg',
        'IMG_8689.jpg'
    ],
    'portraits': [
        'DSC_0111.JPG',
        'DSC_0118.JPG',
        'DSC_0217.JPG',
        'DSC_0277.JPG',
        'IMG_1242.jpg',
        'IMG_2354.jpg',
        'IMG_2800.jpg',
        'IMG_3465.jpg',
        'IMG_4322.jpg',
        'IMG_4411.jpg',
        'IMG_5419.jpg',
        'IMG_5585.jpg',
        'IMG_5927.jpg',
        'IMG_7356.jpg',
        'PXL_20210815_074704088.jpg',
        'PXL_20210918_071117160.jpg',
        'PXL_20211216_183050367.jpg',
        'IMG_8660.jpg'
    ],
    'panoramas': [
        'DSC_0110_pano.jpg',
        'IMG_2489_pano.jpg',
        'IMG_2794_pano.jpg',
        'IMG_3309_pano.jpg',
        'IMG_4579_pano.jpg',
        'IMG_5257_pano.jpg',
        'IMG_5347_pano.jpg',
        'IMG_5593_pano.jpg',
        'IMG_8618_pano.jpg',
        'IMG_9086_pano.jpg'
    ]
}

function load_sample_photograph() {
    // select a panorama for the sample photograph
    var photo_paths = []
    for (var i=0; i<1; i++) {
        var name = photo_list['panoramas'][Math.floor(Math.random() * photo_list['panoramas'].length)]
        photo_paths.push('./photography/panoramas/' + name)
    }

    d3.select("#sample-photo")
        .selectAll("figure")
        .data(photo_paths)
        .enter()
        .append("figure")
        .append("img")
        .attr("src", d => d)
        .attr("width", '100%')
        .attr("loading", "lazy")
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

var photo_strip = [];
var current_photo = null;

function load_photo_gallery() {
    // operates on the photography.html page
    var portraits = shuffleArray(photo_list['portraits'])
    var landscapes = shuffleArray(photo_list['landscapes'])
    var panoramas = shuffleArray(photo_list['panoramas'])

    var container_div = d3.select("#photo-gallery")

    var portrait_ctr = 0
    var landscape_ctr = 0
    var panorama_ctr = 0

    while (portrait_ctr < portraits.length ||
            landscape_ctr < landscapes.length ||
            panorama_ctr < panoramas.length) {
        
        var photo_div = container_div.append("div").attr("class", "row")

        photo_div.selectAll("figure")
                .data(portraits.slice(portrait_ctr, portrait_ctr+4))
                .enter()
                .append("figure")
                .attr("class", "col-md-3 col-sm-12 photo-gallery-image")
                .append("img")
                .attr("src", function(d) {
                    photo_strip.push('portraits/' + d);
                    return 'portraits/' + d;
                })
                .attr("width", "100%")
                .attr("loading", portrait_ctr < 4 ? "eager" : "lazy")
                .on("click", function(event, d) {
                    loadPhotoInViewer('portraits/' + d);
                });
        portrait_ctr = Math.min(portrait_ctr+4, portraits.length)

        var photo_div = container_div.append("div")
                                    .attr("class", "row")

        photo_div.selectAll("figure")
                .data(landscapes.slice(landscape_ctr, landscape_ctr+2))
                .enter()
                .append("figure")
                .attr("class", "col-md-6 col-sm-12 photo-gallery-image")
                .append("img")
                .attr("src", function(d) {
                    photo_strip.push('landscapes/' + d);
                    return 'landscapes/' + d;
                })
                .attr("width", "100%")
                .attr("loading", landscape_ctr < 2 ? "eager" : "lazy")
                .on("click", function(event, d) {
                    loadPhotoInViewer('landscapes/' + d);
                });
        landscape_ctr = Math.min(landscape_ctr+2, landscapes.length)
        
        if (panorama_ctr < panoramas.length) {
            var photo_div = container_div.append("div")
                                        .attr("class", "row")

            photo_div.selectAll("figure")
                .data([panoramas[panorama_ctr]])
                .enter()
                .append("figure")
                .attr("class", "col-md-12 col-sm-12 photo-gallery-image")
                .append("img")
                .attr("src", function(d) {
                    photo_strip.push('panoramas/' + d);
                    return 'panoramas/' + d;
                })
                .attr("width", "100%")
                .attr("loading", panorama_ctr < 1 ? "eager": "lazy")
                .on("click", function(event, d) {
                    loadPhotoInViewer('panoramas/' + d);
                });
            panorama_ctr += 1
        }
    }
}

function loadPhotoInViewer(photo_path) {
    console.log(photo_path);
    current_photo = photo_path;

    d3.select("#photo-viewer")
        .style("display", "block");

    if (photo_path.includes('panoramas')) {
        d3.select("#expandedImg")
            .attr("src", photo_path)
            .attr("width", "100%")
            .attr("height", null);

        d3.select("#caption")
            .text("Caption");

        d3.select("#story")
            .text("Story");

        d3.select("#exif")
            .text("EXIF details");
    }
    else if (photo_path.includes('landscapes')) {
        d3.select("#expandedImg")
            .attr("src", photo_path)
            .attr("width", null)
            .attr("height", "100%");

        d3.select("#caption")
            .text("Caption");

        d3.select("#story")
            .text("Story");

        d3.select("#exif")
            .text("EXIF details");
    }
    else {
        // photo_path.includes('portraits')
        d3.select("#expandedImg")
            .attr("src", photo_path)
            .attr("height", "100%")
            .attr("width", null);

        d3.select("#caption")
            .text("Caption");

        d3.select("#story")
            .text("Story");

        d3.select("#exif")
            .text("EXIF details");
    }
}

function closePhotoViewer() {
    console.log("closing photo viewer");

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

function onload() {
    load_news()
    load_publications(Object.keys(publications))
    load_projects(projects.slice(0,4))
    load_blogs()
    load_sample_photograph()
}
