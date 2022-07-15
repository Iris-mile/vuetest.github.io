<template>
    <div>
        <p>{{user.name}}</p>
        <button @click="changeName">改变</button>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            user:{
              name:"阿刁",
              children:{
                child1:"小敏",
                child2:"小花"
              }
            }
          }
        },
        methods:{
          changeName(){
          //解决数据过深监听不到
            // this.user={name:"阿飞"}   no:改变了其他值
            //  this.user={...this.user,...{name:"飞飞"}}
            
            this.user.name="阿飞"
          }
        },
        watch:{

        //  'user.name'(newVal,oldVal){
        //       console.log(newVal,oldVal);
        //   }

        //深度监听
         'user.name':{
          handler(newVal,oldVal){
            console.log(newVal,oldVal);
          },
          deep:true
        }
        }
    }
</script>

<style lang="less" scoped>

</style>