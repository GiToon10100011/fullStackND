//document에 "data-filter-id" 속성을 가진 요소를 filters에 저장
//각각의 버튼 filterBtns에 저장

//forEach를 이용하여 각각의 filters 데이터를 순회하며 해당filter 내에서 
//button [data-filter]속성이랑 일치하는 요소를 찾아서
//filterList에 저장

// const filters = document.querySelectorAll("[data-filter-id]");
// console.log(filters);
//filters에 저장된 버튼과 li를 각각 저장하기
// filters.forEach(filter =>{
//     const filterBtns =[...filter.querySelectorAll("[data-filter")].filter(el =>el.nodeName==='BUTTON');
//     const filterList = [...filter.querySelectorAll("[data-filter]")].filter(el => el.nodeName==="LI");
//     console.log(filterBtns);
//     console.log(filterList)
// })

const filterBtns = document.querySelectorAll(".menu-wrap button");
console.log(filterBtns);
const filterList = document.querySelectorAll(".menu-list li");
console.log(filterList);

//버튼을 클릭하면 클릭한 버튼은 active를 적용하고 나머지 버튼은 클래스 취소
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        //클릭한 버튼이 가진 data-filter
        const filterType = btn.getAttribute("data-filter");
        console.log(filterType);

        //모든 버튼 클래스취소
        filterBtns.forEach(btn => btn.classList.remove("active"))
        //해당 하는 버튼만 클래스 적용
        btn.classList.add("active");

        //list에서 해당하는 list만 찾기
        filterList.forEach(list => {
            if (filterType === "all") {
                list.style.display = "block";
                return;
            }
            list.style.display =
                list.getAttribute("data-filter") === filterType ? "block" : "none"
        })

    })
})





