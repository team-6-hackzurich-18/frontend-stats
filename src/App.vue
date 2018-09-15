<template>
  <div id="app">

    <top-navbar></top-navbar>

    <b-container>
        <b-row class="r mt-3">
            <b-col sm="12" lg="4">
                <div>
                    <b-card header="Card Header" sub-title="Card subtitle" border-variant="success" header-text-variant="white" header-bg-variant="success">
                        <template slot="header">
                            <h4>test</h4>
                        </template>
                        <p class="card-text">
                            Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
                        </p>
                        <a href="#"
                        class="card-link">Card link</a>
                        <b-link href="#"
                                class="card-link">Another link</b-link>
                    </b-card>
                </div>
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
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
