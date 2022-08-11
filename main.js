const app = Vue.createApp({
   data()
   {
      return {
        visible:false,
        userInfo:false,
        burger:false,
        activeBurger:false,
        visibleCompany:false,
        rotate:true,
        rotateCompany:true,
        selected:'Выберите роль',
        selectedCompany:'RemBrand',
        punkts:[
         {name:'Администратор',value:1},
         {name:'Веб-разработчик',value:2},
         {name:'Начальник отдела',value:3},
        ],
        punktsCompany:[
         {name:'RemBrand',value:1,countPeople:5},
         {name:'Micro PC',value:2,countPeople:15},
         {name:'Big MC',value:3,countPeople:1},
         {name:'Apple',value:3,countPeople:2},
        ]
      }
     
   },
   
   computed: {
      submenuArrow: function() {
         if(this.rotate == true) {
            return 'submenuArow'
         } else {
            return 'activeRotate'
         }
      },
      submenuCompanyArrow: function() {
         if(this.rotateCompany == true) {
            return 'submenuArow'
         } else {
            return 'activeRotate'
         }
      }
   },
   methods: {
   punktSelect(punkt){
     this.selected = punkt.name;
    
   },
   punktCompanySelect(punktCompany){
      this.selectedCompany = punktCompany.name;
      
    },
    hideSelect(){
      this.visible = false;
      this.visibleCompany = false;
      this.rotate=true;
      this.rotateCompany=true;
    },
    hideArrow(){
      
    }
   },
  mounted() {
   window.onload = function () {
     
      document.body.classList.add('loaded_hiding');
      window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
      }, 1000);
    }
    document.addEventListener('click',this.hideSelect.bind(this), true)
    
  },
  beforeDestroy() {
   document.removeEventListener('click',this.hideSelect)
  },
 
})
app.mount("#app");
// прилоудер



