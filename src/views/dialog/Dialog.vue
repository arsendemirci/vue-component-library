<template>
    <HwDialog> 
        <template v-slot:header>Use Google's location service?</template>
        <template v-slot:content>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.  </template>
        <!-- <template v-slot:footer>deneme </template> -->
    </HwDialog>
</template>


<script>
import HwDialog from '../../components/library/select/HwDialog.vue';

export default {
    name: "Dialog",
    data() {
        return {
        };
    },
    components: { HwDialog } 
}

</script>

<style lang="scss" scoped>

</style>