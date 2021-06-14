## About Me
I am a Ph.D. student in Computer Science at the University of Maryland, College Park. I am advised by [Dr. Leilani Battle](https://www.cs.umd.edu/~leilani/bio.html). My research work lies in the fields of Information Visualization, Interactive Data Analytics and Computer Graphics. I am interested in understanding how people perceive visualizations, and leveraging advancements in graphics and database systems to create scalable visualization systems for large scale data.

I earned my Master's Degree in Computer Science at the University of Maryland, College Park in December 2020, and Bachelor's Degree in Computer Science at BITS-Pilani Goa, India in May 2016. Besides my research area, I have also completed coursework in Databases, Computer Vision and Machine Learning.

## Research
1. Data Pre-fetching for Concurrent Multi-user Environments
Interactive data visualization and analysis tools have greatly facilitated the process of extracting insights from any kind of dataset. These tools generally use a client-server architecture where the data is stored on a DBMS and is queried by the user via a client machine. Such a design also allows collaborative concurrent data exploration among multiple users. However, DBMSs are not usually designed for responding to user queries at interactive speeds. Further, some queries are very complex to return results at interactive speeds. This can introduce latency in the tool and hamper the data exploration experience. To facilitate a low-latency query response, we explore and evaluate cache-sharing strategies to exploit possible overlaps between the queries of multiple concurrent users, and control data retrieval and storage for all the users. We propose and study the use of neural networks for next interaction prediction to pre-fetch data and reduce response times. We evaluate a partitioned design for the cache manager to handle both the user requested and pre-fetched data for concurrent multi-user exploration scenarios. We present our findings as guidelines for building efficient systems in the multi-user context, and show results from our implementation based on these guidelines.

2. Kyrix-G: Authroing Scalable Interactive Node-link Visualizations for Massive Graph Data
From global transport route optimization, to social circle analysis, to fraud detection in financial transactions, analysts frequently encounter network or graph data, and node-link diagrams as part of their data analysis pipelines. Although a lot of graph visualization and analysis tools have been developed over the years, no single graph visualization approach serves all kinds of graph data and analysis tasks. This makes it necessary for developers to iterate over multiple versions. Further, as the scale of data increases, it becomes increasingly difficult to build interactive graph visualization interfaces with the desired response time requirements. To address the issue of ease of authoring and scale, we present Kyrix-G, an integrated scalable interactive node-link visualization authoring tool. Kyrix-G is a one-stop shop graph visualization solution which enables developers to choose from a variety of graph layout algorithms, graph summarization techniques, along with graph statistic views, as per the use case. Kyrix-G employs main memory resident spatial indexes on graph visualizations to maintain interactivity while exploring large graphs having several millions of nodes and edges. Our JSON based declarative specification language further simplifies the process of iterating over multiple visualizations.

## Publications

## Extra-curricular
Outside of my academic life, I pursue digital photography as a hobby which is one of the reasons I found Computer Vision and Graphics intriguing. I have maintained my photography profile [@ameyabp](https://www.instagram.com/ameyabp/) on Instagram. I also love adventure activities and travelling, often writing down my experiences via blogs at [Musings](https://ameyabp.wordpress.com/). I am currently learning to play a Harmonica.

<!---## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/ameyabp/ameyap.github.io/edit/gh-pages/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/ameyabp/ameyap.github.io/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
--->