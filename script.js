news = [
    {
        'timestamp': 'May 2023',
        'event': 'Started summer internship at the National Center for Atmospheric Research (NCAR)'
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
            .data(news, d => d.timestamp)
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
        'title': 'WhaleVis',
        'subtitle': 'Visualization Tool for the IWC Catch Database',
        'teaser': 'whaleVis/teaser.png',
       ' teaser-alt-text': 'Snapshot of the WhaleVis interface',
        'description': 'Created an interactive dashboard for visual analysis of historical commercial whale hunting. The dashboard is aimed to facilitate inferring spatial distribution of whale populations from the catch numbers and the whale search effort, eventually helping in whale conservation efforts.',
        'url': 'https://observablehq.com/@whales/whale-vis-dashboard-expedition-routes',
        'button-text': 'Demo'
    },
    {
        'title': 'Lumos! - Board and Video Game',
        'subtitle': 'Course Project for Game Design - INST728E',
        'teaser': 'lumos/teaser.png',
       ' teaser-alt-text': 'Snapshots of the board and video game',
        'description': 'Designed a board game and a video game based on the theme of propagating light in a 2D space.',
        'url': 'lumos/lumos.html',
        'button-text': 'Details'
    },
    {
        'title': 'Natural Calamities Visualization Tool',
        'subtitle': 'Course Project for Interactive Data Analytics - CMSC828D',
        'teaser': 'calamities/teaser.png',
       ' teaser-alt-text': 'Snapshot of the Natural Calamities Visualization Tool',
        'description': 'Implemented a geo data analysis/visualization tool with interactions to understand the natural calamities that happened in the US over 20 years from 1950 to 2022. Front end was designed using d3, server was setup using python Flask and Postgres was used for backend.',
        'url': 'calamities/calamities.html',
        'button-text': 'Details'
    },
    {
        'title': 'Physically Based Clustering Visualization',
        'subtitle': 'Course Project for Physically Based Modelling, Simulation and Animation - CMSC828X',
        'teaser': 'pbcv/teaser.png',
       ' teaser-alt-text': 'Snapshot of the Physically Based Clustering Visualization Tool',
        'description': 'Implemented a data analysis/visualization tool with interactions modelled on real-life physical forces using the D3-Force API. The specific use case targeted was evaluating word embeddings created by different methods, where words closer in the vector space belonged to the same cluster.',
        'url': 'pbcv/pbcv.html',
        'button-text': 'Details'
    },
    {
        'title': 'ShadowGAN',
        'subtitle': 'Course Project for Advanced Computer Graphics - CMSC740',
        'teaser': 'shadowGAN/teaser.png',
       ' teaser-alt-text': 'Sample input and outputs for ShadowGAN',
        'description': 'Trained a cGAN (Conditional Generative Adversarial Network) model to generate shadows in a scene, given the scene without shadows, the depth map and the lightsource position map. Used the pix2pixmodel for the task.',
        'url': 'https://github.com/ameyabp/pytorch-CycleGAN-and-pix2pix',
        'button-text': 'Details'
    },
    {
        'title': 'Tunebox - Virtual Music Instrument Dashboard',
        'subtitle': 'Course Project for Creative Multimedia - BITSF398',
        'teaser': 'tunebox/teaser.png',
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

function onload() {
    load_news()
    load_blogs()
    load_projects(projects.slice(0,4))
}