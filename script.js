const getColor =() => {
    //Hex code को लागी
        const randomNumber = Math.floor(Math.random() *1677215)
        const randomCode = "#" + randomNumber.toString(16);
        //background color change गर्नको लागी
        document.body.style.backgroundColor = randomCode;
        //background color code लेख्नको लागी 
        //तर सबै कोड अनुसारको रङ परिवर्तन भएको छैन किन ????
        document.getElementById("color").innerText = randomCode;
        // यदि मलाई पेजमा देखिएको कोड आफै clopboard मा copy गराउनु पर्यो भनि ctr+ c नगरिकन 
        navigator.clipboard.writeText(randomCode);

}
// event call गरेको
document.getElementById("btn").addEventListener("click", getColor);

//initial call गरेको
getColor();