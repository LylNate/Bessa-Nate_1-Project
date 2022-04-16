function kjs() {
    var videos=['https://www.youtube.com/embed/j3MRtsXJbE4', 'https://www.youtube.com/embed/N7U4QswEGRw']
    for(var i=0; i<videos.length;i++) {
        document.getElementById("videos").innerHTML+='<iframe id="framev'+i+'" width="420" height="315" src="'+videos[i]+'"></iframe>'; 
    } 
}