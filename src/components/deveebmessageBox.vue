<template>
  <div class="row align-items-end message-box m-0 my-2">
    <div class="">
      <div class="mb-2 p-2 d-flex ">
        <div class="col-auto align-self-center link-btn">
            <button variant="white" class="col-auto p-3 btn-outline-disabled">
              <b-icon-chat-text scale="1" class="b-icon btn-icon"></b-icon-chat-text>
            </button>
          </div>
          <div class="col chat_description pt-3 ps-2">
            <h2 class="m-0">This conversation is just between two of you</h2>
            <p>Here you can send messages and share files with @o4codes</p>
          </div>
      </div>
      <div class="message-col mb-2 p-2">message sent 2</div>
      <!-- <div class="message-col mb-2 p-2">message sent 3</div> -->
      <!-- <div class="message-col mb-2 p-2">message sent 4</div> -->
      <!-- <div class="message-col mb-2 p-2">message sent 5</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name:"messagebox",
  data(){
    return {

    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style scoped>
.message-box{
  background: white;
  height: 70vh;
  overflow-y: scroll;
  display: flex;
  flex-flow: row wrap;
}
.message-stack{
  width: 100%;
  border: 1px solid gray;
}
.welcome-text{
  width: 100%;
  border: 1px solid gray;
}
.message-col{
  /* background: #f7f7f7; */
  box-shadow: 0px 0px 5px .1px rgba(0, 0, 0, 0.1);
}
/*  */
button{
    border: none;
    border-radius: 5px;
    outline: none

  }
  .wrapper:hover{
    background-color: rgba(0, 97, 195, 0.66);
  }
  .b-icon{
    outline: none;
    outline-color: transparent;
  }
  .chat_description > p{
    text-align: start;
    font-size: .8rem;
    color: gray;
  }
  .chat_description > h2{
    text-align: start;
    font-size: 1rem;
    font-weight: 600;
  }
  .white{
    color: white;
  }
   span{
     font-size: 15px;
     color: gray;
     text-align: start;
   }
</style>
