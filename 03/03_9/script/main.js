let planet = (prompt('Введіть назву планети, будь ласка. Доступні мови: українська та англійська')).toUpperCase();

switch(planet){
    case 'МЕРКУРІЙ':
    case 'MERCURY':
    case 'ВЕНЕРА':
    case 'VENUS':
    case 'ЗЕМЛЯ':
    case 'EARTH':
    case 'МАРС':
    case 'MARS':
    case 'ЮПІТЕР':
    case 'JUPITER':
    case 'САТУРН':
    case 'SATURN':
    case 'УРАН':
    case 'URANUS':
    case 'НЕПТУН':
    case 'NEPTUNE':
        alert("Ця планета знаходиться в нашій сонячній системі!");
        break;

    case 'ПЛУТОН':
    case 'PLUTO':
        alert("Від 2006 року вважається карликовою планетою! Входить до нашої сонячної системи.");
        break;

    default:
        alert("Ця планета не знаходиться в нашій сонячній системі!");
}