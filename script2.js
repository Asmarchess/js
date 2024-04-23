let str2 = "Asmarchess";

function isboyuk(str) {
    let strArray = str.split("");
    if (strArray.length > 10 && strArray.length < 20) {
        return true;
    } else {
        return false;
    }
}
console.log(isboyuk(str));