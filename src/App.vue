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
                        <img style="width: 150px;" id="user_selected_image" :src="earthImage"/>
                        <h3 class="mt-2">1.2x</h3>
                    </b-card>

                    <b-card class="mt-3 text-center" header="" >
                        <template slot="header">
                            <b>Your trend over the last 6 months</b>
                        </template>
                        <trend
                            :data="[0.4, 0.9, 0.3, 0.2, 0.4, 0.6, 0.2, 0.7, 0.7, 0.3, 0.1, 0.4, 0.2, 0.9, 0.2]"
                            :gradient="['#33cc33', '#ff9933', '#ff5050']"
                            auto-draw
                            style="stroke-width:3px;"
                            smooth>
                        </trend>
                    </b-card>

            </b-col>
            <b-col sm="12" lg="8" class="mt-3">

                <menu-plan></menu-plan>

            </b-col>
            
        </b-row>
    </b-container>
  </div>
</template>

<script>
import TopNavbar from './components/layout/TopNavbar'
import MenuPlan from './components/Menu/MenuPlan'

export default {
  name: 'app',
  components: {
     TopNavbar, MenuPlan
  },
  data () {
    return {
      earths: 1.2,
      score: 0.4
    }
  },
  created(){

  },
  computed: {
       earthImage(){
           return require("./assets/earth_" +  this.earths +".jpg")
       },
       scoreIcon(){
           //https://en.wikipedia.org/wiki/Emoji
           let iconName = (this.score < 0.5) ? '1f389' : '1f614';
           console.log("Icon ", "./assets/" + iconName +".png")
           return require("./assets/" + iconName + ".png");
           //return require("./assets/earth_" +  this.earths +".jpg")
       }
  }
}
</script>

<style>

</style>
