<template>
    <div id = "app">
        <link rel="stylesheet" href="https://unpkg.com/d3-milestones/build/d3-milestones.css">
        <div id="timeline" width=100px></div>
        </div>
</template>

<script>
import milestones from "d3-milestones";
export default {
  name: "TimeLine",
  data() {
  },
  mounted() {
    this.createtimeline();
  },
  methods: {
    createtimeline() {
        milestones('#timeline')
    .mapping({
      'timestamp': 'year',
      'text': 'title'
    })
    .parseTime('%Y')
    .aggregateBy('year')
    .render([
      { year: 1895, title: 'The Pioneer Era.' },
      { year: 1911, title: 'The Silent Era.' },
      { year: 1927, title: 'Talkies and the rise of Hollywood.' },
      { year: 1941, title: 'Golden Era of Film and restructuring of Hollywood.' },
      { year: 1955, title: 'Rise of Cinema.' },
      { year: 1977, title: 'Dawn of Modern Film Industry and appearance of blockbusters.' },
      { year: 2000, title: 'New Millenium Film Industry' }
    ]);
    }
      
    
  }
};
</script>

<style>
#timeline{
  margin-left: auto;
  margin-right: auto;
 width: 1000px;
 height: 5000px;
  }

</style>