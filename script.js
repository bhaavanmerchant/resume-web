$(document).ready(function(){
$('.year-box').hover(
function()
{
$(this).parent().children('.farrow').hide();
$(this).parent().children('.arrow-right').show();
},
function()
{
$(this).parent().children('.arrow-right').hide();
$(this).parent().children('.farrow').show();
}
);
$('.timeline-circle').hover(
function()
{
$(this).parent().children('.farrow').hide();
$(this).parent().children('.arrow-right').show();
},
function()
{
$(this).parent().children('.arrow-right').hide();
$(this).parent().children('.farrow').show();
}
);


});

