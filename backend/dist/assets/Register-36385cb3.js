import{_ as p,r as d,o as u,c as m,a as e,b as i,v as a,h as f,d as _,e as y,w as g,f as v,p as h,g as b}from"./index-cf1cf46c.js";const N={data(){return{user:{email:"",password:"",firstName:"",lastName:""},acceptedPrivacyPolicy:!1}},methods:{async registerUser(){this.acceptedPrivacyPolicy?console.log(this.user):alert("Du måste godkänna integritetspolicyn för att fortsätta.");try{(await fetch("http://localhost:3000/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.user)})).ok?(console.log("User registered successfully"),this.$router.push({name:"Welcome"})):console.error("Error registering user")}catch(r){console.error("Network error:",r)}}}},l=r=>(h("data-v-5c948cf0"),r=r(),b(),r),k={class:"form-group"},w=l(()=>e("label",{for:"email"},"E-post:",-1)),P={class:"form-group"},x=l(()=>e("label",{for:"password"},"Lösenord:",-1)),U={class:"form-group"},V=l(()=>e("label",{for:"firstName"},"Förnamn:",-1)),S={class:"form-group"},C=l(()=>e("label",{for:"lastName"},"Efternamn:",-1)),E={class:"form-group"},I=l(()=>e("label",{for:"privacyPolicy"},"Jag godkänner ",-1)),T=["disabled"];function B(r,s,M,D,o,n){const c=d("router-link");return u(),m("form",{onSubmit:s[5]||(s[5]=g((...t)=>n.registerUser&&n.registerUser(...t),["prevent"])),class:"form-container"},[e("div",k,[w,i(e("input",{type:"email",id:"email","onUpdate:modelValue":s[0]||(s[0]=t=>o.user.email=t),class:"input"},null,512),[[a,o.user.email]])]),e("div",P,[x,i(e("input",{type:"password",id:"password","onUpdate:modelValue":s[1]||(s[1]=t=>o.user.password=t),class:"input"},null,512),[[a,o.user.password]])]),e("div",U,[V,i(e("input",{type:"text",id:"firstName","onUpdate:modelValue":s[2]||(s[2]=t=>o.user.firstName=t),class:"input"},null,512),[[a,o.user.firstName]])]),e("div",S,[C,i(e("input",{type:"text",id:"lastName","onUpdate:modelValue":s[3]||(s[3]=t=>o.user.lastName=t),class:"input"},null,512),[[a,o.user.lastName]])]),e("div",E,[i(e("input",{type:"checkbox",id:"privacyPolicy","onUpdate:modelValue":s[4]||(s[4]=t=>o.acceptedPrivacyPolicy=t),class:"checkbox"},null,512),[[f,o.acceptedPrivacyPolicy]]),I,_(c,{to:"/privacy-policy",class:"link"},{default:y(()=>[v("integritetspolicy")]),_:1})]),e("button",{type:"submit",disabled:!o.acceptedPrivacyPolicy,class:"button"},"Skapa konto",8,T)],32)}const O=p(N,[["render",B],["__scopeId","data-v-5c948cf0"]]);export{O as default};
