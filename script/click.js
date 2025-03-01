const colors = ["#0a0808", "#ffea37", "#1caffe", "#f700e0", "#ff2936", "#1ffcd7", "#44fd09", "#e3f2de"]
     let colorIndex = 0;
document.getElementById('theme-btn')
.addEventListener('click', function(){
     document.body.style.background = colors[colorIndex];
     colorIndex = (colorIndex + 1) % colors.length;
})

