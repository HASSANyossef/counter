
let count = 0;
let number = document.querySelector("#number");
let btns = document.querySelectorAll(".btn");

btns.forEach(function (temp){
    temp.addEventListener("click", function (e)
    {
        let change = e.target.classList;
        console.log(change);
        if (change.contains("decrease"))
        {
            count--;
        }
        else if (change.contains("increase"))
        {
            count++;
        }
        else 
        {
            count = 0;
        }
        if (count<0)
        {
            number.style.color = "red";
        }
        else if (count>0)
        {
            number.style.color = "green";
        }
        else if (count == 0)
        {
            number.style.color = "#2b2b2b";
        }
        number.textContent = count;
    })
})