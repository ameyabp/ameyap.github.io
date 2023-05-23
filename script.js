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
            .append("text").text(d => d.timestamp + " - " + d.event)
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
                .append("text").text(d => d.timestamp + " - " + d.event)
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