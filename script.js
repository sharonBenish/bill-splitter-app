const billInput = document.querySelector(".bill input");
const rates = document.querySelector(".rates");
const rateInput = document.querySelector(".rates input");
const numberOfPeople = document.querySelector(".number__people input");
const reset = document.getElementById("reset");
let rate="";
const single = document.getElementById("single");
const total = document.getElementById("total");
const warning = document.querySelector(".warning");
const ratebuttons = rates.querySelectorAll(".rate");

numberOfPeople.addEventListener("input", ()=>{
    if (numberOfPeople.value.trim() =="" || numberOfPeople.value == "0"){  
        warning.style.display = "inline";
        numberOfPeople.classList.add("warning");
        total.textContent="$0";
        single.textContent="$0";
        return;
    }else{
        warning.style.display = "none"
        numberOfPeople.classList.remove("warning");
    }

    calculate()
})

billInput.addEventListener("input",()=>{
    calculate()
})

rates.addEventListener("click", (e)=>{
    if (!((e.target.nodeName.toLowerCase() == "button") || (e.target.nodeName.toLowerCase() == "input") )){
        return;
    }
    const selected = e.target;
    Array.from(ratebuttons).forEach(rate=>{
        rate.classList.remove("active");      
    })

    selected.classList.add("active");
    
    if (selected.dataset.rate){
        rate = Number(selected.dataset.rate);
        rateInput.value="";
    }

    calculate();
})

numberOfPeople.addEventListener("blur", ()=>{
    if(numberOfPeople.value == "0" || numberOfPeople.value== ""){
        warning.style.display = "inline";
        numberOfPeople.classList.add("warning");
        total.textContent="$0";
        single.textContent="$0";
        return;
    }else{
        warning.style.display = "none";
        numberOfPeople.classList.remove("warning");
    }

    calculate();

})

rateInput.addEventListener("input", ()=>{
    rate=rateInput.value;

    calculate();
})

rateInput.addEventListener("focus",()=>{
    rate=rateInput.value;
    calculate();
})

reset.addEventListener("click",()=>{
    billInput.value="";
    rateInput.value="";
    numberOfPeople.value="";
    rate="";
    total.textContent="$0";
    single.textContent="$0";
    Array.from(ratebuttons).forEach(rate=>{
        rate.classList.remove("active");      
    })
    warning.style.display = "none";
    numberOfPeople.classList.remove("warning");
})

function calculate(){
    if (numberOfPeople.value.trim() =="" || numberOfPeople.value == "0"){
        return;
    }
    if (rate){
        const totalTip = ((Number(billInput.value)) * (rate/100));
        const singleTip =totalTip/Number(numberOfPeople.value);
        const totalPerPerson = singleTip + (Number(billInput.value) / Number(numberOfPeople.value));
        total.textContent=`$${totalPerPerson.toFixed(2)}`;
        single.textContent=`$${singleTip.toFixed(2)}`;
    
    }
}

