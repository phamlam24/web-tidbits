// tạo một array các thẻ có class star-button
let stars = document.getElementsByClassName("star-button");
console.log(stars)

// tạo một biến rating để nhớ rating người dùng bấm
let rating = 0;

// lệnh document.querySelectorAll.forEach(arrow function) để mình thêm 1 cái
// addEventListener cho mỗi star button.
document.querySelectorAll(".star-button").forEach(item => {
    // add event khi mình hơ chuột trên icon
    item.addEventListener("mouseover", () => {
        console.log(item.id)
        // lấy id của item
        let hoverItemNumber = parseInt(item.id);

        // chạy cho tất cả các items, nếu 1 item có id bé hơn 
        // item mình đg hover thì đổi class từ far sang fas (font awesome solid)
        for(let i = 0;i<5;i++){
            if(i+1<=hoverItemNumber){
                stars[i].className = "fas fa-star star-button";
            }
            else{
                stars[i].className = "far fa-star star-button";
            }
        }
    })
})

document.querySelectorAll(".star-button").forEach(item => {
    item.addEventListener("click", () => {
        rating = parseInt(item.id)
    })
})

document.querySelectorAll(".star-button").forEach(item => {
    // add event khi mình hơ chuột trên icon
    item.addEventListener("mouseleave", () => {
        for(let i = 0;i<5;i++){
            if(i+1 <= rating){
                stars[i].className = "fas fa-star star-button";
            }
            else{
                stars[i].className = "far fa-star star-button";
            }
        }
    })
})