function heart() {
    document.querySelectorAll('.heart').forEach((b,index) => {
        b.onclick = (e) => {
            e.preventDefault();

            let button = e.target;
            let tags = button.closest('.heart');
            tags.classList.toggle('heartStyle');
             
            /*   
            let heartTarget = document.getElementsByClassName('heart')[index];
        
            if(e.target){
                alert(heartTarget.innerHTML);
                if(heartTarget.innerHTML == "&#9825;"){
                    heartTarget.innerHTML = "&#10084;";
                    alert('sample1');
                } else {
                    heartTarget.innerHTML = "&#9825;";
                    alert('sample2');
                }
            } */
        };
    });

}

function closeMarkOver(){
    document.querySelectorAll('.item').forEach((b, index) => {
        b.onmouseover = (e) => {
            //e.preventDefault();

            let closeMark = document.getElementsByClassName('closeMark')[index];
            if (e.target)
                closeMark.style.display = 'block'
            else closeMark.style.display = 'none';
        };
    });
}

function closeMarkOut(){
    document.querySelectorAll('.item').forEach((b, index) => {
        b.onmouseout = (e) => {
            //e.preventDefault();

            let closeMark = document.getElementsByClassName('closeMark')[index];
            if (e.target)
                closeMark.style.display = 'none'
            else closeMark.style.display = 'none';
        };
    });
}

function closeItem(){
    document.querySelectorAll('.closeMark').forEach((b, index) => {
        b.onclick = (e) => {
            //e.preventDefault();

            let xItem = document.getElementsByClassName('item')[index];
            if (e.target) xItem.style.display = 'none';
        };
    });
}

function showCheckClick() {
    document.querySelectorAll('.checkMark').forEach(b => {
        b.onclick = (e) => {
           //e.preventDefault();

            let button = e.target;
            let tags = button.closest('.checkMark');
            tags.classList.toggle('checkMarkRead');
            tags.style.visibility = 'visible';
        };
 
    });
}


function showCheck(){
    document.querySelectorAll('.itemDescription').forEach((b, index) => {
        b.onmouseover = (e) => {
           //e.preventDefault();
            
            let check = document.getElementsByClassName('checkMark')[index];
            if (e.target)
                    check.style.display = 'block'
             else check.style.display = 'none';
        };
 
    });
}

function showCheckout(){
    document.querySelectorAll('.itemDescription').forEach((b, index) => {
        b.onmouseout = (e) => {
           //e.preventDefault();
            
            let check = document.getElementsByClassName('checkMark')[index];
            if(check.style.visibility !== 'visible') check.style.display = 'none';
            
        };
 
    });
}


