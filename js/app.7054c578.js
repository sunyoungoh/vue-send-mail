(function(e){function t(t){for(var s,o,l=t[0],n=t[1],d=t[2],u=0,m=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);c&&c(t);while(m.length)m.shift()();return i.push.apply(i,d||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],s=!0,l=1;l<r.length;l++){var n=r[l];0!==a[n]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var s={},a={app:0},i=[];function o(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=s,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-send-mail/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var c=n;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0469":function(e,t,r){},4639:function(e,t,r){"use strict";r("6b67")},4904:function(e,t,r){"use strict";r("0469")},"56d7":function(e,t,r){"use strict";r.r(t);var s=r("2b0e"),a=r("7496"),i=r("62ad"),o=r("553a"),l=r("f6c4"),n=function(){var e=this,t=e._self._c;return t(a["a"],[t(l["a"],[t("router-view")],1),t(o["a"],{attrs:{padless:""}},[t(i["a"],{staticClass:"text-center text-caption grey--text",attrs:{cols:"12"}},[e._v(" © 2022 SunYoungOh. All right reserved. ")])],1)],1)},d=[],c={name:"App"},u=c,m=(r("4639"),r("2877")),p=Object(m["a"])(u,n,d,!1,null,null,null),h=p.exports,v=r("8c4f"),f=r("71a3"),g=r("c671"),b=r("fe57"),_=r("aac8"),O=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[e._m(0),t("div",{staticClass:"tabs-container"},[t(b["a"],{attrs:{ripple:!1,"background-color":"transparent",color:"green",height:"50",grow:"","show-arrows":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.items,(function(r,s){return t(f["a"],{key:s,staticClass:"px-2",attrs:{"active-class":"font-weight-bold",ripple:!1},on:{click:function(t){return e.$store.commit("setActiveTab",r.value)}}},[e._v(" "+e._s(r.text)+" ")])})),1),t(_["a"],{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[t(g["a"],[t("NewOrderList")],1),t(g["a"],[t("OrderMailForm")],1),t(g["a"],[t("OrderMailForm")],1),t(g["a"],[t("SelectFileMailForm")],1)],1)],1)])},y=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"logo py-4 ma-auto text-center green"},[t("h3",{staticClass:"logo-text white--text"},[e._v("Smart Store")])])}],I=r("8336"),x=r("4bd4"),w=r("a844"),k=function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-container"},[t(x["a"],{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(I["a"],{staticClass:"mt-1 mb-2",attrs:{color:"secondary",block:"",large:"",elevation:"0"},on:{click:function(t){e.dialog=!0}}},[e._v(" 상품 추가하기 ")]),t("p",{staticClass:"error--text text-center text-caption"},[e._v(e._s(e.errorMsg))]),t("SelectFileDialog",{attrs:{dialog:e.dialog},on:{"update:seletedItem":e.addSelectedItem,"update:dialog":t=>e.dialog=t}}),e.selectedItem?[t("OrderChip",{attrs:{"seleted-item":e.selectedItem}})]:e._e(),t("EmailInputField",{attrs:{valid:e.valid},on:{click:e.resetSendResult},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),t(w["a"],{attrs:{name:"comment",label:"코멘트","auto-grow":"",rows:"1",clearable:""},model:{value:e.comment,callback:function(t){e.comment=t},expression:"comment"}}),t("SendBtns",{attrs:{email:e.email,"order-detail":e.selectedItem,comment:e.comment,valid:e.valid},on:{"update:sendResult":t=>e.sendResult=t,"update:errorMsg":e.setErrorMsg,"validate-form":e.validateForm,"reset-form":e.resetForm}})],2),""!==e.sendResult?t("ResultAlert",{attrs:{result:e.sendResult}}):e._e()],1)},M=[];r("14d9");const S=[{itemId:6175018692,itemName:"2023 심플 플래너",itemOptionLabel:"컬러",itemOptions:[{label:"컬러",value:["라이트","인디핑크","스카이블루","다크"]}]},{itemId:6173761992,itemName:"2023 모던 플래너",itemOptionLabel:"컬러",itemOptions:[{label:"컬러",value:["화이트","다크"]}]},{itemId:7551229680,itemName:"2023 타임라인 플래너",itemOptions:[{label:"위클리타입",value:["스케줄","타임테이블"]}]},{itemId:6230373650,itemName:"2023 먼슬리&데일리 플래너",itemOptions:[{label:"컬러",value:["화이트","다크"]},{label:"시작요일",value:["일요일시작","월요일시작"]},{label:"데일리타입",value:["스케줄","타임테이블"]}]},{itemId:6183672844,itemName:"세로형 31DAYS 플래너",itemOptions:[{label:"컬러",value:["화이트","다크","화이트+다크"]},{label:"데일리타입",value:["스케줄","타임테이블"]}]},{itemId:7988182711,itemName:"가로형 31DAYS 플래너",itemOptions:[{label:"컬러",value:["화이트","다크","화이트+다크"]},{label:"데일리타입",value:["스케줄","타임테이블"]}]},{itemId:6339448390,itemName:"3년 5년 다이어리",itemOptions:[{label:"연도",value:["3년","5년"]},{label:"컬러",value:["화이트","다크"]}]},{itemId:7674508068,itemName:"레시피북",itemOptions:[{label:"컬러",value:["크림","올리브","토스트","차콜"]}]},{itemId:6668700804,itemName:"세로형 인덱스 노트",itemOptions:[{label:"컬러",value:["화이트","다크","화이트+다크"]}]},{itemId:6711856094,itemName:"가로형 인덱스 노트",itemOptions:[{label:"컬러",value:["화이트","다크","화이트+다크"]}]},{itemId:6907619722,itemName:"독서노트",itemOptions:[{label:"컬러",value:["화이트","다크"]}]},{itemId:7118280906,itemName:"드라마노트",itemOptions:[{label:"컬러",value:["화이트","다크"]}]},{itemId:6390846551,itemName:"먼슬리 트래커북",itemOptions:[{label:"컬러",value:["차콜","캔디핑크","스카이블루"]}]},{itemId:6293308097,itemName:"180 베이직 노트패드",itemOption:[""]},{itemId:6498685859,itemName:"180 체커보드 노트패드",itemOption:[""]},{itemId:7917862453,itemName:"교환일기",itemOptions:[{label:"구성",value:["교환일기","교환일기+네컷프레임스티커"]}]},{itemId:7923245834,itemName:"네컷 프레임 스티커",itemOption:[""]}];var R=r("8654"),C=function(){var e=this,t=e._self._c;return t(R["a"],{ref:"email",attrs:{value:e.value,rules:e.emailRules,label:"이메일",hint:"아이디만 입력시 자동으로 @naver.com 가 추가됩니다.",required:"",loading:e.loading},on:{click:e.reset,input:function(t){return e.$emit("input",t)},blur:e.addNaverDomain}})},D=[],$={name:"EmailInputField",props:{value:{type:String},loading:{type:Boolean}},data:()=>({emailRules:[e=>!!e||"이메일을 입력해주세요."]}),methods:{reset(){this.$refs.email.resetValidation(),this.$emit("resetSendResult")},addNaverDomain(e){let t=e.target.value;t&&-1==t.indexOf("@")&&(t+="@naver.com",this.$refs.email.resetValidation()),this.$emit("input",t)}}},F=$,N=Object(m["a"])(F,C,D,!1,null,null,null),j=N.exports,E=r("b0af"),A=r("99d9"),B=r("169a"),T=r("b974"),L=r("2fa4"),P=function(){var e=this,t=e._self._c;return t(x["a"],{ref:"dialogForm",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(B["a"],{attrs:{persistent:"","max-width":"400px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(E["a"],[t(A["c"],{staticClass:"pb-5"},[e._v("상품 추가하기")]),t(A["b"],[t(T["a"],{ref:"selectItem",attrs:{items:e.items,"item-text":"itemName","item-value":"itemId",rules:[e=>!!e||"상품을 선택해주세요."],label:"상품명",required:""},on:{change:e.resetSelectOption},model:{value:e.selectItem,callback:function(t){e.selectItem=t},expression:"selectItem"}}),e._l(e.options.itemOptions,(function(r,s){return t(T["a"],{key:s,ref:"itemOptions",refInFor:!0,attrs:{items:r.value,rules:[e=>!!e||"옵션을 선택해주세요."],label:r.label,required:""},model:{value:e.selectOption[s],callback:function(t){e.$set(e.selectOption,s,t)},expression:"selectOption[i]"}})}))],2),t(A["a"],[t(L["a"]),t(I["a"],{attrs:{color:"grey darken-1",text:""},on:{click:e.closeDialog}},[e._v(" 닫기 ")]),t(I["a"],{attrs:{color:"green darken-1",text:""},on:{click:e.addItem}},[e._v(" 추가하기 ")])],1)],1)],1)],1)},V=[],q={props:{dialog:{type:Boolean,default:!1}},data:()=>({items:S,selectItem:"",selectOption:[],valid:!0}),computed:{options(){const e=this.selectItem?this.items.filter(e=>e.itemId==this.selectItem)[0]:[{itemOption:"",itemOptionLabel:"상품옵션"}];return e},optionValid(){return this.options.itemOptions.length==this.selectOption.length}},methods:{resetSelectBox(){this.selectItem="",this.selectOption=[],this.$refs.selectItem.resetValidation()},closeDialog(){this.resetSelectBox(),this.$emit("update:dialog",!1)},addItem(){this.$refs.dialogForm.validate();const e=void 0!==this.options.itemOptions?!!this.selectItem&&!!this.optionValid:!!this.selectItem;e&&(this.$emit("update:seletedItem",{itemId:this.selectItem,itemOption:this.selectOption.join(",")}),this.resetSelectBox(),this.$emit("update:dialog",!1))},resetSelectOption(){if(this.$refs.itemOptions)for(let e=0;e<this.$refs.itemOptions.length;e++)this.$refs.itemOptions[e].reset();this.selectOption=[]}}},z=q,Y=Object(m["a"])(z,P,V,!1,null,null,null),J=Y.exports,H=r("8212"),U=r("cc20"),Z=r("132d"),G=r("3a2f"),K=function(){var e=this,t=e._self._c;return t("div",["none"==e.$store.state.activeTab?e._l(e.seletedItem,(function(r,s){return t(U["a"],{key:s,staticClass:"my-2 mr-2 px-2",attrs:{color:"secondary",label:"",outlined:"",close:""},on:{"click:close":function(t){return e.removeItem(s)}}},[t(G["a"],{attrs:{bottom:"",color:"success"},scopedSlots:e._u([{key:"activator",fn:function({on:s,attrs:a}){return[t("span",e._g(e._b({},"span",a,!1),s),[e._v(" "+e._s(e._f("itemName")(r.itemId))+" "+e._s(e._f("roundBraket")(r.itemOption))+" ")])]}}],null,!0)},[t("span",[e._v("클릭하면 주문서 페이지로 이동합니다.")])])],1)})):[t(U["a"],{staticClass:"my-2 mr-2 px-2",attrs:{color:"secondary",label:"",outlined:""},on:{click:function(t){return e.$emit("open-detail",e.order.productOrderId)}}},[t(H["a"],{staticClass:"mr-0",attrs:{left:""}},[t(Z["a"],{attrs:{small:""}},[e._v("mdi-link-variant")])],1),t(G["a"],{attrs:{bottom:"",color:"success"},scopedSlots:e._u([{key:"activator",fn:function({on:r,attrs:s}){return[t("span",e._g(e._b({},"span",s,!1),r),[e._v(" "+e._s(e._f("itemName")(e.order.itemId))+" "+e._s(e._f("roundBraket")(e.order.itemOption))+" ")])]}}])},[t("span",[e._v("클릭하면 주문서 페이지로 이동합니다.")])])],1)]],2)},Q=[],W={props:{order:{type:Object},seletedItem:{type:Array}},data(){return{chip:!0}},methods:{removeItem(e){this.seletedItem.splice(e,1),this.$emit("update:seletedItem")}},filters:{roundBraket(e){return e?`(${e})`:""}}},X=W,ee=Object(m["a"])(X,K,Q,!1,null,null,null),te=ee.exports,re=function(){var e=this,t=e._self._c;return t("div",{staticClass:"mt-6 d-flex justify-space-between"},[t(I["a"],{attrs:{disabled:!e.valid||e.loading,loading:e.loading,width:"250",color:"green white--text",elevation:"0","x-large":""},on:{click:e.sendMail},scopedSlots:e._u([{key:"loader",fn:function(){return[t("span",[e._v(e._s(e.loadingText))])]},proxy:!0}])},[e._v(" 메일 보내기 ")]),t(I["a"],{attrs:{color:"grey",width:"110","x-large":"",outlined:""},on:{click:e.resetForm}},[e._v(" 모두 지우기 ")])],1)},se=[],ae=(r("5b81"),{props:{email:{type:String,default:""},orderId:{type:String,default:""},orderDetail:{type:[Object,Array],require:!0},comment:{type:String,default:""},valid:{type:Boolean,default:!0}},data(){return{loading:!1,loadingText:""}},computed:{mailData(){return{store:"영로그",items:this.orderDetail,toEmail:this.email,comment:this.comment.replaceAll("\n","<br/>")}}},methods:{async sendMail(){if(this.$emit("update:sendResult",""),this.$emit("validate-form"),this.orderDetail[0]||this.$emit("update:errorMsg"),this.email&&this.orderDetail[0]){this.loading=!0,this.loadingText="메일 발송 중...";const e=await this.$store.dispatch("sendMail",this.mailData);if(this.$emit("update:sendResult",e),this.orderId&&"success"==e){const e=await this.dispatchOrder();this.$emit("update:dispatchResult",e)}this.loading=!1}},async dispatchOrder(){this.loadingText="송장 등록 중...";let e="";return e=await this.$store.dispatch("dispatchOrder",this.orderDetail),e},resetForm(){this.$emit("reset-form")}}}),ie=ae,oe=Object(m["a"])(ie,re,se,!1,null,"e4a37c24",null),le=oe.exports,ne=r("0798"),de=function(){var e=this,t=e._self._c;return t(ne["a"],{staticClass:"my-4",attrs:{type:e.result,text:""}},["success"==e.result?t("span",[e._t("success",(function(){return[e._v(" 메일을 "),t("strong",[e._v("성공적")]),e._v("으로 보냈습니다. ")]}))],2):t("span",[e._t("error",(function(){return[e._v(" 메일 전송을 "),t("strong",[e._v("실패")]),e._v("하였습니다. ")]}))],2)])},ce=[],ue={props:{result:{type:String,default:""}}},me=ue,pe=Object(m["a"])(me,de,ce,!1,null,null,null),he=pe.exports,ve={name:"MailForm",components:{SelectFileDialog:J,EmailInputField:j,OrderChip:te,SendBtns:le,ResultAlert:he},data:()=>({email:"",selectedItem:[],comment:"",sendResult:"",errorMsg:"",items:S,valid:!0,dialog:!1}),methods:{setErrorMsg(){this.errorMsg="상품을 추가해주세요"},resetErrorMsg(){this.errorMsg=""},addSelectedItem(e){this.selectedItem.push(e),this.resetErrorMsg()},validateForm(){this.$refs.form.validate()},resetSendResult(){this.sendResult=""},resetForm(){this.resetErrorMsg(),this.resetSendResult(),this.selectedItem=[],this.email="",this.comment="",this.$refs.form.reset()}}},fe=ve,ge=Object(m["a"])(fe,k,M,!1,null,"f7dfa1f0",null),be=ge.exports,_e=function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-container"},[t(x["a"],{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t("div",{staticClass:"order-id-wrap"},[t(R["a"],{ref:"orderId",attrs:{label:e.label,rules:[e=>!!e||this.label+"를 조회해주세요."],"error-messages":e.errorMsg,required:""},on:{click:e.resetErrorMsg},model:{value:e.orderId,callback:function(t){e.orderId=t},expression:"orderId"}}),t(I["a"],{staticClass:"ml-4 mb-2",attrs:{width:"80",disabled:e.loading,loading:e.loading,color:"secondary white--text",elevation:"0"},on:{click:e.getOrderInfo},scopedSlots:e._u([{key:"loader",fn:function(){return[t("span",[e._v("조회중...")])]},proxy:!0}])},[e._v("조회하기 ")])],1),e.orderDetail?e._l(e.orderDetail,(function(r,s){return t("OrderChip",{key:s,attrs:{order:r.items},nativeOn:{click:function(t){return e.openOrderDetail(r.items.productOrderId)}}})})):e._e(),e.shippingMemo?t(ne["a"],{staticClass:"text-subtitle-2 mb-6",attrs:{border:"left","colored-border":"",color:"secondary",elevation:"2"}},[e._v(" ✍🏻 "+e._s(e.shippingMemo)+" ")]):e._e(),t("EmailInputField",{on:{click:e.resetResults},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),t(w["a"],{attrs:{name:"comment",label:"코멘트","auto-grow":"",rows:"1",clearable:""},model:{value:e.comment,callback:function(t){e.comment=t},expression:"comment"}}),t("SendBtns",{attrs:{email:e.email,"order-id":e.orderId,"order-detail":e.orderDetail,comment:e.comment,valid:e.valid},on:{"update:sendResult":t=>e.sendResult=t,"update:dispatchResult":t=>e.dispatchResult=t,"update:errorMsg":e.setErrorMsg,"validate-form":e.validateForm,"reset-form":e.resetForm}})],2),""!==e.sendResult?t("ResultAlert",{attrs:{result:e.sendResult}}):e._e(),""!==e.dispatchResult?t("ResultAlert",{attrs:{result:e.dispatchResult},scopedSlots:e._u([{key:"success",fn:function(){return[e._v(" 송장을 "),t("strong",[e._v("성공적")]),e._v("으로 등록했습니다. ")]},proxy:!0},{key:"error",fn:function(){return[e._v(" 송장 등록을 "),t("strong",[e._v("실패")]),e._v("하였습니다. ")]},proxy:!0}],null,!1,823311819)}):e._e()],1)},Oe=[];const ye=e=>{window.open(`https://sell.smartstore.naver.com/o/v3/manage/order/popup/${e}/productOrderDetail`,"_blank")},Ie=e=>{const t=/\S+@+\S+\.+[a-zA-Z]{2,3}/,r=e.match(t)[0];return r};var xe={name:"OrderMailForm",components:{EmailInputField:j,OrderChip:te,SendBtns:le,ResultAlert:he},data:()=>({email:"",orderId:"",orderDetail:[],comment:"",sendResult:"",dispatchResult:"",valid:!0,loading:!1,errorMsg:"",shippingMemo:""}),computed:{label(){return"single"==this.activeTab?"상품주문번호":"주문번호"}},methods:{openOrderDetail(e){ye(e)},setErrorMsg(){this.errorMsg=this.label+"를 조회해주세요."},resetErrorMsg(){this.$refs.orderId.resetValidation(),this.errorMsg=""},async getOrderInfo(){if(this.resetResults(),this.orderId){this.loading=!0;try{"single"==this.$store.state.activeTab?this.orderDetail=await this.$store.dispatch("getOrderDetail",this.orderId):this.orderDetail=await this.$store.dispatch("getOrders",this.orderId),this.orderDetail[0].shippingMemo&&(this.shippingMemo=this.orderDetail[0].shippingMemo,this.email=Ie(this.shippingMemo)),this.resetErrorMsg()}catch(e){400==e.response.status&&(this.errorMsg=e.response.data,this.orderDetail=[])}finally{this.loading=!1}}else this.setErrorMsg()},validateForm(){this.$refs.form.validate()},resetResults(){this.sendResult="",this.dispatchResult=""},resetForm(){this.resetErrorMsg(),this.resetResults(),this.orderId="",this.orderDetail=[],this.email="",this.comment="",this.$refs.form.reset()}}},we=xe,ke=Object(m["a"])(we,_e,Oe,!1,null,"7fd19bf8",null),Me=ke.exports,Se=r("a523"),Re=r("490a"),Ce=function(){var e=this,t=e._self._c;return t(Se["a"],{staticClass:"pt-8 px-4"},[e.loading?t("div",{staticClass:"text-center mt-16 pt-10"},[t(Re["a"],{attrs:{size:50,width:3,color:"green",indeterminate:""}})],1):[e.orderList.length?t("div",{staticClass:"pb-4 order-list"},e._l(e.orderList,(function(r,s){return t("OrderItem",{key:s,attrs:{order:r},on:{"remove-item":function(t){return e.removeItem(s)}}})})),1):t("div",[t("h3",{staticClass:"text-center mt-16 pt-10 grey--text text--darken-3"},[e._v(" 신규 주문이 없습니다. ")])])]],2)},De=[],$e=(r("13d5"),r("ce7e")),Fe=function(){var e=this,t=e._self._c;return t("div",{staticClass:"order-item"},[t("Transition",[t(E["a"],{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"mb-6 mx-auto",attrs:{"max-width":"500",elevation:"7",loading:e.loading}},[t(A["c"],{staticClass:"text-body-1 py-3 px-4 font-weight-bold"},[e._v(" 주문서 ")]),t($e["a"]),t("div",{staticClass:"pa-4 text-body-2"},[t("div",{staticClass:"order-info"},[t("p",[e._v(" 🔖 주문번호 : "+e._s(e.order.orderId)+" ")]),t("p",[e._v(" ⏰ 결제일시 : "+e._s(e._f("timeFormat")(e.order.paymentDate))+" ")]),t("p",[e._v(" 👩🏻‍💻 구매자 : "),t("span",{staticClass:"text-no-wrap yellow font-weight-medium"},[e._v(" "+e._s(e.order.ordererName)+" ("+e._s(e.order.ordererId)+") ")])]),e.order.shippingMemo?t("p",[e._v(" ✍🏻 배송메모 : "),t("span",{staticClass:"yellow font-weight-medium"},[e._v(" "+e._s(e.order.shippingMemo)+" ")])]):e._e()]),e._l(e.order.items,(function(r,s){return t("OrderChip",{key:s,attrs:{order:r},nativeOn:{click:function(t){return e.openOrderDetail(r.productOrderId)}}})})),t("EmailInputField",{staticClass:"mt-3",attrs:{loading:e.emailLoading},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),t(w["a"],{directives:[{name:"show",rawName:"v-show",value:e.toggle,expression:"toggle"}],attrs:{name:"comment",label:"코멘트","auto-grow":"",rows:"1",clearable:""},model:{value:e.comment,callback:function(t){e.comment=t},expression:"comment"}})],2),t(A["a"],{staticClass:"pb-4 px-4"},[t(L["a"]),t(I["a"],{attrs:{color:"green",width:"100",elevation:"0",text:""},on:{click:function(t){e.toggle=!e.toggle}}},[e.toggle?t("span",[e._v("코멘트 삭제 ")]):t("span",[e._v(" 코멘트 추가 ")])]),t(I["a"],{attrs:{color:"green",width:"100",elevation:"0",dark:""},on:{click:e.sendMail}},[e._v(" 메일 보내기 ")])],1)],1)],1),t("SnackBar",{attrs:{result:e.sendResult}}),t("SnackBar",{attrs:{result:e.dispatchResult},scopedSlots:e._u([{key:"success",fn:function(){return[e._v(" 송장을 "),t("strong",[e._v("성공적")]),e._v("으로 등록했습니다. ")]},proxy:!0},{key:"error",fn:function(){return[e._v(" 송장 등록을 "),t("strong",[e._v("실패")]),e._v("하였습니다. ")]},proxy:!0}])})],1)},Ne=[],je=r("2db4"),Ee=function(){var e=this,t=e._self._c;return t(je["a"],{staticClass:"mb-6",attrs:{value:""!==e.result,color:e.color,timeout:"2000",bottom:"",elevation:"24"}},["success"==e.result?t("span",[e._t("success",(function(){return[e._v(" 메일을 "),t("strong",[e._v("성공적")]),e._v("으로 보냈습니다. ")]}))],2):t("span",[e._t("error",(function(){return[e._v(" 메일 전송을 "),t("strong",[e._v("실패")]),e._v("하였습니다. ")]}))],2)])},Ae=[],Be={props:{result:{type:String,default:""}},computed:{color(){return"success"==this.result?"green":"error"}}},Te=Be,Le=Object(m["a"])(Te,Ee,Ae,!1,null,null,null),Pe=Le.exports,Ve={components:{OrderChip:te,EmailInputField:j,SnackBar:Pe},async mounted(){this.order.shippingMemo&&(this.email=Ie(this.order.shippingMemo),console.log())},data(){return{emailLoading:!1,loading:!1,toggle:!1,show:!0,sendResult:"",dispatchResult:"",email:"",comment:""}},props:{order:{type:Object}},computed:{mailData(){const e=this.toggle?this.comment.replaceAll("\n","<br/>"):"";return{store:"영로그",items:this.order.items,toEmail:this.email,comment:e}}},methods:{openOrderDetail(e){ye(e)},async sendMail(){this.email&&(this.loading=!0,this.sendResult=await this.$store.dispatch("sendMail",this.mailData),"success"==this.sendResult&&await this.dispatchOrder(),this.loading=!1)},async dispatchOrder(){this.dispatchResult=await this.$store.dispatch("dispatchOrder",this.order.items),this.loading=!1,"success"==this.dispatchResult&&setTimeout(()=>{this.show=!1,this.$emit("remove-item")},2e3)}},filters:{timeFormat(e){const t=new Date(e);return t.toLocaleString("ja-JP",{year:"2-digit",month:"2-digit",day:"2-digit",hourCycle:"h23",hour:"2-digit",minute:"2-digit"})}}},qe=Ve,ze=(r("4904"),Object(m["a"])(qe,Fe,Ne,!1,null,"783f3d58",null)),Ye=ze.exports,Je=r("cee4");function He(){return Je["a"].create({baseURL:"https://port-0-send-mail-server-sop272gldencvsf.gksl2.cloudtype.app"})}const Ue=He(),Ze=()=>Ue.get("/naver/orders/new"),Ge=e=>Ue.get("/naver/orders/"+e),Ke=e=>Ue.get("/naver/detail",{params:{productOrderId:e}}),Qe=e=>Ue.post("/naver/dispatch/"+e);var We={components:{OrderItem:Ye},mounted(){this.fetchNewOrder()},data(){return{loading:!1,orderList:[]}},methods:{removeItem(e){this.orderList.splice(e,1)},async fetchNewOrder(){this.loading=!0;const{data:e}=await Ze(),t=e;if(t.length){const e=t.map(e=>e.productOrderId);let a=await Ke(e);a=a.data;var r=a.reduce((e,t)=>(e[t.orderId]=e[t.orderId]||[],e[t.orderId].push(t),e),{}),s=Object.keys(r).map((function(e){return{orderId:e,orderInfo:r[e]}}));const i=s.map(e=>{let t=[];return e.orderInfo.map(e=>t.push(e.items)),{orderId:e.orderId,paymentDate:e.orderInfo[0].paymentDate,items:t,ordererId:e.orderInfo[0].ordererId,ordererName:e.orderInfo[0].ordererName,shippingMemo:e.orderInfo[0].shippingMemo}});this.orderList=i}this.loading=!1}}},Xe=We,et=Object(m["a"])(Xe,Ce,De,!1,null,"502d5913",null),tt=et.exports,rt={name:"Home",components:{SelectFileMailForm:be,OrderMailForm:Me,NewOrderList:tt},data(){return{tab:null,items:[{value:"newOrder",text:"신규주문"},{value:"single",text:"스토어 개별배송"},{value:"multiple",text:"스토어 묶음배송"},{value:"none",text:"메일만 발송"}]}}},st=rt,at=Object(m["a"])(st,O,y,!1,null,null,null),it=at.exports;s["a"].use(v["a"]);const ot=[{path:"/",name:"Home",component:it}],lt=new v["a"]({mode:"history",base:"/vue-send-mail/",routes:ot});var nt=lt,dt=r("2f62");const ct=e=>Ue.post("/mail",e);s["a"].use(dt["a"]);var ut=new dt["a"].Store({state:{activeTab:"newOrder"},mutations:{setActiveTab(e,t){e.activeTab=t}},actions:{async sendMail(e,t){let r="";try{await ct(t),r="success"}catch(s){r="error"}return r},async dispatchOrder(e,t){let r="";try{if(1==t.length){let{status:e}=await Qe(t[0].productOrderId);r=200==e?"success":"error"}else{let e=await Promise.all(t.map(async e=>{let{status:t}=await Qe(e.productOrderId);return t}));r=e.every(e=>200==e)?"success":"error"}}catch(s){r="error"}return r},async getOrderDetail(e,t){const{data:r}=await Ke([t]);return r},async getOrders(e,t){const{data:r}=await Ge(t),{productOrderIds:s}=r,a=await Ke(s);return a.data}}}),mt=r("f309"),pt=r("fcf4");s["a"].use(mt["a"]);var ht=new mt["a"]({theme:{themes:{light:{primary:pt["a"].green,secondary:pt["a"].grey.darken4}}}});s["a"].config.productionTip=!1,s["a"].filter("itemName",e=>{switch("string"==typeof e&&(e=Number(e)),e){case 6175018692:return"2023 심플 플래너";case 6173761992:return"2023 모던 플래너";case 7551229680:return"2023 타임라인 플래너";case 6230373650:return"2023 먼슬리&데일리 플래너";case 6183672844:return"세로형 31DAYS 플래너";case 7988182711:return"가로형 31DAYS 플래너";case 6339448390:return"3년 5년 다이어리";case 6668700804:return"세로형 인덱스 노트";case 6711856094:return"가로형 인덱스 노트";case 6907619722:return"독서노트";case 7118280906:return"드라마노트";case 6390846551:return"먼슬리 트래커북";case 6293308097:return"180 베이직 노트";case 6498685859:return"180 체커보드 노트";case 7674508068:return"레시피북";case 7917862453:return"교환일기";case 7923245834:return"네컷 프레임 스티커";default:return""}}),new s["a"]({router:nt,store:ut,vuetify:ht,render:e=>e(h)}).$mount("#app")},"6b67":function(e,t,r){}});
//# sourceMappingURL=app.7054c578.js.map