<template>
  <div class="home">
    <b-row class="all-contents">
      <b-col cols="2" class="zurichat-sidebar">
        <div class="hedaer-contents">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            officia iure corrupti, perferendis a laudantium earum neque tempora
            facere ipsum dolore commodi laboriosam temporibus. Repellat omnis
            vitae inventore. Qui, itaque!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            tempora id iusto necessitatibus reiciendis enim repudiandae numquam
            porro quam ut. Exercitationem labore totam nihil eius, corporis quam
            eligendi a! Veritatis!
          </p>
        </div>
      </b-col>
      <b-col
        :cols="showReply ? '6' : '10'"
        class="zurichat-contents-plugin main px-4 position-relative"
      >
        <header>
          <div class="searchform-settings-profile py-3">
            <SearchBar />
          </div>
        </header>
        <div class="user-profile-header">
          <DmProfileHeader />
        </div>

        <div class="dm-plugin-contents">
          <DmPluginContents />
          <!-- <button @click="fetchUsers">fetch users</button> -->
        </div>
      </b-col>
      <b-col :cols="showReply ? '4' : ''" v-if="showReply" >
        <ThreadReplySidebar />
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from "@/components/searchBar.vue";
import DmProfileHeader from "@/components/dmProfileHeader.vue";
import DmPluginContents from "@/components/dmPluginContents.vue";
import ThreadReplySidebar from "@/components/threadReplySidebar.vue";
import EmojiComp from "@/components/emojiComp.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    SearchBar,
    DmProfileHeader,
    DmPluginContents,
    ThreadReplySidebar,
    EmojiComp,
  },
  data() {
    return {
      users: []
    };
  },
  computed: {
    ...mapGetters(["showReply"]),
  },
  
  methods: {
    async fetchUsers() {
      const baseURI = 'http://dm.zuri.chat:9090/api/v1/room-info?room_id='
      await this.$http.get(baseURI)
      .then((result) => {
        this.users = result
      console.log(result)
      }).catch(error => console.log(error))
    }
  }
};
</script>

<style scoped>
.hone .all-contents {
  position: relative;
  width: 100%;
}

.zurichat-sidebar {
  background: #fff;
  overflow-x: hidden;
}

.zurichat-contents-plugin {
  position: relative;
  background: #f6f6f6;
}

.user-profile-header {
  margin: 16px 0 26px;
}

dm-plugin-contents {
  position: relative;
}
#app > div > div > div:nth-child(3) {
  padding: 0;
}

@media screen and (min-width: 100px) and (max-width: 767px) {
  .all-contents .zurichat-sidebar {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    overflow: auto;
  }

  .all-contents .zurichat-contents-plugin {
    width: 100%;
  }
}
</style>
