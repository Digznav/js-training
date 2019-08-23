(function(context){


    function renderAnswer(answer){
        var html = View.getPartialHTML("/about#answer", {
            answer: answer
        })
        $("[rel='js-answer']").replaceWith(html);
    }


	function init(){
        $("[rel='js-gimme']").click(function(evt){
            var $local = $("[rel='js-local']");

            if($local.is(":checked")) {
                renderAnswer( Foo.random() );
            }
            else {
                $.ajax("/Foo").then(function(resp){
                    renderAnswer(resp.answer);
                })
            }
        })
    }

	function teardown(){}

	Pages.page_scripts["/about"] = {
		init: init,
		teardown: teardown
	};

})(window);
