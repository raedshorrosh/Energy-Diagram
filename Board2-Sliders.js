

  
[[jsxgraph width="800px" input-ref-ans_DH1='DH1Ref' input-ref-ans_DH2='DH2Ref' input-ref-ans_Ea1='Ea1Ref' input-ref-ans_Ea2='Ea2Ref' input-ref-ans_Ear1='Ear1Ref' input-ref-ans_Ear2='Ear2Ref' input-ref-ans_react='reactRef' input-ref-ans_prod='prodRef' input-ref-ans_leftslider='leftslider' input-ref-ans_rightslider='rightslider' input-ref-ans_topslider='topslider']]

var nameRef ={reacttxt:{#reacttxt#}, prodtxt:{#prodtxt#},mrkH:'',mrkE:'', p:["","","","","",""],chkd:false};
    function isless(x, y) {
        return (x < y)
    };

// initialize mathJax

JXG.Options.layer.text = 0;
var board = JXG.JSXGraph.initBoard(divid, {boundingbox: [-20, 20, 20, -20], axis: false, showCopyright: false,showNavigation:false,pan:{enabled:false},zoom:{enabled:false},resize: {enabled:false}});

var
a = {#a#},
lineL = {#lineL#};
var TF;
if ({#withLabel#}==1) {TF=true} else {TF=false};


var s = board.create('slider', [
[-12, -16],
[-12, 16],
[-15, {#leftY#}, 15]
],{withLabel:TF,fillColor: 'yellow',fixed:function(){return nameRef.chkd}});

var s2 = board.create('slider', [
[19, -16],
[19, 16],
[-15, {#rightY#}, 15]
],{withLabel:TF,fillColor: 'blue',fixed:function(){return nameRef.chkd}});
var s3 = board.create('slider', [
[-12, 18],
[19, 18],
[1, 15, 15]
],{withLabel:TF,fillColor: 'red',fixed:function(){return nameRef.chkd}});


var leftY = function() {
return s.Value();
};
var rightY = function() {
return s2.Value();
};
var topL = function() {
return s3.Value();
};

var f = function(x) {
return -(x - a) * (x - a) + topL();
};
var rg = function(x) {
return a + Math.sqrt(topL() - x)
};
var lg = function(x) {
return a - Math.sqrt(topL() - x)
};

var leftX2 = function() {
return lg(leftY());
},
leftX1 = function() {
return leftX2() - lineL;
},
rightX1 = function() {
return rg(rightY());
},
rightX2 = function() {
return rightX1() + lineL;
},
leftL = [
[leftX1, leftY],
[leftX2, leftY]
],
rightL = [
[rightX1, rightY],
[rightX2, rightY]
];

/*--------plotting the axis-------------------------------------*/
var y_axis = [
[leftX1, -16],
[leftX1, 16]
];
var x_axis = [
[function() {
return leftX1() - 0.15;
}, -16],
[18, -16]
];

/*----- plotting dotted lines*/
var dotted1 = [
[0, 0],
[0, 0]
],
dotted2 = [
[0, 0],
[0, 0]
],
dotted3 = [
[0, 0],
[0, 0]
];
var bb = function() {return (isless(rightY(), leftY())) ;};
dotted1 = [
[function() {
if (bb()) {
return leftX2();
} else {
// return 2 * a - rightX1();
return leftX1();
}
},
function() {
if (bb()) {
return leftY();
} else {
return rightY();
}
}
],
[function() {
if (bb()) {
return 2 * a - leftX2();
} else {
return rightX1();
}
},
function() {
if (bb()) {
return leftY();
} else {
return rightY();
}
}
]
];

dotted2 = [
[function() {
if (bb()) {
return leftX1();
} else {
return leftX2();
}
},
function() {
if (bb()) {
return rightY();
} else {
return leftY();
}
}
],
[
function() {
if (bb()) {
return rightX1();
} else {
return rightX2();
}
},
function() {
if (bb()) {
return rightY();
} else {
return leftY();
}
}
]
];
dotted3 = [
[leftX1, topL],
[rightX2, topL]
];

//
var leftLine = board.create('segment', leftL, {
fixed: true
}),
rightLine = board.create('segment', rightL, {
fixed: true
});

var
dotted_1 = board.create('segment', dotted1, {
fixed: true,
dash: 2
}),

dotted_2 = board.create('segment', dotted2, {
fixed: true,
dash: 2
}),

dotted_3 = board.create('segment', dotted3, {
fixed: true,
dash: 2
});

board.create('functiongraph', [f, leftX2, rightX1]);
//draw the axis
var verAxis=board.create('arrow', y_axis, {
strokeColor: 'black',
strokeWidth: 3,
fixed: true
});
var horAxis=board.create('arrow', x_axis, {
strokeColor: 'black',
strokeWidth: 3,
fixed: true
});
board.create('text',[function(){return leftX1()-0.5},{#y_label#},{#y_title#}],{cssStyle:'direction:rtl',fontSize: 18, fixed:true,color:'black', rotate: 90,showInfobox:false, useMathjax: true,display: 'internal'});

board.create('text',[rightX1(),-17,{#x_title#}],{fixed:true, fontSize: 18, color:'black',showInfobox:false, useMathjax: true});
board.update();

//labels
var toscale = function(x) {
let max={#maxE#}, min={#minE#};
//var temp= {#E(x)#};
var temp =(max-min)*(x+16)/32+min;
return temp.toFixed(0);

};
if (TF) {
var label1 = board.create('text', [function() {
return leftX1() - 3.5
}, function() {
return leftY()
}, function() {
return leftY().toFixed(2)
}], {
useMathJax: true,fontSize: 14
});
var label2 = board.create('text', [function() {
return leftX1() - 3.5
}, function() {
return rightY()
}, function() {
return rightY().toFixed(2)
}], {
useMathJax: true,fontSize: 14
});
var label3 = board.create('text', [function() {
return leftX1() - 3.5
}, function() {
return topL()
}, function() {
return topL().toFixed(2)
}], {
useMathJax: true,fontSize: 14
});
}
//-------------
var fxd=function(){return nameRef.chkd};

var wd=-4;
// draw the arrow;
var a_arp1= board.create('point',{#arrow1#},{name:function(){return nameRef.p[0]}, face:'[]',size:3,attractors:[leftLine,rightLine,dotted_1,dotted_2,dotted_3],attractorDistance:1,snatchDistance:2,showInfobox:false,fixed:fxd});

var b_arp1= board.create('point',[{#arrow1#}[0],{#arrow1#}[1]-wd],{name:function(){return nameRef.p[1]},size:1,attractors:[leftLine,rightLine,dotted_1,dotted_2,dotted_3],attractorDistance:1, snatchDistance:2,showInfobox:false,fixed:fxd});
var Arrow1=board.create('segment',[a_arp1,b_arp1],{strokeColor:'red',lastarrow: {type: 2, size: 6}});

let txtstyle='direction:ltr';
//arrow1 text

var mrk1=function(){return nameRef.mrkH},mrk2=function(){return nameRef.mrkE};

var temptext=function(){return ' '+{#arrow1txt#}+'='+(toscale(b_arp1.Y())-toscale(a_arp1.Y())+' kJ'+mrk1())};
board.create('text',[{#arrow1#}[0],{#arrow1#}[1]-wd/2,temptext],{cssStyle:txtstyle,fontSize: 15, color:'black',attractors:[Arrow1],attractorDistance:10,snatchDistance:1000,showInfobox:false,useMathJax: true});

//----Arrow2-------
var a_arp2= board.create('point',{#arrow2#},{name:function(){return nameRef.p[2]}, face:'[]',size:3,attractors:[leftLine,rightLine,dotted_1,dotted_2,dotted_3],attractorDistance:1,snatchDistance:2,showInfobox:false,fixed:fxd});

var b_arp2= board.create('point',[{#arrow2#}[0],{#arrow2#}[1]-wd],{name:function(){return nameRef.p[3]},size:1,attractors:[leftLine,rightLine,dotted_1,dotted_2,dotted_3],attractorDistance:1, snatchDistance:2,showInfobox:false,fixed:fxd});
var Arrow2=board.create('segment',[a_arp2,b_arp2],{strokeColor:'red',lastarrow: {type: 2, size: 6}});

//arrow2 text
var temptext=function(){return ' '+{#arrow2txt#}+'='+(toscale(b_arp2.Y())-toscale(a_arp2.Y())+' kJ'+mrk2())};
board.create('text',[{#arrow2#}[0],{#arrow2#}[1]-wd/2,temptext],{cssStyle:txtstyle,fontSize: 15, color:'black',attractors:[Arrow2],attractorDistance:10,snatchDistance:1000,showInfobox:false,useMathJax: true});

//---Arrow3-------
var a_arp3= board.create('point',{#arrow3#},{name:function(){return nameRef.p[4]}, face:'[]',size:3,attractors:[leftLine,rightLine,dotted_1,dotted_2,dotted_3],attractorDistance:1,snatchDistance:2,showInfobox:false,fixed:fxd});

var b_arp3= board.create('point',[{#arrow3#}[0],{#arrow3#}[1]-wd],{name:function(){return nameRef.p[5]},size:1,attractors:[leftLine,rightLine,dotted_1,dotted_2,dotted_3],attractorDistance:1, snatchDistance:2,showInfobox:false,fixed:fxd});
var Arrow3=board.create('segment',[a_arp3,b_arp3],{strokeColor:'red',lastarrow: {type: 2, size: 6}});

//arrow3 text

board.create('text',[{#arrow3#}[0],{#arrow3#}[1]-wd/2,function(){return {#arrow3txt#}}],{fontSize: 15, color:'black',attractors:[Arrow3],attractorDistance:10,snatchDistance:1000,showInfobox:false,useMathJax: true});




stack_jxg.bind_slider(leftslider,s);board.update();
var stateInput = document.getElementById(leftslider); stateInput.value=s.Value();stateInput.dispatchEvent(new Event('change'));
stack_jxg.bind_slider(rightslider,s2);board.update();
stateInput = document.getElementById(rightslider); stateInput.value=s2.Value();stateInput.dispatchEvent(new Event('change'));
stack_jxg.bind_slider(topslider,s3);board.update();
stateInput = document.getElementById(topslider); stateInput.value=s3.Value();stateInput.dispatchEvent(new Event('change'));

stack_jxg.bind_point(DH1Ref,a_arp1);
stack_jxg.bind_point(DH2Ref,b_arp1);
stack_jxg.bind_point(Ea1Ref,a_arp2);
stack_jxg.bind_point(Ea2Ref,b_arp2);
stack_jxg.bind_point(Ear1Ref,a_arp3);
stack_jxg.bind_point(Ear2Ref,b_arp3);
board.update();

//------draw text---------

var rctOndrag=function(){
var newState = {'x':reactants.X(), 'y':reactants.Y()};
stateInput.value = JSON.stringify(newState);stateInput.dispatchEvent(new Event('change'));
board.update();
};
var prdOndrag=function(){
var newState = {'x':products.X(), 'y':products.Y()};
stateInput2.value = JSON.stringify(newState);stateInput2.dispatchEvent(new Event('change'));
board.update();
};

s.on('drag',rctOndrag);
s2.on('drag',prdOndrag);
s3.on('drag',function(){rctOndrag(),prdOndrag()});
var state = {'x':{#react#}[0], 'y':{#react#}[1]};
var stateInput = document.getElementById(reactRef);

if (stateInput.value!=( stateInput.value != '')) state = JSON.parse(stateInput.value);

var reactants=board.create('text',[state['x'],state['y'],function(){return nameRef.reacttxt}],{fontSize: 18, color:'green',attractors:[leftLine,rightLine], attractorDistance:1.5 ,snatchDistance:2,useMathJax: true,anchorY:'bottom',fixed:fxd});
stateInput.value=JSON.stringify(state);stateInput.dispatchEvent(new Event('change')); //initial values;
reactants.on('drag',rctOndrag);
//----------------

var state2 = {'x':{#prod#}[0], 'y':{#prod#}[1]};
var stateInput2 = document.getElementById(prodRef);
if (stateInput2.value!=( stateInput2.value != '')) state2 = JSON.parse(stateInput2.value);
var products=board.create('text',[state2['x'],state2['y'],function(){return nameRef.prodtxt}],{fontSize: 18, color:'green',attractors:[leftLine,rightLine], attractorDistance:1.5 ,snatchDistance:2,useMathJax: true,anchorY:'bottom',fixed:fxd});
stateInput2.value=JSON.stringify(state2); stateInput2.dispatchEvent(new Event('change'));//initial values;
products.on('drag',prdOndrag);

board.on('move', function(){

b_arp1.moveTo([a_arp1.X(), b_arp1.Y()]);
a_arp1.moveTo([a_arp1.X(),a_arp1.Y()]);
b_arp2.moveTo([a_arp2.X(), b_arp2.Y()]);
a_arp2.moveTo([a_arp2.X(),a_arp2.Y()]);
b_arp3.moveTo([a_arp3.X(), b_arp3.Y()]);
a_arp3.moveTo([a_arp3.X(),a_arp3.Y()]);

});



let rqm={#rqm#};
//board.create('text',[10,10,{#rqm#}]);

var checkAnswer= function(indx, mrk) {
switch (indx) {
case 6:
if (mrk == 1) {
nameRef.reacttxt = '✔' + nameRef.reacttxt;
} else {
nameRef.reacttxt = '<span style="font-size: 1.0em; color:red;">❌ </span>' + nameRef.reacttxt;
}
board.update();
break;
case 7:
if (mrk == 1) {
nameRef.prodtxt = '✔' + nameRef.prodtxt;
} else {
nameRef.prodtxt = '<span style="font-size: 1.0em; color:red;">❌ </span>' + nameRef.prodtxt;
}
board.update();
break;
case 8:
if (mrk == 1) {
nameRef.mrkH='<span style="font-size: 1.25em; color:green;">✔</span>'}
else {
nameRef.mrkH='<span style="font-size: 1.0em; color:red;">❌</span>' }
board.update();
break;
case 9:
if (mrk == 1) {
nameRef.mrkE='<span style="font-size: 1.25em; color:green;">✔</span>'}
else {
nameRef.mrkE='<span style="font-size: 1.0em; color:red;">❌</span>' }
board.update();
break;
default:
nameRef.chkd=true;
if (mrk == 1) {
nameRef.p[indx] = '<span style="font-size: 1.5em; color:green;">✔</span>'
    } else {
    {
    nameRef.p[indx] = '<span style="font-size: 1.5em; color:red;">❌</span>';
    }
    board.update(); }
    }
    };
   

stack_js.get_content({#rqm#}).then((content) => {
if (content !== null) {
// As the content is not null this means the span is present so feedback is displayed and we can react to it here
if  ( !(nameRef.chkd)) {
 nameRef.chkd=true;
let grade =JSON.parse(content);
for (let i = 0; i !=11; i++) {checkAnswer(i,grade[i])};
console.log(grade);
board.update();  
}}});


    [[/jsxgraph]]
