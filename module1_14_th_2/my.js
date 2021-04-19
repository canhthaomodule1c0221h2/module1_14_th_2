function temperatureConverter() {
    let f = parseFloat(document.getElementById("F").value);
    c = (f - 32) / 1.8;
    document.getElementById("kq").innerText += c;
}
