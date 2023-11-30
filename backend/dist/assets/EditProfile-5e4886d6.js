import{_ as p,o as i,c as n,a as s,f as u,t as d,d as f,w as h,b as c,v as m,p as D,i as g}from"./index-b8281cf8.js";const _={data(){return{errorMessage:"",successMessage:"",showEditModal:!1,profileData:{firstName:"",lastName:"",email:"",password:""},userData:null,showUserData:!1,emailToShowDetails:"",showDeleteModal:!1}},methods:{showUserDetails(){const a=localStorage.getItem("cachedEmail");a&&(this.emailToShowDetails=a,fetch(`https://loginab.onrender.com/api/profile/${this.emailToShowDetails}`).then(e=>{if(e.ok)return e.json();throw new Error("Failed to fetch user details")}).then(e=>{this.userData=e,this.showUserData=!0}).catch(e=>{console.error("Error fetching user details:",e)}))},closeUserDataModal(){this.showUserData=!1},saveProfileChanges(){fetch("https://loginab.onrender.com/api/profile/update",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:this.profileData.firstName,lastName:this.profileData.lastName,email:this.profileData.email,password:this.profileData.password})}).then(a=>{a.ok?(this.successMessage="Profilen är nu ändrad",setTimeout(()=>{this.showEditModal=!1,this.successMessage=""},4e3)):(this.errorMessage="Profilen finns inte",setTimeout(()=>{this.showEditModal=!1,this.errorMessage=""},4e3))}).catch(a=>{console.error("Error updating profile:",a)})},closeEditModal(){this.showEditModal=!1},openEditModal(){this.showEditModal=!0},showDeleteConfirmation(){this.showDeleteModal=!0},confirmDeleteProfile(){console.log("confirmDeleteProfile method is triggered");const a=localStorage.getItem("cachedEmail");a?(this.emailToShowDetails=a,fetch(`https://loginab.onrender.com/api/delete/${this.emailToShowDetails}`,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(e=>{e.ok?this.$router.push({name:"LogIn"}):e.status===404?this.errorMessage="Profilen finns inte":console.error("Error deleting profile:",e.status)}).catch(e=>{console.error("Error:",e)})):console.error("Cached email not found")},closeModal(){this.showDeleteModal=!1}}},r=a=>(D("data-v-f5334a59"),a=a(),g(),a),w={key:0,class:"modal"},M={class:"modal-content"},v=r(()=>s("h3",null,"Användaruppgifter",-1)),E=r(()=>s("strong",null,"Förnamn:",-1)),k=r(()=>s("strong",null,"Efternamn:",-1)),b=r(()=>s("strong",null,"E-post:",-1)),N={key:1,class:"modal"},y={class:"modal-content"},C=r(()=>s("h3",null,"Ändra profil",-1)),U={class:"form-group"},P=r(()=>s("label",{for:"firstName"},"Förnamn:",-1)),S={class:"form-group"},T=r(()=>s("label",{for:"lastName"},"Efternamn:",-1)),V={class:"form-group"},I=r(()=>s("label",{for:"email"},"E-post:",-1)),x={class:"form-group"},j=r(()=>s("label",{for:"password"},"Lösenord:",-1)),B={class:"form-group"},F=r(()=>s("button",{type:"submit"},"Spara ändringar",-1)),L={key:0,class:"success-message"},J={key:1,class:"error-message"},R={key:2,class:"modal"},A={class:"modal-content"},O=r(()=>s("h3",null,"Radera konto",-1)),q=r(()=>s("p",null,"Är du säker på att vill radera ditt konto?",-1)),z={key:3,class:"error-message"};function G(a,e,H,K,t,l){return i(),n("form",{onSubmit:e[13]||(e[13]=h((...o)=>a.updateUserProfile&&a.updateUserProfile(...o),["prevent"]))},[s("button",{onClick:e[0]||(e[0]=(...o)=>l.showUserDetails&&l.showUserDetails(...o)),class:"button"},"Visa mina uppgifter"),t.showUserData&&t.userData?(i(),n("div",w,[s("div",M,[s("span",{class:"close",onClick:e[1]||(e[1]=(...o)=>l.closeUserDataModal&&l.closeUserDataModal(...o))},"×"),v,s("div",null,[s("p",null,[E,u(" "+d(t.userData.first_name),1)]),s("p",null,[k,u(" "+d(t.userData.last_name),1)]),s("p",null,[b,u(" "+d(t.userData.email),1)])])])])):f("",!0),s("button",{onClick:e[2]||(e[2]=(...o)=>l.openEditModal&&l.openEditModal(...o))},"Uppdatera profil"),t.showEditModal?(i(),n("div",N,[s("div",y,[s("span",{class:"close",onClick:e[3]||(e[3]=(...o)=>l.closeEditModal&&l.closeEditModal(...o))},"×"),C,s("form",{onSubmit:e[8]||(e[8]=h((...o)=>l.saveProfileChanges&&l.saveProfileChanges(...o),["prevent"])),class:"vertical-form"},[s("div",U,[P,c(s("input",{type:"text",id:"firstName","onUpdate:modelValue":e[4]||(e[4]=o=>t.profileData.firstName=o)},null,512),[[m,t.profileData.firstName]])]),s("div",S,[T,c(s("input",{type:"text",id:"lastName","onUpdate:modelValue":e[5]||(e[5]=o=>t.profileData.lastName=o)},null,512),[[m,t.profileData.lastName]])]),s("div",V,[I,c(s("input",{type:"email",id:"email","onUpdate:modelValue":e[6]||(e[6]=o=>t.profileData.email=o)},null,512),[[m,t.profileData.email]])]),s("div",x,[j,c(s("input",{type:"password",id:"password","onUpdate:modelValue":e[7]||(e[7]=o=>t.profileData.password=o)},null,512),[[m,t.profileData.password]])]),s("div",B,[F,t.successMessage?(i(),n("div",L,d(t.successMessage),1)):f("",!0),t.errorMessage?(i(),n("div",J,d(t.errorMessage),1)):f("",!0)])],32)])])):f("",!0),s("button",{class:"delete",onClick:e[9]||(e[9]=(...o)=>l.showDeleteConfirmation&&l.showDeleteConfirmation(...o))},"Radera mitt konto"),t.showDeleteModal?(i(),n("div",R,[s("div",A,[s("span",{class:"close",onClick:e[10]||(e[10]=(...o)=>l.closeModal&&l.closeModal(...o))},"×"),O,q,s("div",null,[s("button",{onClick:e[11]||(e[11]=(...o)=>l.confirmDeleteProfile&&l.confirmDeleteProfile(...o))},"Ja"),s("button",{onClick:e[12]||(e[12]=(...o)=>l.closeModal&&l.closeModal(...o)),class:"red-button"},"Nej")])])])):f("",!0),t.errorMessage?(i(),n("div",z,d(t.errorMessage),1)):f("",!0)],32)}const W=p(_,[["render",G],["__scopeId","data-v-f5334a59"]]);export{W as default};
