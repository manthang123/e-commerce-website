"use strict";(self["webpackChunkyogabhyas"]=self["webpackChunkyogabhyas"]||[]).push([[831],{4372:function(e,t,o){o.d(t,{Z:function(){return v}});var s=o(3396),r=o(7139);const a={class:"mt-5 cursor-pointer"},i={class:"w-40 bg-black bg-opacity-5"},l=["src"],d={class:"w-40 text-center text-sm mt-2 font-medium text-gray-600"},n={class:"w-40 text-center text-sm font-bold text-secondary-1"};function c(e,t,o,c,m,u){const b=(0,s.up)("router-link");return(0,s.wg)(),(0,s.j4)(b,{to:{path:"/book",query:{id:this.id,userID:this.userID}}},{default:(0,s.w5)((()=>[(0,s._)("div",a,[(0,s._)("div",i,[(0,s._)("img",{class:"h-60 object-contain border-none rounded-md w-full",src:o.url,alt:"",draggable:"false"},null,8,l)]),(0,s._)("div",d,(0,r.zw)(o.name),1),(0,s._)("div",n,"₹ "+(0,r.zw)(o.price),1)])])),_:1},8,["to"])}var m={props:["name","price","url","wish","theme","description","id","userID"],created(){}},u=o(89);const b=(0,u.Z)(m,[["render",c]]);var v=b},1348:function(e,t,o){o.d(t,{Z:function(){return m}});var s=o(3396);const r={class:"w-full"},a=(0,s._)("img",{class:"object-cover h-52 w-full",src:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",alt:""},null,-1),i=[a];function l(e,t,o,a,l,d){return(0,s.wg)(),(0,s.iD)("div",r,i)}var d={props:["bookName","bookPrice","bookImageURL","bookWish","bookTheme"],data(){return{items:[{src:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/bird.jpg"}]}}},n=o(89);const c=(0,n.Z)(d,[["render",l]]);var m=c},7269:function(e,t,o){o.d(t,{Z:function(){return p}});var s=o(3396),r=o(7139);const a={class:"w-60 bg-black bg-opacity-5 border-"},i=["src"],l={class:"border-2 border-opacity-5 border-black w-full"},d={class:"flex flex-col items-start ml-10"},n={class:"mt-7 font-bold text-gray-700 text-lg cursor-pointer hover:text-secondary-1"},c={class:"text-gray-500"},m={class:"text-gray-500"},u={class:"text-gray-500"},b={class:"flex flex-row justify-between w-full mt-14 pr-10 item-center"},v={class:"font-bold text-gray-700 text-xl"},h={class:"flex items-center"};function k(e,t,o,k,g,x){const f=(0,s.up)("router-link");return(0,s.wg)(),(0,s.j4)(f,{to:"/book"},{default:(0,s.w5)((()=>[(0,s._)("div",{class:"flex flex-row mt-7 border-",onClick:t[2]||(t[2]=(...t)=>e.handler&&e.handler(...t))},[(0,s._)("div",a,[(0,s._)("img",{class:"h-60 object-contain border-none w-full",src:o.bookImageURL,alt:""},null,8,i)]),(0,s._)("div",l,[(0,s._)("div",d,[(0,s._)("div",n,(0,r.zw)(o.bookName),1),(0,s._)("div",c,(0,r.zw)(o.bookDate),1),(0,s._)("div",m,(0,r.zw)(o.bookLanguage),1),(0,s._)("div",u,(0,r.zw)(o.bookCover),1),(0,s._)("div",b,[(0,s._)("div",v,"₹ "+(0,r.zw)(o.bookPrice),1),(0,s._)("div",h,[(0,s._)("div",{class:"py-2 w-32 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium",onClick:t[0]||(t[0]=(...e)=>x.addToWishlist&&x.addToWishlist(...e))}," Add to Wishlist "),(0,s._)("div",{class:"ml-5 py-2 w-32 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium",onClick:t[1]||(t[1]=(...e)=>x.addToCart&&x.addToCart(...e))}," Add to Cart ")])])])])])])),_:1})}var g={props:["bookName","bookDate","bookLanguage","bookCover","bookPrice","bookImageURL"],methods:{addToCart(){alert("Add to cart called")},addToWishlist(){console.log("Add to wishlist")}}},x=o(89);const f=(0,x.Z)(g,[["render",k]]);var p=f},8551:function(e,t,o){o.d(t,{Z:function(){return C}});var s=o(3396),r=o(7139);const a={class:"bg-primary-1 w-full mt-2 mb-4"},i={class:"flex items-center justify-between pr-4"},l={class:"w-80"},d={class:"pl-4 pt-3 flex"},n=["src"],c={class:"ml-5 mt-1"},m={class:"font-medium text-lg"},u={class:"font-normal text-sm text-gray-600"},b={class:"font-normal text-sm text-gray-600"},v={class:"font-normal text-sm text-gray-600"},h={class:"text-gray-500 text-sm pb-2 ml-4 mt-2"},k={class:"w-15"},g={class:"w-64"},x={class:"text-sm"},f={class:"text-sm text-gray-500"},p={class:"text-sm text-gray-500"},w={class:"text-sm text-gray-500"},y={class:"text-sm text-gray-500"},_={class:"text-sm text-gray-500"},D={class:"text-sm text-gray-500"},z=(0,s._)("div",{class:"text-sm"},"Order Tracking ID:",-1),I={class:"text-sm text-gray-500"};function L(e,t,o,L,A,T){return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",i,[(0,s._)("div",l,[(0,s._)("div",d,[(0,s._)("div",null,[(0,s._)("img",{class:"h-36 object-contain border-none",src:o.bookImageURL,alt:""},null,8,n)]),(0,s._)("div",c,[(0,s._)("div",m,(0,r.zw)(o.bookName),1),(0,s._)("div",u,"Author: "+(0,r.zw)(o.bookAuthor),1),(0,s._)("div",b,"Genre: "+(0,r.zw)(o.bookGenre),1),(0,s._)("div",v,"Publication Date: "+(0,r.zw)(o.bookYear),1)])]),(0,s._)("div",h,"Order ID: "+(0,r.zw)(o.orderID),1)]),(0,s._)("div",k,"₹ "+(0,r.zw)(o.bookPrice),1),(0,s._)("div",g,[(0,s._)("div",x,"Delivery on "+(0,r.zw)(o.bookDelivery),1),(0,s._)("div",f,(0,r.zw)(o.addressline1),1),(0,s._)("div",p,(0,r.zw)(o.addressline2),1),(0,s._)("div",w,(0,r.zw)(o.landmark),1),(0,s._)("div",y,(0,r.zw)(o.city),1),(0,s._)("div",_,(0,r.zw)(o.state),1),(0,s._)("div",D,"Pincode: "+(0,r.zw)(o.pincode),1),z,(0,s._)("div",I,(0,r.zw)(o.orderTrackingID),1)])])])}var A={props:["orderID","bookName","bookPrice","bookImageURL","orderDate","shipTo","bookYear","bookGenre","bookAuthor","bookDelivery","orderTrackingID","addressline1","addressline2","city","landmark","state","pincode"]},T=o(89);const j=(0,T.Z)(A,[["render",L]]);var C=j},2491:function(e,t,o){o.d(t,{Z:function(){return j}});var s=o(3396),r=o(7139);const a={class:"w-240 py-3"},i={class:"bg-secondary-1 rounded-t-md py-4"},l={class:"px-8 flex justify-between"},d=(0,s._)("div",{class:"text-white font-medium text-sm"},"ORDER PLACED",-1),n={class:"text-white font-light text-sm"},c=(0,s._)("div",{class:"text-white font-medium text-sm"},"TOTAL",-1),m={class:"text-white font-light text-sm"},u=(0,s._)("div",{class:"text-white font-medium text-sm"},"Ship To",-1),b={class:"text-white font-light text-sm"},v=(0,s._)("div",{class:"text-white font-medium text-sm"},"Order ID",-1),h={class:"text-white font-light text-sm"},k={class:"bg-primary-1 rounded-b-md px-10 pt-2 pb-4"},g={class:"flex justify-between items-end"},x={class:"flex"},f=["src"],p={class:"ml-6 mt-4"},w={class:"font-medium text-lg"},y={class:"font-normal text-sm text-gray-600"},_={class:"font-normal text-sm text-gray-600"},D={class:"font-normal text-sm text-gray-600"},z=(0,s._)("div",{class:"mb-5"},[(0,s._)("div",{class:"cursor-pointer hover:bg-secondary-1 hover:text-white bg-white px-5 py-1 rounded-md text-secondary-1 font-medium"},"Buy Again")],-1);function I(e,t,o,I,L,A){return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",i,[(0,s._)("div",l,[(0,s._)("div",null,[d,(0,s._)("div",n,(0,r.zw)(o.orderDate),1)]),(0,s._)("div",null,[c,(0,s._)("div",m,"₹ "+(0,r.zw)(o.bookPrice),1)]),(0,s._)("div",null,[u,(0,s._)("div",b,(0,r.zw)(o.shipTo),1)]),(0,s._)("div",null,[v,(0,s._)("div",h,(0,r.zw)(o.orderID),1)])])]),(0,s._)("div",k,[(0,s._)("div",null,"Delivered "+(0,r.zw)(o.bookDelivered),1),(0,s._)("div",g,[(0,s._)("div",x,[(0,s._)("div",null,[(0,s._)("img",{class:"h-52 object-contain border-none w-full",src:o.bookImageURL,alt:""},null,8,f)]),(0,s._)("div",p,[(0,s._)("div",w,(0,r.zw)(o.bookName),1),(0,s._)("div",y,"Author: "+(0,r.zw)(o.bookAuthor),1),(0,s._)("div",_,"Genre: "+(0,r.zw)(o.bookGenre),1),(0,s._)("div",D,"Publication Date: "+(0,r.zw)(o.bookYear),1)])]),z])])])}var L={props:["orderID","bookName","bookPrice","bookImageURL","orderDate","shipTo","bookYear","bookGenre","bookAuthor","bookDelivered"]},A=o(89);const T=(0,A.Z)(L,[["render",I]]);var j=T},9831:function(e,t,o){o.r(t),o.d(t,{default:function(){return Y}});var s=o(3396);const r={class:"relative"},a={class:""},i={class:"mt-24 mx-40"},l=(0,s._)("div",{class:"text-3xl font-semibold text-gray-700 mb-5"},"Your WishList",-1);function d(e,t,o,d,n,c){const m=(0,s.up)("Header"),u=(0,s.up)("WishBooks");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",a,[(0,s.Wm)(m,{userID:n.id,class:"fixed z-10 w-full top-0"},null,8,["userID"])]),(0,s._)("div",i,[l,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.books,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e.id},[(0,s._)("div",null,[(0,s.Wm)(u,{bookName:e.name,bookPrice:e.price,bookImageURL:e.url,bookYear:e.publicationYear,bookGenre:e.bookGenre,bookAuthor:e.author},null,8,["bookName","bookPrice","bookImageURL","bookYear","bookGenre","bookAuthor"])])])))),128))])])}var n=o(279),c=o(2773),m=o(1348),u=o(7269),b=o(4372),v=o(2491),h=o(8551),k=o(7139);const g={class:"mb-5"},x={class:"flex justify-between"},f={class:"pl-4 pt-3 flex"},p=["src"],w={class:"ml-5 mt-1"},y={class:"font-medium text-lg"},_={class:"font-normal text-sm text-gray-600"},D={class:"font-normal text-sm text-gray-600"},z={class:"font-normal text-sm text-gray-600"},I={class:"mr-20 flex flex-col justify-between items-end"},L={class:"text-4xl font-bold text-gray-700 mr-5 mt-5"},A={class:"flex gap-5"},T=(0,s._)("div",{class:"bg-gray-300 w-full h-px ml-4"},null,-1);function j(e,t,o,r,a,i){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",g,[(0,s._)("div",x,[(0,s.Wm)(l,{to:"/book"},{default:(0,s.w5)((()=>[(0,s._)("div",f,[(0,s._)("img",{class:"h-52",src:o.bookImageURL,alt:""},null,8,p),(0,s._)("div",w,[(0,s._)("div",y,(0,k.zw)(o.bookName),1),(0,s._)("div",_,"Author: "+(0,k.zw)(o.bookAuthor),1),(0,s._)("div",D,"Genre: "+(0,k.zw)(o.bookGenre),1),(0,s._)("div",z,"Publication Date: "+(0,k.zw)(o.bookYear),1)])])])),_:1}),(0,s._)("div",I,[(0,s._)("div",L," ₹ "+(0,k.zw)(o.bookPrice),1),(0,s._)("div",A,[(0,s._)("div",{class:"bg-secondary-1 px-3 py-1 text-white hover:bg-primary-1 hover:text-secondary-1 cursor-pointer",onClick:t[0]||(t[0]=(...e)=>i.addToCart&&i.addToCart(...e))},"Add to Cart"),(0,s._)("div",{class:"bg-secondary-1 px-3 py-1 text-white hover:bg-primary-1 hover:text-secondary-1 cursor-pointer",onClick:t[1]||(t[1]=(...e)=>i.removeFromWishList&&i.removeFromWishList(...e))},"Remove from Wishlist")])])])]),T],64)}var C=o(6780),Z={props:["bookName","bookPrice","bookImageURL","bookYear","bookGenre","bookAuthor","id","userID"],methods:{addToCart(){const e=C.Z.firestore();console.log("Inside addToCart() method");try{e.collection("Users").doc(this.userID).get().then((t=>{var o=t.data().addrLine1,s=t.data().addrLine2,r=t.data().mobile,a=t.data().city,i=t.data().landmark,l=t.data().name,d=t.data().state,n=t.data().zipcode,c=t.data().cart,m=t.data().wishList,u=t.data().orders;c.push(this.id);var b=c.filter((function(e){return""!=e}));let v=b.filter(((e,t)=>b.indexOf(e)===t));c=null,c=v,e.collection("Users").doc(this.userID).set({addrLine1:o,addrLine2:s,cart:v,city:a,landmark:i,mobile:r,name:l,orders:u,state:d,wishList:m,zipcode:n}).then((e=>{})),console.log("Data written successfully")})),alert("Item added to cart successfully")}catch(t){console.log(t)}},removeFromWishList(){console.log(this.userID);const e=C.Z.firestore();console.log("Inside removeFromWishList() method");try{e.collection("Users").doc(this.userID).get().then((t=>{console.log(t.data());var o=t.data().addrLine1,s=t.data().addrLine2,r=t.data().mobile,a=t.data().city,i=t.data().landmark,l=t.data().name,d=t.data().state,n=t.data().zipcode,c=(t.data().cart,t.data().wishList),m=t.data().orders;console.log(c),c.pop(this.id),console.log(c),e.collection("Users").doc(this.userID).set({addrLine1:o,addrLine2:s,cart:uniqueCart,city:a,landmark:i,mobile:r,name:l,orders:m,state:d,wishList:c,zipcode:n}).then((e=>{})),console.log("Data updated successfully")})),alert("Item removed from wishlist successfully")}catch(t){console.log(t)}}}},P=o(89);const R=(0,P.Z)(Z,[["render",j]]);var U=R,W={data(){return{wishlistBooks:[{bookName:"Gitanjali",bookPrice:"1300",bookImageURL:"https://picsum.photos/200/300",bookYear:"1910",bookGenre:"Poem",bookAuthor:"Rabindranath Tagore"},{bookName:"Ikigai",bookPrice:"520",bookImageURL:"https://picsum.photos/200/300",bookYear:"2001",bookGenre:"Self-Help",bookAuthor:"Priyanshu Lapkale"},{bookName:"A Thousand Splendid Suns",bookPrice:"320",bookImageURL:"https://picsum.photos/200/300",bookYear:"1920",bookGenre:"Thrill",bookAuthor:"Khaled Houssein"}],id:this.$route.query.id,books:[]}},created(){const e=C.Z.firestore();console.log("Inside created() method of Wishlist");try{e.collection("Users").doc(this.id).get().then((t=>{console.log(t.data());var o=t.data().wishList;console.log(o);for(let s=0;s<o.length;s++)e.collection("books").doc(o[s]).get().then((e=>{this.books.push(e.data())}));console.log("Wishlist books array"),console.log(this.books)}))}catch(t){console.log(t)}},components:{Header:n.Z,Filter:c.Z,LatestBooks:m.Z,ResultBook:u.Z,BookCoverCat:b.Z,OrderHistory:v.Z,OrderDetails:h.Z,WishBooks:U}};const G=(0,P.Z)(W,[["render",d]]);var Y=G}}]);
//# sourceMappingURL=831.d30846b5.js.map