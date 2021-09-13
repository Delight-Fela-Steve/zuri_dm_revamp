<template>
  <div>
    <div class="container mx-auto">
      <div class="row mb-1  border border-gray-200 rounded-pill p-1 justify-content-center wrapper">
        <p class="col-auto m-0 px-1">{{message}}</p>
        <b-button variant="white" class="col-auto m-0 p-0 btn-outline-disabled" @click="toggle">
          <b-icon-chevron-down class="b-icon"></b-icon-chevron-down>
        </b-button>
      </div>
      <div class="row p-0 border border-gray-200 rounded days-dropdown list-wrapper" v-if="show">
        <ul ps-0 p0 m-0>
          <span class="px-3">jump to...</span>
          <li class="my-2 px-3 btn-outline-primary" v-for="day in days" :key="day.id">{{day.day}}</li>
          <hr>
          <li class="my-2 px-3 ">jump to a specific date</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'thread_calender',
  data(){
    return {
      message: 'Yesterday',
      show: false,
      days:[
        {id: 0, day: 'Today'},
        {id: 1, day: 'Last week'},
        {id: 2, day: 'Last month'},
        {id: 3, day: 'The very beginning'},
      ]
    }
  },
  methods:{
    toggle: function(){
      return this.show = !this.show;
    }
  }
}
</script>
  
<style scoped>
  *{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .container{
    width: 40vw;
  }
  .wrapper{
     max-width:200px;
  }
  
  .b-icon{
    outline: none;
    outline-color: transparent;
  }
   .b-icon:focus{
     outline: none;
     outline-color: transparent;
   }
   .btn{
     font-size: 9px;
   }
   .btn:focus{
     outline: none;
     outline-color: transparent;
   }
   span{
     font-size: 15px;
     color: gray;
   }
   .days-dropdown{
     box-shadow: 0px 8px 30px 1px rgba(0, 0, 0, 0.1);
   }
   .list-wrapper{
     max-width: 60%
   }
   ul{
      padding: 0;
      text-align: start;
    }
  li{
    color: black;
  }
</style>
