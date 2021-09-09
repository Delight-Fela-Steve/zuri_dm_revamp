<template>
  <div class="home">
    <div class="container">
      <div class="header">
        <SearchBar />
      </div>
      <div class="body">
        <MessageThread1 />
        <MessageInput />
      </div>
      <div class="profile-container">
        <div class="side-profile">
          <ProfileContainer />
        </div>
      </div>
    </div>

    <!-- <div class="message-thread">
      <DmMessageThread1 />
    </div>
    <div class="profile">
      <ProfileContainer />
    </div>
    <div class="input">
        <MessageInput/>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import ThreadCalender from "@/components/threadCalendar.vue";
import ScheduleMessageModal from "@/components/scheduleMessageModal.vue";
import ThreadReplySidebar from "@/components/threadReplySidebar.vue";
import MessageInput from "@/components/Messageinput.vue";
import SearchBar from "@/components/searchBar.vue";
import InputBox from "@/components/inputBox.vue";
import DmThreadActions from "@/components/dmThreadActions.vue";
import ThreeDots from "@/components/ThreeDots.vue";
import DmMessageThread1 from "@/components/MessageThread1.vue";
import ProfileContainer from "../components/profileContainer.vue";
import MessageThread1 from "../components/MessageThread1.vue";
// import SearchBar from '../components/searchBar.vue';

export default {
  name: "Home",
  components: {
    ThreadCalender,
    ScheduleMessageModal,
    ThreadReplySidebar,
    MessageInput,
    SearchBar,
    InputBox,
    DmThreadActions,
    ThreeDots,
    DmMessageThread1,
    ProfileContainer,
    MessageThread1,
    SearchBar,
  },
};
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: row;
  flex-basis: 0;
}

.container {
  display: grid;
  grid-template-columns: 1fr repeat(4, 1fr);
}

.body {
  grid-column-start: 2;
  grid-column-end: 4;
  flex: 1;
}
.side-profile {
  grid-column-start: 4;
}
.header {
  grid-column-start: 3;
  grid-column-end: 5;
}
/* .home {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 50px repeat(4, 125px) 1fr 1fr 35px;
  max-height: 65vh;
  
}
.message-thread {
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 3;
  min-height: 100vh;
  overflow-y: scroll;
  padding-bottom: 5px;
}
.profile {
  grid-column-start: 5;
  grid-row-start: 2;
  grid-row-end: auto;
}
.input {
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 6;
} */
</style>