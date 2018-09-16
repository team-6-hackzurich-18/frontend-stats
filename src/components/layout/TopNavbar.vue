<template>

    <b-navbar toggleable="md" type="dark" variant="dark ">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">
            <img src="../../assets/buehler_logo.png" style="max-height: 35px;">
            <span style="margin-left: 10px;"> Team 6 - Food awareness</span>
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

            <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
            </b-navbar-nav>

    </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>