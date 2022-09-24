"use strict";(self["webpackChunkyogabhyas"]=self["webpackChunkyogabhyas"]||[]).push([[833],{6833:function(e,r,o){o.r(r),o.d(r,{default:function(){return Z}});var a=o(3396);const i={class:"relative"},s={class:""},t={class:"absoulute"},d={class:""},n={class:"fixed w-full"},l={class:"mt-20 absolute top-6 left-96"},c={class:"w-240"},u=(0,a.uE)('<div class="text-3xl font-bold text-gray-700">ORDER DETAILS</div><div class="flex mt-2 justify-between px-4 pb-4"><div class="w-80 flex"><div class="mr-8"><div class="bg-primary-1 px-2 rounded-sm w-20 text-center">Product</div></div><div><div class="bg-primary-1 px-2 rounded-sm w-20 text-center">Details</div></div></div><div class="w-15"><div class="bg-primary-1 px-2 rounded-sm w-20 text-center -ml-5">Price</div></div><div class="w-64"><div class="bg-primary-1 px-2 rounded-sm w-20 text-center">Delivery</div></div></div>',2);function b(e,r,o,b,p,h){const k=(0,a.up)("Header"),m=(0,a.up)("Sidebar"),v=(0,a.up)("OrderDetails",!0);return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",s,[(0,a.Wm)(k,{userID:e.userID,class:"fixed z-10 w-full top-0"},null,8,["userID"])]),(0,a._)("div",t,[(0,a._)("div",d,[(0,a._)("div",n,[(0,a.Wm)(m,{id:"id"})])])]),(0,a._)("div",l,[(0,a._)("div",c,[u,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(p.orderedDetails,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id},[(0,a.Wm)(v,{orderID:e.orderID,bookName:e.bookName,bookPrice:e.bookPrice,bookImageURL:e.bookImageURL,orderDate:e.orderDate,shipTo:e.shipTo,bookYear:e.bookYear,bookGenre:e.bookGenre,bookAuthor:e.bookAuthor,bookDelivery:e.bookDelivery,addressline1:e.addressline1,addressline2:e.addressline2,city:e.city,landmark:e.landmark,state:e.state,pincode:e.pincode},null,8,["orderID","bookName","bookPrice","bookImageURL","orderDate","shipTo","bookYear","bookGenre","bookAuthor","bookDelivery","addressline1","addressline2","city","landmark","state","pincode"])])))),128))])])])}var p=o(5925),h=o(3957),k=o(9211),m=o(355),v=o(4372),g=o(7139);const D=(0,a.Uk)("- "),A={key:0,class:"flex-column mt-20 w-80 h-130"},y={class:"rounded-br-lg rounded-tr-lg bg-secondary-1 h-72 pt-5"},f={class:"mx-24 mb-5"},w=["src"],x={class:"text-center font-bold text-white"},F={class:"text-center mb-10 font-medium text-white"},I={class:"bg-secondary-1"},T=(0,a._)("div",{class:"pt-1 font-medium text-center text-white mb-1"},"User Details",-1),P=(0,a._)("div",{class:"bg-secondary-1 rounded-tr-lg"},[(0,a._)("div",{class:"ml-16 w-80 h-10 bg-LGB rounded-lg bg-white"},[(0,a._)("div",{class:"text-left pl-12 pt-2 py-3 font-medium text-gray-700"},"Order Details")])],-1),_={class:"bg-secondary-1 rounded-tr-lg h-[285px]"},N=(0,a._)("div",{class:"text-center py-3 cursor-pointer font-medium text-white"},"Order History",-1);function H(e,r,o,i,s,t){const d=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[D,s.load?((0,a.wg)(),(0,a.iD)("div",A,[(0,a._)("div",y,[(0,a._)("div",f,[(0,a._)("img",{draggable:"false",class:"rounded-full h-28 w-28",src:s.user[0].pfp,alt:""},null,8,w)]),(0,a._)("div",x,(0,g.zw)(s.user[0].name),1),(0,a._)("div",F,(0,g.zw)(s.user[0].email),1),(0,a._)("div",I,[(0,a.Wm)(d,{to:{path:"/User",query:{id:this.id}}},{default:(0,a.w5)((()=>[T])),_:1},8,["to"])])]),P,(0,a._)("div",_,[(0,a.Wm)(d,{to:{path:"/orderHistory",query:{id:this.id}}},{default:(0,a.w5)((()=>[N])),_:1},8,["to"])])])):(0,a.kq)("",!0)],64)}var L=o(6780),R={data(){return{user:[],load:!1,id:this.$route.query.id}},async created(){const e=L.Z.firestore();console.log("Inside created() method of userprofile-> sidebar");try{await e.collection("Users").doc(this.id).get().then((e=>{this.user.push(e.data()),this.load=!0}))}catch(r){console.log(r)}console.log(this.user)}},C=o(89);const j=(0,C.Z)(R,[["render",H]]);var U=j,S=o(3411),G=o(2894),W={data(){return{orderedDetails:[{orderID:"46FA4F65A4F6A",orderTrackingID:"6HDF45HD4655F2A",bookName:"Gitanjali",bookPrice:"1300",bookImageURL:"https://picsum.photos/200/300",orderDate:"2 April 2022",shipTo:"Ajay sharma",bookYear:"1910",bookGenre:"Poem",bookAuthor:"Rabindranath Tagore",bookDelivery:"8 April 2022",addressline1:"56, Kshitija Apartments",addressline2:"B4 Wings, Civil Lines",city:"Nagpur",landmark:"Near Centeer Point",state:"Maharashtra",pincode:"424075"},{orderID:"46FA4F65A4F6A",orderTrackingID:"6HDF45HD4655F2A",bookName:"A Thousand Splendid Suns",bookPrice:"1300",bookImageURL:"https://picsum.photos/200/300",orderDate:"2 April 2022",shipTo:"Ajay sharma",bookYear:"1910",bookGenre:"Poem",bookAuthor:"Rabindranath Tagore",bookDelivery:"8 April 2022",addressline1:"56, Kshitija Apartments",addressline2:"B4 Wings, Civil Lines",city:"Nagpur",landmark:"Near Centeer Point",state:"Maharashtra",pincode:"424075"},{orderID:"46FA4F65A4F6A",orderTrackingID:"6HDF45HD4655F2A",bookName:"A Thousand Splendid Suns",bookPrice:"1300",bookImageURL:"https://picsum.photos/200/300",orderDate:"2 April 2022",shipTo:"Ajay sharma",bookYear:"1910",bookGenre:"Poem",bookAuthor:"Rabindranath Tagore",bookDelivery:"8 April 2022",addressline1:"56, Kshitija Apartments",addressline2:"B4 Wings, Civil Lines",city:"Nagpur",landmark:"Near Centeer Point",state:"Maharashtra",pincode:"424075"},{orderID:"46FA4F65A4F6A",orderTrackingID:"6HDF45HD4655F2A",bookName:"A Thousand Splendid Suns",bookPrice:"1300",bookImageURL:"https://picsum.photos/200/300",orderDate:"2 April 2022",shipTo:"Ajay sharma",bookYear:"1910",bookGenre:"Poem",bookAuthor:"Rabindranath Tagore",bookDelivery:"8 April 2022",addressline1:"56, Kshitija Apartments",addressline2:"B4 Wings, Civil Lines",city:"Nagpur",landmark:"Near Centeer Point",state:"Maharashtra",pincode:"424075"},{orderID:"46FA4F65A4F6A",orderTrackingID:"6HDF45HD4655F2A",bookName:"A Thousand Splendid Suns",bookPrice:"1300",bookImageURL:"https://picsum.photos/200/300",orderDate:"2 April 2022",shipTo:"Ajay sharma",bookYear:"1910",bookGenre:"Poem",bookAuthor:"Rabindranath Tagore",bookDelivery:"8 April 2022",addressline1:"56, Kshitija Apartments",addressline2:"B4 Wings, Civil Lines",city:"Nagpur",landmark:"Near Centeer Point",state:"Maharashtra",pincode:"424075"}],id:this.$route.query.id}},components:{Header:p.Z,Filter:h.Z,LatestBooks:k.Z,ResultBook:m.Z,BookCoverCat:v.Z,Sidebar:U,OrderHistory:S.Z,OrderDetails:G.Z}};const Y=(0,C.Z)(W,[["render",b]]);var Z=Y}}]);
//# sourceMappingURL=833.7b4f53e2.js.map