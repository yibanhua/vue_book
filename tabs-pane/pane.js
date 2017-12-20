Vue.component('pane',{
    name:'pane',
    props:{
        name:{
            type:String,
        },
        label:{
            type:String,
            default:''
        },
        closeable: {
            type: Boolean,
            default: true
        }

    },
    template: '<transition name="slide-fade">' +
        '<div class="pane" v-show="show">' +
        '<slot></slot>' +
    '</div></transition>',
    data:function () {
        return{
            show:true
        }
    },
    methods:{
        updateNav(){
            this.$parent.updateNav();
        }
    },
    watch:{
        label(){
            this.updateNav();
        }
    },
    mounted(){
        this.updateNav();
    }
})