const name = prompt('Ваше имя ?');
const surname = prompt('Ваше фамилия ?')
const data = confirm('Есть ли вам 18 лет ?');


if (data) {
    alert(`Вы можете купить этот виски ${name} ${surname}`)
} else {
    alert('Извините, я не могу вам продать виски(');
}