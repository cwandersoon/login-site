import{_,r as u,o as i,c as l,a as e,w as m,b as d,v as p,t as g,d as h,e as f,f as w,F as v,g as y,p as b,h as k}from"./index-bd0dd901.js";const x="/login.png";const S={data(){return{username:"",password:"",error:""}},methods:{async login(){try{if((await fetch("https://loginab.onrender.com/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:this.username,password:this.password})})).ok)this.$router.push({name:"Welcome"});else throw new Error("Logga in misslyckades")}catch{this.error="Fel e-post eller lösenord"}}}},n=s=>(b("data-v-fae8ae80"),s=s(),k(),s),L={class:"login-container"},I=n(()=>e("div",{class:"image-container"},[e("img",{src:x,alt:"Logga in",class:"login-image",loading:"lazy"})],-1)),V=n(()=>e("h2",null,"Logga in",-1)),N={class:"form-group"},C=n(()=>e("label",{for:"username",class:"label"},"E-post:",-1)),E={class:"form-group"},T=n(()=>e("label",{for:"password",class:"label"},"Lösenord:",-1)),B={key:0,class:"error-message"},F=n(()=>e("button",{type:"submit",class:"button"},"Logga in",-1)),D=n(()=>e("p",null,"Eller skapa konto nedan",-1)),M={class:"button"};function O(s,o,U,j,t,r){const c=u("router-link");return i(),l(v,null,[e("div",L,[I,V,e("form",{onSubmit:o[2]||(o[2]=m((...a)=>r.login&&r.login(...a),["prevent"])),class:"login-form"},[e("div",N,[C,d(e("input",{type:"text",id:"username","onUpdate:modelValue":o[0]||(o[0]=a=>t.username=a),class:"input"},null,512),[[p,t.username]])]),e("div",E,[T,d(e("input",{type:"password",id:"password","onUpdate:modelValue":o[1]||(o[1]=a=>t.password=a),class:"input"},null,512),[[p,t.password]])]),t.error?(i(),l("div",B,g(t.error),1)):h("",!0),F],32)]),e("div",null,[D,e("button",M,[f(c,{to:{name:"Register"}},{default:w(()=>[y("Skapa konto")]),_:1})])])],64)}const J=_(S,[["render",O],["__scopeId","data-v-fae8ae80"]]);export{J as default};
