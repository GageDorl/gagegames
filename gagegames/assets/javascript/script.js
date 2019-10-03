$('.dancer').on('click', function(){
    var dancer=$('#dancer');
    var dancerBack=$('#dancerBack');
    dancerBack.show();
    dancerBack.attr('src',dancer.attr('src'))
    
    dancer.attr('src','assets/images/'+$(this).attr('value')+'.gif');
   dancerBack.fadeOut(200);
   localStorage.setItem('dancer',dancer.attr('src'))
})
if(localStorage.getItem('dancer')!=null){
    $('#dancer').attr('src',localStorage.getItem('dancer'));
    $('#dancerBack').hide();
}