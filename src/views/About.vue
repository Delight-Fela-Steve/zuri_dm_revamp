<template>
    <div class="about">
        <h1 class="text-center py-4">About Page</h1>
        <InputBox />
    </div>
</template>

<script>
import InputBox from '../components/inputBox.vue';

export default {
    components: {
        InputBox,
    },
};
</script>

<style scoped>
.active {
    background: green;
}
</style>
