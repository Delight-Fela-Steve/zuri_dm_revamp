<template>
    <div class="dm-input-box">
        <div class="message-box">
            <div class="message-box-content"></div>
            <div class="message-box-actions">
                <div class="shortcut-message-html-format"></div>
                <div class="smiley-send-attach"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InputBox',
    data() {
        return {
            value: '',
        };
    },
};
</script>

<style scoped>
.dm-input-box {
    position: relative;
    width: 100%;
}
</style>
