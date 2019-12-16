(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index1_atlas_", frames: [[142,583,178,125],[386,0,334,479],[386,481,258,368],[0,0,384,581],[0,583,140,271]]}
];


// symbols:



(lib.card_shadow = function() {
	this.initialize(ss["index1_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hand_01 = function() {
	this.initialize(ss["index1_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hand_02_shadow = function() {
	this.initialize(ss["index1_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hand_phone = function() {
	this.initialize(ss["index1_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ticket = function() {
	this.initialize(ss["index1_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ticker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ticket();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3393,0.3393);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.5,92);


(lib.textblock_xкопия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpA0QgLgHgHgNQgGgOAAgSQAAgRAGgNQAHgNALgIQAMgIAQAAQANAAAIAFQAJAGAEAJIAAgRIAtAAIAABxIgtAAIAAgRQgDAJgKAFQgJAGgNAAQgPAAgMgIgAgNgQQgGAGAAAKQAAALAGAGQAGAHAJAAQAKAAAGgHQAFgGAAgLQAAgKgFgGQgGgHgKAAQgJAAgGAHg");
	this.shape.setTransform(109.9,91.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARA5IAAgoIghAAIAAAoIgtAAIAAhxIAtAAIAAAnIAhAAIAAgnIAtAAIAABxg");
	this.shape_1.setTransform(95.325,91.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiA0QgPgHgIgNQgIgOAAgSQAAgRAIgNQAIgOAPgIQAPgHATAAQAUAAAPAHQAPAIAIAOQAIANAAARQAAASgIAOQgIANgPAHQgPAIgUAAQgTAAgPgIgAgPgQQgFAGAAAKQAAALAFAFQAGAHAJAAQAKAAAFgHQAGgFAAgLQAAgKgGgGQgFgGgKAAQgJAAgGAGg");
	this.shape_2.setTransform(80.875,91.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVBmIAAgpQgTgCgNgIQgMgJgIgMQgGgNAAgPQAAgOAGgNQAIgNAMgJQANgIATgCIAAgsIAsAAIAAAsQASACAMAIQANAJAIANQAGANAAAOQAAAPgGANQgIAMgMAJQgNAIgSACIAAApgAAPAZQALAAAFgGQAFgHAAgKQAAgJgFgHQgFgGgLgBgAgegOQgGAHAAAJQAAAKAGAHQAFAGAKAAIABAAIAAguIgBAAQgKABgFAGg");
	this.shape_3.setTransform(65.6,91.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghA1QgPgGgIgOQgIgOAAgTQAAgSAIgNQAIgOAPgHQAOgHAUAAQATAAAOAHQAOAHAJALQAHANABARIAAAHIgBAIIhTAAQABAJAFAEQAGAFAJABQAGgBAFgCQAFgBACgEIArAAQgCAMgJAIQgHAJgOAEQgNAFgQAAQgUAAgPgHgAAUgNQgBgJgFgFQgFgFgIAAQgJAAgFAFQgGAGAAAIIAnAAIAAAAg");
	this.shape_4.setTransform(50.4,91.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhAA6IAAgkIAEAAQAGAAADgGQACgEAAgJIAAg8IByAAIAABxIgtAAIAAhNIgYAAIAAAXQABAagMAPQgMAOgZABg");
	this.shape_5.setTransform(35.775,91.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghA1QgPgGgIgOQgIgOAAgTQAAgSAIgNQAIgOAPgHQAPgHASAAQAUAAAOAHQAOAHAJALQAHANABARIAAAHIgCAIIhSAAQABAJAFAEQAGAFAJABQAGgBAFgCQAEgBADgEIArAAQgCAMgJAIQgHAJgNAEQgNAFgRAAQgUAAgPgHgAAUgNQgBgJgFgFQgEgFgKAAQgIAAgFAFQgGAGAAAIIAnAAIAAAAg");
	this.shape_6.setTransform(21.95,91.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVA5IAAhMIgfAAIAAglIBpAAIAAAlIgfAAIAABMg");
	this.shape_7.setTransform(9.15,91.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpA0QgLgHgHgNQgGgOAAgSQAAgQAGgOQAHgNALgIQAMgIAQAAQANAAAIAFQAJAGAEAJIAAgRIAtAAIAABxIgtAAIAAgRQgDAJgKAGQgIAFgOAAQgPAAgMgIgAgNgQQgGAHABAJQgBALAGAGQAGAHAJAAQAKAAAGgHQAFgHAAgKQAAgJgFgHQgGgGgKgBQgJABgGAGg");
	this.shape_8.setTransform(179.85,69.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVA5IAAhMIgfAAIAAglIBpAAIAAAlIgfAAIAABMg");
	this.shape_9.setTransform(166.85,69.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghA1QgPgGgIgOQgIgOAAgTQAAgSAIgNQAJgOAOgHQAPgHASAAQAUAAAOAHQAPAHAHAMQAJAMAAARIgBAHIgBAIIhSAAQABAJAFAEQAGAGAIAAQAIAAAEgCQAEgCACgEIAsAAQgCAMgIAIQgJAJgMAFQgNAEgSAAQgTAAgPgHgAAUgNQgBgJgEgFQgGgFgJAAQgIAAgFAFQgGAGAAAIIAnAAIAAAAg");
	this.shape_10.setTransform(154.05,69.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAOA5IAAgjIgNAEIgMABQgXAAgMgKQgMgKAAgTIAAgsIAtAAIAAAlQAAAJAEAEQAEAEAGAAIAHgBIAGgDIAAgyIAtAAIAABxg");
	this.shape_11.setTransform(139.975,69.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghA1QgOgIgIgNQgIgOAAgSQAAgRAIgOQAIgOAOgGQAPgIATAAQASAAAOAGQAOAGAIAKQAIALABAPIgtAAQgBgGgFgDQgEgDgIABQgJAAgFAGQgFAGAAAKQAAALAFAGQAFAGAJAAQAIAAAEgCQAFgDABgGIAtAAQgBAPgIALQgIAKgOAHQgOAFgSAAQgTAAgPgHg");
	this.shape_12.setTransform(126.825,69.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgiA0QgPgHgIgNQgIgOAAgSQAAgRAIgOQAIgNAPgHQAPgIATAAQAUAAAPAIQAPAHAIANQAIAOAAARQAAASgIAOQgIANgPAHQgPAIgUAAQgTAAgPgIgAgPgQQgFAHAAAJQAAALAFAFQAGAHAJAAQAKAAAFgHQAGgFAAgLQAAgJgGgHQgFgGgKAAQgJAAgGAGg");
	this.shape_13.setTransform(107.625,69.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AghA1QgOgIgIgNQgIgOAAgSQAAgRAIgOQAIgOAOgGQAPgIATAAQASAAAOAGQAOAGAIAKQAIALABAPIgtAAQgBgGgFgDQgEgDgIABQgJAAgFAGQgFAGAAAKQAAALAFAGQAFAGAJAAQAIAAAEgCQAFgDABgGIAtAAQgBAPgIALQgIAKgOAHQgOAFgSAAQgTAAgPgHg");
	this.shape_14.setTransform(93.875,69.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgiA0QgPgHgIgNQgIgOAAgSQAAgRAIgOQAIgNAPgHQAPgIATAAQAUAAAPAIQAPAHAIANQAIAOAAARQAAASgIAOQgIANgPAHQgPAIgUAAQgTAAgPgIgAgPgQQgFAHAAAJQAAALAFAFQAGAHAJAAQAKAAAFgHQAGgFAAgLQAAgJgGgHQgFgGgKAAQgJAAgGAGg");
	this.shape_15.setTransform(74.675,69.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAuA5IAAhPIgcBPIgiAAIgdhPIAABPIgrAAIAAhxIBDAAIAWBDIAWhDIBCAAIAABxg");
	this.shape_16.setTransform(57.475,69.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AARA5IAAgdIgIAAIgSAdIgzAAIAZgjQgMgHgFgJQgGgJAAgMQAAgLAGgKQAGgIAJgGQALgFANgBIBKAAIAABxgAgIgXQgEADAAAHQAAAFAEAEQADAEAGAAIAQAAIAAgcIgQAAQgGAAgDAFg");
	this.shape_17.setTransform(39.825,69.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhBBQIAAicIAtAAIAAARQAEgJAJgFQAJgGANAAQAPAAAMAHQALAIAHANQAGAOAAASQAAASgGAMQgHAOgMAHQgLAIgQAAQgJAAgGgDQgHgDgEgEQgFgFgDgFIAAA8gAgQgkQgGAGAAALQAAALAGAHQAGAFAJAAQAJAAAGgFQAFgHABgLQAAgLgGgGQgGgHgJAAQgJAAgGAHg");
	this.shape_18.setTransform(26,71.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAQA5IAAhOIgfAAIAABOIgtAAIAAhxIB5AAIAABxg");
	this.shape_19.setTransform(10.625,69.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#731982").s().p("AARA5IAAg7IggAzIAAAIIgtAAIAAhxIAtAAIAAA+IAgg0IAAgKIAtAAIAABxg");
	this.shape_20.setTransform(98.3,47.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#731982").s().p("AANA5IgfgvIAAAvIgtAAIAAhxIAtAAIAAAwIAEAAQADgBADgCQACgBADgEIAPgZQAEgGADgDQAFgEAGgBQAGgBAKgBIALAAIAAAjIgDAAQgDAAgCABIgGAGIgGAJIgFAFQgDABgEAAIgCAAIApA5g");
	this.shape_21.setTransform(83.95,47.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#731982").s().p("AAQA5IAAhNIgfAAIAABNIgtAAIAAhxIB5AAIAABxg");
	this.shape_22.setTransform(68.825,47.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#731982").s().p("AgbBOQgLgDgHgGQgHgFgEgIQgEgIAAgJIAtAAQAAAFAEADQADADAIAAQAIAAAEgEQAEgFAAgJIAAgVQgEAJgJAGQgIAFgNAAQgXgBgKgNQgKgMABgWIAAg/IAtAAIAAA6QgBAJAEAGQAEAFAIAAQAIAAAEgGQAEgGAAgMIAAg2IAtAAIAABqQAAAOgFALQgEALgIAGQgIAHgLADQgKADgPAAQgQAAgLgDg");
	this.shape_23.setTransform(53.9738,50.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#731982").s().p("AANA5IgfgvIAAAvIgtAAIAAhxIAtAAIAAAwIADAAQAEgBADgCQADgBACgEIAOgZQAFgGADgDQAFgEAGgBQAGgBAKgBIALAAIAAAjIgDAAQgDAAgCABIgGAGIgGAJIgFAFQgDABgEAAIgCAAIApA5g");
	this.shape_24.setTransform(39.75,47.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#731982").s().p("AgiA0QgPgHgIgNQgIgOAAgSQAAgRAIgNQAIgOAPgIQAPgHATAAQAUAAAPAHQAPAIAIAOQAIANAAARQAAASgIAOQgIANgPAHQgPAIgUAAQgTAAgPgIgAgPgQQgFAGAAAKQAAAKAFAGQAGAHAJAAQAKAAAFgHQAGgGAAgKQAAgKgGgGQgFgGgKAAQgJAAgGAGg");
	this.shape_25.setTransform(25.075,47.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#731982").s().p("AAQA5IAAhNIgfAAIAABNIgtAAIAAhxIB5AAIAABxg");
	this.shape_26.setTransform(10.625,47.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#731982").s().p("AghA1QgPgGgIgOQgIgOAAgTQAAgSAIgNQAIgOAPgHQAOgHAUAAQASAAAPAHQAPAGAHANQAJAMAAARIgBAHIAAAIIhTAAQAAAJAGAEQAGAFAIABQAHAAAFgDQAEgBACgEIAsAAQgCAMgIAIQgJAJgNAFQgNAEgRAAQgTAAgPgHgAAUgNQAAgJgGgFQgEgFgJAAQgJAAgGAFQgFAGAAAIIAnAAIAAAAg");
	this.shape_27.setTransform(147.45,26);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#731982").s().p("AgWA5IAAhMIgeAAIAAglIBpAAIAAAlIgfAAIAABMg");
	this.shape_28.setTransform(134.65,26);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#731982").s().p("AAQBMIAAg8IggA0IAAAIIgtAAIAAhwIAtAAIAAA+IAgg0IAAgKIAtAAIAABwgAgfgzQgMgJgBgQIAfAAQAAAHADACQADADAHABQAFgBADgDQADgCABgHIAfAAQgBAQgMAJQgMAIgSABQgVgBgKgIg");
	this.shape_29.setTransform(121.3,24.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#731982").s().p("AgpA0QgLgHgHgNQgGgOAAgSQAAgQAGgOQAHgNALgIQAMgIAQAAQANAAAIAFQAJAGAEAJIAAgRIAtAAIAABxIgtAAIAAgRQgDAJgKAFQgJAGgNAAQgQAAgLgIgAgNgQQgGAGABAKQgBALAGAGQAGAHAJAAQAKAAAGgHQAFgHAAgKQAAgKgFgGQgGgGgKgBQgJABgGAGg");
	this.shape_30.setTransform(105.95,26);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#731982").s().p("AhbA5IAAhxIAtAAIAABOIAZAAIAAhOIArAAIAABOIAZAAIAAhOIAtAAIAABxg");
	this.shape_31.setTransform(88.35,26);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#731982").s().p("AhBBQIAAicIAtAAIAAARQAEgJAJgFQAIgGAOAAQAPAAAMAHQALAIAGANQAHAOAAASQAAASgHAMQgGAOgMAHQgLAIgQAAQgIAAgHgDQgHgDgFgEQgEgFgDgFIAAA8gAgQgkQgGAGAAALQAAALAGAHQAGAFAJAAQAJAAAFgFQAHgHAAgLQgBgLgFgGQgGgHgJAAQgJAAgGAHg");
	this.shape_32.setTransform(70.75,28.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#731982").s().p("AghA1QgPgGgIgOQgIgOAAgTQAAgSAIgNQAJgOAOgHQAPgHATAAQASAAAPAHQAOAGAIANQAJAMAAARIAAAHIgBAIIhTAAQAAAJAGAEQAGAFAJABQAGAAAFgDQAFgBACgEIArAAQgCAMgIAIQgJAJgNAFQgNAEgQAAQgUAAgPgHgAAUgNQAAgJgGgFQgFgFgIAAQgJAAgGAFQgFAGAAAIIAnAAIAAAAg");
	this.shape_33.setTransform(56,26);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#731982").s().p("Ag5A5IAAhxIBNAAQAOAAAIAGQAIAEADAHQAEAHAAAFQgBAMgIAHQgJAGgOABQARABAIAGQAJAHAAANQAAAGgFAHQgDAIgKAEQgJAGgRAAgAgNAhIALAAQAGAAADgDQAEgDAAgFQAAgFgEgDQgDgEgFAAIgMAAgAgNgKIALAAQAFAAAEgCQADgDAAgGQAAgFgDgDQgEgDgFAAIgLAAg");
	this.shape_34.setTransform(42.65,26);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#731982").s().p("AgiA0QgPgHgIgNQgIgOAAgSQAAgRAIgNQAIgOAPgHQAPgIATAAQAUAAAPAIQAPAHAIAOQAIANAAARQAAASgIAOQgIANgPAHQgPAIgUAAQgTAAgPgIgAgPgQQgFAGAAAKQAAALAFAFQAGAHAJAAQAKAAAFgHQAGgFAAgLQAAgKgGgGQgFgGgKAAQgJAAgGAGg");
	this.shape_35.setTransform(28.475,26);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#731982").s().p("AgsBKQgUgLgLgTQgLgTgBgZQABgYALgTQALgTAUgLQAUgLAaAAQAZAAASAIQATAIALAPQAKAOACAWIgxAAQgDgMgJgGQgKgHgOAAQgSAAgKAMQgKALAAATQAAAUAKALQAKAMASAAQAOAAAKgHQAJgGADgLIAxAAQgCAVgKAPQgLAPgTAHQgSAIgZAAQgaAAgUgLg");
	this.shape_36.setTransform(12.35,23.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textblock_xкопия, new cjs.Rectangle(1,8.9,194.6,96.19999999999999), null);


(lib.textblock_x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpA0QgLgHgHgNQgGgOAAgSQAAgQAGgOQAHgNALgIQAMgIAQAAQANAAAIAFQAJAGAEAJIAAgRIAtAAIAABxIgtAAIAAgRQgDAJgKAGQgIAFgOAAQgPAAgMgIgAgNgQQgGAHABAJQgBALAGAGQAGAHAJAAQAKAAAGgHQAFgHAAgKQAAgJgFgHQgGgGgKgBQgJABgGAGg");
	this.shape.setTransform(192.9,69.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARA5IAAgoIghAAIAAAoIgtAAIAAhxIAtAAIAAAnIAhAAIAAgnIAtAAIAABxg");
	this.shape_1.setTransform(178.325,69.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiA0QgPgHgIgNQgIgOAAgSQAAgRAIgOQAIgNAPgHQAPgIATAAQAUAAAPAIQAPAHAIANQAIAOAAARQAAASgIAOQgIANgPAHQgPAIgUAAQgTAAgPgIgAgPgQQgFAHAAAJQAAALAFAFQAGAHAJAAQAKAAAFgHQAGgFAAgLQAAgJgGgHQgFgGgKAAQgJAAgGAGg");
	this.shape_2.setTransform(163.875,69.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXBQIAAgOQgWAAgPgKQgPgJgIgPQgIgPAAgRQAAgRAIgOQAIgPAPgJQAPgKAWAAIAAgOIAvAAIAAAOQAWAAAPAKQAPAJAIAPQAIAOAAARQAAARgIAPQgIAPgPAJQgPAKgWAAIAAAOgAATAcIAFAAQAKAAAGgIQAGgIAAgMQAAgMgGgHQgGgIgKAAIgFAAgAgngTQgGAHAAAMQAAAMAGAIQAGAIAKAAIAFAAIAAg3IgFAAQgKAAgGAIg");
	this.shape_3.setTransform(147.375,67.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpA0QgLgHgHgNQgGgOAAgSQAAgQAGgOQAHgNALgIQAMgIAQAAQANAAAIAFQAJAGAEAJIAAgRIAtAAIAABxIgtAAIAAgRQgDAJgKAGQgIAFgOAAQgPAAgMgIgAgNgQQgGAHABAJQgBALAGAGQAGAHAJAAQAKAAAGgHQAFgHAAgKQAAgJgFgHQgGgGgKgBQgJABgGAGg");
	this.shape_4.setTransform(129.9,69.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoA5IAAhxIBRAAIAAApIglAAIAABIg");
	this.shape_5.setTransform(118.175,69.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghA1QgPgGgIgOQgIgOAAgTQAAgSAIgNQAJgOAOgHQAPgHATAAQASAAAPAHQAOAHAIAMQAJAMAAARIAAAHIgBAIIhTAAQAAAJAGAEQAGAGAJAAQAGAAAFgCQAFgCACgEIArAAQgCAMgIAIQgJAJgNAFQgNAEgQAAQgUAAgPgHgAAUgNQAAgJgGgFQgFgFgIAAQgJAAgGAFQgFAGAAAIIAnAAIAAAAg");
	this.shape_6.setTransform(105.95,69.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAwBQIAAhkIgdBkIgiAAIgghlIAABlIguAAIAAifIA9AAIAhBoIAihoIA7AAIAACfg");
	this.shape_7.setTransform(88.325,67.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpA0QgLgHgHgNQgGgOAAgSQAAgQAGgOQAHgNALgIQAMgIAQAAQANAAAIAFQAJAGAEAJIAAgRIAtAAIAABxIgtAAIAAgRQgDAJgKAGQgIAFgOAAQgPAAgMgIgAgNgQQgGAHABAJQgBALAGAGQAGAHAIAAQALAAAGgHQAFgHAAgKQAAgJgFgHQgGgGgLgBQgIABgGAGg");
	this.shape_8.setTransform(64.2,69.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWA5IAAhMIgeAAIAAglIBpAAIAAAlIgfAAIAABMg");
	this.shape_9.setTransform(51.15,69.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhBBQIAAicIAtAAIAAARQAEgJAJgFQAJgGAOAAQAPAAALAHQALAIAGANQAHAOAAASQAAASgHAMQgGAOgMAHQgLAIgQAAQgIAAgGgDQgIgDgFgEQgFgFgCgFIAAA8gAgQgkQgGAGAAALQAAALAGAHQAGAFAKAAQAIAAAFgFQAHgHgBgLQAAgLgFgGQgGgHgIAAQgKAAgGAHg");
	this.shape_10.setTransform(38.1,71.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpA0QgMgHgFgNQgHgOAAgSQAAgQAHgOQAGgNAMgIQALgIAQAAQANAAAIAFQAJAGAFAJIAAgRIAsAAIAABxIgsAAIAAgRQgFAJgJAGQgIAFgNAAQgRAAgLgIgAgNgQQgFAHgBAJQABALAFAGQAGAHAIAAQALAAAFgHQAGgHAAgKQAAgJgGgHQgFgGgLgBQgIABgGAGg");
	this.shape_11.setTransform(22.3,69.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AANA5IgfgvIAAAvIgtAAIAAhwIAtAAIAAAvIAEAAQADAAADgCQACgCADgFIAOgYQAFgGAEgEQADgDAHgBQAGgBAKAAIALAAIAAAiIgDAAQgDAAgDACIgEAEIgGAJIgGAGQgDABgFAAIgBAAIApA5g");
	this.shape_12.setTransform(8.3,69.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AARA5IAAgeIgIAAIgSAeIgzAAIAZgjQgMgHgFgJQgGgJAAgMQAAgLAGgKQAGgJAJgFQALgFANgBIBKAAIAABxgAgIgYQgEAFAAAGQAAAFAEAFQADADAGAAIAQAAIAAgbIgQAAQgGgBgDAEg");
	this.shape_13.setTransform(137.175,47.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpA0QgLgIgHgMQgGgOAAgSQAAgRAGgNQAHgOALgHQAMgIAQAAQANAAAIAFQAJAGAEAJIAAgRIAtAAIAABxIgtAAIAAgRQgDAJgKAFQgJAGgNAAQgQAAgLgIgAgNgQQgGAGABAKQgBALAGAGQAGAHAJAAQAKAAAGgHQAFgHAAgKQAAgKgFgGQgGgHgKAAQgJAAgGAHg");
	this.shape_14.setTransform(122.6,47.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AANA5IgfgvIAAAvIgtAAIAAhxIAtAAIAAAwIAEAAQADgBADgCQACgBADgEIAPgZQADgGAFgDQAEgEAGgBQAGgBAKgBIALAAIAAAjIgDAAQgDAAgCABIgGAGIgFAJIgGAFQgDABgFAAIgBAAIApA5g");
	this.shape_15.setTransform(108.55,47.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AghA1QgOgIgIgNQgIgOAAgSQAAgSAIgNQAIgNAOgIQAPgHATAAQASAAAOAGQAOAFAIALQAIAMABAPIgtAAQgBgHgFgCQgEgDgIAAQgJAAgFAGQgFAFAAALQAAAMAFAFQAFAGAJAAQAIAAAEgDQAFgCABgHIAtAAQgBAQgIAKQgIAMgOAFQgOAGgSAAQgTAAgPgHg");
	this.shape_16.setTransform(94.125,47.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag5A5IAAhxIBMAAQAPAAAIAFQAJAFACAHQADAHABAFQgBAMgIAHQgJAGgOACQARAAAIAGQAJAHAAANQAAAGgFAHQgDAIgJAFQgKAFgRAAgAgNAhIALAAQAGAAADgDQAEgDAAgFQAAgFgEgDQgDgEgFAAIgMAAgAgNgKIALAAQAFABAEgDQADgEAAgFQAAgFgDgDQgEgDgFAAIgLAAg");
	this.shape_17.setTransform(80.8,47.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgiA0QgPgHgIgNQgIgOAAgSQAAgRAIgNQAIgOAPgIQAPgHATAAQAUAAAPAHQAPAIAIAOQAIANAAARQAAASgIAOQgIANgPAHQgPAIgUAAQgTAAgPgIgAgPgQQgFAGAAAKQAAAKAFAGQAGAHAJAAQAKAAAFgHQAGgGAAgKQAAgKgGgGQgFgGgKAAQgJAAgGAGg");
	this.shape_18.setTransform(66.675,47.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AANA5IgfgvIAAAvIgtAAIAAhxIAtAAIAAAwIADAAQAEgBADgCQADgBACgEIAOgZQAFgGADgDQAFgEAGgBQAGgBAKgBIALAAIAAAjIgDAAQgDAAgCABIgGAGIgGAJIgFAFQgDABgEAAIgCAAIApA5g");
	this.shape_19.setTransform(52.8,47.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AARA5IAAgoIghAAIAAAoIgtAAIAAhxIAtAAIAAAnIAhAAIAAgnIAtAAIAABxg");
	this.shape_20.setTransform(37.625,47.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgpA0QgLgIgHgMQgGgOAAgSQAAgRAGgNQAHgOALgHQAMgIAQAAQANAAAIAFQAJAGAEAJIAAgRIAtAAIAABxIgtAAIAAgRQgDAJgKAFQgJAGgNAAQgQAAgLgIgAgNgQQgGAGABAKQgBALAGAGQAGAHAJAAQAKAAAGgHQAFgHAAgKQAAgKgFgGQgGgHgKAAQgJAAgGAHg");
	this.shape_21.setTransform(22.25,47.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgjBIQgQgKgHgSQgJgSAAgYQAAgaAKgTQALgTATgJQATgKAZAAIAjAAIAAAjIgiAAQgWAAgLAKQgMALgBATQAHgOALgGQAKgGAPAAQASAAALAIQANAHAFAMQAGAMAAAQQAAAPgIAOQgHAOgPAIQgPAIgVAAQgWAAgPgKgAgMAGQgGAGgBALQABALAGAGQAFAHAJAAQAKAAAFgHQAHgHgBgKQABgKgHgHQgFgGgKAAQgJAAgFAGg");
	this.shape_22.setTransform(8,45.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#731982").s().p("AARA5IAAgeIgIAAIgSAeIgzAAIAZgjQgMgHgFgJQgGgJAAgMQAAgLAGgKQAGgIAJgGQALgFANgBIBKAAIAABxgAgIgXQgEADAAAHQAAAGAEAEQADADAGAAIAQAAIAAgcIgQAAQgGAAgDAFg");
	this.shape_23.setTransform(151.875,26);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#731982").s().p("AgpA0QgMgHgFgNQgHgOAAgSQAAgQAHgOQAGgNAMgIQALgIAQAAQANAAAIAFQAJAGAFAJIAAgRIAsAAIAABxIgsAAIAAgRQgEAJgKAFQgJAGgMAAQgQAAgMgIgAgNgQQgGAGAAAKQAAALAGAGQAGAHAJAAQAKAAAFgHQAGgHAAgKQAAgKgGgGQgFgGgKgBQgJABgGAGg");
	this.shape_24.setTransform(137.25,26);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#731982").s().p("AARA5IAAgoIghAAIAAAoIgtAAIAAhxIAtAAIAAAnIAhAAIAAgnIAtAAIAABxg");
	this.shape_25.setTransform(122.675,26);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#731982").s().p("Ag5A5IAAhxIAtAAIAAAjIAUAAQATAAALAGQALAGAEAIQAFAJAAAJQAAAKgFAIQgFAKgLAFQgLAHgSAAgAgMAfIAMAAQAFAAAEgEQADgDAAgGQAAgGgDgEQgEgDgFAAIgMAAg");
	this.shape_26.setTransform(109.0773,26);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#731982").s().p("AhAA6IAAgkIAEAAQAGAAADgGQACgEAAgJIAAg8IByAAIAABxIgtAAIAAhNIgYAAIAAAXQABAagMAPQgMAOgZABg");
	this.shape_27.setTransform(94.275,26.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#731982").s().p("AgpA0QgMgHgFgNQgHgOAAgSQAAgQAHgOQAGgNAMgIQALgIAQAAQANAAAIAFQAJAGAFAJIAAgRIAsAAIAABxIgsAAIAAgRQgFAJgJAFQgIAGgNAAQgRAAgLgIgAgNgQQgFAGAAAKQAAALAFAGQAGAHAIAAQALAAAFgHQAGgHAAgKQAAgKgGgGQgFgGgLgBQgIABgGAGg");
	this.shape_28.setTransform(79.35,26);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#731982").s().p("AgbBOQgLgDgHgGQgHgFgEgIQgEgIAAgJIAtAAQAAAFAEADQADADAIAAQAIAAAEgEQAEgFAAgJIAAgVQgEAJgJAGQgIAFgNAAQgXgBgKgNQgKgMABgWIAAg/IAtAAIAAA6QgBAJAEAGQAEAFAIAAQAIAAAEgGQAEgGAAgMIAAg2IAtAAIAABqQAAAOgFALQgEALgIAGQgIAHgLADQgKADgPAAQgQAAgLgDg");
	this.shape_29.setTransform(64.8238,28.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#731982").s().p("AgWA5IAAhMIgeAAIAAglIBpAAIAAAlIgfAAIAABMg");
	this.shape_30.setTransform(51.6,26);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#731982").s().p("AhBBQIAAicIAtAAIAAARQAEgJAJgFQAJgGAOAAQAPAAALAHQALAIAGANQAHAOAAASQAAASgHAMQgGAOgMAHQgLAIgQAAQgIAAgGgDQgIgDgFgEQgFgFgCgFIAAA8gAgQgkQgGAGAAALQAAALAGAHQAGAFAKAAQAIAAAFgFQAHgHAAgLQgBgLgFgGQgGgHgIAAQgKAAgGAHg");
	this.shape_31.setTransform(38.55,28.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#731982").s().p("AAQA5IAAg8IggA0IAAAIIgtAAIAAhxIAtAAIAAA+IAgg0IAAgKIAtAAIAABxg");
	this.shape_32.setTransform(23.2,26);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#731982").s().p("AhBBQIAAifIBNAAQAYAAAOALQANALAAATQAAAQgIAJQgIAKgOADQAOABAKAJQAJAKAAAQQAAAVgOALQgOAMgXAAgAgRAvIAQAAQAJAAAEgFQAGgEgBgJQABgHgGgFQgFgFgHAAIgRAAgAgRgOIAPAAQAIgBAFgEQAFgFAAgIQAAgIgFgEQgFgEgIAAIgPAAg");
	this.shape_33.setTransform(8.6,23.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textblock_x, new cjs.Rectangle(-1.6,8.9,204.79999999999998,74.39999999999999), null);


(lib.textblock_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAQBKIAAg7IgfAzIAAAIIgrAAIAAhtIArAAIAAA7IAfgxIAAgKIArAAIAABtgAgegxQgLgIAAgPIAcAAQABAFADADQADADAGAAQAFAAADgDQADgDABgFIAdAAQgBAPgLAIQgMAIgRAAQgUAAgKgIg");
	this.shape.setTransform(126.55,42.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggAzQgOgGgIgNQgHgNAAgTQAAgRAIgNQAHgNAOgHQAPgHASAAQASAAAOAHQAOAGAHAMQAIAMAAAPIAAAIIgBAHIhPAAQAAAJAGAFQAFAEAJAAQAGAAAFgBQAEgCACgEIAqAAQgDALgHAJQgIAIgNAEQgMAFgQAAQgTAAgPgHgAATgMQAAgJgFgFQgFgFgJAAQgIAAgFAFQgFAFAAAJIAlAAIAAAAg");
	this.shape_1.setTransform(112.825,44.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag9A4IAAgjIAEAAQAGAAACgFQADgFAAgIIAAg6IBsAAIAABtIgrAAIAAhKIgWAAIAAAWQAAAZgLAOQgMAOgXABg");
	this.shape_2.setTransform(98.775,44.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiBFQgPgJgIgSQgHgSAAgWQAAgZAKgTQAKgRASgKQASgJAZAAIAhAAIAAAiIghAAQgVgBgLAKQgLALgBASQAHgNALgGQAKgGANABQARAAAMAGQALAIAGALQAFALAAAPQAAAQgHANQgHANgPAIQgOAIgVAAQgUAAgPgKgAgMAGQgGAFAAALQAAAKAGAGQAFAHAJAAQAJAAAGgHQAFgGAAgKQAAgKgFgGQgGgGgJAAQgJAAgFAGg");
	this.shape_3.setTransform(85.175,42.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaBLQgKgDgHgGQgGgFgFgHQgEgIAAgJIArAAQABAFADAEQAEACAHAAQAHABAFgFQAEgFAAgIIAAgUQgFAIgIAGQgIAEgMAAQgWAAgJgMQgKgNAAgUIAAg9IArAAIAAA4QAAAJAEAFQADAFAIAAQAIAAAEgFQAEgHAAgLIAAg0IArAAIAABmQAAAOgFAKQgEALgIAFQgHAGgKADQgKADgPAAQgPAAgLgCg");
	this.shape_4.setTransform(70.925,47.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag+BNIAAiWIArAAIAAAQQADgIAJgGQAJgFANAAQAOAAALAHQALAHAGANQAGANABASQgBARgGAMQgGANgLAHQgMAHgOAAQgJAAgFgCQgHgDgGgFQgEgEgCgFIAAA6gAgQgjQgFAGAAALQAAAKAFAHQAGAFAKAAQAHAAAGgFQAFgHABgKQgBgLgFgGQgGgGgHAAQgKAAgGAGg");
	this.shape_5.setTransform(57.1,46.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxA6QgRgUgBgmQABglARgUQARgVAgAAQAhAAARAVQARAUAAAlQAAAngRATQgRAUghABQgggBgRgUgAgRggQgGAKAAAWQAAAXAGAKQAGAKALAAQAMAAAGgKQAGgKAAgXQAAgVgGgLQgGgLgMABIAAAAQgMAAgFAKg");
	this.shape_6.setTransform(36.85,42.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxA6QgRgUAAgmQAAglARgUQARgVAgAAQAhAAARAVQASAUAAAlQAAAngSATQgRAUghABQgggBgRgUgAgRggQgGAKABAWQgBAXAGAKQAFAKAMAAQAMAAAGgKQAFgKAAgXQAAgVgFgLQgGgLgMABIAAAAQgMAAgFAKg");
	this.shape_7.setTransform(21.95,42.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGBLIAAhWIggAAIAAgjQAQAAAJgDQAIgDADgGQADgHAAgJIAmAAIAACVg");
	this.shape_8.setTransform(8.725,42.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#731982").s().p("AggAzQgOgGgIgNQgHgNAAgTQAAgRAIgNQAHgNAOgHQAPgHASAAQASAAAOAHQAOAGAHAMQAIAMAAAPIAAAIIgBAHIhPAAQAAAJAGAFQAFAEAJAAQAGAAAFgBQAEgCACgEIAqAAQgDALgHAJQgIAIgNAEQgMAFgQAAQgTAAgPgHgAATgMQAAgJgFgFQgFgFgJAAQgIAAgFAFQgFAFAAAJIAlAAIAAAAg");
	this.shape_9.setTransform(194.575,23.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#731982").s().p("AAmA3IAAhtIArAAIAABtgAhQA3IAAhtIArAAIAAAiIAUAAQARAAAKAGQALAFAEAJQAFAHAAAKQAAAIgFAJQgEAJgLAGQgKAGgRAAgAglAeIALAAQAGAAAEgEQADgDAAgGQAAgFgDgEQgEgDgGAAIgLAAg");
	this.shape_10.setTransform(178.675,23.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#731982").s().p("AAgBEIAAgbIg/AAIAAAbIgpAAIAAg/IALAAQAGgCAEgFQADgFAAgIIAAg0IBuAAIAABIIALAAIAAA/gAgHgPQAAAIgCAGQgCAFgEAFIAhAAIAAgvIgZAAg");
	this.shape_11.setTransform(161.4,24.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#731982").s().p("AA0A3IgeguIAAAuIgrAAIAAguIgeAuIgyAAIAog3IgCAAQgEAAgCgBIgGgFIgGgJIgEgFIgGgBIgDAAIAAghIALAAQAJAAAHABQAFABAFAEQADADAEAGIAPAXIAFAGQADACADAAIADAAIAAgtIArAAIAAAtIADAAQADAAADgCIAFgGIAPgXQAEgGADgDQAFgEAFgBQAHgBAJAAIALAAIAAAhIgDAAIgGABIgEAFIgGAJIgGAFQgDABgDAAIgCAAIAoA3g");
	this.shape_12.setTransform(143.1,23.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#731982").s().p("AgnAyQgMgHgFgNQgHgNAAgRQAAgQAHgNQAFgNAMgHQALgIAPAAQANABAHAFQAJAFAEAJIAAgRIArAAIAABtIgrAAIAAgQQgDAIgKAFQgIAGgMAAQgPAAgLgIgAgMgPQgGAGAAAJQAAAKAGAHQAFAGAIAAQAKAAAFgGQAGgHAAgKQAAgJgGgGQgFgHgKAAQgIAAgFAHg");
	this.shape_13.setTransform(124.9,23.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#731982").s().p("AANA3IgfguIAAAuIgrAAIAAhsIArAAIAAAtIAEAAQADAAADgCIAFgGIAOgXQADgGAEgDQAFgEAFgBQAHgBAJAAIAKAAIAAAhIgCAAIgGABIgEAFIgGAJQgCADgDACQgEABgDAAIgCAAIAnA3g");
	this.shape_14.setTransform(111.4,23.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#731982").s().p("AgnAyQgMgHgGgNQgFgNgBgRQABgQAFgNQAGgNAMgHQALgIAPAAQANABAHAFQAJAFAEAJIAAgRIArAAIAABtIgrAAIAAgQQgDAIgKAFQgHAGgNAAQgPAAgLgIgAgMgPQgGAGAAAJQAAAKAGAHQAFAGAJAAQAJAAAFgGQAGgHAAgKQAAgJgGgGQgFgHgJAAQgJAAgFAHg");
	this.shape_15.setTransform(91.25,23.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#731982").s().p("AggA1QgNgGgGgJQgFgJAAgKIArAAQAAAFAEADQADADAHABQAGAAADgDQADgDAAgFQAAgFgEgDQgDgDgGAAIgPAAIAAgVIAOAAQAGAAADgDQAEgDAAgFQAAgEgDgDQgDgCgFAAQgGAAgDADQgDADAAAFIgrAAQAAgJAFgIQAFgIANgGQAMgFAVAAQAPAAAMADQAMADAHAHQAHAHAAALQAAAJgDAFQgEAFgGADQgGACgGABQAHAAAGACQAGADAEAGQAEAGAAAIQgBAMgIAHQgIAIgMADQgNAEgOAAQgVAAgMgFg");
	this.shape_16.setTransform(77.9729,23.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#731982").s().p("AgiBFQgPgKgIgRQgHgSAAgWQAAgaAKgRQAKgTASgIQASgKAZAAIAhAAIAAAhIghAAQgVAAgLALQgLAJgBAUQAHgOALgGQAKgGANAAQARAAAMAIQALAGAGANQAFALAAAPQAAAPgHANQgHANgPAHQgOAJgVAAQgUAAgPgKgAgMAFQgGAHAAAKQAAAKAGAHQAFAFAJABQAJgBAGgFQAFgHAAgKQAAgKgFgHQgGgFgJgBQgJABgFAFg");
	this.shape_17.setTransform(59.875,21.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#731982").s().p("AAuBNIAAhgIgcBgIghAAIgehhIAABhIgsAAIAAiZIA6AAIAgBkIAghkIA5AAIAACZg");
	this.shape_18.setTransform(42.375,21.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#731982").s().p("AgxA6QgRgUAAgmQAAglARgUQARgVAgAAQAhAAARAVQASAUAAAlQAAAngSATQgRAUghABQgggBgRgUgAgRggQgGAKABAWQgBAXAGAKQAFAKAMAAQAMAAAGgKQAFgKAAgXQAAgVgFgLQgGgLgMABIAAAAQgMAAgFAKg");
	this.shape_19.setTransform(21.95,21.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#731982").s().p("AgGBLIAAhWIggAAIAAgjQAQAAAJgDQAIgDADgGQADgHAAgJIAmAAIAACVg");
	this.shape_20.setTransform(8.725,21.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textblock_04, new cjs.Rectangle(2.3,7.4,206.29999999999998,50.4), null);


(lib.textblock_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaBLQgKgDgHgGQgGgFgFgHQgEgIAAgJIArAAQABAFADAEQAEACAHAAQAHABAFgFQAEgFAAgIIAAgUQgFAIgIAGQgIAEgMAAQgWAAgJgMQgKgNAAgUIAAg9IArAAIAAA4QAAAJAEAFQADAFAIAAQAIAAAEgFQAEgHAAgLIAAg0IArAAIAABmQAAAOgFAKQgEALgIAFQgHAGgKADQgKADgPAAQgPAAgLgCg");
	this.shape.setTransform(94.375,47.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVA3IAAhJIgdAAIAAgkIBlAAIAAAkIgeAAIAABJg");
	this.shape_1.setTransform(81.65,44.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfBLQgPgGgIgNQgHgNAAgTQAAgSAIgMQAHgNAOgHQAPgHASAAQASAAAOAHQAOAGAHAMQAIALAAAPIAAAJIgBAHIhPAAQAAAJAGAFQAFAEAJAAQAGAAAFgBQAEgCACgEIAqAAQgDALgHAJQgIAIgNAEQgMAFgQAAQgTAAgOgHgAATALQAAgJgFgEQgFgFgJAAQgIAAgFAFQgFAEAAAJIAlAAIAAAAgAALgtQgGgGAAgJQAAgJAGgGQAGgGAJAAQAKAAAFAGQAGAGAAAJQAAAJgGAGQgFAGgKAAQgJAAgGgGgAgogtQgGgGAAgJQAAgJAGgGQAGgGAJAAQAKAAAFAGQAGAGABAJQgBAJgGAGQgFAGgKAAQgJAAgGgGg");
	this.shape_2.setTransform(69.375,42.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAOA3IAAgiQgGADgHABIgMABQgWAAgLgKQgMgJAAgSIAAgrIAsAAIAAAkQAAAIAEAEQADAEAGAAIAHAAIAGgEIAAgwIArAAIAABtg");
	this.shape_3.setTransform(55.875,44.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAzQgOgHgIgNQgIgNAAgSQAAgRAIgNQAIgNAOgHQAOgHASAAQARAAANAGQAOAGAHAKQAIAKACAPIgrAAQgCgGgEgDQgFgCgHAAQgIAAgGAFQgFAGAAAKQAAALAFAGQAGAFAIAAQAHAAAFgCQAEgDACgGIArAAQgCAPgIAKQgHALgOAFQgNAGgRAAQgSAAgOgHg");
	this.shape_4.setTransform(43.225,44.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghAzQgOgIgIgNQgHgNgBgRQABgQAHgNQAIgNAOgHQAOgIATAAQAUAAAOAIQAOAHAIANQAHANAAAQQAAARgHANQgIANgOAIQgOAHgUAAQgTAAgOgHgAgOgPQgGAGABAJQgBAKAGAGQAFAGAJAAQAJAAAGgGQAFgGAAgKQAAgJgFgGQgGgGgJAAQgJAAgFAGg");
	this.shape_5.setTransform(24.8,44.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAQA3IAAhLIgfAAIAABLIgrAAIAAhtIB1AAIAABtg");
	this.shape_6.setTransform(10.925,44.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#731982").s().p("AANA3IgfguIAAAuIgqAAIAAhsIAqAAIAAAtIAEAAQAEAAACgCIAFgGIAOgXQADgGAFgDQADgEAHgBQAFgBAKAAIALAAIAAAhIgDAAIgFABIgGAFIgFAJQgCADgDACQgEABgEAAIgBAAIAnA3g");
	this.shape_7.setTransform(159.75,23.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#731982").s().p("AghAzQgOgIgIgNQgHgNAAgRQAAgQAHgNQAIgNAOgHQAPgIASAAQAUAAAOAIQAOAHAIANQAHANABAQQgBARgHANQgIANgOAIQgOAHgUAAQgSAAgPgHgAgOgPQgGAGABAJQgBAKAGAGQAGAGAIAAQAKAAAFgGQAFgGAAgKQAAgJgFgGQgFgGgKAAQgIAAgGAGg");
	this.shape_8.setTransform(145.65,23.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#731982").s().p("AgUA3IAAhJIgeAAIAAgkIBlAAIAAAkIgeAAIAABJg");
	this.shape_9.setTransform(133.25,23.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#731982").s().p("AgoAyQgKgHgHgNQgFgNAAgRQAAgQAFgNQAHgNAKgHQAMgIAPAAQANABAIAFQAIAFAEAJIAAgRIAsAAIAABtIgsAAIAAgQQgEAIgIAFQgIAGgNAAQgPAAgMgIgAgNgPQgFAGAAAJQAAAKAFAHQAGAGAJAAQAJAAAGgGQAFgHAAgKQAAgJgFgGQgGgHgJAAQgJAAgGAHg");
	this.shape_10.setTransform(120,23.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#731982").s().p("AgVA3IAAhJIgdAAIAAgkIBlAAIAAAkIgdAAIAABJg");
	this.shape_11.setTransform(107.45,23.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#731982").s().p("AgfAzQgOgHgIgNQgIgNAAgSQAAgRAIgNQAIgNAOgHQAOgHASAAQARAAANAGQAOAGAHAKQAIAKACAPIgrAAQgCgGgEgDQgFgCgHAAQgIAAgGAFQgFAGAAAKQAAALAFAGQAGAFAIAAQAHAAAFgCQAEgDACgGIArAAQgCAPgIAKQgHALgOAFQgNAGgRAAQgSAAgOgHg");
	this.shape_12.setTransform(95.275,23.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#731982").s().p("AghAzQgOgIgIgNQgHgNgBgRQABgQAHgNQAIgNAOgHQAOgIATAAQATAAAPAIQAOAHAIANQAHANAAAQQAAARgHANQgIANgOAIQgPAHgTAAQgTAAgOgHgAgOgPQgFAGAAAJQAAAKAFAGQAFAGAJAAQAJAAAGgGQAFgGAAgKQAAgJgFgGQgGgGgJAAQgJAAgFAGg");
	this.shape_13.setTransform(82.05,23.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#731982").s().p("AgnAyQgMgHgFgNQgHgNAAgRQAAgQAHgNQAFgNAMgHQALgIAPAAQANABAIAFQAIAFAEAJIAAgRIArAAIAABtIgrAAIAAgQQgDAIgJAFQgJAGgMAAQgQAAgKgIgAgMgPQgGAGAAAJQAAAKAGAHQAFAGAIAAQAKAAAGgGQAFgHAAgKQAAgJgFgGQgGgHgKAAQgIAAgFAHg");
	this.shape_14.setTransform(62.6,23.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#731982").s().p("AAQA3IAAgmIgfAAIAAAmIgrAAIAAhtIArAAIAAAmIAfAAIAAgmIArAAIAABtg");
	this.shape_15.setTransform(48.575,23.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#731982").s().p("Ag8BGIBoiWIARALIhoCWgAAXBIQgJgFgFgJQgFgIAAgKQAAgKAFgJQAFgIAJgFQAJgGANAAQANAAAJAGQAKAFAFAIQAFAJAAAKQAAAKgFAIQgFAJgKAFQgJAFgNABQgNgBgJgFgAAiAcQgEAFAAAHQAAAGAEAFQAEAEAHAAQAIAAADgEQAEgFAAgGQAAgHgEgFQgDgEgIAAQgHAAgEAEgAhDgGQgJgEgFgJQgFgIAAgLQAAgKAFgIQAFgJAJgFQAJgFANAAQANAAAKAFQAJAFAFAJQAFAIAAALQAAAJgFAJQgFAJgJAEQgKAGgNAAQgNAAgJgGgAg4gxQgEAEAAAIQAAAGAEAFQAEAEAHAAQAIAAADgEQAEgFAAgHQAAgGgEgFQgDgEgIAAQgHAAgEAEg");
	this.shape_16.setTransform(27.125,21.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#731982").s().p("AggBJQgPgFgIgKQgHgKgBgOQABgOAGgJQAHgKANgCQgKgEgGgJQgHgJAAgNQAAgNAIgKQAHgJAOgFQANgFARAAQASAAAOAFQANAFAIAJQAHAKAAANQAAANgGAJQgHAJgJAEQAMACAHAKQAHAJAAAOQAAAOgIAKQgIAKgOAFQgPAGgTAAQgSAAgOgGgAgNATQgGAEAAAIQAAAHAGAFQAFAEAIAAQAJAAAFgEQAGgFAAgHQAAgIgGgEQgFgFgJAAQgIAAgFAFgAgMgrQgFAEAAAHQAAAHAFAEQAFAEAHABQAJgBAEgEQAFgEAAgHQAAgHgFgEQgEgEgJAAQgHAAgFAEg");
	this.shape_17.setTransform(10.875,21.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textblock_03, new cjs.Rectangle(1.8,7.4,166.79999999999998,50.4), null);


(lib.textblock_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("AAMA3IgeguIAAAuIgrAAIAAhsIArAAIAAAtIAEAAQADAAADgCIAFgGIAOgXQAEgGADgDQAEgEAGgBQAHgBAJAAIAKAAIAAAhIgCAAIgGABIgEAFIgGAJQgDADgDACQgDABgDAAIgCAAIAoA3g");
	this.shape.setTransform(84.2,87.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.988)").s().p("AgfAzQgOgHgIgNQgIgNAAgSQAAgRAIgNQAIgNAOgHQAOgHASAAQARAAANAGQAOAGAHAKQAIAKACAPIgrAAQgCgGgEgDQgFgCgHAAQgIAAgGAFQgFAGAAAKQAAALAFAGQAGAFAIAAQAHAAAFgCQAEgDACgGIArAAQgCAPgIAKQgHALgOAFQgNAGgRAAQgSAAgOgHg");
	this.shape_1.setTransform(70.325,87.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.988)").s().p("AgaBLQgKgDgHgGQgGgFgFgIQgEgHAAgJIArAAQABAGADACQAEADAHAAQAHABAFgFQAEgEAAgJIAAgUQgFAIgIAGQgIAEgMAAQgWAAgJgMQgKgMAAgVIAAg9IArAAIAAA4QAAAJAEAFQADAFAIAAQAIAAAEgGQAEgFAAgMIAAg0IArAAIAABmQAAAOgFAKQgEAKgIAGQgHAGgKADQgKAEgPAAQgPAAgLgDg");
	this.shape_2.setTransform(56.675,89.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.988)").s().p("AAQA3IAAhLIgfAAIAABLIgrAAIAAhtIB1AAIAABtg");
	this.shape_3.setTransform(42.475,87.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.988)").s().p("AAmA3IAAhtIArAAIAABtgAhQA3IAAhtIArAAIAAAiIAUAAQARAAAKAGQALAFAEAJQAFAHAAAKQAAAIgFAJQgEAJgLAGQgKAGgRAAgAglAeIALAAQAGAAAEgEQADgDAAgGQAAgFgDgEQgEgDgGAAIgLAAg");
	this.shape_4.setTransform(26.025,87.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.988)").s().p("Ag3A3IAAhtIBKAAQAOABAHAEQAIAFADAHQADAGAAAGQAAALgIAGQgJAHgNAAQAQABAIAGQAIAHAAAMQAAAGgDAHQgEAHgJAEQgJAGgQAAgAgMAgIALAAQAFAAADgDQADgDAAgFQAAgFgDgDQgDgDgFAAIgLAAgAgMgJIAKAAQAFAAAEgDQADgDAAgFQAAgFgDgDQgDgDgFAAIgLAAg");
	this.shape_5.setTransform(10.3531,87.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.988)").s().p("AAQBKIAAg7IgfAzIAAAIIgrAAIAAhtIArAAIAAA7IAfgyIAAgJIArAAIAABtgAgegxQgLgIAAgQIAdAAQAAAGADADQADADAGAAQAFAAADgDQAEgDAAgGIAdAAQgBAQgLAIQgMAJgRAAQgUAAgKgJg");
	this.shape_6.setTransform(196.1,64.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.988)").s().p("AAmA3IAAhtIArAAIAABtgAhQA3IAAhtIArAAIAAAiIAUAAQARAAAKAGQALAFAEAJQAFAHAAAKQAAAIgFAJQgEAJgLAGQgKAGgRAAgAglAeIALAAQAGAAAEgEQADgDAAgGQAAgFgDgEQgEgDgGAAIgLAAg");
	this.shape_7.setTransform(179.625,66.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.988)").s().p("AAQA3IAAgmIgfAAIAAAmIgrAAIAAhtIArAAIAAAmIAfAAIAAgmIArAAIAABtg");
	this.shape_8.setTransform(163.075,66.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.988)").s().p("Ag3A3IAAhtIAsAAIAAAiIATAAQARAAALAGQAKAFAFAJQAFAHgBAKQABAIgFAJQgFAJgKAGQgLAGgRAAgAgLAeIALAAQAFAAADgEQAEgDAAgGQAAgFgEgEQgDgDgFAAIgLAAg");
	this.shape_9.setTransform(150,66.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.988)").s().p("Ag9A4IAAgjIAEAAQAGAAACgFQADgFAAgIIAAg6IBsAAIAABtIgrAAIAAhKIgWAAIAAAWQAAAZgLAOQgMAOgXABg");
	this.shape_10.setTransform(135.725,66.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.988)").s().p("AgoAyQgKgHgGgNQgHgNABgRQgBgQAHgNQAGgNAKgHQAMgIAPAAQANABAIAFQAIAFAEAJIAAgRIAsAAIAABtIgsAAIAAgQQgEAIgIAFQgJAGgMAAQgPAAgMgIgAgNgPQgFAGAAAJQAAAKAFAHQAGAGAIAAQAKAAAGgGQAFgHAAgKQAAgJgFgGQgGgHgKAAQgIAAgGAHg");
	this.shape_11.setTransform(121.45,66.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.988)").s().p("AgVA3IAAhJIgdAAIAAgkIBlAAIAAAkIgdAAIAABJg");
	this.shape_12.setTransform(108.9,66.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.988)").s().p("AAQA3IAAgmIgfAAIAAAmIgrAAIAAhtIArAAIAAAmIAfAAIAAgmIArAAIAABtg");
	this.shape_13.setTransform(96.025,66.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.988)").s().p("AggAzQgOgGgIgNQgHgNAAgTQAAgRAIgNQAHgNAOgHQAPgHASAAQASAAAOAHQAOAGAHAMQAIAMAAAPIAAAIIgBAHIhPAAQAAAJAGAFQAFAEAJAAQAGAAAFgBQAEgCACgEIAqAAQgDALgHAJQgIAIgNAEQgMAFgQAAQgTAAgPgHgAATgMQAAgJgFgFQgFgFgJAAQgIAAgFAFQgFAFAAAJIAlAAIAAAAg");
	this.shape_14.setTransform(82.275,66.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.988)").s().p("AAtA3IAAhMIgbBMIghAAIgchMIAABMIgqAAIAAhtIBBAAIAVBBIAVhBIBAAAIAABtg");
	this.shape_15.setTransform(65.875,66.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.988)").s().p("AghAzQgOgIgIgNQgHgNAAgRQAAgQAHgNQAIgNAOgHQAPgIASAAQAUAAAOAIQAOAHAIANQAHANABAQQgBARgHANQgIANgOAIQgOAHgUAAQgSAAgPgHgAgOgPQgGAGABAJQgBAKAGAGQAGAGAIAAQAKAAAFgGQAFgGAAgKQAAgJgFgGQgFgGgKAAQgIAAgGAGg");
	this.shape_16.setTransform(49.35,66.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.988)").s().p("AAtA3IAAhMIgbBMIghAAIgchMIAABMIgqAAIAAhtIBBAAIAVBBIAVhBIBAAAIAABtg");
	this.shape_17.setTransform(32.825,66.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.988)").s().p("AAQA3IAAg6IgfAyIAAAIIgrAAIAAhtIArAAIAAA8IAfgyIAAgKIArAAIAABtg");
	this.shape_18.setTransform(10.65,66.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(115,25,130,0.988)").s().p("AggAzQgOgGgIgNQgHgNAAgTQAAgRAIgNQAHgNAOgHQAPgHASAAQASAAAOAHQAOAGAHAMQAIAMAAAPIAAAIIgBAHIhPAAQAAAJAGAFQAFAEAJAAQAGAAAFgBQAEgCACgEIAqAAQgDALgHAJQgIAIgNAEQgMAFgQAAQgTAAgPgHgAATgMQAAgJgFgFQgFgFgJAAQgIAAgFAFQgFAFAAAJIAlAAIAAAAg");
	this.shape_19.setTransform(170.625,44.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(115,25,130,0.988)").s().p("AAQA3IAAg6IgfAyIAAAIIgrAAIAAhtIArAAIAAA8IAfgyIAAgKIArAAIAABtg");
	this.shape_20.setTransform(156.9,44.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(115,25,130,0.988)").s().p("AAQA3IAAgmIgfAAIAAAmIgrAAIAAhtIArAAIAAAmIAfAAIAAgmIArAAIAABtg");
	this.shape_21.setTransform(142.575,44.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(115,25,130,0.988)").s().p("AgnAyQgMgHgFgNQgHgNABgRQgBgQAHgNQAFgNAMgHQALgIAPAAQANABAIAFQAIAFAEAJIAAgRIArAAIAABtIgrAAIAAgQQgDAIgJAFQgJAGgMAAQgQAAgKgIgAgMgPQgGAGAAAJQAAAKAGAHQAFAGAIAAQAKAAAGgGQAFgHAAgKQAAgJgFgGQgGgHgKAAQgIAAgFAHg");
	this.shape_22.setTransform(127.85,44.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(115,25,130,0.988)").s().p("Ag3A3IAAhtIBKAAQAOABAHAEQAIAFADAHQADAGAAAGQAAALgIAGQgJAHgNAAQAQABAIAGQAIAHAAAMQAAAGgDAHQgEAHgJAEQgJAGgQAAgAgMAgIALAAQAFAAADgDQADgDAAgFQAAgFgDgDQgDgDgFAAIgLAAgAgMgJIAKAAQAFAAAEgDQADgDAAgFQAAgFgDgDQgDgDgFAAIgLAAg");
	this.shape_23.setTransform(114.7031,44.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(115,25,130,0.988)").s().p("AAQA3IAAg6IgfAyIAAAIIgrAAIAAhtIArAAIAAA8IAfgyIAAgKIArAAIAABtg");
	this.shape_24.setTransform(100.7,44.925);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(115,25,130,0.988)").s().p("AA0A3IgfguIAAAuIgqAAIAAguIgeAuIgyAAIAog3IgBAAQgFAAgCgBIgGgFIgFgJIgGgFIgFgBIgDAAIAAghIALAAQAJAAAGABQAGABAEAEQAEADAEAGIAPAXIAFAGQADACADAAIADAAIAAgtIAqAAIAAAtIAEAAQADAAADgCIAFgGIAPgXQAEgGADgDQAEgEAGgBQAHgBAJAAIAKAAIAAAhIgCAAIgGABIgEAFIgHAJIgFAFQgDABgDAAIgCAAIAoA3g");
	this.shape_25.setTransform(82.9,44.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(115,25,130,0.988)").s().p("AgaBLQgKgDgHgGQgGgFgFgHQgEgIAAgJIArAAQABAFADADQAEADAHAAQAHABAFgFQAEgEAAgJIAAgUQgFAIgIAGQgIAEgMAAQgWAAgJgMQgKgNAAgUIAAg9IArAAIAAA4QAAAJAEAFQADAFAIAAQAIAAAEgGQAEgFAAgMIAAg0IArAAIAABmQAAAOgFAKQgEAKgIAGQgHAGgKADQgKADgPABQgPAAgLgDg");
	this.shape_26.setTransform(65.125,47.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(115,25,130,0.988)").s().p("Ag9A4IAAgjIAEAAQAGAAACgFQADgFAAgIIAAg6IBsAAIAABtIgrAAIAAhKIgWAAIAAAWQAAAZgLAOQgMAOgXABg");
	this.shape_27.setTransform(50.625,45.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(115,25,130,0.988)").s().p("AgfAzQgOgHgIgNQgIgNAAgSQAAgRAIgNQAIgNAOgHQAOgHASAAQARAAANAGQAOAGAHAKQAIAKACAPIgrAAQgCgGgEgDQgFgCgHAAQgIAAgGAFQgFAGAAAKQAAALAFAGQAGAFAIAAQAHAAAFgCQAEgDACgGIArAAQgCAPgIAKQgHALgOAFQgNAGgRAAQgSAAgOgHg");
	this.shape_28.setTransform(37.425,44.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(115,25,130,0.988)").s().p("AgiBFQgPgJgIgSQgHgRAAgXQAAgZAKgTQAKgRASgKQASgJAZAAIAhAAIAAAhIghAAQgVAAgLAKQgLALgBASQAHgNALgGQAKgGANABQARAAAMAGQALAIAGAMQAFAKAAAQQAAAPgHANQgHANgPAIQgOAIgVAAQgUAAgPgKgAgMAGQgGAFAAALQAAAKAGAGQAFAHAJAAQAJAAAGgHQAFgGAAgKQAAgKgFgGQgGgGgJAAQgJAAgFAGg");
	this.shape_29.setTransform(24.025,42.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(115,25,130,0.988)").s().p("AghAzQgOgIgIgNQgHgNAAgRQAAgQAHgNQAIgNAOgHQAPgIASAAQAUAAAOAIQAOAHAIANQAHANABAQQgBARgHANQgIANgOAIQgOAHgUAAQgSAAgPgHgAgOgPQgGAGABAJQgBAKAGAGQAGAGAIAAQAKAAAFgGQAFgGAAgKQAAgJgFgGQgFgGgKAAQgIAAgGAGg");
	this.shape_30.setTransform(10.2,44.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(115,25,130,0.988)").s().p("AggAzQgOgGgIgNQgHgNAAgTQAAgRAIgNQAHgNAOgHQAPgHASAAQASAAAOAHQAOAGAHAMQAIAMAAAPIAAAIIgBAHIhPAAQAAAJAGAFQAFAEAJAAQAGAAAFgBQAEgCACgEIAqAAQgDALgHAJQgIAIgNAEQgMAFgQAAQgTAAgPgHgAATgMQAAgJgFgFQgFgFgJAAQgIAAgFAFQgFAFAAAJIAlAAIAAAAg");
	this.shape_31.setTransform(132.675,23.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(115,25,130,0.988)").s().p("AghAzQgOgIgIgNQgHgNgBgRQABgQAHgNQAIgNAOgHQAOgIATAAQATAAAPAIQAOAHAIANQAHANAAAQQAAARgHANQgIANgOAIQgPAHgTAAQgTAAgOgHgAgOgPQgFAGAAAJQAAAKAFAGQAFAGAJAAQAJAAAGgGQAFgGAAgKQAAgJgFgGQgGgGgJAAQgJAAgFAGg");
	this.shape_32.setTransform(119.4,23.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(115,25,130,0.988)").s().p("AAQA3IAAgmIgfAAIAAAmIgrAAIAAhtIArAAIAAAmIAfAAIAAgmIArAAIAABtg");
	this.shape_33.setTransform(105.525,23.725);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(115,25,130,0.988)").s().p("AgUA3IAAhJIgeAAIAAgkIBlAAIAAAkIgeAAIAABJg");
	this.shape_34.setTransform(92.65,23.725);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(115,25,130,0.988)").s().p("AgoAyQgLgHgGgNQgFgNAAgRQAAgQAFgNQAGgNALgHQAMgIAPAAQANABAIAFQAIAFAEAJIAAgRIAsAAIAABtIgsAAIAAgQQgEAIgIAFQgIAGgNAAQgPAAgMgIgAgNgPQgFAGAAAJQAAAKAFAHQAGAGAJAAQAJAAAGgGQAFgHAAgKQAAgJgFgGQgGgHgJAAQgJAAgGAHg");
	this.shape_35.setTransform(79.4,23.725);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(115,25,130,0.988)").s().p("Ag9A4IAAgjIAEAAQAGAAACgFQADgFAAgIIAAg6IBsAAIAABtIgrAAIAAhKIgWAAIAAAWQAAAZgLAOQgMAOgXABg");
	this.shape_36.setTransform(65.075,23.825);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(115,25,130,0.988)").s().p("AAQA3IAAhLIgfAAIAABLIgrAAIAAhtIB1AAIAABtg");
	this.shape_37.setTransform(51.175,23.725);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(115,25,130,0.988)").s().p("AgfAzQgOgHgIgNQgIgNAAgSQAAgRAIgNQAIgNAOgHQAOgHASAAQARAAANAGQAOAGAHAKQAIAKACAPIgrAAQgCgGgEgDQgFgCgHAAQgIAAgGAFQgFAGAAAKQAAALAFAGQAGAFAIAAQAHAAAFgCQAEgDACgGIArAAQgCAPgIAKQgHALgOAFQgNAGgRAAQgSAAgOgHg");
	this.shape_38.setTransform(37.575,23.725);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(115,25,130,0.988)").s().p("AggAzQgOgGgIgNQgHgNAAgTQAAgRAIgNQAHgNAOgHQAPgHASAAQASAAAOAHQAOAGAHAMQAIAMAAAPIAAAIIgBAHIhPAAQAAAJAGAFQAFAEAJAAQAGAAAFgBQAEgCACgEIAqAAQgDALgHAJQgIAIgNAEQgMAFgQAAQgTAAgPgHgAATgMQAAgJgFgFQgFgFgJAAQgIAAgFAFQgFAFAAAJIAlAAIAAAAg");
	this.shape_39.setTransform(24.475,23.725);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(115,25,130,0.988)").s().p("Ag+BNIAAiZIBwAAIAAAiIhDAAIAAAbIAkAAQANAAAKAFQAKAHAFAJQAHAKgBANQABAOgHAKQgFAMgKAFQgKAHgNAAgAgRAtIARAAQAHABAFgFQAEgEABgIQAAgHgFgFQgFgFgHABIgRAAg");
	this.shape_40.setTransform(11.2,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textblock_02, new cjs.Rectangle(1.5,7.5,209.2,92.8), null);


(lib.textblock_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoAyQgLgHgGgNQgFgNAAgRQAAgQAFgNQAGgNALgHQAMgIAPAAQANABAIAFQAIAFAEAJIAAgRIAsAAIAABtIgsAAIAAgQQgEAIgIAFQgIAGgNAAQgPAAgMgIgAgNgPQgFAGAAAJQAAAKAFAHQAGAGAJAAQAJAAAGgGQAFgHAAgKQAAgJgFgGQgGgHgJAAQgJAAgGAHg");
	this.shape.setTransform(188.3,66.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQA3IAAgmIgfAAIAAAmIgrAAIAAhtIArAAIAAAmIAfAAIAAgmIArAAIAABtg");
	this.shape_1.setTransform(174.275,66.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghAzQgOgIgIgNQgIgNABgRQgBgQAIgNQAIgNAOgHQAPgIASAAQAUAAANAIQAPAHAIANQAIANAAAQQAAARgIANQgIANgPAIQgNAHgUAAQgSAAgPgHgAgOgPQgGAGAAAJQAAAKAGAGQAGAGAIAAQAJAAAGgGQAFgGAAgKQAAgJgFgGQgGgGgJAAQgIAAgGAGg");
	this.shape_2.setTransform(160.4,66.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWBNIAAgNQgVgBgOgJQgPgJgIgOQgHgPAAgQQAAgQAHgPQAIgOAPgIQAOgJAVAAIAAgOIAtAAIAAAOQAVAAAPAJQAOAIAIAOQAHAPAAAQQAAAQgHAPQgIAOgOAJQgPAJgVABIAAANgAASAbIAFAAQAKAAAFgIQAGgIAAgLQAAgLgGgIQgFgHgKAAIgFAAgAglgTQgHAIAAALQAAALAHAIQAFAIALAAIADAAIAAg1IgDAAQgLAAgFAHg");
	this.shape_3.setTransform(144.5,64.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoAyQgKgHgGgNQgHgNABgRQgBgQAHgNQAGgNAKgHQAMgIAPAAQANABAIAFQAIAFAEAJIAAgRIArAAIAABtIgrAAIAAgQQgEAIgIAFQgJAGgMAAQgPAAgMgIgAgNgPQgFAGAAAJQAAAKAFAHQAGAGAIAAQAKAAAGgGQAFgHAAgKQAAgJgFgGQgGgHgKAAQgIAAgGAHg");
	this.shape_4.setTransform(127.75,66.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmA3IAAhtIBNAAIAAAnIgjAAIAABGg");
	this.shape_5.setTransform(116.475,66.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggAzQgOgGgIgNQgHgNAAgTQAAgRAIgNQAHgNAOgHQAPgHASAAQASAAAOAHQAOAGAHAMQAIAMAAAPIAAAIIgBAHIhPAAQAAAJAGAFQAFAEAJAAQAGAAAFgBQAEgCACgEIAqAAQgDALgHAJQgIAIgNAEQgMAFgQAAQgTAAgPgHgAATgMQAAgJgFgFQgFgFgJAAQgIAAgFAFQgFAFAAAJIAlAAIAAAAg");
	this.shape_6.setTransform(104.725,66.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAuBNIAAhhIgcBhIghAAIgehhIAABhIgsAAIAAiZIA6AAIAgBjIAghjIA5AAIAACZg");
	this.shape_7.setTransform(87.775,64.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoAyQgKgHgHgNQgFgNAAgRQAAgQAFgNQAHgNAKgHQAMgIAPAAQANABAIAFQAIAFAEAJIAAgRIAsAAIAABtIgsAAIAAgQQgEAIgIAFQgIAGgNAAQgPAAgMgIgAgNgPQgFAGAAAJQAAAKAFAHQAGAGAIAAQAKAAAGgGQAFgHAAgKQAAgJgFgGQgGgHgKAAQgIAAgGAHg");
	this.shape_8.setTransform(64.65,66.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUA3IAAhJIgeAAIAAgkIBlAAIAAAkIgdAAIAABJg");
	this.shape_9.setTransform(52.1,66.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag/BNIAAiWIArAAIAAAQQAFgIAJgGQAHgFANAAQAPAAALAHQALAHAGANQAHANAAASQAAARgHAMQgGANgLAHQgLAHgPAAQgIAAgHgCQgHgDgFgFQgEgEgDgFIAAA6gAgPgjQgGAGAAALQAAAKAGAHQAFAFAJAAQAJAAAFgFQAGgHAAgKQAAgLgGgGQgFgGgJAAQgJAAgFAGg");
	this.shape_10.setTransform(39.6,68.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnAyQgMgHgFgNQgHgNAAgRQAAgQAHgNQAFgNAMgHQALgIAPAAQANABAHAFQAJAFAEAJIAAgRIArAAIAABtIgrAAIAAgQQgDAIgKAFQgIAGgMAAQgQAAgKgIgAgMgPQgGAGAAAJQAAAKAGAHQAFAGAIAAQAKAAAGgGQAFgHAAgKQAAgJgFgGQgGgHgKAAQgIAAgFAHg");
	this.shape_11.setTransform(24.45,66.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AANA3IgfguIAAAuIgrAAIAAhsIArAAIAAAtIAEAAQADAAADgCIAFgGIAOgXQADgGAEgDQAFgEAFgBQAHgBAJAAIAKAAIAAAhIgCAAIgGABIgEAFIgGAJQgDADgCACQgEABgDAAIgCAAIAoA3g");
	this.shape_12.setTransform(10.95,66.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAQA3IAAgcIgHAAIgSAcIgxAAIAZgjQgMgFgFgJQgGgJAAgLQAAgLAGgJQAFgJAKgFQAJgFANgBIBIAAIAABtgAgIgWQgEAEAAAFQAAAGAEAEQADADAGAAIAPAAIAAgbIgPAAQgGABgDAEg");
	this.shape_13.setTransform(134.825,45.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoAyQgLgHgGgNQgFgNAAgRQAAgQAFgNQAGgNALgHQAMgIAPAAQANABAIAFQAIAFAEAJIAAgRIAsAAIAABtIgsAAIAAgQQgEAIgIAFQgIAGgNAAQgPAAgMgIgAgNgPQgFAGAAAJQAAAKAFAHQAGAGAJAAQAJAAAGgGQAFgHAAgKQAAgJgFgGQgGgHgJAAQgJAAgGAHg");
	this.shape_14.setTransform(120.8,45.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAMA3IgdguIAAAuIgrAAIAAhsIArAAIAAAtIADAAQAEAAACgCIAFgGIAOgXQADgGAFgDQADgEAHgBQAFgBAKAAIALAAIAAAhIgDAAIgFABIgGAFIgFAJQgDADgDACQgCABgFAAIgBAAIAoA3g");
	this.shape_15.setTransform(107.3,45.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgfAzQgOgHgIgNQgIgNAAgSQAAgRAIgNQAIgNAOgHQAOgHASAAQARAAANAGQAOAGAHAKQAIAKACAPIgrAAQgCgGgEgDQgFgCgHAAQgIAAgGAFQgFAGAAAKQAAALAFAGQAGAFAIAAQAHAAAFgCQAEgDACgGIArAAQgCAPgIAKQgHALgOAFQgNAGgRAAQgSAAgOgHg");
	this.shape_16.setTransform(93.425,45.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag3A3IAAhtIBKAAQAOABAHAEQAIAFADAHQADAGAAAGQAAALgIAGQgJAHgNAAQAQABAIAGQAIAHAAAMQAAAGgDAHQgEAHgJAEQgJAGgQAAgAgMAgIALAAQAFAAADgDQADgDAAgFQAAgFgDgDQgDgDgFAAIgLAAgAgMgJIAKAAQAFAAAEgDQADgDAAgFQAAgFgDgDQgDgDgFAAIgLAAg");
	this.shape_17.setTransform(80.6031,45.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AghAzQgOgIgIgNQgIgNAAgRQAAgQAIgNQAIgNAOgHQAPgIASAAQATAAAOAIQAPAHAIANQAIANAAAQQAAARgIANQgIANgPAIQgOAHgTAAQgSAAgPgHgAgOgPQgFAGgBAJQABAKAFAGQAGAGAIAAQAJAAAGgGQAFgGABgKQgBgJgFgGQgGgGgJAAQgIAAgGAGg");
	this.shape_18.setTransform(67.05,45.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AANA3IgfguIAAAuIgrAAIAAhsIArAAIAAAtIAEAAQADAAADgCIAFgGIAOgXQADgGAEgDQAFgEAFgBQAHgBAJAAIAKAAIAAAhIgCAAIgGABIgEAFIgGAJQgDADgCACQgEABgDAAIgCAAIAnA3g");
	this.shape_19.setTransform(53.7,45.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAQA3IAAgmIgfAAIAAAmIgrAAIAAhtIArAAIAAAmIAfAAIAAgmIArAAIAABtg");
	this.shape_20.setTransform(39.125,45.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgoAyQgKgHgHgNQgFgNAAgRQAAgQAFgNQAHgNAKgHQAMgIAPAAQANABAHAFQAJAFAEAJIAAgRIAsAAIAABtIgsAAIAAgQQgDAIgKAFQgIAGgMAAQgQAAgLgIgAgNgPQgFAGAAAJQAAAKAFAHQAGAGAJAAQAJAAAFgGQAGgHAAgKQAAgJgGgGQgFgHgJAAQgJAAgGAHg");
	this.shape_21.setTransform(24.4,45.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgiBFQgPgJgIgSQgHgRAAgXQAAgaAKgRQAKgTASgIQASgKAZAAIAhAAIAAAhIghAAQgVABgLAJQgLAKgBAUQAHgOALgGQAKgGANABQARgBAMAIQALAGAGANQAFALAAAPQAAAPgHANQgHANgPAHQgOAJgVAAQgUAAgPgKgAgMAGQgGAFAAALQAAAKAGAHQAFAGAJAAQAJAAAGgGQAFgHAAgKQAAgKgFgGQgGgGgJgBQgJABgFAGg");
	this.shape_22.setTransform(10.675,43.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#731982").s().p("AAQA3IAAgcIgHAAIgSAcIgxAAIAZgjQgMgFgFgJQgGgJAAgLQAAgLAGgJQAFgJAKgFQAJgFANgBIBIAAIAABtgAgIgWQgEAEAAAFQAAAGAEAEQADADAGAAIAPAAIAAgbIgPAAQgGABgDAEg");
	this.shape_23.setTransform(148.875,24.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#731982").s().p("AgoAyQgKgHgHgNQgFgNAAgRQAAgQAFgNQAHgNAKgHQAMgIAPAAQANABAIAFQAIAFAEAJIAAgRIAsAAIAABtIgsAAIAAgQQgEAIgIAFQgIAGgNAAQgPAAgMgIgAgNgPQgFAGAAAJQAAAKAFAHQAGAGAJAAQAJAAAGgGQAFgHAAgKQAAgJgFgGQgGgHgJAAQgJAAgGAHg");
	this.shape_24.setTransform(134.85,24.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#731982").s().p("AAQA3IAAgmIgfAAIAAAmIgrAAIAAhtIArAAIAAAmIAfAAIAAgmIArAAIAABtg");
	this.shape_25.setTransform(120.825,24.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#731982").s().p("Ag2A3IAAhtIAqAAIAAAiIAUAAQARAAALAGQALAFAEAJQAEAHABAKQgBAIgEAJQgEAJgLAGQgLAGgRAAgAgMAeIAMAAQAFAAAEgEQADgDAAgGQAAgFgDgEQgEgDgFAAIgMAAg");
	this.shape_26.setTransform(107.75,24.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#731982").s().p("Ag9A4IAAgjIAEAAQAGAAACgFQADgFAAgIIAAg6IBsAAIAABtIgrAAIAAhKIgWAAIAAAWQAAAZgLAOQgMAOgXABg");
	this.shape_27.setTransform(93.475,24.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#731982").s().p("AgnAyQgLgHgHgNQgFgNgBgRQABgQAFgNQAHgNALgHQALgIAPAAQANABAHAFQAJAFAEAJIAAgRIAsAAIAABtIgsAAIAAgQQgDAIgKAFQgHAGgNAAQgPAAgLgIgAgNgPQgFAGAAAJQAAAKAFAHQAGAGAJAAQAJAAAFgGQAGgHAAgKQAAgJgGgGQgFgHgJAAQgJAAgGAHg");
	this.shape_28.setTransform(79.2,24.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#731982").s().p("AgaBLQgKgDgHgFQgGgGgFgIQgEgHAAgIIArAAQABAEADAEQAEADAHAAQAHgBAFgEQAEgEAAgJIAAgUQgFAJgIAEQgIAGgMAAQgWAAgJgNQgKgMAAgVIAAg8IArAAIAAA3QAAAJAEAFQADAFAIAAQAIAAAEgFQAEgHAAgKIAAg0IArAAIAABkQAAAPgFAKQgEALgIAFQgHAHgKADQgKACgPAAQgPABgLgDg");
	this.shape_29.setTransform(65.225,26.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#731982").s().p("AgVA3IAAhJIgdAAIAAgkIBlAAIAAAkIgeAAIAABJg");
	this.shape_30.setTransform(52.5,24.275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#731982").s().p("Ag+BNIAAiWIArAAIAAAQQADgIAJgGQAJgFANAAQAOAAALAHQALAHAGANQAGANAAASQAAARgGAMQgGANgLAHQgMAHgOAAQgJAAgFgCQgIgDgFgFQgEgEgCgFIAAA6gAgQgjQgFAGAAALQAAAKAFAHQAGAFAKAAQAHAAAGgFQAGgHAAgKQAAgLgGgGQgGgGgHAAQgKAAgGAGg");
	this.shape_31.setTransform(40,26.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#731982").s().p("AAQA3IAAg6IgfAyIAAAIIgrAAIAAhtIArAAIAAA8IAfgyIAAgKIArAAIAABtg");
	this.shape_32.setTransform(25.25,24.275);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#731982").s().p("Ag/BNIAAiZIBLAAQAXAAANAKQANALAAATQgBAPgHAJQgIAJgOACQAOABAKAKQAIAJABAPQgBAUgNAMQgNALgYAAgAgQAtIAPAAQAIAAAFgEQAFgFAAgIQgBgHgEgFQgFgEgIAAIgPAAgAgQgOIAOAAQAHAAAFgFQAFgEAAgIQAAgHgEgEQgGgFgHAAIgOAAg");
	this.shape_33.setTransform(11.25,22.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textblock_01, new cjs.Rectangle(1.6,8,196.5,71.6), null);


(lib.shadow_sihluette = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlnH8QBFjlAZhvQAri9gbiJQhDlXgGglQgnjtAOhqQARh3BckrQBakjAig1QAbgrA1gQQAegJA7gHQAcgFAxgTQAxgPA4AGQBsAMAgAKQBHAYAMBAQAGAiggAnQgYAcg6AuQhbBJgLAJQg6AygeAsQhYCCgmBKQg4BxABBVIABCsQAGBTAlAyQAtA9A9AgQBAAiA+gJQA1gIB8iWQBAhOBZh1QA3g9A6gSQBFgVgOBaQgNBRiMDJQglA2hMBpQhABagcAvQg4Bfh9FFIiuHNQgyCCggIJQgQEFgGDsQABACq4AAQFPv0A/jpg");
	this.shape.setTransform(75.7509,175.3143);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow_sihluette, new cjs.Rectangle(0,0,151.5,350.7), null);


(lib.round_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#731982").s().p("AlzFzQiZiZgBjaQABjZCZiZQCbiaDYAAQDZAACbCaQCZCZABDZQgBDaiZCZQibCajZAAQjYAAibiag");
	this.shape.setTransform(30.3348,30.3203,0.5773,0.5773);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_04, new cjs.Rectangle(0,0,60.7,60.7), null);


(lib.round_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjVDWQhahYAAh+QAAh9BahYQBYhZB9AAQB+AABZBZQBYBYAAB9QAAB+hYBYQhZBZh+AAQh9AAhYhZg");
	this.shape.setTransform(30.35,30.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_03, new cjs.Rectangle(0,0,60.7,60.7), null);


(lib.round_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#28B956").s().p("AlzFzQiaiZAAjaQAAjZCaiZQCbiaDYAAQDaAACZCaQCaCZAADZQAADaiaCZQiZCajaAAQjYAAibiag");
	this.shape.setTransform(30.3152,30.3203,0.5773,0.5773);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_02, new cjs.Rectangle(0,0,60.7,60.7), null);


(lib.round_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B956").s().p("AlzFzQiZiZgBjaQABjZCZiZQCbiaDYAAQDZAACbCaQCZCZABDZQgBDaiZCZQibCajZAAQjYAAibiag");
	this.shape.setTransform(30.3348,30.3203,0.5773,0.5773);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_01, new cjs.Rectangle(0,0,60.7,60.7), null);


(lib.round = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AouIuQh+h+g5iaQgwiBAAiVQAAlGDnjoQDojnFGAAQFHAADnDnQDoDoAAFGQAACVgwCBQg5Cbh/B9QjnDolHAAQlGAAjojog");
	this.shape.setTransform(79,79);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round, new cjs.Rectangle(0,0,158,158), null);


(lib.podstrochnik = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbAxIAAgmIgJAAQgJAAgFACQgEADgHAMIgPAVIgVAAIASgaQAJgNAIgBQgPgCgGgHQgIgJAAgKQAAgNAKgJQAJgHARgBIAtAAIAABigAgPgeQgEAFAAAGQAAAIAGAFQAGAEAQAAIASAAIAAghIgYAAQgOAAgEAFg");
	this.shape.setTransform(162.825,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZA/QgKgIgGgMQgFgNAAgfQAAgnAOgOQANgNAbAAIATAAQABgBAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIAPAAQgBAKgEAEQgDAEgFABIgVABQgUAAgIAEQgHAEgEAJQgDAJAAAOQAGgKAIgFQAJgEAKAAQATAAANANQANAOAAAVQAAASgHALQgGALgJAGQgJAGgPAAQgRAAgJgIgAgTgFQgIAKAAARQAAARAJAKQAIAIALABQANAAAHgLQAIgLAAgRQAAgPgHgKQgHgJgOgBQgNAAgHALg");
	this.shape_1.setTransform(153.125,14.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggAnQgNgOAAgYQAAgYANgOQANgOAUAAQATAAANAOQANANAAAYIAAAEIhJAAQABARAIAIQAIAJAMAAQAJAAAGgFQAHgFAEgKIARACQgEAPgLAJQgLAIgRAAQgVAAgNgNgAgSgdQgIAIAAANIA2AAQgBgNgFgGQgIgKgNAAQgLAAgIAIg");
	this.shape_2.setTransform(142.475,16.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAxIAAhUIggAAIAAgOIBPAAIAAAOIggAAIAABUg");
	this.shape_3.setTransform(133.075,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAnQgMgOAAgYQAAgQAFgMQAFgMALgGQALgGAMAAQAQAAAKAJQALAIADAPIgRACQgCgKgGgFQgGgFgIAAQgMAAgIAJQgIAJAAATQAAAUAIAJQAHAJAMAAQAKAAAGgGQAHgGACgNIAQADQgDARgLAJQgLAKgQAAQgUAAgMgNg");
	this.shape_4.setTransform(118.925,16.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAbAxIAAgmIgJAAQgJAAgFACQgEADgHAMIgPAVIgVAAIASgaQAJgNAIgBQgPgCgGgHQgIgJAAgKQAAgNAKgJQAJgHARgBIAtAAIAABigAgPgeQgEAFAAAGQAAAIAGAFQAGAEAQAAIASAAIAAghIgYAAQgOAAgEAFg");
	this.shape_5.setTransform(102.875,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeAnQgMgOAAgYQAAgQAFgMQAFgMALgGQALgGAMAAQAQAAAKAJQALAIADAPIgRACQgCgKgGgFQgGgFgIAAQgMAAgIAJQgIAJAAATQAAAUAIAJQAHAJAMAAQAKAAAGgGQAHgGACgNIAQADQgDARgLAJQgLAKgQAAQgUAAgMgNg");
	this.shape_6.setTransform(93.725,16.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHAxIAAhUIggAAIAAgOIBPAAIAAAOIggAAIAABUg");
	this.shape_7.setTransform(84.525,16.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggAnQgNgOAAgYQAAgYANgOQANgOAUAAQATAAANAOQANANAAAYIAAAEIhJAAQABARAIAIQAIAJAMAAQAJAAAGgFQAHgFAEgKIARACQgEAPgLAJQgLAIgRAAQgVAAgNgNgAgSgdQgIAIAAANIA2AAQgBgNgFgGQgIgKgNAAQgLAAgIAIg");
	this.shape_8.setTransform(75.425,16.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkAsQgJgIAAgMQAAgIAEgGQADgGAFgDQAGgDAGgCIAPgCQAUgDAJgDIAAgFQAAgKgEgEQgHgGgMAAQgLAAgGAEQgGAFgDAKIgQgCQACgLAFgGQAGgHAJgDQAKgEAMAAQANAAAHADQAIADAEAFQAEAEABAHIABAQIAAAVQAAAYABAGQABAGAEAGIgSAAQgDgFAAgHQgKAHgIAEQgIADgKAAQgQAAgJgIgAgDAGQgLACgEACQgEACgDADQgCAEAAAEQAAAHAFAEQAFAFAKAAQAJAAAHgEQAIgFADgHQADgGAAgLIAAgGQgJAEgRACg");
	this.shape_9.setTransform(64.775,16.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAXAxIAAgsIgtAAIAAAsIgRAAIAAhiIARAAIAAAqIAtAAIAAgqIARAAIAABig");
	this.shape_10.setTransform(54.275,16.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYAxIAAhKIguBKIgSAAIAAhiIARAAIAABLIAuhLIASAAIAABig");
	this.shape_11.setTransform(43.575,16.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAXAxIAAgnQgPAEgNAAQgLAAgIgFQgJgGgDgIQgDgHAAgLIAAgaIARAAIAAATQAAAMABAFQABAGAGAEQAFAEAJAAQAIgBAPgEIAAgtIARAAIAABig");
	this.shape_12.setTransform(32.925,16.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkAsQgJgIAAgMQAAgIAEgGQADgGAFgDQAGgDAGgCIAPgCQAUgDAJgDIAAgFQAAgKgEgEQgHgGgMAAQgLAAgGAEQgGAFgDAKIgQgCQACgLAFgGQAGgHAJgDQAKgEAMAAQANAAAHADQAIADAEAFQAEAEABAHIABAQIAAAVQAAAYABAGQABAGAEAGIgSAAQgDgFAAgHQgKAHgIAEQgIADgKAAQgQAAgJgIgAgDAGQgLACgEACQgEACgDADQgCAEAAAEQAAAHAFAEQAFAFAKAAQAJAAAHgEQAIgFADgHQADgGAAgLIAAgGQgJAEgRACg");
	this.shape_13.setTransform(23.325,16.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAjBEIAAhAIhGAAIAABAIgSAAIAAiIIASAAIAAA5IBGAAIAAg5IASAAIAACIg");
	this.shape_14.setTransform(11.15,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.podstrochnik, new cjs.Rectangle(0,0,173.2,29.9), null);


(lib.ok = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B956").s().p("AisCtQhJhIAAhlQAAhkBJhJQBIhHBkAAQBmAABIBHQBHBIABBlQgBBlhHBIQhIBIhmAAQhkAAhIhIgAidieQhDBCAABcQAABcBDBCQBBBDBcAAQBdAABDhDQBBhCAAhcQAAhchBhCQhDhBhdAAQhcAAhBBBgAhygOIAOgPIBUBUICWiWIAPAPIilCjg");
	this.shape.setTransform(24.55,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ok, new cjs.Rectangle(0,0,49.1,49), null);


(lib.megafon_round = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmGOkQi0hMiLiNQiMiMhMi0QhPi9AAjNQAAjNBPi9QBMi1CMiMQCLiMC0hNQC7hQDLAAQDMAAC7BQQC0BNCLCMQCLCMBNC1QBPC9AADNQAADNhPC9QhMC1iMCLQiLCNi0BMQi7BQjMgBQjMABi6hQg");
	this.shape.setTransform(35.6288,35.8966,0.3548,0.3548);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.megafon_round, new cjs.Rectangle(0,0,71.3,71.8), null);


(lib.megafon_horiz_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7EXIAAg+Ig1AAQh4ABg9gxQg4gsgPhYQgFgeAAglQAAh6A6g9QA+hBCCAAIDvAAQCCAAA+BBQA6A9AAB6QAAAlgFAeQgPBYg4AsQg9Axh4gBIg1AAIAAA+gAA8B0IA4AAQA5AAAfgWQAagSAPgnQAHgSAAgxQAAhLghglQgegjg2AAIhLAAgAjbiOQggAlAABLQAAAxAHASQAPAnAaASQAfAWA5AAIA4AAIAAklIhLAAQg2AAgfAjg");
	this.shape.setTransform(80.2324,9.7899,0.2074,0.2074);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTD3QiHAAg+g9Qg8g7AAh+IAAgBQAAh/A7g7QA9g8CIAAIApAAQCIAAA9A8QA7A7AAB/IAAABQAAB+g8A7Qg+A9iHAAgAiAhsQgeAiAABLQAABMAgAjQAhAjBLAAIAlAAQBLAAAhgjQAggjAAhMIAAgBQAAhKgfgiQghglhMAAIglAAQhNAAghAlg");
	this.shape_1.setTransform(95.4461,10.5521,0.2074,0.2074);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjWDxIAAmZQAAgcAVgWQAVgWAeAAIFlAAIAABmIkpAAQgFAAgDADQgDADAAAEIAAFxg");
	this.shape_2.setTransform(57.863,10.578,0.2074,0.2074);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiODxQgeAAgVgWQgVgVAAgdIAAlRQAAgcAVgWQAVgWAeAAIFlAAIAABmIkpAAQgFAAgDADQgDADAAAEIAABKIEtAAIAABhIktAAIAABWQAAAEADADQADADAFAAIEpAAIAABmg");
	this.shape_3.setTransform(47.2123,10.578,0.2074,0.2074);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhoDNIiflnIAAG0Ih5AAIAAnAQAAg6AighQAegdAsAAQAqAAAdAWQAcAWAVAvICcFqICelqQAUgvAcgWQAegWApAAQAsAAAeAdQAiAhAAA6IAAHAIh5AAIAAm0IifFnQgiBShHAAQhFAAgjhSg");
	this.shape_4.setTransform(33.1134,9.7225,0.2074,0.2074);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACpD3IgrhmIj6AAIgsBmIiAAAIDGmsQAPgfAcgSQAagQAdAAQAfAAAZAQQAcASAPAfIDGGsgABUAxIhKivQgDgGgHAAQgGAAgDAGIhKCvICnAAg");
	this.shape_5.setTransform(66.6313,10.4588,0.2074,0.2074);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AB6DxIAAjDIjzAAIAADDIh6AAIAAnhIB6AAIAAC3IDzAAIAAi3IB6AAIAAHhg");
	this.shape_6.setTransform(107.8961,10.578,0.2074,0.2074);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiFE3QhtiFAAitQAAjHCOiOQCNiNDIAAIACAAIAAHdQAAAFgGAAIg9AAIAAABQgPAAgLALQgLAMgBAPIAAGyQikgjhriEgABqi2QgSASAAAZQAAAZASASQASASAYAAQAZAAASgSQASgSAAgZQAAgZgSgSQgSgRgZAAQgZAAgRARg");
	this.shape_7.setTransform(5.0349,9.9817,0.2074,0.2074);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AkHHgIAAmiQAAgGAFABIA7AAQARAAALgMQAMgMAAgQIAAnyQCzAXB6CHQB6CJAAC5QAADHiNCOQiNCOjJAAQgZAAgTgCgABHCfQgSASAAAZQAAAZASARQASASAZAAQAZAAASgSQARgRAAgZQAAgZgRgSQgSgRgZAAQgZAAgSARgAhGCfQgRASAAAZQAAAZARARQASASAZAAQAZAAARgSQASgRAAgZQAAgZgSgSQgRgRgZAAQgZAAgSARgAjUCfQgRASAAAZQAAAZARARQASASAZAAQAZAAASgSQASgRAAgZQAAgZgSgSQgSgRgZAAQgZAAgSARg");
	this.shape_8.setTransform(14.5967,10.1321,0.2074,0.2074);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.megafon_horiz_logo, new cjs.Rectangle(0,0.1,113,20.099999999999998), null);


(lib.megafon_face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B956").s().p("AimStIAAyBQABghAWgWQAXgXAggBIB9AAQAEAAADgDQADgDAAgEIAAx/IB4AAIAASvIgBAAQAAAigXAYQgYAXgiAAIh5AAQgEAAgDAEQgEADAAAEIAAROg");
	this.shape.setTransform(9.567,42.4497,0.3548,0.3548);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B956").s().p("AhXBYQgkgkAAg0QAAgyAkgmQAkgkAzAAQAzAAAlAkQAkAlAAAzQAAA0gkAkQgkAlg0AAQgzAAgkglg");
	this.shape_1.setTransform(4.4138,30.5467,0.3548,0.3548);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.megafon_face, new cjs.Rectangle(0,0,15.5,84.9), null);


(lib.megafon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9EgIAAg/Ig2AAQh7AAg/gzQg5gsgPhcQgGgeAAgoQAAh9A8hAQA/hDCGABID1AAQCGgBA/BDQA8BAAAB9QAAAngFAfQgQBbg4AtQhAAzh7AAIg2AAIAAA/gAA+B3IA5AAQA7AAAggVQAbgTAPgpQAHgTAAgyQAAhNgigmQgfgkg4AAIhMAAgAjgiSQgiAmAABNQAAAyAIATQAPApAaATQAgAVA7AAIA5AAIAAktIhMAAQg4AAgfAkg");
	this.shape.setTransform(96.7934,10.6832,0.3548,0.3548);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUEAQiLAAg/g/Qg9g9AAiDIAAgBQAAiDA9g9QA+g/CLAAIArAAQCLAAA/A/QA8A9AACDIAAABQAACDg9A9Qg/A/iLAAgAiDhwQgfAjAABNIAAABQAABPAhAkQAiAkBMAAIAnAAQBMAAAigkQAhgkAAhPIAAgBQAAhMgggkQgigmhNAAIgnAAQhPAAghAmg");
	this.shape_1.setTransform(123.5263,12.0225,0.3548,0.3548);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjcD5IAAmnQAAgeAVgVQAVgXAgAAIFuAAIAABpIkxAAQgEAAgEADQgCADAAAFIAAF9g");
	this.shape_2.setTransform(57.5102,12.0758,0.3548,0.3548);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiSD5QgfAAgWgXQgUgWgBgdIAAldQABgeAUgVQAWgXAfAAIFuAAIAABpIkxAAQgEAAgDADQgDADAAAFIAABLIE0AAIAABlIk0AAIAABZQAAAEADAEQADADAEAAIExAAIAABpg");
	this.shape_3.setTransform(38.7954,12.0758,0.3548,0.3548);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhrDUIijlzIAAHDIh8AAIAAnPQAAg9AjgiQAfgeAsAAQArAAAeAYQAdAWAVAwIChF2ICil2QAVgwAdgWQAegYArAAQAtAAAeAeQAjAiAAA9IAAHPIh8AAIAAnDIijFzQgjBVhJAAQhHAAgkhVg");
	this.shape_4.setTransform(14.0228,10.5591,0.3548,0.3548);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACtD/IgthpIj/AAIgtBpIiEAAIDLm6QAPghAdgSQAbgQAeAAQAgAAAaAQQAdASAPAhIDLG6gABWAyIhMi0QgCgHgIAAQgGAAgDAHIhNC0ICsAAg");
	this.shape_5.setTransform(72.9077,11.8629,0.3548,0.3548);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AB+D5IAAjJIj7AAIAADJIh8AAIAAnxIB8AAIAAC8ID7AAIAAi8IB8AAIAAHxg");
	this.shape_6.setTransform(145.3986,12.0758,0.3548,0.3548);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.megafon, new cjs.Rectangle(0,0,154.3,21.1), null);


(lib.hand_02_shadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hand_02_shadow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_02_shadow_1, new cjs.Rectangle(0,0,258,368), null);


(lib.hand_01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgDMAlZIzCAAIgDAAIgBgCIgBgBIgFgBIgCgBIgBAAIgEgDQgBgDACgCIAGgDQAEgFABgKIABgQQACgGAFgIIAIgNIAGgRQADgLALgUQAMgUADgKQAGgXAEgKIAKgVQAIgOACgIIAIgXIB0lKQAFgOABgLIABgQIABgRQABgIAHgNQAIgPACgGQADgKABgVIAAgCQgBgBACgEIABgEIAAgLIABgQQADgPAGgZIAKgnQAEgXAFgvQAEgjAAgaIgBghQAAgOAEgZIABgFQgBgEACgIIAehTQAJgZAGgJQAFgIAJgLQAOgUANgOQAOgPACgDQADgFADgIIAGgNQAEgHATgXQAQgRACgOQADgLAFACQAEgJABgOIAAgfIAIg/QADgVAEgHIAIgMIAJgMQAPgUAGgnIAFgfQACgTAEgNIABgDIgCgIQgBgIACgVQAEgvgKgqIgGgZQgDgPgBgKIgCgkQgBgRgDgWIgEgWIgDgeIgFhLIgBgCQgFgMgBgSIgbkVQgBgMgCgFQgIgQgCgIQgDgJADgUIACgFIgDgCQgDgCgBgEQgRgoAFgsQACgSAAgJIgEghQgDgYABgoIABhAQAAgQgEgeQgHg4gMhKQgBgGABgDIAAgBIAAgEIAAgIIgCgMIgBgHIgBgRIgDgMIAAgFIgBgEIgBgIQAAgIAEgDQgDgBgBgGIgIg7QgGgiACgUQAFgaABgOQAAgKACgFIAFgHIAFgNQAIgWARgeIAjg+QAnhHAcgkIAAgFQADgTgCgKQgEgIAAgEIACgKQACgHAAgJQgCgeADgPIACgKQgCgKAAgFIADgPQACgHgBgQQgBgQACgHQADgKABgFIAAgJIACgDIAAgCIAAgOIABgOQgDgPABgIIAEgSQADgLAAgYIAAgpQAAgdAGgOIAFgNIgBgRQgCgaATgtIABgDIAAgFIAJg+IACgUIALhhQABgFADgCQACgEAHgFQADgDACgGIADgLQAFgNARgSQAogmApgeIAXgSQAJgHARgQQAPgOAMgGIADgCIAFgEQAGgGAFgIIBhiOQAEgFABgHQABgFACgCQADgEADACIACACIgBgEIgCgEQAAgDACgCIAFgDQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABgBIABgBIAAgBQAHgvAJgWQAGgLALgRIAVgiIAPgSQAPgSAXgYIABgBIABgDQABgDADAAIAEABIAAABIAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAAAIAAABIAPgEQAQgDAKABIAbAEQAJABAFACQAGADAKAKQAPAOAEAGQAFAHADAGIAIAXIABAEIBagLIAOACIAGACIAHAAIAEgDIAVgPQATgNAIgIIATgVQAQgPAbgIQARgGAggFICagVIADgBIBNgjQA7gZAbgIQAzgPAoAEQALABACAGQABAFgDAEQAOgBAOAGQAQAHAMAOQAUAZABApQACAsgTArQgRApghAiQgaAbgaAJQgMADgkADQgeADgQAJQgWANgGAZIgDAHIAGAAQAIAAAqgEQAggCAgACIAEgDIA4ghIAagJQA5gSBAgFIANAAQAGACAEAFIACAEQAHAEAOAGQAOAIALAZQATAsgJAeQgHAXgXAWIgUASIgVASIgcAcQgRATgLAJQgPANghAWQgQALgMAFQgPAGgIAEIgoAhIgOALQgIAEgTAHQg8APgdALIgCAAQglBMhBAyIgmAdQggAZgWAYIghAiIggAdQgSARgJAPIgEAGIAAABQgBAIgJAIIgEADIAAAEIgDAaQgQBmgrBeIgVAqIgTAsIgKAaIgMAZQgKASgRAUIgVAVIAAADIgBAEQgBADABACIAAAIIACAIQAAADgCADQAHAHAEANQADALgBASQgBAbgLA+IgKA7QgCAMgCAFIgHARIgDAOIgEAOIgEAHIAAADQAAADADAGIgDAPQgBAGABARQAAAPgCAIQgCAFgEAGIgHALIgPAcIgEAKIgCAPIgCAJQgCAGAAADIAAAHQBiAgAxAZIASAJQAKAFAVAHIAlALQBHgWBGAXQATAHAaAMIAtAWQAgAPAaAFIAdgJQAagKA2gjQAhgVAHgHQAPgMATgVIAfgkQAageAwguIBkhgQAvgsAYgQIAFgDIACgCQAuhAAbgYQAVgRAegUQC3h6DQhSQAtgRAYgEQApgHAfAOQAYAKAIATQAEADADAEQAPAUACAZQADAagKAWQgEAMgKANQglA3g7A0QgjAfgwAjIAAAAQAAAEgBADQgEALgMAQQgNASgEAJIgLAcQgDAHgKAMQgKAMgDAHIgEAKIgGAKQgHAFgBADQgCAEABAHQABAKgFANIgLAWIgEAMIgBAJQAAAFgFAIIgSAcQgFAIgEADQgHADgMgDIAAACQADAHgFAIQgDAFgFAFIg+BAQgQAPgQAEQgDAGgHADQACADgGAHQg/A2gOAPQgtAygZAWIgOANIgsAvIgTAUQgIANgQATIgbAgQgLAPgOAaQgQAhgHALIgQAcQgGAXgGAKQgFAJgKALIgQARIgZAhIgcAcQgOAPgWAgQgUAcgMAOQAGALAAAQIgBAKIgZA9QACACABAEQAEAOgHASQgDALgKAUQgFAOgJAeQgEAMgLAXIgIAZIgJAaQgKAaghAwIhLBqQgOAVgNAQQgVAcgZAZIAAAAQgkAtgJA2IgEAVIgIAUQgHAQglBEQgZAtgNAfIgBAIQgGAOgTAkQgQAfgHAUIgKAiIgLAiIgNAnIgCAcQgCASgKAhQgDAMgBAbQAAAWgDANQABACAAAEQgKBFgeB0QgJAjgCALIgEAgIgJAcQgJAagHAvIgSCTIgEAUIgDALIgBAAQgBALgEAJIAAgBQgEAMgBANIgBASIgIAXQgBAJAAARIgDASIgFAcIgCANIAAAVQAAANgEAMQgFALAAAFQAAAFACAJQADAKAAAFIgBAJQgBAFABADIACAIQABAEgCACIgEABIgBACIgBABIgBABIgCABIgBAAgAA4+LQgFAEgGAGIgJAKIgFAMIgDAHIAlgMIALgHIAFgGIAKgLIgWgFIgHgBQgEABgCACgEgCjAhRIAAgCIAAACgEgCfAhBIABAAIAAACIAAABIgBgDg");
	mask.setTransform(206.3453,235.3329);

	// Layer_1
	this.instance = new lib.hand_01();
	this.instance.parent = this;
	this.instance.setTransform(18,-5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(62.3,-4,288.09999999999997,478);


(lib.hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAFdAtMIAAAAIAAAAIAAAAgEAEPAmQQhTnKgWhiQgUhcgehNIgghKQgHgQgIhCQgCgOghhjIgeheQABAAgUgYIgogsIgwgsQgcgaABgNQABgMgEgLQgDgJgCAAQgegQgXgWIhchXIhLhHQg2gzgJgHQgMgHiGilQiIimhLhiQg/hUgthSQglhEAFABIgbgIIgXgVIAAAAIAAAAIn0AAQgzACg1gZQhqgzAAiJQAAgdgEgYIgDgPQgJAIgOAGQgdAOgcgGQgWgDgXgJQgugRgHgcQgiiIgGggQgEgcAEgVQAGgdAWgiQA0hRADABQgRgHgSgPQglgegDgsQgEgtgPhQQgNg/gIgfQgHgXAJglQAKgmAXglQAUgiAngkQAggfAEAAIAAABIAAgBQgcgFgdgSQg7gjADg7QADg8AahGQAWg6AEABQAIglAQgqQAhhVAugYQAwgaAfgMQAXgKADABQACAAgCiDQgugXgxgeQhjg9gTgfQgYgnASg7QASg9AwgXQAqgUBAgIQAwgHAJACQABABAIlFQAHlEABgBQgDg0AYg1QAwhoCNAAIKhgBIH5gCIAbADQAfAFAaARQBTA1ADCJQACCBgBCTIgBBvQAEgBAHAHQAJAKAAAWIgBByQAABZABgBIAlgCQAlAAAMALQAQAPAkA8QAlA/AOAoQAMAiAHAxIAGAqQAFABATAOQAaASAMATQAMATApAuIA0A6QAXAaAWAjQAfAtgBARQAAATAEAVQAFAWAJAPQAGAKAsCDQAwCOAOAgIBZDCQBICeAOAmQATAxANCDQAOCDgGBHQgFBFAKBIQAKBDASAeQAWAlAgBPQAlBdABAlQACAvAcBbQAfBkAiA0QAxBKBhC3QBwDUAjBjQAcBPBfDvQBcDmAMAlQAbBRCrITQAWBEDkISI42AeQACAAhQm8gA6dnsIgRATIAgAAQABAAgBgiIgPAPgAhE16QgJASgBAAIgBAlQgBABANAHQAOAHAHAAQARAAgGgUQgDgKgPgVQgNgTgCAAIAAAAg");
	mask.setTransform(200.4138,294.5);

	// Layer_1
	this.instance = new lib.hand_phone();
	this.instance.parent = this;
	this.instance.setTransform(0,6.8,1,1,-1.0177);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand, new cjs.Rectangle(6.6,5.3,387.7,578.4000000000001), null);


(lib.card = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B956").s().p("AgRAPQgFgFAAgKQAAgIAFgGQAFgGAIAAQAJAAACAHIAAgGIAQAAIAAAnIgQAAIAAgGQgCAHgJAAQgIAAgFgGgAgGAAQAAAJAHAAQAHAAAAgJQAAgHgHAAQgHAAAAAHg");
	this.shape.setTransform(223.475,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B956").s().p("AAGAUIAAgOIgLAAIAAAOIgQAAIAAgnIAQAAIAAAOIALAAIAAgOIAQAAIAAAng");
	this.shape_1.setTransform(218.375,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00B956").s().p("AgQAQQgGgHAAgJQAAgIAGgHQAHgFAJgBQALABAGAFQAGAHAAAIQAAAJgGAHQgGAFgLAAQgJAAgHgFgAgGAAQAAAJAGAAQAIAAAAgJQAAgHgIAAQgGAAAAAHg");
	this.shape_2.setTransform(213.275,12.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00B956").s().p("AgHAkIAAgPQgJAAgGgHQgFgGAAgIQAAgHAFgGQAGgGAJgBIAAgPIAPAAIAAAPQAJABAGAGQAFAGAAAHQAAAJgFAFQgGAHgJAAIAAAPgAAGAJQAHAAAAgJQAAgHgHAAgAgMAAQAAAJAHAAIABAAIAAgQIgBAAQgHAAAAAHg");
	this.shape_3.setTransform(207.725,12.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00B956").s().p("AgWAAQAAgJAHgGQAGgGAJAAQAKAAAGAGQAHAFAAAJIgBAEIgcAAQAAAIAGgBQAGAAABgCIAPAAQgCAOgTgBQgXABAAgWgAgGgEIANAAQAAgHgHAAQgGAAAAAHg");
	this.shape_4.setTransform(202.225,12.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00B956").s().p("AgWAUIAAgMIACAAQAEAAAAgHIAAgUIAnAAIAAAnIgQAAIAAgbIgHAAIAAAIQAAATgRAAg");
	this.shape_5.setTransform(197.075,12.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00B956").s().p("AgWAAQAAgJAGgGQAHgGAJAAQALAAAFAGQAHAFAAAJIAAAEIgdAAQAAAIAGgBQAGAAABgCIAPAAQgCAOgUgBQgWABAAgWgAgGgEIANAAQAAgHgHAAQgGAAAAAHg");
	this.shape_6.setTransform(192.3,12.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00B956").s().p("AgHAUIAAgaIgLAAIAAgNIAlAAIAAANIgLAAIAAAag");
	this.shape_7.setTransform(187.925,12.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00B956").s().p("AgHAUIAAgaIgKAAIAAgNIAjAAIAAANIgKAAIAAAag");
	this.shape_8.setTransform(181.85,12.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00B956").s().p("AgWAIQAAgIAHgGQAGgGAJAAQAKAAAGAGQAHAFAAAHIgBAGIgcAAQAAAHAGAAQAFAAACgDIAPAAQgCAOgTAAQgXAAAAgWgAgGAEIANAAQAAgGgHgBQgGABAAAGgAAEgQQgCgCAAgDQAAgIAIAAQADAAACACQACACAAAEQAAADgCACQgCACgDAAQgEAAgCgCgAgQgVQAAgIAIAAQADAAACACQACACAAAEQAAADgCACQgCACgDAAQgIAAAAgHg");
	this.shape_9.setTransform(177.475,12.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00B956").s().p("AAFAUIAAgMQgEABgEABQgRgBAAgNIAAgPIAQAAIAAANQAAAGAEAAQAEAAABgBIAAgSIAQAAIAAAng");
	this.shape_10.setTransform(172.525,12.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00B956").s().p("AgVAVQgJgIAAgNQAAgMAJgIQAIgJANAAQAOAAAIAGQAIAHABALIgSAAQgCgJgKAAQgNAAAAAOQAAAPANAAQALAAABgJIASAAQgBAKgIAHQgJAHgMAAQgNAAgJgJg");
	this.shape_11.setTransform(167.025,12.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00B956").s().p("AAFAqIAAgbIghAAIAAg4IALAAIAAAuIAWAAIAAgZIALAAIAAAZIANAAIAAAKIgNAAIAAAbg");
	this.shape_12.setTransform(58.025,136.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00B956").s().p("AgUAkQgIgHAAgOIALAAQAAATARAAQAJAAAEgEQAFgEAAgIQAAgPgSAAIgFAAIAAgJIAFAAQAQAAAAgOQAAgGgFgDQgDgEgIgBQgHAAgEAFQgEAFgBAGIgKAAQAAgLAHgHQAIgHALAAQANAAAHAGQAHAHAAAKQAAAPgPAEQAIABAFAFQAEAGAAAHQABAMgJAHQgHAHgOAAQgNAAgHgIg");
	this.shape_13.setTransform(50.8,136.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00B956").s().p("AgcArQAAgOAFgJQAFgIALgGIAMgGQAMgGAAgMQAAgGgEgEQgFgEgGAAQgHAAgFAFQgEAFAAAJIgMAAQAAgNAIgIQAIgIAMAAQAMAAAHAGQAIAHAAALQAAAQgRAIIgMAHQgIAEgDAFQgDAEgBAHIAsAAIAAAKg");
	this.shape_14.setTransform(44.025,136.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00B956").s().p("AADAqIAAg8IgQAAIAAgJQALAAADgDQADgDAAgIIAKAAIAABTg");
	this.shape_15.setTransform(37.975,136.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00B956").s().p("AgIAKQgEgFAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgFAAgDgDg");
	this.shape_16.setTransform(31.75,136.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00B956").s().p("AgIAKQgEgFAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgFAAgDgDg");
	this.shape_17.setTransform(28.125,136.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00B956").s().p("AgIAKQgEgFAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgDADQgEAEgGAAQgEAAgEgDg");
	this.shape_18.setTransform(24.4972,136.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00B956").s().p("AgIAKQgEgFAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgFAAgDgDg");
	this.shape_19.setTransform(20.85,136.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF671D").s().p("AgrBGQgQghAAglQAAglAQghQAQggAbgWQAcAWAQAgQAQAiAAAkQAAAlgQAhQgQAhgcAWQgbgWgQghg");
	this.shape_20.setTransform(209.275,121.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDA31A").s().p("AgrBGQgQghAAglQAAglAQghQAQggAbgWQAcAWAQAgQAQAiAAAkQAAAlgQAhQgQAhgcAWQgbgWgQghg");
	this.shape_21.setTransform(209.275,121.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FDA31A").s().p("Ah/B9QAcgWAQghQAQghAAglQAAgkgQgiQgQgggcgWQArgiA3AAQBAAAAvAvQAuAuAABBQAABBguAvQgvAvhAAAQg2AAgsgig");
	this.shape_22.setTransform(222.075,121.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FDA31A").s().p("AAGADIAAgEIgCAEIgCAAIgBgEIAAAEIgBAAIAAgFIABAAIACADIACgDIACAAIAAAFgAgDADIAAgEIgDAAIAAgBIAGAAIAAABIgCAAIAAAEg");
	this.shape_23.setTransform(233.7,131.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF2A0C").s().p("AhQBwQgvgvAAhBQAAhBAvguQAugvBAAAQA3AAArAiQgcAWgQAgQgRAhAAAlQAAAlARAhQAQAhAcAWQgsAig2AAQhAAAgugvg");
	this.shape_24.setTransform(196.525,121.525);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("ADqAeIgCgBIgBgBIAAgDIABgCIADgBIACABIABAAIABACIABABIgBACIgCACIgCABgADoAZIAAADIABABIACABIACgBIABAAIAAgBIABgCIgBgCIgBgBIgDAAgAC3AXQgGgGAAgKQAAgIAGgHQAGgGAJAAQAIAAAFAGIAAgWIAJAAIAAA6IgJAAIAAgFQgEAGgJAAQgJAAgGgGgAC+gBQgEADAAAFQAAAGAEAEQADAEAGAAQAFAAAEgEQAEgEAAgGQAAgFgEgDQgEgEgFAAQgGAAgDAEgABiAXQgGgGAAgKQAAgIAGgHQAGgGAJAAQAIAAAFAGIAAgFIAJAAIAAApIgJAAIAAgFQgEAGgJAAQgJAAgGgGgABpgBQgEACAAAGQAAAGAEAEQADAEAGAAQAGAAADgEQAEgEAAgGQAAgFgEgDQgDgEgGAAQgGAAgDAEgAA4AXQgGgGAAgKQAAgIAGgGQAGgHAKAAQAJAAAGAFIgEAIQgFgEgGAAQgFAAgEAEQgEACAAAGQAAAGAEAEQAEAEAFAAQAFAAAGgEIAEAHQgFAFgKAAQgKAAgGgGgAgXAXQgGgGAAgKQAAgIAGgHQAGgGAJAAQAIAAAGAGQAFAGAAAJIAAAEIgeAAQACAKAKAAQAHAAAFgEIAEAHQgHAFgJAAQgKAAgGgGgAgTAEIAVAAQgCgKgIAAQgJAAgCAKgAg8AOIAAgSIgJAAIAAgJIAJAAIAAgNIAJAAIAAANIAPAAIAAAJIgPAAIAAASQAAAHAGAAQADAAAFgDIADAIQgFADgHAAQgOAAAAgPgAhwAYIAEgHQAGAEAIAAQAKAAAAgFQAAgDgIgBIgEgBQgPgCAAgJQAAgOASAAQALAAAGAFIgEAHQgFgEgIAAQgIAAAAAFQAAACAHABIAEABQAPACAAALQAAANgTAAQgLAAgHgFgAieAXQgGgGAAgKQAAgIAGgHQAGgGAJAAQAIAAAFAGIAAgFIAJAAIAAApIgJAAIAAgFQgFAGgIAAQgJAAgGgGgAiYgBQgDACAAAGQAAAGADAEQAEAEAGAAQAFAAAEgEQADgEAAgGQAAgFgDgDQgEgEgFAAQgGAAgEAEgADsAcIgBgBIAAAAIAAABIgBAAIAAgEIACAAIABABIAAABIAAABIgBAAIABABgADrAaIABAAIAAgBIgBAAgACTAcIAAgpIAKAAIAAAFQADgGAIAAIAGABIgDAJIgFgBQgJAAAAAKIAAAXgAAVAcIAAgpIAJAAIAAAFQAEgGAHAAIAGABIgDAJIgFgBQgJAAAAAKIAAAXgAi1AcIAAgXQAAgKgJAAQgLAAAAAKIAAAXIgJAAIAAgXQAAgKgJAAQgKAAAAAKIAAAXIgKAAIAAgpIAKAAIAAAFQAEgGAIAAQAJAAAFAIQAFgIAJAAQARAAAAAQIAAAag");
	this.shape_25.setTransform(210.375,142.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00B956").s().p("AgFAaIAAgFIgFAAQgUAAgEgRIAAgGQAAgXAYAAIAVAAQAYAAAAAXIgBAGQgCARgVAAIgFAAIAAAFgAAGALIAFAAQAJAAADgHIABgGQAAgOgLAAIgHAAgAgXgCIABAGQADAHAJAAIAFAAIAAgbIgHAAQgLAAAAAOg");
	this.shape_26.setTransform(55.125,12.325);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00B956").s().p("AgBAXQgYAAAAgXQAAgLAGgFQAFgGANAAIADAAQANAAAFAGQAGAFAAALQAAAXgYAAgAgOAAQAAAOANAAIADAAQANAAAAgOQAAgNgNAAIgDAAQgNAAAAANg");
	this.shape_27.setTransform(62.05,12.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00B956").s().p("AgTAXIAAgmQAAgCACgDQACgCADAAIAgAAIAAAKIgbAAIgBABIAAAig");
	this.shape_28.setTransform(44.925,12.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00B956").s().p("AgMAXQgHAAAAgHIAAgfQAAgCACgDQACgCADAAIAgAAIAAAKIgbAAIgBABIAAAHIAcAAIAAAIIgcAAIAAAIIABABIAbAAIAAAKg");
	this.shape_29.setTransform(40.075,12.675);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00B956").s().p("AgJATIgPggIAAAnIgMAAIAAgpQAAgLALAAQAIAAADAIIAOAiIAPgiQADgIAIAAQALAAgBALIAAApIgLAAIAAgnIgPAgQgEAIgGAAQgGAAgDgIg");
	this.shape_30.setTransform(33.65,12.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00B956").s().p("AAQAXIgEgJIgXAAIgEAJIgMAAIATgnQADgGAFAAQAGAAADAGIATAngAAIAFIgIgRIAAABIgHAQIAPAAg");
	this.shape_31.setTransform(48.925,12.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00B956").s().p("AAMAXIAAgTIgXAAIAAATIgLAAIAAgtIALAAIAAASIAXAAIAAgSIALAAIAAAtg");
	this.shape_32.setTransform(67.725,12.675);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00B956").s().p("AgLAdQgLgMAAgRQAAgSANgNQANgNATAAIAAAsIAAAAIgGAAQgDAAgBAEIAAApQgOgDgKgNgAAIgMQABAFAFAAQAGAAAAgFQAAgGgGAAQgFAAgBAGg");
	this.shape_33.setTransform(20.85,12.425);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00B956").s().p("AgYAtIAAgnIABgBIAFAAQABAAABAAQABAAAAgBQABAAAAgBQAAgBAAAAIAAgvQAQACALANQAMAOAAAQQAAATgNANQgMANgUAAgAAFATQAAAFAGAAQAGAAgBgFQABgGgGAAQgGAAAAAGgAgHATQAAAFAFAAQAGAAAAgFQAAgGgGAAQgFAAAAAGgAgVATQABAFAFAAQAGAAAAgFQAAgGgGAAQgFAAgBAGg");
	this.shape_34.setTransform(25.2,12.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#731982").s().p("AhxGHQijiiAAjlQAAjkCjiiQCgiiDlAAIAARRQjlAAigiig");
	this.shape_35.setTransform(215.75,77.075);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00B956").s().p("AmGGHQiiiiAAjlQAAjkCiiiQCiiiDkAAQDlAACiCiQCiCiAADkQAADliiCiQiiCijlAAQjkAAiiiig");
	this.shape_36.setTransform(121.725,77.075);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#731982").s().p("AkUooQDlAACiCiQCiCiAADkQAADliiCiQiiCijlAAg");
	this.shape_37.setTransform(27.675,77.075);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AxlMDQgmAAgbgbQgagaAAgmIAA1PQAAgmAagaQAbgbAmAAMAjLAAAQAlAAAcAbQAaAaAAAmIAAVPQAAAmgaAaQgcAbglAAg");
	this.shape_38.setTransform(121.7,77.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.card, new cjs.Rectangle(0,0,243.4,154.2), null);


(lib.disclamer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAWQgDgCgCgDIgDgFIgBgIIAAgaIAJAAIAAAXIAAAGIACAEIAEADQACACADAAQADAAACgCIAEgDIACgFIABgGIAAgWIAJAAIAAAsIgJAAIAAgIQgCAEgEADQgEACgFAAQgFAAgDgBg");
	this.shape.setTransform(152.525,73.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAXIAAgsIAJAAIAAAJQACgFACgDQAFgCAEAAIAFABIAAAIIgCgBIgDAAQgHAAgDAFQgDAFAAAHIAAAUg");
	this.shape_1.setTransform(148.3,73.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAgCACgCQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQACAAACACQADACAAACQAAADgDACQgCACgCAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_2.setTransform(144.85,74.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMAXIAAgXIAAgGIgCgEIgEgDQgCgCgDAAQgDAAgCACIgEADIgCAFIgBAFIAAAXIgJAAIAAgsIAJAAIAAAIQACgEAEgDQAEgCAFAAQAFAAADABQADACACADIADAFIABAIIAAAag");
	this.shape_3.setTransform(140.775,73.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAWQgEgCgDgDQgEgEgBgEQgCgEAAgFQAAgEACgEQABgEAEgEQADgDAEgCQAEgCAFAAQAGAAAEACQAEACAEADQACAEACAEQACAEAAAEQAAAFgCAEQgCAEgCAEQgEADgEACQgEACgGAAQgFAAgEgCgAgFgOIgFAEIgDAFQgCADABACIABAGIADAFIAFAEQADABACAAQADAAADgBIAFgEIADgFIABgGQAAgCgBgDIgDgFIgFgEQgDgBgDAAQgCAAgDABg");
	this.shape_4.setTransform(135.1,73.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFAjIAAglIgKAAIAAgHIAKAAIAAgIQAAgGACgEQABgDACgCIAFgCIAFAAIADAAIADABIAAAHIgDAAIgCgBIgDABIgDABIgBACIgBAFIAAAJIANAAIAAAHIgNAAIAAAlg");
	this.shape_5.setTransform(130.625,71.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgDgDQgDgEgBgEQgCgEAAgFQAAgEACgEQABgEADgEQADgDAFgCQAEgCAFAAQAEAAAFADQAEACADAEIAAgIIAIAAIAAAtIgIAAIAAgIQgDAEgEACQgFADgEAAQgFAAgEgCgAgGgOIgEAEIgDAFQgCADAAACIACAGIADAFIAEAEQADABADAAQADAAADgBIAFgEIADgFIACgGQgBgCgBgDIgDgFIgFgEQgDgBgDAAQgDAAgDABg");
	this.shape_6.setTransform(125.7,73.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAiQgEgBgEgDQgCgCgBgEIgDgIIAJAAIACAFIACAEIAEACIAGABQAHABAEgEQAEgEABgHIAAgMQgDAFgEACQgFACgEAAQgFAAgEgCQgFgBgDgDQgDgEgBgDQgCgEAAgFQAAgFACgEQABgFADgDQADgEAFgBQAEgCAFAAQAEAAAFACQAEADADAEIAAgIIAIAAIAAAwQAAAFgCAFQgCAEgCADQgDACgFACIgKABQgFAAgEgCgAgGgaIgEAEIgDAEQgCADAAAEIACAGIADAFIAEACQAEACACAAQAEAAACgCIAFgCIADgFIACgGQgBgEgBgDIgDgEIgFgEQgCgBgEgBQgCABgEABg");
	this.shape_7.setTransform(119.75,74.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAWQgFgCgCgDQgDgDgBgFIgBgJQAAgEABgEIAEgIIAHgFQAFgCADAAQAFAAAEACQAEABADADQADADABAEQABADAAAFIAAACIAAACIghAAIABAGQAAACADACIADADQADACADAAQAFAAADgDQACgCABgDIAJAAIgCAGIgEAEIgGAEIgIABQgFAAgEgCgAgIgNQgEAEAAAGIAaAAQgBgGgEgEQgDgDgGAAQgEAAgEADg");
	this.shape_8.setTransform(114.35,73.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAZAXIAAgZQAAgGgDgDQgCgEgFAAQgFAAgDAEQgDAEAAAHIAAAXIgIAAIAAgYQAAgHgCgDQgCgEgFAAQgFAAgDAEQgDAEAAAHIAAAXIgJAAIAAgsIAJAAIAAAJQABgFAEgCQADgDAFAAQAGAAAEACQACADACAFIACgEIADgDIAEgDIAFAAQAFAAADABQADABACADIADAGIABAHIAAAbg");
	this.shape_9.setTransform(107.675,73.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAgCACgCQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQADAAABACQADACAAACQAAADgDACQgBACgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_10.setTransform(102.25,74.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAIAjIgSgUIAAAUIgIAAIAAhFIAIAAIAAAsIASgTIALAAIgTAVIATAXg");
	this.shape_11.setTransform(98.925,71.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAMAXIAAgXIAAgGIgCgEIgEgDQgCgCgDAAQgDAAgCACIgEADIgCAFIgBAFIAAAXIgJAAIAAgsIAJAAIAAAIQACgEAEgDQAEgCAFAAQAFAAADABQADACACADIADAFIABAIIAAAag");
	this.shape_12.setTransform(93.425,73.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJAWQgEgCgDgDQgEgEgBgEQgCgEAAgFQAAgEACgEQABgEAEgEQADgDAEgCQAEgCAFAAQAFAAAEADQAEACACAEIAAgIIAJAAIAAAtIgJAAIAAgIQgCAEgEACQgEADgFAAQgFAAgEgCgAgFgOIgFAEIgDAFQgCADABACIABAGIADAFIAFAEQADABACAAQADAAADgBIAFgEIADgFIABgGQAAgCgBgDIgDgFIgFgEQgDgBgDAAQgCAAgDABg");
	this.shape_13.setTransform(87.4,73.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIAhQgEgCgCgFIAAAIIgJAAIAAhEIAJAAIAAAgQACgEAEgDQAFgCAEAAQAFAAAEACQAEABAEAEQADADABAEQACAEAAAFIgCAJQgBAEgDAEQgEADgEABQgEACgFAAQgEAAgFgCgAgFgCIgFADIgDAEIgBAHIABAGIADAFIAFADQADACACAAQAEAAACgCIAFgDIADgFIABgGIgBgHIgDgEIgFgDQgCgBgEgBQgCABgDABg");
	this.shape_14.setTransform(81.775,72);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAWQgEgCgDgDQgEgEgBgEQgCgEAAgFQAAgEACgEQABgEAEgEQADgDAEgCQAEgCAFAAQAFAAAEADQAEACACAEIAAgIIAJAAIAAAtIgJAAIAAgIQgCAEgEACQgEADgFAAQgFAAgEgCgAgFgOIgFAEIgDAFQgCADABACIABAGIADAFIAFAEQADABACAAQADAAADgBIAFgEIADgFIABgGQABgCgCgDIgDgFIgFgEQgDgBgDAAQgCAAgDABg");
	this.shape_15.setTransform(72.9,73.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAMAXIAAgUIgXAAIAAAUIgJAAIAAgtIAJAAIAAATIAXAAIAAgTIAIAAIAAAtg");
	this.shape_16.setTransform(67.25,73.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAMAXIAAgeIgXAaIAAAEIgIAAIAAgtIAIAAIAAAfIAXgaIAAgFIAIAAIAAAtg");
	this.shape_17.setTransform(59.025,73.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgDAXIAAglIgOAAIAAgIIAjAAIAAAIIgOAAIAAAlg");
	this.shape_18.setTransform(54.275,73.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAWIgHgFQgDgEAAgEQgCgEAAgFQAAgEACgEQAAgEADgEIAHgFQAFgCAEAAQAGAAAEACQAEABACADQADACABADIACAHIgJAAQgBgEgCgDQgDgDgHAAQgCAAgCABIgFAEIgCAFIgBAFIABAGQAAADACACIAFAEQADABACAAQAGAAACgCQADgDACgEIAIAAIgCAHIgFAFIgGAEIgJABQgEAAgFgCg");
	this.shape_19.setTransform(49.75,73.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJAWQgEgCgDgDQgDgEgCgEQgCgEAAgFQAAgEACgEQACgEADgEQADgDAEgCQAEgCAFAAQAGAAAEACQAEACAEADQADAEABAEQACAEAAAEQAAAFgCAEQgBAEgDAEQgEADgEACQgEACgGAAQgFAAgEgCgAgGgOIgEAEIgDAFQgBADAAACIABAGIADAFIAEAEQADABADAAQADAAADgBIAFgEIADgFIABgGQAAgCgBgDIgDgFIgFgEQgDgBgDAAQgDAAgDABg");
	this.shape_20.setTransform(44.3,73.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAMAXIAAgUIgXAAIAAAUIgIAAIAAgtIAIAAIAAATIAXAAIAAgTIAIAAIAAAtg");
	this.shape_21.setTransform(38.65,73.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJAhQgFgCgDgFQgDgEgCgGQgBgGAAgHIABgKIACgIIADgHIAEgEQAEgFAGgBQAFgCAIAAIAJAAIAAAIIgLAAIgJABQgEABgDAEQgEADgBAGQgCAGAAAGIADgFIAEgEIAFgDIAFAAQAFAAAEACQAFABACAEQADADACAEQABAEAAAFIgBAJIgFAIQgDADgFABQgEACgFAAQgGAAgEgCgAgFgCIgFADIgDAEIgBAHIABAGIADAFIAFADQADACACAAQAEAAACgCIAFgDIADgFIACgGQAAgEgCgDIgDgEIgFgDQgCgBgEgBQgCABgDABg");
	this.shape_22.setTransform(32.975,72);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAWQgEgCgEgDQgDgEgBgEQgCgEAAgFQAAgEACgEQABgEADgEQAEgDAEgCQAEgCAFAAQAGAAAEACQAEACADADQADAEACAEQACAEAAAEQAAAFgCAEQgCAEgDAEQgDADgEACQgEACgGAAQgFAAgEgCgAgFgOIgFAEIgDAFQgBADAAACIABAGIADAFIAFAEQADABACAAQADAAADgBIAFgEIADgFIABgGQAAgCgBgDIgDgFIgFgEQgDgBgDAAQgCAAgDABg");
	this.shape_23.setTransform(27.25,73.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgXAkIAAhFIAJAAIAAAIQACgFAEgCQAFgCAEAAQAFAAAEACQAEABAEADQADAEABAEQACAEAAAFIgCAJQgBADgDAEQgEADgEACQgEACgFAAQgEAAgFgCQgEgCgCgFIAAAhgAgFgZIgFADIgDAFIgBAGIABAGIADAFIAFADQADACACgBQAEABACgCIAFgDIADgFIABgGIgBgGIgDgFIgFgDQgCgCgEAAQgCAAgDACg");
	this.shape_24.setTransform(21.625,74.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AASAcIAAgLIgiAAIAAALIgIAAIAAgRIABAAQAGgBACgEQADgEAAgFIAAgYIAhAAIAAAmIAFAAIAAARgAgEgFQAAAGgBAEQgBAEgEACIAXAAIAAgfIgRAAg");
	this.shape_25.setTransform(15.6,73.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJAWQgEgCgEgDQgDgEgBgEQgCgEAAgFQAAgEACgEQABgEADgEQAEgDAEgCQAEgCAFAAQAGAAAEACQAEACADADQADAEACAEQACAEAAAEQAAAFgCAEQgCAEgDAEQgDADgEACQgEACgGAAQgFAAgEgCgAgFgOIgFAEIgDAFQgBADAAACIABAGIADAFIAFAEQADABACAAQADAAADgBIAFgEIADgFIABgGQAAgCgBgDIgDgFIgFgEQgDgBgDAAQgCAAgDABg");
	this.shape_26.setTransform(10.15,73.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAQAjIAAg9IgfAAIAAA9IgJAAIAAhFIAxAAIAABFg");
	this.shape_27.setTransform(4.05,71.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAgCACgCQAAAAABgBQABAAAAgBQABAAAAAAQABAAAAAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAgBg");
	this.shape_28.setTransform(192.05,65.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgDgDQgCgEgCgEQgCgEAAgFQAAgEACgEQACgEACgEQADgDAFgCQAEgCAFAAQAEAAAFADQAEACADAEIAAgIIAIAAIAAAtIgIAAIAAgIQgDAEgEACQgFADgEAAQgFAAgEgCgAgGgOIgEAEIgDAFQgBADgBACIACAGIADAFIAEAEQADABADAAQAEAAACgBIAFgEIADgFIACgGQAAgCgCgDIgDgFIgFgEQgCgBgEAAQgDAAgDABg");
	this.shape_29.setTransform(187.6,63.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAMAXIAAgUIgXAAIAAAUIgIAAIAAgtIAIAAIAAATIAXAAIAAgTIAIAAIAAAtg");
	this.shape_30.setTransform(181.95,63.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgDgDQgCgEgCgEQgCgEAAgFQAAgEACgEQACgEACgEQADgDAFgCQAEgCAFAAQAFAAAFACQAEACADADQAEAEABAEQACAEAAAEQAAAFgCAEQgBAEgEAEQgDADgEACQgFACgFAAQgFAAgEgCgAgFgOIgFAEIgDAFQgBADAAACIABAGIADAFIAFAEQADABACAAQADAAADgBIAFgEIADgFIABgGQABgCgCgDIgDgFIgFgEQgDgBgDAAQgCAAgDABg");
	this.shape_31.setTransform(176.3,63.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgEAjIAAgJIgGAAQgGAAgEgCQgEgCgEgEQgDgEgBgEQgCgFAAgFQAAgEACgFQABgEADgEQAEgDAEgDQAEgCAGAAIAGAAIAAgJIAIAAIAAAJIAHAAQAGAAAEACQAEADAEADQADAEABAEQACAFAAAEQAAAFgCAFQgBAEgDAEQgEAEgEACQgEACgGAAIgHAAIAAAJgAAEARIAHAAQADAAADgBIAFgEQACgCABgDIABgHIgBgGIgDgFIgFgEQgDgBgDgBIgHAAgAgQgPIgFAEIgDAFIgBAGQAAAEABADQABADACACIAFAEQADABADAAIAGAAIAAgiIgGAAQgDABgDABg");
	this.shape_32.setTransform(169.65,62.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgJAWQgEgCgDgDQgDgEgCgEQgCgEAAgFQAAgEACgEQACgEADgEQADgDAEgCQAEgCAFAAQAFAAAEADQAEACACAEIAAgIIAJAAIAAAtIgJAAIAAgIQgCAEgEACQgEADgFAAQgFAAgEgCgAgGgOIgEAEIgDAFQgBADgBACIACAGIADAFIAEAEQADABADAAQADAAADgBIAFgEIADgFIABgGQAAgCgBgDIgDgFIgFgEQgDgBgDAAQgDAAgDABg");
	this.shape_33.setTransform(162.65,63.825);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgMAXIAAgtIAaAAIAAAIIgSAAIAAAlg");
	this.shape_34.setTransform(158.45,63.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgIAWQgFgCgCgDQgDgDgCgFIAAgJQgBgEACgEQABgFADgDIAHgFQAEgCAEAAQAFAAAEACQAEABADADQACADACAEQACADAAAFIAAACIAAACIgiAAIABAGQAAACACACIAFADQACACADAAQAFAAACgDQADgCACgDIAIAAIgCAGIgEAEIgHAEIgHABQgFAAgEgCgAgIgNQgEAEAAAGIAZAAQAAgGgEgEQgDgDgGAAQgEAAgEADg");
	this.shape_35.setTransform(153.7,63.825);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAXAjIAAgwIgUAwIgGAAIgUgwIAAAwIgJAAIAAhFIAJAAIAXA3IAYg3IAJAAIAABFg");
	this.shape_36.setTransform(147.075,62.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAQAXIAAgtIAIAAIAAAtgAgXAXIAAgtIAIAAIAAAQIAMAAIAFABIAFADIACAEIABAGIgBAGIgCAEIgFAEIgFABgAgPAQIAKAAQAEAAABgCQACgDAAgDQAAgEgCgCQgBgCgEAAIgKAAg");
	this.shape_37.setTransform(137.225,63.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgDAXIAAglIgOAAIAAgIIAjAAIAAAIIgOAAIAAAlg");
	this.shape_38.setTransform(132.075,63.825);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgXAkIAAhFIAJAAIAAAIQACgFAEgCQAFgDAEABQAFAAAEABQAEACAEAEQADADABAEQACAEAAAFQAAAFgCAEQgBAEgDADQgEADgEACQgEACgFAAQgEAAgFgCQgEgCgCgFIAAAhgAgFgZIgFADIgDAFIgBAGIABAGIADAFIAFADQADACACgBQAEABACgCIAFgDIADgFIABgGIgBgGIgDgFIgFgDQgCgCgEAAQgCAAgDACg");
	this.shape_39.setTransform(127.325,65);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgDgDQgCgEgCgEQgCgEAAgFQAAgEACgEQACgEACgEQADgDAFgCQAEgCAFAAQAEAAAFADQAEACADAEIAAgIIAIAAIAAAtIgIAAIAAgIQgDAEgEACQgFADgEAAQgFAAgEgCgAgGgOIgEAEIgDAFQgBADgBACIACAGIADAFIAEAEQADABADAAQAEAAACgBIAFgEIADgFIACgGQAAgCgCgDIgDgFIgFgEQgCgBgEAAQgDAAgDABg");
	this.shape_40.setTransform(121,63.825);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAJAXIgTgVIAAAVIgJAAIAAgsIAJAAIAAATIABAAIAEgBIADgEIAGgIQACgEACgCQACgBAEAAIAEAAIAAAHIgDAAIgCABIgEADIgDAGIgEAEIgEABIAWAXg");
	this.shape_41.setTransform(116,63.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAMAjIAAgfIgXAcIAAADIgIAAIAAgsIAIAAIAAAeIAXgaIAAgEIAIAAIAAAsgAgFgUIgGgDIgEgFIgDgGIAJAAQABAEACACQADADAEgBQAEABADgDQACgCACgEIAIAAQgBADgCADIgEAFIgGADIgGABIgGgBg");
	this.shape_42.setTransform(107.875,62.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgJAWQgEgCgDgDQgEgEgBgEQgCgEAAgFQAAgEACgEQABgEAEgEQADgDAEgCQAEgCAFAAQAGAAAEACQAEACAEADQACAEACAEQACAEAAAEQAAAFgCAEQgCAEgCAEQgEADgEACQgEACgGAAQgFAAgEgCgAgFgOIgFAEIgDAFQgCADABACIABAGIADAFIAFAEQADABACAAQAEAAACgBIAFgEIADgFIABgGQAAgCgBgDIgDgFIgFgEQgCgBgEAAQgCAAgDABg");
	this.shape_43.setTransform(102.25,63.825);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAJAXIgTgVIAAAVIgIAAIAAgsIAIAAIAAATIABAAIAEgBIAEgEIAEgIQADgEACgCQADgBADAAIAEAAIAAAHIgCAAIgEABIgDADIgDAGIgFAEIgDABIAVAXg");
	this.shape_44.setTransform(97.25,63.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgIAWIgHgFQgDgEgCgEQgBgEAAgFQAAgEABgEQACgEADgEIAHgFQAEgCAFAAQAFAAAEACQAEABACADQADACABADIACAHIgJAAQgBgEgCgDQgDgDgGAAQgDAAgDABIgEAEIgDAFIgBAFIABAGQABADACACIAEAEQADABADAAQAGAAADgCQACgDABgEIAJAAIgCAHIgFAFIgGAEIgIABQgFAAgEgCg");
	this.shape_45.setTransform(91.9,63.825);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgRAXIAAgtIAUAAQAEAAADACIAFACIACAEIAAAEQAAAEgDADQgCADgFAAIAEAAIAEACIACAEIABAEIgBAEIgCAEQgCACgDABQgDACgFAAgAgJARIALAAQAEAAACgCQABgCAAgDQAAgDgBgCQgCgCgEAAIgLAAgAgJgDIALAAQADAAACgBQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABgDgCgCQgCgBgDAAIgLAAg");
	this.shape_46.setTransform(87,63.825);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgDgDQgDgEgBgEQgCgEAAgFQAAgEACgEQABgEADgEQADgDAFgCQAEgCAFAAQAFAAAFACQAEACADADQADAEACAEQACAEAAAEQAAAFgCAEQgCAEgDAEQgDADgEACQgFACgFAAQgFAAgEgCgAgGgOIgEAEIgDAFQgCADAAACIACAGIADAFIAEAEQADABADAAQADAAADgBIAFgEIADgFIACgGQgBgCgBgDIgDgFIgFgEQgDgBgDAAQgDAAgDABg");
	this.shape_47.setTransform(81.6,63.825);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAJAXIgTgVIAAAVIgJAAIAAgsIAJAAIAAATIACAAIADgBIADgEIAFgIQADgEACgCQACgBAEAAIAFAAIAAAHIgEAAIgDABIgCADIgEAGIgEAEIgFABIAXAXg");
	this.shape_48.setTransform(76.6,63.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAMAXIAAgUIgXAAIAAAUIgJAAIAAgtIAJAAIAAATIAXAAIAAgTIAJAAIAAAtg");
	this.shape_49.setTransform(71,63.825);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgJAWQgEgCgDgDQgDgEgCgEQgCgEAAgFQAAgEACgEQACgEADgEQADgDAEgCQAEgCAFAAQAFAAAEADQAEACACAEIAAgIIAJAAIAAAtIgJAAIAAgIQgCAEgEACQgEADgFAAQgFAAgEgCgAgGgOIgEAEIgDAFQgBADAAACIABAGIADAFIAEAEQADABADAAQADAAADgBIAFgEIADgFIABgGQAAgCgBgDIgDgFIgFgEQgDgBgDAAQgDAAgDABg");
	this.shape_50.setTransform(65,63.825);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgJAhQgFgCgDgEQgDgFgCgGQgBgGAAgHIABgKIACgIIADgHIAEgEQAEgFAGgBQAFgCAIAAIAJAAIAAAIIgLAAIgJABQgEACgDADQgEADgBAGQgCAGAAAGIADgFIAEgEIAFgDIAFAAQAFAAAEACQAFABACAEQADAEACADQABAEAAAFIgBAJIgFAIQgDADgFABQgEACgFABQgGgBgEgCgAgFgCQgDABgCACIgDAEIgBAHIABAGIADAFIAFAEQADABACAAQAEAAACgBIAFgEIADgFIACgGQAAgEgCgDIgDgEIgFgDQgCgBgEgBQgCABgDABg");
	this.shape_51.setTransform(59.375,62.65);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAQAXIAAgtIAIAAIAAAtgAgXAXIAAgtIAIAAIAAAQIAMAAIAFABIAFADIACAEIABAGIgBAGIgCAEIgFAEIgFABgAgPAQIAKAAQAEAAABgCQACgDAAgDQAAgEgCgCQgBgCgEAAIgKAAg");
	this.shape_52.setTransform(50.675,63.825);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AATAXIAAglIgQAlIgFAAIgRglIAAAlIgHAAIAAgtIAMAAIAOAhIAOghIANAAIAAAtg");
	this.shape_53.setTransform(43.975,63.825);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AATAXIAAglIgQAlIgFAAIgRglIAAAlIgHAAIAAgtIAMAAIAOAhIAOghIANAAIAAAtg");
	this.shape_54.setTransform(36.975,63.825);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgDgDQgDgEgBgEQgCgEAAgFQAAgEACgEQABgEADgEQADgDAFgCQAEgCAFAAQAEAAAFADQAEACADAEIAAgIIAIAAIAAAtIgIAAIAAgIQgDAEgEACQgFADgEAAQgFAAgEgCgAgGgOIgEAEIgDAFQgCADAAACIACAGIADAFIAEAEQADABADAAQADAAADgBIAFgEIADgFIACgGQgBgCgBgDIgDgFIgFgEQgDgBgDAAQgDAAgDABg");
	this.shape_55.setTransform(30.3,63.825);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgXAkIAAhFIAJAAIAAAIQACgFAEgCQAFgDAEABQAFAAAEABQAEACAEAEQADADABAEQACAEAAAFIgCAJQgBAEgDADQgEADgEACQgEACgFAAQgEAAgFgCQgEgCgCgFIAAAhgAgFgZIgFADIgDAFIgBAGIABAGIADAFIAFADQADACACgBQAEABACgCIAFgDIADgFIABgGIgBgGIgDgFIgFgDQgCgCgEAAQgCAAgDACg");
	this.shape_56.setTransform(24.675,65);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgNAXIAAgtIAaAAIAAAIIgRAAIAAAlg");
	this.shape_57.setTransform(20.1,63.825);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgJAWQgEgCgDgDQgDgEgCgEQgCgEAAgFQAAgEACgEQACgEADgEQADgDAEgCQAFgCAEAAQAGAAAEACQAEACAEADQADAEABAEQACAEAAAEQAAAFgCAEQgBAEgDAEQgEADgEACQgEACgGAAQgEAAgFgCgAgGgOIgEAEIgDAFQgBADgBACIACAGIADAFIAEAEQADABADAAQAEAAACgBIAFgEIADgFIACgGQAAgCgCgDIgDgFIgFgEQgCgBgEAAQgDAAgDABg");
	this.shape_58.setTransform(15.15,63.825);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgXAkIAAhFIAJAAIAAAIQACgFAEgCQAFgDAEABQAFAAAEABQAEACAEAEQADADABAEQACAEAAAFIgCAJQgBAEgDADQgEADgEACQgEACgFAAQgEAAgFgCQgEgCgCgFIAAAhgAgFgZIgFADIgDAFIgBAGIABAGIADAFIAFADQADACACgBQAEABACgCIAFgDIADgFIABgGIgBgGIgDgFIgFgDQgCgCgEAAQgCAAgDACg");
	this.shape_59.setTransform(9.525,65);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AALAXIAAglIgWAAIAAAlIgIAAIAAgtIAnAAIAAAtg");
	this.shape_60.setTransform(3.55,63.825);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAMAjIAAgfIgXAcIAAADIgIAAIAAgsIAIAAIAAAfIAXgbIAAgEIAIAAIAAAsgAgFgUIgGgDIgEgFIgDgGIAJAAQABAEACACQADADAEgBQAEABADgDQACgCACgEIAIAAQgBADgCADIgEAFIgGADIgGABIgGgBg");
	this.shape_61.setTransform(182.325,53.25);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgJAWQgEgCgDgDQgDgEgCgEQgCgEAAgFQAAgEACgEQACgEADgEQADgDAEgCQAFgCAEAAQAGAAAEACQAEACAEADQADAEABAEQACAEAAAEQAAAFgCAEQgBAEgDAEQgEADgEACQgEACgGAAQgEAAgFgCgAgGgOIgEAEIgDAFQgBADgBACIACAGIADAFIAEAEQADABADAAQAEAAACgBIAFgEIADgFIACgGQAAgCgCgDIgDgFIgFgEQgCgBgEAAQgDAAgDABg");
	this.shape_62.setTransform(176.7,54.475);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAJAXIgTgVIAAAVIgJAAIAAgsIAJAAIAAATIABAAIAEgBIADgEIAGgIQABgEADgCQADgBADAAIAEAAIAAAHIgCAAIgDABIgEADIgDAGIgFAEIgDABIAVAXg");
	this.shape_63.setTransform(171.7,54.45);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgIAWIgIgFQgCgEgBgEQgCgEAAgFQAAgEACgEQABgEACgEIAIgFQAEgCAFAAQAFAAAEACQAEABADADQACACABADIACAHIgJAAQAAgEgDgDQgDgDgGAAQgDAAgDABIgEAEIgDAFIgBAFIABAGQABADACACIAEAEQADABADAAQAGAAADgCQACgDABgEIAJAAIgCAHIgEAFIgHAEIgIABQgFAAgEgCg");
	this.shape_64.setTransform(166.35,54.475);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgXAkIAAhFIAJAAIAAAIQACgFAEgCQAFgDAEABQAFAAAEABQAEACAEAEQADADABAEQACAEAAAGIgCAJQgBADgDADQgEADgEACQgEACgFAAQgEAAgFgCQgEgCgCgFIAAAhgAgFgZIgFADIgDAFIgBAHIABAFIADAFIAFADQADABACAAQAEAAACgBIAFgDIADgFIABgFIgBgHIgDgFIgFgDQgCgCgEAAQgCAAgDACg");
	this.shape_65.setTransform(160.875,55.65);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgIAWQgEgCgDgDQgDgDgBgFIgCgJQAAgEACgEQABgFADgDIAHgFQAEgCAFAAQAEAAAEACQAEABADADQACADACAEQACADgBAFIAAACIAAACIghAAIABAGQABACACACIADADQADACADAAQAFAAADgDQACgCABgDIAJAAIgCAGIgEAEIgGAEIgIABQgFAAgEgCgAgIgNQgEAEAAAGIAZAAQAAgGgDgEQgEgDgFAAQgFAAgEADg");
	this.shape_66.setTransform(155.1,54.475);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAMAXIAAgUIgXAAIAAAUIgJAAIAAgtIAJAAIAAATIAXAAIAAgTIAJAAIAAAtg");
	this.shape_67.setTransform(149.65,54.475);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgDAXIAAglIgOAAIAAgIIAjAAIAAAIIgOAAIAAAlg");
	this.shape_68.setTransform(144.875,54.475);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgXAkIAAhFIAJAAIAAAIQACgFAEgCQAFgDAEABQAFAAAEABQAEACAEAEQADADABAEQACAEAAAGIgCAJQgBADgDADQgEADgEACQgEACgFAAQgEAAgFgCQgEgCgCgFIAAAhgAgFgZIgFADIgDAFIgBAHIABAFIADAFIAFADQADABACAAQAEAAACgBIAFgDIADgFIABgFIgBgHIgDgFIgFgDQgCgCgEAAQgCAAgDACg");
	this.shape_69.setTransform(140.125,55.65);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgDgDQgDgEgBgEQgCgEAAgFQAAgEACgEQABgEADgEQADgDAFgCQAEgCAFAAQAEAAAFADQAEACADAEIAAgIIAIAAIAAAtIgIAAIAAgIQgDAEgEACQgFADgEAAQgFAAgEgCgAgGgOIgEAEIgDAFQgCADAAACIACAGIADAFIAEAEQADABADAAQADAAADgBIAFgEIADgFIACgGQgBgCgBgDIgDgFIgFgEQgDgBgDAAQgDAAgDABg");
	this.shape_70.setTransform(133.8,54.475);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AALAXIAAglIgWAAIAAAlIgIAAIAAgtIAnAAIAAAtg");
	this.shape_71.setTransform(128.2,54.475);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAMAXIAAgeIgXAaIAAAEIgIAAIAAgtIAIAAIAAAfIAXgaIAAgFIAIAAIAAAtg");
	this.shape_72.setTransform(119.975,54.475);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AATAXIAAglIgQAlIgFAAIgRglIAAAlIgHAAIAAgtIAMAAIAOAhIAOghIANAAIAAAtg");
	this.shape_73.setTransform(113.675,54.475);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgDgDQgCgEgCgEQgCgEAAgFQAAgEACgEQACgEACgEQADgDAFgCQAEgCAFAAQAFAAAEADQAEACACAEIAAgIIAJAAIAAAtIgJAAIAAgIQgCAEgEACQgEADgFAAQgFAAgEgCgAgFgOIgFAEIgDAFQgBADAAACIABAGIADAFIAFAEQADABACAAQADAAADgBIAFgEIADgFIABgGQABgCgCgDIgDgFIgFgEQgDgBgDAAQgCAAgDABg");
	this.shape_74.setTransform(107,54.475);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgWAXIAAgIIACAAIAEgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAggIAmAAIAAAsIgJAAIAAglIgUAAIAAAaQAAAGgEADQgDADgFAAg");
	this.shape_75.setTransform(101.125,54.525);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAMAXIAAgeIgXAaIAAAEIgIAAIAAgtIAIAAIAAAfIAXgaIAAgFIAIAAIAAAtg");
	this.shape_76.setTransform(95.775,54.475);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgRAXIAAgtIAUAAQAEAAADACIAFACIABAEIABAEQAAAEgDADQgDADgEAAIAEAAIAEACIACAEIABAEIgBAEIgCAEQgCACgDABQgDACgEAAgAgJARIAMAAQADAAABgCQACgCAAgDQAAgDgCgCQgBgCgDAAIgMAAgAgJgDIALAAQADAAACgBQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABgDgCgCQgCgBgDAAIgLAAg");
	this.shape_77.setTransform(90.7,54.475);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgDgDQgCgEgCgEQgCgEAAgFQAAgEACgEQACgEACgEQADgDAFgCQAEgCAFAAQAFAAAEADQAEACACAEIAAgIIAJAAIAAAtIgJAAIAAgIQgCAEgEACQgEADgFAAQgFAAgEgCgAgFgOIgFAEIgDAFQgBADAAACIABAGIADAFIAFAEQADABACAAQADAAADgBIAFgEIADgFIABgGQABgCgCgDIgDgFIgFgEQgDgBgDAAQgCAAgDABg");
	this.shape_78.setTransform(84.95,54.475);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgXAkIAAhFIAJAAIAAAIQACgFAEgCQAFgDAEABQAFAAAEABQAEACAEAEQADADABAEQACAEAAAGIgCAJQgBADgDADQgEADgEACQgEACgFAAQgEAAgFgCQgEgCgCgFIAAAhgAgFgZIgFADIgDAFIgBAHIABAFIADAFIAFADQADABACAAQAEAAACgBIAFgDIADgFIABgFIgBgHIgDgFIgFgDQgCgCgEAAQgCAAgDACg");
	this.shape_79.setTransform(79.325,55.65);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAMAXIAAglIgXAAIAAAlIgJAAIAAgtIApAAIAAAtg");
	this.shape_80.setTransform(73.35,54.475);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgIAWIgHgFQgDgEgCgEQgBgEAAgFQAAgEABgEQACgEADgEIAHgFQAEgCAFAAQAFAAAEACQAEABACADQADACABADIACAHIgJAAQgBgEgCgDQgDgDgGAAQgDAAgDABIgEAEIgDAFIgBAFIABAGQABADACACIAEAEQADABADAAQAGAAADgCQACgDABgEIAJAAIgCAHIgFAFIgGAEIgIABQgFAAgEgCg");
	this.shape_81.setTransform(65.35,54.475);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAMAXIAAgeIgXAaIAAAEIgIAAIAAgtIAIAAIAAAfIAXgaIAAgFIAIAAIAAAtg");
	this.shape_82.setTransform(57.325,54.475);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAMAXIAAgeIgXAaIAAAEIgIAAIAAgtIAIAAIAAAfIAXgaIAAgFIAIAAIAAAtg");
	this.shape_83.setTransform(51.675,54.475);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgRAXIAAgtIAUAAQAEAAADACIAFACIABAEIABAEQAAAEgDADQgDADgEAAIAEAAIAEACIACAEIABAEIgBAEIgCAEQgCACgDABQgDACgEAAgAgJARIAMAAQADAAABgCQACgCAAgDQAAgDgCgCQgBgCgDAAIgMAAgAgJgDIALAAQADAAACgBQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABgDgCgCQgCgBgDAAIgLAAg");
	this.shape_84.setTransform(46.6,54.475);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgDAXIAAglIgOAAIAAgIIAjAAIAAAIIgOAAIAAAlg");
	this.shape_85.setTransform(42.075,54.475);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgIAWIgHgFQgDgEgCgEQgBgEAAgFQAAgEABgEQACgEADgEIAHgFQAEgCAFAAQAFAAAEACQAEABADADQACACABADIACAHIgJAAQAAgEgDgDQgDgDgGAAQgDAAgDABIgEAEIgDAFIgBAFIABAGQABADACACIAEAEQADABADAAQAGAAADgCQACgDABgEIAJAAIgCAHIgFAFIgGAEIgIABQgFAAgEgCg");
	this.shape_86.setTransform(37.55,54.475);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgDAXIAAglIgOAAIAAgIIAjAAIAAAIIgOAAIAAAlg");
	this.shape_87.setTransform(32.975,54.475);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgIAWQgEgCgDgDQgDgDgCgFIgBgJQABgEABgEQABgFADgDIAHgFQAEgCAFAAQAEAAAEACQADABADADQAEADABAEQABADABAFIAAACIAAACIgiAAIABAGQAAACADACIADADQADACADAAQAFAAADgDQADgCAAgDIAJAAIgCAGIgEAEIgGAEIgIABQgFAAgEgCgAgIgNQgEAEAAAGIAZAAQAAgGgDgEQgEgDgFAAQgGAAgDADg");
	this.shape_88.setTransform(28.45,54.475);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgRAXIAAgtIAUAAQAEAAADACIAEACIADAEIAAAEQAAAEgDADQgDADgEAAIAEAAIADACIADAEIABAEIAAAEIgEAEQgBACgDABQgDACgEAAgAgIARIALAAQACAAADgCQACgCAAgDQAAgDgCgCQgDgCgCAAIgLAAgAgIgDIAKAAQADAAACgBQAAgBABAAQAAgBAAAAQAAgBAAgBQABAAAAgBQAAgDgCgCQgCgBgDAAIgKAAg");
	this.shape_89.setTransform(23.6,54.475);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgDAXIAAglIgOAAIAAgIIAjAAIAAAIIgOAAIAAAlg");
	this.shape_90.setTransform(19.075,54.475);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgDgDQgCgEgCgEQgCgEAAgFQAAgEACgEQACgEACgEQADgDAFgCQAFgCAEAAQAFAAAFACQAEACAEADQADAEABAEQACAEAAAEQAAAFgCAEQgBAEgDAEQgEADgEACQgFACgFAAQgEAAgFgCgAgGgOIgEAEIgDAFQgBADgBACIACAGIADAFIAEAEQADABADAAQAEAAACgBIAFgEIADgFIACgGQAAgCgCgDIgDgFIgFgEQgCgBgEAAQgDAAgDABg");
	this.shape_91.setTransform(14.35,54.475);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgJAWQgEgCgDgDQgDgEgCgEQgCgEAAgFQAAgEACgEQACgEADgEQADgDAEgCQAEgCAFAAQAGAAAEACQAEACAEADQADAEABAEQACAEAAAEQAAAFgCAEQgBAEgDAEQgEADgEACQgEACgGAAQgFAAgEgCgAgGgOIgEAEIgDAFQgBADgBACIACAGIADAFIAEAEQADABADAAQADAAADgBIAFgEIADgFIABgGQAAgCgBgDIgDgFIgFgEQgDgBgDAAQgDAAgDABg");
	this.shape_92.setTransform(8.75,54.475);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgIAWIgHgFQgDgEgCgEQgBgEAAgFQAAgEABgEQACgEADgEIAHgFQAEgCAFAAQAFAAAEACQAEABADADQACACABADIACAHIgJAAQAAgEgDgDQgDgDgGAAQgDAAgDABIgEAEIgDAFIgBAFIABAGQABADACACIAEAEQADABADAAQAGAAADgCQACgDABgEIAJAAIgCAHIgFAFIgGAEIgIABQgFAAgEgCg");
	this.shape_93.setTransform(3.35,54.475);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgRAXIAAgtIAUAAQAEAAADACIAEACIADAEIAAAEQAAAEgDADQgDADgEAAIAEAAIADACIADAEIABAEIAAAEIgEAEQgBACgDABQgDACgFAAgAgIARIAKAAQADAAADgCQACgCAAgDQAAgDgCgCQgDgCgDAAIgKAAgAgIgDIAKAAQADAAACgBQAAgBABAAQAAgBAAAAQAAgBAAgBQABAAAAgBQAAgDgCgCQgCgBgDAAIgKAAg");
	this.shape_94.setTransform(158.6,45.125);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AALAXIAAgPIgLAAIgIAPIgKAAIAKgQIgEgCIgEgDIgCgEIAAgEIABgGIACgFIAGgDQADgCADAAIAWAAIAAAtgAgIgMQgCACAAAEQAAADACACQADACAEAAIAMAAIAAgQIgMAAQgEAAgDADg");
	this.shape_95.setTransform(150.7,45.125);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgJAWIgGgFQgEgEgBgEQgBgEAAgFQAAgEABgEQABgEAEgEIAGgFQAFgCAFAAQAFAAAEACQAEABACADQADACABADIACAHIgJAAQgBgEgCgDQgDgDgGAAQgDAAgCABIgFAEIgDAFIgBAFIABAGQABADACACIAFAEQADABACAAQAGAAADgCQACgDABgEIAJAAIgCAHIgFAFIgGAEIgIABQgFAAgFgCg");
	this.shape_96.setTransform(145.8,45.125);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgDAXIAAglIgOAAIAAgIIAjAAIAAAIIgOAAIAAAlg");
	this.shape_97.setTransform(141.225,45.125);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAAAWIgHgEQgEgDgBgDIgDgIIgHAAIAAATIgJAAIAAgtIAJAAIAAATIAHAAIADgIQABgDAEgDQADgDAEgBQADgCAFAAQAFAAAEACQAFACADADQADAEACAEQACAEAAAEQAAAFgCAEQgCAEgDAEQgDADgFACQgEACgFAAQgFAAgDgCgAABgOIgDAEIgDAFQgCADAAACIACAGIADAFIADAEQADABAEAAQADAAADgBIAFgEIADgFIABgGIgBgFIgDgFIgFgEQgDgBgDAAQgEAAgDABg");
	this.shape_98.setTransform(135.725,45.125);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AALAXIAAgPIgLAAIgIAPIgKAAIAKgQIgEgCIgEgDIgCgEIAAgEIABgGIACgFIAGgDQADgCADAAIAWAAIAAAtgAgHgMQgDACAAAEQAAADADACQACACAEAAIAMAAIAAgQIgMAAQgEAAgCADg");
	this.shape_99.setTransform(129,45.125);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgWAXIAAgIIACAAIAEgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAggIAmAAIAAAsIgJAAIAAglIgUAAIAAAaQAAAGgEADQgDADgFAAg");
	this.shape_100.setTransform(123.625,45.175);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgJAWIgHgFQgCgEgBgEQgCgEAAgFQAAgEACgEQABgEACgEIAHgFQAFgCAEAAQAGAAAEACQAEABADADQACACABADIACAHIgJAAQgBgEgCgDQgDgDgHAAQgCAAgCABIgFAEIgCAFIgBAFIABAGQAAADACACIAFAEQADABACAAQAGAAACgCQADgDACgEIAIAAIgCAHIgEAFIgHAEIgJABQgEAAgFgCg");
	this.shape_101.setTransform(118.5,45.125);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAMAXIAAgeIgXAaIAAAEIgIAAIAAgtIAIAAIAAAfIAXgaIAAgFIAIAAIAAAtg");
	this.shape_102.setTransform(113.025,45.125);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAJAXIAAgOIgKAAQgIAAgEgEQgEgEAAgHIAAgQIAJAAIAAAQQAAAIAIAAIAJAAIAAgYIAJAAIAAAtg");
	this.shape_103.setTransform(107.625,45.125);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgJAWQgEgCgDgDQgEgEgBgEQgCgEAAgFQAAgEACgEQABgEAEgEQADgDAEgCQAEgCAFAAQAFAAAEADQAEACACAEIAAgIIAJAAIAAAtIgJAAIAAgIQgCAEgEACQgEADgFAAQgFAAgEgCgAgFgOIgFAEIgDAFQgCADABACIABAGIADAFIAFAEQADABACAAQAEAAACgBIAFgEIADgFIABgGQAAgCgBgDIgDgFIgFgEQgCgBgEAAQgCAAgDABg");
	this.shape_104.setTransform(102.25,45.125);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAMAXIAAgUIgXAAIAAAUIgIAAIAAgtIAIAAIAAATIAXAAIAAgTIAIAAIAAAtg");
	this.shape_105.setTransform(96.6,45.125);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAQAXIAAgtIAIAAIAAAtgAgXAXIAAgtIAIAAIAAAQIAMAAIAFABIAFADIACAEIABAGIgBAGIgCAEIgFAEIgFABgAgPAQIAKAAQAEAAABgCQACgDAAgDQAAgEgCgCQgBgCgEAAIgKAAg");
	this.shape_106.setTransform(87.975,45.125);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgJAWIgHgFQgDgEgBgEQgBgEAAgFQAAgEABgEQABgEADgEIAHgFQAFgCAEAAQAGAAAEACQAEABACADQADACABADIACAHIgJAAQgBgEgCgDQgDgDgHAAQgCAAgCABIgFAEIgCAFIgBAFIABAGQAAADACACIAFAEQADABACAAQAGAAACgCQADgDACgEIAIAAIgCAHIgFAFIgGAEIgJABQgEAAgFgCg");
	this.shape_107.setTransform(82.15,45.125);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgOAfQgHgFAAgKIAJAAQABAGADADQADADAFAAIAFgBIAEgBQACgCABgDIAAgGIAAgNQgBAEgFACQgDADgGAAQgEAAgEgCQgDgBgCgCIgDgGIgBgIIAAgbIAJAAIAAAZIAAAFIADAFIADACIAFABQADAAACgBIAFgCIACgFIAAgGIAAgYIAKAAIAAAyQgBAKgFAFQgGAGgKAAQgJgBgFgEg");
	this.shape_108.setTransform(76.6,46.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAMAXIAAgUIgXAAIAAAUIgJAAIAAgtIAJAAIAAATIAXAAIAAgTIAJAAIAAAtg");
	this.shape_109.setTransform(70.9,45.125);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgJAWQgEgCgDgDQgEgEgBgEQgCgEAAgFQAAgEACgEQABgEAEgEQADgDAEgCQAFgCAEAAQAFAAAFACQAEACADADQAEAEABAEQACAEAAAEQAAAFgCAEQgBAEgEAEQgDADgEACQgFACgFAAQgEAAgFgCgAgFgOIgFAEIgDAFQgCADABACIABAGIADAFIAFAEQADABACAAQADAAADgBIAFgEIADgFIABgGQABgCgCgDIgDgFIgFgEQgDgBgDAAQgCAAgDABg");
	this.shape_110.setTransform(65.25,45.125);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgJAiQgFgDgDgEQgDgFgCgGQgBgGAAgIIABgJIACgJIADgGIAEgEQAEgFAGgCQAFgBAIAAIAJAAIAAAIIgLAAIgJABQgEACgDADQgEAEgBAFQgCAGAAAGIADgFIAEgEIAFgCIAFgBQAFAAAEACQAFACACADQADAEACACQABAFAAAFIgBAJIgFAHQgDAEgFACQgEACgFAAQgGAAgEgCgAgFgCQgDABgCACIgDAEIgBAHIABAGIADAFQACADADABQADABACAAQAEAAACgBIAFgEIADgFIACgGQAAgEgCgDIgDgEIgFgDQgCgCgEAAQgCAAgDACg");
	this.shape_111.setTransform(59.625,43.95);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAMAXIAAgeIgXAaIAAAEIgIAAIAAgtIAIAAIAAAfIAXgaIAAgFIAIAAIAAAtg");
	this.shape_112.setTransform(51.325,45.125);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAQAXIAAgtIAIAAIAAAtgAgXAXIAAgtIAIAAIAAAQIAMAAIAFABIAFADIACAEIABAGIgBAGIgCAEIgFAEIgFABgAgPAQIAKAAQAEAAABgCQACgDAAgDQAAgEgCgCQgBgCgEAAIgKAAg");
	this.shape_113.setTransform(42.725,45.125);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgDAXIAAglIgOAAIAAgIIAjAAIAAAIIgOAAIAAAlg");
	this.shape_114.setTransform(37.575,45.125);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAMAXIAAgUIgXAAIAAAUIgIAAIAAgtIAIAAIAAATIAXAAIAAgTIAIAAIAAAtg");
	this.shape_115.setTransform(32.8,45.125);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgIAWQgEgCgDgDQgDgDgCgFIgBgJQABgEABgEQABgFADgDIAHgFQAEgCAEAAQAFAAAEACQADABADADQADADACAEQABADABAFIAAACIAAACIgiAAIABAGQABACABACIAFADQACACADAAQAFAAACgDQAEgCABgDIAIAAIgCAGIgEAEIgHAEIgHABQgFAAgEgCgAgIgNQgEAEAAAGIAZAAQAAgGgEgEQgDgDgGAAQgFAAgDADg");
	this.shape_116.setTransform(27.35,45.125);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AAPAbIAAgIIgmAAIAAgtIAJAAIAAAlIAWAAIAAglIAIAAIAAAlIAIAAIAAAQg");
	this.shape_117.setTransform(22.125,45.525);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgDgDQgCgEgCgEQgCgEAAgFQAAgEACgEQACgEACgEQADgDAFgCQAFgCAEAAQAFAAAFACQAEACAEADQADAEABAEQACAEAAAEQAAAFgCAEQgBAEgDAEQgEADgEACQgFACgFAAQgEAAgFgCgAgGgOIgEAEIgDAFQgBADgBACIACAGIADAFIAEAEQADABADAAQAEAAACgBIAFgEIADgFIACgGQAAgCgCgDIgDgFIgFgEQgCgBgEAAQgDAAgDABg");
	this.shape_118.setTransform(16.15,45.125);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgXAkIAAhGIAJAAIAAAIQACgEAEgCQAFgCAEAAQAFAAAEABQAEACAEAEQADADABAEQACAEAAAGIgCAJQgBADgDADQgEADgEACQgEACgFAAQgEAAgFgCQgEgDgCgEIAAAhgAgFgaIgFAEIgDAFIgBAHIABAFIADAFIAFADQADABACAAQAEAAACgBIAFgDIADgFIABgFIgBgHIgDgFIgFgEQgCgBgEAAQgCAAgDABg");
	this.shape_119.setTransform(10.525,46.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AAQAjIAAg9IgfAAIAAA9IgJAAIAAhFIAxAAIAABFg");
	this.shape_120.setTransform(4.05,43.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAgCACgCQAAAAABgBQABAAAAAAQABgBAAAAQABAAAAAAQADAAABACQADACAAACQAAADgDACQgBACgDAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgBAAAAg");
	this.shape_121.setTransform(170.55,37.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AAAALIAMgLIgMgKIAAgIIATAQIAAAFIgTAQgAgSALIAMgLIgMgKIAAgIIASAQIAAAFIgSAQg");
	this.shape_122.setTransform(166.9,35.125);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AASAcIAAgKIgjAAIAAAKIgIAAIAAgSIACAAQAGABACgEQAEgFAAgGIAAgXIAgAAIAAAlIAFAAIAAASgAgDgGQAAAHgCADQgCAFgDABIAXAAIAAgeIgQAAg");
	this.shape_123.setTransform(161.7,36.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AAMAXIAAgUIgXAAIAAAUIgIAAIAAgtIAIAAIAAATIAXAAIAAgTIAIAAIAAAtg");
	this.shape_124.setTransform(156.2,35.775);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgPAfQgFgFAAgKIAJAAQgBAGAEADQADADAFAAIAFgBIAEgCQACgBAAgDIACgGIAAgNQgDAEgDACQgEADgFAAQgGAAgCgCQgEgBgCgCIgDgGIAAgIIAAgbIAIAAIAAAZIABAGIABAEIAEACIAFACQADAAADgCIADgCIADgFIABgGIAAgYIAJAAIAAAyQAAAKgGAGQgFAEgLAAQgJAAgGgEg");
	this.shape_125.setTransform(150.45,37.05);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgJAWQgEgCgDgDQgEgEgBgEQgCgEAAgFQAAgEACgEQABgEAEgEQADgDAEgCQAEgCAFAAQAFAAAEADQAEACACAEIAAgIIAJAAIAAAtIgJAAIAAgIQgCAEgEACQgEADgFAAQgFAAgEgCgAgFgOIgFAEIgDAFQgCADABACIABAGIADAFIAFAEQADABACAAQADAAADgBIAFgEIADgFIABgGQABgCgCgDIgDgFIgFgEQgDgBgDAAQgCAAgDABg");
	this.shape_126.setTransform(144.45,35.775);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgXAjIAAhFIAXAAQAGAAAEACIAIAFQADAEABADQACAFAAAFQAAAEgCAFQgBAEgDACQgEAEgEACQgEABgGABIgOAAIAAAWgAgOAFIAOAAQAEgBACgBIAFgDIADgEIABgGQAAgEgBgCIgDgFQgCgCgDgBQgCgCgEAAIgOAAg");
	this.shape_127.setTransform(138.925,34.55);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AAJAXIgTgVIAAAVIgJAAIAAgtIAJAAIAAAUIABAAIAEgBIADgEIAGgIQACgEACgCQACgBAEAAIAFAAIAAAHIgEAAIgCABIgDADIgEAFIgEAFIgFABIAXAXg");
	this.shape_128.setTransform(130.95,35.75);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AAMAXIAAgUIgXAAIAAAUIgJAAIAAgtIAJAAIAAATIAXAAIAAgTIAJAAIAAAtg");
	this.shape_129.setTransform(125.35,35.775);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgJAWQgEgCgDgDQgEgEgBgEQgCgEAAgFQAAgEACgEQABgEAEgEQADgDAEgCQAEgCAFAAQAFAAAEADQAEACACAEIAAgIIAJAAIAAAtIgJAAIAAgIQgCAEgEACQgEADgFAAQgFAAgEgCgAgFgOIgFAEIgDAFQgCADABACIABAGIADAFIAFAEQADABACAAQAEAAACgBIAFgEIADgFIABgGQAAgCgBgDIgDgFIgFgEQgCgBgEAAQgCAAgDABg");
	this.shape_130.setTransform(119.35,35.775);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgJAiQgFgDgDgEQgDgEgCgHQgBgGAAgIIABgJIACgJIADgGIAEgEQAEgFAGgCQAFgCAIAAIAJAAIAAAJIgLAAIgJABQgEACgDADQgEADgBAGQgCAGAAAGIADgFIAEgEIAFgCIAFgBQAFAAAEACQAFACACADQADADACADQABAFAAAFIgBAJIgFAHQgDAEgFACQgEACgFAAQgGAAgEgCgAgFgCQgDABgCABIgDAGIgBAGIABAGIADAFQACACADACQADABACAAQAEAAACgBIAFgEIADgFIACgGQAAgDgCgDIgDgGIgFgCQgCgCgEAAQgCAAgDACg");
	this.shape_131.setTransform(113.725,34.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAAADIAAgFIAUgQIAAAIIgNAKIANALIAAAIgAgTADIAAgFIATgQIAAAIIgMAKIAMALIAAAIg");
	this.shape_132.setTransform(108.45,35.125);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgOAhQgHgCgEgGQgFgFgDgGQgCgHAAgHQAAgGACgGQADgIAFgEQAEgGAHgCQAHgEAHAAQAIAAAHAEQAHACAEAGQAFAEADAIQACAGAAAGQAAAHgCAHQgDAGgFAFQgEAGgHACQgHADgIAAQgHAAgHgDgAgKgZQgFACgDAEQgEAEgCAFQgCAFAAAFQAAAFACAGQACAEAEAFQADAEAFACQAFADAFAAQAGAAAFgDQAFgCADgEQAEgFACgEQABgGAAgFQAAgFgBgFQgCgFgEgEIgIgGQgFgCgGgBQgFABgFACg");
	this.shape_133.setTransform(99.525,34.55);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgOAhQgHgCgEgGQgFgFgDgGQgCgHAAgHQAAgGACgGQADgIAFgEQAEgGAHgCQAHgEAHAAQAIAAAHAEQAHACAEAGQAFAEADAIQACAGAAAGQAAAHgCAHQgDAGgFAFQgEAGgHACQgHADgIAAQgHAAgHgDgAgKgZQgFACgDAEQgEAEgCAFQgCAFAAAFQAAAFACAGQACAEAEAFQADAEAFACQAFADAFAAQAGAAAFgDQAFgCADgEQAEgFACgEQABgGAAgFQAAgFgBgFQgCgFgEgEIgIgGQgFgCgGgBQgFABgFACg");
	this.shape_134.setTransform(91.475,34.55);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgOAhQgHgCgEgGQgFgFgDgGQgCgHAAgHQAAgGACgGQADgIAFgEQAEgGAHgCQAHgEAHAAQAIAAAHAEQAHACAEAGQAFAEADAIQACAGAAAGQAAAHgCAHQgDAGgFAFQgEAGgHACQgHADgIAAQgHAAgHgDgAgKgZQgFACgDAEQgEAEgCAFQgCAFAAAFQAAAFACAGQACAEAEAFQADAEAFACQAFADAFAAQAGAAAFgDQAFgCADgEQAEgFACgEQABgGAAgFQAAgFgBgFQgCgFgEgEIgIgGQgFgCgGgBQgFABgFACg");
	this.shape_135.setTransform(83.425,34.55);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgTAEIAAgHIAnAAIAAAHg");
	this.shape_136.setTransform(74.325,35.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AAQAXIAAgtIAIAAIAAAtgAgXAXIAAgtIAIAAIAAAQIAMAAIAFABIAFADIACAEIABAGIgBAGIgCAEIgFAEIgFABgAgPAQIAKAAQAEAAABgCQACgDAAgDQAAgEgCgCQgBgCgEAAIgKAAg");
	this.shape_137.setTransform(66.025,35.775);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgDAXIAAglIgOAAIAAgIIAjAAIAAAIIgOAAIAAAlg");
	this.shape_138.setTransform(60.875,35.775);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgXAjIAAhFIAJAAIAAAIQACgEAEgCQAFgCAEgBQAFAAAEACQAEACAEAEQADADABAEQACAFAAAFIgCAJQgBADgDADQgEADgEACQgEACgFAAQgEAAgFgDQgEgCgCgEIAAAggAgFgaIgFAEIgDAFIgBAHIABAFIADAFIAFADQADACACAAQAEAAACgCIAFgDIADgFIABgFIgBgHIgDgFIgFgEQgCgBgEAAQgCAAgDABg");
	this.shape_139.setTransform(56.125,36.95);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgJAWQgEgCgDgDQgDgEgCgEQgCgEAAgFQAAgEACgEQACgEADgEQADgDAEgCQAEgCAFAAQAEAAAFADQAEACADAEIAAgIIAIAAIAAAtIgIAAIAAgIQgDAEgEACQgFADgEAAQgFAAgEgCgAgGgOIgEAEIgDAFQgBADgBACIACAGIADAFIAEAEQADABADAAQAEAAACgBIAFgEIADgFIACgGQAAgCgCgDIgDgFIgFgEQgCgBgEAAQgDAAgDABg");
	this.shape_140.setTransform(49.8,35.775);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AAJAXIgTgVIAAAVIgJAAIAAgtIAJAAIAAAUIABAAIAEgBIADgEIAGgIQABgEADgCQADgBADAAIAEAAIAAAHIgDAAIgCABIgEADIgDAFIgFAFIgDABIAVAXg");
	this.shape_141.setTransform(44.8,35.75);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgDAXIAAglIgOAAIAAgIIAjAAIAAAIIgOAAIAAAlg");
	this.shape_142.setTransform(37.575,35.775);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AAMAXIAAgUIgXAAIAAAUIgIAAIAAgtIAIAAIAAATIAXAAIAAgTIAIAAIAAAtg");
	this.shape_143.setTransform(32.8,35.775);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgIAWQgEgCgDgDQgDgDgCgFIgBgJQABgEABgEQABgFADgDIAHgFQAEgCAEAAQAFAAAEACQADABADADQADADACAEQABADABAFIAAACIAAACIgiAAIABAGQABACABACIAFADQACACADAAQAFAAACgDQAEgCABgDIAIAAIgCAGIgEAEIgHAEIgHABQgFAAgEgCgAgIgNQgEAEAAAGIAZAAQAAgGgEgEQgDgDgGAAQgFAAgDADg");
	this.shape_144.setTransform(27.35,35.775);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgDAXIAAglIgOAAIAAgIIAjAAIAAAIIgOAAIAAAlg");
	this.shape_145.setTransform(22.825,35.775);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AAMAXIAAgeIgXAaIAAAEIgIAAIAAgtIAIAAIAAAfIAXgaIAAgFIAIAAIAAAtg");
	this.shape_146.setTransform(18.075,35.775);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AATAXIAAglIgQAlIgFAAIgRglIAAAlIgHAAIAAgtIAMAAIAOAhIAOghIANAAIAAAtg");
	this.shape_147.setTransform(11.775,35.775);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgMAjQgFgCgEgDQgFgDgDgEIgEgJIAKAAIADAGIAGAEIAGADIAIACQAEgBAFgCQAEgBADgDQAEgDABgFQACgFABgEIgiAAIAAgIIAiAAIgCgJIgFgJQgDgCgFgDQgEgCgFAAQgEABgEABIgHAEIgFAFIgDAHIgKAAQABgFADgFQACgFAFgDQAEgEAGgBQAFgDAHAAQAIAAAGAEQAGACAFAFQAEAFACAHQADAGAAAHQAAAHgDAIQgCAGgFAFQgEAFgHADQgGACgHAAQgHAAgFgBg");
	this.shape_148.setTransform(4.475,34.55);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAgCACgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQACAAACACQADACAAACQAAADgDACQgCACgCAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_149.setTransform(160.15,28.05);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgLAsIAGgCIAFgDIACgFIABgGIAAg3IgBgGIgCgFIgFgDIgGgBIAAgJQAFAAAFACQADACADADIAFAIQACAEAAAFIAAA3IgCAJQgCAFgDADQgDADgDACQgFACgFAAg");
	this.shape_150.setTransform(156.625,25.925);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgDAUIAAgQIgQAAIAAgHIAQAAIAAgQIAHAAIAAAQIAQAAIAAAHIgQAAIAAAQg");
	this.shape_151.setTransform(152.275,25.85);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgJAiQgEgCgEgDQgDgDgBgEIgCgJIAAgZIACgJQABgEADgDQAEgDAEgCQAEgCAFAAQAGAAAEACQAEACADADQADADACAEQACAFAAAEIAAAZQAAAEgCAFQgCAEgDADQgDADgEACQgEACgGAAQgFAAgEgCgAgFgaIgFAEIgDAEIgBAGIAAAZIABAGIADAEIAFADQADACACAAIAGgCQADgBABgCIAEgEIABgGIAAgZIgBgGIgEgEIgEgEIgGgBIgFABg");
	this.shape_152.setTransform(146.5,25.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AACAyQgDgCgDgDQgDgDgCgFQgCgEAAgFIAAg3QAAgFACgEQACgEADgEIAGgFQAEgCAGAAIAAAJIgGABIgEADIgDAFIgBAGIAAA3IABAGIADAFQABACADABQADACADAAIAAAIQgGAAgEgCg");
	this.shape_153.setTransform(142.1,25.925);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AAAALIANgLIgNgKIAAgIIAUAQIAAAFIgUAQgAgTALIANgLIgNgKIAAgIIATAQIAAAFIgTAQg");
	this.shape_154.setTransform(135,25.775);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AAJAXIgTgVIAAAVIgIAAIAAgtIAIAAIAAAUIACAAIADgBIAEgEIAEgIQACgEADgCQADgBADAAIAFAAIAAAHIgDAAIgEABIgDADIgDAFIgFAFIgDABIAVAXg");
	this.shape_155.setTransform(130.45,26.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AAMAXIAAgUIgXAAIAAAUIgJAAIAAgtIAJAAIAAATIAXAAIAAgTIAJAAIAAAtg");
	this.shape_156.setTransform(124.85,26.425);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgDgDQgDgEgBgEQgCgEAAgFQAAgEACgEQABgEADgEQADgDAFgCQAEgCAFAAQAEAAAFADQAEACADAEIAAgIIAIAAIAAAtIgIAAIAAgIQgDAEgEACQgFADgEAAQgFAAgEgCgAgGgOIgEAEIgDAFQgCADAAACIACAGIADAFIAEAEQAEABACAAQAEAAACgBIAFgEIADgFIACgGQgBgCgBgDIgDgFIgFgEQgCgBgEAAQgCAAgEABg");
	this.shape_157.setTransform(118.85,26.425);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgWAjIAAhFIAoAAIAAAIIgfAAIAAAWIAQAAIAIABQAEACACACIAEAGIACAIQAAAEgCADQgBAEgDADQgCADgEABQgEACgEAAgAgNAbIAQAAIAEgBIAEgDIACgDIABgFIgBgEIgCgFIgEgCIgEgBIgQAAg");
	this.shape_158.setTransform(113.325,25.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAgCACgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQADAAABACQADACAAACQAAADgDACQgBACgDAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_159.setTransform(109,28.05);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AAMAXIAAgUIgXAAIAAAUIgJAAIAAgtIAJAAIAAATIAXAAIAAgTIAJAAIAAAtg");
	this.shape_160.setTransform(104.85,26.425);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgJAWQgEgCgDgDQgDgEgCgEQgCgEAAgFQAAgEACgEQACgEADgEQADgDAEgCQAEgCAFAAQAGAAAEACQAEACAEADQADAEABAEQACAEAAAEQAAAFgCAEQgBAEgDAEQgEADgEACQgEACgGAAQgFAAgEgCgAgGgOIgEAEIgDAFQgBADAAACIABAGIADAFIAEAEQADABADAAQADAAADgBIAFgEIADgFIABgGQAAgCgBgDIgDgFIgFgEQgDgBgDAAQgDAAgDABg");
	this.shape_161.setTransform(99.2,26.425);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgEAjIAAgKIgGAAQgGAAgEgCQgEgCgDgDQgEgEgCgEQgBgFAAgFQAAgEABgFQACgEAEgEQADgDAEgCQAEgCAGAAIAGAAIAAgKIAIAAIAAAKIAHAAQAFAAAFACQAFACADADQADAEACAEQACAFAAAEQAAAFgCAFQgCAEgDAEQgDADgFACQgFACgFAAIgHAAIAAAKgAAEARIAHAAQAEAAACgBIAFgEQACgCABgEIABgGIgBgGIgDgGIgFgDQgCgBgEAAIgHAAgAgQgPIgFADIgDAGIgBAGQgBADACADQABAEACACIAFAEQADABADAAIAGAAIAAghIgGAAQgDAAgDABg");
	this.shape_162.setTransform(92.55,25.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgDgDQgDgEgBgEQgCgEAAgFQAAgEACgEQABgEADgEQADgDAFgCQAEgCAFAAQAEAAAFADQAEACADAEIAAgIIAIAAIAAAtIgIAAIAAgIQgDAEgEACQgFADgEAAQgFAAgEgCgAgGgOIgEAEIgDAFQgCADAAACIACAGIADAFIAEAEQAEABACAAQAEAAACgBIAFgEIADgFIACgGQgBgCgBgDIgDgFIgFgEQgCgBgEAAQgCAAgEABg");
	this.shape_163.setTransform(85.55,26.425);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgMAXIAAgtIAaAAIAAAIIgSAAIAAAlg");
	this.shape_164.setTransform(81.35,26.425);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgIAWQgEgCgDgDQgDgDgCgFIgBgJQABgEABgEQABgFADgDIAHgFQAEgCAFAAQAEAAAEACQADABADADQAEADABAEQABADABAFIAAACIAAACIgiAAIABAGQAAACADACIADADQADACADAAQAFAAADgDQADgCAAgDIAJAAIgCAGIgEAEIgGAEIgIABQgFAAgEgCgAgIgNQgEAEAAAGIAZAAQAAgGgDgEQgEgDgFAAQgGAAgDADg");
	this.shape_165.setTransform(76.6,26.425);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AAXAjIAAgwIgUAwIgGAAIgUgwIAAAwIgJAAIAAhFIAJAAIAXA3IAYg3IAJAAIAABFg");
	this.shape_166.setTransform(69.975,25.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AAAADIAAgFIAUgQIAAAIIgNAKIANALIAAAIgAgTADIAAgFIATgQIAAAIIgMAKIAMALIAAAIg");
	this.shape_167.setTransform(63.55,25.775);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgIAWQgFgCgCgDQgDgDgBgFIgBgJQgBgEACgEQABgFADgDIAHgFQAEgCAEAAQAFAAAEACQAEABACADQADADACAEQACADAAAFIAAACIAAACIgiAAIABAGQAAACACACIAFADQACACADAAQAFAAACgDQADgCACgDIAIAAIgCAGIgEAEIgHAEIgHABQgFAAgEgCgAgIgNQgEAEAAAGIAZAAQAAgGgEgEQgDgDgGAAQgEAAgEADg");
	this.shape_168.setTransform(56.05,26.425);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AAMAXIAAgeIgXAaIAAAEIgIAAIAAgtIAIAAIAAAfIAXgaIAAgFIAIAAIAAAtg");
	this.shape_169.setTransform(50.625,26.425);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AAMAXIAAgUIgXAAIAAAUIgIAAIAAgtIAIAAIAAATIAXAAIAAgTIAIAAIAAAtg");
	this.shape_170.setTransform(44.95,26.425);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgIAWQgEgCgDgDQgDgDgCgFIgBgJQABgEABgEQABgFADgDIAHgFQAEgCAEAAQAFAAAEACQADABADADQADADACAEQABADABAFIAAACIAAACIgiAAIABAGQABACABACIAFADQACACADAAQAFAAACgDQAEgCABgDIAIAAIgCAGIgEAEIgHAEIgHABQgFAAgEgCgAgIgNQgEAEAAAGIAZAAQAAgGgEgEQgDgDgGAAQgFAAgDADg");
	this.shape_171.setTransform(39.5,26.425);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AAWAXIgSgVIAAAVIgHAAIAAgVIgSAVIgKAAIAVgXQgDAAgDgBQgCgCgCgDIgCgEIgDgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAIgDAAIAAgHIAEAAQADAAADABQACACACAEIAFAIIADADQAAABABAAQAAAAABABQAAAAABAAQABAAABAAIABAAIAAgUIAHAAIAAAUIACAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIAEgDIAEgIQADgEACgCQADgBADAAIAEAAIAAAHIgDAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAEIgCAEQgCADgDACQgCABgDAAIAVAXg");
	this.shape_172.setTransform(33.55,26.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgDgDQgCgEgCgEQgCgEAAgFQAAgEACgEQACgEACgEQADgDAFgCQAFgCAEAAQAFAAAFACQAEACAEADQADAEABAEQACAEAAAEQAAAFgCAEQgBAEgDAEQgEADgEACQgFACgFAAQgEAAgFgCgAgGgOIgEAEIgDAFQgBADgBACIACAGIADAFIAEAEQADABADAAQAEAAACgBIAFgEIADgFIACgGQAAgCgCgDIgDgFIgFgEQgCgBgEAAQgDAAgDABg");
	this.shape_173.setTransform(27.4,26.425);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgWAXIAAgIIACAAIAEgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAggIAmAAIAAAsIgJAAIAAglIgUAAIAAAaQAAAGgEADQgDADgFAAg");
	this.shape_174.setTransform(21.525,26.475);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AAMAXIAAgeIgXAaIAAAEIgIAAIAAgtIAIAAIAAAfIAXgaIAAgFIAIAAIAAAtg");
	this.shape_175.setTransform(16.175,26.425);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgXAjIAAhFIAJAAIAAAIQACgEAEgCQAFgCAEgBQAFAAAEACQAEACAEADQADAEABAEQACAFAAAFIgCAJQgBACgDAEQgEADgEACQgEACgFAAQgEAAgFgDQgEgCgCgEIAAAggAgFgaIgFAEIgDAFIgBAHIABAGIADAEIAFADQADACACAAQAEAAACgCIAFgDIADgEIABgGIgBgHIgDgFIgFgEQgCgBgEAAQgCAAgDABg");
	this.shape_176.setTransform(10.525,27.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AAQAjIAAg9IgfAAIAAA9IgJAAIAAhFIAxAAIAABFg");
	this.shape_177.setTransform(4.05,25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.disclamer, new cjs.Rectangle(-1.3,16.9,202,63.1), null);


(lib.card_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSA2QgHgCgGgEQgEgEgDgFQgDgGgBgHIAfAAQABAFADACQADADAEAAQAGAAADgDQADgDAAgIIAAgNQgDAFgGAEQgGAEgIgBQgIABgFgDQgGgDgDgDQgEgFgCgGQgBgEAAgJIAAgsIAfAAIAAAnQAAAIACADQACAFAFAAQAMAAAAgRIAAgmIAfAAIAABKQAAAKgDAIQgEAGgFAEIgGAFIgHACIgIABIgKABQgKAAgIgCg");
	this.shape.setTransform(132.425,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAnIAAg1IgWAAIAAgYIBHAAIAAAYIgVAAIAAA1g");
	this.shape_1.setTransform(123.575,13.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsA4IAAhtIAfAAIAAAMIACgGIAGgDIAGgEIAIgBQAIAAAHADQAGADAFAGQAFAFACAHQAEAIAAAJQAAAJgEAHQgCAHgFAFQgFAGgGADQgHADgIAAIgIgBIgGgEIgGgEIgCgFIAAAsgAgKgZQgEAFABAGQgBAGAEAFQAFAEAFAAQAGAAAFgEQADgFAAgGQAAgGgDgFQgFgEgGgBQgFABgFAEg");
	this.shape_2.setTransform(114.85,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAmQgHgDgFgGQgEgEgDgIQgCgHgBgKQABgIACgIQADgHAEgFQAFgGAHgDQAHgDAIAAIAIABIAGAEIAFAEIAEAFIAAgMIAeAAIAABNIgeAAIAAgMIgEAGIgFADIgGAEIgIABQgIAAgHgDgAgJgKQgEAFgBAFQABAGAEAFQADAFAGAAQAGAAAEgFQAFgFAAgGQAAgFgFgFQgEgEgGgBQgGABgDAEg");
	this.shape_3.setTransform(104,13.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAHAoIgTggIAAAgIgdAAIAAhOIAdAAIAAAgIABAAQADgBACgCIAFgGIAGgMQAEgGAFgDQAGgCAJgBIAIAAIAAAYIgDAAIgFABQgCABgCADIgDAGQgCADgCABIgFABIAdAng");
	this.shape_4.setTransform(94.725,13.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglAnIAAhNIAdAAIAAAYIARAAQAIAAAGACQAGACADAEQAEAEABAEIABAKIgBAJQgBAFgEAEQgDAEgGACQgGADgIAAgAgIAVIAJAAQAEAAADgDQACgCAAgEQAAgEgCgCQgDgDgEAAIgJAAg");
	this.shape_5.setTransform(81.775,13.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNAnIAAg1IgWAAIAAgYIBHAAIAAAYIgVAAIAAA1g");
	this.shape_6.setTransform(73.275,13.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AANAnIAAgoIgZAjIAAAFIgeAAIAAhNIAeAAIAAAqIAZgjIAAgHIAeAAIAABNg");
	this.shape_7.setTransform(64.4,13.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAnIAAg1IgWAAIAAgYIBHAAIAAAYIgVAAIAAA1g");
	this.shape_8.setTransform(55.525,13.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAmQgIgDgGgGQgFgFgDgIQgDgHAAgJQAAgHADgIQADgHAFgGQAGgFAIgEQAJgDAKAAQAKAAAIADQAIADAFAEQAFAFADAGQADAHABAHIgfAAQAAgEgDgDQgDgDgGAAQgDAAgCACIgFADQgCACAAADIgBAFIABAGQAAADACACIAFAEQADABACAAQAFAAADgCQADgCABgEIAfAAQgBAHgDAGQgDAGgFAFQgGAEgIADQgHACgKAAQgKAAgJgDg");
	this.shape_9.setTransform(46.925,13.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSA2QgHgCgGgEQgEgEgDgFQgDgGgBgHIAfAAQABAFADACQADADAEAAQAGAAADgDQADgDAAgIIAAgNQgDAFgGAEQgGAEgIgBQgIABgFgDQgGgDgDgDQgEgFgCgGQgBgEAAgJIAAgsIAfAAIAAAnQAAAIACADQACAFAFAAQAMAAAAgRIAAgmIAfAAIAABKQAAAKgDAIQgEAGgFAEIgGAFIgHACIgIABIgKABQgKAAgIgCg");
	this.shape_10.setTransform(36.925,15.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AALAnIAAg1IgWAAIAAA1IgcAAIAAhNIBQAAIAABNg");
	this.shape_11.setTransform(26.9,13.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAaAnIAAhNIAeAAIAABNgAg3AnIAAhNIAdAAIAAAYIASAAQAIAAAFACQAGACADAEQAEAEABAEIABAKIgBAJQgBAFgEAEQgDAEgGACQgFADgIAAgAgaAVIAKAAQAEAAADgDQACgCAAgEQAAgEgCgCQgDgDgEAAIgKAAg");
	this.shape_12.setTransform(15.375,13.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgsA3IAAhtIA1AAQALAAAHADQAHADAEAEQAEAFABAFIABAJQAAAGgBAEIgFAHIgGAGIgHACIAGABIAHAFQADADACAFQACAEAAAHIgBAJQgCAFgDAFQgEAEgHAEQgHADgMAAgAgLAgIALAAQAGAAADgEQADgDAAgFIgBgDIgBgDIgFgEIgFgBIgLAAgAgLgLIAKAAIAGAAIAEgDIACgEIABgEIgBgEIgCgDIgEgDIgGgBIgKAAg");
	this.shape_13.setTransform(3.725,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,0,143.2,24.7);


(lib.card_shadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.card_shadow();
	this.instance.parent = this;
	this.instance.setTransform(2.05,0,0.7891,0.7892,0,1.192,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.card_shadow_1, new cjs.Rectangle(0,0,142.5,98.7), null);


(lib.card_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00D9E6").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgcAAIAABLg");
	this.shape_39.setTransform(127.75,138.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00D9E6").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBCIAAhCIALAAIAABVg");
	this.shape_40.setTransform(119.7,138.05);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00D9E6").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAbIAuAAIAAAJIguAAIAAAdIAzAAIAAAKg");
	this.shape_41.setTransform(111.55,138.05);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00D9E6").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_42.setTransform(105.725,138.05);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00D9E6").s().p("AgaArIAAhVIALAAIAABLIAqAAIAAAKg");
	this.shape_43.setTransform(100.975,138.05);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00D9E6").s().p("AgTAnQgJgGgEgKQgFgMAAgLQAAgNAFgKQAFgKAJgFQAKgGALAAQANAAAIAHQAJAHAEALIgMAEQgCgKgHgFQgFgDgIAAQgJgBgHAFQgHAFgCAIQgDAIAAAIQAAALADAHQADAIAHAFQAGADAIAAQAJABAGgGQAHgFACgLIAMADQgEAOgJAHQgJAIgNgBQgOABgIgGg");
	this.shape_44.setTransform(93.15,138.05);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00D9E6").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBCIAAhCIALAAIAABVg");
	this.shape_45.setTransform(81.05,138.05);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00D9E6").s().p("AgVAnQgKgHgEgJQgFgLAAgLQAAgUALgMQAMgNARAAQAMABAKAFQAJAGAFAKQAFAKAAAMQAAANgFAKQgGALgJAFQgKAGgLgBQgMAAgJgFgAgUgaQgIAJgBATQAAAPAJAJQAIAIAMAAQANABAIgKQAIgIAAgRQAAgKgEgHQgDgIgHgFQgGgDgJAAQgLAAgJAHg");
	this.shape_46.setTransform(72.1,138.05);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00D9E6").s().p("AgcArIAAhVIA5AAIAAAKIguAAIAAAbIAoAAIAAAJIgoAAIAAAng");
	this.shape_47.setTransform(63.95,138.05);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00D9E6").s().p("AAbArIgKgaIgjAAIgJAaIgMAAIAhhVIALAAIAjBVgAgFgRIgJAYIAcAAIgJgWIgGgSQgBAJgDAHg");
	this.shape_48.setTransform(56.05,138.05);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00D9E6").s().p("AgSAnQgKgFgGgLQgFgKAAgNQAAgLAFgLQAGgLAJgFQAKgGAMAAQAJABAIADQAIADAEAFQAEAGACAIIgKADQgCgGgDgFQgDgDgFgCQgFgCgHAAQgHAAgFACQgGACgDAEQgEAEgCAEQgDAIAAAJQAAALAEAIQAEAHAHAFQAIADAHAAQAIAAAHgCQAHgEADgDIAAgQIgZAAIAAgJIAlAAIAAAfQgJAHgJADQgJAEgJgBQgMABgKgGg");
	this.shape_49.setTransform(47.325,138.05);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00D9E6").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAbIAuAAIAAAJIguAAIAAAdIAzAAIAAAKg");
	this.shape_50.setTransform(38.85,138.05);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00D9E6").s().p("AAeArIAAhHIgZBHIgJAAIgZhIIAABIIgLAAIAAhVIARAAIAUA8IAEANIAEgOIAUg7IAQAAIAABVg");
	this.shape_51.setTransform(29.7,138.05);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00D9E6").s().p("AAWAqIAAgiIgrAAIAAAiIgVAAIAAhTIAVAAIAAAgIArAAIAAggIAVAAIAABTg");
	this.shape_52.setTransform(221.775,138.475);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00D9E6").s().p("AgKAxIAAgLIgJAAQgnAAgFggIgBgLQAAgrAsAAIApAAQAsAAAAArIgBALQgDAQgJAIQgLAIgVAAIgJAAIAAALgAALAVIAJAAQARgBAGgOIABgLQAAgZgUAAIgNAAgAgrgFQAAAJABACQAGAOARABIAJAAIAAgzIgNAAQgUAAAAAZg");
	this.shape_53.setTransform(198.325,137.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00D9E6").s().p("AgDAsQgXAAgLgLQgLgLAAgWQAAgWALgKQALgLAXAAIAHAAQAXAAALALQALAKAAAWQAAAWgLALQgLALgYAAgAgWgSQgFAGAAAMQAAANAGAHQAFAGAOAAIAFAAQANAAAGgGQAGgHAAgNQAAgZgZAAIgFAAQgOABgGAGg");
	this.shape_54.setTransform(211.225,138.45);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00D9E6").s().p("AglAqIAAhHQAAgFAEgDQADgEAGAAIA+AAIAAARIg0AAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIAABAg");
	this.shape_55.setTransform(179.375,138.475);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00D9E6").s().p("AgYAqQgFAAgEgEQgEgDAAgFIAAg7QAAgFAEgDQAEgEAFAAIA+AAIAAARIgzAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIAAANIA0AAIAAAQIg0AAIAAAQQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIAzAAIAAASg");
	this.shape_56.setTransform(170.325,138.475);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00D9E6").s().p("AgSAkIgcg/IAABNIgVAAIAAhOQAAgLAHgGQAFgEAHgBQAOAAAHAQIAbA/IAcg/QAHgQAOAAQAHABAFAEQAHAGgBALIAABOIgUAAIAAhNIgcA/QgGAPgNAAQgMAAgGgPg");
	this.shape_57.setTransform(158.4,137.75);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00D9E6").s().p("AAdAsIgHgSIgrAAIgHASIgXAAIAihLQAGgLALAAQAMAAAGALIAiBLgAAPAJIgNgeQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgOAeIAdAAg");
	this.shape_58.setTransform(186.8,138.35);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#00D9E6").p("AgfgaIAAAvIBDAA");
	this.shape_59.setTransform(28.7,49.95);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#00D9E6").p("AgfgZIAAAdQAAAHAGAFQAGAFAJAAIAuAA");
	this.shape_60.setTransform(28.7,54.75);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#00D9E6").p("AgjAVIAuAAQAJAAAFgFQAGgFAAgHIAAgd");
	this.shape_61.setTransform(42.75,54.75);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#00D9E6").p("AAAgXIAABfIBEAAIAAiPIhyAAQgJAAgGAFQgGAFAAAHIAAAfg");
	this.shape_62.setTransform(32.325,49.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#00D9E6").p("AgjAVIBCAAIAAgv");
	this.shape_63.setTransform(42.75,49.95);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#00D9E6").p("AgjAYIBCAAIAAgdQAAgIgGgFQgFgFgJAAIguAA");
	this.shape_64.setTransform(42.75,44.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00D9E6").s().p("AADAqIAAg7IgQAAIAAgJQALAAACgEQAEgDAAgIIAKAAIAABTg");
	this.shape_65.setTransform(151.1,103.825);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00D9E6").s().p("AgbAqQAAgZAUgMIAMgFQAMgGAAgMQgBgGgEgEQgDgEgHAAQgQAAAAAUIgLAAQAAgOAHgHQAIgIAMAAQAMAAAHAGQAHAGAAALQAAAQgQAIIgMAHQgNAHgCAMIAsAAIAAAKg");
	this.shape_66.setTransform(145.55,103.775);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00D9E6").s().p("AgYAuIAphfIAIADIgpBhg");
	this.shape_67.setTransform(139.325,103.75);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00D9E6").s().p("AgaAqIAmhIIgoAAIAAgLIA5AAIgqBTg");
	this.shape_68.setTransform(134.525,103.825);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00D9E6").s().p("AgeAAQgBgqAfAAQAgAAAAAqQAAArggAAQgfAAABgrgAgUAAQAAAhAUAAQAUAAAAghQAAgggUAAQgUAAAAAgg");
	this.shape_69.setTransform(127.4,103.825);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00D9E6").s().p("AgwAAQAAhCAwAAQAxAAAABCQAABDgxAAQgwAAAAhDgAggAAQABAzAfAAQAhAAgBgzQABgzghAAQgfAAgBAzg");
	this.shape_70.setTransform(216.2,78.55);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00D9E6").s().p("AgwAAQAAhCAwAAQAxAAAABCQAABDgxAAQgwAAAAhDgAgfAAQAAAzAfAAQAgAAAAgzQAAgzggAAQgfAAAAAzg");
	this.shape_71.setTransform(204.75,78.55);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00D9E6").s().p("AgwAAQAAhCAwAAQAxAAAABCQAABDgxAAQgwAAAAhDgAggAAQABAzAfAAQAgAAAAgzQAAgzggAAQgfAAgBAzg");
	this.shape_72.setTransform(193.35,78.55);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00D9E6").s().p("AgwAAQAAhCAwAAQAxAAAABCQAABDgxAAQgwAAAAhDgAggAAQABAzAfAAQAhAAgBgzQABgzghAAQgfAAgBAzg");
	this.shape_73.setTransform(181.9,78.55);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00D9E6").s().p("AgwAAQAAhCAwAAQAxAAAABCQAABDgxAAQgwAAAAhDgAggAAQABAzAfAAQAhAAgBgzQABgzghAAQgfAAgBAzg");
	this.shape_74.setTransform(161.2,78.55);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#00D9E6").s().p("AgwAAQAAhCAwAAQAxAAAABCQAABDgxAAQgwAAAAhDgAggAAQAAAzAgAAQAgAAAAgzQAAgzggAAQggAAAAAzg");
	this.shape_75.setTransform(149.8,78.55);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#00D9E6").s().p("AgXBCIAcgoIgFABQgUAAgNgOQgMgNAAgTQAAgTAMgNQANgOAUAAQAVAAAMAOQANANAAATQAAARgJAKIgnA6gAgVgpQgHAJAAANQAAAOAHAIQAIAJANAAQANAAAIgJQAIgIAAgOQAAgNgIgJQgIgJgNAAQgNAAgIAJg");
	this.shape_76.setTransform(138.775,78.425);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#00D9E6").s().p("AggA5QgNgLAAgRQAAgMAGgIQAGgJALgCQgJgDgGgHQgGgJAAgKQAAgQAMgJQAMgKATAAQATAAANAKQAMAJAAAQQAAAKgGAJQgGAHgKADQALACAGAJQAHAIAAAMQAAARgNALQgNAKgUAAQgUAAgMgKgAgTALQgIAGAAALQAAALAIAGQAHAHAMAAQAMAAAIgHQAIgGAAgLQAAgLgIgGQgHgGgNAAQgLAAgIAGgAgSguQgHAGAAAKQAAAJAHAHQAHAFALAAQAMAAAHgFQAHgGAAgKQAAgKgHgGQgHgGgMAAQgLAAgHAGg");
	this.shape_77.setTransform(128.275,78.55);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#00D9E6").s().p("AgpBBIA7hxIg+AAIAAgQIBYAAIhBCBg");
	this.shape_78.setTransform(109.4,78.525);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00D9E6").s().p("AghA0QgMgNAAgTQAAgPAJgNIAng5IAVAAIgcAoIAEgBQAVAAANAOQAMAMAAAUQAAATgMANQgNAOgVAAQgUAAgNgOgAgUgCQgIAIAAAOQAAAOAIAIQAHAJANAAQAOAAAHgJQAJgIgBgOQABgOgJgIQgHgJgOAAQgNAAgHAJg");
	this.shape_79.setTransform(99.4,78.65);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#00D9E6").s().p("AgfA5QgMgLgBgQIARAAQACAJAGAGQAIAFALAAQAMAAAIgIQAIgIgBgOQAAgOgGgGQgIgIgMAAQgTAAgIAPIgPAAIAAhIIBNAAIAAAQIg+AAIAAAnQAKgNAUAAQASAAAMAMQALALAAAUQAAAUgMANQgNANgUAAQgTAAgMgJg");
	this.shape_80.setTransform(88.9,78.65);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00D9E6").s().p("AAHBBIAAgqIgzAAIAAhXIASAAIAABHIAhAAIAAglIASAAIAAAlIAUAAIAAAQIgUAAIAAAqg");
	this.shape_81.setTransform(78.175,78.525);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00D9E6").s().p("AggA3QgMgLAAgUIASAAQAAANAHAHQAIAIAMAAQAMAAAHgHQAIgGAAgLQAAgXgcAAIgIAAIAAgPIAIAAQAZABAAgWQAAgJgHgGQgHgFgKgBQgLAAgHAHQgHAHAAALIgRAAQAAgSAMgKQALgLATAAQASAAAMAKQALAKAAAPQAAAXgXAGQALACAIAHQAHAJAAAMQAAASgMAKQgMALgUAAQgVAAgMgMg");
	this.shape_82.setTransform(57.925,78.55);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00D9E6").s().p("AgrBCQAAgWAHgNQAIgNARgJIATgKQASgJAAgSQAAgJgGgGQgHgGgKAAQgLAAgHAHQgHAIAAAOIgSAAQAAgUAMgMQAMgNATAAQATAAALAKQALAKAAAQQAAAagZANIgTAKQgMAHgEAGQgFAGgCALIBDAAIAAAQg");
	this.shape_83.setTransform(47.525,78.425);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#00D9E6").s().p("AAFBBIAAhcIgaAAIAAgPQARAAAFgFQAFgEAAgNIAQAAIAACBg");
	this.shape_84.setTransform(37.975,78.525);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00D9E6").s().p("AgwAAQAAhCAwAAQAxAAAABCQAABDgxAAQgwAAAAhDgAgfAAQgBAzAgAAQAgAAAAgzQAAgzggAAQggAAABAzg");
	this.shape_85.setTransform(29.6,78.55);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00D9E6").s().p("AxWMLQgnABgbgcQgcgbAAgmIAA1cQAAgmAcgcQAbgbAngBMAiuAAAQAmABAbAbQAcAcAAAmIAAVcQAAAmgcAbQgbAcgmgBgAyKrhQgWAWAAAeIAAVcQAAAeAWAVQAVAWAfgBMAiuAAAQAeABAVgWQAWgVAAgeIAA1cQAAgegWgWQgVgVgegBMgiuAAAQgfABgVAVg");
	this.shape_86.setTransform(120.475,77.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]}).wait(1));

	// Layer_2
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(255,255,255,0.149)").s().p("AxFMAQhkABAAhlIAA03QAAhlBkABMAiLAAAQBkgBAABlIAAU3QAABlhkgBg");
	this.shape_87.setTransform(120.35,78.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_87).wait(1));

}).prototype = getMCSymbolPrototype(lib.card_1, new cjs.Rectangle(0,0,241,155.9), null);


(lib.btn_plashka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#731982").s().p("AqxD2IAAnrIVjAAIAAHrg");
	this.shape.setTransform(68.975,24.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138,49.1);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B956").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.supersign_repstay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// round_03
	this.instance = new lib.round_03();
	this.instance.parent = this;
	this.instance.setTransform(188.75,201.6,1.0287,1.0287,0,0,0,30.5,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({regX:30.4,regY:30.3,scaleX:1.0373,scaleY:1.0373,x:188.6,y:201.35},0).wait(1).to({scaleX:1.0476,scaleY:1.0476},0).wait(1).to({scaleX:1.0597,scaleY:1.0597},0).wait(1).to({scaleX:1.0738,scaleY:1.0738},0).wait(1).to({scaleX:1.0905,scaleY:1.0905,y:201.4},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:188.65},0).wait(1).to({scaleX:1.1333,scaleY:1.1333},0).wait(1).to({regX:30.6,regY:30.6,scaleX:1.1617,scaleY:1.1617,x:188.85,y:201.65},0).wait(1).to({regX:30.4,regY:30.3,scaleX:1.1091,scaleY:1.1091,x:188.55,y:201.25},0).wait(1).to({scaleX:1.0692,scaleY:1.0692},0).wait(1).to({scaleX:1.0429,scaleY:1.0429},0).wait(1).to({regX:30.5,regY:30.5,scaleX:1.0287,scaleY:1.0287,x:188.75,y:201.6},0).wait(1));

	// round_04
	this.instance_1 = new lib.round_04();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120.25,201.6,1.0287,1.0287,0,0,0,30.6,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({regX:30.3,regY:30.3,scaleX:1.0373,scaleY:1.0373,x:119.9,y:201.35},0).wait(1).to({scaleX:1.0476,scaleY:1.0476},0).wait(1).to({scaleX:1.0597,scaleY:1.0597},0).wait(1).to({scaleX:1.0738,scaleY:1.0738},0).wait(1).to({scaleX:1.0905,scaleY:1.0905,y:201.4},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.1333,scaleY:1.1333},0).wait(1).to({regX:30.6,regY:30.6,scaleX:1.1617,scaleY:1.1617,x:120.2,y:201.65},0).wait(1).to({regX:30.3,regY:30.3,scaleX:1.1091,scaleY:1.1091,x:119.85,y:201.25},0).wait(1).to({scaleX:1.0692,scaleY:1.0692},0).wait(1).to({scaleX:1.0429,scaleY:1.0429},0).wait(1).to({regX:30.6,regY:30.5,scaleX:1.0287,scaleY:1.0287,x:120.25,y:201.6},0).wait(9));

	// round_04
	this.instance_2 = new lib.round_04();
	this.instance_2.parent = this;
	this.instance_2.setTransform(51.45,201.6,1.0288,1.0288,0,0,0,30.4,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:30.3,regY:30.3,scaleX:1.0373,scaleY:1.0373,x:51.3,y:201.35},0).wait(1).to({scaleX:1.0474,scaleY:1.0474,x:51.35},0).wait(1).to({scaleX:1.0593,scaleY:1.0593,x:51.3},0).wait(1).to({scaleX:1.0733,scaleY:1.0733,y:201.3},0).wait(1).to({scaleX:1.0897,scaleY:1.0897},0).wait(1).to({scaleX:1.1091,scaleY:1.1091,x:51.35,y:201.35},0).wait(1).to({scaleX:1.1321,scaleY:1.1321},0).wait(1).to({regX:30.5,regY:30.6,scaleX:1.1601,scaleY:1.1601,x:51.55,y:201.65},0).wait(1).to({regX:30.3,regY:30.3,scaleX:1.1082,scaleY:1.1082,x:51.25,y:201.3},0).wait(1).to({scaleX:1.0687,scaleY:1.0687},0).wait(1).to({scaleX:1.0428,scaleY:1.0428,x:51.2},0).wait(1).to({regX:30.4,regY:30.5,scaleX:1.0288,scaleY:1.0288,x:51.45,y:201.6},0).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.2,166.1,207.60000000000002,70.5);


(lib.supersign_open_cutted = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_12 = new cjs.Graphics().p("AjGGXQhbhbAAiCIhIlUQhHlWACgBQADgBGrABIGuAAQADAAgxFWIgyFVQAACChbBbQhcBbiBAAQiAAAhchbg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_graphics_12,x:117.7518,y:182.7667}).wait(55));

	// Layer_4
	this.instance = new lib.ticker("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(130.95,287.05,1,1,-7.9692,0,0,23.8,46);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({x:112.5,y:188.45},12,cjs.Ease.quadInOut).wait(18).to({startPosition:0},0).to({x:130.95,y:287.05},24,cjs.Ease.quadInOut).wait(1));

	// Layer_3
	this.instance_1 = new lib.ticker("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(114.05,280.95,1,1,6.245,0,0,23.8,46);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({x:128.35,y:189.05},12,cjs.Ease.quadInOut).wait(18).to({startPosition:0},0).to({x:114.05,y:280.95},24,cjs.Ease.quadInOut).wait(1));

	// round_03
	this.instance_2 = new lib.round_03();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120.2,201.65,0.1364,0.1364,0,0,0,30.4,30.4);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:30.3,scaleX:0.2023,scaleY:0.2023,x:120.15,y:201.6,alpha:0.0645},0).wait(1).to({scaleX:0.281,scaleY:0.281,y:201.55,alpha:0.1415},0).wait(1).to({scaleX:0.374,scaleY:0.374,y:201.6,alpha:0.2324},0).wait(1).to({scaleX:0.483,scaleY:0.483,y:201.55,alpha:0.3391},0).wait(1).to({scaleX:0.6107,scaleY:0.6107,alpha:0.464},0).wait(1).to({scaleX:0.761,scaleY:0.761,y:201.5,alpha:0.611},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.7862},0).wait(1).to({regX:30.6,regY:30.6,scaleX:1.1586,scaleY:1.1586,x:120.2,y:201.65,alpha:1},0).wait(1).to({regX:30.4,regY:30.3,scaleX:1.1072,scaleY:1.1072,x:119.9,y:201.25},0).wait(1).to({scaleX:1.0682,scaleY:1.0682},0).wait(1).to({scaleX:1.0425,scaleY:1.0425},0).wait(1).to({regX:30.5,regY:30.5,scaleX:1.0287,scaleY:1.0287,x:120.15,y:201.6},0).wait(55));

	// round_04
	this.instance_3 = new lib.round_04();
	this.instance_3.parent = this;
	this.instance_3.setTransform(188.8,201.65,0.138,0.138,0,0,0,30.4,30.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16).to({_off:false},0).wait(1).to({regX:30.3,regY:30.3,scaleX:0.204,scaleY:0.204,x:188.75,y:201.6,alpha:0.0645},0).wait(1).to({scaleX:0.2829,scaleY:0.2829,x:188.7,y:201.55,alpha:0.1415},0).wait(1).to({scaleX:0.376,scaleY:0.376,x:188.75,y:201.6,alpha:0.2324},0).wait(1).to({scaleX:0.4851,scaleY:0.4851,x:188.7,y:201.55,alpha:0.3391},0).wait(1).to({scaleX:0.613,scaleY:0.613,alpha:0.464},0).wait(1).to({scaleX:0.7635,scaleY:0.7635,alpha:0.611},0).wait(1).to({scaleX:0.9429,scaleY:0.9429,x:188.65,y:201.5,alpha:0.7862},0).wait(1).to({regX:30.6,regY:30.6,scaleX:1.1617,scaleY:1.1617,x:188.8,y:201.65,alpha:1},0).wait(1).to({regX:30.3,regY:30.3,scaleX:1.1091,scaleY:1.1091,x:188.45,y:201.25},0).wait(1).to({scaleX:1.0692,scaleY:1.0692},0).wait(1).to({scaleX:1.0429,scaleY:1.0429},0).wait(1).to({regX:30.6,regY:30.5,scaleX:1.0287,scaleY:1.0287,x:188.85,y:201.6},0).wait(39));

	// round_04
	this.instance_4 = new lib.round_04();
	this.instance_4.parent = this;
	this.instance_4.setTransform(50.8,201.55,0.1365,0.1365,0,0,0,30.4,30.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).wait(1).to({regX:30.3,regY:30.3,scaleX:0.2025,scaleY:0.2025,y:201.5,alpha:0.0645},0).wait(1).to({scaleX:0.2813,scaleY:0.2813,x:50.85,alpha:0.1415},0).wait(1).to({scaleX:0.3744,scaleY:0.3744,x:50.9,alpha:0.2324},0).wait(1).to({scaleX:0.4836,scaleY:0.4836,x:50.95,alpha:0.3391},0).wait(1).to({scaleX:0.6114,scaleY:0.6114,x:51.1,alpha:0.464},0).wait(1).to({scaleX:0.7619,scaleY:0.7619,x:51.15,alpha:0.611},0).wait(1).to({scaleX:0.9413,scaleY:0.9413,x:51.25,y:201.45,alpha:0.7862},0).wait(1).to({regX:30.5,regY:30.6,scaleX:1.1601,scaleY:1.1601,x:51.55,y:201.65,alpha:1},0).wait(1).to({regX:30.3,regY:30.3,scaleX:1.1082,scaleY:1.1082,x:51.25,y:201.3},0).wait(1).to({scaleX:1.0687,scaleY:1.0687},0).wait(1).to({scaleX:1.0428,scaleY:1.0428,x:51.2},0).wait(1).to({regX:30.4,regY:30.5,scaleX:1.0288,scaleY:1.0288,x:51.45,y:201.6},0).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.2,139.6,207.5,97);


(lib.megafon_logo_animated = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer 2
	this.instance = new lib.megafon_face();
	this.instance.parent = this;
	this.instance.setTransform(-26.55,36.95,1,1,0,0,0,7.8,42.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(1).to({regX:7.7,regY:42.4,x:-14.75,y:36.85},0).wait(1).to({x:-6.45},0).wait(1).to({x:0.3},0).wait(1).to({x:6.1},0).wait(1).to({x:11.05},0).wait(1).to({x:15.35},0).wait(1).to({x:18.95},0).wait(1).to({x:21.9},0).wait(1).to({x:24.25},0).wait(1).to({x:26.15},0).wait(1).to({x:27.7},0).wait(1).to({x:28.95},0).wait(1).to({x:29.95},0).wait(1).to({x:30.75},0).wait(1).to({x:31.35},0).wait(1).to({x:31.8},0).wait(1).to({x:32.1},0).wait(1).to({x:32.25},0).wait(1).to({regX:7.8,regY:42.5,x:32.45,y:36.95},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.megafon_round();
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.6,35.9,1,1,0,0,0,35.6,35.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.3,-5.5,105.6,84.9);


(lib.hand_with_card_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.shadow_sihluette();
	this.instance.parent = this;
	this.instance.setTransform(100.75,224.65,1,1,0,0,0,75.8,175.3);
	this.instance.alpha = 0.2188;
	this.instance.filters = [new cjs.BlurFilter(23, 23, 1)];
	this.instance.cache(-2,-2,156,355);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_with_card_shadow, new cjs.Rectangle(13,37.4,180,379), null);


(lib.card_with_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzxPbIAA+0MAniAAAIAAe0g");
	mask.setTransform(119.35,76.65);

	// Layer_1
	this.instance = new lib.card();
	this.instance.parent = this;
	this.instance.setTransform(121.05,77,1,1,0,0,0,121.7,77);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.card_with_shadow, new cjs.Rectangle(-0.6,0,243.4,154.2), null);


(lib.card_movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.card_1();
	this.instance.parent = this;
	this.instance.setTransform(120.5,78,1,1,0,0,0,120.5,78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({alpha:0.6016},0).wait(4).to({alpha:1},0).wait(5).to({alpha:0.3984},0).wait(3).to({alpha:1},0).wait(45).to({alpha:0.6016},0).wait(3).to({alpha:1},0).wait(56).to({alpha:0.3984},0).wait(3).to({alpha:1},0).wait(4).to({alpha:0.6016},0).wait(2).to({alpha:1},0).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,241,155.9);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgDApQgRAAgLgMQgMgMgBgRQABgPAMgNQALgMARABIAHAAQARgBAMAMQAMANgBAPQABARgMAMQgMAMgRAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AgGBFQgdAAgUgTQgUgVAAgdQAAgbAUgVQAVgUAcAAIANAAQAdAAAUAUQAUAVABAbQgBAdgUAVQgUATgdAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AgJBjQgpAAgdgdQgdgdAAgpQAAgoAdgdQAegdAoAAIATAAQApAAAcAdQAeAdAAAoQAAAqgeAcQgcAdgpAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AgMCAQg1AAglgmQgmglAAg1QAAg0AmgmQAlglA1AAIAZAAQA1AAAlAlQAmAmAAA0QAAA2gmAkQglAmg1AAg");
	var mask_graphics_4 = new cjs.Graphics().p("AgPCeQhBgBgugtQgugvAAhBQAAhAAugvQAvgtBAAAIAfAAQBBAAAuAtQAuAvAABAQAABBguAvQguAthBABg");
	var mask_graphics_5 = new cjs.Graphics().p("AgSC6QhNABg3g3Qg2g2AAhOQAAhMA2g3QA4g2BMAAIAkAAQBOAAA3A2QA2A3AABMQAABOg2A2Qg2A3hPgBg");
	var mask_graphics_6 = new cjs.Graphics().p("AgUDYQhaAAg/hAQhAg+ABhaQgBhYBAhAQBAg/BZAAIAqAAQBZAAA/A/QBABAAABYQAABahAA+Qg/BAhZAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AgYD1QhlAAhIhIQhIhIAAhlQAAhkBIhJQBJhHBkAAIAxAAQBlAABHBHQBIBIAABlQAABmhIBHQhHBIhlAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AgTDLQhUAAg7g8Qg8g7AAhUQAAhTA8g8QA7g7BUAAIAnAAQBVAAA6A7QA8A8AABTQAABUg8A7Qg6A8hVAAg");
	var mask_graphics_13 = new cjs.Graphics().p("AgYDLQhUAAg8g8Qg7g7AAhUQAAhTA7g8QA9g7BTAAIAxAAQBVAAA7A7QA7A8AABTQAABUg7A7Qg7A8hVAAg");
	var mask_graphics_14 = new cjs.Graphics().p("AgnDMQhUAAg8g8Qg8g8AAhUQAAhTA8g8QA8g8BUAAIBPAAQBVAAA7A8QA8A7AABUQAABVg8A7Qg7A8hVAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AhBDNQhUAAg9g8Qg8g8AAhVQAAhUA8g8QA9g8BUAAICEAAQBUAAA8A8QA8A8AABUQAABVg8A8Qg7A8hVAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AhmDPQhVAAg9g9Qg9g8AAhWQAAhUA9g+QA9g8BVAAIDNAAQBWAAA8A8QA9A9AABVQAABWg9A8Qg8A9hWAAg");
	var mask_graphics_17 = new cjs.Graphics().p("AiVDRQhXAAg9g9Qg9g9gBhXQABhVA9g+QA+g9BWAAIErAAQBXAAA9A9QA9A9ABBWQgBBXg9A9Qg8A9hYAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AjMDUQhYAAg/g+Qg+g/AAhXQAAhXA+g/QBAg9BXAAIGZAAQBZAAA9A9QA/A+AABYQAABYg/A+Qg9A+hZAAg");
	var mask_graphics_19 = new cjs.Graphics().p("AkJDXQhZAAg/g/Qg/g/AAhZQAAhYA/g/QBAg/BYAAIITAAQBaAAA+A/QA/A/AABYQAABZg/A/Qg+A/haAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AlHDaQhaAAhAhAQhAhAAAhaQAAhZBAhBQBAg/BaAAIKPAAQBbAAA/A/QBABBAABZQAABbhAA/Qg/BAhbAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AmDDdQhcAAhBhBQhBhAAAhcQAAhaBBhCQBChABbAAIMIAAQBbAABBBAQBBBBAABbQAABchBBAQhABBhcAAg");
	var mask_graphics_22 = new cjs.Graphics().p("Am7DgQhdAAhBhCQhChCAAhcQAAhbBChDQBChBBcAAIN3AAQBdAABCBBQBBBCAABcQAABdhBBBQhBBCheAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AntDiQheAAhChCQhChCAAheQAAhcBChEQBDhCBdABIPbAAQBegBBCBCQBDBDAABdQAABehDBCQhCBCheAAg");
	var mask_graphics_24 = new cjs.Graphics().p("AoYDlQheAAhDhDQhDhDgBhfQABhdBDhEQBEhDBdAAIQxAAQBfAABDBDQBDBDgBBeQABBfhDBDQhDBDhfAAg");
	var mask_graphics_25 = new cjs.Graphics().p("Ao8DnQhfAAhEhEQhDhDAAhgQAAheBDhEQBFhEBeAAIR5AAQBgAABDBEQBDBDAABfQAABghDBDQhDBEhgAAg");
	var mask_graphics_26 = new cjs.Graphics().p("ApZDoQhgAAhEhEQhEhEAAhgQAAhfBEhEQBEhEBgAAISzAAQBgAABEBEQBEBEAABfQAABghEBEQhDBEhhAAg");
	var mask_graphics_27 = new cjs.Graphics().p("ApwDpQhgAAhEhFQhFhDAAhhQAAhfBFhFQBEhEBgAAIThAAQBgAABEBEQBFBEAABgQAABhhFBDQhDBFhhAAg");
	var mask_graphics_28 = new cjs.Graphics().p("AqBDqQhgAAhFhFQhFhEAAhhQAAhgBFhFQBFhEBgAAIUDAAQBhAABEBEQBFBFAABgQAABhhFBEQhEBFhhAAg");
	var mask_graphics_29 = new cjs.Graphics().p("AqMDqQhhAAhFhFQhFhDAAhiQAAhgBFhFQBGhEBgAAIUaAAQBgAABFBEQBFBEAABhQAABihFBDQhEBFhhAAg");
	var mask_graphics_30 = new cjs.Graphics().p("AqTDrQhhAAhFhFQhFhEAAhiQAAhgBFhGQBGhEBgAAIUnAAQBhAABFBEQBFBGAABgQAABihFBEQhEBFhiAAg");
	var mask_graphics_31 = new cjs.Graphics().p("AqVDrQhhAAhFhFQhFhEAAhiQAAhgBFhGQBGhEBgAAIUrAAQBhAABFBEQBFBGAABgQAABihFBEQhEBFhiAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:77.55,y:8.9}).wait(1).to({graphics:mask_graphics_1,x:77.55,y:8.9}).wait(1).to({graphics:mask_graphics_2,x:77.55,y:8.9}).wait(1).to({graphics:mask_graphics_3,x:77.55,y:8.9}).wait(1).to({graphics:mask_graphics_4,x:77.55,y:8.9}).wait(1).to({graphics:mask_graphics_5,x:77.55,y:8.9}).wait(1).to({graphics:mask_graphics_6,x:77.55,y:8.9}).wait(1).to({graphics:mask_graphics_7,x:77.55,y:8.9}).wait(5).to({graphics:mask_graphics_12,x:77.55,y:8.925}).wait(1).to({graphics:mask_graphics_13,x:77.55,y:8.925}).wait(1).to({graphics:mask_graphics_14,x:77.525,y:8.925}).wait(1).to({graphics:mask_graphics_15,x:77.5,y:8.925}).wait(1).to({graphics:mask_graphics_16,x:77.475,y:8.925}).wait(1).to({graphics:mask_graphics_17,x:77.45,y:8.925}).wait(1).to({graphics:mask_graphics_18,x:77.4,y:8.95}).wait(1).to({graphics:mask_graphics_19,x:77.325,y:8.925}).wait(1).to({graphics:mask_graphics_20,x:77.275,y:8.925}).wait(1).to({graphics:mask_graphics_21,x:77.225,y:8.925}).wait(1).to({graphics:mask_graphics_22,x:77.175,y:8.95}).wait(1).to({graphics:mask_graphics_23,x:77.15,y:8.95}).wait(1).to({graphics:mask_graphics_24,x:77.1,y:8.925}).wait(1).to({graphics:mask_graphics_25,x:77.075,y:8.95}).wait(1).to({graphics:mask_graphics_26,x:77.05,y:8.95}).wait(1).to({graphics:mask_graphics_27,x:77.05,y:8.95}).wait(1).to({graphics:mask_graphics_28,x:77.025,y:8.95}).wait(1).to({graphics:mask_graphics_29,x:77,y:8.95}).wait(1).to({graphics:mask_graphics_30,x:77,y:8.95}).wait(1).to({graphics:mask_graphics_31,x:77,y:8.95}).wait(1));

	// Layer_2
	this.instance = new lib.card_text("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(77.2,8.8,1.1251,1.1251,0,0,0,68,11.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32));

	// Layer_4
	this.instance_1 = new lib.round_04();
	this.instance_1.parent = this;
	this.instance_1.setTransform(77.1,8.85,0.1618,0.1618,0,0,0,30.3,30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:30.4,regY:30.1,scaleX:1.0046,scaleY:1.0046,x:77.05},7).to({regY:30.2,scaleX:0.8077,scaleY:0.8077},5).wait(1).to({regX:30.3,regY:30.3,x:77.45,y:8.9},0).wait(1).to({x:79.05},0).wait(1).to({x:81.85},0).wait(1).to({x:85.8},0).wait(1).to({x:90.9},0).wait(1).to({x:96.85},0).wait(1).to({x:103.35},0).wait(1).to({x:110.05},0).wait(1).to({x:116.5},0).wait(1).to({x:122.5},0).wait(1).to({x:127.85},0).wait(1).to({x:132.45},0).wait(1).to({x:136.35},0).wait(1).to({x:139.5},0).wait(1).to({x:141.95},0).wait(1).to({x:143.75},0).wait(1).to({x:145},0).wait(1).to({x:145.7},0).wait(1).to({regX:30.4,regY:30.2,x:146.05,y:8.85},0).wait(1));

	// Layer_3
	this.instance_2 = new lib.round_04();
	this.instance_2.parent = this;
	this.instance_2.setTransform(77.05,8.85,0.8077,0.8077,0,0,0,30.4,30.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).wait(1).to({regX:30.3,regY:30.3,x:76.4,y:8.9},0).wait(1).to({x:74.8},0).wait(1).to({x:72},0).wait(1).to({x:68.05},0).wait(1).to({x:62.95},0).wait(1).to({x:57},0).wait(1).to({x:50.5},0).wait(1).to({x:43.8},0).wait(1).to({x:37.35},0).wait(1).to({x:31.35},0).wait(1).to({x:26},0).wait(1).to({x:21.45},0).wait(1).to({x:17.55},0).wait(1).to({x:14.4},0).wait(1).to({x:11.95},0).wait(1).to({x:10.15},0).wait(1).to({x:8.9},0).wait(1).to({x:8.2},0).wait(1).to({regX:30.4,regY:30.2,x:8.05,y:8.85},0).wait(1));

	// Layer_5
	this.instance_3 = new lib.btn_plashka("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(77.05,9.05,0.0145,1,0,0,0,69,24.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).wait(1).to({scaleX:0.0219,x:77},0).wait(1).to({scaleX:0.0449},0).wait(1).to({scaleX:0.0847,x:77.05},0).wait(1).to({scaleX:0.1415,x:77},0).wait(1).to({scaleX:0.2139},0).wait(1).to({scaleX:0.299,x:77.05},0).wait(1).to({scaleX:0.392,x:77},0).wait(1).to({scaleX:0.4873,x:77.05},0).wait(1).to({scaleX:0.5798,x:77},0).wait(1).to({scaleX:0.6655,x:76.95},0).wait(1).to({scaleX:0.7419,x:77},0).wait(1).to({scaleX:0.8079},0).wait(1).to({scaleX:0.8631},0).wait(1).to({scaleX:0.9079},0).wait(1).to({scaleX:0.9429,x:76.95},0).wait(1).to({scaleX:0.9689},0).wait(1).to({scaleX:0.9866,x:77},0).wait(1).to({scaleX:0.9968},0).wait(1).to({scaleX:1,x:77.05},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-21.4,187,61);


(lib.Hand_without_card = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hand_01_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(81.75,139.6,1,1,27.9583,0,0,167.1,239.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	// Layer 1
	this.instance_1 = new lib.card_movie();
	this.instance_1.parent = this;
	this.instance_1.setTransform(287.55,70.1,0.751,0.751,0,0,0,120.5,78);
	this.instance_1.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({alpha:0.8008},0).wait(6).to({alpha:0.3984},0).wait(3).to({alpha:0.6016},0).wait(5).to({alpha:0.1992},0).wait(3).to({alpha:0.3008},0).to({_off:true},2).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.6,-65,498.6,421.2);


(lib.hand_with_phone_card = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ok();
	this.instance.parent = this;
	this.instance.setTransform(111.95,222.2,0.3878,0.3878,0,0,0,24.5,24.5);
	this.instance.alpha = 0.6016;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({regX:24.6,regY:24.6,scaleX:1.4888,scaleY:1.4888,x:112,y:222.35,alpha:1},3).to({regY:24.5,scaleX:1,scaleY:1,y:222.2},4).wait(1));

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArOTYQgMgIAAgZUAAAgAoAAvglUIADgKQAGgKATABQARABKlgBIKggBIAJAAQAKADABAOQABARgCJlIgSBuQgMCMAcCTIgGWJQAFAAgEALQgEALgTAAI1/AAIgDABQgEAAgEgDg");
	mask.setTransform(112.8893,159.5392);

	// Layer_3
	this.instance_1 = new lib.card_with_shadow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(114.55,142,0.7745,0.7745,0,0,0,121.4,78.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({alpha:0.8008},0).wait(3).to({alpha:1},0).wait(3).to({alpha:0.6016},0).wait(2).to({alpha:0.6992},0).wait(5).to({regX:121.3,regY:78.4,scaleX:0.5506,scaleY:0.551,x:114.5,y:124.2,alpha:1},6,cjs.Ease.quadInOut).wait(34));

	// Layer_4
	this.instance_2 = new lib.card_shadow_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(112.5,142.75,1.1231,1.3223,0,0,0,71.3,49.6);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({regY:49.4,scaleX:1.1507,scaleY:0.9823,x:113.55,y:129.3},0).wait(40));

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EAFdAtMIAAAAIAAAAIAAAAgEAEPAmQQhTnKgWhiQgUhcgehNIgghKQgHgQgIhCQgCgOghhjIgeheQABAAgUgYIgogsIgwgsQgcgaABgNQABgMgEgLQgDgJgCAAQgegQgXgWIhchXIhLhHQg2gzgJgHQgMgHiGilQiIimhLhiQg/hUgthSQglhEAFABIgbgIIgXgVIAAAAIAAAAIn0AAQgzACg1gZQhqgzAAiJQAAgdgEgYIgDgPQgJAIgOAGQgdAOgcgGQgWgDgXgJQgugRgHgcQgiiIgGggQgEgcAEgVQAGgdAWgiQA0hRADABQgRgHgSgPQglgegDgsQgEgtgPhQQgNg/gIgfQgHgXAJglQAKgmAXglQAUgiAngkQAggfAEAAIAAABIAAgBQgcgFgdgSQg7gjADg7QADg8AahGQAWg6AEABQAIglAQgqQAhhVAugYQAwgaAfgMQAXgKADABQACAAgCiDQgugXgxgeQhjg9gTgfQgYgnASg7QASg9AwgXQAqgUBAgIQAwgHAJACQABABAIlFQAHlEABgBQgDg0AYg1QAwhoCNAAIKhgBIH5gCIAbADQAfAFAaARQBTA1ADCJQACCBgBCTIgBBvQAEgBAHAHQAJAKAAAWIgBByQAABZABgBIAlgCQAlAAAMALQAQAPAkA8QAlA/AOAoQAMAiAHAxIAGAqQAFABATAOQAaASAMATQAMATApAuIA0A6QAXAaAWAjQAfAtgBARQAAATAEAVQAFAWAJAPQAGAKAsCDQAwCOAOAgIBZDCQBICeAOAmQATAxANCDQAOCDgGBHQgFBFAKBIQAKBDASAeQAWAlAgBPQAlBdABAlQACAvAcBbQAfBkAiA0QAxBKBhC3QBwDUAjBjQAcBPBfDvQBcDmAMAlQAbBRCrITQAWBEDkISI42AeQACAAhQm8gA6dnsIgRATIAgAAQABAAgBgiIgPAPgAhE16QgJASgBAAIgBAlQgBABANAHQAOAHAHAAQARAAgGgUQgDgKgPgVQgNgTgCAAIAAAAg");
	mask_1.setTransform(200.4138,294.5);

	// Layer_1
	this.instance_3 = new lib.hand_phone();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,6.8,1,1,-1.0177);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(57));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.6,5.3,387.7,578.4000000000001);


(lib.Hand_with_card = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hand_01_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(81.75,139.6,1,1,27.9583,0,0,167.1,239.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.card_movie();
	this.instance_1.parent = this;
	this.instance_1.setTransform(287.55,70.1,0.751,0.751,0,0,0,120.5,78);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Hand_with_card, new cjs.Rectangle(-120.6,-65,498.6,421.2), null);


(lib.final_block = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_178 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(178).call(this.frame_178).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,185,86,0)").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,185,86,0.071)").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_1.setTransform(120,200);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,185,86,0.141)").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_2.setTransform(120,200);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,185,86,0.216)").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_3.setTransform(120,200);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,185,86,0.286)").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_4.setTransform(120,200);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,185,86,0.357)").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_5.setTransform(120,200);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,185,86,0.427)").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_6.setTransform(120,200);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,185,86,0.502)").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_7.setTransform(120,200);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,185,86,0.573)").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_8.setTransform(120,200);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,185,86,0.643)").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_9.setTransform(120,200);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,185,86,0.714)").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_10.setTransform(120,200);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,185,86,0.784)").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_11.setTransform(120,200);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,185,86,0.859)").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_12.setTransform(120,200);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,185,86,0.929)").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_13.setTransform(120,200);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00B956").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_14.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},164).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

	// Layer 15
	this.instance = new lib.button("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(121.85,264.05,0.9221,0.9221,0,0,0,77,24.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({_off:false},0).wait(33).to({startPosition:31},0).to({regX:77.1,regY:24.7,scaleX:0.847,scaleY:0.847,x:121.95,y:264.1},3).to({regX:77,regY:24.6,scaleX:0.9221,scaleY:0.9221,x:121.85,y:264.05},2).wait(6).to({startPosition:31},0).to({regX:77.2,regY:24.7,scaleX:0.7826,scaleY:0.7826,x:122,y:264.15},3).to({regX:77,regY:24.6,scaleX:0.9221,scaleY:0.9221,x:121.85,y:264.05},2).wait(77));

	// Layer 16
	this.instance_1 = new lib.disclamer();
	this.instance_1.parent = this;
	this.instance_1.setTransform(121.95,343.65,1,1,0,0,0,102.5,39.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).to({alpha:1},11).wait(134));

	// Layer 12
	this.instance_2 = new lib.textblock_x();
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.45,103.35);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({alpha:1},11).wait(134));

	// Layer 14
	this.instance_3 = new lib.podstrochnik();
	this.instance_3.parent = this;
	this.instance_3.setTransform(141.85,78.05,0.9224,0.9224,0,0,0,86.4,15.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({_off:false},0).wait(1).to({regX:86.5,regY:14.5,x:141.95,y:76.9,alpha:0.2346},0).wait(1).to({alpha:0.4362},0).wait(1).to({alpha:0.6049},0).wait(1).to({alpha:0.7416},0).wait(1).to({alpha:0.8476},0).wait(1).to({alpha:0.9247},0).wait(1).to({alpha:0.9748},0).wait(1).to({regX:86.4,regY:15.8,x:141.85,y:78.05,alpha:1},0).wait(137));

	// Layer 10
	this.instance_4 = new lib.megafon();
	this.instance_4.parent = this;
	this.instance_4.setTransform(142.6,73.7,0.9993,0.9993,0,0,0,77.3,10.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:false},0).wait(1).to({regX:77.1,scaleX:0.9911,scaleY:0.9911,x:142.1,y:69.55,alpha:0.1975},0).wait(1).to({scaleX:0.9841,scaleY:0.9841,x:141.9,y:66.1,alpha:0.3663},0).wait(1).to({scaleX:0.9781,scaleY:0.9781,x:141.75,y:63.05,alpha:0.5104},0).wait(1).to({scaleX:0.9731,scaleY:0.9731,x:141.6,y:60.55,alpha:0.6324},0).wait(1).to({scaleX:0.9688,scaleY:0.9688,x:141.5,y:58.4,alpha:0.7346},0).wait(1).to({scaleX:0.9653,scaleY:0.9653,x:141.4,y:56.7,alpha:0.8184},0).wait(1).to({scaleX:0.9626,scaleY:0.9626,x:141.3,y:55.3,alpha:0.8853},0).wait(1).to({scaleX:0.9605,scaleY:0.9605,x:141.25,y:54.25,alpha:0.9362},0).wait(1).to({scaleX:0.959,scaleY:0.959,x:141.2,y:53.5,alpha:0.9719},0).wait(1).to({scaleX:0.9581,scaleY:0.9581,x:141.15,y:53.05,alpha:0.993},0).wait(1).to({regX:77.3,scaleX:0.9578,scaleY:0.9578,x:141.4,y:52.95,alpha:1},0).wait(145));

	// Layer 8
	this.instance_5 = new lib.round_02();
	this.instance_5.parent = this;
	this.instance_5.setTransform(185.5,196.05,0.9813,0.9813,0,0,0,30.4,30.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).wait(5).to({regX:30.3,regY:30.3,scaleX:0.7118,scaleY:0.7118,x:146.25,y:155.9,alpha:0.2957},0).wait(1).to({scaleX:0.5431,scaleY:0.5431,x:121.8,y:130.85,alpha:0.4806},0).wait(1).to({scaleX:0.4249,scaleY:0.4249,x:104.65,y:113.3,alpha:0.6103},0).wait(1).to({scaleX:0.3378,scaleY:0.3378,x:92.05,y:100.4,alpha:0.7059},0).wait(1).to({scaleX:0.2718,scaleY:0.2718,x:82.5,y:90.6,alpha:0.7782},0).wait(1).to({scaleX:0.2211,scaleY:0.2211,x:75.15,y:83.05,alpha:0.8338},0).wait(1).to({scaleX:0.182,scaleY:0.182,x:69.45,y:77.25,alpha:0.8768},0).wait(1).to({scaleX:0.1517,scaleY:0.1517,x:65.05,y:72.75,alpha:0.91},0).wait(1).to({scaleX:0.1283,scaleY:0.1283,x:61.7,y:69.3,alpha:0.9356},0).wait(1).to({scaleX:0.1104,scaleY:0.1104,x:59.1,y:66.65,alpha:0.9552},0).wait(1).to({scaleX:0.0969,scaleY:0.0969,x:57.15,y:64.65,alpha:0.9701},0).wait(1).to({scaleX:0.0867,scaleY:0.0867,x:55.65,y:63.15,alpha:0.9812},0).wait(1).to({scaleX:0.0792,scaleY:0.0792,x:54.55,y:62,alpha:0.9895},0).wait(1).to({scaleX:0.0737,scaleY:0.0737,x:53.75,y:61.2,alpha:0.9956},0).wait(1).to({regX:33.8,regY:32.3,scaleX:0.0696,scaleY:0.0696,x:53.2,y:60.6,alpha:1},0).wait(42).to({regX:34.1,scaleX:0.0851,scaleY:0.0851},4).to({regX:33.8,scaleX:0.0696,scaleY:0.0696},6).wait(98));

	// Layer 7
	this.instance_6 = new lib.round_04();
	this.instance_6.parent = this;
	this.instance_6.setTransform(185.5,196.05,0.9813,0.9813,0,0,0,30.4,30.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).wait(5).to({regX:30.3,regY:30.3,scaleX:0.7112,scaleY:0.7117,x:146.25,y:155.85},0).wait(1).to({scaleX:0.5423,scaleY:0.5431,x:121.8,y:130.8},0).wait(1).to({scaleX:0.4238,scaleY:0.4249,x:104.65,y:113.25},0).wait(1).to({scaleX:0.3365,scaleY:0.3377,x:92,y:100.35},0).wait(1).to({scaleX:0.2704,scaleY:0.2717,x:82.4,y:90.5},0).wait(1).to({scaleX:0.2196,scaleY:0.221,x:75.05,y:83},0).wait(1).to({scaleX:0.1804,scaleY:0.1819,x:69.35,y:77.15},0).wait(1).to({scaleX:0.1501,scaleY:0.1516,x:65,y:72.65},0).wait(1).to({scaleX:0.1267,scaleY:0.1282,x:61.6,y:69.2},0).wait(1).to({scaleX:0.1087,scaleY:0.1103,x:59,y:66.55},0).wait(1).to({scaleX:0.0951,scaleY:0.0968,x:57.05,y:64.55},0).wait(1).to({scaleX:0.0849,scaleY:0.0866,x:55.5,y:63},0).wait(1).to({scaleX:0.0774,scaleY:0.0791,x:54.45,y:61.9},0).wait(1).to({scaleX:0.0719,scaleY:0.0736,x:53.7,y:61.1},0).wait(1).to({regX:31.7,regY:30.9,scaleX:0.0678,scaleY:0.0695,x:53.1,y:60.5},0).to({_off:true},1).wait(149));

	// Layer 6
	this.instance_7 = new lib.round_02();
	this.instance_7.parent = this;
	this.instance_7.setTransform(120.05,196.05,0.9813,0.9813,0,0,0,30.4,30.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).wait(3).to({regX:30.3,regY:30.3,scaleX:0.7366,scaleY:0.7366,x:100.65,y:159.55},0).wait(1).to({scaleX:0.5772,scaleY:0.5772,x:88.2,y:135.95},0).wait(1).to({scaleX:0.4624,scaleY:0.4624,x:79.15,y:118.85},0).wait(1).to({scaleX:0.3757,scaleY:0.3757,x:72.35,y:106},0).wait(1).to({scaleX:0.3084,scaleY:0.3084,x:67.1,y:96.05},0).wait(1).to({scaleX:0.2555,scaleY:0.2555,x:62.95,y:88.15},0).wait(1).to({scaleX:0.2135,scaleY:0.2135,x:59.6,y:81.9},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:57,y:76.95},0).wait(1).to({scaleX:0.1533,scaleY:0.1533,x:54.9,y:73},0).wait(1).to({scaleX:0.132,scaleY:0.132,x:53.2,y:69.85},0).wait(1).to({scaleX:0.1152,scaleY:0.1152,x:51.9,y:67.35},0).wait(1).to({scaleX:0.102,scaleY:0.102,x:50.85,y:65.4},0).wait(1).to({scaleX:0.0917,scaleY:0.0917,x:50.1,y:63.85},0).wait(1).to({scaleX:0.0838,scaleY:0.0838,x:49.45,y:62.7},0).wait(1).to({scaleX:0.0777,scaleY:0.0777,x:48.95,y:61.75},0).wait(1).to({scaleX:0.0731,scaleY:0.0731,x:48.6,y:61.05},0).wait(1).to({regX:33,regY:32.3,scaleX:0.0696,scaleY:0.0696,x:48.35,y:60.6},0).wait(36).to({regX:33.5,regY:32.4,scaleX:0.0866,scaleY:0.0866},4).to({regX:33,regY:32.3,scaleX:0.0696,scaleY:0.0696},6).wait(104));

	// Layer 5
	this.instance_8 = new lib.round_01();
	this.instance_8.parent = this;
	this.instance_8.setTransform(54.55,196.05,0.9813,0.9813,0,0,0,30.4,30.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10).to({_off:false},0).wait(1).to({regX:30.3,regY:30.3,scaleX:0.7572,scaleY:0.7572,x:51.7,y:162.6},0).wait(1).to({scaleX:0.6062,scaleY:0.6062,x:49.85,y:140.15},0).wait(1).to({scaleX:0.495,scaleY:0.495,x:48.5,y:123.65},0).wait(1).to({scaleX:0.4094,scaleY:0.4094,x:47.45,y:110.9},0).wait(1).to({scaleX:0.3417,scaleY:0.3417,x:46.65,y:100.85},0).wait(1).to({scaleX:0.2874,scaleY:0.2874,x:45.95,y:92.8},0).wait(1).to({scaleX:0.2435,scaleY:0.2435,x:45.45,y:86.3},0).wait(1).to({scaleX:0.2076,scaleY:0.2076,x:45,y:80.95},0).wait(1).to({scaleX:0.1784,scaleY:0.1784,x:44.65,y:76.6},0).wait(1).to({scaleX:0.1545,scaleY:0.1545,x:44.35,y:73.05},0).wait(1).to({scaleX:0.135,scaleY:0.135,x:44.15,y:70.15},0).wait(1).to({scaleX:0.1192,scaleY:0.1192,x:43.9,y:67.8},0).wait(1).to({scaleX:0.1065,scaleY:0.1065,x:43.8,y:65.95},0).wait(1).to({scaleX:0.0962,scaleY:0.0962,x:43.65,y:64.35},0).wait(1).to({scaleX:0.0881,scaleY:0.0881,x:43.55,y:63.15},0).wait(1).to({scaleX:0.0816,scaleY:0.0816,x:43.45,y:62.2},0).wait(1).to({scaleX:0.0766,scaleY:0.0766,x:43.4,y:61.45},0).wait(1).to({scaleX:0.0727,scaleY:0.0727,x:43.35,y:60.9},0).wait(1).to({regX:30.2,regY:30.2,scaleX:0.0696,scaleY:0.0696,y:60.45},0).wait(30).to({regX:31.7,regY:32.4,x:43.45,y:60.6},0).to({regX:31.8,scaleX:0.0865,scaleY:0.0865},4).to({regX:31.7,scaleX:0.0696,scaleY:0.0696},6).wait(110));

	// Layer 4
	this.instance_9 = new lib.megafon_logo_animated();
	this.instance_9.parent = this;
	this.instance_9.setTransform(119.6,152.95,8.0364,8.0364,0,0,0,35.6,35.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({_off:false},0).wait(1).to({regX:18.5,regY:36.9,scaleX:6.8161,scaleY:6.8161,x:-9.5,y:146.45},0).wait(1).to({scaleX:5.7344,scaleY:5.7344,x:-2.1,y:130.75},0).wait(1).to({scaleX:4.7904,scaleY:4.7904,x:4.25,y:117},0).wait(1).to({scaleX:3.9788,scaleY:3.9788,x:9.8,y:105.2},0).wait(1).to({scaleX:3.2907,scaleY:3.2907,x:14.5,y:95.25},0).wait(1).to({scaleX:2.715,scaleY:2.715,x:18.45,y:86.9},0).wait(1).to({scaleX:2.239,scaleY:2.239,x:21.65,y:79.9},0).wait(1).to({scaleX:1.8497,scaleY:1.8497,x:24.3,y:74.25},0).wait(1).to({scaleX:1.5345,scaleY:1.5345,x:26.45,y:69.65},0).wait(1).to({scaleX:1.2817,scaleY:1.2817,x:28.1,y:66},0).wait(1).to({scaleX:1.0807,scaleY:1.0807,x:29.5,y:63.1},0).wait(1).to({scaleX:0.9223,scaleY:0.9223,x:30.55,y:60.75},0).wait(1).to({scaleX:0.7986,scaleY:0.7986,x:31.4,y:58.95},0).wait(1).to({scaleX:0.7027,scaleY:0.7027,x:32.05,y:57.6},0).wait(1).to({scaleX:0.629,scaleY:0.629,x:32.55,y:56.5},0).wait(1).to({scaleX:0.5727,scaleY:0.5727,x:32.95,y:55.7},0).wait(1).to({scaleX:0.5297,scaleY:0.5297,x:33.25,y:55.05},0).wait(1).to({scaleX:0.4968,scaleY:0.4968,x:33.45,y:54.6},0).wait(1).to({regX:36.1,regY:36.2,scaleX:0.4712,scaleY:0.4712,x:41.7,y:53.55},0).wait(150));

	// Layer 13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgqGBJzQpfpfkTrpQjopuAArPQAA4qRaxbQRcxaYqAAQYpAARcRaQRcRbAAYqQAALPjoJwQkVLnpfJfQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_1 = new cjs.Graphics().p("EgqGBGBQpfpgkTroQjopuAArPQAA4rRaxbQRcxZYqAAQYpAARcRZQRcRbAAYrQAALPjoJwQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_2 = new cjs.Graphics().p("EgqGBCPQpfpgkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJxQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_3 = new cjs.Graphics().p("EgqGA+dQpfpgkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJxQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_4 = new cjs.Graphics().p("EgqGA6qQpfpfkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJwQkVLnpfJfQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_5 = new cjs.Graphics().p("EgqGA24QpfpfkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJwQkVLnpfJfQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_6 = new cjs.Graphics().p("EgqGAzGQpfpgkTroQjopuAArPQAA4qRaxcQRcxZYqAAQYpAARcRZQRcRcAAYqQAALPjoJwQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_7 = new cjs.Graphics().p("EgqGAvUQpfpgkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJxQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_8 = new cjs.Graphics().p("EgqGAriQpfpgkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJxQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_9 = new cjs.Graphics().p("EgqGAqFQpfpgkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJxQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:120.0174,y:583.9174}).wait(1).to({graphics:mask_graphics_1,x:120.0174,y:559.6979}).wait(1).to({graphics:mask_graphics_2,x:120.0174,y:535.4785}).wait(1).to({graphics:mask_graphics_3,x:120.0174,y:511.259}).wait(1).to({graphics:mask_graphics_4,x:120.0174,y:487.0396}).wait(1).to({graphics:mask_graphics_5,x:120.0174,y:462.8201}).wait(1).to({graphics:mask_graphics_6,x:120.0174,y:438.6007}).wait(1).to({graphics:mask_graphics_7,x:120.0174,y:414.3813}).wait(1).to({graphics:mask_graphics_8,x:120.0174,y:390.1618}).wait(1).to({graphics:mask_graphics_9,x:120.0174,y:351.0174}).wait(1).to({graphics:null,x:0,y:0}).wait(169));

	// Layer 11
	this.instance_10 = new lib.round_04();
	this.instance_10.parent = this;
	this.instance_10.setTransform(185.55,195.9,0.9776,0.9776,0,0,0,30.4,30.4);

	this.instance_11 = new lib.round_02();
	this.instance_11.parent = this;
	this.instance_11.setTransform(120.1,195.9,0.9776,0.9776,0,0,0,30.4,30.4);

	this.instance_12 = new lib.round_01();
	this.instance_12.parent = this;
	this.instance_12.setTransform(54.6,195.9,0.9776,0.9776,0,0,0,30.4,30.4);

	var maskedShapeInstanceList = [this.instance_10,this.instance_11,this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).to({state:[]},10).wait(169));

	// Layer 2
	this.instance_13 = new lib.round();
	this.instance_13.parent = this;
	this.instance_13.setTransform(120,786.95,4.8211,4.8211,0,0,0,79,79);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({y:351},9).to({_off:true},1).wait(169));

	// Layer 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,185,86,0)").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_15.setTransform(120,200);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00B956").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_16.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15}]}).to({state:[{t:this.shape_16}]},9).wait(170));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260.8,-132.3,761.7,1300.2);


(lib.all_movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_25
	this.instance = new lib.final_block("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(120.05,205,1.05,1.05,0,0,0,120,200);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(494).to({_off:false},0).wait(10).to({startPosition:10},0).to({scaleX:1,scaleY:1,y:200,startPosition:20},10,cjs.Ease.quadInOut).wait(159));

	// Layer_2
	this.instance_1 = new lib.megafon_horiz_logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(99.8,370.15,1,1,0,0,0,79.2,10.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},12).wait(426).to({alpha:0},11).to({_off:true},1).wait(223));

	// Layer_24
	this.instance_2 = new lib.supersign_repstay("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(120.1,240.05,1.7515,1.7515,0,0,0,120,201.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(443).to({_off:false},0).to({scaleX:1,scaleY:1,x:120.05,y:200,alpha:1,mode:"synched",loop:false},20,cjs.Ease.cubicInOut).to({_off:true},37).wait(173));

	// Layer_3
	this.instance_3 = new lib.textblock_xкопия();
	this.instance_3.parent = this;
	this.instance_3.setTransform(353.05,29.1,1,1,0,0,0,63.6,23.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(348).to({_off:false},0).wait(1).to({regX:95,regY:58.4,scaleX:1.0017,x:379.55,y:64.4,alpha:0.0184},0).wait(1).to({scaleX:1.0044,x:372.15,alpha:0.0463},0).wait(1).to({scaleX:1.008,x:361.95,alpha:0.0848},0).wait(1).to({scaleX:1.0127,x:348.7,alpha:0.1347},0).wait(1).to({scaleX:1.0186,x:332.2,alpha:0.1968},0).wait(1).to({scaleX:1.0257,x:312.25,alpha:0.2722},0).wait(1).to({scaleX:1.0341,x:288.65,alpha:0.3614},0).wait(1).to({scaleX:1.0439,x:261.25,alpha:0.4646},0).wait(1).to({scaleX:1.0549,x:230.2,alpha:0.5816},0).wait(1).to({scaleX:1.0672,x:195.85,alpha:0.7113},0).wait(1).to({scaleX:1.0804,x:158.6,alpha:0.8517},0).wait(1).to({regX:63.6,regY:23.1,scaleX:1.0944,x:84.9,y:29.1,alpha:1},0).wait(1).to({scaleX:0.9433,x:75.6},0).wait(1).to({regX:95,regY:58.4,scaleX:0.9643,x:107.1,y:64.4},0).wait(1).to({scaleX:0.9797,x:108.5},0).wait(1).to({scaleX:0.9904,x:109.5},0).wait(1).to({scaleX:0.9971,x:110.1},0).wait(1).to({regX:63.6,regY:23.1,scaleX:1,x:79.05,y:29.1},0).wait(55).to({regX:95,regY:58.4,x:108.65,y:64.4,alpha:0.9914},0).wait(1).to({x:104.9,alpha:0.9736},0).wait(1).to({x:99.1,alpha:0.9457},0).wait(1).to({x:90.95,alpha:0.9066},0).wait(1).to({x:80.2,alpha:0.8552},0).wait(1).to({x:66.6,alpha:0.7901},0).wait(1).to({x:49.8,alpha:0.7096},0).wait(1).to({x:29.35,alpha:0.6119},0).wait(1).to({x:4.9,alpha:0.4948},0).wait(1).to({x:-24.2,alpha:0.3557},0).wait(1).to({x:-58.45,alpha:0.1918},0).wait(1).to({regX:63.6,regY:23.1,x:-129.95,y:29.1,alpha:0},0).to({_off:true},1).wait(240));

	// Layer_18
	this.instance_4 = new lib.textblock_04();
	this.instance_4.parent = this;
	this.instance_4.setTransform(353.05,29.1,1,1,0,0,0,63.6,23.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(238).to({_off:false},0).wait(1).to({regX:102.8,regY:34.3,scaleX:1.0017,x:387.4,y:40.3,alpha:0.0184},0).wait(1).to({scaleX:1.0044,x:380,alpha:0.0463},0).wait(1).to({scaleX:1.008,x:369.8,alpha:0.0848},0).wait(1).to({scaleX:1.0127,x:356.6,alpha:0.1347},0).wait(1).to({scaleX:1.0186,x:340.15,alpha:0.1968},0).wait(1).to({scaleX:1.0257,x:320.25,alpha:0.2722},0).wait(1).to({scaleX:1.0341,x:296.7,alpha:0.3614},0).wait(1).to({scaleX:1.0439,x:269.4,alpha:0.4646},0).wait(1).to({scaleX:1.0549,x:238.45,alpha:0.5816},0).wait(1).to({scaleX:1.0672,x:204.15,alpha:0.7113},0).wait(1).to({scaleX:1.0804,x:167,alpha:0.8517},0).wait(1).to({regX:63.6,regY:23.1,scaleX:1.0944,x:84.9,y:29.1,alpha:1},0).wait(1).to({scaleX:0.9433,x:75.6},0).wait(1).to({regX:102.8,regY:34.3,scaleX:0.9643,x:114.65,y:40.3},0).wait(1).to({scaleX:0.9797,x:116.15},0).wait(1).to({scaleX:0.9904,x:117.2},0).wait(1).to({scaleX:0.9971,x:117.9},0).wait(1).to({regX:63.6,regY:23.1,scaleX:1,x:79.05,y:29.1},0).wait(54).to({regX:102.8,regY:34.3,x:116.45,y:40.3,alpha:0.9914},0).wait(1).to({x:112.7,alpha:0.9736},0).wait(1).to({x:106.9,alpha:0.9457},0).wait(1).to({x:98.75,alpha:0.9066},0).wait(1).to({x:88,alpha:0.8552},0).wait(1).to({x:74.4,alpha:0.7901},0).wait(1).to({x:57.6,alpha:0.7096},0).wait(1).to({x:37.15,alpha:0.6119},0).wait(1).to({x:12.7,alpha:0.4948},0).wait(1).to({x:-16.4,alpha:0.3557},0).wait(1).to({x:-50.65,alpha:0.1918},0).wait(1).to({regX:63.6,regY:23.1,x:-129.95,y:29.1,alpha:0},0).to({_off:true},1).wait(351));

	// Layer_17
	this.instance_5 = new lib.textblock_03();
	this.instance_5.parent = this;
	this.instance_5.setTransform(353.05,29.1,1,1,0,0,0,63.6,23.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(152).to({_off:false},0).wait(1).to({regX:85.2,regY:34.1,scaleX:1.0017,x:369.75,y:40.1,alpha:0.0184},0).wait(1).to({scaleX:1.0044,x:362.3,alpha:0.0463},0).wait(1).to({scaleX:1.008,x:352.1,alpha:0.0848},0).wait(1).to({scaleX:1.0127,x:338.8,alpha:0.1347},0).wait(1).to({scaleX:1.0186,x:322.25,alpha:0.1968},0).wait(1).to({scaleX:1.0257,x:302.2,alpha:0.2722},0).wait(1).to({scaleX:1.0341,x:278.5,alpha:0.3614},0).wait(1).to({scaleX:1.0439,x:251.05,alpha:0.4646},0).wait(1).to({scaleX:1.0549,x:219.9,alpha:0.5816},0).wait(1).to({scaleX:1.0672,x:185.35,alpha:0.7113},0).wait(1).to({scaleX:1.0804,x:148,alpha:0.8517},0).wait(1).to({regX:63.6,regY:23.1,scaleX:1.0944,x:84.9,y:29.1,alpha:1},0).wait(1).to({scaleX:0.9433,x:75.6},0).wait(1).to({regX:85.2,regY:34.1,scaleX:0.9643,x:97.65,y:40.1},0).wait(1).to({scaleX:0.9797,x:98.9},0).wait(1).to({scaleX:0.9904,x:99.8},0).wait(1).to({scaleX:0.9971,x:100.35},0).wait(1).to({regX:63.6,regY:23.1,scaleX:1,x:79.05,y:29.1},0).wait(62).to({regX:85.2,regY:34.1,x:98.85,y:40.1,alpha:0.9914},0).wait(1).to({x:95.1,alpha:0.9736},0).wait(1).to({x:89.3,alpha:0.9457},0).wait(1).to({x:81.15,alpha:0.9066},0).wait(1).to({x:70.4,alpha:0.8552},0).wait(1).to({x:56.8,alpha:0.7901},0).wait(1).to({x:40,alpha:0.7096},0).wait(1).to({x:19.55,alpha:0.6119},0).wait(1).to({x:-4.9,alpha:0.4948},0).wait(1).to({x:-34,alpha:0.3557},0).wait(1).to({x:-68.25,alpha:0.1918},0).wait(1).to({regX:63.6,regY:23.1,x:-129.95,y:29.1,alpha:0},0).to({_off:true},1).wait(429));

	// Layer_16
	this.instance_6 = new lib.textblock_02();
	this.instance_6.parent = this;
	this.instance_6.setTransform(353.05,29.1,1,1,0,0,0,63.6,23.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(87).to({_off:false},0).wait(1).to({regX:102.9,regY:55.6,scaleX:1.0017,x:387.5,y:61.6,alpha:0.0184},0).wait(1).to({scaleX:1.0044,x:380.1,alpha:0.0463},0).wait(1).to({scaleX:1.008,x:369.9,alpha:0.0848},0).wait(1).to({scaleX:1.0127,x:356.7,alpha:0.1347},0).wait(1).to({scaleX:1.0186,x:340.25,alpha:0.1968},0).wait(1).to({scaleX:1.0257,x:320.35,alpha:0.2722},0).wait(1).to({scaleX:1.0341,x:296.8,alpha:0.3614},0).wait(1).to({scaleX:1.0439,x:269.5,alpha:0.4646},0).wait(1).to({scaleX:1.0549,x:238.55,alpha:0.5816},0).wait(1).to({scaleX:1.0672,x:204.25,alpha:0.7113},0).wait(1).to({scaleX:1.0804,x:167.1,alpha:0.8517},0).wait(1).to({regX:63.6,regY:23.1,scaleX:1.0944,x:84.9,y:29.1,alpha:1},0).wait(1).to({scaleX:0.9433,x:75.6},0).wait(1).to({regX:102.9,regY:55.6,scaleX:0.9643,x:114.75,y:61.6},0).wait(1).to({scaleX:0.9797,x:116.25},0).wait(1).to({scaleX:0.9904,x:117.3},0).wait(1).to({scaleX:0.9971,x:118},0).wait(1).to({regX:63.6,regY:23.1,scaleX:1,x:79.05,y:29.1},0).wait(40).to({regX:102.9,regY:55.6,x:116.55,y:61.6,alpha:0.9914},0).wait(1).to({x:112.8,alpha:0.9736},0).wait(1).to({x:107,alpha:0.9457},0).wait(1).to({x:98.85,alpha:0.9066},0).wait(1).to({x:88.1,alpha:0.8552},0).wait(1).to({x:74.5,alpha:0.7901},0).wait(1).to({x:57.7,alpha:0.7096},0).wait(1).to({x:37.25,alpha:0.6119},0).wait(1).to({x:12.8,alpha:0.4948},0).wait(1).to({x:-16.3,alpha:0.3557},0).wait(1).to({x:-50.55,alpha:0.1918},0).wait(1).to({regX:63.6,regY:23.1,x:-129.95,y:29.1,alpha:0},0).to({_off:true},1).wait(516));

	// Layer_15
	this.instance_7 = new lib.textblock_01();
	this.instance_7.parent = this;
	this.instance_7.setTransform(353.05,29.1,1,1,0,0,0,63.6,23.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(22).to({_off:false},0).wait(1).to({regX:99.4,regY:45.3,scaleX:1.0017,x:383.95,y:51.3,alpha:0.0184},0).wait(1).to({scaleX:1.0044,x:376.6,alpha:0.0463},0).wait(1).to({scaleX:1.008,x:366.4,alpha:0.0848},0).wait(1).to({scaleX:1.0127,x:353.15,alpha:0.1347},0).wait(1).to({scaleX:1.0186,x:336.7,alpha:0.1968},0).wait(1).to({scaleX:1.0257,x:316.75,alpha:0.2722},0).wait(1).to({scaleX:1.0341,x:293.2,alpha:0.3614},0).wait(1).to({scaleX:1.0439,x:265.85,alpha:0.4646},0).wait(1).to({scaleX:1.0549,x:234.85,alpha:0.5816},0).wait(1).to({scaleX:1.0672,x:200.55,alpha:0.7113},0).wait(1).to({scaleX:1.0804,x:163.35,alpha:0.8517},0).wait(1).to({regX:63.6,regY:23.1,scaleX:1.0944,x:84.9,y:29.1,alpha:1},0).wait(1).to({scaleX:0.9433,x:75.6},0).wait(1).to({regX:99.4,regY:45.3,scaleX:0.9643,x:111.35,y:51.3},0).wait(1).to({scaleX:0.9797,x:112.85},0).wait(1).to({scaleX:0.9904,x:113.85},0).wait(1).to({scaleX:0.9971,x:114.5},0).wait(1).to({regX:63.6,regY:23.1,scaleX:1,x:79.05,y:29.1},0).wait(40).to({regX:99.4,regY:45.3,x:113.05,y:51.3,alpha:0.9914},0).wait(1).to({x:109.3,alpha:0.9736},0).wait(1).to({x:103.5,alpha:0.9457},0).wait(1).to({x:95.35,alpha:0.9066},0).wait(1).to({x:84.6,alpha:0.8552},0).wait(1).to({x:71,alpha:0.7901},0).wait(1).to({x:54.2,alpha:0.7096},0).wait(1).to({x:33.75,alpha:0.6119},0).wait(1).to({x:9.3,alpha:0.4948},0).wait(1).to({x:-19.8,alpha:0.3557},0).wait(1).to({x:-54.05,alpha:0.1918},0).wait(1).to({regX:63.6,regY:23.1,x:-129.95,y:29.1,alpha:0},0).to({_off:true},1).wait(581));

	// Layer_13
	this.instance_8 = new lib.Hand_with_card();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-181.3,171.35,1.0398,1.0398,-17.1674,0,0,122.5,238.8);
	this.instance_8._off = true;

	this.instance_9 = new lib.Hand_without_card("synched",0,false);
	this.instance_9.parent = this;
	this.instance_9.setTransform(18.8,403.6,0.7965,0.7965,-11.1515,0,0,122.5,239.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).to({regX:122.7,scaleX:0.7727,scaleY:0.7727,rotation:-8.4578,x:38.75,y:333.6},25,cjs.Ease.cubicInOut).wait(56).to({regX:122.5,scaleX:0.9653,scaleY:0.9653,rotation:-14.7673,x:-168.2,y:402.1},29,cjs.Ease.cubicInOut).to({_off:true,regY:239.1,scaleX:0.7965,scaleY:0.7965,rotation:-11.1515,x:18.8,y:403.6,mode:"synched",startPosition:0,loop:false},29,cjs.Ease.cubicInOut).wait(30).to({_off:false,regY:238.8,scaleX:0.9653,scaleY:0.9653,rotation:-14.7673,x:-260.5,y:215.85,mode:"independent"},29,cjs.Ease.quadInOut).to({_off:true},1).wait(462));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(122).to({_off:false},29,cjs.Ease.cubicInOut).wait(30).to({mode:"single",startPosition:24},0).to({_off:true,regY:238.8,scaleX:0.9653,scaleY:0.9653,rotation:-14.7673,x:-260.5,y:215.85,mode:"independent"},29,cjs.Ease.quadInOut).wait(463));

	// Layer_20
	this.instance_10 = new lib.hand();
	this.instance_10.parent = this;
	this.instance_10.setTransform(503.5,271.5,0.9248,0.9248,6.4723,0,0,197.2,294);
	this.instance_10._off = true;

	this.instance_11 = new lib.hand_with_phone_card("synched",0,false);
	this.instance_11.parent = this;
	this.instance_11.setTransform(203.3,338.5,0.7309,0.7309,-11.2398,0,0,197,293.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(101).to({_off:false},0).to({regX:197.1,regY:293.9,scaleX:0.7309,scaleY:0.7309,rotation:-11.2398,x:203.4,y:338.45},21,cjs.Ease.cubicInOut).to({_off:true},41).wait(510));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(163).to({_off:false},0).wait(45).to({mode:"single",startPosition:45},0).wait(40).to({mode:"synched",startPosition:25,loop:false},0).wait(23).to({mode:"single",startPosition:45},0).wait(53).to({startPosition:45},0).to({regX:197.1,scaleX:0.9248,scaleY:0.9248,rotation:6.4723,x:503.4,y:271.4},29,cjs.Ease.cubicInOut).to({regX:197,scaleX:0.7309,scaleY:0.7309,rotation:-11.2398,x:203.3,y:338.5,mode:"synched",startPosition:49,loop:false},21,cjs.Ease.cubicInOut).wait(1).to({regX:200.4,regY:294.5,rotation:-11.2395,x:205.85,y:338.35,startPosition:50},0).wait(1).to({rotation:-11.2385,startPosition:51},0).wait(1).to({rotation:-11.2369,startPosition:52},0).wait(1).to({rotation:-11.2346,startPosition:53},0).wait(1).to({rotation:-11.2317,startPosition:54},0).wait(1).to({rotation:-11.2282,startPosition:55},0).wait(1).to({rotation:-11.224,x:205.9,startPosition:56},0).wait(1).to({rotation:-11.2192,x:205.95,y:338.4},0).wait(1).to({rotation:-11.2137,y:338.35},0).wait(1).to({rotation:-11.2075,x:206.05,y:338.4},0).wait(1).to({rotation:-11.2007,y:338.35},0).wait(1).to({rotation:-11.1933,x:206.15,y:338.3},0).wait(1).to({rotation:-11.1852,y:338.35},0).wait(1).to({rotation:-11.1764,y:338.3},0).wait(1).to({scaleX:0.731,scaleY:0.731,rotation:-11.167,x:206.25,y:338.35},0).wait(1).to({rotation:-11.157,x:206.3,y:338.3},0).wait(1).to({rotation:-11.1463,x:206.35},0).wait(1).to({rotation:-11.1349,x:206.45,y:338.25},0).wait(1).to({rotation:-11.1229,x:206.55,y:338.3},0).wait(1).to({rotation:-11.1102,x:206.6,y:338.25},0).wait(1).to({rotation:-11.0969,x:206.65},0).wait(1).to({rotation:-11.0829,x:206.75},0).wait(1).to({scaleX:0.7311,scaleY:0.7311,rotation:-11.0682,x:206.8},0).wait(1).to({regX:197.1,regY:293.9,rotation:-11.0529,x:204.4,y:338.3,mode:"single"},0).to({scaleX:0.9248,scaleY:0.9248,rotation:6.4723,x:503.4,y:271.4},18,cjs.Ease.cubicInOut).to({_off:true},1).wait(256));

	// Layer_14
	this.instance_12 = new lib.hand_with_card_shadow();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-218.05,390.05,1,1,16.7538,0,0,102,200);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(12).to({_off:false},0).to({regX:102.1,rotation:25.4874,x:24.05,y:298.1,alpha:0.6016},25,cjs.Ease.cubicInOut).wait(56).to({regX:102,scaleX:0.9989,scaleY:0.9989,rotation:20.5666,x:-160.45,y:529.6,alpha:0.2695},29,cjs.Ease.cubicInOut).to({regX:102.1,scaleX:1,scaleY:1,rotation:25.4874,x:24.05,y:363.1,alpha:1},29,cjs.Ease.cubicInOut).wait(30).to({regX:102,scaleX:0.9989,scaleY:0.9989,rotation:20.5666,x:-160.45,y:365.35,alpha:0.2695},29,cjs.Ease.quadInOut).to({_off:true},1).wait(462));

	// Layer_26
	this.instance_13 = new lib.supersign_open_cutted("synched",0,false);
	this.instance_13.parent = this;
	this.instance_13.setTransform(120.15,240,1.7307,1.7307,0,0,0,119.9,201.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(343).to({_off:false},0).wait(100).to({startPosition:66},0).to({scaleX:0.9987,scaleY:0.9987,x:120.1,y:199.95,alpha:0,startPosition:56},20,cjs.Ease.cubicInOut).to({_off:true},1).wait(209));

	// Layer_21
	this.instance_14 = new lib.hand_02_shadow_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(372.15,530.1,1.2392,1.2392,6.9503,0,0,129,184.2);
	this.instance_14.alpha = 0.6016;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(101).to({_off:false},0).to({regX:128.9,regY:184.1,rotation:-14.9991,x:180.2,y:352.05},21,cjs.Ease.cubicInOut).wait(202).to({regX:129,regY:184.2,rotation:6.9503,x:372.15,y:530.1},29,cjs.Ease.cubicInOut).to({regX:128.9,regY:184.1,rotation:-14.9991,x:180.2,y:352.05},21,cjs.Ease.cubicInOut).wait(1).to({regX:129,regY:184,rotation:-14.9988,x:180.3,y:351.9},0).wait(1).to({rotation:-14.9978},0).wait(1).to({rotation:-14.9962},0).wait(1).to({rotation:-14.9938,y:351.95},0).wait(1).to({rotation:-14.9909,x:180.35},0).wait(1).to({scaleX:1.2391,scaleY:1.2391,rotation:-14.9872,x:180.3},0).wait(1).to({rotation:-14.9829,x:180.35,y:352},0).wait(1).to({rotation:-14.9779},0).wait(1).to({rotation:-14.9723,x:180.4},0).wait(1).to({scaleX:1.239,scaleY:1.239,rotation:-14.966,x:180.35},0).wait(1).to({rotation:-14.959,x:180.4,y:352.05},0).wait(1).to({scaleX:1.2389,scaleY:1.2389,rotation:-14.9514,x:180.45},0).wait(1).to({rotation:-14.943,x:180.5,y:352.1},0).wait(1).to({scaleX:1.2388,scaleY:1.2388,rotation:-14.934},0).wait(1).to({rotation:-14.9244,x:180.55,y:352.15},0).wait(1).to({scaleX:1.2387,scaleY:1.2387,rotation:-14.9141},0).wait(1).to({rotation:-14.9031,x:180.6,y:352.2},0).wait(1).to({scaleX:1.2386,scaleY:1.2386,rotation:-14.8914,x:180.65,y:352.25},0).wait(1).to({scaleX:1.2385,scaleY:1.2385,rotation:-14.879,x:180.7},0).wait(1).to({scaleX:1.2384,scaleY:1.2384,rotation:-14.866,y:352.3},0).wait(1).to({rotation:-14.8523,x:180.8,y:352.35},0).wait(1).to({scaleX:1.2383,scaleY:1.2383,rotation:-14.8379,x:180.85,y:352.45},0).wait(1).to({scaleX:1.2382,scaleY:1.2382,rotation:-14.8228,x:180.9,y:352.5},0).wait(1).to({regX:128.9,regY:184.1,scaleX:1.2381,scaleY:1.2381,rotation:-14.8071,y:352.65},0).to({regX:129,regY:184.2,scaleX:1.2392,scaleY:1.2392,rotation:6.9503,x:372.15,y:530.1},18,cjs.Ease.cubicInOut).to({_off:true},1).wait(256));

	// Layer_1
	this.instance_15 = new lib.bg();
	this.instance_15.parent = this;
	this.instance_15.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},500).wait(173));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-514.7,-193.4,1230,1414.6000000000001);


// stage content:
(lib.MF_Unreal_Card_Admitad_240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	

	// Layer_1
	this.instance = new lib.all_movie();
	this.instance.parent = this;
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120,200,120,200);
// library properties:
lib.properties = {
	id: '17838115B575F942BFB4C84A6707D5AD',
	width: 240,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"index1_atlas_.png", id:"index1_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['17838115B575F942BFB4C84A6707D5AD'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;