let btn = document.querySelectorAll(".btn-success");
let dropdown = document.querySelector(".dropdown-menu");
let spanCount = document.querySelector(".badge-light");
let arrList = localStorage.getItem("key")
	? JSON.parse(localStorage.getItem("key"))
	: [];

btn.forEach((ele) => {
	//  ele.addEventListener("click", () =>{});
	//  ele.addEventListener("click", function (){});
	ele.addEventListener("click", usama);
});

function usama(e) {
	let parent = e.target.parentElement.parentElement;
	let imgSrc = parent.querySelector("img").src;
	let productHeading = parent.querySelector(".card-title").innerText;
	let productPrice = parent.querySelector(".price").innerText;

	// console.log(productHeading);
	// console.log(productPrice);
	// console.log(imgSrc);
	let obj = {
		imgSrc,
		productHeading,
		productPrice,
	};
	arrList.push(obj);

	// console.log(arrList);

	localStorage.setItem("key", JSON.stringify(arrList));

	rendering();
}

function rendering() {
	let html = "";

	// if (arrList.length > 0) {
	arrList.forEach((el, index) => {
		// console.log(el);

		html += `
            <a class="dropdown-item" href="#">
            				<div class="d-flex justify-content-center align-items-center">
            					<img src="${el.imgSrc}" class="cart-img mr-4" alt="" />
            					<div class="text-left mr-4">
            						<p class="m-0">BRAND: <b>${el.productHeading} </b> </p>
            						<p class="m-0">PRICE: <b>${el.productPrice}</b></p>
            					</div>

            					<p class="m-0">
            						<b class="btn btn-success"   onclick="del( event ,   ${index})">DELETE</b>
								</p>
                               </div>
						</a>
						
            			<div class="dropdown-divider sm-6 md-4 lg-5"></div>
            `;
	});

	dropdown.innerHTML = html;

	spanCountValue = arrList.length;
	if (spanCountValue > 0) {
		document.querySelector(".badge-light").textContent = spanCountValue;
	} else {
		document.querySelector(".badge-light").textContent = "";
		// }
		// console.log(spanCount);
	}
	// else {
	// 	html = "";
	// 	dropdown.innerHTML = html;
	// }

	return;
}

function del(event, e) {
	event.stopPropagation();

	// console.log("hello");
	// console.log(this);
	console.log(e);


	let deleted = [];
	var index = e;

	// narr5 = localStorage.getItem("key")
	// 	? JSON.parse(localStorage.getItem("key"))
	// 	: [];
	var sp = arrList.splice(index, 1);
	// console.log(sp);
	console.log(arrList);
	localStorage.setItem("key", JSON.stringify(arrList));

	rendering();

	// deleted = JSON.stringify(deleted);
	// localStorage.setItem("key", deleted);

	// delarr =
	// var parent = e.parentElement.parentElement.parentElement;
	// console.log(parent);
}
rendering();
