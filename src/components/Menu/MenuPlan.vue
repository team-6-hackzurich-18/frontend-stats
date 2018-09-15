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
        <b-card-group deck class="mt-3">
            <b-card  :header=" createCalendarIcon + ' <b>Monday</b>'" >
                <b-card>
                    <b-row>
                        <b-col lg="7" class="d-flex flex-column" >
                            <h3>{{ recipes[0].Name }}</h3>
                                <ul class="">
                                    <li v-for="(ingredient, index) in recipes[0].ingredients"
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
                                    <b-link :href="recipes[0].recipe_url" target="_blank" class="card-link">Open recipe</b-link>
                                    <b-badge class=" float-right" variant="danger">{{ calcPointsOnReplacement(recipes[0].userRecipeCost, 0) }}</b-badge>
                                </div>
                        </b-col>
                        <b-col lg="5" style="margin-top:-20px;margin-bottom:-20px;padding-right: 0px;">
                            <img style="width: 100%; border-radius: 0px 5px 5px 0px;" :src="recipes[0].picture_url">
                        </b-col>
                    </b-row>
                </b-card>
            </b-card>
        </b-card-group>
        <b-card-group deck class="mt-3">
            <b-card  :header=" createCalendarIcon + ' <b>Tuesday</b>'" >
                <b-card>
                    <b-row>
                        <b-col lg="7" class="d-flex flex-column" >
                            <h3>{{ recipes[1].Name }}</h3>
                                <ul class="">
                                    <li v-for="(ingredient, index) in recipes[1].ingredients"
                                        :key="index"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        :title="'CO2: ' + ingredient.CO2"
                                        :class="getColor(ingredient.CO2)"
                                        >
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
                                    <b-link :href="recipes[0].link" target="_blank" class="card-link">Open recipe</b-link>
                                    <b-badge class=" float-right" variant="danger">{{ calcPointsOnReplacement(recipes[1].userRecipeCost, 0) }}</b-badge>
                                </div>
                        </b-col>
                        <b-col lg="5" style="margin-top:-20px;margin-bottom:-20px;padding-right: 0px;">
                            <img style="width: 100%; border-radius: 0px 5px 5px 0px;" :src="recipes[1].thumbnailLink">
                        </b-col>
                    </b-row>
                </b-card>
            </b-card>
        </b-card-group>
        <b-card-group deck class="mt-3">
            <b-card  :header=" createCalendarIcon + ' <b>Wednesday</b>'" >
                <b-card>
                    <b-row>
                        <b-col lg="7" class="d-flex flex-column" >
                            <h3>{{ recipes[2].Name }}</h3>
                                <ul class="">
                                    <li v-for="(ingredient, index) in recipes[2].ingredients"
                                        :key="index"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        :title="'CO2: ' + ingredient.CO2"
                                        :class="getColor(ingredient.CO2)"
                                        >
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
                                    <b-link :href="recipes[0].link" target="_blank" class="card-link">Open recipe</b-link>
                                    <b-badge class=" float-right" variant="danger">{{ calcPointsOnReplacement(recipes[2].userRecipeCost, 0) }}</b-badge>
                                </div>
                        </b-col>
                        <b-col lg="5" style="margin-top:-20px;margin-bottom:-20px;padding-right: 0px;">
                            <img style="width: 100%; border-radius: 0px 5px 5px 0px;" :src="recipes[2].thumbnailLink">
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
           if(this.stats.totalMenuScore < 1){
               color = 'success'
           } else if (this.stats.totalMenuScore == 1){
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
            console.log("Plusscore", plusScore )
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

