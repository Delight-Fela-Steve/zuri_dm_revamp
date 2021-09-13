<template>
  <div class="home">
    <div class="row">
      <div class="aside-content">
      <div class="side-bar">
        <p>#side-bar content</p>
      </div>
    </div>
    <div class="home-content">
      <dm_profile_header/>
      <messagebox/>
      <inputContainer/>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import thread_calender from '@/components/deveebthreadCalender.vue'
import dm_profile_header from '@/components/deveebdmProfileHeader.vue'
import bookmark from '@/components/deveebbookmarks.vue'
import inputContainer from '@/components/deveebinputContainer.vue'
import messagebox from '@/components/deveebmessageBox.vue'

export default {
  name: 'Home',
  components: {
    // thread_calender,
    dm_profile_header,
    bookmark,
    inputContainer,
    messagebox
  }
}
</script>

<style>
  .home{
    flex-flow: column;
    background: #f6f6f6;
    padding: 1rem;
    position: relative;
  }
  .aside-content{
    flex: 0 1 20%;
    background: white;
  }
  .home-content{
    flex: 0 1 80%;
  }
</style>
