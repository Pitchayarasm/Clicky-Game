(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Harry Potter",image:"./assets/harry_potter.jpg"},{id:2,name:"Hermione Granger",image:"./assets/hermione_granger.jpg"},{id:3,name:"Ronald Weasley",image:"./assets/ronald_weasley.jpg"},{id:4,name:"Albus Dumbledor",image:"./assets/albus_dumbledor.jpg"},{id:5,name:"Arthur Weasley",image:"./assets/arthur_weasley.jpg"},{id:6,name:"Cedric Diggory",image:"./assets/cedric_diggory.jpg"},{id:7,name:"Draco Malfoy",image:"./assets/draco_malfoy.jpg"},{id:8,name:"Jinny Weasley",image:"./assets/jinny_weasley.jpg"},{id:9,name:"Minerva Mcgonnagall",image:"./assets/minerva_mcgonnagall.jpg"},{id:10,name:"Rubeus Hagrid",image:"./assets/rubeus_hagrid.jpg"},{id:11,name:"Seamus Finnigan",image:"./assets/seamus_finnigan.jpg"},{id:12,name:"Severus Snape",image:"./assets/severus_snape.jpg"}]},,,function(e,a,t){e.exports=t(25)},,,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(2),s=t.n(i),c=t(3),l=t(4),o=t(7),m=t(5),u=t(8),g=t(6);t(15);var d=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",null,r.a.createElement("li",null,"Clicky Game"),r.a.createElement("li",null,"Click an image to begin!"),r.a.createElement("li",null,"Score : ",e.score," | Top : ",e.highScore))))};t(17);var h=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"Clicky Game!"),r.a.createElement("h2",null,"Click on an imageto earn points, but don't click on any more than one!")))};t(19);var f=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"images",onClick:function(){return e.handleClick(e.id)},id:e.id,alt:e.name,src:e.image}))};t(21);var p=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"bottom"},'"ClickyGame!"'))},y=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={friends:g,score:0,highScore:0,isClick:[]},t.handleClick=function(e){if(console.log(t.state.isClick),t.state.isClick.includes(e))t.setState({isClick:[],score:0,highScore:t.state.highScore});else{var a=t.state.isClick;a.push(e);var n=t.state.friends.sort(function(){return Math.random()-.5});t.setState({isClick:a,score:t.state.score+1,friends:n},function(){t.state.score<t.state.highScore?t.setState({highScore:t.state.highScore}):t.setState({highScore:t.state.score})})}},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{score:this.state.score,highScore:this.state.highScore}),r.a.createElement(h,null),r.a.createElement("div",{className:"container"},this.state.friends.map(function(a){return r.a.createElement(f,{id:a.id,key:a.id,image:a.image,handleClick:e.handleClick})})),r.a.createElement(p,null))}}]),a}(n.Component);t(23);s.a.render(r.a.createElement(y,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.bb139a6b.chunk.js.map