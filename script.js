function play(userChoice) {
      let choices = ['Tosh', 'Qaychi', 'Qog\'oz'];
      let computerChoice = choices[Math.floor(Math.random() * choices.length)];

      let result = '';
    let ball, cball;
    ball = 0
    cball = 0
      if (userChoice === computerChoice) {
        result = "Durrang";
      } else if (
        (userChoice === 'Tosh' && computerChoice === 'Qaychi') ||
        (userChoice === 'Qaychi' && computerChoice === 'Qog\'oz') ||
        (userChoice === 'Qog\'oz' && computerChoice === 'Tosh')
      ) {
          result = "Yutdingiz!";
        ball++
      } else {
          result = "Denny yutdi!";
          cball++
      }

      document.getElementById('result').innerHTML = 'Siz ' + userChoice + ' tanladingiz. Denny ' + computerChoice + 'ni tanladi! ' + result;
        let score = [
          {
                you: ball,
                comp: cball  
          }
      ]

    
    let tableBody = document.getElementById("myTable").getElementsByTagName("tbody")[0];
    let p = document.querySelector("p")
    for (let i = 0; i < score.length; i++){
        let row = tableBody.insertRow(-1);
        let youCell = row.insertCell(0);
        let computerCell = row.insertCell(1);


        youCell.textContent = score[i].you;
        computerCell.textContent = score[i].comp;
      if (score[i].you == '1') {
        youCell.style.background = "lime"
      } else if (score[i].you == '0') {
        youCell.style.background = 'red'
      }
      if (score[i].comp == '1') {
        computerCell.style.background = "lime"
      } else if (score[i].comp == '0') {
        computerCell.style.background = 'red'
      }
    }
}