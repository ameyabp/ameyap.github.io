import { photo_list } from './photography/photo_list.js'
import { news_list } from './news_list.js'
import { publications_list } from './publications_list.js';
import { projects_list } from './projects_list.js';
import { blogs_list } from './blogs_list.js';

// NEWS SECTION
function load_news() {
    d3.select("#news-list")
        .selectAll("li")
        .data(news_list.slice(0,5), d => d.timestamp)
        .enter()
            .append("li")
            .attr("class", "list-group-item")
            .append("text").html(d => "<b>" + d.timestamp + "</b> - " + d.event + (d.url ? "</b> - <a href=" + d.url + " target='_blank' rel='noopener noreferrer'>link</a>": ''))

    d3.select("#news-expand-contract").node().addEventListener('click', expandContractNews);
}

function expandContractNews() {
    var btn = d3.select("#news-expand-contract")
    
    if (btn.node().value === "contracted") {
        btn.node().value = "expanded"
        btn.text("-")

        d3.select("#news-list")
            .selectAll("li")
            .data(news_list, d => d.event)
            .enter()
                .append("li")
                .attr("class", "list-group-item")
                .append("text").html(d => "<b>" + d.timestamp + "</b> - " + d.event + (d.url ? "</b> - <a href=" + d.url + " target='_blank' rel='noopener noreferrer'>link</a>": ''))
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

// PUBLICATIONS SECTION
function load_publications() {
    const data = Object.keys(publications_list);
    var pubs_list = d3.select("#publications-list");

    for (var i=0; i<data.length; i++) {
        const publication = publications_list[data[i]]

        var entry = pubs_list.append("li")
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

        // news
        if (publication.news) {
            entry.append("a")
            .attr("href", publication.news)
            .attr("target", "_blank")
            .attr("rel", "noopener noreferrer")
            .attr("class", "tab")
            .append("img")
            .attr("src", "logos/news.png")
            .attr("height", 22)
            .attr("class", "zoom")

            entry.append("text").text(" News ")
        }

        // bibtex
        entry.append("button")
        .attr("id", "bibtex-button")
        .style("border", "none")
        .attr("type", "button")
        .append("img")
        .attr("src", "logos/cite.png")
        .attr("height", 22)
        .attr("class", "zoom")
        .on("click", function(event, d) {
            openModal(publication);
        })

        entry.append("text").text(" Bibtex ")
    }
}

// When the user clicks on the button, open the modal
function openModal(publication) {
    var modal = d3.select("#bibtex-modal-div").node()
    modal.style.display = "block";
    d3.select("#bibtex").text(publication['bibtex'])
    d3.select("#spanid").node().addEventListener("click", closeModal);
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

// PROJECTS SECTION
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

        if (project.buttons) {
            project.buttons.forEach(element => {
                card_body.append("a")
                        .attr("href", element.url)
                        .attr("class", "btn btn-primary")
                        .attr("target", "_blank")
                        .attr("rel", "noopener noreferrer")
                        .text(element.text)

                card_body.append("text").html("&nbsp");
            });
        }
    }

    d3.select("#projects-expand-contract").node().addEventListener('click', expandContractProjects);
}

function expandContractProjects() {
    var btn = d3.select("#projects-expand-contract")
    
    if (btn.node().value === "contracted") {
        btn.node().value = "expanded"
        btn.text("-")

        load_projects(projects_list.slice(4))
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

// BLOGS SECTION
function load_blogs() {
    d3.select("#blogs-list")
        .selectAll("li")
        .data(blogs_list.slice(0,5), d => d.title)
        .enter()
            .append("li")
            .attr("class", "list-group-item")
            .append("text").html(d => "<a href=" + d.url + " target=\"_blank\" rel=\"noopener noreferrer\">" + d.title + "</a><br>by " + d.authors);

    d3.select("#blogs-expand-contract").node().addEventListener('click', expandContractBlogs);
}

function expandContractBlogs() {
    var btn = d3.select("#blogs-expand-contract")
    
    if (btn.node().value === "contracted") {
        btn.node().value = "expanded"
        btn.text("-")

        d3.select("#blogs-list")
            .selectAll("li")
            .data(blogs_list, d => d.title)
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

// PHOTOGRAPHY SECTION
function load_sample_photograph() {
    // select a panorama for the sample photograph
    var photo_paths = []
    for (var i=0; i<1; i++) {
        var name = Object.keys(photo_list['panoramas'])[Math.floor(Math.random() * Object.keys(photo_list['panoramas']).length)]
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

// MAIN
load_news();
load_publications();
load_projects(projects_list.slice(0,4));
load_blogs();
load_sample_photograph();
