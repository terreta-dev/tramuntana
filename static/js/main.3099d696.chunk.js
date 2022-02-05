(this.webpackJsonptramuntana=this.webpackJsonptramuntana||[]).push([[0],{155:function(e,t,n){},286:function(e,t,n){"use strict";n.r(t);var r,a,i,c,o,s,u,d,l,h,m,j,f,p,x,b,y,g,O,v=n(1),w=n.n(v),k=n(38),S=n.n(k),P=(n(155),n(6)),W=n(9),C=n(3),z=W.a.div(r||(r=Object(P.a)(["\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  padding: 0.5rem;\n  background-color: transparent;\n  height: 100%;\n  grid-area: header;\n"]))),F=function(e){var t=e.children;return Object(C.jsx)(z,{children:t})},D=n(13),L={color:{primaryBackground:"#fef9f8",secondaryBackground:"#ef9273",primaryText:"#0d0d0d",secondaryText:"#ffffff",primaryAccent:"#CACACA",secondaryAccent:"#141519"}},T=W.a.div(a||(a=Object(P.a)(["\n  grid-area: content;\n  padding: 20px 40px;\n  border-radius: 1em;\n"]))),A=function(e){var t=e.children;return Object(C.jsx)(T,{children:t})},B=W.a.div(i||(i=Object(P.a)(['\n  min-height: 100vh;\n  max-width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 64px 1fr;\n  gap: 0px 0px;\n  grid-template-areas:\n    "sidebar header"\n    "sidebar content";\n  background-color: #f4f4f4;\n']))),I=W.a.div(c||(c=Object(P.a)(["\n  grid-area: sidebar;\n  background-color: ",";\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  align-items: stretch;\n  justify-content: space-between;\n"])),(function(e){return e.theme.color.secondaryBackground}),(function(e){return e.theme.color.secondaryText})),H=function(e){var t=e.children;return Object(C.jsx)(I,{children:t})},M=n(8),K=n.n(M),R=n(24),_=n(28),N=n(137),E=n.n(N).a.create({baseURL:"http://api.openweathermap.org/data/2.5/",timeout:1e4,headers:{Accept:"application/json","Content-Type":"application/json"}}),V=function(e,t){return E.get(e,t).then((function(e){return e.data})).catch((function(e){return console.log(e),Promise.reject(e)}))},J=function(e,t){return Object.keys(t).reduce((function(n,r){var a=function(e,t){for(var n=t.split("."),r=e,a=0;a<n.length-1;a++){var i=n[a];if(!r||!r.hasOwnProperty(i))return;r=r[i]}return r[n[n.length-1]]}(e,r);return a&&function(e,t,n){for(var r=e,a=t.split("."),i=0;i<a.length-1;i++){var c=a[i];r.hasOwnProperty(c)||(r[c]={}),r=r[c]}r[a[a.length-1]]=n}(n,t[r],a),n}),{})},U={"coord.lon":"coordinates.longitude","coord.lat":"coordinates.latitude",weather:"weatherConditions","main.temp":"weatherParameters.temperature","main.feels_like":"weatherParameters.feelsLike","main.pressure":"weatherParameters.pressure","main.humidity":"weatherParameters.humidity","main.temp_min":"weatherParameters.minTemperature","main.temp_max":"weatherParameters.maxTemperature","main.sea_level":"weatherParameters.pressureAtSeaLevel","main.grnd_level":"weatherParameters.pressureAtGroundLevel",visibility:"visibility","wind.speed":"weatherParameters.windSpeed","wind.deg":"weatherParameters.windDirection","clouds.all":"weatherParameters.cloudiness","rain.1h":"weatherParameters.rainInLastHour","rain.3h":"weatherParameters.rainInLastThreeHours","snow.1h":"weatherParameters.snowInLastHour","snow.3h":"weatherParameters.snowInLastThreeHours",name:"name",dt:"time",timezone:"timezone","sys.sunrise":"sunrise","sys.sunset":"sunset","sys.country":"country"},q=function(){var e=Object(_.a)(K.a.mark((function e(t){var n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("weather",{params:Object(R.a)({units:"metric"},t)});case 2:return n=e.sent,e.abrupt("return",J(n,U));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=n(52),X=function(){return Object(G.b)()},Y=G.c,Q=n(31),Z="openweather-apikey",$={city:"",apiKey:localStorage.getItem(Z)||""},ee=Object(Q.b)({name:"apiData",initialState:$,reducers:{changeCity:function(e,t){e.city=t.payload},changeApiKey:function(e,t){e.apiKey=t.payload},resetCity:function(e){e.city=""},resetApiKey:function(e){e.apiKey=""}}}),te=function(e){return e.apiData.apiKey},ne=function(e){return e.apiData.city},re=ee.actions,ae=re.changeCity,ie=re.changeApiKey,ce=(re.resetCity,re.resetApiKey,ee.reducer),oe={weather:void 0},se=Object(Q.b)({name:"currentWeather",initialState:oe,reducers:{changeWeather:function(e,t){e.weather=t.payload}}}),ue=function(e){return e.currentWeather.weather},de=function(e){var t;return null===(t=e.currentWeather.weather)||void 0===t?void 0:t.coordinates},le=se.actions.changeWeather,he=se.reducer,me=n(145),je=n(39),fe=W.a.div(u||(u=Object(P.a)(["\n  ","\n  font-size: ",";\n  height: 1em;\n  color: ",";\n"])),(function(e){var t=e.margin;return t?Object(je.a)(o||(o=Object(P.a)(["\n        margin: ",";\n      "])),t):Object(je.a)(s||(s=Object(P.a)([""])))}),(function(e){return e.size||"1em"}),(function(e){var t=e.color,n=e.theme;return t||n.color.primaryText})),pe=function(e){return{"01d":"WiDaySunny","01n":"WiNightClear","02d":"WiDayCloudy","02n":"WiNightCloudy","03d":"WiDayCloudy","03n":"WiNightCloudy","04d":"WiCloudy","04n":"WiCloudy","09d":"WiRain","09n":"WiRain","10d":"WiDayRain","10n":"WiNightRain","11d":"WiThunderstorm","11n":"WiThunderstorm","13d":"WiSnow","13n":"WiSnow","50d":"WiDayFog","50n":"WiNightFog"}[e]},xe=function(e){var t=Object(v.createElement)(me[e.name]);return Object(C.jsx)(fe,Object(R.a)(Object(R.a)({},e),{},{children:t}))},be=W.a.span(d||(d=Object(P.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n"]))),ye=function(e){var t=e.name,n=e.text,r=e.unit;return Object(C.jsxs)(be,{children:[Object(C.jsx)(xe,{name:t,size:"2em"}),"".concat(n," ").concat(null!==r&&void 0!==r?r:"")]})},ge=function(e,t){var n,r,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=Oe(e,t),c=a?/[0-2]\d:[0-5]\d:?([0-5]\d)/:/[0-2]\d:[0-5]\d/;return null!==(n=null===(r=i.match(c))||void 0===r?void 0:r[0])&&void 0!==n?n:"N/A"},Oe=function(e,t){return new Date(1e3*(e+(t||0))).toISOString()},ve=W.a.div(l||(l=Object(P.a)(["\n  flex: ",";\n  display: flex;\n  justify-content: space-around;\n"])),(function(e){return e.flex?e.flex:1})),we=W.a.span(h||(h=Object(P.a)(["\n  font-size: ",";\n"])),(function(e){return e.fontSize?e.fontSize:"1em"})),ke=function(){var e=Y(ue);return Object(C.jsx)(C.Fragment,{children:!!e&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(ve,{children:Object(C.jsx)(we,{fontSize:"4em",children:Object(C.jsx)(xe,{name:pe(e.weatherConditions[0].icon),size:"2em"})})}),Object(C.jsx)(ve,{children:Object(C.jsx)(we,{fontSize:"1em",children:"".concat(e.weatherConditions[0].description)})}),Object(C.jsx)(ve,{children:Object(C.jsx)(we,{fontSize:"2em",children:"".concat(e.name,", ").concat(e.country)})}),Object(C.jsx)(ve,{children:Object(C.jsx)(we,{fontSize:"4em",children:"".concat(Math.round(e.weatherParameters.temperature)," \xbaC")})}),Object(C.jsx)(ve,{children:Object(C.jsx)(we,{children:"Feels like: ".concat(Math.round(e.weatherParameters.feelsLike)," \xbaC")})}),Object(C.jsxs)(ve,{children:[Object(C.jsx)(ye,{name:"WiBarometer",text:e.weatherParameters.pressure,unit:"hPa"}),Object(C.jsx)(ye,{name:"WiHumidity",text:e.weatherParameters.humidity,unit:"%"})]}),Object(C.jsxs)(ve,{children:[Object(C.jsx)(ye,{name:"WiSunrise",text:ge(e.sunrise,e.timezone),unit:"h"}),Object(C.jsx)(ye,{name:"WiSunset",text:ge(e.sunset,e.timezone),unit:"h"})]}),Object(C.jsxs)(ve,{children:[Object(C.jsx)(ye,{name:"WiCloudy",text:e.weatherParameters.cloudiness||0,unit:"%"}),e.weatherParameters.rainInLastHour&&Object(C.jsx)(ye,{name:"WiRaindrops",text:e.weatherParameters.rainInLastHour,unit:"h"}),e.weatherParameters.snowInLastHour&&Object(C.jsx)(ye,{name:"WiSnow",text:e.weatherParameters.snowInLastHour,unit:"h"})]}),Object(C.jsxs)(ve,{children:[Object(C.jsx)(ye,{name:"WiWindDeg",text:e.weatherParameters.windDirection,unit:"\xba"}),Object(C.jsx)(ye,{name:"WiStrongWind",text:e.weatherParameters.windSpeed,unit:"m/s"})]})]})})},Se=function(){var e=Y(ne),t=Y(te),n=X();return Object(v.useEffect)((function(){(null===e||void 0===e?void 0:e.length)>0&&(null===t||void 0===t?void 0:t.length)>0&&q({q:e,appId:t}).then((function(e){return n(le(e))}))}),[t,e,n]),Object(C.jsx)(ke,{})},Pe=n(5),We=W.a.button(m||(m=Object(P.a)(["\n  color: ",";\n  background: "," none repeat scroll 0%\n    0%;\n  padding: 11px;\n  font-weight: 600;\n  margin: 0px;\n  border-radius: 1em;\n  border: 0px;\n"])),(function(e){return e.theme.color.secondaryText}),(function(e){return e.theme.color.primaryAccent})),Ce=W.a.input(j||(j=Object(P.a)(["\n  color: ",";\n  background: "," none repeat scroll 0%\n    0%;\n  padding: 11px;\n  font-weight: 600;\n  margin: 0px;\n  border-radius: 1em;\n  border: 0px;\n"])),(function(e){return e.theme.color.secondaryText}),(function(e){return e.theme.color.primaryAccent})),ze=W.a.div(f||(f=Object(P.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: center;\n  color: ",";\n  background: ",";\n  background: linear-gradient(\n    90deg,\n    "," 18%,\n    "," 100%\n  );\n"])),(function(e){return e.theme.color.primaryText}),(function(e){return e.theme.color.primaryBackground}),(function(e){return e.theme.color.secondaryBackground}),(function(e){return e.theme.color.primaryBackground})),Fe=W.a.div(p||(p=Object(P.a)(["\n  min-width: 300px;\n  min-height: 250px;\n  display: flex;\n  flex-direction: column;\n  align-items: end;\n  justify-content: space-around;\n  padding: 20px;\n"]))),De=function(){var e=X(),t=Object(v.useState)(""),n=Object(Pe.a)(t,2),r=n[0],a=n[1],i=Object(v.useState)(""),c=Object(Pe.a)(i,2),o=c[0],s=c[1],u=function(e){return function(t){e(t.currentTarget.value)}};return Object(C.jsx)(ze,{children:Object(C.jsxs)(Fe,{children:[Object(C.jsx)("h2",{children:"Tramuntana"}),Object(C.jsx)(Ce,{style:{width:"200px"},defaultValue:r,onChange:u(a),placeholder:"Fill with your API key"}),Object(C.jsx)(Ce,{style:{width:"200px"},defaultValue:o,onChange:u(s),placeholder:"Load weather for city?"}),Object(C.jsx)(We,{style:{width:"222px"},onClick:function(){""!==r&&(e(ae(o)),e(ie(r)))},children:"Submit"})]})})},Le=function(){var e=Object(v.useState)(""),t=Object(Pe.a)(e,2),n=t[0],r=t[1],a=X();return Object(C.jsx)(Ce,{defaultValue:n,onChange:function(e){r(e.currentTarget.value)},onKeyPress:function(e){"Enter"===e.key&&a(ae(n))},placeholder:"City"})},Te={lon:"coordinates.longitude",lat:"coordinates.latitude",timezone_offset:"timezone"},Ae={weather:"weatherConditions","temp.min":"temperature.real.min","temp.max":"temperature.real.max","feels_like.day":"temperature.feelsLike.day","feels_like.night":"temperature.feelsLike.night",pressure:"pressure",humidity:"humidity",speed:"windSpeed",deg:"windDirection",clouds:"cloudiness",rain:"rain",snow:"snow",pop:"rainProbability",sunrise:"sunrise",sunset:"sunset",moonrise:"moonrise",moonset:"moonset",dt:"time"},Be=function(e){var t=J(e,Te);return t.forecasts=e.daily.map(Ie),t},Ie=function(e){return J(e,Ae)},He=function(){var e=Object(_.a)(K.a.mark((function e(t){var n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("onecall",{params:Object(R.a)({units:"metric",exclude:"current,minutely,hourly,alerts"},t)});case 2:return n=e.sent,e.abrupt("return",Be(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Me={forecast:void 0},Ke=Object(Q.b)({name:"fiveDayForecast",initialState:Me,reducers:{changeForecast:function(e,t){e.forecast=t.payload}}}),Re=function(e){return e.fiveDayForecast.forecast},_e=Ke.actions.changeForecast,Ne=Ke.reducer,Ee=W.a.div(x||(x=Object(P.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 10px;\n  padding: 5px;\n"])),(function(e){return e.theme.color.secondaryBackground})),Ve=W.a.div(b||(b=Object(P.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n"]))),Je=function(e){var t,n,r=e.data,a=e.timezone;return Object(C.jsxs)(Ee,{children:[Object(C.jsx)(Ve,{children:Object(C.jsx)("span",{children:(t=r.time,n=a,new Date(1e3*(t+(n||0))).toLocaleDateString("en-US",{weekday:"long"}))})}),Object(C.jsx)(Ve,{children:Object(C.jsx)(xe,{name:pe(r.weatherConditions[0].icon),size:"4em"})}),Object(C.jsxs)(Ve,{children:[Object(C.jsx)(ye,{name:"WiBarometer",text:r.pressure,unit:"hPa"}),Object(C.jsx)(ye,{name:"WiHumidity",text:r.humidity,unit:"%"})]}),Object(C.jsxs)(Ve,{children:[Object(C.jsx)(ye,{name:"WiSunrise",text:ge(r.sunrise,a)}),Object(C.jsx)(ye,{name:"WiSunset",text:ge(r.sunset,a)})]})]})},Ue=n(144),qe=function(e){var t=e.data;return Object(C.jsx)(Ue.a,{data:t,margin:{top:50,right:110,bottom:50,left:60},xScale:{type:"point"},yScale:{type:"linear",min:"auto",max:"auto",reverse:!1},yFormat:" >-.1f",axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Day",legendOffset:36,legendPosition:"middle"},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Degrees (\xbaC)",legendOffset:-30,legendPosition:"middle"},pointSize:10,pointColor:{theme:"background"},pointBorderWidth:2,pointBorderColor:{from:"serieColor"},useMesh:!0,curve:"natural",legends:[{anchor:"bottom-right",direction:"column",justify:!1,translateX:105,translateY:0,itemsSpacing:0,itemDirection:"left-to-right",itemWidth:100,itemHeight:20,itemOpacity:.75,symbolSize:8,symbolShape:"circle",symbolBorderColor:"rgba(0, 0, 0, .5)",effects:[{on:"hover",style:{itemBackground:"rgba(0, 0, 0, .03)",itemOpacity:1}}]}]})},Ge=function(e){return console.log(Math.round(10*e)),Math.round(10*e)/10},Xe=function(e){var t=e.timezone;return e.forecasts.reduce((function(e,n){var r=function(e,t){var n,r;return null!==(n=null===(r=Oe(e,t).match(/\d{4}-\d{2}-\d{2}/))||void 0===r?void 0:r[0].split("-").reverse().join("-"))&&void 0!==n?n:"N/A"}(n.time,t);return Ye(e,"Max temperature",{x:r,y:Ge(n.temperature.real.max)}),Ye(e,"Min temperature",{x:r,y:Ge(n.temperature.real.min)}),Ye(e,"Feels like day",{x:r,y:Ge(n.temperature.feelsLike.day)}),Ye(e,"Feels like night",{x:r,y:Ge(n.temperature.feelsLike.night)}),e}),Qe())},Ye=function(e,t,n){var r=e.find((function(e){return e.id===t}));r&&r.data.push(n)},Qe=function(){return[{id:"Max temperature",color:"hsl(194, 70%, 50%)",data:[]},{id:"Min temperature",color:"hsl(5, 70%, 50%)",data:[]},{id:"Feels like day",color:"#FF5733",data:[]},{id:"Feels like night",color:"#581845",data:[]}]},Ze=W.a.div(y||(y=Object(P.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow-y: auto;\n  height: 100%;\n"]))),$e=W.a.div(g||(g=Object(P.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: start;\n"]))),et=W.a.div(O||(O=Object(P.a)(["\n  min-height:350px;\n  height: 0.5vh;\n    width: auto;\n"]))),tt=function(){var e=Y(Re);return Object(C.jsx)(C.Fragment,{children:e?Object(C.jsxs)(Ze,{children:[Object(C.jsx)($e,{children:e.forecasts.slice(1,6).map((function(t,n){return Object(C.jsx)(Je,{data:t,timezone:e.timezone},n)}))}),Object(C.jsx)(et,{children:Object(C.jsx)(qe,{data:Xe(Object(R.a)(Object(R.a)({},e),{},{forecasts:e.forecasts.slice(1,6)}))})})]}):Object(C.jsx)("div",{children:"Please, search for forecasts"})})},nt=function(){var e=Y(de),t=Y(te),n=X();return Object(v.useEffect)((function(){e&&(null===t||void 0===t?void 0:t.length)>0&&He({lat:e.latitude,lon:e.longitude,appId:t}).then((function(e){return n(_e(e))}))}),[t,e,n]),Object(C.jsx)(tt,{})},rt=function(){var e,t=Y(te);return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(D.c,{theme:L,children:(e=t,e&&""!==e?Object(C.jsxs)(B,{children:[Object(C.jsx)(F,{children:Object(C.jsx)(Le,{})}),Object(C.jsx)(H,{children:Object(C.jsx)(Se,{})}),Object(C.jsx)(A,{children:Object(C.jsx)(nt,{})})]}):Object(C.jsx)(De,{}))})})},at=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,289)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))},it=function(e){return function(e){return function(t){return ie.match(t)&&localStorage.setItem(Z,t.payload),e(t)}}},ct=Object(Q.a)({reducer:{currentWeather:he,apiData:ce,fiveDayForecast:Ne},middleware:function(e){return e().concat(it)}});S.a.render(Object(C.jsx)(w.a.StrictMode,{children:Object(C.jsx)(G.a,{store:ct,children:Object(C.jsx)(rt,{})})}),document.getElementById("root")),at()}},[[286,1,2]]]);
//# sourceMappingURL=main.3099d696.chunk.js.map