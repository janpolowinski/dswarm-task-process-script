            	// (run task with d3.json does not work somehow)
//            	  	d3.json(baseUrlBackend + "tasks?persist=false", function(error, json) {
//            	  		console.log("Transformation results:");
//            	  		//console.log(json);
//            	    })
//            	    .header("Accept","application/json, text/plain, */*")
//            	    .header("Content-Type","application/json;charset=utf-8")
//            	    .header("Origin","http://localhost:9999")
//            	   // .header("Access-Control-Allow-Origin","*")
//            		.send("POST", JSON.stringify(currentTask));
            	  	
            	    // curl 'http://127.0.0.1:8087/dmp/tasks?persist=true' 
            	  	//-H 'Host: 127.0.0.1:8087' 
            	  	//-H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:34.0) Gecko/20100101 Firefox/34.0'
            	  	//-H 'Accept: application/json, text/plain, */*'
            	  	//-H 'Accept-Language: en-US,en;q=0.5' --compressed
            	  	//-H 'Content-Type: application/json;charset=utf-8'
            	  	//-H 'Referer: http://localhost:9999/'
            	  	//-H 'Content-Length: 12046'
					//-H 'Origin: http://localhost:9999'
					//-H 'Connection: keep-alive'
					//-H 'Pragma: no-cache'
					//-H 'Cache-Control: no-cache'