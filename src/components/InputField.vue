<template>
    <div class="border rounded input-form-field">
        <b-form-textarea
            id="textarea-no-resize"
            placeholder="Send message to "
            rows="1"
            class="px-2 py-1"
            v-model="sendMsg"
            style="border: none; overflow-y: hidden;"
            no-resize
        ></b-form-textarea>
        <div
            class="emoji-group d-flex flex-row justify-space-between align-items-center"
        >
            <b-col class="html-format d-flex align-items-center">
                <span class="light">
                    <b-icon
                        icon="lightning"
                        aria-hidden="true"
                        class="border-right-2"
                    ></b-icon>
                </span>
                <div class="html-format-type d-flex align-items-center">
                    <b-icon
                        icon="type-bold"
                        aria-hidden="true"
                        class="bold"
                    ></b-icon>
                    <b-icon icon="type-italic" aria-hidden="true"></b-icon>
                    <b-icon icon="type-underline" aria-hidden="true"></b-icon>
                    <b-icon icon="code-slash" aria-hidden="true"></b-icon>
                    <b-icon icon="link" aria-hidden="true"></b-icon>
                    <b-icon icon="list-ul" aria-hidden="true"></b-icon>
                    <img
                        class="b-icon bi"
                        src="../assets/code-block.svg"
                        alt="code-block"
                    />
                </div>
            </b-col>
            <div class="emoji-selector-send  d-flex align-items-center">
                <!-- The font-size icon was not found in the bootstrap icon -->
                <span class="format">Aa</span>
                <b-icon icon="at" aria-hidden="true"></b-icon>
                <b-icon icon="emoji-smile" aria-hidden="true"></b-icon>
                <b-icon
                    icon="paperclip"
                    rotate="45"
                    aria-hidden="true"
                ></b-icon>
                <span :class="this.sendMsg.length > 0 ? 'send' : 'notSend'">
                    <i class="fas fa-paper-plane"></i>
                    <span
                        :class="
                            this.sendMsg.length > 0
                                ? 'divider'
                                : 'notSendDivider'
                        "
                    ></span>
                    <b-icon
                        icon="chevron-down"
                        aria-hidden="true"
                        class="chev"
                    ></b-icon>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InputField',
    data() {
        return {
            message: 'Hello',
            sendMsg: '',
        };
    },
};
</script>

<style scoped>
.input-form-field {
    bottom: 0;
    width: 100%;
    overflow: hidden;
}

.form-control:focus {
    border-color: transparent;
    box-shadow: none;
}

.light {
    border-right: 1px solid #ccc;
}

.emoji-group {
    padding: 2px 8px 4px;
    padding-left: 2px;
}

.format {
    background: rgb(212, 211, 211);
    padding: 6px;
    border-radius: 3px;
}

.b-icon.bi {
    margin: 0px 8px;
}

.b-icon.bi.chev {
    margin-left: 8px;
}

.fa-paper-plane {
    transform: rotate(60deg);
    margin: 0 2px;
}

.send {
    background-color: #00b87c;
    padding: 8px;
    margin-left: 4px;
    color: white;
    border-radius: 4px;
}

.notSend {
    background-color: transparent;
    padding: 11px 8px;
    margin-left: 4px;
    color: #ccc;
    border-radius: 4px;
}

.divider {
    padding: 0px 4px;
    border-right: 1px solid white;
}

.notSendDivider {
    padding: 0px 4px;
    border-right: 1px solid grey;
}

@media screen and (min-width: 0px) and (max-width: 575px) {
    .html-format-type .b-icon.bi,
    img.b-icon.bi {
        display: none;
    }

    .html-format-type .b-icon.bi.bold {
        display: block;
    }
}

@media screen and (min-width: 100px) and (max-width: 355px) {
    .emoji-selector-send .b-icon.bi:nth-of-type(3) {
        display: none;
    }
}
</style>
