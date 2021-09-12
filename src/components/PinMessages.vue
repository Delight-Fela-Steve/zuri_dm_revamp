<template>
  <div class="">
    <h2>Pin Message</h2>
    <div class="pin-block px-2 py-2 mb-3">
      <!-- Pin info -->
      <div class="d-flex align-items-center">
        <div v-if="pinned" class="pin-image-box d-flex justify-content-end">
          <img class="d-inline" src="../assets/pin.png" alt="" />
        </div>
        <div v-if="pinned" class="pin-text flex-grow-1 mx-2">Pinned by you</div>
      </div>
      <!-- Message -->
      <div class="d-flex align-items-center">
        <div class="pin-time-box">5:57pm</div>
        <div class="flex-grow-1 mx-2">
          Wow! Thank you. It;s working! I spent many hours on this case,
          completely paying no attention for this scope in css. Than for that.
        </div>
      </div>
    </div>
    <div class="mb-3">
      <button class="px-2" @click="pinMessage">Pin message</button>
    </div>
    <div>
      <button @click="toggleModal">Unpin message</button>
    </div>

    <!-- Modal Component. To take props -->
    <div id="modal-wrapper" class="modal-wrapper">
      <div class="modal-block bg-white px-4 py-4">
        <div class="d-flex justify-content-between mb-3">
          <h2 class="modal-title fs-3 fw-bold">Remove Pinned Item</h2>
          <h2 @click="toggleModal">X</h2>
        </div>
        <div class="modal-title__text fw-bold mb-4">
          Are you sure you want to remove this pinned item?
        </div>
        <div class="modal-box border-1 rounded-3 mb-5 px-3 py-4">
          <div class="d-flex mb-2">
            <div class="me-2">
              <img
                class="rounded-circle"
                src="../assets/modal-photo.png"
                alt="Profile photo"
              />
            </div>
            <div class="modal-box-title fw-bold">Phosah</div>
          </div>
          <div class="modal-box-text mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            adipiscing et, tortor, fusce quis tellus, enim. A, posuere mi auctor
            odio tincidunt magnis..
          </div>
          <div class="modal-box-time">Today at 12:34am</div>
        </div>
        <div class="d-flex justify-content-end">
          <button
            @click="toggleModal"
            class="modal-btn-1 py-3 me-3 rounded-2 border-1 fw-bold"
          >
            Cancel
          </button>
          <button
            @click="unpinMessage"
            id="close-btn"
            class="
              modal-btn
              py-3
              rounded-2
              border-0
              bg-success
              text-white
              fw-normal
            "
          >
            Remove Pinned Item
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PinMessage",
  data() {
    return {
      pinned: false,
      headerBgVariant: "dark",
      bodyBgVariant: "dark",
      display: "none",
    };
  },
  methods: {
    pinMessage: function () {
      this.pinned = true;
    },
    unpinMessage: function () {
      this.pinned = false;
      this.toggleModal();
    },
    toggleModal: function () {
      const modalBox = document.getElementById("modal-wrapper");
      modalBox.classList.toggle("toggleModal");
    },
  },
};
</script>

<style scoped>
/* Modal */
.modal-wrapper {
  /* border: 1px solid red;  */
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: none;
}
.modal-block {
  width: 650px;
}
.modal-title {
  color: #1d1d1d;
}
.modal-title__text {
  color: #999999;
}
.modal-box {
  border: 1px solid #999999;
}
.modal-box-title {
  color: #242424;
}
.modal-box-text {
  color: #616061;
}
.modal-box-time {
  color: #999999;
}
.modal-btn {
  width: 175px;
}
.modal-btn-1 {
  width: 175px;
  border: 1px solid #999999;
  color: #616061;
}
.toggleModal {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Pin Message */
.pin-block {
  background-color: #f8ffcc;
  font-size: 15px;
}
.pin-text {
  font-size: 14px;
  color: #999999;
}
.pin-image-box {
  min-width: 55px;
}
.pin-time-box {
  min-width: 55px;
  color: #999999;
}
</style>
