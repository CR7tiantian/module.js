var module = function() {
	var obj = {};
	obj.name = "javascript";
	obj.getName = function() {
		return this.name;
	};
	return obj;
}();
alert(module.name);  // "javascript"
alert(module.getName()); // "javascript";


//松耦合扩展，这里必须用var， 且后面传参必须是"module1||{}",,,,而不能是"module1"
var module1 = (function(my) {
	my.age = 23;
	return my;
})(module1||{});
alert(module1.age); //23
