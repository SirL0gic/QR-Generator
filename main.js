var qrcode = new QRCode("actual-qr", {
    width: 250,
    height: 250,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});
function makeCode() {
    var elText = document.getElementById("input-box");
    qrcode.makeCode(elText.value);
}
makeCode();
$("#input-box").
on("blur", function() {
    makeCode();
}).
on("keydown", function(e) {
    if (e.keyCode == 13) {
        makeCode();
    }
});