$(function(){

	// select默认选中项颜色
	var unSelected = "#999";
	var selected = "#333";
	$("select").css("color", unSelected);
	$("option").css("color", selected);
	$("select").change(function () {
		var selItem = $(this).val();
		if (selItem == $(this).find('option:first').val()) {
			$(this).css("color", unSelected);
		} else {
			$(this).css("color", selected);
		}
	});


});

	function words_deal(){
		console.log($("#textArea"));
		// 字数限制
		var curLength = $("#textArea").val().length;
		if(curLength>100){
			var num=$("#textArea").val().substr(0,100);
			$("#textArea").val(num);
			alert("超过字数限制，多出的字将被截断！" );
		}
		else{
			$(".textNum em").text(0+$("#textArea").val().length);
		}
	};

function imgHeight(){
	// 图片限定高度
	$(".item-pic").each(function(){
		var w = $(this).width();
		$(this).css({"height": w});
	});
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