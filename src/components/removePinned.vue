<template>
  <div>
    <b-button v-b-modal.modal-center>Launch centered modal</b-button>
    <b-modal
      id="modal-center"
      centered
      size="lg"
    >

      <template
        v-slot:modal-header="{cancel}"
      >
        <h3 id="pinned-header" class="px-4">Remove Pinned Item</h3>
        <b-button
          @click="cancel()"
          class="my-remove-close"
        >
          <i
            class="fas fa-times my-remove-close-icon"
            @click="cancel()"
          ></i>
        </b-button>
      </template>

      <p class="text-muted my-remove-close-para px-4">Are you sure you want to remove this item?</p>
      <div class="my-remove-close-conatainer" style="margin: 20px; width: 94%">
        <div class="conversation-threads">
          <div class="userProfile-avatar d-flex flex-row">
            <img
              src="../assets/Ellipse 21.png"
              alt="User Image"
            />
            <h5 class="pb-2">
              <span class="userName">MamaGee</span>
            </h5>
          </div>
          <div class="usertext-messages">
            <p class="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Eum mollitia aspernatur laboriosam cum officiis
              commodi deleniti odit rerum ratione consectetur. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
              Tincidunt adipiscing et, tortor, fusce quis tellus,
              enim. A, posuere mi auctor odio tincidunt magnis.
            </p>
            <span class="msgTime">Today at 5.55pm</span>
          </div>
        </div>
      </div>
      <template v-slot:modal-footer="{cancel, remove}" >
        <b-button
          class="my-remove-close-cancel-button"
          @click="cancel()"
          variant="light"
        >Cancel</b-button>
        <b-button
            class="my-remove-close-cancel-remove-button"
          @click="remove()"
        >Remove Pinned Item</b-button>
      </template>
    </b-modal>
  </div>

</template>

<script>
export default {

}
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
  font-size: 14px;
  line-height: 1.8;
}

h5 {
  margin-bottom: 0;
  font-size: 16px;
  font-weight: 600;
  font-size: bold;
  line-height: 2;
  margin-left: 10px;
}

span.msgTime {
  font-size: 12px;
  color: #999999;
  font-weight: 400;
}

.usertext-messages p {
  margin-bottom: 0;
}
#pinned-header {
  font-weight: bold;
}
.my-remove-close {
  background-color: inherit;
  border: 0;
  margin-right: 30px;
}
.my-remove-close:hover {
  background-color: inherit;
}
.my-remove-close-icon {
  font-size: 25px;
  color: #616061;
}
.my-remove-close-para {
  font-weight: bold;
}
.my-remove-close-conatainer {
  border: 1px solid #979797;
  width: 100%;
  padding: 10px;
}
.my-remove-close-cancel-button {
  border: 1px solid #979797;
  padding: 15px 60px;
  margin: 0 50px;
}
.my-remove-close-cancel-remove-button {
    padding: 15px 60px;
    background-color:#00B87C;
    margin-right: 47px;
}
.modal-content {
    padding: 10px;
}
</style>