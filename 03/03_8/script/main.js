let dayOfWeek = (prompt('Введіть день тижня ("Вівторок", "Вт"), будь ласка')).toUpperCase();

switch (dayOfWeek){
    case 'ПОНЕДІЛОК':
    case 'ПН':
    case 'СЕРЕДА':
    case 'СР':
    case 'П\'ЯТНИЦЯ':
    case 'ПТ':    
    case 'СУБОТА':
    case 'СБ':
    case 'НЕДІЛЯ':
    case 'НД':
        alert('У Вас сьогодні вільний день!');
        break;

    case 'ВІВТОРОК':
    case 'ВТ':
    case 'ЧЕТВЕР':
    case 'ЧТ':
        alert('У Вас сьогодні урок!');
        break;

    default:
        alert('Ви ввели не правельне значення!');
        break
}