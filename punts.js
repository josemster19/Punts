var http = require("http");
// Ompliu aquí la vostra resposta
/*
function f(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	f2 = function(n){
		if(n > 0 ){
			console.log(n);
			setTimeout(function(){
				res.write(".");
			},n*1000);
			f2(n-1)
		}
		else{
			console.log(n);
			setTimeout(function(){
				res.end()
			},10*1000)	;
		}
	}
	//f2(10)

	//Lo hace del 1-10 que es lo mismo, sino es jugar con el contador y ya
	f3 = function(n){
		if(n > 0 ){
			console.log(n);
			setTimeout(function(){
				res.write(""+n);
			},n*1000);
			f3(n-1)
		}
		else{
			console.log(n);
			setTimeout(function(){
				res.end()
			},10*1000)	;
		}		
	}
	f3(10)
}
*/

function GeneradorBarresDeProgres(point){
	this.points = point
	this.novaBarra = function(n){
		if(point){
			console.log("Aqui van puntitos")
			console.log("n")
			return function(req,res){
				res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
				f2 = function(n){
					if(n > 0 ){
						console.log(n);
						setTimeout(function(){
							res.write(".");
						},n*1000);
						f2(n-1)
					}
					else{
						console.log(n);
						setTimeout(function(){
							res.end()
						},10*1000)	;
					}
				}
				f2(n)				
			}

		}
		else{
			console.log("Aqui van numeritos")
			console.log("n")
			return function(req,res){
				res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
				f3 = function(n){
					if(n > 0 ){
						console.log(n);
						setTimeout(function(){
							res.write(""+n);
						},n*1000);
						f3(n-1)
					}
					else{
						console.log(n);
						setTimeout(function(){
							res.end()
						},10*1000)	;
					}		
				}
				f3(n)
			}
		}
	}
}


gbp = new GeneradorBarresDeProgres(false)
f = gbp.novaBarra(10)
http.createServer(f).listen(8081);
console.log("Server is listening");