Vue.component('tabs',{
    template:'' +
        '<div class="tabs">' +
        '   <div class="tabs-bar">' +
    '       <div :class="tabCls(item)" ' +
        '            v-for="(item,index) in navList" ' +
        '            @click="handleChange(index)">' +
        '           {{item.label}}' +
    ' <input v-if="item.closeable" type="button" name="close" value="关闭" @click="tableclose(index)" />     ' +
    ' </div>' +
        '   </div> ' +
        '   <div class="tabs-content">' +
    '       <slot></slot>' +
        '   </div> ' +
        '</div>',
    props:{
        value:{
            type:[String,Number]
        }
    },
    data:function () {
        return {
            currentValue:this.value,
            navList:[]
        }
    },
    methods:{
        getTags(){
            return this.$children.filter(function (item) {
                return item.$options.name === 'pane';
            });
        },
        updateNav(){
            this.navList = [];
            var _this = this;
            this.getTags().forEach(function (pane,index) {
                _this.navList.push({
                    label:pane.label,
                    name: pane.name || index,
                    closeable: pane.closeable
                });
                if  (!pane.name) pane.name = index;
                if (index === 0){
                    if (!_this.currentValue){
                        _this.currentValue = pane.name||index;
                    }
                }
            });
            this.updateStatus();
        },
        updateStatus(){
            var tabs = this.getTags();
            var _this = this;
            tabs.forEach(function (tab) {
                return tab.show = tab.name === _this.currentValue;
            })
        },
        tabCls:function (item) {
            return [
                'tabs-tab',
                {
                    'tabs-tab-active':item.name === this.currentValue
                }
            ]
        },
        handleChange:function (index) {
            var nav = this.navList[index];
            var name = nav.name;
            this.currentValue = name;
            this.$emit('input',name);
            this.$emit('on-click',name)
        },
        tableclose: function (index) {
            this.navList.splice(index, 1);

        }
    },
    watch:{
        value:function (val) {
            this.currentValue = val;
        },
        currentValue:function () {
            this.updateStatus();
        }
    }

})