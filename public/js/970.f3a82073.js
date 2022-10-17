"use strict";(self["webpackChunkyogabhyas"]=self["webpackChunkyogabhyas"]||[]).push([[970,442],{4693:function(t,e,o){o.d(e,{Z:function(){return A}});var s=o(3396),i=o(7139);const a={class:"bg-primary-1 w-full mt-2 mb-4"},r={class:"flex items-center justify-between pr-4"},d={class:"w-80"},l={class:"pl-4 pt-3 flex"},n=["src"],c={class:"ml-5 mt-1"},m={class:"font-medium text-lg"},h={class:"font-normal text-sm text-gray-600"},u={class:"font-normal text-sm text-gray-600"},b={class:"font-normal text-sm text-gray-600"},v={class:"text-gray-500 text-sm pb-2 ml-4 mt-2"},k={class:"w-15"},g={class:"w-64"},y={class:"text-sm"},x={class:"text-sm text-gray-500"},f={class:"text-sm text-gray-500"},p={class:"text-sm text-gray-500"},w={class:"text-sm text-gray-500"},_={class:"text-sm text-gray-500"},D={class:"text-sm text-gray-500"},L=(0,s._)("div",{class:"text-sm"},"Order Tracking ID:",-1),z={class:"text-sm text-gray-500"};function I(t,e,o,I,W,U){return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",r,[(0,s._)("div",d,[(0,s._)("div",l,[(0,s._)("div",null,[(0,s._)("img",{class:"h-36 object-contain border-none",src:o.bookImageURL,alt:""},null,8,n)]),(0,s._)("div",c,[(0,s._)("div",m,(0,i.zw)(o.bookName),1),(0,s._)("div",h,"Author: "+(0,i.zw)(o.bookAuthor),1),(0,s._)("div",u,"Genre: "+(0,i.zw)(o.bookGenre),1),(0,s._)("div",b,"Publication Date: "+(0,i.zw)(o.bookYear),1)])]),(0,s._)("div",v,"Order ID: "+(0,i.zw)(o.orderID),1)]),(0,s._)("div",k,"₹ "+(0,i.zw)(o.bookPrice),1),(0,s._)("div",g,[(0,s._)("div",y,"Delivery on "+(0,i.zw)(o.bookDelivery),1),(0,s._)("div",x,(0,i.zw)(o.addressline1),1),(0,s._)("div",f,(0,i.zw)(o.addressline2),1),(0,s._)("div",p,(0,i.zw)(o.landmark),1),(0,s._)("div",w,(0,i.zw)(o.city),1),(0,s._)("div",_,(0,i.zw)(o.state),1),(0,s._)("div",D,"Pincode: "+(0,i.zw)(o.pincode),1),L,(0,s._)("div",z,(0,i.zw)(o.orderTrackingID),1)])])])}var W=o(6780),U={props:["orderID","bookName","bookPrice","bookImageURL","orderDate","shipTo","bookYear","bookGenre","bookAuthor","bookDelivery","orderTrackingID","addressline1","addressline2","city","landmark","state","pincode"],data(){return{user:[],load:!1,id:this.$route.query.id}},async created(){const t=W.Z.firestore();try{await t.collection("Users").doc(this.id).get().then((t=>{this.user.push(t.data()),this.load=!0}))}catch(e){console.log(e)}}},Z=o(89);const T=(0,Z.Z)(U,[["render",I]]);var A=T},9206:function(t,e,o){o.d(e,{Z:function(){return T}});var s=o(3396),i=o(7139);const a={class:"w-240 py-3"},r={class:"bg-secondary-1 rounded-t-md py-4"},d={class:"px-8 flex justify-between"},l=(0,s._)("div",{class:"text-white font-medium text-sm"},"ORDER PLACED",-1),n={class:"text-white font-light text-sm"},c=(0,s._)("div",{class:"text-white font-medium text-sm"},"TOTAL",-1),m={class:"text-white font-light text-sm"},h=(0,s._)("div",{class:"text-white font-medium text-sm"},"Ship To",-1),u={class:"text-white font-light text-sm"},b=(0,s._)("div",{class:"text-white font-medium text-sm"},"Order ID",-1),v={class:"text-white font-light text-sm"},k={class:"bg-primary-1 rounded-b-md px-10 pt-2 pb-4"},g={class:"flex justify-between items-end"},y={class:"flex"},x=["src"],f={class:"ml-6 mt-4"},p={class:"font-medium text-lg"},w={class:"font-normal text-sm text-gray-600"},_={class:"font-normal text-sm text-gray-600"},D={class:"font-normal text-sm text-gray-600"},L={class:"mb-5"};function z(t,e,o,z,I,W){return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",r,[(0,s._)("div",d,[(0,s._)("div",null,[l,(0,s._)("div",n,(0,i.zw)(o.orderDate),1)]),(0,s._)("div",null,[c,(0,s._)("div",m,"₹ "+(0,i.zw)(o.bookPrice),1)]),(0,s._)("div",null,[h,(0,s._)("div",u,(0,i.zw)(o.shipTo),1)]),(0,s._)("div",null,[b,(0,s._)("div",v,(0,i.zw)(o.orderID),1)])])]),(0,s._)("div",k,[(0,s._)("div",null,"Delivered "+(0,i.zw)(I.bookDeliveryTime),1),(0,s._)("div",g,[(0,s._)("div",y,[(0,s._)("div",null,[(0,s._)("img",{class:"h-52 object-contain border-none w-full",src:o.bookImageURL,alt:""},null,8,x)]),(0,s._)("div",f,[(0,s._)("div",p,(0,i.zw)(o.bookName),1),(0,s._)("div",w,"Author: "+(0,i.zw)(o.bookAuthor),1),(0,s._)("div",_,"Genre: "+(0,i.zw)(o.bookGenre),1),(0,s._)("div",D,"Publication Date: "+(0,i.zw)(o.bookYear),1)])]),(0,s._)("div",L,[(0,s._)("div",{class:"cursor-pointer hover:bg-secondary-1 hover:text-white bg-white px-5 py-1 rounded-md text-secondary-1 font-medium",onClick:e[0]||(e[0]=t=>W.addToCart())},"Buy Again")])])])])}var I=o(6780),W={props:["orderID","bookID","bookName","bookDelivered","bookPrice","bookImageURL","orderDate","shipTo","bookYear","bookGenre","bookAuthor","bookDelivery","orderTrackingID","addressline1","addressline2","city","landmark","state","pincode"],data(){return{user:[],load:!1,id:this.$route.query.id,bookDeliveryTime:this.bookDelivered}},async created(){"NaN-NaN-NaN"===this.bookDelivered&&(this.bookDeliveryTime="");const t=I.Z.firestore();console.log("Inside created() method of userprofile-> sidebar");try{await t.collection("Users").doc(this.id).get().then((t=>{this.user.push(t.data()),this.load=!0}))}catch(e){console.log(e)}},methods:{async addToCart(){alert("Item added to cart successfully"),console.log(this.id);var t=new Set;await I.Z.firestore().collection("Users").doc(this.id).get().then((e=>{t=new Set(e.data().cart)})),t.add(this.bookID),I.Z.firestore().collection("Users").doc(this.id).update({cart:Array.from(t)})}}},U=o(89);const Z=(0,U.Z)(W,[["render",z]]);var T=Z},4804:function(t,e,o){o.r(e),o.d(e,{default:function(){return E}});var s=o(3396),i=o(9806);const a={class:"relative"},r={class:""},d={class:"mt-24 mx-40"},l=(0,s._)("div",{class:"text-3xl font-semibold text-gray-700 mb-5"},"Your WishList",-1),n={key:0},c={key:0,style:{"text-align":"center"}},m=(0,s._)("img",{src:i,alt:"",style:{height:"400px",margin:"auto"}},null,-1),h=(0,s._)("div",{style:{position:"relative",bottom:"10vh","font-size":"32px",color:"#476582"}},"Your Wishlist is empty :(",-1),u=(0,s._)("div",{style:{position:"relative",bottom:"10vh","font-size":"20px",color:"#476582a4"}},"Looks like you have not added anything to your wishlist :(",-1),b=[m,h,u],v={key:1};function k(t,e,o,i,m,h){const u=(0,s.up)("Header"),k=(0,s.up)("WishBooks");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",r,[(0,s.Wm)(u,{userID:m.id,class:"fixed z-10 w-full top-0"},null,8,["userID"])]),(0,s._)("div",d,[l,m.isLoaded?((0,s.wg)(),(0,s.iD)("div",n,[0===m.books.length?((0,s.wg)(),(0,s.iD)("div",c,b)):((0,s.wg)(),(0,s.iD)("div",v,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(m.books,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t.id},[(0,s._)("div",null,[(0,s.Wm)(k,{onUpdateWishList:h.updateWishList,bookName:t.name,bookPrice:t.price,bookImageURL:t.url,bookYear:t.publicationYear,bookGenre:t.bookGenre,bookAuthor:t.author,bookID:t.id,id:m.id},null,8,["onUpdateWishList","bookName","bookPrice","bookImageURL","bookYear","bookGenre","bookAuthor","bookID","id"])])])))),128))]))])):(0,s.kq)("",!0)])])}o(6699);var g=o(5103),y=o(9308),x=o(9211),f=o(8207),p=o(4372),w=o(9206),_=o(4693),D=o(7139);const L={class:"mb-5"},z={class:"flex justify-between"},I={class:"pl-4 pt-3 flex"},W=["src"],U={class:"ml-5 mt-1"},Z={class:"font-medium text-lg"},T={class:"font-normal text-sm text-gray-600"},A={class:"font-normal text-sm text-gray-600"},C={class:"font-normal text-sm text-gray-600"},N={class:"mr-20 flex flex-col justify-between items-end"},P={class:"text-4xl font-bold text-gray-700 mr-5 mt-5"},Y={class:"flex gap-5"},G=(0,s._)("div",{class:"bg-gray-300 w-full h-px ml-4"},null,-1);function R(t,e,o,i,a,r){const d=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",L,[(0,s._)("div",z,[(0,s.Wm)(d,{to:"/book"},{default:(0,s.w5)((()=>[(0,s._)("div",I,[(0,s._)("img",{class:"h-52",src:o.bookImageURL,alt:""},null,8,W),(0,s._)("div",U,[(0,s._)("div",Z,(0,D.zw)(o.bookName),1),(0,s._)("div",T,"Author: "+(0,D.zw)(o.bookAuthor),1),(0,s._)("div",A,"Genre: "+(0,D.zw)(o.bookGenre),1),(0,s._)("div",C,"Publication Date: "+(0,D.zw)(o.bookYear),1)])])])),_:1}),(0,s._)("div",N,[(0,s._)("div",P," ₹ "+(0,D.zw)(o.bookPrice),1),(0,s._)("div",Y,[(0,s._)("div",{class:"bg-secondary-1 px-3 py-1 text-white hover:bg-primary-1 hover:text-secondary-1 cursor-pointer",onClick:e[0]||(e[0]=(...t)=>r.addToCart&&r.addToCart(...t))},"Add to Cart"),(0,s._)("div",{class:"bg-secondary-1 px-3 py-1 text-white hover:bg-primary-1 hover:text-secondary-1 cursor-pointer",onClick:e[1]||(e[1]=(...t)=>r.removeFromWishList&&r.removeFromWishList(...t))},"Remove from Wishlist")])])])]),G],64)}var O=o(6780),j={emits:["updateWishList"],props:["bookName","updateWishList","bookPrice","bookImageURL","bookYear","bookGenre","bookAuthor","id","bookID"],methods:{addToCart(){const t=O.Z.firestore();console.log("Inside addToCart() method");try{t.collection("Users").doc(this.id).get().then((e=>{var o=e.data().addrLine1,s=e.data().addrLine2,i=e.data().mobile,a=e.data().city,r=e.data().landmark,d=e.data().name,l=e.data().state,n=e.data().zipcode,c=e.data().cart||[],m=e.data().wishList||[],h=e.data().orders||[],u=e.data().email;c.push(this.bookID);var b=c.filter((function(t){return""!=t}));let v=b.filter(((t,e)=>b.indexOf(t)===e));c=v,console.log(v),t.collection("Users").doc(this.id).set({addrLine1:o,addrLine2:s,cart:v,city:a,landmark:r,mobile:i,name:d,orders:h,state:l,wishList:m,zipcode:n,email:u}).then((t=>{console.log("Data written successfully"),alert("Item added to cart successfully")}))}))}catch(e){console.log(e)}},async removeFromWishList(){console.log(this.id);const t=O.Z.firestore();console.log("Inside removeFromWishList() method");try{await t.collection("Users").doc(this.id).get().then((e=>{console.log(e.data());var o=e.data().addrLine1,s=e.data().addrLine2,i=e.data().mobile,a=e.data().city,r=e.data().landmark,d=e.data().name,l=e.data().state,n=e.data().zipcode,c=e.data().cart||[],m=e.data().wishList||[],h=e.data().orders||[],u=e.data().email;let b=[];b=m.filter((t=>t!==this.bookID)),this.$emit("updateWishList",b),t.collection("Users").doc(this.id).set({addrLine1:o,addrLine2:s,cart:c,city:a,landmark:r,mobile:i,name:d,orders:h,state:l,wishList:b,zipcode:n,email:u}).then((t=>{})),console.log("Data updated successfully")}))}catch(e){console.log(e)}}}},B=o(89);const F=(0,B.Z)(j,[["render",R]]);var H=F,q={data(){return{id:this.$route.query.id,books:[],isLoaded:!1}},created(){this.fetch()},components:{Header:g.Z,Filter:y.Z,LatestBooks:x.Z,ResultBook:f.Z,BookCoverCat:p.Z,OrderHistory:w.Z,OrderDetails:_.Z,WishBooks:H},methods:{async fetch(){const t=O.Z.firestore();console.log("Inside created() method of Wishlist");try{this.books=[],console.log("User ID : "+this.id),await t.collection("Users").doc(this.id).get().then((e=>{console.log(e.data());var o=e.data().wishList;console.log(o);for(let s=0;s<o.length;s++)t.collection("books").doc(o[s]).get().then((t=>{this.books.push(t.data()),this.books[s].id=o[s]}));console.log("Wishlist books array")})).finally((()=>{this.isLoaded=!0}))}catch(e){console.log(e)}},updateWishList(t){var e=[];console.log(t),this.books.forEach((o=>{console.log(o.id),t.includes(o.id)&&e.push(o)})),this.books=e}}};const $=(0,B.Z)(q,[["render",k]]);var E=$},9806:function(t,e,o){t.exports=o.p+"img/empty-box.dd1773f0.png"}}]);
//# sourceMappingURL=970.f3a82073.js.map