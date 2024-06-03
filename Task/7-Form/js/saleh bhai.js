class formCheck {
    constructor(RealName, ActualName, MovieName) {
        this.RealName = RealName;
        this.ActualName = ActualName;
        this.MovieName = MovieName;
    }
    name() {
        console.log(this.RealName);
    }
    actual() {
        console.log(this.ActualName);
    }
    movie() {
        console.log(this.MovieName);
    };
};

const form = document.getElementById('chracterForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const realName = document.getElementById('realName').value;
    const actualName = document.getElementById('actualName').value;
    const movieName = document.getElementById('movieName').value;

    const check = new formCheck(
        realName, actualName, movieName
    );

    check.name();
    check.actual();
    check.movie();
});