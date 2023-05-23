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

function onload() {
    load_news()
    load_blogs()
}