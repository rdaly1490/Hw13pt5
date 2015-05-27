$(document).on('ready', start);

function start(eventObj) {

var $top = $("#top");
var $logo = $("#logo");
var $bottom = $("#bottom");
var $user = $("#username");
var $pw = $("#password");
var $signIn = $("#sign-in");

$top.css("width", "100%");
$top.css("height", "350px");
$top.css("background", "url(bg-login-top.png)");
$top.css("paddingTop", "230px");
$top.css("boxSizing", "border-box");

$bottom.css("width", "100%");
$bottom.css("height", "350px");
$bottom.css("background", "url(bg-login.png)");
$bottom.css("paddingTop", "20px");

$logo.css("marginLeft", "auto");
$logo.css("marginRight", "auto");
$logo.css("width", "30%");
$logo.css("height", "150px");

$user.css("display", "block");
$user.css("marginBottom", "10px");
$user.css("marginLeft", "auto");
$user.css("marginRight", "auto");
$user.css("width", "40%");

$pw.css("display", "block");
$pw.css("marginBottom", "10px");
$pw.css("marginLeft", "auto");
$pw.css("marginRight", "auto");
$pw.css("width", "40%");

$("span").css("color", "white");

// $(".img-responsive").css("backgroundPosition", "center");
// $(".img-responsive").css("backgroundSize", "cover");
$(".img-responsive").css("height", "auto");
$(".img-responsive").css("width", "100%");
$(".img-responsive").css("display", "block");











}