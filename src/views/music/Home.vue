<template>
  <div class="home">
    <div class="music_list">
      <Play
        :music="item"
        v-for="(item, index) in musicList"
        :key="index"
        @play="handlePlay"
      ></Play>
    </div>
    <Dragable />
    <button @click="getStyle" :class="['bgc']">在这呢</button>
  </div>
</template>

<script>
import Play from "@/components/Play.vue";
import Dragable from "@/components/Dragable.vue";

export default {
  components: { Play, Dragable },
  data() {
    return {
      musicList: [
        {
          id: 1,
          imgUrl:
            "https://p2.music.126.net/c6Rddgfp3nKG-cPhyn4STg==/109951166485018774.jpg?param=140y140",
          num: 260000,
          desc: "不亏待每一份热情，不讨好每一份冷漠",
        },
        {
          id: 2,
          imgUrl:
            "https://p1.music.126.net/4KvpdeeEvfcLwKZSJ59XBg==/109951166707584041.jpg?param=140y140",
          num: 1000,
          desc: "你好，20代！-杨非同：唱每一首歌，给一直陪伴着我的你们听",
        },
        {
          id: 3,
          imgUrl:
            "https://p2.music.126.net/UnOO7hTEti9ux3N0_OaGeg==/109951166079367925.jpg?param=140y140",
          num: 123000,
          desc: "不开家咖啡店真对不起我听的这些歌",
        },
        {
          id: 4,
          imgUrl:
            "https://p2.music.126.net/Rc-Gc1pjnu39iwB_v98L4w==/109951165758674021.jpg?param=140y140",
          num: 4656000,
          desc: "不同列车都在开往更好的地方",
        },
        {
          id: 5,
          imgUrl:
            " https://p1.music.126.net/PdGB97lIH1glPKNQJOYBCA==/109951166415824594.jpg?param=140y140",
          num: 34000,
          desc: "夜晚助眠 温柔治愈纯音乐",
        },
        {
          id: 6,
          imgUrl:
            "http://p1.music.126.net/8I-5x429f_AMtRpG5I_uhg==/109951166529767568.jpg?param=140y140",
          num: 8965000,
          desc: "「欧美」情遇英式小酒馆的复古浪漫✨",
        },
        {
          id: 7,
          imgUrl:
            "https://p1.music.126.net/ztTZZSmiZ29JM9tHHhD2TA==/109951166190596992.jpg?param=140y140",
          num: 1324000,
          desc: "今天是个rapper",
        },
      ],
      styleDiv: {
        color: "green",
        fontSize: "30px",
      },
    };
  },

  methods: {
    handlePlay(music) {
      console.log(music);
    },
    getStyle() {
      document.querySelector("button").style.backgroundColor = "green";
      // console.log(document.querySelector("button").style.backgroundColor)
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  position: relative;
}
.music_list {
  display: flex;
  flex-wrap: wrap;
  .music {
    margin: 0 20px 20px 0px;
  }
}
.bgc {
  background-color: red;
}
</style>