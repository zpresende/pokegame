(this.webpackJsonppokegame=this.webpackJsonppokegame||[]).push([[0],{12:function(n,e,t){n.exports=t(19)},19:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(8),c=t.n(i),o=t(1),u=t(2);function p(){var n=Object(o.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  };\n\n  body, input, button {\n    font-family: 'Mulish', Roboto, Arial, Helvetica, sans-serif;\n  };\n\n"]);return p=function(){return n},n}var l=Object(u.a)(p()),s=t(5);function d(){var n=Object(o.a)(["\n  margin-top: -25px;\n  display: flex;\n  justify-self: center;\n  flex-direction: column;\n  grid-column: 1 / -1;\n  text-align: center;\n  h1 {\n    padding: 10px 60px;\n    text-transform: uppercase;\n    clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%); \n    background-color: #333;\n    color: #FF6970;\n    font-size: 18px;\n  }\n  ","\n  span {\n    font-size: 10px;\n    margin-top: 5px;\n    color: #aaa;\n    text-transform: uppercase;\n    font-weight: bold;\n  }\n"]);return d=function(){return n},n}function f(){var n=Object(o.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  row-gap: 30px;\n  padding: 50px;\n  padding-top: 0;\n  border-radius: 15px;\n  ","\n"]);return f=function(){return n},n}function m(){var n=Object(o.a)(["\n  padding: 10px;\n"]);return m=function(){return n},n}var b=u.b.div(m()),g=u.b.div(f(),(function(n){return n.isWinner&&"border: 2px solid #ccc;"})),x=u.b.div(d(),(function(n){return n.isWinner&&"\n    h1 {\n      padding: 10px 100px;\n      color: #2AC289; \n      font-size: 24px;\n    };\n  "}));function E(){var n=Object(o.a)(["\n  color: #666;\n  font-size: 12px;\n  text-transform: capitalize;\n"]);return E=function(){return n},n}function h(){var n=Object(o.a)(["\n  width: 100px;\n  height: 100px;\n  margin: 20px 0;\n  cursor: pointer;\n  img{\n    width: 100%;\n    height: 100%;\n    transition: transform ease .3s, opacity ease .3s;\n    opacity: 0.7;\n    :hover {\n      transform: scale(1.25);\n      opacity: 1;\n    }\n  }\n"]);return h=function(){return n},n}function v(){var n=Object(o.a)(["\n  font-size: 20px;\n  color: #333333;\n  font-weight: 700;\n"]);return v=function(){return n},n}function y(){var n=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return y=function(){return n},n}function j(){var n=Object(o.a)(["\n  background-color: #fafafa;\n  ","\n  border-radius: 8px;\n  box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.25);\n"]);return j=function(){return n},n}var O={bug:"#729F3F40",water:"#4592C440",fire:"#FD7D2440",flying:"#3DC7EF40",electric:"#EED53540",fairy:"#FDB9E940",ghost:"#7B61A240",normal:"#A3ACAF40"},k=u.b.div(j(),(function(n){var e=n.type;return"background: linear-gradient(0deg, ".concat(O[e]," 0%, #fafafa 35%, #fafafa 100%);")})),w=u.b.div(y()),F=u.b.span(v()),W=u.b.div(h()),z=u.b.div(E()),A=function(n){var e=n.id,t=n.name,r=n.type,i=n.baseExperience,c="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/".concat(e.toString().padStart(3,"0"),".png");return a.a.createElement(k,{type:r},a.a.createElement(w,null,a.a.createElement(F,null,t),a.a.createElement(W,null,a.a.createElement("img",{src:c,alt:t})),a.a.createElement(z,null,"Type:"," ",r),a.a.createElement(z,null,"EXP:"," ",i)))},S=function(n){var e=n.pokemons,t=n.isWinner;return a.a.createElement(b,null,a.a.createElement(g,{isWinner:t},a.a.createElement(x,{isWinner:t},a.a.createElement("h1",null,t?"Winning hand!":"losing hand!"),a.a.createElement("span",null,"Total Experience:"," ",e.reduce((function(n,e){return n+e.baseExperience}),0))),e.map((function(n){var e=n.id,t=n.name,r=n.type,i=n.baseExperience;return a.a.createElement(A,{key:e,id:e,name:t,type:r,baseExperience:i})}))))};function C(){var n=Object(o.a)(["\n  height: 100vh;\n  padding: 50px;\n  display: grid;\n  gap: 50px;\n  max-width: 1150px;\n  margin: auto;\n  align-content: center;\n"]);return C=function(){return n},n}var D=u.b.div(C()),B=function(){var n=Object(r.useState)([]),e=Object(s.a)(n,2),t=e[0],i=e[1],c=Object(r.useState)([]),o=Object(s.a)(c,2),u=o[0],p=o[1];function l(n,e){return n.reduce((function(n,e){return n+e.baseExperience}),0)>e.reduce((function(n,e){return n+e.baseExperience}),0)}return Object(r.useEffect)((function(){var n=[{id:4,name:"Charmander",type:"fire",baseExperience:62},{id:7,name:"Squirtle",type:"water",baseExperience:63},{id:11,name:"Metapod",type:"bug",baseExperience:72},{id:12,name:"Butterfree",type:"flying",baseExperience:178},{id:25,name:"Pikachu",type:"electric",baseExperience:112},{id:39,name:"Jigglypuff",type:"fairy",baseExperience:95},{id:94,name:"Gengar",type:"ghost",baseExperience:225},{id:133,name:"Eevee",type:"normal",baseExperience:65}];n.sort((function(){return Math.random()-.5})),i(n.splice(0,n.length/2)),p(n)}),[]),a.a.createElement(D,null,a.a.createElement(S,{pokemons:t,isWinner:l(t,u)}),a.a.createElement(S,{pokemons:u,isWinner:l(u,t)}))};var M=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(l,null),a.a.createElement(B,null))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(M,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.7cb0944b.chunk.js.map