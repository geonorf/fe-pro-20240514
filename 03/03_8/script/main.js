let dayOfWeek = (prompt('Введіть день тижня ("Вівторок", "Вт"), будь ласка')).toUpperCase();

switch (dayOfWeek){
    case 'ПОНЕДІЛОК':
    case 'ПН':
        alert('У Вас сьогодні вільний день!');
        break;

    case 'ВІВТОРОК':
    case 'ВТ':
        alert('У Вас сьогодні урок!');
        break;

    case 'СЕРЕДА':
    case 'СР':
        alert('У Вас сьогодні вільний день!');
        break;

    case 'ЧЕТВЕР':
    case 'ЧТ':
        alert('У Вас сьогодні урок!');
        break;

    case 'П\'ЯТНИЦЯ':
    case 'ПТ':
        alert('У Вас сьогодні вільний день!');
        break;

    case 'СУБОТА':
    case 'СБ':
        alert('У Вас сьогодні вільний день!');
        break;

    case 'НЕДІЛЯ':
    case 'НД':
        alert('У Вас сьогодні вільний день!');
        break;

    default:
        alert('Ви ввели не правельне значення!');
        break
}