(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(25)},24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(9),s=a.n(c),i=a(11),o=a(2),r=a(3),d=a(6),h=a(4),u=a(5),m=a(1),f=a(10),b=a.n(f),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).newTitle=function(e){var t=a.state.note;t[a.props.selected].body=e.target.value;var n=t[a.props.selected].body.length<25&&-1!==t[a.props.selected]?t[a.props.selected].body:t[a.props.selected].body.substring(0,22);return n.length<1?"Empty note":n},a.state={note:[{id:0,title:"",body:"",date:"",haspictures:!1,canedit:!0}],selected:0},a.contentEditable=l.a.createRef(),a.handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.data!==this.props.data&&this.setState({note:this.props.data})}},{key:"componentDidMount",value:function(){this.setState({note:this.props.default})}},{key:"handleChange",value:function(e){var t=this.state.note;t[this.props.selected].body=e.target.value,this.setState({note:t}),this.props.handlechange(e.target.value,this.props.selected,this.newTitle(e))}},{key:"render",value:function(){return l.a.createElement("div",{id:"right-panel"},l.a.createElement("div",{id:"drag"}),l.a.createElement("h3",{className:"title"},this.state.note[this.props.selected].title),l.a.createElement(b.a,{id:"editor",className:"editor",name:"editor",innerRef:this.contentEditable,html:this.state.note[this.props.selected].body,disabled:!this.props.caneditnote,onChange:this.handleChange,tagName:"div"}))}}]),t}(n.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"left-panel"},l.a.createElement("ul",null,this.props.selected<0?"":this.props.notes.map(function(t){return l.a.createElement("li",{key:t.id,onClick:e.props.handleclick.bind(e,t),className:e.props.notes[e.props.selected].id===t.id?"selected":""},l.a.createElement("h2",null,t.title),l.a.createElement("p",null,t.date))})))}}]),t}(n.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"lock-btn",id:"lock-btn",onClick:this.props.editorlock},l.a.createElement("i",{className:this.props.caneditnote?"fas fa-unlock":"fas fa-lock locked"}))}}]),t}(n.Component);var k=function(){return l.a.createElement("h1",{className:"toolbar-title"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"96",height:"31"},l.a.createElement("g",{fill:"none",fillRule:"evenodd"},l.a.createElement("text",{fill:"#75B8BB",fontFamily:"Nunito-ExtraLight, Nunito",fontSize:"22",fontWeight:"300",transform:"translate(1 1)"},l.a.createElement("tspan",{x:"39",y:"22"},"Notes")),l.a.createElement("g",{fillRule:"nonzero",stroke:"#75B8BB",strokeLinecap:"round"},l.a.createElement("path",{d:"M7.885 14.77l5.164-2.704M8.377 14.77l6.885 3.197M7.885 14.77v10.574M23.115 14.77l-5.164-2.704M22.623 14.77l-6.885 3.197M23.115 14.77v10.574M1.69 22.439l3.49-1.521M1.436 22.59l1.336 3.564M1.984 22.64l13.107 6.644M29.326 22.439l-3.49-1.521M29.58 22.59l-1.336 3.564M29.033 22.64l-13.108 6.644M15.508 1v28.525M11.574 5.18L15.508 1M19.443 5.18L15.508 1"})))))};var g=function(e){return l.a.createElement("div",{className:"menu-controls"},l.a.createElement("ul",null,l.a.createElement("li",{className:"btn",onClick:e.deletenote},l.a.createElement("i",{className:"fas fa-trash-alt"})),l.a.createElement("li",{className:"btn",onClick:e.addnote},l.a.createElement("i",{className:"fas fa-edit"})),l.a.createElement("li",{className:"btn",onClick:e.textformat,style:!0===e.textformatactive?{backgroundColor:"#5ea5a8"}:null},l.a.createElement("i",{className:"fas fa-font"})),l.a.createElement("li",{className:"btn"},l.a.createElement("i",{className:"fas fa-images"})),l.a.createElement("li",{className:"btn"},l.a.createElement("i",{className:"fas fa-list-ul"}))))},N=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"menu-search"},l.a.createElement("input",{type:"text",className:"search-input"}),l.a.createElement("i",{className:"fas fa-search search-btn"}))}}]),t}(n.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"toolbar"},l.a.createElement(k,null),l.a.createElement("div",{className:"toolbar-menu"},l.a.createElement(g,{addnote:this.props.addnote,deletenote:this.props.deletenote,textformat:this.props.textformat,textformatactive:this.props.textformatactive}),l.a.createElement(N,null)))}}]),t}(n.Component);var j=function(e){return l.a.createElement("div",{className:"text-format",style:e.visible?{display:"block"}:{display:"none"}},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-bold text-format_icon"})),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-italic text-format_icon"})),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-underline text-format_icon"})),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-strikethrough text-format_icon"}))))};var y=function(){var e=!1,t=document.getElementById("container"),a=document.getElementById("left-panel"),n=document.getElementById("right-panel");document.getElementById("drag").onmousedown=function(t){e=!0,t.clientX},document.onmousemove=function(l){if(e){var c=t.clientWidth-(l.clientX-t.offsetLeft);a.style.right=c+"px",n.style.width=c+"px"}},document.onmouseup=function(t){e=!1}},x=a(7),C=a.n(x),w=(a(24),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).active=function(){return 2===a.state.buttonactive?(a.setState({buttonactive:0}),0):(a.setState({buttonactive:2}),2)},a.state={note:[{id:C()(),title:"Default note",body:"",date:a.setNewDate(),haspictures:!1,canedit:!0}],selected:0,buttonactive:0,textformatvisible:!1},a.handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a.handleNoteClicked=a.handleNoteClicked.bind(Object(m.a)(Object(m.a)(a))),a.handleSelected=a.handleSelected.bind(Object(m.a)(Object(m.a)(a))),a.handleAddNote=a.handleAddNote.bind(Object(m.a)(Object(m.a)(a))),a.handleDeleteNote=a.handleDeleteNote.bind(Object(m.a)(Object(m.a)(a))),a.setNewDate=a.setNewDate.bind(Object(m.a)(Object(m.a)(a))),a.handleLockClicked=a.handleLockClicked.bind(Object(m.a)(Object(m.a)(a))),a.handleTextFormat=a.handleTextFormat.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){y()}},{key:"setNewDate",value:function(){var e=new Date,t=e.getFullYear(),a=e.getMonth()<10?"0"+(e.getMonth()+1):e.getMonth()+1,n=e.getDate()<10?"0"+e.getDate():e.getDate();return"".concat(t,"-").concat(a,"-").concat(n)}},{key:"handleNoteClicked",value:function(e){this.setState({selected:this.state.note.indexOf(e)})}},{key:"handleLockClicked",value:function(){var e=this.state.note;e[this.state.selected].canedit=!e[this.state.selected].canedit,this.setState({notes:e})}},{key:"handleChange",value:function(e,t,a){var n=this.state.note;n[t].title=a,n[t].body=e,this.setState({note:n})}},{key:"handleSelected",value:function(e){this.setState({selected:e})}},{key:"handleAddNote",value:function(){var e={id:C()(),title:"New note",body:"",date:this.setNewDate(),haspictures:!1,canedit:!0};this.setState({note:[].concat(Object(i.a)(this.state.note),[e])})}},{key:"handleDeleteNote",value:function(){var e=this.state.note;this.state.note.length>1&&(e.splice(this.state.selected,1),this.setState({note:e,selected:this.state.selected>0?this.state.selected-1:0}))}},{key:"handleTextFormat",value:function(){console.log("text format"),document.execCommand("cut")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App",id:"container"},l.a.createElement(E,{editorlock:this.handleLockClicked,caneditnote:this.state.note[this.state.selected].canedit}),l.a.createElement(O,{addnote:this.handleAddNote,deletenote:this.handleDeleteNote,textformat:function(){e.setState({textformatvisible:!e.state.textformatvisible})},textformatactive:this.state.textformatvisible}),l.a.createElement(j,{visible:this.state.textformatvisible}),l.a.createElement(v,{selected:this.state.selected,notes:this.state.note,handleclick:this.handleNoteClicked}),l.a.createElement(p,{default:this.state.note,handlechange:this.handleChange,handleselected:this.handleSelected,selected:this.state.selected,data:this.state.note,caneditnote:this.state.note[this.state.selected].canedit}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.fda8a9dc.chunk.js.map