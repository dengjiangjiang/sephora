<template>
   <div>
       <top/>
     <banner/>
     <navs/>
    <div  :v-for="y"  >
        <detailsp/>
         <inventory/>
    </div>
    <brand/>
    <list/>
    <foren/>
    <lancome/>
    <foryou/>
    <dior/>
    <end/>
    <bottom/>
    <backtop/>
   </div>
</template>
<script>
import top from "../components/top"
import banner from "../components/banner"
import navs from "../components/nav"
import detailsp from "../components/details"
import inventory from "../components/inventory"
import brand from "../components/brand"
import list from "../components/list"
import foren from "../components/foren"
import lancome from "../components/lancome"
import foryou from "../components/foryou"
import dior from "../components/dior"
import end from "../components/end"
import bottom from "../components/bottom"
import backtop from "../components/backtop"
export default {
    data () {
        return {
            y:4
        }
    },
    components: {
        top,
        banner,
        navs,
        detailsp,
        inventory,
        brand,
        list,
        foren,
        lancome,
        foryou,
        dior,
        end,
        bottom,
        backtop
    }
}
</script>
<style>

</style>


