//խոտի կլասը
class Grass {
    constructor(x, y) {
       
        this.x = x;
        this.y = y;
        this.multiply = 0; //բազմացման գործակից

    

    //շրջապատի հետազոտության մատրիցը
    
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    //հետազոտում է շրջապատը, որոնում է հետաքրքրող կերպարներին
    //կերպարը որոշվում է ch արգումենտով
    getDirections(ch) {
        
        var found = [];

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    //mul() Բազմացում
    mul() {
        this.multiply++;
        if (this.multiply == 3) {

            //Հետազոտում է շրջապատը, որոնում դատարկ տարածքներ
            
            var empty = random(this.getDirections(0));
            if (empty) {
                var x = empty[0];
                var y = empty[1];

                //Ավելացնում է նոր խոտ խոտերի զանգվածում
               
                xotArr.push( new Grass(x, y))

                //Ավելացնում է նոր խոտի մասին գրառում հիմնական matrix-ում 
                matrix[y][x] = 1;
                this.multiply = 0;
            }
        }
    }



}
class whiteWord {
    constructor(x, y) {
       
        this.x = x;
        this.y = y;
        this.multiply = 0; //բազմացման գործակից

    

    //շրջապատի հետազոտության մատրիցը
    
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    //հետազոտում է շրջապատը, որոնում է հետաքրքրող կերպարներին
    //կերպարը որոշվում է ch արգումենտով
    getDirections(ch) {
        
        var found = [];

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    //mul() Բազմացում
    mul() {
        this.multiply++;
        if (this.multiply == 3) {

            //Հետազոտում է շրջապատը, որոնում դատարկ տարածքներ
            
            var empty = random(this.getDirections(0));
            var emp = random(this.getDirections(1));
            var empy = random(this.getDirections(2));
            if (empty) {
                var x = empty[0];
                var y = empty[1];

                //Ավելացնում է նոր խոտ խոտերի զանգվածում
               
                whites.push( new whiteWord(x, y))

                //Ավելացնում է նոր խոտի մասին գրառում հիմնական matrix-ում 
                matrix[y][x] = 3;
                this.multiply = 0;
            }else if (emp){
                var x = emp[0];
                var y = emp[1];

                //Ավելացնում է նոր խոտ խոտերի զանգվածում
               
                whites.push( new whiteWord(x, y))

                //Ավելացնում է նոր խոտի մասին գրառում հիմնական matrix-ում 
                matrix[y][x] = 1;
                this.multiply = 0;
            }else if (empy) {
                var x = empy[0];
                var y = empy[1];

                //Ավելացնում է նոր խոտ խոտերի զանգվածում
               
                whites.push( new whiteWord(x, y))

                //Ավելացնում է նոր խոտի մասին գրառում հիմնական matrix-ում 
                matrix[y][x] = 1;
                this.multiply = 0;
            }
        }
    }

}


//խոտակերի կլասը
class GrassEater {
    constructor(x, y) {
        
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 3;

    }
    getDirections(wa) {
        this.newDirections();
        var found = [];

        for (let i = 0; i < this.directions.length; i++) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == wa) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    //move() շարժվել
    move() {
        //որոնում է դատարկ տարածքներ
         
        var cord = random(this.getDirections(0));

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            //կատարում է տեղափոխություն հիմնական matrix-ում 
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            //թարմացնում է սեփական կորդինատները
            this.x = x;
            this.y = y;

        }
    }
    
    //mul() բազմանալ
    mul() {
        //փնտրում է դատարկ տարածք
      
        var cord = random(this.getDirections(0));

        //եթե կա բազմանում է
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            //ստեղծում է նոր օբյեկտ (այստեղ խոտակեր) 
            //և տեղադրում է այն խոտակերների զանգվածի մեջ
            
            eatArr.push(new GrassEater(x, y));

            //հիմնական matrix-ում կատարում է գրառում նոր խոտի մասին
            matrix[y][x] = 3;
            this.multiply = 0;
        }
    }

    //շրջապատի հետազոտության մատրիցը
    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    //հետազոտում է շրջապատը, որոնում է հետաքրքրող կերպարներին
    //կերպարը որոշվում է t արգումենտով
    getDirections(t) {
        this.newDirections();
        var found = [];

        for (let i = 0; i < this.directions.length; i++) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }



    //move() շարժվել
    move() {
        //որոնում է դատարկ տարածքներ
         
        var cord = random(this.getDirections(0));

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            //կատարում է տեղափոխություն հիմնական matrix-ում 
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            //թարմացնում է սեփական կորդինատները
            this.x = x;
            this.y = y;

        }
    }


    //eat()-ուտել
    eat() {
        //հետազոտում է շրջակայքը, որոնում է սնունդ
       
        var cord = random( this.getDirections(1));

        //եթե կա հարմար սնունդ
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            //հիմնական մատրիցայում տեղափոխվում է կերած սննդի տեղը
            //իր հին տեղը դնում է դատարկ վանդակ
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            //փոխում է սեփական կորդինատները օբյեկտի մեջ
            this.x = x;
            this.y = y;

            //բազմացման գործակիցը մեծացնում է
            this.multiply++;

            //մեծացնում է էներգիան
            this.energy++;

            //!!! ԿԱՐԵՎՈՐ !!! սննդի զանգվածից ջնջում է կերված սնունդը
            //խոտակերի համար դա խոտն է, խոտերի զանգվածի մեջ xotArr
            for (let i = 0; i < xotArr.length; i++) {
                if (x == xotArr[i].x && y == xotArr[i].y) {
                    xotArr.splice(i, 1);
                }
            }

            //եթե պատրաստ է բազմացմանը, բազմանում է 
            if (this.multiply == 10) {
                this.mul()
                this.multiply = 0;
            }


        } else {
            //եթե չկա հարմար սնունդ 
            this.move();
            this.energy--;
            if (this.energy < 3) { //մահանում է, եթե էներգիան 3֊ից ցածր է
                this.die();
            }
        }
    }

    //mul() բազմանալ
    mul() {
        //փնտրում է դատարկ տարածք
      
        var cord = random(this.getDirections(0));

        //եթե կա բազմանում է
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            //ստեղծում է նոր օբյեկտ (այստեղ խոտակեր) 
            //և տեղադրում է այն խոտակերների զանգվածի մեջ
            
            eatArr.push(new GrassEater(x, y));

            //հիմնական matrix-ում կատարում է գրառում նոր խոտի մասին
            matrix[y][x] = 1;
            this.multiply = 0;
        }
    }

    //die() մահանալ
    die() {
        //Հիմնական մատրիցում իր դիրքում դնում է դատարկություն
        matrix[this.y][this.x] = 0;

        //!!! ԿԱՐԵՎՈՐ !!! ջնջում է ինքն իրեն խոտակերների զանգվածից
        for (let i = 0; i < eatArr.length; i++) {
            if (this.x == eatArr[i].x && this.y == eatArr[i].y) {
                eatArr.splice(i, 1);
            }
        }
    }

}