!function(e){function t(i){if(a[i])return a[i].exports;var r=a[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var a={};t.m=e,t.c=a,t.i=function(e){return e},t.d=function(e,a,i){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist",t(t.s=4)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.fleet=[{type:"secondi",name:"GENNARO'S MIXED GRILL",description:"Free-range pork & fennel sausage, herby marinated skirt steak, free-range chicken thigh, portobello mushroom & slow-roasted tomatoes with smoky chilli ketchup & a side of your choice",price:"19.95$",category:"secondi",calories:748,fat:45,saturates:25,protein:80,salt:10,carbs:53,sugar:12,fibre:3,alergyDetails:"Contains garlic, chilli",tag:["Gluten free","Dairy free"]},{type:"secondi",name:"TENDER ROASTED AUBERGINE",description:"Topped with an agrodolce ragù of tomatoes, lentils & raisins, almond yoghurt, pine nuts, rocket & pomegranate",price:"9.95$",category:"secondi",calories:748,fat:45,saturates:25,protein:80,salt:10,carbs:5,sugar:24,fibre:3,alergyDetails:"Contains tree nuts, gluten, soybean, garlic, celery, chilli",tag:["Healthy option","Dairy free","Vegetarian","Vegan"]},{type:"secondi",name:"SICILIAN CHICKEN",description:"Half a free-range boneless chicken in a spicy tomato, aubergine & leccino olive sauce",price:"14.95$",category:"secondi",calories:748,fat:45,saturates:25,protein:80,salt:108,carbs:5,sugar:62,fibre:3,alergyDetails:"Contains garlic, chilli",tag:["Healthy option","Dairy free"]},{type:"secondi",name:"THE JAMIE’S ITALIAN BURGER",description:"Prime British beef patty with pancetta, balsamic onions, artisan Westcombe Cheddar, tomato & our house special sauce in a brioche bun",price:"11.95$",category:"secondi",calories:748,fat:45,saturates:25,protein:80,salt:109,carbs:5,sugar:2,fibre:3,alergyDetails:"Contains sesame, milk, egg, gluten, garlic, mustard, sulphites",tag:[]},{type:"secondi",name:"7OZ MARINATED FLASH STEAK",description:"Served with chargrilled portobello mushrooms, green salad, a side & a sauce of your choice: Creamy porcini; Herby garlic butter; Balsamic onion",price:"16.95$",category:"CHARGRILLED STEAKS",calories:748,fat:45,saturates:25,protein:80,salt:10,carbs:5,sugar:22,fibre:33,alergyDetails:"Contains milk, egg, garlic, mustard",tag:["Gluten free"]},{type:"secondi",name:"8OZ 35-DAY DRY-AGED SIRLOIN",description:"Served with chargrilled portobello mushrooms, green salad, a side & a sauce of your choice: Creamy porcini; Herby garlic butter; Balsamic onion",price:"16.95$",category:"CHARGRILLED STEAKS",calories:748,fat:45,saturates:25,protein:80,salt:10,carbs:52,sugar:23,fibre:3,alergyDetails:"Contains milk, egg, garlic, mustard",tag:["Gluten free"]},{type:"pasta",name:"CAULIFLOWER CHEESE GNOCCHI",description:"Organic potato gnocchi, creamy cauliflower & Gorgonzola sauce & roasted cauliflower",price:"6.95$",category:"pasta",calories:748,fat:45,saturates:25,protein:80,salt:10,carbs:52,sugar:23,fibre:3,alergyDetails:"Contains milk, egg, garlic, mustard",tag:["Gluten free"]},{type:"pasta",name:"MUSHROOM CARAMELLE",description:"Served with chargrilled portobello mushrooms, green salad, a side & a sauce of your choice: Creamy porcini; Herby garlic butter; Balsamic onion",price:"16.95$",category:"pasta",calories:748,fat:45,saturates:25,protein:80,salt:10,carbs:52,sugar:23,fibre:3,alergyDetails:"Contains milk, egg, garlic, mustard",tag:["Gluten free"]},{type:"pizza",name:"THE JULIETTA",description:"Served with chargrilled portobello mushrooms, green salad, a side & a sauce of your choice: Creamy porcini; Herby garlic butter; Balsamic onion",price:"16.95$",category:"pizza",calories:748,fat:45,saturates:25,protein:80,salt:10,carbs:52,sugar:23,fibre:3,alergyDetails:"Contains milk, egg, garlic, mustard",tag:["Gluten free"]},{type:"antipasti",name:"BREAD PLANK",description:"House focaccia, paysan, grissini & tapenade",price:"16.95$",category:"nibbles",calories:748,fat:45,saturates:25,protein:80,salt:10,carbs:52,sugar:23,fibre:3,alergyDetails:"Contains gluten, garlic, chilli, sulphites",tag:["Dairy free","Vegetarian","Vegan"]},{type:"antipasti",name:"CRISPY SQUID",description:"Parmesan-stuffed croquettes with truffle dip",price:"16.95$",category:"nibbles",calories:748,fat:45,saturates:25,protein:80,salt:10,carbs:52,sugar:23,fibre:3,alergyDetails:"Contains egg, gluten, garlic, chilli, mustard, molluscs",tag:["Dairy free"]},{type:"antipasti",name:"CRISPY SQUID",description:"Parmesana-stuffed croquettes with truffle dip",price:"16.95$",category:"pasta",calories:748,fat:45,saturates:25,protein:80,salt:10,carbs:52,sugar:23,fibre:3,alergyDetails:"Contains gluten, chilli, sulphites ",tag:["Healthy option","Gluten free","Dairy free","Vegetarian","Vegan"]},{type:"antipasti",name:"JAMIE’S BURRATA",description:"Oozy burrata with roasted squash, clementine, red chicory, fennel & pomegranate",price:"16.95$",category:"pasta",calories:748,fat:45,saturates:25,protein:80,salt:10,carbs:52,sugar:23,fibre:3,alergyDetails:"Contains tree nuts, milk, garlic, sulphites",tag:["Healthy option","Gluten free","Dairy free","Vegetarian","Vegan"]}]},function(e,t,a){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.DataService=void 0;var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),n=a(5);t.DataService=function(){function e(){i(this,e),this.antipasti=[],this.pasta=[],this.secondi=[],this.pizza=[],this.contorni=[],this.deserts=[],this.kids=[],this.drinks=[];document.getElementById("table")}return r(e,[{key:"loadData",value:function(e){var t=!0,a=!1,i=void 0;try{for(var r,n=e[Symbol.iterator]();!(t=(r=n.next()).done);t=!0){var o=r.value;switch(o.type){case"antipasti":var s=this.loadFood(o);this.antipasti.push(s);break;case"pasta":var c=this.loadFood(o);this.pasta.push(c);break;case"secondi":var l=this.loadFood(o);this.secondi.push(l);break;case"pizza":var u=this.loadFood(o);this.pizza.push(u)}}}catch(e){a=!0,i=e}finally{try{!t&&n.return&&n.return()}finally{if(a)throw i}}}},{key:"loadFood",value:function(e){return new n.Food(e.calories,e.fat,e.saturates,e.protein,e.salt,e.carbs,e.sugar,e.fibre,e.alergyDetails,e.tag,e.type,e.name,e.description,e.price,e.category)}},{key:"printData",value:function(e){var t=!0,a=!1,i=void 0;try{for(var r,n=e[Symbol.iterator]();!(t=(r=n.next()).done);t=!0){var o=r.value,s=document.createElement("div"),c=document.createElement("h4"),l=document.createElement("h5"),u=document.createElement("p"),p=document.createElement("a"),d=document.createElement("span");d.className="glyphicon glyphicon-info-sign",c.style.color="white",l.style.color="white",u.style.color="white";var f=document.createTextNode(o.name),y=document.createTextNode(o.price),g=document.createTextNode(o.description);c.appendChild(f),l.appendChild(y),u.appendChild(g),p.appendChild(d),s.appendChild(c),s.appendChild(l),s.appendChild(u),s.appendChild(p),table.appendChild(s)}}catch(e){a=!0,i=e}finally{try{!t&&n.return&&n.return()}finally{if(a)throw i}}}},{key:"sortData",value:function(e,t){var a=!0,i=!1,r=void 0;try{for(var n,o=e[Symbol.iterator]();!(a=(n=o.next()).done);a=!0){var s=n.value,c=!0,l=!1,u=void 0;try{for(var p,d=s.tag[Symbol.iterator]();!(c=(p=d.next()).done);c=!0){if(p.value===t){var f=document.createElement("div"),y=document.createElement("h4"),g=document.createElement("h5"),h=document.createElement("p"),m=document.createElement("a"),b=document.createElement("span");b.className="glyphicon glyphicon-info-sign",y.style.color="white",g.style.color="white",h.style.color="white";var v=document.createTextNode(s.name),E=document.createTextNode(s.price),C=document.createTextNode(s.description);y.appendChild(v),g.appendChild(E),h.appendChild(C),m.appendChild(b),f.appendChild(y),f.appendChild(g),f.appendChild(h),f.appendChild(m),table.appendChild(f)}}}catch(e){l=!0,u=e}finally{try{!c&&d.return&&d.return()}finally{if(l)throw u}}}}catch(e){i=!0,r=e}finally{try{!a&&o.return&&o.return()}finally{if(i)throw r}}}}]),e}()},function(e,t,a){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});t.Menu=function e(t){function a(){d.style.display="none"}function r(e){switch(this.event=e,g.style.display="inline",e.target.id){case"antipastiContainer":s.printData(s.antipasti),o(s.antipasti);break;case"pastaContainer":s.printData(s.pasta),o(s.pasta);break;case"secondiContainer":s.printData(s.secondi),o(s.secondi);break;case"pizzaContainer":s.printData(s.pizza),o(s.pizza)}}function n(){for(var e=document.getElementsByClassName("liclass"),t=0;t<e.length;t++)switch(e[t].accessKey){case"antipasti":e[t].addEventListener("click",function(){y.innerHTML="",s.printData(s.antipasti),o(s.antipasti)});break;case"pasta":e[t].addEventListener("click",function(){y.innerHTML="",s.printData(s.pasta),o(s.antipasti)});break;case"secondi":e[t].addEventListener("click",function(){y.innerHTML="",s.printData(s.secondi),o(s.antipasti)});break;case"pizza":e[t].addEventListener("click",function(){y.innerHTML="",s.printData(s.pizza),o(s.antipasti)})}}function o(e){function t(){switch(this.accessKey){case"Vegetarian":case"Vegan":case"Gluten free":case"Healthy":case"Dairy free":y.innerHTML="",s.sortData(e,this.accessKey)}}for(var a=0;a<f.length;a++)f[a].addEventListener("click",t)}i(this,e);var s=t,c=document.getElementById("antipastiContainer"),l=document.getElementById("pastaContainer"),u=document.getElementById("secondiContainer"),p=document.getElementById("pizzaContainer"),d=document.getElementById("menupictures"),f=document.getElementsByClassName("radioButton"),y=document.getElementById("table"),g=document.getElementById("leftMenu"),h=[c,l,u,p],m=!0,b=!1,v=void 0;try{for(var E,C=h[Symbol.iterator]();!(m=(E=C.next()).done);m=!0){var D=E.value;D.addEventListener("click",a),D.addEventListener("click",r),D.addEventListener("click",n)}}catch(e){b=!0,v=e}finally{try{!m&&C.return&&C.return()}finally{if(b)throw v}}}},function(e,t){},function(e,t,a){"use strict";a(3);var i=a(0),r=a(1),n=a(2),o=new r.DataService;o.loadData(i.fleet);new n.Menu(o)},function(e,t,a){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Food=void 0;var o=a(6);t.Food=function(e){function t(e,a,n,o,s,c,l,u,p,d,f,y,g,h,m){i(this,t);var b=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a,n,o,s,c,l,u,p,d));return b.type=f,b.name=y,b.description=g,b.price=h,b.category=m,b}return n(t,e),t}(o.Nutritional)},function(e,t,a){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});t.Nutritional=function e(t,a,r,n,o,s,c,l,u,p){i(this,e),this.calories=t,this.fat=a,this.saturates=r,this.protein=n,this.salt=o,this.carbs=s,this.sugar=c,this.fibre=l,this.alergyDetails=u,this.tag=p}}]);