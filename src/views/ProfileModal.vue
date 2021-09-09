<template>
    <div class="home">
        <b-row class="all-contents">
            <b-col cols="9" class="zurichat-contents-plugin main px-4">
                <profile-pop-modal v-if="showModal" @close="close" />
                <b-button @click="showModal = true" variant="outline-success"
                    >Click Me to see Profile Popup</b-button
                >
            </b-col>
        </b-row>
    </div>
</template>

<script>
// @ is an alias to /src
import ProfilePopModal from '@/components/ProfilePopModal.vue';

export default {
    name: 'Profile',
    components: {
        ProfilePopModal,
    },
    data() {
        return {
            showModal: false,
        };
    },
    methods: {
        close() {
            this.showModal = false;
        },
    },
};
</script>

<style scoped>
@media screen and (min-width: 100px) and (max-width: 767px) {
}
</style>
