// ==UserScript==
// @name         Fullscreen ArmorGames
// @namespace    https://github.com/L0laapk3/
// @downloadURL  https://cdn.jsdelivr.net/gh/L0laapk3/Fullscreen-ArmorGames/fullscreen.user.js
// @version      1.3.1
// @author       L0laapk3
// @match        *://armorgames.com/play/*
// ==/UserScript==


$("#gamefileEmbed").css({height: "100vh", width: 100 * $("#gamefile").width() / $("#gamefile").height() + "vh", marginLeft: "calc(50vw - " + (50 * $("#gamefile").width() / $("#gamefile").height()) + "vh)"});
$("#gamearea").css({height: "100vh", width: "100vw", position: "absolute", left: 0, top: 0, background: "black", zIndex: 5}).children("a").remove();
$("#afg-html5-container").css({height: "100vh", width: "100vw"});
$("#ag3-header").css({zIndex: 0});
$("#gamefilearea").css({marginLeft: 0});
$("body").css({overflowX: "hidden"});
$("#content-canvas").css({paddingTop: "100vh"});

document.styleSheets[0].addRule("::-webkit-scrollbar", "visibility: hidden;");