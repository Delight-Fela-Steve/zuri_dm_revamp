<template>
    <div class="direct-message p-1">
        <div class="d-flex justify-content-between px-2">
            <div class="d-flex" v-b-toggle="'collapse-2'">
                <b-button
                    variant="white"
                    class="btn-outline-disabled p-0"
                    size="sm"
                >
                    <b-icon-chevron-down
                        class="b-icon mt-1"
                    ></b-icon-chevron-down>
                </b-button>
                <p class="mt-1 px-1">Direct messages</p>
            </div>

            <b-icon-plus-circle class="d-flex mt-2"></b-icon-plus-circle>
        </div>
        <!-- Element to collapse -->
        <b-collapse id="collapse-2">
            <div
                class="d-flex align-items-center direct-profiles position-relative"
                v-for="profile in profiles"
                :key="profiles.indexOf(profile)"
                v-bind:class="{ active: profile.online }"
            >
                <div class="direct-avatar position-relative">
                    <img
                        :src="require(`@/assets/${profile.avatar}`)"
                        class="avatar"
                        alt=""
                    />
                    <div class="status position-absolute"></div>
                </div>
                <p class="m-0 px-2 username">{{ profile.username }}</p>
                <b-icon
                    icon="x"
                    class="close position-absolute align-self-center"
                    @click="deleteEntry(profiles.indexOf(profile))"
                ></b-icon>
            </div>
        </b-collapse>
    </div>
</template>

<script>
export default {
    data() {
        return {
            profiles: [
                {
                    username: 'MamaGee',
                    avatar: 'Ellipse 21.png',
                    online: true,
                },
                {
                    username: 'David_B',
                    avatar: 'Ellipse 24.png',
                    online: false,
                },
                {
                    username: 'Der_Osibote',
                    avatar: 'Ellipse 21.png',
                    online: true,
                },
                {
                    username: 'Ellarh',
                    avatar: 'Ellipse 24.png',
                    online: false,
                },
            ],
        };
    },
    methods: {
        deleteEntry(val) {
            this.profiles.splice(val, 1);
        },
    },
};
</script>

<style scoped>
.direct-profiles {
    padding: 3px 27px;
}
.direct-profiles:hover {
    background-color: rgb(212, 212, 212) !important;
    cursor: pointer;
    transition: 0.3s ease-out;
}
.direct-message svg {
    cursor: pointer;
}
.direct-message,
svg {
    color: rgba(153, 153, 153, 1);
    font-size: 15px;
}

button {
    height: 20px !important;
    outline: none !important;
}
.btn-check:hover .btn:hover {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.btn-check:focus,
.btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}
.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.status {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(153, 153, 153, 1);
    border: 3.7px solid white;
    left: 2px;
    top: 3px;
}

.active .status {
    background-color: rgb(157, 235, 63);
    color: rgba(0, 184, 124, 1);
}
.active .username {
    color: rgba(0, 184, 124, 1);
}

.close.position-absolute {
    right: 2px !important;
    font-size: 25px;
    display: none;
}

.direct-profiles:hover > .close {
    display: block;
}
</style>
