"use strict";(self["webpackChunkyogabhyas"]=self["webpackChunkyogabhyas"]||[]).push([[91],{5925:function(e,t,o){o.d(t,{Z:function(){return B}});var s=o(3396),a=o(4427);const r={class:"pt-3 px-5 pb-8 flex items-center justify-between bg-white"},l=(0,s._)("div",{class:""},[(0,s._)("img",{class:"h-14",src:a,alt:""})],-1),i={class:"w-4/5"},c={class:""};function n(e,t,o,a,n,d){const u=(0,s.up)("router-link"),m=(0,s.up)("SearchBar"),p=(0,s.up)("NavBarComponents");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s.Wm)(u,{to:"/home"},{default:(0,s.w5)((()=>[l])),_:1}),(0,s._)("div",i,[(0,s.Wm)(m,{userID:o.userID},null,8,["userID"])]),(0,s._)("div",c,[(0,s.Wm)(p,{userID:o.userID},null,8,["userID"])])])}var d=o(9242);const u={class:"relative"},m=(0,s._)("g",{id:"surface1552061"},[(0,s._)("path",{style:{stroke:"none","fill-rule":"nonzero",fill:"rgb(61.176473%,63.921571%,68.627453%)","fill-opacity":"1"},d:"M 39 9 C 22.46875 9 9 22.46875 9 39 C 9 55.53125 22.46875 69 39 69 C 46.191406 69 52.792969 66.445312 57.96875 62.207031 L 75.878906 80.121094 C 76.632812 80.90625 77.75 81.21875 78.800781 80.945312 C 79.851562 80.671875 80.671875 79.851562 80.945312 78.800781 C 81.21875 77.75 80.90625 76.632812 80.121094 75.878906 L 62.207031 57.964844 C 66.445312 52.792969 69 46.191406 69 39 C 69 22.46875 55.53125 9 39 9 Z M 39 15 C 52.289062 15 63 25.710938 63 39 C 63 52.289062 52.289062 63 39 63 C 25.710938 63 15 52.289062 15 39 C 15 25.710938 25.710938 15 39 15 Z M 39 15 "})],-1),p=[m];function b(e,t,o,a,r,l){return(0,s.wg)(),(0,s.iD)("div",u,[((0,s.wg)(),(0,s.iD)("svg",{class:"pointer-events-none w-8 h-5 absolute top-1/2 transform -translate-y-1/2 left-3",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 90 90",width:"90px",height:"80px",onClick:e=>!0},p)),(0,s.wy)((0,s._)("input",{class:"bg-primary-1 appearance-none border-transparent border-white rounded-xl h-10 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary-1 focus:ring-transparent pl-14 opacity-100",type:"text",placeholder:"Search for books","onUpdate:modelValue":t[0]||(t[0]=e=>r.search=e),onKeypress:t[1]||(t[1]=(0,d.D2)(((...e)=>l.submit&&l.submit(...e)),["enter"]))},null,544),[[d.nr,r.search]])])}var h={props:["userID"],data(){return{search:""}},constructed(){},methods:{submit(){this.$router.push({name:"searchResult",query:{userId:this.userID,search:this.search}})}}},v=o(89);const g=(0,v.Z)(h,[["render",b]]);var k=g,w=o(9858),f=o(3235),x=o(4774);const _={class:"flex gap-8"},y=(0,s._)("img",{class:"w-full",src:w,alt:""},null,-1),I=[y],D=(0,s._)("div",{class:"w-8"},[(0,s._)("img",{class:"w-full",src:f,alt:""})],-1),C=(0,s._)("div",{class:"w-8"},[(0,s._)("img",{class:"w-full",src:x,alt:""})],-1);function L(e,t,o,a,r,l){const i=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",_,[(0,s.Wm)(i,{to:{name:"cart",query:{id:o.userID}}},{default:(0,s.w5)((()=>[(0,s._)("div",{class:"w-8",onClick:e=>!0},I)])),_:1},8,["to"]),(0,s.Wm)(i,{to:{name:"wishList",query:{id:o.userID}}},{default:(0,s.w5)((()=>[D])),_:1},8,["to"]),(0,s.Wm)(i,{to:{name:"userView",query:{id:o.userID}}},{default:(0,s.w5)((()=>[C])),_:1},8,["to"])])}var S={props:["userID"],created(){console.log("Inside NavBarComponents")}};const j=(0,v.Z)(S,[["render",L]]);var z=j,R={props:["userID"],components:{SearchBar:k,NavBarComponents:z},created(){console.log("Inside Header")},methods:{routeToResult(){console.log("Routing to result")}}};const M=(0,v.Z)(R,[["render",n]]);var B=M},8091:function(e,t,o){o.r(t),o.d(t,{default:function(){return ue}});var s=o(3396),a=o(7139);const r={class:"relative"},l={class:""},i={class:"flex mt-32 mx-28"},c={class:"w-4/6"},n={class:"flex justify-between items-baseline"},d=(0,s._)("div",{class:"text-4xl font-bold font-calibri"},"Book Cart",-1),u={class:"text-2xl font font-calibri"},m=(0,s._)("div",{class:"w-full bg-gray-300 h-px mt-5"},null,-1),p=(0,s.uE)('<div class="flex"><div class="w-3/6"><div class="flex justify-between"><p class="mt-6 pl-2 text-gray-400">Product Details</p></div></div><div class="w-1/6"><div class="flex justify-between"><p class="mt-6 ml-6 text-gray-400">Quantity</p></div></div><div class="w-1/6"><div class="flex justify-between"><p class="mt-6 pl-10 text-gray-400">Price</p></div></div><div class="w-1/6"><div class="flex justify-between"><p class="mt-6 pl-12 text-gray-400">Total</p></div></div></div>',1),b={class:"w-6/6 pt-4"},h=(0,s._)("div",{class:"h-96 w-px bg-gray-300 ml-4 mr-4"},null,-1),v={class:"w-2/6"},g=(0,s._)("div",{class:"text-4xl font-bold font-calibri"},"Order Summary",-1),k=(0,s._)("div",{class:"w-full bg-gray-300 h-px mt-5"},null,-1),w={class:"flex justify-between"},f={class:"pt-8"},x={class:"pt-8"},_={class:"flex justify-between"},y=(0,s._)("p",{class:"pt-8"},"DISCOUNT ",-1),I={class:"pt-8"},D={class:"flex justify-between"},C=(0,s._)("p",{class:"pt-8"},"DELIVERY CHARGES",-1),L={class:"pt-8"},S={class:"flex justify-between"},j=(0,s._)("p",{class:"pt-40 text-xl font-bold"},"TOTAL COST",-1),z={class:"pt-40 text-xl font-bold"},R={class:"flex justify-center pt-6"},M=(0,s._)("button",{class:"bg-secondary-1 hover:bg-primary-1 hover:text-black text-white font-semibold text-xl h-10 pl-40 pr-40 tracking-widest"},"CHECKOUT",-1),B={class:"flex py-2 items-center text-sm text-black rounded-md text-center cursor-pointer fill-current hover:text-secondary-1 font-sm"},O=(0,s._)("svg",{class:"w-6",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 400.004 400.004",style:{"enable-background":"new 0 0 400.004 400.004"},"xml:space":"preserve"},[(0,s._)("g",null,[(0,s._)("path",{d:"M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757\r\n\t            \tc-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072\r\n\t            \tc6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315\r\n               \tC400.004,190.438,392.251,182.686,382.688,182.686z"})])],-1);function W(e,t,o,W,P,U){const Z=(0,s.up)("Header"),q=(0,s.up)("OrderCart"),Q=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",r,[(0,s._)("div",l,[(0,s.Wm)(Z,{userID:P.userID,class:"fixed z-10 w-full top-0"},null,8,["userID"])])]),(0,s._)("div",i,[(0,s._)("div",c,[(0,s._)("div",n,[d,(0,s._)("div",u,(0,a.zw)(P.items)+" items",1)]),m,(0,s._)("div",null,[p,(0,s._)("div",b,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(P.books,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e.id},[(0,s.Wm)(q,{onCalculate:U.calculate,bookName:e.name,bookAuthor:e.author,bookSubject:"English",bookGenre:"-",bookDate:e.publicationYear,bookImageURL:e.url,bookQuantity:"0",bookPrice:e.price,id:this.userID,bookID:e.id},null,8,["onCalculate","bookName","bookAuthor","bookDate","bookImageURL","bookPrice","id","bookID"])])))),128))])])]),h,(0,s._)("div",v,[g,k,(0,s._)("div",w,[(0,s._)("p",f,"ITEMS "+(0,a.zw)(P.items),1),(0,s._)("p",x,(0,a.zw)(P.cost),1)]),(0,s._)("div",_,[y,(0,s._)("p",I,(0,a.zw)(P.dis),1)]),(0,s._)("div",D,[C,(0,s._)("p",L,(0,a.zw)(P.deliv*this.items),1)]),(0,s._)("div",S,[j,(0,s._)("p",z,(0,a.zw)(P.cost+P.deliv*this.items),1)]),(0,s._)("div",R,[(0,s.Wm)(Q,{to:"404"},{default:(0,s.w5)((()=>[M])),_:1})]),(0,s.Wm)(Q,{to:"/home"},{default:(0,s.w5)((()=>[(0,s._)("div",{class:"ml-18 mt-8 flex",onClick:e=>!0},[(0,s._)("div",B,[O,(0,s._)("div",{class:"pl-2 text-xl",onClick:e=>!0},"Continue Shopping")])])])),_:1})])])],64)}var P=o(5925),U=o(3957),Z=o(9211),q=o(355);const Q={class:"mt-4"},H={class:"w-6/6 border-2 h-40"},N={class:"flex"},E={class:"flex w-1/6"},A=["src"],T={class:"w-2/6"},F={class:"mt-2 ml-2 font-bold text-gray-800 text-md cursor-pointer hover:text-secondary-1"},G={class:"mt-2 ml-2 text-black-400 text-sm cursor-pointer"},Y={class:"mt-2 ml-2 text-black-400 text-sm cursor-pointer"},K={class:"mt-2 ml-2 text-black-400 text-sm cursor-pointer"},V={class:"mt-2 ml-2 text-black-400 text-sm cursor-pointer"},$={class:"flex flex-col items-end justify-evenly mt-5"},J={class:"flex items-center"},X={class:"flex w-28"},ee={class:"py-1 h-8 w-20 border-2 text-sm text-center font-medium"},te={class:"ml-[70px] font-bold text-gray-800 text-md"},oe={class:"ml-24 font-bold text-gray-800 text-md"};function se(e,t,o,r,l,i){return(0,s.wg)(),(0,s.iD)("div",Q,[(0,s._)("div",H,[(0,s._)("div",N,[(0,s._)("div",E,[(0,s._)("img",{class:"h-36 object-fill border-none w-28",src:o.bookImageURL,alt:""},null,8,A)]),(0,s._)("div",T,[(0,s._)("div",F,(0,a.zw)(o.bookName),1),(0,s._)("p",G,"author: "+(0,a.zw)(o.bookAuthor),1),(0,s._)("p",Y,"subject: "+(0,a.zw)(o.bookSubject),1),(0,s._)("p",K,"genre:"+(0,a.zw)(o.bookGenre),1),(0,s._)("p",V,"publication date:"+(0,a.zw)(o.bookDate),1)]),(0,s._)("div",$,[(0,s._)("div",J,[(0,s._)("div",X,[(0,s._)("div",{class:"py-1 h-8 w-8 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium",onClick:t[0]||(t[0]=e=>i.decrement())},"-"),(0,s._)("div",ee,(0,a.zw)(l.quantity),1),(0,s._)("div",{class:"py-1 h-8 w-8 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium",onClick:t[1]||(t[1]=e=>i.increment())},"+")]),(0,s._)("div",te,"₹"+(0,a.zw)(this.price),1),(0,s._)("div",oe,"₹"+(0,a.zw)(l.total),1)]),(0,s._)("div",null,[(0,s._)("div",{class:"py-2 w-36 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium",onClick:t[2]||(t[2]=(...e)=>i.removeFromCart&&i.removeFromCart(...e))}," Remove from Cart ")])])])])])}var ae=o(6780),re={data(){return{total:0,query:"/book",id:this.$route.query.id,quantity:parseInt(this.bookQuantity),price:parseInt(this.bookPrice),total:parseInt(this.bookPrice)*parseInt(this.bookQuantity)}},props:["bookName","bookAuthor","bookSubject","bookGenre","bookDate","bookImageURL","bookPrice","bookID","bookQuantity"],methods:{totalPrice(){this.total=this.price*this.quantity},increment(){this.quantity++,this.totalPrice(),this.$emit("calculate",this.price,1)},decrement(){this.quantity>0&&(this.quantity--,this.totalPrice(),this.$emit("calculate",-this.price,-1))},removeFromCart(){console.log(this.id);const e=ae.Z.firestore();console.log("Inside removeFromWishList() method");try{e.collection("Users").doc(this.id).get().then((t=>{console.log(t.data());var o=t.data().addrLine1,s=t.data().addrLine2,a=t.data().mobile,r=t.data().city,l=t.data().landmark,i=t.data().name,c=t.data().state,n=t.data().zipcode,d=t.data().cart,u=t.data().wishList,m=t.data().orders,p=t.data().email,b=t.data().pfp;let h=[];h=d.filter((e=>e!==this.bookID)),console.log(this.bookID),console.log(d),console.log("removed array "+h),e.collection("Users").doc(this.id).set({addrLine1:o,addrLine2:s,cart:h,city:r,landmark:l,mobile:a,name:i,orders:m,state:c,wishList:u,zipcode:n,email:p,pfp:b}).then((e=>{this.$router.go()})),console.log("Data updated successfully")}))}catch(t){console.log(t)}}},mounted(){}},le=o(89);const ie=(0,le.Z)(re,[["render",se]]);var ce=ie,ne={data(){return{cost:0,items:0,prices:[],dis:0,deliv:40,searchedBooks:[{bookName:"Merchant Of Venice ",bookAuthor:"William Shakespeare",bookSubject:"English",bookGenre:"Hardcover",bookDate:"1300",bookImageURL:"https://images-eu.ssl-images-amazon.com/images/I/519KfsM6bRL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",bookPrice:"668",bookQuantity:"2"},{bookName:"Merchant Of Venice ",bookAuthor:"William Shakespeare",bookSubject:"English",bookGenre:"Hardcover",bookDate:"1300",bookImageURL:"https://images-eu.ssl-images-amazon.com/images/I/519KfsM6bRL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",bookPrice:"128",bookQuantity:"1"},{bookName:"Merchant Of Venice ",bookAuthor:"William Shakespeare",bookSubject:"English",bookGenre:"Hardcover",bookDate:"1300",bookImageURL:"https://images-eu.ssl-images-amazon.com/images/I/519KfsM6bRL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",bookPrice:"240",bookQuantity:"2"},{bookName:"Merchant Of Venice ",bookAuthor:"William Shakespeare",bookSubject:"English",bookGenre:"Hardcover",bookDate:"1300",bookImageURL:"https://images-eu.ssl-images-amazon.com/images/I/519KfsM6bRL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",bookPrice:"200",bookQuantity:"2"}],userID:this.$route.query.id,books:[]}},async created(){const e=ae.Z.firestore();console.log("Inside created() method");try{e.collection("Users").doc(this.userID).get().then((t=>{console.log(t.data());var o=t.data().cart;console.log(o);for(let s=0;s<o.length;s++)e.collection("books").doc(o[s]).get().then((e=>{var t=e.data();t.id=o[s],this.books.push(t)}));console.log("Searched Books array"),console.log(this.books)}))}catch(t){console.log(t)}},components:{Header:P.Z,Filter:U.Z,LatestBooks:Z.Z,ResultBook:q.Z,OrderSummary:ce,OrderCart:ce},methods:{calculateTotal(e){this.items+=e,this.cost+=this.prices[this.prices.length-1],console.log("current cost : "+this.cost)},calculate(e,t){this.prices.push(e),this.calculateTotal(t)}}};const de=(0,le.Z)(ne,[["render",W]]);var ue=de}}]);
//# sourceMappingURL=91.4feba1c9.js.map