var obj = {name:"Agus"};

var greeting = function(a,b,c) {
    return "Selamat datang "+ this.name+ " ke "+a+ " "+b+ " di "+c;
};

console.log(greeting.call(obj,"Tambakreja","Cilacap","Jawa Tengah"));


var obj = {name:"Agus"};

var greeting = function(a,b,c) {
    return "Selamat datang "+ this.name+ " ke "+a+ " "+b+ " di "+c;
};

var bound = greeting.bind(obj);

console.dir(bound);
console.log("output using .bind() below ");
console.log(bound("Tambakreja","Cilacap","Jawa Tengah"));