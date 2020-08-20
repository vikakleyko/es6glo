const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
const command = [];
for (let i = 0; i < employers.length; i++) {
	if (employers[i].length > 0 && employers[i].trim() !== '') {
		command.push(employers[i]);
	}
}
for (let i = 0; i < command.length; i++) {
	command[i] = command[i].toLowerCase().trim();
	command[i] = command[i][0].toUpperCase() + command[i].slice(1);
}

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const {cash, react, add} = data;

const calcCash = (own = []) => own.reduce((acc, item) => acc + item, 0);

const lesson = calcCash(cash);

const makeBusiness = (director, allModule, gang, course, teacher = 'Максим') => {
	const sumTech =[...react, ...add, 'и другие'].join(' ');
	// eslint-disable-next-line max-len
	console.log(`Стартуем новый курс: ${course}. Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
Команда Академии: ${gang}`);
	console.log(`Первое что изучим будет ${react[0]}. Он очень похож на HTML!`);
	console.log(`Технологии которые мы изучим: `);
	console.log(sumTech);
};

makeBusiness('Артем', lesson, command, nameCourse);
