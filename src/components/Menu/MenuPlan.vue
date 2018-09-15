<template>

    <div>

        <b-card-group deck class="">
                <b-card class="card" :class="['text-' + colorOfStatsOfWeek, 'border-' + colorOfStatsOfWeek]" title="Stats for this week" >
                    <b-row class="text-dark">
                        <b-col>
                            <span style="font-szie:100%;width:100%;" class="badge border border-secondary">
                                Total recipes <span class="badge badge-light">{{ stats.totalRecipes }}</span>
                            </span>
                        </b-col>
                        <b-col>
                           <span style="font-szie:100%;width:100%;" class="badge border border-secondary">
                                Total score <span class="badge badge-light">{{ calcPointsOnReplacement(stats.costHistTotal,0) }}</span>
                            </span>
                        </b-col>
                        <b-col>
                            <span style="font-szie:100%;width:100%;" class="badge border border-secondary">
                                Avarage score <span class="badge badge-light">{{ calcPointsOnReplacement(stats.averageCost, 0) }}</span>
                            </span>
                        </b-col>
                    </b-row>
                    
                    
                </b-card>
        </b-card-group>

        

        <b-card-group deck class="mt-3" v-for="i in (recipes.length)" :key="i">
            <b-card :header=" createCalendarIcon + ' <b>' + days[(i-1)%7] + '</b>'" >
                <b-card>
                    <b-row>
                        <b-col lg="7" class="d-flex flex-column" >
                            <h3>{{ recipes[i-1].Name }}</h3>
                                <ul class="">
                                    <li v-for="(ingredient, index) in recipes[i-1].ingredients"
                                        :key="index"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        :title="'CO2: ' + ingredient.CO2"
                                        :class="getColor(ingredient.CO2)">
                                        {{ ingredient.kg + ' kg ' + ingredient.Product  }}
                                        <ul v-if="ingredient.hasOwnProperty('replacement')">
                                            <li class="text-primary replacementtext">
                                                <a>&#8614; Replace with {{ ingredient.replacement.Product }} 
                                                    <span class="badge badge-success">+ {{ calcPointsOnReplacement(ingredient.CO2, ingredient.replacement.CO2) }}</span>
                                                </a>
                                            </li>
                                        </ul>
                                        </li>
                                </ul>
                                <div class="mt-auto">
                                    <b-link :href="recipes[i-1].recipe_url" target="_blank" class="card-link">Open recipe</b-link>
                                    <b-badge class=" float-right" variant="danger">{{ calcPointsOnReplacement(recipes[i-1].userRecipeCost, 0) }}</b-badge>
                                </div>
                        </b-col>
                        <b-col lg="5" style="margin-top:-20px;margin-bottom:-20px;padding-right: 0px;display: flex;align-items: center;justify-content: center;">
                            <img style="width: 100%; border-radius: 0px 5px 5px 0px;" :src="recipes[i-1].picture_url">
                        </b-col>
                    </b-row>
                </b-card>
            </b-card>
        </b-card-group>

      
        
    </div>
</template>

<script>
export default {
  props: [
      'stats', 'recipes'
  ],
  data () {
    return {
        days: [
            'Monday', 'Tuesday', 'Thursday', 'Wednesday', 'Friday','Saturday', 'Sunday'
        ]
    }
  },
  created(){
  },
   computed: {
       createCalendarIcon(){
           return '<img height="20px;" src="' + require("../../assets/1f4c6.png") + '">'
       },
       colorOfStatsOfWeek(){
           let color = 'danger'
           if(this.stats.averageCost < 1){
               color = 'success'
           } else if (this.stats.averageCost == 1){
               color = 'warning'
           }

           return color
       }
   },
   methods:{
       getColor(co2){
           let color = 'danger'

           return 'text-' + color
       },
       calcPointsOnReplacement(itemCO2, replacementCO2){
            let plusScore = Math.floor(itemCO2 - replacementCO2)
            if (plusScore <= 0){
                plusScore = 1;
            }
            return plusScore
       }
   }
}
</script>

<style scoped>
ul.ingredients {
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
    list-style: none;
    padding-left: 0px;
}

.replacementtext {
    list-style: none;
}

.replacementtext a {
     cursor: pointer;
}
</style>

