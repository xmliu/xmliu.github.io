var i = 1;
function autoChangeImage(i){                //�Զ��ı�ͼƬ
        setTimeout("changeImage(i++); ", 2500);
        setTimeout("back(i); ", 2000);
        setTimeout("autoChangeImage(i = (i%3)); ", 2500);
}
function changeImage(idNum){
        document.getElementById("radio" + idNum).checked = "checked";
        switch(idNum){
            case 0:
                document.getElementById("imgIndex").style.backgroundImage = "url(image/4.jpg)";//�ı���ҳͼƬ
                break;
            case 1:
                document.getElementById("imgIndex").style.backgroundImage = "url(image/6.jpg)";
                break;
            case 2:
                document.getElementById("imgIndex").style.backgroundImage = "url(image/16.jpg)";
                break;
        }
}