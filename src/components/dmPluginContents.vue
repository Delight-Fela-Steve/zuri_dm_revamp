<template>
    <div class="all-dm-messages py-3 px-2 position-relative">
        <ThreadCalendar />
        <DmMessageThread />
        <InputField />
    </div>
</template>

<script>
import DmMessageThread from '../components/messageThread.vue';
import ThreadCalendar from '../components/threadCalendar.vue';
import InputField from '../components/InputField.vue';

export default {
    name: 'DmPluginContents',
    components: {
        DmMessageThread,
        ThreadCalendar,
        InputField,
    },
};
</script>

<style scoped>
.all-dm-messages {
    background: #fff;
    margin-bottom: 24px;
    width: 100%;
    min-height: 100%;
    border-radius: 0.5rem;
}
</style>
