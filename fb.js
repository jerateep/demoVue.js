var database = firebase.database();
var messageRef = database.ref("Messages/");




new Vue({
    el:"#comment",
    data:{
        messageText:'',
        messages:[],
        name:'Gust'
    },
    methods:{
        storeMessages:function(){
            messageRef.push({
                name: this.name,
                txt : this.messageText
            })
            this.name = '';
            this.messageText= '';
        }
    },
    created(){

    }
})
