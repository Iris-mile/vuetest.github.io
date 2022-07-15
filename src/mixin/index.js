// 定义一个混入对象
export const myMixin = {
    data() {
        return {
            msg: '我是混入，我很垃圾'
        }
    },
    // 生命周期
    created: function () {
        this.hello()
    },
    methods: {
        hello: function () {
            console.log('hello from mixin!')
        }
    }
}