<template>
    <div class="message-thread mt-4 position-relative">
        <div
            @mouseover="hover = true"
            @mouseleave="hover = false"
            class="msgBody"
        >
            <div class="conversation-threads d-flex flex-row">
                <div class="userProfile-avatar">
                    <img
                        class="rounded-circle"
                        src="../assets/Ellipse 21.png"
                        alt="User Image"
                    />
                </div>
                <div class="usertext-messages position-relative">
                    <h5 class="pb-2">
                        <span class="userName">MamaGee</span>
                        <span class="msgTime">5.55pm</span>
                    </h5>
                    <div class="text-container">
                        <messageHoverShow v-if="hover" />
                        <p class="text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Eum mollitia aspernatur laboriosam cum
                            officiis commodi deleniti odit rerum ratione
                            consectetur. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Tincidunt adipiscing et, tortor,
                            fusce quis tellus, enim. A, posuere mi auctor odio
                            tincidunt magnis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import messageHoverShow from '../components/dmThreadHoverState.vue';
export default {
    name: 'DmMesssageThread',
    components: {
        messageHoverShow,
    },
    data() {
        return {
            hover: false,
        };
    },
};
</script>

<style scoped>
.conversation-threads {
    margin-bottom: 32px;
}

.userProfile-avatar {
    padding-right: 16px;
}

.userProfile-avatar img {
    vertical-align: middle;
}

.usertext-messages {
    font-size: 15px;
    line-height: 1.8;
}

.usertext-messages h5 {
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 600;
}

.usertext-messages span.msgTime {
    padding-left: 8px;
    font-size: 12px;
    color: #999999;
    font-weight: 400;
}

.usertext-messages p {
    margin-bottom: 0;
}

.text-container {
    position: relative;
}

.text-container:hover {
    background: #f6f6f6;
}
</style>
