<template>
    <div class="dm-profile-header">
        <div class="dm-profile-header-content">
            <div
                class="avatar-username p-2 d-flex flex-row justify-content-between align-items-center"
            >
                <div class="profile-avatar d-flex flex-flow align-items-center">
                    <img src="../assets/Ellipse 21.png" alt="avatar" />
                    <h6>
                        <span class="username">MamaGee</span
                        ><b-icon icon="chevron-down"></b-icon>
                    </h6>
                </div>
                <div class="add-bookmark d-flex flex-flow align-items-center">
                    <b-icon icon="plus" font-scale="2" />
                    <p>Add a bookmark</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DmProfileHeader',
};
</script>

<style scoped>
.dm-profile-header {
    position: relative;
    background: #fff;
    border-radius: 0.5rem;
}

.profile-avatar {
    cursor: pointer;
    outline: none;
    user-select: none;
}

.profile-avatar h6 {
    margin-bottom: 0;
    padding-left: 10px;
    font-weight: 600;
    font-size: 16px;
}

.profile-avatar h6 .bi-chevron-down {
    vertical-align: middle;
    padding-left: 3px;
}

.add-bookmark p {
    margin-bottom: 0;
    padding-left: 10px;
    font-size: 14px;
}
</style>
