(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Avito_240x400_atlas_", frames: [[1415,564,179,280],[1234,750,179,280],[1392,0,179,280],[1392,282,179,280],[0,0,913,611],[344,613,106,50],[0,613,342,122],[915,0,475,748],[1573,279,84,270],[1573,0,128,277],[1596,551,98,180],[0,750,1232,145]]}
];


// symbols:



(lib.b_1 = function() {
	this.initialize(ss["Avito_240x400_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.b_2 = function() {
	this.initialize(ss["Avito_240x400_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.b_3 = function() {
	this.initialize(ss["Avito_240x400_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.b_4 = function() {
	this.initialize(ss["Avito_240x400_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.initialize(ss["Avito_240x400_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.finger = function() {
	this.initialize(ss["Avito_240x400_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.left_hand = function() {
	this.initialize(ss["Avito_240x400_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.man1 = function() {
	this.initialize(ss["Avito_240x400_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.right_hand_1 = function() {
	this.initialize(ss["Avito_240x400_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.right_hand_2 = function() {
	this.initialize(ss["Avito_240x400_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.sheiker = function() {
	this.initialize(ss["Avito_240x400_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.table = function() {
	this.initialize(ss["Avito_240x400_atlas_"]);
	this.gotoAndStop(11);
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


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Маска банки (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAyEoIg3gBIgngBIglgCIgoAAQgVgCgOgGQgegOgDg5QgBgTACgiIACg1QAAhGgDiBIAAgeQAAgWADgJQAKgbAagQQAWgNAkgIIAAgGIgHAAIgFgIQgCgEgBgFQADgFAAgPIgBgXIAGgCQAPgJA4gBQAmAAAnAEIAiABQATABAFAIQACAEABASIABAXQgFADgEAFQgEAGgCAFIACACQAvADAXAcQAXAbgBAxIgLgCIAAAIIALACIAAD0IAAA8QABAwgDAHQgQAdhAAGQgTACgdAAIgKAAg");
	mask.setTransform(-0.1516,-0.3455);

	// Банка
	this.instance = new lib.b_3();
	this.instance.parent = this;
	this.instance.setTransform(-19.4,-30.3,0.2167,0.2167);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-19.2,-29.9,38.099999999999994,59.099999999999994), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgVFAg0MAAAhBnMAqLAAAMAAABBng");
	this.shape.setTransform(135,210);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,270,420), null);


(lib.Символ2копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#06A7FB"],[0.208,1],-0.4,19.5,-0.4,-17).s().p("AmxCnQjygMh8geQh6gegrg/QgZglAAhFQAAgbFBgjQFcgmFeAAQFRAAFGAnQEpAjAAAaQAABBgpAtQg7BDiWAgQh3AajgAJQiSAFkEAAQkBAAingIg");
	this.shape.setTransform(5.0497,0.6745,0.9997,1.1099);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2копия, new cjs.Rectangle(-93.9,-18.7,197.9,38.8), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Маска банки (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAADdIgvgCQgQAAgQgBQgSgCgMgEQgWgHgEgYQgBgJAAgQIAAgfIAAhTIABhRIgBgtQAAgbAFgMQAFgLAKgIQAJgIAMgFIAPgEQAKgCADgFQgIgEgCgNIABgcIAFgBQAEgDASgCQATgCAYgBQA6gBAWAJQACAFAAAJIgBARIACACIAAAEIgHAGIgEAFIAOAEIAQAGQAVAIAKAPQAHALACAXIAAAqIAACpIABAtQAAAcgFALQgLAUhCADIgYAAIgfAAg");
	mask.setTransform(-0.1254,0.1398);

	// Банка
	this.instance = new lib.b_4();
	this.instance.parent = this;
	this.instance.setTransform(-14.2,-22.2,0.1587,0.1587);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-13.8,-21.9,27.4,44.2), null);


(lib.Анимация15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Маска руки (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AIHEbQglgBgzgVQgvgVgZgWIghgeQgYgQgfgCIoegwIjWgkQhAgEhcgVQhlgXgIgTQgZgzAOg6QAPg6AzgwQAtgpAYgPQAlgWAwgGQCVgSDaB9QAVANAqALQAmALAXACIBsAWIBtAVICRAMQAWgFA3ghQAygfAcgBQAlgBBlApQA2AWBSAjIAMATQAHAKADAHQAIATgJAjQgSAJgCAcQgCAfgQAPQgSARgUgBQAEApgWAQQgGAFgJADQgIADAAACQgBApgnAVQgfAQgwAAIgHAAg");
	mask.setTransform(0.5144,1.7596);

	// Рука
	this.instance = new lib.left_hand();
	this.instance.parent = this;
	this.instance.setTransform(-66.75,-46.95,0.4496,0.4496,15.4966);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.7,-45.1,158.3,89.1);


(lib.Анимация12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Маска банки (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAJVIiAgEQgsAAgrgEQgwgGghgJQg8gTgLhAQgEgZABgsIAChUQAAhNAAiTIAAjeQgDhOABgqQAAhLAOghQAMgbAcgXQAZgVAhgNIApgLQAagHAIgLQgWgMgEgkQgBgMACg+IANgFQALgHAzgGQAygGBAgBQCegEA9AYQAEANABAbIgBAtIADAGIABAKQgGAFgMAMQgMANABAAIAkALQAbAIASAHQA5AXAaAnQATAeAFA/QABAVAABdIAAHKQAAAkADBWQABBLgQAeQgdA3iyAHIhCABIhTgBg");
	mask.setTransform(-0.0828,0.3627);

	// Банка
	this.instance = new lib.b_4();
	this.instance.parent = this;
	this.instance.setTransform(-38.45,-60.2,0.43,0.43);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.2,-59.4,74.30000000000001,119.5);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Маска шейкер (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AibGVQAAhWgRivQgQivgBhbQgRgLgGgRQgEgPABglQAsgFAPiYQgXgCgFgBQgLgEgIgNIAIgHQADgDAHgEQAjgVBJATQAeAHBEAbIAhAMQAXAIADgCQAQgMAFgCQAIgDAWgBQAaAQAKAnIAHAiQAEAVAFANQAFAMAHAHIAKAKQAMANgBAvQgWANgGAPQgHAQABAkIgODtIgPDtgAg7lFQABAYgBAIIALAFIAQAEQAeAHAegEQAigFAJgRIAEAAIgEgEQgWgTgkgPQgmgPgjgBQAAAJABAXg");
	mask.setTransform(0.113,-0.0201);

	// Шейкер
	this.instance = new lib.sheiker();
	this.instance.parent = this;
	this.instance.setTransform(-22.05,-40.5,0.45,0.45);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-40.5,43.3,81);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Маска банки (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjJKzQhYgDgkgJQg5gOgfgqQgQgVgEgsQgDgeACg6QADhNgFibQgFi5AAg5IABhhIAChbQgDhYAAgiQABg6AYgmQAUggAmgZQAigYArgOIAjgIQAUgEAKgIQgQgHgEgKQgDgHgCgaQACgQgCgiQgCghACgRIAKAAQATgNAogBIBHgBQA5gFBgADQB7AEA/ASQAFAQABAfIgBA1QACADgBAFQgCAHABAFQgFAFgJALQgHAJgJAFIAAAFQBIAJA4AjQA8AmAWA1QANAggBBBIgCBxQAIDDgDDlQgBAuAEB5QADBXgGApQgIA5gbAgQgfAjhAAPIhGADQgpACgdAAIi5ABQh6AAg+gDg");
	mask.setTransform(-0.57,0.1504);

	// Банка
	this.instance = new lib.b_2();
	this.instance.parent = this;
	this.instance.setTransform(-44.75,-70,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.7,-69.2,88.4,138.8);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Маска банки (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABDGLIhKgBIg1gCIgxgBIg1gBQgcgCgTgIQgogTgEhNQgBgYADguIADhGQAAhegFitIgBgoQABgdAFgNQANgjAjgWQAdgSAwgKIAAgJIgJAAIgHgKQgDgFgBgHQAEgHAAgUIgCgeIAJgDQAUgNBKAAQA0AAA0AFIAsABQAaACAHALQADAFABAYIABAeQgGAFgFAGQgGAIgDAHIADADQA+AEAgAkQAeAkgBBCIgPgDIAAALIAPADIAAFGIABBRQAABAgEAJQgUAnhXAIQgaACgmAAIgNAAg");
	mask.setTransform(-0.0133,-0.3817);

	// Банка
	this.instance = new lib.b_3();
	this.instance.parent = this;
	this.instance.setTransform(-25.95,-40.6,0.29,0.29);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-39.9,51,79);


(lib.Анимация24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B485F3").s().p("AggAhQgNgOAAgTQAAgSANgOQAOgNASAAQATAAAOANQANAOAAASQAAATgNAOQgOANgTAAQgSAAgOgNg");
	this.shape.setTransform(-46.4967,6.9049,0.82,0.82);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF7B7A").s().p("AgsAtQgTgTAAgaQAAgaATgSQATgTAZAAQAbAAASATQATATAAAZQAAAagTATQgSATgbAAQgZAAgTgTg");
	this.shape_1.setTransform(-31.2451,-8.3467,0.82,0.82);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A3D44C").s().p("AhFBGQgdgdAAgpQAAgoAdgdQAdgdAoAAQApAAAdAdQAdAdAAAoQAAApgdAdQgdAdgpAAQgoAAgdgdg");
	this.shape_2.setTransform(-31.2246,6.9049,0.82,0.82);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00B9FA").s().p("Ag4A5QgZgXAAgiQAAghAZgXQAXgZAhAAQAiAAAXAZQAYAXAAAhQAAAigYAXQgXAYgiAAQghAAgXgYg");
	this.shape_3.setTransform(-46.5172,-8.3672,0.82,0.82);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_4.setTransform(20.3519,-8.1417,0.82,0.82);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhCBCQgcgbAAgnQAAglAcgcQAcgbAmAAQAnAAAcAbQAcAcAAAlQAAAngcAbQgcAbgnAAQgmAAgcgbgAghggQgPAOAAATQAAATAPAPQAOANATAAQAUAAAOgNQAPgPAAgTQAAgTgPgOQgOgOgUAAQgTAAgOAOg");
	this.shape_5.setTransform(45.4227,3.3585,0.82,0.82);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA+CCIgSgyIhXAAIgSAyIg0AAIBfkDIAlAAIBfEDgAAeApIgehRIgdBRIA7AAg");
	this.shape_6.setTransform(-7.0763,0.0171,0.82,0.82);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghAxIAAhLIgmAAIAAgnIAmAAIAAgxIAvAAIAAAxIA6AAIAAAnIg6AAIAABIQAAAOAKAHQAIAFANAAQAMAAAJgDIAGAnQgRAHgTAAQhFAAAAhCg");
	this.shape_7.setTransform(30.4171,1.534,0.82,0.82);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeBZIhBixIAxAAIAuCAIAviAIAxAAIhBCxg");
	this.shape_8.setTransform(8.8517,3.379,0.82,0.82);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgXBZIAAixIAvAAIAACxg");
	this.shape_9.setTransform(20.3314,3.379,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.2,-15,106.4,30.1);


(lib.Анимация23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Маска тела (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABwZuQmkgJjNAAIgBgCQABAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAIgSg3QgMgigGgVQgEgXALgXQANgYADgLIACgmIACgnQAIgkAJhWQAIhQALguQAFgWAUgwQATguAGghQgCgUgBgxQAAgwgCgUQgMg5gChRIABiJQgOgHgDgDQgEgFgBgRQAKgRgEgkQgDgsABgLQACgJALgpQAKgjABgUQgugfgJg7QgHgrALhRIgEAAQgDAYgOAeIgYAxQg1B6hMBqQhDBehgBhQgpAogsATQhFAdgmgzQgrg4AIigQADg/ALg/QAKg7AMgiIAlhtQAWhBAXglIAvhJQAdguAPggIAxiHIALgtIALgtQAnhjBVhsQARgVA6gkQAygfAjgQIBEgWQAFgGgBgHQAAgFAJgEQAZgQA6gLQAzgJAuAAIAKgMQAIgHABgGQgUgSgIg0QgEgbgCg/QgUADgJgCQgOgDgDgOQgEgSAAgtIAAhIIgBgqQgBgZAEgLQAGgQgFgkQgFgxAAgMIAAhRIAbgrQgPgKgHgKQgIgMgCgUQAggqAfg7IA3gnQAggVAagFIAfAJIAMgIQAEADAFAAQAFAAAGgEIgSAAIAFgEQAPgMALgCQAcgFBJANIBFAPQAKgDALgIQAIgGAQgCIA2AOQAqASAfAaQAkAfALAlQgFAFgCADIgFALQAeAPgEArIgEAmQgDAXAEAPIATBUQALA1ABAnIALABQAFAAACABQAMBOgCA8QgCBcglAQQgFADgIgBIgQAAIgJC2QB6gCAoAPIAtAgQAPAFAuAIQAkAGAUAMQAOAKAaAcQAbAdAOAKQAuAgBaA3QBLAzApA4QAnA1AWAvQAlBPgRAuQgVA2hIA1QgWAQhlA8QgTAJgoAMQgnAMgTAJIACA1IACA1QALAUgCA8QgDBFAEASQANBAgIBXQgGBBgRBSQgLAwgKBdQgLBggJApQgLA5AeAzIAaAnQAOAXAFATIgBBqQABBFgBAkQAFAVAaBZQAXBUgEASQgHAegXAkIgmA9QjBAPkWAAIiRgBgAhf5aIAFAAIgCABIgDgBgAha5ag");
	mask.setTransform(0.3124,2.293);

	// Тело
	this.instance = new lib.man1();
	this.instance.parent = this;
	this.instance.setTransform(-106.85,-168.3,0.45,0.45);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.3,-162.3,213.2,329.3);


(lib.Анимация21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Маска руки (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACmI+QgygTghglQgGgHgOgaQgMgUgMgHQhCgngxhVQgRgdgZg0IgqhXIhNiOQgthTgYhBQgLgfgCgmQgBgcAEglQAEgeAEhHQADgyAGgaQAIgkATggQAVgjAqgrQBBgYBLBNQA+A/AkBbQAUAvAvBUQA1BcASAmIATBIIAUBHQAvB0AYBLQBWEChXBpQgUADgTAAQgkAAgjgNg");
	mask.setTransform(1.3439,0.2458);

	// Рука
	this.instance = new lib.right_hand_2();
	this.instance.parent = this;
	this.instance.setTransform(-36.6,-58.05,0.45,0.45,-7.4407);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-63.2,70.9,128.10000000000002);


(lib.Анимация19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Маска руки (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag1KQQgRgEgcgOIg1gbIglgNIglgNQgCgDAEgLQAEgMgCgEQAzgXAQhHQAFgXAEgvQAGg5AEgYIAGhBIAGhBQAPg4gEhWQgDg0gMhVQgJhEAPhmQAWhxAHgtQgBgPgGgYQgFgZgCgPQASg2ApgiQAPgMAagQIAtgdQBAgSAqAbQAfATASAmQANAbAKAxQAQBNgKBuQgKBbgYBbIgYDkQgNAwgVBjQgVBfgNAyIgQCkQgFATgJAbIgQArQgsAagkAAQgMAAgMgDg");
	mask.setTransform(0.3443,1.1243);

	// Рука
	this.instance = new lib.right_hand_1();
	this.instance.parent = this;
	this.instance.setTransform(-16.55,-68.7,0.5,0.5,3.7323);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-66.2,47.5,134.4);


(lib.Анимация17копия3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPAxQgJgDgIgHQgGgHgEgLQgEgKAAgMQAAgLAEgJQADgJAGgHQAHgHAJgEQAJgEALAAQAJAAAIADQAJADAGAGQAFAGAEAJQADAIAAAMIgBAGQgCACgDAAIg/AAIAEAOQACAFADAEQAEAEAFACQAEACAGAAQAGAAAEgCIAHgDIAGgDIAFgBQADAAACACIAHAJQgEAFgFADIgLAFIgLADIgMABQgJAAgJgEgAgNgcQgGAGgCALIAuAAQAAgFgCgEQgBgEgCgDQgEgEgEgBQgDgCgGAAQgKAAgGAGg");
	this.shape.setTransform(90.65,2.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQAxQgIgDgIgHQgGgHgEgLQgEgKAAgMQAAgLADgJQAEgJAGgHQAHgHAJgEQAJgEAKAAQAKAAAIADQAJADAGAGQAFAGAEAJQADAIAAAMIgBAGQgCACgDAAIg/AAIAEAOQACAFADAEQAEAEAFACQAEACAGAAQAGAAAEgCIAHgDIAGgDIAFgBQADAAACACIAHAJQgEAFgFADIgLAFIgLADIgMABQgJAAgKgEgAgNgcQgGAGgCALIAuAAQAAgFgCgEQgBgEgCgDQgDgEgFgBQgEgCgFAAQgKAAgGAGg");
	this.shape_1.setTransform(79.95,2.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AguBFIAAiHIAPAAQAFAAABAFIACAJQAHgHAIgFQAIgEAJAAQAJAAAHADQAHAEAFAGQAFAIADAJQACAKAAANQAAALgDAIQgDAKgGAIQgFAHgIAEQgJAEgKAAQgHAAgGgDQgHgDgEgEIAAAqgAgLgtQgGADgEAGIAAAtQAEAFAFACQAFACAGAAQAEAAAFgCQAEgCADgEQADgFACgFQACgHAAgIQAAgJgCgHQgBgGgDgEQgCgEgEgCQgEgCgFAAQgHABgFADg");
	this.shape_2.setTransform(69.175,3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLAzIAAhTIglAAIAAgSIBhAAIAAASIglAAIAABTg");
	this.shape_3.setTransform(58.125,2.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgOAxQgIgDgGgHQgHgHgDgKQgEgKAAgMQAAgLADgJQADgKAHgHQAGgHAJgEQAKgEALAAQALAAAJAEQAJADAGAHIgGAJIgCADIgDAAIgEgBIgEgCIgGgDIgJgBQgGAAgEACQgFADgDAEQgEAEgBAHQgCAGAAAHQAAAIACAGQACAHADAEQADAEAFADQAEACAGAAIAJgBIAGgEIAFgDIAEgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABIAHAJIgIAIIgKAFIgLADIgLABQgIAAgJgEg");
	this.shape_4.setTransform(48.325,2.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAmAzIAAhlIAYAAIAABlgAg9AzIAAhlIAXAAIAAAmIATAAQAKAAAIACQAGADAFAEQAEAEACAFQACAGAAAGQAAAIgCAGQgDAGgFAEQgEAEgHADQgHACgJAAgAgmAiIATAAQAIAAAFgFQAEgEAAgGIgBgGIgDgEIgGgEIgHgBIgTAAg");
	this.shape_5.setTransform(35.9,2.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTBGQgKgDgGgJQgHgIgEgNQgEgNAAgSQAAgPADgNQADgOAHgKQAGgKALgGQALgHAOgBIAlgDIABANQAAAEgBADQgCADgEAAIgdACQgIABgHADQgGADgFAFQgEAFgCAHQgDAHAAAJIAGgHIAIgGQAFgCAFgBQAFgCAGAAQAKAAAIAEQAIAEAGAGQAGAHADAIQADAJAAALQAAAMgEAJQgDAKgHAGQgHAHgJADQgJAEgMAAQgKAAgJgEgAgSAAQgGAHAAAPQAAARAGAIQAGAJAMAAQANAAAGgIQAHgJAAgPQAAgQgHgIQgGgIgMAAQgMAAgHAIg");
	this.shape_6.setTransform(22.775,-0.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOAxQgIgDgGgHQgHgHgDgKQgEgKAAgMQAAgLADgJQADgKAHgHQAGgHAJgEQAKgEALAAQALAAAJAEQAJADAGAHIgGAJIgCADIgDAAIgEgBIgEgCIgGgDIgJgBQgGAAgEACQgFADgDAEQgEAEgBAHQgCAGAAAHQAAAIACAGQACAHADAEQADAEAFADQAEACAGAAIAJgBIAGgEIAFgDIAEgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABIAHAJIgIAIIgKAFIgLADIgLABQgIAAgJgEg");
	this.shape_7.setTransform(7.225,2.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYAzQgFgBgEgEQgEgEgDgEQgCgGAAgGIABgIQACgEADgEIAHgHIAMgEIAQgEIAUgBIAAgHQAAgKgFgEQgEgGgIAAQgFABgEABIgHADIgGADQgCABgDAAIgFAAIgDgEIgEgIQASgQAYAAQAJAAAHADQAHADAFAFQAFAGACAGQADAIAAAIIAABAIgLAAIgGgBQgCAAgBgEIgCgHIgIAGIgHAEIgIADIgKABQgGAAgGgCgAABAKIgLADQgEACgCADQgCACAAAEQAAAGAEADQADADAHAAQAGAAAGgDQAFgDAGgFIAAgRIgSACg");
	this.shape_8.setTransform(-3.125,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgoAzIAAhlIAoAAQAKAAAHACQAHABAEAEQAFADACAFQACAEAAAFIgBAHQAAAEgDADIgFAGQgEADgGABIAJACQAFACADADQADADABAEQACAEAAAFQAAAIgDAGQgEAFgFAEQgFAEgIABQgHACgIAAgAgQAiIARAAQAIAAAFgDQAEgEAAgHIgBgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgDIgJgBIgRAAgAgQgHIAQAAIAGgBIAFgDQACgCABgDQACgDAAgDIgBgEIgDgEIgFgDIgHgBIgQAAg");
	this.shape_9.setTransform(-12.675,2.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLAzIAAhTIglAAIAAgSIBhAAIAAASIglAAIAABTg");
	this.shape_10.setTransform(-27.925,2.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdBEIATgpIgpheIAVAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAIADAEIAVA0IABAGIACAFIABgFIACgGIAVg0QAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAIADgBIAUAAIg3CCQAAAAAAABQAAABgBAAQAAABgBAAQAAAAAAAAQgCACgEAAg");
	this.shape_11.setTransform(-38.25,3.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAmBFIAAgjIhMAAIAAAbQAAABAAABQAAAAAAABQAAAAgBABQAAABAAAAQgCACgDABIgQAAIAAg0IADAAIAHgBQADgBADgEQADgDADgFQADgFACgJQACgKACgOIACggIBFAAIAABTIATAAIAAAtQAAADgCADQgCACgDAAgAgJgaIgDATIgFANIgFALIAoAAIAAhBIgYAAIgDAWg");
	this.shape_12.setTransform(-49.925,3.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAVBIIAAg8IABgFIAAgFIgEAIIgCADIgFAGIgGAJIgGAKIgUAcIgEAEQgCACgDAAIgPAAIAAhlIAZAAIAAA7IgBAFIAAAFIAEgIIACgDIAFgGIAGgJIAGgKIAUgbIAEgEQACgCADAAIAPAAIAABlgAgLgsQgGgBgEgDQgFgDgCgEQgCgEAAgFQAAgDABgCQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAPAAIAAAHIACAFQABABAAAAQAAABABAAQAAAAABAAQABABAAAAIAGABIAGgBQAAAAABgBQABAAAAAAQABAAAAgBQAAAAABgBIACgFIAAgHIAPAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQABACAAADQAAAFgCAEQgDAEgEADQgEADgGABQgGACgHAAQgHAAgGgCg");
	this.shape_13.setTransform(-62.025,-0.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYAzQgFgBgEgEQgEgEgDgEQgCgGAAgGIABgIQACgEADgEIAHgHIAMgEIAQgEIAUgBIAAgHQAAgKgFgEQgEgGgIAAQgFABgEABIgHADIgGADQgCABgDAAIgFAAIgDgEIgEgIQASgQAYAAQAJAAAHADQAHADAFAFQAFAGACAGQADAIAAAIIAABAIgLAAIgGgBQgCAAgBgEIgCgHIgIAGIgHAEIgIADIgKABQgGAAgGgCgAABAKIgLADQgEACgCADQgCACAAAEQAAAGAEADQADADAHAAQAGAAAGgDQAFgDAGgFIAAgRIgSACg");
	this.shape_14.setTransform(-73.225,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAUAzIAAgtIgnAAIAAAtIgZAAIAAhlIAZAAIAAAnIAnAAIAAgnIAZAAIAABlg");
	this.shape_15.setTransform(-83.725,2.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.4,-14.6,189.9,28);


(lib.Анимация17копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAVAzIAAg7IABgFIAAgFIgEAIIgCADIgFAGIgGAIIgGAKIgUAcIgEAEQgCACgDAAIgPAAIAAhlIAZAAIAAA7IgBAFIAAAFIAEgIIACgDIAFgGIAGgIIAGgKIAUgcIAEgEQACgCADAAIAPAAIAABlg");
	this.shape.setTransform(1.275,2.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAVAzIAAg7IABgFIAAgFIgEAIIgCADIgFAGIgGAIIgGAKIgUAcIgEAEQgCACgDAAIgPAAIAAhlIAZAAIAAA7IgBAFIAAAFIAEgIIACgDIAFgGIAGgIIAGgKIAUgcIAEgEQACgCADAAIAPAAIAABlg");
	this.shape_1.setTransform(-10.375,2.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AguBFIAAiHIAPAAQAFAAABAFIACAJQAHgHAIgFQAIgEAJAAQAJAAAHADQAHAEAFAGQAFAIADAJQACAKAAANQAAALgDAIQgDAKgGAIQgFAHgIAEQgJAEgKAAQgHAAgGgDQgHgDgEgEIAAAqgAgLgtQgGADgEAGIAAAtQAEAFAFACQAFACAGAAQAEAAAFgCQAEgCADgEQADgFACgFQACgHAAgIQAAgJgCgHQgBgGgDgEQgCgEgEgCQgEgCgFAAQgHABgFADg");
	this.shape_2.setTransform(-21.625,3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAxQgJgEgHgHQgGgGgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgHQAHgHAJgDQAKgEAKAAQAMAAAJAEQAJADAHAHQAHAHADAKQAEAKAAALQAAAMgEAKQgDAKgHAGQgHAHgJAEQgJAEgMAAQgKAAgKgEgAgSgYQgGAIAAAQQAAAQAGAJQAGAJAMAAQANAAAGgJQAGgIAAgRQAAgQgGgIQgGgJgNAAQgMAAgGAJg");
	this.shape_3.setTransform(-33.325,2.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiAzIAAhlIBFAAIAAASIgsAAIAABTg");
	this.shape_4.setTransform(-42.775,2.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQAxQgJgDgHgHQgGgHgEgLQgEgKAAgMQAAgLADgJQAEgJAGgHQAHgHAJgEQAJgEAKAAQAKAAAIADQAIADAHAGQAFAGAEAJQADAIAAAMIgBAGQgCACgDAAIg/AAIAEAOQACAFADAEQAEAEAFACQAEACAGAAQAGAAAEgCIAHgDIAGgDIAFgBQADAAACACIAHAJQgEAFgFADIgLAFIgLADIgMABQgJAAgKgEgAgNgcQgGAGgCALIAuAAQAAgFgCgEQgBgEgDgDQgCgEgFgBQgEgCgFAAQgKAAgGAGg");
	this.shape_5.setTransform(-52.8,2.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLAzIAAhTIglAAIAAgSIBhAAIAAASIglAAIAABTg");
	this.shape_6.setTransform(-63.275,2.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYAzQgFgBgEgEQgEgEgDgEQgCgGAAgGIABgIQACgEADgEIAHgHIAMgEIAQgEIAUgBIAAgHQAAgKgFgEQgEgGgIAAQgFABgEABIgHADIgGADQgCABgDAAIgFAAIgDgEIgEgIQASgQAYAAQAJAAAHADQAHADAFAFQAFAGACAGQADAIAAAIIAABAIgLAAIgGgBQgCAAgBgEIgCgHIgIAGIgHAEIgIADIgKABQgGAAgGgCgAABAKIgLADQgEACgCADQgCACAAAEQAAAGAEADQADADAHAAQAGAAAGgDQAFgDAGgFIAAgRIgSACg");
	this.shape_7.setTransform(-73.775,2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAfAzQgHAAgDgCQgEgCgCgEIgPgdQgCgDgDgCQgDgCgEAAIgJAAIAAAsIgaAAIAAhlIAaAAIAAAqIAIAAQAEAAACgCIAFgEIAQgeIAFgFQADgBADAAIAUAAIgYAmIgFAGQgDADgEABQAGACADACQADACADAFIAYAqg");
	this.shape_8.setTransform(-83.45,2.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.4,-14.6,101,28);


(lib.Анимация17копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPAxQgKgDgHgHQgGgHgEgLQgEgKAAgMQAAgLADgJQAEgJAGgHQAHgHAJgEQAJgEAKAAQAKAAAIADQAJADAGAGQAFAGAEAJQADAIAAAMIgBAGQgCACgDAAIg/AAIAEAOQACAFADAEQAEAEAFACQAEACAGAAQAGAAAEgCIAHgDIAGgDIAFgBQADAAACACIAHAJQgEAFgFADIgLAFIgLADIgMABQgJAAgJgEgAgNgcQgGAGgCALIAuAAQAAgFgCgEQgBgEgDgDQgCgEgFgBQgEgCgFAAQgKAAgGAGg");
	this.shape.setTransform(14.7,2.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAxQgJgEgHgHQgGgGgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgHQAHgHAJgDQAKgEAKAAQAMAAAJAEQAJADAHAHQAHAHADAKQAEAKAAALQAAAMgEAKQgDAKgHAGQgHAHgJAEQgJAEgMAAQgKAAgKgEgAgSgYQgGAIAAAQQAAAQAGAJQAGAJAMAAQANAAAGgJQAGgIAAgRQAAgQgGgIQgGgJgNAAQgMAAgGAJg");
	this.shape_1.setTransform(3.575,2.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAUAzIAAgtIgnAAIAAAtIgZAAIAAhlIAZAAIAAAnIAnAAIAAgnIAZAAIAABlg");
	this.shape_2.setTransform(-7.875,2.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgoAzIAAhlIAoAAQAKAAAHACQAHABAEAEQAFADACAFQACAEAAAFIgBAHQAAAEgDADIgFAGQgEADgGABIAJACQAFACADADQADADABAEQACAEAAAFQAAAIgDAGQgEAFgFAEQgFAEgIABQgHACgIAAgAgQAiIARAAQAIAAAFgDQAEgEAAgHIgBgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgDIgJgBIgRAAgAgQgHIAQAAIAGgBIAFgDQACgCABgDQACgDAAgDIgBgEIgDgEIgFgDIgHgBIgQAAg");
	this.shape_3.setTransform(-18.325,2.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAVAzIAAg7IABgFIAAgFIgEAIIgCADIgFAGIgGAIIgGAKIgUAcIgEAEQgCACgDAAIgPAAIAAhlIAZAAIAAA7IgBAFIAAAFIAEgIIACgDIAFgGIAGgIIAGgKIAUgcIAEgEQACgCADAAIAPAAIAABlg");
	this.shape_4.setTransform(-29.425,2.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLAzIAAhTIglAAIAAgSIBhAAIAAASIglAAIAABTg");
	this.shape_5.setTransform(-40.375,2.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AguBFIAAiHIAPAAQAFAAABAFIACAJQAHgHAIgFQAIgEAJAAQAJAAAHADQAHAEAFAGQAFAIADAJQACAKAAANQAAALgDAIQgDAKgGAIQgFAHgIAEQgJAEgKAAQgHAAgGgDQgHgDgEgEIAAAqgAgLgtQgGADgEAGIAAAtQAEAFAFACQAFACAGAAQAEAAAFgCQAEgCADgEQADgFACgFQACgHAAgIQAAgJgCgHQgBgGgDgEQgCgEgEgCQgEgCgFAAQgHABgFADg");
	this.shape_6.setTransform(-50.925,3.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUAxQgJgEgHgHQgGgGgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgHQAHgHAJgDQAKgEAKAAQAMAAAJAEQAJADAHAHQAHAHADAKQAEAKAAALQAAAMgEAKQgDAKgHAGQgHAHgJAEQgJAEgMAAQgKAAgKgEgAgSgYQgGAIAAAQQAAAQAGAJQAGAJAMAAQANAAAGgJQAGgIAAgRQAAgQgGgIQgGgJgNAAQgMAAgGAJg");
	this.shape_7.setTransform(-62.625,2.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAUAzIAAhTIgnAAIAABTIgZAAIAAhlIBZAAIAABlg");
	this.shape_8.setTransform(-74.075,2.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgOAxQgIgDgGgHQgHgHgDgKQgEgKAAgMQAAgLADgJQADgKAHgHQAGgHAJgEQAKgEALAAQALAAAJAEQAJADAGAHIgGAJIgCADIgDAAIgEgBIgEgCIgGgDIgJgBQgGAAgEACQgFADgDAEQgEAEgBAHQgCAGAAAHQAAAIACAGQACAHADAEQADAEAFADQAEACAGAAIAJgBIAGgEIAFgDIAEgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABIAHAJIgIAIIgKAFIgLADIgLABQgIAAgJgEg");
	this.shape_9.setTransform(-84.425,2.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.4,-14.6,114,28);


(lib.Анимация17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Маска палец (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjeBlIgEgNIgDgPQAFgHACgHQADgIAFgGQAVgcAzgeQAxgdAogLQAZgHAmgCIBCgDQBPgDAdgdIAVgGQALgCAGAFQAHAFABAIQABAHgEAOQgPAagfARQgYAOguAOQgLACgVAHQgWAHgLACQgSAIgnAVQgnAVgXAJQg2AXg1AAQgVAAgVgEg");
	mask.setTransform(1.109,-0.5385);

	// Палец
	this.instance = new lib.finger();
	this.instance.parent = this;
	this.instance.setTransform(-24.35,-11.5,0.46,0.46);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-11,46,21);


(lib.Анимация16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B485F3").s().p("AggAhQgNgOAAgTQAAgSANgOQAOgNASAAQATAAAOANQANAOAAASQAAATgNAOQgOANgTAAQgSAAgOgNg");
	this.shape.setTransform(-46.4967,6.9049,0.82,0.82);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF7B7A").s().p("AgsAtQgTgTAAgaQAAgaATgSQATgTAZAAQAbAAASATQATATAAAZQAAAagTATQgSATgbAAQgZAAgTgTg");
	this.shape_1.setTransform(-31.2451,-8.3467,0.82,0.82);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A3D44C").s().p("AhFBGQgdgdAAgpQAAgoAdgdQAdgdAoAAQApAAAdAdQAdAdAAAoQAAApgdAdQgdAdgpAAQgoAAgdgdg");
	this.shape_2.setTransform(-31.2246,6.9049,0.82,0.82);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00B9FA").s().p("Ag4A5QgZgXAAgiQAAghAZgXQAXgZAhAAQAiAAAXAZQAYAXAAAhQAAAigYAXQgXAYgiAAQghAAgXgYg");
	this.shape_3.setTransform(-46.5172,-8.3672,0.82,0.82);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_4.setTransform(20.3519,-8.1417,0.82,0.82);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhCBCQgcgbAAgnQAAglAcgcQAcgbAmAAQAnAAAcAbQAcAcAAAlQAAAngcAbQgcAbgnAAQgmAAgcgbgAghggQgPAOAAATQAAATAPAPQAOANATAAQAUAAAOgNQAPgPAAgTQAAgTgPgOQgOgOgUAAQgTAAgOAOg");
	this.shape_5.setTransform(45.4227,3.3585,0.82,0.82);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA+CCIgSgyIhXAAIgSAyIg0AAIBfkDIAlAAIBfEDgAAeApIgehRIgdBRIA7AAg");
	this.shape_6.setTransform(-7.0763,0.0171,0.82,0.82);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghAxIAAhLIgmAAIAAgnIAmAAIAAgxIAvAAIAAAxIA6AAIAAAnIg6AAIAABIQAAAOAKAHQAIAFANAAQAMAAAJgDIAGAnQgRAHgTAAQhFAAAAhCg");
	this.shape_7.setTransform(30.4171,1.534,0.82,0.82);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeBZIhBixIAxAAIAuCAIAviAIAxAAIhBCxg");
	this.shape_8.setTransform(8.8517,3.379,0.82,0.82);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgXBZIAAixIAvAAIAACxg");
	this.shape_9.setTransform(20.3314,3.379,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.2,-15,106.4,30.1);


(lib.Анимация15копия3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAVAzIAAg7IABgFIAAgFIgEAIIgCADIgFAGIgGAIIgGAKIgUAcIgEAEQgCACgDAAIgPAAIAAhlIAZAAIAAA7IgBAFIAAAFIAEgIIACgDIAFgGIAGgIIAGgKIAUgcIAEgEQACgCADAAIAPAAIAABlg");
	this.shape.setTransform(41.375,5.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgyAzQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgPIAFAAIAHgBQADgBADgDQAEgDACgGQADgFACgKIAFgWIACghIBGAAIAABmIgZAAIAAhTIgaAAQgBASgCAOQgBANgEAJQgEAKgEAFQgEAHgFACQgFAEgFABIgKABIgIgBg");
	this.shape_1.setTransform(29,5.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQAxQgIgDgHgHQgHgHgEgLQgEgKAAgMQAAgLADgJQAEgJAGgHQAGgHAKgEQAJgEALAAQAJAAAJADQAIADAFAGQAHAGACAJQAEAIAAAMIgBAGQgBACgEAAIg+AAIACAOQACAFAFAEQADAEAFACQAEACAGAAQAGAAAEgCIAIgDIAGgDIAEgBQAEAAABACIAHAJQgEAFgGADIgKAFIgLADIgLABQgKAAgKgEgAgNgcQgGAGgCALIAuAAQAAgFgBgEQgCgEgDgDQgDgEgDgBQgEgCgGAAQgKAAgGAGg");
	this.shape_2.setTransform(18.25,5.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLAzIAAhTIglAAIAAgSIBhAAIAAASIglAAIAABTg");
	this.shape_3.setTransform(7.775,5.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYA0QgFgDgEgDQgEgEgDgEQgCgGAAgGIABgIQACgFADgDIAHgHIAMgEIAQgEIAUgCIAAgGQAAgJgFgFQgEgGgIAAQgFABgEABIgHADIgGADQgCACgDgBIgFAAIgDgEIgEgIQASgQAYAAQAJAAAHADQAHADAFAFQAFAFACAIQADAHAAAIIAABBIgLAAIgGgCQgCAAgBgEIgCgHIgIAGIgHAEIgIADIgKABQgGAAgGgBgAABAKIgLADQgEACgCADQgCADAAADQAAAGAEAEQADACAHAAQAGAAAGgCQAFgDAGgGIAAgRIgSACg");
	this.shape_4.setTransform(-2.725,5.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAUAzIAAhTIgnAAIAABTIgZAAIAAhlIBZAAIAABlg");
	this.shape_5.setTransform(-13.225,5.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdBEIATgpIgpheIAVAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAIACAEIAWA1IABAFIACAFIABgFIACgFIAVg1QAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAIADgBIAVAAIg4CCQAAAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQgBACgEAAg");
	this.shape_6.setTransform(-24.1,6.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAfAzQgHAAgDgCQgEgCgDgEIgOgdQgCgDgDgCQgDgCgEAAIgJAAIAAAsIgaAAIAAhlIAaAAIAAAqIAIAAQAEAAACgCIAEgEIARgeIAFgFQADgBADAAIAUAAIgYAmIgFAGQgDADgEABQAGACADACQADACACAFIAZAqg");
	this.shape_7.setTransform(-34.3,5.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUAxQgJgEgHgHQgGgGgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgHQAHgHAJgDQAKgEAKAAQAMAAAJAEQAJADAHAHQAHAHADAKQAEAKAAALQAAAMgEAKQgDAKgHAGQgHAHgJAEQgJAEgMAAQgKAAgKgEgAgSgYQgGAIAAAQQAAAQAGAJQAGAJAMAAQANAAAGgJQAGgIAAgRQAAgQgGgIQgGgJgNAAQgMAAgGAJg");
	this.shape_8.setTransform(-46.025,5.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAfBIIAAh7Ig+AAIAAB7IgbAAIAAiPIB0AAIAACPg");
	this.shape_9.setTransform(-59.2,3.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.6,-11.3,118.3,28);


(lib.Анимация15копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAVBIIAAg8IABgFIAAgFIgEAIIgCADIgFAGIgGAJIgGAKIgUAcIgEAEQgCACgDAAIgPAAIAAhlIAZAAIAAA7IgBAFIAAAFIAEgIIACgDIAFgGIAGgJIAGgKIAUgbIAEgEQACgCADAAIAPAAIAABlgAgLgsQgGgBgEgDQgFgDgCgEQgCgEAAgFQAAgDABgCQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAPAAIAAAHIACAFQABABAAAAQAAABABAAQAAAAABAAQABABAAAAIAGABIAGgBQAAAAABgBQABAAAAAAQABAAAAgBQAAAAABgBIACgFIAAgHIAPAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABQABACAAADQAAAFgCAEQgDAEgEADQgEADgGABQgGACgHAAQgHAAgGgCg");
	this.shape.setTransform(67.675,3.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAxQgJgEgHgHQgGgGgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgHQAHgHAJgDQAKgEAKAAQAMAAAJAEQAJADAHAHQAHAHADAKQAEAKAAALQAAAMgEAKQgDAKgHAGQgHAHgJAEQgJAEgMAAQgKAAgKgEgAgSgYQgGAIAAAQQAAAQAGAJQAGAJAMAAQANAAAGgJQAGgIAAgRQAAgQgGgIQgGgJgNAAQgMAAgGAJg");
	this.shape_1.setTransform(56.075,5.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAUAzIAAgtIgnAAIAAAtIgZAAIAAhlIAZAAIAAAnIAnAAIAAgnIAZAAIAABlg");
	this.shape_2.setTransform(44.625,5.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgnAzIAAhlIAXAAIAAAmIASAAQAKAAAIACQAHADAFAEQAEAEACAFQACAGAAAGQAAAIgCAGQgDAGgFAEQgFAEgHADQgHACgJAAgAgQAiIASAAQAIAAAEgFQAFgEAAgGIgBgGIgDgEIgGgEIgHgBIgSAAg");
	this.shape_3.setTransform(34.475,5.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgyAzQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgPIAFAAIAHgBQADgBADgDQAEgDACgGQADgFACgKIAFgWIACghIBGAAIAABmIgZAAIAAhTIgaAAQgBASgCAOQgBANgEAJQgEAKgEAFQgEAHgFACQgFAEgFABIgKABIgIgBg");
	this.shape_4.setTransform(22.7,5.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYA0QgFgDgEgDQgEgEgDgEQgCgGAAgGIABgIQACgFADgDIAHgHIAMgEIAQgEIAUgCIAAgGQAAgJgFgFQgEgGgIAAQgFABgEABIgHADIgGADQgCACgDgBIgFAAIgDgEIgEgIQASgQAYAAQAJAAAHADQAHADAFAFQAFAFACAIQADAHAAAIIAABBIgLAAIgGgCQgCAAgBgEIgCgHIgIAGIgHAEIgIADIgKABQgGAAgGgBgAABAKIgLADQgEACgCADQgCADAAADQAAAGAEAEQADACAHAAQAGAAAGgCQAFgDAGgGIAAgRIgSACg");
	this.shape_5.setTransform(11.925,5.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAVAzIAAg7IABgFIAAgFIgEAIIgCADIgFAGIgGAIIgGAKIgUAcIgEAEQgCACgDAAIgPAAIAAhlIAZAAIAAA7IgBAFIAAAFIAEgIIACgDIAFgGIAGgIIAGgKIAUgcIAEgEQACgCADAAIAPAAIAABlg");
	this.shape_6.setTransform(1.325,5.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAgBFIAAgjIhVAAIAAhlIAZAAIAABTIAnAAIAAhTIAYAAIAABTIATAAIAAAtQAAAEgCACQgCACgDAAg");
	this.shape_7.setTransform(-10.275,7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQAxQgIgDgHgHQgHgHgEgLQgEgKAAgMQAAgLADgJQAEgJAGgHQAGgHAKgEQAJgEALAAQAJAAAJADQAIADAFAGQAHAGACAJQAEAIAAAMIgBAGQgBACgEAAIg+AAIACAOQACAFAFAEQADAEAFACQAEACAGAAQAGAAAEgCIAIgDIAGgDIAEgBQAEAAABACIAHAJQgEAFgGADIgKAFIgLADIgLABQgKAAgKgEgAgNgcQgGAGgCALIAuAAQAAgFgBgEQgCgEgDgDQgDgEgDgBQgEgCgGAAQgKAAgGAGg");
	this.shape_8.setTransform(-22.25,5.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAUAzIAAhTIgnAAIAABTIgZAAIAAhlIBZAAIAABlg");
	this.shape_9.setTransform(-33.325,5.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgOAxQgIgDgGgHQgHgHgDgKQgEgKAAgMQAAgLADgJQADgKAHgHQAGgHAJgEQAKgEALAAQALAAAJAEQAJADAGAHIgGAJIgCADIgDAAIgEgBIgEgCIgGgDIgJgBQgGAAgEACQgFADgDAEQgEAEgBAHQgCAGAAAHQAAAIACAGQACAHADAEQADAEAFADQAEACAGAAIAJgBIAGgEIAFgDIAEgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABIAHAJIgIAIIgKAFIgLADIgLABQgIAAgJgEg");
	this.shape_10.setTransform(-43.675,5.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag1BIIAAiPIAyAAQANAAAKACQALADAGAFQAGAFADAHQADAHAAAJQAAAFgBAFQgCAFgDAEQgDAEgFADQgFADgGADQAeAFAAAaQAAAJgEAIQgDAIgHAFQgHAGgKADQgJADgNAAgAgaAzIAaAAQAIAAAFgCQAFgBADgDQADgDACgEIABgJQAAgFgCgDQgBgEgDgDQgDgCgGgCQgFgBgHAAIgaAAgAgagJIAWAAQAMAAAIgFQAHgFAAgLQAAgLgHgFQgGgFgNAAIgXAAg");
	this.shape_11.setTransform(-59.675,3.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.6,-11.3,144.6,28);


(lib.Анимация15копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQAxQgIgDgHgHQgHgHgEgLQgEgKAAgMQAAgLADgJQAEgJAGgHQAGgHAKgEQAJgEALAAQAJAAAJADQAIADAFAGQAHAGACAJQAEAIAAAMIgBAGQgBACgEAAIg+AAIACAOQACAFAFAEQADAEAFACQAEACAGAAQAGAAAEgCIAIgDIAGgDIAEgBQAEAAABACIAHAJQgEAFgGADIgKAFIgLADIgLABQgKAAgKgEgAgNgcQgGAGgCALIAuAAQAAgFgBgEQgCgEgDgDQgDgEgDgBQgEgCgGAAQgKAAgGAGg");
	this.shape.setTransform(5.2,4.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAVAzIAAg7IABgFIAAgFIgEAIIgCADIgFAGIgGAIIgGAKIgUAcIgEAEQgCACgDAAIgPAAIAAhlIAZAAIAAA7IgBAFIAAAFIAEgIIACgDIAFgGIAGgIIAGgKIAUgcIAEgEQACgCADAAIAPAAIAABlg");
	this.shape_1.setTransform(-5.975,4.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAUAzIAAgtIgnAAIAAAtIgZAAIAAhlIAZAAIAAAnIAnAAIAAgnIAZAAIAABlg");
	this.shape_2.setTransform(-17.525,4.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAzQgFgCgEgDQgEgDgDgFQgCgGAAgHIABgIQACgEADgDIAHgGIAMgFIAQgDIAUgCIAAgHQAAgJgFgGQgEgEgIAAQgFgBgEACIgHADIgGADQgCABgDABIgFgBIgDgEIgEgIQASgQAYAAQAJAAAHADQAHADAFAFQAFAGACAGQADAIAAAIIAABAIgLAAIgGgBQgCgBgBgDIgCgHIgIAGIgHAEIgIADIgKABQgGAAgGgCgAABAKIgLADQgEACgCADQgCACAAAEQAAAGAEADQADADAHAAQAGAAAGgDQAFgDAGgFIAAgSIgSADg");
	this.shape_3.setTransform(-28.575,4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLAzIAAhTIglAAIAAgSIBhAAIAAASIglAAIAABTg");
	this.shape_4.setTransform(-38.475,4.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAVAzIAAg7IABgFIAAgFIgEAIIgCADIgFAGIgGAIIgGAKIgUAcIgEAEQgCACgDAAIgPAAIAAhlIAZAAIAAA7IgBAFIAAAFIAEgIIACgDIAFgGIAGgIIAGgKIAUgcIAEgEQACgCADAAIAPAAIAABlg");
	this.shape_5.setTransform(-49.425,4.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAUAzIAAhTIgnAAIAABTIgZAAIAAhlIBZAAIAABlg");
	this.shape_6.setTransform(-60.975,4.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.6,-12.1,81.69999999999999,28);


(lib.Анимация15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQAxQgJgDgHgHQgGgHgEgLQgEgKAAgMQAAgLADgJQAEgJAGgHQAHgHAJgEQAJgEAKAAQAKAAAIADQAIADAHAGQAGAGADAJQADAIAAAMIgBAGQgCACgDAAIg/AAIAEAOQABAFAEAEQAEAEAFACQAEACAGAAQAGAAAEgCIAIgDIAFgDIAFgBQADAAACACIAHAJQgEAFgFADIgLAFIgLADIgMABQgJAAgKgEgAgNgcQgGAGgCALIAuAAQAAgFgBgEQgCgEgDgDQgCgEgFgBQgEgCgFAAQgKAAgGAGg");
	this.shape.setTransform(41.35,5.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAzIAAhTIglAAIAAgSIBhAAIAAASIglAAIAABTg");
	this.shape_1.setTransform(30.875,5.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAVBIIAAg8IABgFIAAgFIgEAIIgCADIgFAGIgGAJIgGAKIgUAcIgEAEQgCACgDAAIgPAAIAAhlIAZAAIAAA7IgBAFIAAAFIAEgIIACgDIAFgGIAGgJIAGgKIAUgbIAEgEQACgCADAAIAPAAIAABlgAgLgsQgGgBgEgDQgFgDgCgEQgCgEAAgFQAAgDABgCQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIAPAAIAAAHIACAFQABABAAAAQABABAAAAQABAAAAAAQABABAAAAIAGABIAGgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABgBIACgFIAAgHIAPAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABACAAADQAAAFgCAEQgDAEgEADQgEADgGABQgGACgHAAQgHAAgGgCg");
	this.shape_2.setTransform(19.925,3.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYA0QgFgDgEgDQgEgEgDgEQgCgGAAgGIABgIQACgFADgDIAHgHIAMgEIAQgEIAUgCIAAgGQAAgJgFgFQgEgGgIAAQgFABgEABIgHADIgGADQgCACgDgBIgFAAIgDgEIgEgIQASgQAYAAQAJAAAHADQAHADAFAFQAFAFACAIQADAHAAAIIAABBIgLAAIgGgCQgCAAgBgEIgCgHIgIAGIgHAEIgIADIgKABQgGAAgGgBgAABAKIgLADQgEACgCADQgCADAAADQAAAGAEAEQADACAHAAQAGAAAGgCQAFgDAGgGIAAgRIgSACg");
	this.shape_3.setTransform(8.725,5.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgoAzIAAhlIAoAAQAKAAAHACQAHABAEAEQAFADACAFQACAEAAAFIgBAHQAAAEgDADIgFAGIgKAEIAJACQAFACADADQADADABAEQACAEAAAFQAAAIgDAGQgEAFgFAEQgFAEgIABQgHACgIAAgAgQAiIARAAQAIAAAFgDQAEgEAAgHIgBgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgDIgJgBIgRAAgAgQgHIAQAAIAGgBIAFgDQACgCABgDQACgDAAgDIgBgEIgDgEIgFgDIgHgBIgQAAg");
	this.shape_4.setTransform(-0.825,5.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYA0QgFgDgEgDQgEgEgDgEQgCgGAAgGIABgIQACgFADgDIAHgHIAMgEIAQgEIAUgCIAAgGQAAgJgFgFQgEgGgIAAQgFABgEABIgHADIgGADQgCACgDgBIgFAAIgDgEIgEgIQASgQAYAAQAJAAAHADQAHADAFAFQAFAFACAIQADAHAAAIIAABBIgLAAIgGgCQgCAAgBgEIgCgHIgIAGIgHAEIgIADIgKABQgGAAgGgBgAABAKIgLADQgEACgCADQgCADAAADQAAAGAEAEQADACAHAAQAGAAAGgCQAFgDAGgGIAAgRIgSACg");
	this.shape_5.setTransform(-11.475,5.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAmBFIAAgjIhMAAIAAAbQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgCACgDABIgQAAIAAg1IADAAIAHAAQADgBADgDQADgDADgGQADgFACgJQACgKACgOIACggIBFAAIAABTIATAAIAAAtQAAAEgCACQgCACgDAAgAgJgaIgDATIgFANIgFAKIAoAAIAAhAIgYAAIgDAWg");
	this.shape_6.setTransform(-22.625,7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUAxQgJgEgHgHQgGgGgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgHQAHgHAJgDQAKgEAKAAQAMAAAJAEQAJADAHAHQAHAHADAKQAEAKAAALQAAAMgEAKQgDAKgHAGQgHAHgJAEQgJAEgMAAQgKAAgKgEgAgSgYQgGAIAAAQQAAAQAGAJQAGAJAMAAQANAAAGgJQAGgIAAgRQAAgQgGgIQgGgJgNAAQgMAAgGAJg");
	this.shape_7.setTransform(-34.675,5.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AguBFIAAiHIAPAAQAFAAABAFIACAJQAHgHAIgFQAIgEAJAAQAJAAAHADQAHAEAFAGQAFAIADAJQACAKAAANQAAALgDAIQgDAKgGAIQgFAHgIAEQgJAEgKAAQgHAAgGgDQgHgDgEgEIAAAqgAgLgtQgGADgEAGIAAAtQAEAFAFACQAFACAGAAQAEAAAFgCQAEgCADgEQADgFACgFQACgHAAgIQAAgKgCgGQgBgGgDgEQgCgEgEgCQgEgCgFAAQgHABgFADg");
	this.shape_8.setTransform(-45.825,6.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAfBIIAAh7Ig+AAIAAB7IgbAAIAAiPIB0AAIAACPg");
	this.shape_9.setTransform(-59.2,3.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.6,-11.3,117.8,28);


(lib.Анимация14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Текст
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAeIAAg8IAKAAIAAAZIAMAAQAHgBAEACQAEACADACIAEAFIABAHQAAAEgCAEIgEAFIgHAEQgEABgFAAgAgMAWIANAAIAFAAIAEgCIACgEIABgEIAAgEIgDgEIgEgCIgGAAIgMAAg");
	this.shape.setTransform(21.575,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAeIAAgzIgYAAIAAgJIA5AAIAAAJIgYAAIAAAzg");
	this.shape_1.setTransform(15.225,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAeQgDAAgCgCQgDgCgBgEQgBgCAAgFQAAgDACgDQACgEAEgCQAFgDAHgBQAGgCAKAAIAAgEQAAgIgDgDQgDgDgFgBIgGABIgFACIgDADIgDABIgCgBIgBgBIgCgEQAFgEAGgDQAGgCAFgBQAFAAAEACQAEACAEADQACADABAFQACADAAAGIAAAlIgFAAIgCAAIgBgCIgCgGIgEAEIgGADIgEACIgGAAIgHgBgAABAEQgFABgDABQgDACgCADQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIABAEIACADIADABIAEABIAFgBIAEgCIAEgCIADgEIAAgMIgMABg");
	this.shape_2.setTransform(8.85,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZApIAAgVIgyAAIAAASIAAACIgDABIgGAAIAAgdIACAAIAEAAIAEgDIADgGQACgDABgFIADgPIACgUIAlAAIAAA0IALAAIAAAZIgBADIgCABgAgGgPIgDANIgDAIIgEAGIAeAAIAAgrIgTAAIgBAQg");
	this.shape_3.setTransform(2.125,2.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAdQgFgCgEgEQgEgEgCgGQgCgFAAgIQAAgGACgGQACgGAEgEQAEgEAFgCQAFgCAGgBQAGABAGACQAGACADAEQAEAEACAGQACAGAAAGQAAAIgCAFQgCAGgEAEQgDAEgGACQgGADgGgBQgGABgFgDgAgHgVIgFAFQgDADgBAFIgBAIQAAALAFAGQAEAGAIAAQAJAAAFgGQAEgGAAgLQAAgJgEgHQgFgGgJAAQgEAAgDABg");
	this.shape_4.setTransform(-5.15,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaApIAAhQIAHAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIABAHQAEgEAFgDQAFgDAGAAQAFAAAEACQAFACADAEQADAEABAGQACAFAAAIQAAAHgCAEQgCAGgDAEQgEAFgEACQgFADgGAAQgFAAgEgCQgEgCgDgEIAAAbgAgIgdQgEACgDAFIAAAcQADAEADACQAEABAEAAQAIAAAEgGQAFgGAAgKIgBgKIgDgHIgFgEIgHgBQgEAAgEACg");
	this.shape_5.setTransform(-11.925,1.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAVArIAAhMIgqAAIAABMIgLAAIAAhVIBBAAIAABVg");
	this.shape_6.setTransform(-20.075,-0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Кнопка
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#06A6FA").s().p("Ao2CoQhIAAg0gxQg0gxAAhGIAAAAQAAhEA0gyQA0gxBIAAIRtAAQBIAAA0AxQA0AyAABEIAAAAQAABGg0AxQg0AxhIAAg");
	this.shape_7.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.2,-16.7,148.5,33.5);


(lib.Анимация13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Маска банки (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgMKMQg6gCgdgFQgugEhSgRQg2gLg3gpQg8gsgHgrIgDh1IgDikQgFi7ABhqQAAjEAYhIQAOgrAighIBEg5QgSgOgBgvIAChTQAFgBBAgGQBGgHAjgCQBegEB1AIQCPAIAlAUIACAvIACAoQgDACgFAFIgJAHQAGAGA8A4QArApAPAhQARAlAHA8QAEArAABHIAAKNQgMAog9AqQgyAjg4AUQhPAchMADIg2ABIgmAAg");
	mask.setTransform(-0.1259,0.2863);

	// Банка
	this.instance = new lib.b_1();
	this.instance.parent = this;
	this.instance.setTransform(-42.05,-65.8,0.47,0.47);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-64.9,82.8,130.4);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Правая рука
	this.instance = new lib.Анимация15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(28,103.85,0.504,0.504,0,0,0,-81,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:28.6,y:105.45},62,cjs.Ease.quadInOut).to({x:27.8,y:103.65},51,cjs.Ease.quadInOut).to({regX:-81.2,regY:-0.1,scaleX:0.5039,scaleY:0.5039,rotation:-10.1064,x:27,y:108.55},49,cjs.Ease.quadInOut).to({regX:-81,regY:-0.2,scaleX:0.504,scaleY:0.504,rotation:0,x:28.3,y:103.95},46,cjs.Ease.quadInOut).to({regY:-0.1,rotation:-6.9877,x:30.25,y:102.2},13,cjs.Ease.quadInOut).to({regY:-0.2,rotation:0,x:31.15,y:110.6},14,cjs.Ease.quadInOut).to({regY:-0.1,scaleX:0.5039,scaleY:0.5039,rotation:-11.7206,x:28.8,y:105.05},15,cjs.Ease.quadInOut).to({regY:0.1,rotation:-7.2765,x:28.75,y:105.1},48,cjs.Ease.quadInOut).wait(1).to({regX:0.5,regY:1.8,scaleX:0.504,scaleY:0.504,x:69.6,y:100.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-81,regY:0.1,scaleX:0.5039,scaleY:0.5039,x:28.75,y:105.1},0).to({_off:true},1).wait(39));

	// Палец
	this.instance_1 = new lib.Анимация17("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(97.1,98.55,0.504,0.504,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.3,rotation:-4.7258,x:97.7,y:100.15},62,cjs.Ease.quadInOut).to({regX:0.2,rotation:0,x:96.9,y:98.35},51,cjs.Ease.quadInOut).to({regX:0.6,regY:0.3,scaleX:0.5039,scaleY:0.5039,rotation:-22.4992,x:92.45,y:91.5},49,cjs.Ease.quadInOut).to({regX:0.4,regY:0.2,scaleX:0.504,scaleY:0.504,rotation:0.0139,x:96.9,y:99.25},46,cjs.Ease.quadInOut).to({regX:0.1,regY:0.3,rotation:-16.4816,x:95.7,y:88.35},13,cjs.Ease.quadInOut).to({regX:0.3,regY:0.1,rotation:2.5232,x:99.15,y:106.45},14,cjs.Ease.quadInOut).to({regY:0.5,scaleX:0.5039,scaleY:0.5039,rotation:-39.2231,x:93.05,y:86.5},15,cjs.Ease.quadInOut).to({rotation:-33.2748,x:93.85,y:91.25},48,cjs.Ease.quadInOut).wait(1).to({regX:1.1,regY:-0.5,rotation:-33.2634,y:90.6},0).wait(1).to({scaleX:0.5038,scaleY:0.5038,rotation:-33.2444},0).wait(1).to({rotation:-33.2175},0).wait(1).to({scaleX:0.5037,scaleY:0.5037,rotation:-33.1822,y:90.55},0).wait(1).to({rotation:-33.1381,y:90.5},0).wait(1).to({scaleX:0.5035,scaleY:0.5035,rotation:-33.0849,y:90.45},0).wait(1).to({scaleX:0.5034,scaleY:0.5034,rotation:-33.022,y:90.4},0).wait(1).to({scaleX:0.5033,scaleY:0.5033,rotation:-32.9492,y:90.35},0).wait(1).to({regX:0.3,regY:0.5,scaleX:0.5031,scaleY:0.5031,rotation:-32.8659,y:90.9},0).to({_off:true},1).wait(39));

	// Левая рука 2
	this.instance_2 = new lib.Анимация19("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(128.7,157.8,0.504,0.504,0,0,0,-24.8,68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:68.8,scaleX:0.5039,scaleY:0.5039,rotation:1.7039,y:157.95},62,cjs.Ease.quadInOut).to({regY:68.5,scaleX:0.504,scaleY:0.504,rotation:0,y:157.8},51,cjs.Ease.quadInOut).to({regY:68.7,rotation:-2.1916,y:157.95},49,cjs.Ease.quadInOut).to({regY:68.5,rotation:0,y:157.8},46,cjs.Ease.quadInOut).to({regX:-24.7,rotation:-2.7212,y:157.85},13,cjs.Ease.quadInOut).to({regX:-24.1,regY:69.3,scaleX:0.5039,scaleY:0.5039,rotation:-1.5323,x:129.1,y:158.9},14,cjs.Ease.quadInOut).to({regX:-24.8,regY:68.5,scaleX:0.504,scaleY:0.504,rotation:0,x:128.7,y:157.8},15,cjs.Ease.quadInOut).wait(57).to({startPosition:0},0).to({_off:true},1).wait(39));

	// Левая рука 1
	this.instance_3 = new lib.Анимация21("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(116.6,45.95,0.504,0.504,0,0,0,-36.6,-65.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-2.2367,x:116.35,y:46.5},62,cjs.Ease.quadInOut).to({rotation:0,x:117,y:45.55},51,cjs.Ease.quadInOut).to({regY:-65,scaleX:0.5039,scaleY:0.5039,rotation:0.5361,x:115.45,y:46.3},49,cjs.Ease.quadInOut).to({regY:-65.2,scaleX:0.504,scaleY:0.504,rotation:0,x:116.6,y:45.95},46,cjs.Ease.quadInOut).to({regX:-36.4,regY:-65.3,scaleX:0.5039,scaleY:0.5039,rotation:6.1375,x:120.4,y:44.5},13,cjs.Ease.quadInOut).to({regX:-36.6,regY:-65,rotation:0.0226,x:116.05,y:49},14,cjs.Ease.quadInOut).to({regY:-65.2,scaleX:0.504,scaleY:0.504,rotation:0,x:116.6,y:45.95},15,cjs.Ease.quadInOut).wait(57).to({startPosition:0},0).to({_off:true},1).wait(39));

	// Банка Черная
	this.instance_4 = new lib.Анимация13("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(49.55,141.15,0.504,0.504,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(208).to({startPosition:0},0).to({regX:0.3,regY:0.5,scaleX:0.55,scaleY:0.55,y:138.15},13,cjs.Ease.quadInOut).to({regX:0.1,regY:0.2,scaleX:0.504,scaleY:0.504,y:141.15,alpha:0},13,cjs.Ease.quadInOut).wait(73).to({startPosition:0},0).to({_off:true},1).wait(39));

	// Стол
	this.instance_5 = new lib.table();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-41,152,0.2368,0.2368);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(307).to({_off:true},1).wait(39));

	// Шейкер
	this.instance_6 = new lib.Анимация9("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(209.85,95.4,0.504,0.504,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(169).to({startPosition:0},0).to({regY:0.2,scaleX:0.5292,scaleY:0.5292,y:94.35},14,cjs.Ease.quadInOut).wait(1).to({regX:0.1,regY:0,scaleX:0.5283,scaleY:0.5283,x:209.8,y:94.25,alpha:0.9831},0).wait(1).to({scaleX:0.5265,scaleY:0.5265,y:94.3,alpha:0.9465},0).wait(1).to({scaleX:0.5235,scaleY:0.5235,y:94.35,alpha:0.888},0).wait(1).to({scaleX:0.5194,scaleY:0.5194,y:94.4,alpha:0.8053},0).wait(1).to({scaleX:0.5139,scaleY:0.5139,y:94.55,alpha:0.6961},0).wait(1).to({scaleX:0.507,scaleY:0.507,y:94.65,alpha:0.5594},0).wait(1).to({scaleX:0.4988,scaleY:0.4988,y:94.85,alpha:0.3953},0).wait(1).to({scaleX:0.4893,scaleY:0.4893,y:95,alpha:0.2067},0).wait(1).to({regX:0.2,regY:0.2,scaleX:0.479,scaleY:0.479,x:209.85,y:95.35,alpha:0},0).wait(115).to({startPosition:0},0).to({_off:true},1).wait(39));

	// Тело
	this.instance_7 = new lib.Анимация23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(82.6,156.05,0.504,0.504,0,0,0,-0.1,168.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:168.5,scaleX:0.5039,scaleY:0.5039,rotation:0.7617,x:82.55,y:158.4},62,cjs.Ease.quadInOut).to({regY:168.3,scaleX:0.504,scaleY:0.504,rotation:0,x:82.6,y:156.05},51,cjs.Ease.quadInOut).to({regY:168.4,rotation:-1.4487,y:158.5},44,cjs.Ease.quadInOut).to({regY:168.3,rotation:0,y:156.05},51,cjs.Ease.quadInOut).to({regX:0,regY:168.4,rotation:1.4487,x:82.65,y:155.15},13,cjs.Ease.quadInOut).to({regX:-0.1,regY:168.5,scaleX:0.5039,scaleY:0.5039,rotation:-1.7039,x:85.95,y:161.4},14,cjs.Ease.quadInOut).to({regY:168.3,scaleX:0.504,scaleY:0.504,rotation:0,x:82.6,y:156.05},15,cjs.Ease.quadInOut).wait(57).to({startPosition:0},0).to({_off:true},1).wait(39));

	// Голубая банка бол
	this.instance_8 = new lib.Анимация12("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(195.9,85.55,0.504,0.504,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(144).to({startPosition:0},0).to({scaleX:0.5292,scaleY:0.5292,y:84.05},13,cjs.Ease.quadInOut).to({regX:0.2,scaleX:0.4788,scaleY:0.4788,y:86.6,alpha:0},12,cjs.Ease.quadInOut).wait(138).to({startPosition:0},0).to({_off:true},1).wait(39));

	// Голубая банка мини
	this.instance_9 = new lib.Символ2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(152.2,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(307).to({startPosition:0},0).to({_off:true},1).wait(39));

	// Желтая Банка мини
	this.instance_10 = new lib.Анимация3("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(173,16.4,0.504,0.504,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(111).to({startPosition:0},0).to({regX:0.3,regY:0.2,scaleX:0.5291,scaleY:0.5291,y:15.4},13,cjs.Ease.quadInOut).to({regX:0.1,regY:0,scaleX:0.4788,scaleY:0.4788,y:17.9,alpha:0},13,cjs.Ease.quadInOut).wait(170).to({startPosition:0},0).to({_off:true},1).wait(39));

	// Желтая банка бол
	this.instance_11 = new lib.Символ6();
	this.instance_11.parent = this;
	this.instance_11.setTransform(171.4,85.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(307).to({_off:true},1).wait(39));

	// Банка Фиолетовая
	this.instance_12 = new lib.Анимация5("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(142.15,79.65,0.504,0.504,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(124).to({startPosition:0},0).to({regY:0.2,scaleX:0.5292,scaleY:0.5292,y:78.15},17,cjs.Ease.quadInOut).to({regY:0.1,scaleX:0.4788,scaleY:0.4788,y:81.65,alpha:0},12,cjs.Ease.quadInOut).wait(154).to({startPosition:0},0).to({_off:true},1).wait(39));

	// Полка
	this.instance_13 = new lib.bg();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-41,-23,0.34,0.3334);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(307).to({_off:true},1).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-23,310.5,209.4);


// stage content:
(lib.Avito_240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Белая заливка
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(125,200,1,1,0,0,0,135,210);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(288).to({_off:false},0).to({alpha:1},16,cjs.Ease.quadInOut).wait(4));

	// Маска Шар (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AM2DCQiRiRAAjLQAAjMCRiRQCQiQDMAAQDNAACQCQQCQCRAADMQAADLiQCRQiQCQjNAAQjMAAiQiQg");
	var mask_graphics_1 = new cjs.Graphics().p("AMvDIQiRiRAAjNQAAjOCRiRQCSiRDNAAQDOAACRCRQCSCRAADOQAADNiSCRQiRCRjOAAQjNAAiSiRg");
	var mask_graphics_2 = new cjs.Graphics().p("AMcDdQiViUAAjSQAAjSCViUQCUiVDSAAQDTAACUCVQCVCUAADSQAADSiVCUQiUCVjTAAQjSAAiUiVg");
	var mask_graphics_3 = new cjs.Graphics().p("AL4ECQiaiaAAjZQAAjaCaiaQCbibDaAAQDaAACaCbQCaCaAADaQAADZiaCaQiaCbjaAAQjaAAibibg");
	var mask_graphics_4 = new cjs.Graphics().p("ALDE7QijijAAjlQAAjnCjiiQCjijDmAAQDmAACjCjQCjCiAADnQAADlijCjQijCijmAAQjmAAijiig");
	var mask_graphics_5 = new cjs.Graphics().p("AJ6GIQiviuAAj2QAAj3CvivQCuiuD3AAQD3AACvCuQCuCvAAD3QAAD2iuCuQivCvj3AAQj3AAiuivg");
	var mask_graphics_6 = new cjs.Graphics().p("AIaHLQi+i+AAkNQAAkMC+i+QC+i+EMAAQENAAC+C+QC+C+AAEMQAAENi+C+Qi+C+kNAAQkMAAi+i+g");
	var mask_graphics_7 = new cjs.Graphics().p("AGhH5QjRjRAAkoQAAknDRjRQDSjREoAAQEoAADRDRQDRDRAAEnQAAEojRDRQjRDRkoAAQkoAAjSjRg");
	var mask_graphics_8 = new cjs.Graphics().p("AERIxQjojoAAlJQAAlIDojoQDpjoFIAAQFJAADoDoQDpDoAAFIQAAFJjpDoQjoDolJAAQlIAAjpjog");
	var mask_graphics_9 = new cjs.Graphics().p("ABuJwQkCkCAAluQAAltECkCQECkDFuAAQFuAAECEDQEDECAAFtQAAFukDECQkCEDluAAQluAAkCkDg");
	var mask_graphics_10 = new cjs.Graphics().p("AhBK0QkekeAAmWQAAmVEekeQEekfGWAAQGVAAEfEfQEfEeAAGVQAAGWkfEeQkfEfmVAAQmWAAkekfg");
	var mask_graphics_11 = new cjs.Graphics().p("AjwL4Qk7k6AAm+QAAm9E7k6QE6k7G9AAQG+AAE6E7QE7E6AAG9QAAG+k7E6Qk6E7m+AAQm9AAk6k7g");
	var mask_graphics_12 = new cjs.Graphics().p("AmUM4QlVlVAAnjQAAniFVlVQFVlVHiAAQHiAAFWFVQFVFVAAHiQAAHjlVFVQlWFVniAAQniAAlVlVg");
	var mask_graphics_13 = new cjs.Graphics().p("AokNwQlsltAAoDQAAoCFsltQFtlsICAAQIDAAFsFsQFsFtAAICQAAIDlsFtQlsFsoDAAQoCAAltlsg");
	var mask_graphics_14 = new cjs.Graphics().p("AqcOeQmAl/AAofQAAoeGAl/QGAmAIdAAQIfAAF/GAQF/F/AAIeQAAIfl/F/Ql/GAofAAQodAAmAmAg");
	var mask_graphics_15 = new cjs.Graphics().p("Ar8PDQmPmPAAo0QAAozGPmPQGPmPIzAAQI1AAGOGPQGPGPAAIzQAAI0mPGPQmOGPo1AAQozAAmPmPg");
	var mask_graphics_16 = new cjs.Graphics().p("AtGPgQmambAApFQAApEGambQGbmaJEAAQJFAAGbGaQGaGbAAJEQAAJFmaGbQmbGapFAAQpEAAmbmag");
	var mask_graphics_17 = new cjs.Graphics().p("At7P0QmjmjAApRQAApQGjmjQGkmkJPAAQJSAAGjGkQGjGjAAJQQAAJRmjGjQmjGkpSAAQpPAAmkmkg");
	var mask_graphics_18 = new cjs.Graphics().p("AueQCQmpmpAApZQAApYGpmpQGpmpJYAAQJZAAGpGpQGpGpAAJYQAAJZmpGpQmpGppZAAQpYAAmpmpg");
	var mask_graphics_19 = new cjs.Graphics().p("AuyQKQmsmsAApeQAApdGsmsQGsmsJdAAQJdAAGsGsQGsGsAAJdQAAJemsGsQmsGspdAAQpdAAmsmsg");
	var mask_graphics_20 = new cjs.Graphics().p("Au5QMQmtmtAApfQAApeGtmtQGumtJdAAQJgAAGtGtQGtGtAAJeQAAJfmtGtQmtGtpgAAQpdAAmumtg");
	var mask_graphics_21 = new cjs.Graphics().p("Au3QLQmtmsAApfQAApeGtmsQGtmtJdAAQJfAAGsGtQGtGsAAJeQAAJfmtGsQmsGtpfAAQpdAAmtmtg");
	var mask_graphics_22 = new cjs.Graphics().p("AuyQIQmrmrAApdQAApcGrmrQGsmrJbAAQJdAAGrGrQGsGrAAJcQAAJdmsGrQmrGrpdAAQpbAAmsmrg");
	var mask_graphics_23 = new cjs.Graphics().p("AuoQCQmompAApZQAApYGompQGqmpJYAAQJZAAGpGpQGoGpAAJYQAAJZmoGpQmpGppZAAQpYAAmqmpg");
	var mask_graphics_24 = new cjs.Graphics().p("AuYP5QmlmlAApUQAApTGlmlQGmmlJSAAQJUAAGlGlQGlGlAAJTQAAJUmlGlQmlGlpUAAQpSAAmmmlg");
	var mask_graphics_25 = new cjs.Graphics().p("AuFPuQmhmgAApOQAApNGhmgQGhmhJMAAQJNAAGhGhQGgGgAAJNQAAJOmgGgQmhGhpNAAQpMAAmhmhg");
	var mask_graphics_26 = new cjs.Graphics().p("At2PlQmcmdAApIQAApHGcmdQGemdJGAAQJIAAGdGdQGdGdAAJHQAAJImdGdQmdGdpIAAQpGAAmemdg");
	var mask_graphics_27 = new cjs.Graphics().p("AtrPfQmbmaAApFQAApEGbmaQGamaJDAAQJFAAGaGaQGbGaAAJEQAAJFmbGaQmaGapFAAQpDAAmamag");
	var mask_graphics_28 = new cjs.Graphics().p("AtmPcQmZmZAApDQAApCGZmZQGZmZJCAAQJCAAGZGZQGZGZAAJCQAAJDmZGZQmZGZpCAAQpCAAmZmZg");
	var mask_graphics_29 = new cjs.Graphics().p("AtkPbQmZmZAApCQAApBGZmZQGZmYJBAAQJCAAGYGYQGZGZAAJBQAAJCmZGZQmYGYpCAAQpBAAmZmYg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:166.3227,y:-64.7977}).wait(1).to({graphics:mask_graphics_1,x:166.2825,y:-64.7226}).wait(1).to({graphics:mask_graphics_2,x:166.1543,y:-64.4828}).wait(1).to({graphics:mask_graphics_3,x:165.925,y:-64.054}).wait(1).to({graphics:mask_graphics_4,x:165.5799,y:-63.4086}).wait(1).to({graphics:mask_graphics_5,x:165.1031,y:-62.517}).wait(1).to({graphics:mask_graphics_6,x:164.4796,y:-57.8487}).wait(1).to({graphics:mask_graphics_7,x:163.6995,y:-48.3458}).wait(1).to({graphics:mask_graphics_8,x:162.7654,y:-36.9671}).wait(1).to({graphics:mask_graphics_9,x:161.7024,y:-24.0177}).wait(1).to({graphics:mask_graphics_10,x:160.564,y:-10.1514}).wait(1).to({graphics:mask_graphics_11,x:159.4257,y:3.715}).wait(1).to({graphics:mask_graphics_12,x:158.3627,y:16.6643}).wait(1).to({graphics:mask_graphics_13,x:157.4286,y:28.0431}).wait(1).to({graphics:mask_graphics_14,x:156.6485,y:37.5459}).wait(1).to({graphics:mask_graphics_15,x:156.025,y:45.1408}).wait(1).to({graphics:mask_graphics_16,x:155.5482,y:50.9488}).wait(1).to({graphics:mask_graphics_17,x:155.2031,y:55.1527}).wait(1).to({graphics:mask_graphics_18,x:154.9738,y:57.9458}).wait(1).to({graphics:mask_graphics_19,x:154.8456,y:59.5079}).wait(1).to({graphics:mask_graphics_20,x:154.7581,y:59.95}).wait(1).to({graphics:mask_graphics_21,x:154.6946,y:59.95}).wait(1).to({graphics:mask_graphics_22,x:154.4746,y:59.95}).wait(1).to({graphics:mask_graphics_23,x:154.0487,y:59.95}).wait(1).to({graphics:mask_graphics_24,x:153.3979,y:59.95}).wait(1).to({graphics:mask_graphics_25,x:152.6348,y:59.95}).wait(1).to({graphics:mask_graphics_26,x:151.984,y:59.95}).wait(1).to({graphics:mask_graphics_27,x:151.5581,y:59.95}).wait(1).to({graphics:mask_graphics_28,x:151.3381,y:59.95}).wait(1).to({graphics:mask_graphics_29,x:151.297,y:59.95}).wait(279));

	// 12+
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgDAeIAAgaIgZAAIAAgHIAZAAIAAgaIAHAAIAAAaIAZAAIAAAHIgZAAIAAAag");
	this.shape.setTransform(229.625,21.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgcArIAAgDIABgCIABgCIAbgdIAGgGIAFgFIADgHIABgHQAAgEgBgDIgDgFIgFgCIgGgBIgFABIgFACIgEAFIgCAEIgCAEIgDAAIgGgBQABgGACgFQADgEAEgDIAIgFQAFgCAEABQAGgBAEACQAFACAEADQADADACAEQACAFAAAFQAAAGgBADIgEAIIgGAGIgHAIIgVAXIAEgBIAFgBIAcAAIADABIABADIAAAGg");
	this.shape_1.setTransform(222.625,20.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgUArIAAgIIATAAIAAg6IAAgFIgPANIgCABIgBAAIgBgBIgBgBIgEgEIAZgWIAIAAIAABNIARAAIAAAIg");
	this.shape_2.setTransform(215.8,20.85);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(308));

	// Вижуал
	this.instance_1 = new lib.Символ1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.8,20.25);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(308));

	// Найдут вас быстрее
	this.instance_2 = new lib.Анимация17копия3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(121.35,242.4,1.04,1.04,0,0,0,3.4,-0.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(210).to({_off:false},0).to({regY:-0.6,scaleX:1.21,scaleY:1.21,y:242.3,alpha:1},13,cjs.Ease.quadInOut).to({regX:3.3,scaleX:1.1,scaleY:1.1,x:121.3,y:242.35},9,cjs.Ease.quadInOut).wait(56).to({regX:0,regY:0,x:117.65,y:243},0).to({alpha:0},9,cjs.Ease.quadInOut).wait(11));

	// Покупатели
	this.instance_3 = new lib.Анимация15копия3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(81.15,218.3,1.04,1.04,0,0,0,-9.6,2.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(198).to({_off:false},0).to({scaleX:1.21,scaleY:1.21,alpha:1},12,cjs.Ease.quadInOut).to({scaleX:1.0999,scaleY:1.0999},9,cjs.Ease.quadInOut).wait(68).to({regX:0.1,regY:0.1,x:91.8,y:215.55},0).to({alpha:0},9,cjs.Ease.quadInOut).wait(12));

	// Категории
	this.instance_4 = new lib.Анимация17копия2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(72.6,242.4,1.04,1.04,0,0,0,-40.9,-0.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(124).to({_off:false},0).to({regX:-41,regY:-0.6,scaleX:1.21,scaleY:1.21,x:72.55,y:242.3,alpha:1},13,cjs.Ease.quadInOut).to({scaleX:1.1,scaleY:1.1,y:242.35},9,cjs.Ease.quadInOut).wait(47).to({regX:0,regY:0,x:117.65,y:243},0).to({alpha:0},9,cjs.Ease.quadInOut).to({_off:true},76).wait(30));

	// В специальной
	this.instance_5 = new lib.Анимация15копия2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(95.45,218.3,1.04,1.04,0,0,0,3.4,2.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(112).to({_off:false},0).to({scaleX:1.21,scaleY:1.21,x:95.4,alpha:1},12,cjs.Ease.quadInOut).to({scaleX:1.0999,scaleY:1.0999,x:95.45},9,cjs.Ease.quadInOut).wait(59).to({regX:0.1,regY:0.1,x:91.8,y:215.55},0).to({alpha:0},9,cjs.Ease.quadInOut).to({_off:true},77).wait(30));

	// Питание
	this.instance_6 = new lib.Анимация15копия("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(66.6,268.7,1.04,1.04,0,0,0,-23.1,4.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50).to({_off:false},0).to({regX:-23,scaleX:1.21,scaleY:1.21,x:66.65,y:268.75,alpha:1},12,cjs.Ease.quadInOut).to({regX:-23.1,scaleX:1.0999,scaleY:1.0999,x:66.6,y:268.7},9,cjs.Ease.quadInOut).wait(36).to({regX:0.1,regY:0.1,x:92.1,y:264.2},0).to({alpha:0},9,cjs.Ease.quadInOut).to({_off:true},162).wait(30));

	// Спортивное
	this.instance_7 = new lib.Анимация17копия("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(75.95,247,1.04,1.04,0,0,0,-37.9,3.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(37).to({_off:false},0).to({regY:3.6,scaleX:1.21,scaleY:1.21,y:246.95,alpha:1},13,cjs.Ease.quadInOut).to({scaleX:1.1,scaleY:1.1},9,cjs.Ease.quadInOut).wait(47).to({regX:0,regY:0,x:117.65,y:243},0).to({alpha:0},9,cjs.Ease.quadInOut).to({_off:true},163).wait(30));

	// Продавайте
	this.instance_8 = new lib.Анимация15_1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(66.3,220.05,1.04,1.04,0,0,0,-23.1,4.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(25).to({_off:false},0).to({regX:-23,scaleX:1.21,scaleY:1.21,x:66.35,y:220.1,alpha:1},12,cjs.Ease.quadInOut).to({regX:-23.1,scaleX:1.0999,scaleY:1.0999,x:66.3,y:220.05},9,cjs.Ease.quadInOut).wait(59).to({regX:0.1,regY:0.1,x:91.8,y:215.55},0).to({alpha:0},9,cjs.Ease.quadInOut).to({_off:true},164).wait(30));

	// Кнопка
	this.instance_9 = new lib.Анимация14("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(119.95,313.1,1.2424,1.2424,0,0,0,0.1,0.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(62).to({_off:false},0).to({scaleX:1.3732,scaleY:1.3732,x:120,alpha:1},12,cjs.Ease.quadInOut).to({scaleX:1.3078,scaleY:1.3078,y:313.15},11,cjs.Ease.quadInOut).wait(223));

	// Тень
	this.instance_10 = new lib.Символ2копия();
	this.instance_10.parent = this;
	this.instance_10.setTransform(120.15,329.1,0.7439,0.6044,0,0,0,5.4,2);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;
	this.instance_10.filters = [new cjs.BlurFilter(19, 19, 2)];
	this.instance_10.cache(-96,-21,202,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(66).to({_off:false},0).to({regX:5.3,regY:2.1,scaleX:0.8614,scaleY:0.9991,x:120,y:329.2,alpha:1},8,cjs.Ease.quadInOut).to({regX:4.4,regY:2.4,scaleX:0.9606,scaleY:0.9364,x:120.2,y:334.2,alpha:0.7891},11,cjs.Ease.quadInOut).wait(223));

	// Логотип
	this.instance_11 = new lib.Анимация16("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(119.35,369.05);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.instance_12 = new lib.Анимация24("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(119.35,369,1.05,1.05);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(74).to({_off:false},0).to({_off:true,scaleX:1.05,scaleY:1.05,y:369,alpha:1},11).wait(223));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(74).to({_off:false},11).to({scaleX:1,scaleY:1,y:369.05},9).wait(214));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,294.3,410);
// library properties:
lib.properties = {
	id: 'AF7F373C084C48089EFEEA590429F350',
	width: 240,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Avito_240x400_atlas_.jpg", id:"Avito_240x400_atlas_"}
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
an.compositions['AF7F373C084C48089EFEEA590429F350'] = {
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