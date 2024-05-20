//Get grade for the test
let TestGrade = Number(prompt('Enter your grade for the test'));

if (TestGrade > 100)
    console.log("Grade can not be more than 100");
else if ((TestGrade <= 100) && (TestGrade >= 90)){
    console.log(`You grade: A (${TestGrade})`);
    TestGrade += 1;
    console.log(`You grade with +1: ${TestGrade}`);
} else if ((TestGrade <= 89) && (TestGrade >= 80)) {
    console.log(`You grade: B (${TestGrade})`);
    TestGrade += 1;
    console.log(`You grade with +1: ${TestGrade}`);
} else if ((TestGrade <= 79) && (TestGrade >= 70)) {
    console.log(`You grade: C (${TestGrade})`);
    TestGrade += 1;
    console.log(`You grade with +1: ${TestGrade}`);
} else if ((TestGrade <= 69) && (TestGrade >= 60)) {
    console.log(`You grade: D (${TestGrade})`);
    TestGrade += 1;
    console.log(`You grade with +1: ${TestGrade}`);
} else if ((TestGrade < 60) && (TestGrade >= 0)) {
    console.log(`You grade: F (${TestGrade})`);
    TestGrade += 1;
    console.log(`You grade with +1: ${TestGrade}`);
} else if (TestGrade < 0)
    console.log("Grade can not be less than 0");

if ((TestGrade <= 100) && (TestGrade > 0))
    console.log(`The student is ${TestGrade >= 60 ? 'enrolled' : 'not enrolled'}`);