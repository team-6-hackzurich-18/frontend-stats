<template>
  <div id="app">

    <top-navbar></top-navbar>

    <b-container>
        <b-row class="r mt-3">
            <b-col sm="12" lg="4">
                    <b-card  :border-variant="scoreWorldConsumedColor" header-text-variant="white" :header-bg-variant="scoreWorldConsumedColor" class="text-center">
                        <template slot="header">
                            <h4><img height="30px;" :src="scoreIcon"> Your score <img height="30px;" :src="scoreIcon"></h4>
                        </template>
                       
                       <div style="margin: 0 auto;" id="earth_container" :style="earthContainerImage">
                        </div>
                        <h3 class="mt-2">{{ scoreWorldConsumed }}x</h3>

                       <br>
                        <blockquote class="blockquote">
                            <p class="mb-0"> You are a really conscience person.</p>
                            <footer class="blockquote-footer">probably <cite title="Source Title">Konfuzius</cite></footer>
                        </blockquote>
                    </b-card>

                    <b-card class="mt-3 text-center" header="" >
                        <template slot="header">
                            <b>Your trend over the last 6 months</b>
                        </template>
                        <trend
                            id="charttrend"
                            :data="[0.4, 0.9, 0.3, 0.2, 0.4, 0.6, 0.2, 0.7, 0.7, 0.3, 0.1, 0.4, 0.2, 0.9, 0.2]"
                            :gradient="['#33cc33', '#ff9933', '#ff5050']"
                            auto-draw
                            style="stroke-width:4px;"
                            smooth>
                        </trend>
                    </b-card>

            </b-col>
            <b-col sm="12" lg="8" class="">

                <menu-plan :stats="stats" :recipes="recipes" @ingrediantReplaced="replaceIngrediant"></menu-plan>

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
           let iconName = '1f614'

            if (this.scoreWorldConsumed < 0.75) {
                iconName = '1f389'
            } else if (this.scoreWorldConsumed < 1) {
                iconName = '1f60a'
            } else if (this.scoreWorldConsumed < 1.25) {
                iconName = '1f610'
            } else if (this.scoreWorldConsumed < 1.5) {
                iconName = '1f611'
            } else {
                iconName = '1f614'
            }

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
           return 'background-image: url(\'' + require("./assets/earth.jpg") + '\');background-size: contain;max-width: 100%;width:' + width + ';height:100px; background-repeat: repeat-x;'
       },
       scoreWorldConsumedColor(){
           var color = 'bad'
            // 0.75 sehr grün
            // 1 grün
            // 1.25 gelb
            // 1.5 rot
            // > sehr rot

            if (this.scoreWorldConsumed < 0.75) {
                color = 't6-guut'
            } else if (this.scoreWorldConsumed < 1) {
                color = 't6-guut'
            } else if (this.scoreWorldConsumed < 1.25) {
                color = 't6-meedium'
            } else if (this.scoreWorldConsumed < 1.5) {
                color = 't6-medium'
            } else {
                color = 't6-bad'
            }

            return color
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
      },
      replaceIngrediant(infos){
            console.log("infos", infos)

            infos.ingredient.kg = this.recipes[infos.recipeIndex].ingredients[infos.ingrediantIndex].kg
            this.recipes[infos.recipeIndex].ingredients[infos.ingrediantIndex] = infos.ingredient

            //this.calcStats( this.recipes[infos.recipeIndex].ingredients)


            Vue.axios.post("https://hackzurich-node-red.scapp.io/stats/ingredients", {
                ingredients: this.recipes[infos.recipeIndex].ingredients
            }).then(response => {
                console.log("pop", response.data)

                 this.recipes[infos.recipeIndex].userRecipeCost = response.data.cost_recipe

            })


            infos.component.$forceUpdate()
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

.bg-t6-guuut {
    background-color: #417505;
}

.bg-t6-guut {
    background-color: #7ED321;
}

.bg-t6-meedium {
    background-color: #F8E71C;
}

.bg-t6-medium {
    background-color: #F5A623;
}

.bg-t6-bad {
    background-color: #D0021B;
}

.border-t6-guuut {
    border-color: #417505;
}

.border-t6-guut {
    border-color: #7ED321;
}

.border-t6-meedium {
    border-color: #F8E71C;
}

.border-t6-medium {
    border-color: #F5A623;
}

.border-t6-bad {
    border-color: #D0021B;
}



</style>
