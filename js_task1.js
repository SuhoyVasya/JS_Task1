
lazyeater = {
	recursionControl: [],

	eat:function(feed){
		this.stomach=feed;
		return "omnomnom";
	},
	
	

	getArgs:function(func){
		num = func.length;
		var array = [];
		if(num==0)
		{
			return array;
		}
		code = func.toString();
		pos = code.indexOf("(")+1;
		code =  code.substr(pos);	
		for(var i = 0; i < num-1;i++)
		{
			pos = code.indexOf(",");
			str = code.substr(0,pos);
			code = code.substr(pos+1).trim();
			array[i] = str;
		}
		pos = code.indexOf(")");
		str = code.substr(0,pos);
		array[i] = str;
		return array;
	},
	
	digestFood:function(obj,funcName,arguments){	
		for(var k=0;k<arguments.length;k++)
		{
			arguments[k]=obj[arguments[k]];		
		}	
		result = obj[funcName].apply(obj,arguments);		
		return result;
	},
	
	isAlreadyDigesting:function(food){	
		maxIndex=this.recursionControl.length;
		for(var l=0;l<maxIndex;l++){
			if(this.recursionControl[l]===food){
				return true;
			}		
		}
		this.recursionControl[maxIndex]=food;
		return false;
	},

	calc:function(obj, name){		
		if((typeof obj[name])=="function"){
			if(this.isAlreadyDigesting(name)){
				recursionControl=[];
				throw "ÖÈÊËÈ×ÅÑÊÀß ÇÀÂÈÑÈÌÎÑÒÜ! ß ÎÒÊÀÇÛÂÀÞÑÜ ÐÀÁÎÒÀÒÜ Â ÒÀÊÈÕ ÓÑËÎÂÈßÕ!!!"
			}		
			var args = this.getArgs(obj[name]);		
			if(args.length>0)
			{						
				for(var j=0;j<args.length;j++)
				{ 				
					this.calc(obj,args[j]);
				}
			}		
			obj[name]=this.digestFood(obj,name,args);
			return obj[name];			
		}
		else{
			return  obj[name];
		}
	},
	

	crap:function(food){
		result = this.calc(this.stomach,food);
		this.recursionControl=[];
		return result;
	},
	
	
	
	
}

eagereater = {
	recursionControl: [],

	eat:function(food){
		this.stomach=food;
		for(var everyBitOfFood in this.stomach){
			this.calc(this.stomach,everyBitOfFood);
		}
		this.recursionControl=[];	
		return "omnomnom";		
	},
	
	

	getArgs:function(func){
		num = func.length;
		var array = [];
		if(num==0)
		{
			return array;
		}
		code = func.toString();
		pos = code.indexOf("(")+1;
		code =  code.substr(pos);	
		for(var i = 0; i < num-1;i++)
		{
			pos = code.indexOf(",");
			str = code.substr(0,pos);
			code = code.substr(pos+1).trim();
			array[i] = str;
		}
		pos = code.indexOf(")");
		str = code.substr(0,pos);
		array[i] = str;
		return array;
	},
	
	digestFood:function(obj,funcName,arguments){	
		for(var k=0;k<arguments.length;k++)
		{
			arguments[k]=obj[arguments[k]];		
		}	
		result = obj[funcName].apply(obj,arguments);		
		return result;
	},
	
	isAlreadyDigesting:function(food){	
		maxIndex=this.recursionControl.length;
		for(var l=0;l<maxIndex;l++){
			if(this.recursionControl[l]===food){
				return true;
			}		
		}
		this.recursionControl[maxIndex]=food;
		return false;
	},

	calc:function(obj, name){		
		if((typeof obj[name])=="function"){
			if(this.isAlreadyDigesting(name)){
				recursionControl=[];
				throw "ÖÈÊËÈ×ÅÑÊÀß ÇÀÂÈÑÈÌÎÑÒÜ! ß ÎÒÊÀÇÛÂÀÞÑÜ ÐÀÁÎÒÀÒÜ Â ÒÀÊÈÕ ÓÑËÎÂÈßÕ!!!"
			}		
			var args = this.getArgs(obj[name]);		
			if(args.length>0)
			{						
				for(var j=0;j<args.length;j++)
				{ 				
					this.calc(obj,args[j]);
				}
			}		
			obj[name]=this.digestFood(obj,name,args);
			return obj[name];			
		}
		else{
			return  obj[name];
		}
	},
	

	crap:function(bitOfFood){
		result = this.stomach[bitOfFood];
		this.recursionControl=[];
		return result;
	},
	
	
	
	
}

const amazingFood = {
  n: (xs) => xs.length,
  m: (xs, n) => xs.reduce((store, item) => item + store, 0) / n,
  m2: (xs, n) => xs.reduce((store, item) => item * store, 1) / n,
  v: (m, m2) => m*m - m2,
  xs: () => [1, 2, 3]
}


const badFood = {
  n: (xs) => {},  
  xs: (n) => {}
}


lazyeater.eat(amazingFood);
lazyeater.crap("v");

eagereater.eat(badFood);




