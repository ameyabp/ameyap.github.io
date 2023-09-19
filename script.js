import { load_news } from './static/news.js';
import { load_publications } from './static/publications.js';
import { load_projects } from './static/projects.js';
import { load_blogs } from './static/blogs.js';
import { load_sample_photograph } from './static/photography.js';
import { openModal, closeModal } from './static/helper.js';

function onload() {
    load_news()
    load_publications(publication_keys)
    load_projects(projects.slice(0,4))
    load_blogs()
    load_sample_photograph()
}
