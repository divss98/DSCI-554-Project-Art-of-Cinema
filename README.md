# DSCI 554 Project

## Team

<!-- 🎒 Complete to include all the information requested. -->

Team name: Team RAD

Team members:

- Rushi Shah <rnshah@usc.edu>
- Divya Manjunath <divyabha@usc.edu>
- Aparna Nair <aparnan@usc.edu>

## Artifacts

<!-- 🎒 Complete and ensure that all the links work! -->

- Proposal: [Project proposal](https://docs.google.com/presentation/d/17FK6inzh8mcIJknUYEwxkjHQZQEqifxKpO76n_ROLDo/edit?usp=sharing)
- Final presentation: [Transcript](presentation/TRANSCRIPT.md) | [slides](presentation/presentation.pdf)
- Paper: [Overleaf read-only link](https://www.overleaf.com/read/ksbwncwftsvq) | [PDF](paper/paper.pdf)
- [Demo link](demo/dist/)
- Video [Transcript](video/TRANSCRIPT.md) | [YouTube link](https://youtu.be/hl5p8Rft0wo)


## Project Summary

<!-- 🎒 Add a project summary here in 250 words or less. -->
In today's day and age, the one thing that brings people together is movies. Motion pictures provide us with the opportunity to escape our real-world problems regardless of our age, race, religion, or location. We were inspired by the ability of movies to connect and bring joy to people and have implemented a dashboard that let's you explore more about the films you love to watch. 
Our dashboard is expansive and interactive but at the same time it is user adaptable. The dashboard let's you explore movies and the user has the capability to filter them by rating and revenue across different genres. The dashboard is not limited to information about English movies, the user can learn more about movies released in foreign languages and their place of origin.
Hence our interface is a one-stop hub for all cinephiles, where they can learn and explore more information about their favourite movies, the movie industry and how it has transitioned over time. 

## Contributions

<!-- 🎒 Complete for each project member. -->
- Rushi: Vue.js framework implmentation and integration of all charts. Created the d3 layout map.
- Divya: Preprocessing and cleaning of Data. Found appropriate geojson mapbox data. D3 symbol map, interactive bar charts and timeline map were created and implemented.
- Aparna: Handled colour scheme and UI of the app . Made the animated bar chart.

All the other charts were equally divided amongst all of us and we created them individually. We later merged and integrated them into our Vue App. Documentation was also divided amongst the three.


## Proposal presentation

- Divya designed the presentation and created the introduction slides 
- Aparna was responsible for researching interesting visuals for the proposal presentation and oversaw the literature review.
- Rushi was responsible for searching for appropriate frameworks and creating timeline.

## Final presentation

- Rushi created/presented the slides on idea, motivation and introduction.
- Aparna created/presented the slides on previous work done, the data and originality of the project.
- Divya created/presented the slides on design methodology, D3 charts and future scope of the project.

## Paper


- Divya wrote the Introduction and Data Section as she was most familiar with data used. She also highlighted the main features of the app.
- Aparna was responsible for writing the Related Work section and general formatting of the paper.
- Rushi handled the System and Design Approaches in the paper.

## Demo



- Divya was responsible for D3 layout and Mapbox map. She also aggregated the data for smooth implementation of all charts.
- Aparna handled the Animated chart and researched for background colors, and images which could make our website interesting. She handled the UI.
- Rushi implemented the framework and dealt with Interactive Pie and Proportional Symbol map chart.

The three of us split the creation of charts amongst ourselves and constantly tested it on our Web app to make sure its running as expected.

# Visualizations created in the Demo

## Check-list of required visualizations

<!-- 🎒 Complete the table using ✅ or ❌. -->

| Requirement                            | Label        | Done |
| -------------------------------------- | ------------ | ---- |
| responsive d3 chart                    | responsive   |    ✅    |
| interactive d3 chart                   | interactive  |     ✅   |
| d3 chart with an animated transition   | animated     |     ✅   |
| d3 layout                              | layout       |      ✅  |
| d3 map                                 | map          |     ✅   |
| Mapbox map                             | mapbox       |      ✅  |


## Table of visualizations used by page

<!-- 🎒 Complete the table using the Label of the required visualizations. -->

| Page name | Chart description          | Libraries used | Requirement label |
| --------- | -----------------          | -------------- | ----------------- |
| Home page | Bootstrap button layout    | bootstrap   |               |
| Language Distribution |Animated Bar Chart  |d3 | animated |
| Genre Action  |Rating & Revenue Bar Chart (filter/sort available)   |d3  | responsive, interactive  |
| Genre Adventure          |Rating & Revenue Bar Chart (filter/sort available) |d3   | responsive, interactive                    |
|Genre Comedy  |Rating & Revenue Bar Chart (filter/sort available)  |d3  | responsive, interactive   |
|Movie Certification |Pie Chart displays distribution of movies per certificate |d3 |responsive, interactive |
|Timeline |Timeline to represent the different eras of cinema   | d3   | layout |
|Proportional Symbol Map |Symbol Map to represent top 20 regions with most movies released |d3. topojson   | map  |
|Oscar Winners |Tree Graph represents oscar winners from different categories from 2003 - 2011|d3, d3 hierarchy|layout|
|Movie Set Locations |Location of different movies/tv shows in and around Los Angeles  | d3,mapbox,geojson   | mapboc |
## Summary table of visualization forms used

<!-- 🎒 Complete the table . -->

| Type             | Count |
| ---------------- | ----- |
| Interactive Chart | 4     |
| Animated Chart   | 1      |
| Responsive Chart | 4      |
| D3 Map                  |   1   |
| Mapbox                  |   1    |
| D3 Layout                 | 2      |
