var global = {};

global.animate = function(pNode,node,animateOpts){
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop()
        var height = $(this).height()
        
        var PoffsetTop = pNode.offset().top
        if(scrollTop > (PoffsetTop - height )){
            node.css(animateOpts)
        }
    })
}
