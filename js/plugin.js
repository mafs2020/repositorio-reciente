(function($){
    $.fn.animar=function(){
        $this=$(this)
        $this.hover(function(){
            $this.animate({
                height:'1150px',
                width:'500px'
                

            })
        })
    };
})(jQuery);