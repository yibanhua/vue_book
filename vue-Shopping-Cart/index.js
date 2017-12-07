var app = new Vue({
    el:'#app',
    data:{
          select:true,
            list:[
                   { category:"电子产品",
                       selected:true,
                         data:[
                                  {  id:1,
                                     name:'iphone7',
                                     price:6188,
                                     count:1,
                                     checked:true
                                  },
                                  {  id:2,
                                     name:'iPad Pro',
                                     price:5888,
                                     count:1,
                                     checked:true
                                  },
                                  {
                                     id:3,
                                     name:'MacBook Pro',
                                     price:21488,
                                     count:1,
                                     checked:true
                                  },
                                  {
                                     id:4,
                                     name:'Bests',
                                     price:2888,
                                     count:2,
                                     checked:true
                                  }
                            ]
                    },
                { category:'生活用品',
                    selected:true,

                    data:[
                        {  id:1,
                            name:'卫生纸',
                            price:20,
                            count:1,
                            checked:true
                        },
                        {  id:2,
                            name:'洗衣服',
                            price:13,
                            count:1,
                            checked:true
                        },
                        {
                            id:3,
                            name:'沐浴露',
                            price:35,
                            count:1,
                            checked:true
                        },
                        {
                            id:4,
                            name:'保温杯',
                            price:68,
                            count:2,
                            checked:true
                        }
                    ]
                },
                { category:'热带水果',
                    selected:true,
                    data:[
                        {  id:1,
                            name:'榴莲',
                            price:23,
                            count:1,
                            checked:true
                        },
                        {  id:2,
                            name:'火龙果',
                            price:43,
                            count:1,
                            checked:true
                        },
                        {
                            id:3,
                            name:'芒果',
                            price:22,
                            count:1,
                            checked:true
                        },
                        {
                            id:4,
                            name:'西瓜',
                            price:1.5,
                            count:2,
                            checked:true
                        }
                    ]
                },

            ]

    },
    computed:{


        totalPrice:function() {
            var total = 0;
            for (var i = 0; i < this.list.length; i++) {
                for (var j = 0; j < this.list[i].data.length; j++) {
                    var item = this.list[i].data[j];
                    total += item.price * item.count * item.checked;
                }
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        }
             },
    methods:{
        handleReduce:function (item) {
            if (item.count===0)return;
            this.item.count--;

        },
        handleAdd:function (index) {
            this.list[index].count++;

        },
        handleRemove:function (index) {
            this.list.splice(index,1);

        },
        checkAll:function () {
            for (var i=0; i<this.list.length;i++){
               this.list[i].checked=!this.select;
            };
        },
        /*categoryPrice:function(){
            var category = 0;
            for (var i=0; i<this.items;i++){
                var item = this.items[i];
                category += item.price*item.count*item.checked;
            }
            return category.toString().replace(/\B(?=(\d{3})+$)/g,',');*/


    }
});