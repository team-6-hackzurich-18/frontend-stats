<template>

    <div>

        <b-card-group deck class="">
                <b-card title="Stats for this week" >

                    <b-row>
                        <b-col>
                           
                        </b-col>
                        <b-col>
                            <span style="font-szie:100%;width:100%;" class="badge border border-secondary">
                                Total recipes <span class="badge badge-light">{{ stats.totalMenuScore }}</span>
                            </span>
                        </b-col>
                        <b-col>
                            <span style="font-szie:100%;width:100%;" class="badge border border-secondary">
                                Total recipes <span class="badge badge-light">{{ stats.totalRecipes }}</span>
                            </span>
                        </b-col>
                        <b-col>
                           
                        </b-col>
                    </b-row>
                    
                    
                </b-card>
        </b-card-group>
        <b-card-group deck class="mt-3">
            <b-card  :header=" createCalendarIcon + ' <b>Monday</b>'" >
                <b-card>

                    <b-row>
                        <b-col lg="8" class="d-flex flex-column" >
                            <h3>Carbonara</h3>
                                <ul class="ingridients">
                                    <li v-for="(ingridient, index) in recipes[0]"
                                        :key="index"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        :title="'CO2: ' + ingridient.CO2"
                                        :class="getColor(ingridient.CO2)"
                                        >{{ ingridient.kg + ' kg ' + ingridient.Product  }}</li>
                                </ul>

                            <div class="mt-auto">
                                <b-link href="#"
                                    class="card-link">Open recipe</b-link>

                                <b-badge class=" float-right" variant="danger">1</b-badge>
                            </div>
                        </b-col>
                        <b-col lg="4" style="margin-top:-20px;margin-bottom:-20px;padding-right: 0px;">
                            <img style="width: 100%; border-radius: 0px 5px 5px 0px;" src="https://recipecontent.fooby.ch/14241_131-150_262-300.jpg">
                        </b-col>
                    </b-row>

                    
                </b-card>
            </b-card>
        </b-card-group>
        <b-card-group deck class="mt-3">
            <b-card :header=" createCalendarIcon + ' <b>Tuesday</b>'">
                <b-card title="Card title"
                        sub-title="Card subtitle">
                    <p class="card-text">
                        Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
                    </p>
                    <a href="#"
                    class="card-link">Card link</a>
                    <b-link href="#"
                            class="card-link">Another link</b-link>
                </b-card>
            </b-card>
        </b-card-group>
        <b-card-group deck class="mt-3">
            <b-card :header=" createCalendarIcon + ' <b>Wednesday</b>'">
                <b-card title="Card title"
                        sub-title="Card subtitle">
                    <p class="card-text">
                        Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
                    </p>
                    <a href="#"
                    class="card-link">Card link</a>
                    <b-link href="#"
                            class="card-link">Another link</b-link>
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
   },
   methods:{
       getColor(co2){
           let color = 'danger'

           return 'text-' + color
       }
   }
}
</script>

<style scoped>
ul.ingridients {
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
    list-style: none;
    padding-left: 0px;
}
</style>

