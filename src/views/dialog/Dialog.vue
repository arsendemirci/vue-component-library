<template>
    <HwDialog> 
        <template v-slot:header>Use Huawei's location service?</template>
        <template v-slot:content>Let Huawei help apps determine location. This means sending anonymous location data to Huawei, even when no apps are running. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quos et suscipit totam quis, provident delectus, eos laborum veniam accusantium corrupti animi doloremque sit quaerat sapiente iusto facere, aperiam dolorum.
        Atque, maxime deserunt error corporis, sequi fugiat dignissimos delectus, voluptatum deleniti aliquam praesentium ullam. Voluptate rem, deserunt nobis voluptatem ad dignissimos aspernatur eaque delectus sed eligendi, itaque voluptatibus doloremque neque!
        Itaque odio autem odit magni illum? Ipsum sapiente, aliquam id voluptatibus cumque odit molestiae sit corrupti quos, placeat quas tempore magni quibusdam quidem, dignissimos nulla ab asperiores illum reprehenderit minima.  
        </template>
        
        <template v-slot:footer-agree></template>
        <template v-slot:footer-cancel></template>
    
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