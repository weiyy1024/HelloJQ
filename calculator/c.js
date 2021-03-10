var mytable = document.getElementById("mytable");
console.log(mytable);
mytable.addEventListener("click", addNumbers);

let tt = "";
let bb = "";
let cc = [];

function addNumbers(e) {
    var getNum = e.target.textContent;
    var addNb = document.getElementById("addNb");
    // console.log(addNb.innerText.length);

    if (getNum == "0" || getNum == "1" || getNum == "2" || getNum == "3" || getNum == "4" || getNum == "5" || getNum == "6" || getNum == "7" || getNum == "8" || getNum == "9" || getNum == ".") {
        tt += getNum;
        addNb.innerText = tt;
    } else if (getNum == "MC") {
        tt = "";
        cc = [];
        addNb.innerText = 0;
    } else if (getNum == "+" || getNum == "-") {
        bb = tt;
        bb += getNum;
        cc.push(bb);
        tt = "";
        console.log(cc);
    } else if (getNum == "x") {
        bb = tt;
        bb += "*";
        cc.push(bb);
        tt = "";
        console.log(cc);
    } else if (getNum == "÷") {
        bb = tt;
        bb += "/";
        cc.push(bb);
        tt = "";
        console.log(cc);
    } else if (getNum == "=") {
        cc.push(tt);
        console.log(cc.toString());
        console.log(cc.toString().replaceAll(',', ''));
        let total = eval(cc.toString().replaceAll(',', '')).toFixed(2)
            // console.log(Number.isInteger(Number(total)));
        if (Number.isInteger(Number(total))) {
            addNb.innerText = eval(cc.toString().replaceAll(',', ''));
        } else {
            addNb.innerText = eval(cc.toString().replaceAll(',', '')).toFixed('2');
        }
    }



}