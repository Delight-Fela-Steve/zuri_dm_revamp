<template>
  <div class="input-container container-fluid">
        <input class="input-control" v-model='placeholder'/>
        <div class="row m-0  btn-container justify-content-md-between">
          <b-button-group class="col-auto btn-group p-0">
            <b-button class="button lightning"><b-icon-lightning></b-icon-lightning></b-button>
            <b-button class="button bold"><b-icon-type-bold></b-icon-type-bold></b-button>
            <b-button class="button italic"><b-icon-type-italic></b-icon-type-italic></b-button>
            <b-button class="button strike-through"><b-icon-type-strikethrough></b-icon-type-strikethrough></b-button>
            <b-button class="button code"><b-icon-code-slash></b-icon-code-slash></b-button>
            <b-button class="button link"><b-icon-link-45deg></b-icon-link-45deg></b-button>
            <b-button class="button list-ol"><b-icon-list-ol></b-icon-list-ol></b-button>
            <b-button class="button list-ul"><b-icon-list-ul></b-icon-list-ul></b-button>
            <b-button class="button quoteblock"><b-icon-bar-chart-steps></b-icon-bar-chart-steps></b-button>
            <b-button class="button code-block"><b-icon-code-square></b-icon-code-square></b-button>
            <b-button class="button three-dots"><b-icon-three-dots></b-icon-three-dots></b-button>
          </b-button-group>
          <b-button-group class="col-auto btn-group p-0">
            <b-button class="button type"><b-icon-type></b-icon-type></b-button>
            <b-button class="button at"><b-icon-at></b-icon-at></b-button>
            <b-button class="button emoji"><b-icon-emoji-smile></b-icon-emoji-smile></b-button>
            <b-button class="button paperclip"><b-icon-paperclip></b-icon-paperclip></b-button>
            <b-button-group class="col-auto btn-group">
              <b-button class="button cursor"><b-icon-cursor-fill></b-icon-cursor-fill></b-button>
              <b-button class="button chevron-down"><b-icon-chevron-down></b-icon-chevron-down></b-button>
            </b-button-group>
          </b-button-group>
        </div>
      </div>
</template>

<script>
export default {
  name: 'inputContainer',
  data(){
    return {
      placeholder: 'Send a message to Delight'
    }
  }
}
</script>

<style scoped>
.wrapper{
  max-width: 1100px;
}
.bold-span{
  margin: 0 .5rem 0 0;
  color: #adb5bd;
}
.bi-chevron-down{
  font-size: 9px;
}
.type{
  background-color: #ced4da;
  border-radius: 5px;
  color: gray;
}
.type:hover{
  color: black;
}
.lightning::after, .cursor::after{
  content: '|';
  color: #adb5bd;
  margin: 0 0 0 9px;
} 
.lightning:hover{
  background-color: blue;
  color: white;
  border-radius: 5px;
}
.emoji:hover,
.at:hover, 
.paperclip:hover, 
.code-block:hover, 
.quoteblock:hover, 
.list-ul:hover, 
.list-ol:hover, 
.link:hover, 
.code:hover, 
.strike-through:hover, 
.italic:hover, 
.bold:hover{
  background-color: #e9ecef;
  border-radius: 5px;
}
.code-block, 
.quoteblock, 
.list-ul, 
.list-ol, 
.link, 
.code, 
.strike-through, 
.italic, 
.bold
{
  display: none;
}
/* b-button-group */
.btn-group{
  font-size: 10px;
}
.button{
  color: gray;
  background-color: #f7f7f7;
  border-color: #f7f7f7;
  font-weight: 100;
  font-size: 13px;
}
.input-control{
  border: 1px solid transparent;
  width: 100%;
  padding: .5rem;
  text-align: start;
  color: gray;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.input-control:focus{
  outline: none;
  outline: transparent;
  border: 1px solid transparent;
}
.input-container{
  padding: .1rem;
  border-radius: 10px;
  border: 1px solid gray;
}
.btn-container{
  width: 100%;
  background-color: #f7f7f7;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
@media only screen and (min-width:407px){
 .bold{
   display: block;
 }
}
@media only screen and (min-width:449px){
  .italic{
    display: block;
  }
 }
 @media only screen and (min-width:490px){
  .strike-through{
    display: block;
  }
 }
 @media only screen and (min-width:531px){
  .code{
    display: block;
  }
 }
 @media only screen and (min-width:568px){
  .link{
    display: block;
  }
 }
 @media only screen and (min-width:608px){
  .list-ol{
    display: block;
  }
 }
 @media only screen and (min-width:649px){
  .list-ul{
    display: block;
  }
 }
 @media only screen and (min-width:690px){
  .quoteblock{
    display: block;
  }
 }
 @media only screen and (min-width:707px){
  .code-block{
    display: block;
  }
  .three-dots{
    display: none;
  }
  /* .input-container{
    width: 100%
  } */
 }
</style>


