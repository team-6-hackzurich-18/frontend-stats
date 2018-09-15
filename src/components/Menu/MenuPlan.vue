<template>

    <div>
    <b-card-group deck class="ml-3 mr-3">
        <b-card style="padding-right:14px;" header="<b>Monday</b>" >
            <b-card>

                <b-row>

                    <b-col lg="8" class="d-flex flex-column">
                        <h3>Carbonara</h3>
                        <p class="card-text">
                        Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
                        </p>


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
    <b-card-group deck class="mt-3 ml-3 mr-3">
        <b-card header="<b>Monday</b>">
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
    <b-card-group deck class="mt-3 ml-3 mr-3">
        <b-card header="<b>Monday</b>">
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

    <b-card-group deck class="mt-3 ml-3 mr-3">
        <b-card header="<b>Wednesday</b>">
            <b-list-group>
            <b-list-group-item href="#">Cras justo odio</b-list-group-item>
            <b-list-group-item href="#">Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item href="#">Vestibulum at eros</b-list-group-item>
            </b-list-group>
        </b-card>
        <b-card header="<b>Thursday </b>">
            <b-list-group>
            <b-list-group-item href="#">Cras justo odio</b-list-group-item>
            <b-list-group-item href="#">Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item href="#">Vestibulum at eros</b-list-group-item>
            </b-list-group>
        </b-card>
    </b-card-group>

    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created(){
      console.log("MenuPlan")
  }
}
</script>