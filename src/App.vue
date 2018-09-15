<template>
  <div id="app">

    <top-navbar></top-navbar>

    <b-container>
        <b-row class="r mt-3">
            <b-col sm="12" lg="4">
                    <b-card border-variant="success" header-text-variant="white" header-bg-variant="success" class="text-center">
                        <template slot="header">
                            <h4><img height="30px;" :src="scoreIcon"> Your score <img height="30px;" :src="scoreIcon"></h4>
                        </template>
                       <div class="text-center">
                           <h1>{{ score }}</h1>  
                       </div>
                       <br>
                        <blockquote class="blockquote">
                            <p class="mb-0"> You are a really conscience person.</p>
                            <footer class="blockquote-footer">probabbly <cite title="Source Title">Konfuzius</cite></footer>
                        </blockquote>
                    </b-card>

                    <b-card class="mt-3 text-center" >
                        <template slot="header">
                            <b>How many planets do you need?</b>
                        </template>
                        <div style="margin: 0 auto;" id="earth_container" :style="earthContainerImage">
                        </div>
                        <h3 class="mt-2">{{ scoreWorldConsumed }}x</h3>
                    </b-card>

                    <b-card class="mt-3 text-center" header="" >
                        <template slot="header">
                            <b>Your trend over the last 6 months</b>
                        </template>
                        <trend
                            id="charttrend"
                            :data="history"
                            :gradient="['#33cc33', '#ff9933', '#ff5050']"
                            auto-draw
                            style="stroke-width:3px;"
                            smooth>
                        </trend>
                    </b-card>

            </b-col>
            <b-col sm="12" lg="8" class="mt-3">

                <menu-plan :stats="stats" :recipes="recipes"></menu-plan>

            </b-col>
            
        </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
import TopNavbar from './components/layout/TopNavbar'
import MenuPlan from './components/Menu/MenuPlan'

export default {
  name: 'app',
  components: {
     TopNavbar, MenuPlan
  },
  data () {
    return {
      score: 0,
      stats: {
            totalMenuScore: 0,
            totalRecipes: 0,
            costHistTotal: 0,
            averageCost: 0,
            averageWorldsConsumed: 0,
            averageColor: 0
        },
       recipes: [],
       history: [0]
    }
  },
  created(){
      this.getRecipes()
  },
  computed: {
       scoreIcon(){
           //https://en.wikipedia.org/wiki/Emoji
           let iconName = (this.score < 0.5) ? '1f389' : '1f614';
           return require("./assets/" + iconName + ".png");
       },
       scoreWorldConsumed(){
           return Math.round(this.stats.averageWorldsConsumed * 100) / 100
       },
       scoreWorldConsumedImage(){
           return Math.floor(this.scoreWorldConsumed * 10) / 10
       },
       earthContainerImage(){
           let width = (this.scoreWorldConsumedImage * 100) + 'px';
           console.log("width", width)
           return 'background-image: url(\'' + require("./assets/earth.jpg") + '\');background-size: contain;width:' + width + ';height:100px; background-repeat: repeat-x;'
       }
  },
  methods: {
      getRecipes(){
          Vue.axios.get("https://hackzurich-node-red.scapp.io/recipes", {headers: {'Access-Control-Allow-Origin': '*'}}).then((response) => {
                console.log(response.data)

                this.recipes = response.data.allRecipes
                this.stats = response.data.stats

                /*
                this.recipes = [
                    {
                        Name: "Lasagne",
                        "userRecipeCost": 18.955199999999998,
                        link: "https://fooby.ch/de/rezepte/14241/spaghetti-alla-carbonara",
                        thumbnailLink: "https://recipecontent.fooby.ch/14241_131-150_262-300.jpg",
                        "ingredients": [
                            { "Product": "Beef", "kg": 0.6, "CO2": 16.656, replacement: { "Product": "lenses", "kg": 0.6, "CO2": 0.84 } },
                            {
                                "Product": "Wheat",
                                "kg": 0.1,
                                "CO2": 0.051000000000000004
                            },
                            {
                                "Product": "Whole Milk",
                                "kg": 0.6,
                                "CO2": 0.84
                            },
                            {
                                "Product": "Cheese slices",
                                "kg": 0.08,
                                "CO2": 0.6631999999999999
                            },
                            {
                                "Product": "Dry Pasta",
                                "kg": 0.5,
                                "CO2": 0.745
                            }
                        ]
                    }
                ]

                
                this.stats = {
                            "costHistTotal": 56.86559999999999,
                            "n_recipesTotal": 3,
                            "averageCost": 18.955199999999998,
                            "averageWorldsConsumed": 1.26368,
                            "averageColor": 0.63184
                        }
                */

            })
      },
      getHistory(){
          Vue.axios.get("https://hackzurich-node-red.scapp.io/recipes", {headers: {'Access-Control-Allow-Origin': '*'}}).then((response) => {
              this.history = response.data

                var chart = document.getElementById("charttrend");
                chart.$forceUpdate()
          })
      }
  },
  watch: {
    recipes: {
        handler(){
            this.stats.totalRecipes = this.recipes.length
        },
        deep: true
    }
    }
}
</script>

<style>


</style>
