
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
		
	
	var manifest = [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap1a.png", id:"Bitmap1a"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap3.png", id:"Bitmap3"}
	];
	
	return manifest;			
});


