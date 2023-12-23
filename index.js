function getRandomFontSize() {
  return Math.floor(Math.random() * 11 + 10) / 10 + "em"; // Random number between 1 and 2
}

// Apply random font size to each snowflake
document.addEventListener("DOMContentLoaded", function () {
  var snowflakes = document.querySelectorAll(".snowflake");
  snowflakes.forEach(function (snowflake) {
    snowflake.style.fontSize = getRandomFontSize();
  });
});


document.addEventListener("DOMContentLoaded", function(){
  let col2 = document.querySelector('#morning2');
  col2.style.visibility = 'hidden';
  let col3 = document.querySelector('#morning3');
  col3.style.visibility = 'hidden';
  document.querySelector("#button1").addEventListener('click', function(event){
    let col2 = document.querySelector('#morning2');
    if (col2.style.visibility == 'hidden')
    {
        col2.style.visibility = 'visible';
    } else
    {
        col2.style.visibility = 'hidden';
        col3.style.visibility = 'hidden';
    };
    event.preventDefault();
  });
  document.querySelector("#button2").addEventListener('click', function(event){
    let col3 = document.querySelector('#morning3');
    if (col3.style.visibility == 'hidden')
    {
        col3.style.visibility = 'visible';
    } else
    {
        col3.style.visibility = 'hidden';
    };

    event.preventDefault();
  });

  let col4 = document.querySelector('#day2');
  col4.style.visibility = 'hidden';
  let col6 = document.querySelector('#day21');
  col6.style.visibility = 'hidden';
  document.querySelector("#button3").addEventListener('click', function(event){
    let col4 = document.querySelector('#day2');
    if (col4.style.visibility == 'hidden')
    {
        col4.style.visibility = 'visible';
    } else
    {
        col4.style.visibility = 'hidden';
        col6.style.visibility = 'hidden';
    };
    event.preventDefault();
  });
  document.querySelector("#button4").addEventListener('click', function(event){
    let col6 = document.querySelector('#day21');
    if (col6.style.visibility == 'hidden')
    {
        col6.style.visibility = 'visible';
    } else
    {
        col6.style.visibility = 'hidden';
    };

    event.preventDefault();
  });

  let col7 = document.querySelector('#day3');
  col7.style.visibility = 'hidden';
  let col8 = document.querySelector('#day31');
  col8.style.visibility = 'hidden';
  document.querySelector("#button5").addEventListener('click', function(event){
    let col7 = document.querySelector('#day3');
    if (col7.style.visibility == 'hidden')
    {
        col7.style.visibility = 'visible';
    } else
    {
        col7.style.visibility = 'hidden';
        col8.style.visibility = 'hidden';
    };
    event.preventDefault();
  });
  document.querySelector("#button6").addEventListener('click', function(event){
    let col8 = document.querySelector('#day31');
    if (col8.style.visibility == 'hidden')
    {
        col8.style.visibility = 'visible';
    } else
    {
        col8.style.visibility = 'hidden';
    };

    event.preventDefault();
  });
});

