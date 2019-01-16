<template>
    <div>
        <h1>Hello {{ name }}</h1>
        <AnotherComponent></AnotherComponent>
    </div>
</template>

<script lang="ts">
    // @ts-ignore
    import Vue, {VueConstructor} from 'vue'
    import AnotherComponent from './AnotherComponent.vue';

    export default Vue.extend<
        { 
            name: string,
            components: { AnotherComponent },
        },
        {
            /* methods */
        },
        {
            /* computed */
        },
        {
            /* props */
        }>({
        data() {
            return {name: 'Jane Doe'}
        }
    })
</script>

<style scoped>
    h1 {
        color: red;
    }
</style>
