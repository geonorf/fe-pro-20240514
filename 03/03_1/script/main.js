let daysOfWeek = ['Monday',
                 'Tuesday',
                 'Wednesday',
                 'Thursday',
                 'Friday',
                 'Saturday',
                 'Sunday'];

for (let i = 0; i < daysOfWeek.length; i++){
    if (daysOfWeek[i] === 'Tuesday' || daysOfWeek[i] === 'Thursday')
        alert(`Lesson today (${daysOfWeek[i]}) at 7:00PM (19:00)`);
}