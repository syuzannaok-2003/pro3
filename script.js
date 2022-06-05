let side = 10;
let xotArr = []; //խոտերի զանգված
let eatArr = [];
let whites = [] //խոտակերների զանգված

let matrix = [];

//Լցնենք մատրիցան 0-ից 2 պատահական թվերով
function generate(a, xot,xotaker) {
  for (let i = 0; i < a; i++) {
    matrix.push([]);
    for (let j = 0; j < a; j++) {
      matrix[i].push(0);
    }
  }

  for (let i = 0; i < xot; i++) {
  
    let x = Math.round(Math.random() * a)
    let y = Math.round(Math.random() * a)
    if (matrix[y][x] ===0) {
      matrix[y][x] =1

    }
  }
for (let i = 0; i < xotaker; i++) {
  
  let x = Math.round(Math.random() * a)
    let y = Math.round(Math.random() * a)
    if (matrix[y][x] ===0) {
      matrix[y][x] =2

    }
}
for (let i = 0; i < xotaker; i++) {
  
  let x = Math.round(Math.random() * a)
    let y = Math.round(Math.random() * a)
    if (matrix[y][x] ===0) {
      matrix[y][x] = 3

    }
}

}

generate(50, 50,60);

//լցնենք մատրիցան մեր օբյեկտներով

function objectsCreation() {
  //Կրկնակի ցիկլը լցնում է օբյեկտներով խոտերի և խոտակերների զանգվածները
  //հիմնվելով մատրիցի վրա
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 2) {
        eatArr.push(new GrassEater(x, y));
      } else if (matrix[y][x] == 1) {
        xotArr.push(new Grass(x, y));
      } else if (matrix[y][x] == 3) {
        whites.push(new whiteWord(x, y))

      }
    }
  }
}


function setup() {
  // noStroke();
  // frameRate(30);
  createCanvas(matrix[0].length * side, matrix.length * side); //կտավի չափերը դնել մատրիցայի չափերին համապատասխան
  background("grey");
}

//draw ֆունկցիան գծում է «կադրերը», վարկյանում 60 կադր արագությամբ
//եթե տրված չէ այլ կարգավորում frameRate ֆունկցիայի միջոցով
//draw ֆունկցիան ինչ որ իմաստով անվերջ կրկնություն է (цикл, loop)
function draw() {
  let r = random(5);
  let g = random(5);
  let b = random(250);
  objectsCreation()
  //Գծում է աշխարհը, հիմվելով matrix-ի վրա
  //   background("#acacac");
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        fill("green");
      } else if (matrix[y][x] == 2) {
        fill("#ddff00");
      } else if (matrix[y][x] == 0) {
        fill(r, g, b);
      } else if (matrix[y][x] == 3) {
        fill("white")
      }
      rect(x * side, y * side, side, side);
    }
  }

  //յուրաքանչյուր խոտ փորձում է բազմանալ
  for (let i = 0; i < xotArr.length; i++) {
    xotArr[i].mul();
  }

  //յուրաքանչյուր խոտակեր փորձում է ուտել խոտ
  for (let i = 0; i < eatArr.length; i++) {
    eatArr[i].eat();
  }

  for (let i = 0; i < whites.length; i++) {
    whites[i].mul()
  }
}
