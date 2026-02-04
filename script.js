const toastBox = document.querySelector(".toastBox");
const form = document.getElementById("myForm");
const inputs = document.querySelectorAll("input, textarea");

let successMsg = '<i class="fa-solid fa-circle-check"></i> Form Submitted Successfully!';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fill all fields!';

form.addEventListener("submit", function (e) {
    e.preventDefault(); // 🚫 stop redirect

    let allFilled = true;

    inputs.forEach(inp => {
        if (inp.value.trim() === "") {
            allFilled = false;
        }
    });

    if (allFilled) {
        fetch(form.action, {
            method: "POST",
            body: new FormData(form)
        });
        let toast = document.createElement("div");
        toast.classList.add("toast", "success");
        toast.innerHTML = successMsg;
        toastBox.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 6000);

        form.reset();
    }
    else if (!allFilled) {
        let toast = document.createElement("div");
        toast.classList.add("toast", "error");
        toast.innerHTML = errorMsg;
        toastBox.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 6000);
    }
});
