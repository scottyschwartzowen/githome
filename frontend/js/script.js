let project1 = document.getElementById('project1');
let originalContent = project1.innerHTML;
let isPending = false;

project1.addEventListener('click', function () {
  if (isPending) {
    project1.innerHTML = originalContent;
    project1.style.backgroundColor = '#f2f2f2';
  } else {
    project1.innerHTML = 'Pending...';
    project1.style.backgroundColor = 'paleblue';
  }

  isPending = !isPending;
});
