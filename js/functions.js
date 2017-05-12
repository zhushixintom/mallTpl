$(function(){

	// select默认选中项颜色
	var unSelected = "#999";
	var selected = "#333";
	$("select").css("color", selected);
	$("option").css("color", selected);
	$("select").change(function () {
		var selItem = $(this).val();
		if (selItem == $(this).find('option:first').val()) {
			$(this).css("color", selected);
		} else {
			$(this).css("color", selected);
		}
	});


});

	function limitWordsInput(args) {
	var ele1 = args.ele1;
	var ele2 = args.ele2;
	var limits = args.limits;
	var fn = args.fn;
	ele1.on("input propertychange", function(){
		var currentVal = ele1.val();
		if( currentVal.length > limits){
			var targetVal = currentVal.substr(0 , limits);
			ele1.val(targetVal);
			fn();
		} else {
			ele2.text( 0 + currentVal.length)
		}
	})
}


function checkTel(tel){
    if(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(tel)){
        return true;
    }
    return false;
}

// 获取购物车中数量
function getnums()
{
    $.ajax({
        url: "index.php?s=Shop/Cart/cart_num",
        dataType: 'json',
        cache:false,
        success:function(result)
        {
            if(result['num']>=1)
            {
                $('#shoppingcart_count').html('<em>'+result['num']+'</em>');
            }else{
                $('#shoppingcart_count').html('');
            }
        }
    });
}

function bar() {
    var time = setInterval(function() {
        $(".bar_inside").each(function() {
            // var rate = $(this).parent().next().find("em").html();
            var rate = parseFloat($(this).attr("data-rate"));
            // console.log(rate);
            $(this).css("width", rate + "%");
        });
    }, 1000)
}