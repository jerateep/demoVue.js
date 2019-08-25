new Vue({
  el:"#vue-app",
  data:{
      name:"",
      messenger:"",
      age:20,
      web:'https://www.google.co.th',
      count:0,
      orders:[],
      gender:""
  },
  methods:{
      getName:function(){
          return this.name
      },
      setName:function(n){
          return this.name = n
      },
      addAge:function(){
          this.age = this.age+1
      },
      subAge:function(){
          this.age --
      },
      addCount:function(){
        this.count++
      }
    }
})

new Vue({
    el: '#app',
    data: {
      mail:'1',
      date:'2',
      adress:'3',
      company:'4',
      fliers:'5',
      rowData:[] //the declared array
    },
    methods:{
      addItem(){
        var my_object = {
          mail:this.mail,
          date:this.date,
          adress:this.adress,
          company: this.company,
          fliers: this.fliers
        };
        this.rowData.push(my_object)
  
        this.mail = '1';
        this.date = '2';
        this.adress = '3';
        this.company = '4';
        this.fliers = '5';
      }
    }
  })