class FormCheck {
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
function formSubmition(e) {
    e.preventDefault();
    // const realName = document.getElementById('realName').value;
    // const actualName = document.getElementById('actualName').value;
    // const movieName = document.getElementById('movieName').value;

    const dataObj = {};
    const formData = new FormData(form);
    for (const [eachKey, eachValue] of formData) {
        dataObj[eachKey] = eachValue;
    }
    console.log(dataObj);
    const { realName, actualName, movieName } = dataObj

    let check = new FormCheck(realName, actualName, movieName);
    check.name();
    check.actual();
    check.movie();
};
form.addEventListener('submit', formSubmition);