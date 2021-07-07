var Employee =
{
company: 'Rohit'
}
var Emp1 = Object.create(employee);
delete Emp1.company console.log(emp1.company);

//output will be:It will show synatx error: unexpected identifier because You cannot delete a variable that declared with var