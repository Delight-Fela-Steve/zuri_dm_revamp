<template>
  <div class="message-block">
    <div class="mx-0 py-3 mx-md-3">
      <div class="fs-4 px-3 px-md-0">All direct messages</div>
      <!-- This is the search box for DM contacts -->
      <div class="input-group my-3 py-3 bg-white text-dark rounded-3">
        <input
          class="form-control border-0 shadow-none"
          type="text"
          placeholder="To: @somebody or somebody@example.com"
        />
      </div>
      <!-- These are the messages sent in a day -->
      <div
        v-for="message in messageList"
        :key="message.sender"
        class="my-3 p-3 bg-white text-dark rounded-3"
      >
        <div class="message-box__date mb-2 fw-bold">
          {{ message.createdAt }}
        </div>
        <div class="d-flex align-items-center mb-2">
          <div class="">
            <img :src="message.profileImg" alt="Profile photo" />
          </div>
          <div class="flex-grow-1 px-3">
            <p class="message-box__name fw-bold">{{ message.sender }}</p>
            <p class="message-box__content">
              {{ message.receiver }}: {{ message.content }}
            </p>
          </div>
          <div class="message-box__time align-self-start align-self-sm-center">
            {{ message.time }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DirectMessage",
  data: function() {
    return {
      messageList: [
        {
          createdAt: "Yesterday",
          sender: "blac_dev",
          receiver: "You",
          profileImg: require("../assets/dm-image2.png"),
          time: "7:27pm",
          content: "Meeting starts in 1 hour bro ",
        },
        {
          createdAt: "Wednesday, September 8th",
          sender: "Fae",
          receiver: "Fae",
          profileImg: require("../assets/dm-image3.png"),
          time: "2:23pm",
          content: "Bro, where you at, come online asap!",
        },
        {
          createdAt: "Tuesday, September 7th",
          sender: "Micheal",
          receiver: "You",
          profileImg: require("../assets/dm-image.png"),
          time: "9:45pm",
          content: "Check your whatsapp guy",
        },
        {
          createdAt: "Monday, September 6th",
          sender: "Delight",
          receiver: "You",
          profileImg: require("../assets/dm-image2.png"),
          time: "2:23pm",
          content: "I'm at your place",
        },
        {
          createdAt: "Saturday, September 4th",
          sender: "Abisalde",
          receiver: "Abisalde",
          profileImg: require("../assets/dm-image3.png"),
          time: "2:23pm",
          content: "Hey, how've you been doing. You totally went MIA.",
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.message-block {
    font-family: 'Lato', sans-serif;
    color: #3a3a3a;
    background-color: #f6f6f6;
    font-size: 15px;
}
.message-box__time {
  font-size: 12px;
  color: #999999;
}
.message-box__date {
  color: #242424;
}
.message-box__name {
  color: #3a3a3a;
}
.message-box__content {
  color: #999999;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
}
</style>
