(this["webpackJsonptrello-clone"]=this["webpackJsonptrello-clone"]||[]).push([[0],{110:function(t,e,a){},119:function(t,e,a){},120:function(t,e,a){},121:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(25),c=a.n(i),d=a(4),s=a(5),o=a(7),l=a(6),u=(a(61),a(62),a(8)),p=a(13),j=a(2),h=a(3),b=a.n(h),v=a(12),O=(a(68),a(69),a(70),a(28)),f=(a(71),a(1)),g=function(t){var e=t.handleSave,a=t.saveLabel,n=t.handleDelete,r=t.handleCancel;return Object(f.jsxs)("div",{className:"Edit-Buttons",children:[Object(f.jsx)("div",{tabIndex:"0",className:"Edit-Button",style:{backgroundColor:"#5aac44"},onClick:e,children:a}),n&&Object(f.jsx)("div",{tabIndex:"0",className:"Edit-Button",style:{backgroundColor:"#EA2525",marginLeft:0},onClick:n,children:"Delete"}),Object(f.jsx)("div",{tabIndex:"0",className:"Edit-Button-Cancel",onClick:r,children:Object(f.jsx)("ion-icon",{name:"close"})})]})},x=function(t){Object(o.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={text:t.props.text||""},t.handleChangeText=function(e){return t.setState({text:e.target.value})},t.onEnter=function(e){var a=t.state.text;13===e.keyCode&&(e.preventDefault(),t.props.onSave(a))},t}return Object(s.a)(a,[{key:"render",value:function(){var t=this.state.text,e=this.props,a=e.onSave,n=e.onCancel,r=e.onDelete,i=e.adding;return Object(f.jsxs)("div",{className:"Edit-Card",children:[Object(f.jsx)("div",{className:"Card",children:Object(f.jsx)(O.a,{autoFocus:!0,className:"Edit-Card-Textarea",placeholder:"Enter the text for this card...",value:t,onChange:this.handleChangeText,onKeyDown:this.onEnter})}),Object(f.jsx)(g,{handleSave:function(){return a(t)},saveLabel:i?"Add card":"Save",handleDelete:r,handleCancel:n})]})}}]),a}(n.Component),y=function(t){Object(o.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={hover:!1,editing:!1},t.startHover=function(){return t.setState({hover:!0})},t.endHover=function(){return t.setState({hover:!1})},t.startEditing=function(){return t.setState({hover:!1,editing:!0,text:t.props.card.text})},t.endEditing=function(){return t.setState({hover:!1,editing:!1})},t.editCard=function(){var e=Object(v.a)(b.a.mark((function e(a){var n,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.props,r=n.card,i=n.dispatch,t.endEditing(),i({type:"CHANGE_CARD_TEXT",payload:{cardId:r._id,cardText:a}});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.deleteCard=Object(v.a)(b.a.mark((function e(){var a,n,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.props,n=a.listId,r=a.card,i=a.dispatch,window.confirm("Are you sure to delete this card?")&&i({type:"DELETE_CARD",payload:{cardId:r._id,listId:n}});case 2:case"end":return e.stop()}}),e)}))),t}return Object(s.a)(a,[{key:"render",value:function(){var t=this,e=this.props,a=e.card,n=e.index,r=this.state,i=r.hover;return r.editing?Object(f.jsx)(x,{text:a.text,onSave:this.editCard,onDelete:this.deleteCard,onCancel:this.endEditing}):Object(f.jsx)(p.b,{draggableId:a._id,index:n,children:function(e,n){return Object(f.jsxs)("div",Object(j.a)(Object(j.a)(Object(j.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{className:"Card",onMouseEnter:t.startHover,onMouseLeave:t.endHover,children:[i&&Object(f.jsx)("div",{className:"Card-Icons",children:Object(f.jsx)("div",{className:"Card-Icon",onClick:t.startEditing,children:Object(f.jsx)("ion-icon",{name:"create"})})}),a.text]}))}})}}]),a}(n.Component),C=Object(u.b)((function(t,e){return{card:t.cardsById[e.cardId]}}))(y),I=(a(110),function(t){Object(o.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).ref=r.a.createRef(),t.onEnter=function(e){13===e.keyCode&&(e.preventDefault(),t.props.saveList())},t.handleClick=function(e){t.ref.current.contains(e.target)||t.props.onClickOutside()},t}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleClick,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClick,!1)}},{key:"render",value:function(){var t=this.props,e=t.title,a=t.handleChangeTitle,n=t.deleteList;return Object(f.jsxs)("div",{className:"List-Title-Edit",ref:this.ref,children:[Object(f.jsx)(O.a,{autoFocus:!0,className:"List-Title-Textarea",placeholder:"Enter list title...",value:e,onChange:a,onKeyDown:this.onEnter,style:{width:n?220:245}}),n&&Object(f.jsx)("ion-icon",{name:"trash",onClick:n})]})}}]),a}(n.Component)),L=a(10),T=a.n(L),m=function(t){Object(o.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={editingTitle:!1,title:t.props.list.title,addingCard:!1},t.toggleAddingCard=function(){return t.setState({addingCard:!t.state.addingCard})},t.addCard=function(){var e=Object(v.a)(b.a.mark((function e(a){var n,r,i,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.props,r=n.listId,i=n.dispatch,t.toggleAddingCard(),c=T.a.generate(),i({type:"ADD_CARD",payload:{cardText:a,cardId:c,listId:r}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.toggleEditingTitle=function(){return t.setState({editingTitle:!t.state.editingTitle})},t.handleChangeTitle=function(e){return t.setState({title:e.target.value})},t.editListTitle=Object(v.a)(b.a.mark((function e(){var a,n,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.props,n=a.listId,r=a.dispatch,i=t.state.title,t.toggleEditingTitle(),r({type:"CHANGE_LIST_TITLE",payload:{listId:n,listTitle:i}});case 4:case"end":return e.stop()}}),e)}))),t.deleteList=Object(v.a)(b.a.mark((function e(){var a,n,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.props,n=a.listId,r=a.list,i=a.dispatch,window.confirm("Are you sure to delete this list?")&&i({type:"DELETE_LIST",payload:{listId:n,cards:r.cards}});case 2:case"end":return e.stop()}}),e)}))),t}return Object(s.a)(a,[{key:"render",value:function(){var t=this,e=this.props,a=e.list,n=e.index,r=this.state,i=r.editingTitle,c=r.addingCard,d=r.title;return Object(f.jsx)(p.b,{draggableId:a._id,index:n,children:function(e,n){return Object(f.jsxs)("div",Object(j.a)(Object(j.a)(Object(j.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{className:"List",children:[i?Object(f.jsx)(I,{list:a,title:d,handleChangeTitle:t.handleChangeTitle,saveList:t.editListTitle,onClickOutside:t.editListTitle,deleteList:t.deleteList}):Object(f.jsx)("div",{className:"List-Title",onClick:t.toggleEditingTitle,children:a.title}),Object(f.jsx)(p.c,{droppableId:a._id,children:function(e,n){return Object(f.jsxs)("div",{ref:e.innerRef,className:"Lists-Cards",children:[a.cards&&a.cards.map((function(t,e){return Object(f.jsx)(C,{cardId:t,index:e,listId:a._id},t)})),e.placeholder,c?Object(f.jsx)(x,{onSave:t.addCard,onCancel:t.toggleAddingCard,adding:!0}):Object(f.jsxs)("div",{className:"Toggle-Add-Card",onClick:t.toggleAddingCard,children:[Object(f.jsx)("ion-icon",{name:"add"})," Add a card"]})]})}})]}))}})}}]),a}(n.Component),E=Object(u.b)((function(t,e){return{list:t.listsById[e.listId]}}))(m),A=(a(119),function(t){Object(o.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={title:""},t.handleChangeTitle=function(e){return t.setState({title:e.target.value})},t.createList=Object(v.a)(b.a.mark((function e(){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.state.title,n=t.props.dispatch,t.props.toggleAddingList(),n({type:"ADD_LIST",payload:{listId:T.a.generate(),listTitle:a}});case 4:case"end":return e.stop()}}),e)}))),t}return Object(s.a)(a,[{key:"render",value:function(){var t=this.props.toggleAddingList,e=this.state.title;return Object(f.jsxs)("div",{className:"Add-List-Editor",children:[Object(f.jsx)(I,{title:e,handleChangeTitle:this.handleChangeTitle,onClickOutside:t,saveList:this.createList}),Object(f.jsx)(g,{handleSave:this.createList,saveLabel:"Add list",handleCancel:t})]})}}]),a}(n.Component)),D=Object(u.b)()(A),S=function(t){Object(o.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={addingList:!1},t.toggleAddingList=function(){return t.setState({addingList:!t.state.addingList})},t.handleDragEnd=function(e){var a=e.source,n=e.destination,r=e.type;if(n){var i=t.props.dispatch;"COLUMN"!==r?a.index===n.index&&a.droppableId===n.droppableId||i({type:"MOVE_CARD",payload:{sourceListId:a.droppableId,destListId:n.droppableId,oldCardIndex:a.index,newCardIndex:n.index}}):a.index!==n.index&&i({type:"MOVE_LIST",payload:{oldListIndex:a.index,newListIndex:n.index}})}},t}return Object(s.a)(a,[{key:"render",value:function(){var t=this,e=this.props.board,a=this.state.addingList;return Object(f.jsx)(p.a,{onDragEnd:this.handleDragEnd,children:Object(f.jsx)(p.c,{droppableId:"board",direction:"horizontal",type:"COLUMN",children:function(n,r){return Object(f.jsxs)("div",{className:"Board",ref:n.innerRef,children:[e.lists.map((function(t,e){return Object(f.jsx)(E,{listId:t,index:e},t)})),n.placeholder,Object(f.jsx)("div",{className:"Add-List",children:a?Object(f.jsx)(D,{toggleAddingList:t.toggleAddingList}):Object(f.jsxs)("div",{onClick:t.toggleAddingList,className:"Add-List-Button",children:[Object(f.jsx)("ion-icon",{name:"add"})," Add a list"]})})]})}})})}}]),a}(n.Component),k=Object(u.b)((function(t){return{board:t.board}}))(S),w=function(t){Object(o.a)(a,t);var e=Object(l.a)(a);function a(){return Object(d.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("div",{className:"Header",children:"React Trello Clone"}),Object(f.jsx)(k,{})]})}}]),a}(n.Component),_=a(38),N=a(39),R=a(30),B=a(37),H=a(9),M=a(56),F=a.n(M);var G=Object(H.c)({board:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{lists:[]},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_LIST":var a=e.payload.listId;return{lists:[].concat(Object(B.a)(t.lists),[a])};case"MOVE_LIST":var n=e.payload,r=n.oldListIndex,i=n.newListIndex,c=Array.from(t.lists),d=c.splice(r,1),s=Object(R.a)(d,1),o=s[0];return c.splice(i,0,o),{lists:c};case"DELETE_LIST":var l=e.payload.listId,u=function(t){return t!==l},p=t.lists.filter(u);return{lists:p};default:return t}},listsById:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_LIST":var a=e.payload,n=a.listId,r=a.listTitle;return Object(j.a)(Object(j.a)({},t),{},{[n]:{_id:n,title:r,cards:[]}});case"CHANGE_LIST_TITLE":var i=e.payload,c=i.listId,d=i.listTitle;return Object(j.a)(Object(j.a)({},t),{},{[c]:Object(j.a)(Object(j.a)({},t[c]),{},{title:d})});case"DELETE_LIST":var s=e.payload.listId,o=(t[s],Object(_.a)(t,[s].map(N.a)));return o;case"ADD_CARD":var l=e.payload,u=l.listId,p=l.cardId;return Object(j.a)(Object(j.a)({},t),{},{[u]:Object(j.a)(Object(j.a)({},t[u]),{},{cards:[].concat(Object(B.a)(t[u].cards),[p])})});case"MOVE_CARD":var h=e.payload,b=h.oldCardIndex,v=h.newCardIndex,O=h.sourceListId,f=h.destListId;if(O===f){var g=Array.from(t[O].cards),x=g.splice(b,1),y=Object(R.a)(x,1),C=y[0];return g.splice(v,0,C),Object(j.a)(Object(j.a)({},t),{},{[O]:Object(j.a)(Object(j.a)({},t[O]),{},{cards:g})})}var I=Array.from(t[O].cards),L=I.splice(b,1),T=Object(R.a)(L,1),m=T[0],E=Array.from(t[f].cards);return E.splice(v,0,m),Object(j.a)(Object(j.a)({},t),{},{[O]:Object(j.a)(Object(j.a)({},t[O]),{},{cards:I}),[f]:Object(j.a)(Object(j.a)({},t[f]),{},{cards:E})});case"DELETE_CARD":var A=e.payload,D=A.cardId,S=A.listId,k=function(t){return t!==D};return Object(j.a)(Object(j.a)({},t),{},{[S]:Object(j.a)(Object(j.a)({},t[S]),{},{cards:t[S].cards.filter(k)})});default:return t}},cardsById:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_CARD":var a=e.payload,n=a.cardText,r=a.cardId;return Object(j.a)(Object(j.a)({},t),{},{[r]:{text:n,_id:r}});case"CHANGE_CARD_TEXT":var i=e.payload,c=i.cardText,d=i.cardId;return Object(j.a)(Object(j.a)({},t),{},{[d]:Object(j.a)(Object(j.a)({},t[d]),{},{text:c})});case"DELETE_CARD":var s=e.payload.cardId,o=(t[s],Object(_.a)(t,[s].map(N.a)));return o;case"DELETE_LIST":var l=e.payload.cards;return Object.keys(t).filter((function(t){return!l.includes(t)})).reduce((function(e,a){return Object(j.a)(Object(j.a)({},e),{},{[a]:t[a]})}),{});default:return t}}}),J=function(){try{var t=localStorage.getItem("state");if(null===t)return;return JSON.parse(t)}catch(e){return}}(),P=Object(H.e)(G,J);P.subscribe(F()((function(){!function(t){try{var e=JSON.stringify(t);localStorage.setItem("state",e)}catch(a){}}(P.getState())}),1e3)),console.log(P.getState()),P.getState().board.lists.length||(console.log("SEED"),function(t){console.log("Insert first list");var e=T.a.generate();t.dispatch({type:"ADD_LIST",payload:{listId:e,listTitle:"First list"}}),t.dispatch({type:"ADD_CARD",payload:{listId:e,cardId:T.a.generate(),cardText:"First card"}}),t.dispatch({type:"ADD_CARD",payload:{listId:e,cardId:T.a.generate(),cardText:"Second card"}}),console.log("Insert second list");var a=T.a.generate();t.dispatch({type:"ADD_LIST",payload:{listId:a,listTitle:"Second list"}}),t.dispatch({type:"ADD_CARD",payload:{listId:a,cardId:T.a.generate(),cardText:"Card 1"}}),t.dispatch({type:"ADD_CARD",payload:{listId:a,cardId:T.a.generate(),cardText:"Card 2"}})}(P));var V=P;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(120);var U=document.getElementById("root");c.a.render(Object(f.jsx)(u.a,{store:V,children:Object(f.jsx)(w,{})}),U),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},61:function(t,e,a){},62:function(t,e,a){},68:function(t,e,a){},69:function(t,e,a){},70:function(t,e,a){},71:function(t,e,a){}},[[121,1,2]]]);
//# sourceMappingURL=main.7f8ce3ef.chunk.js.map