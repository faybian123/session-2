function maths ()
{
    addition = "this is the product of two or more numbers"
    subtraction = "this is the removal of a quantity number"
    multiplication = "this is the increase of a number by a specific amount"
    division = "this is the decrease of a number by a specific amount"

      operator = prompt ("please enter one of the following: add, subtract,divide or multiply", "")

    if (operator == "add")  {
        op1 = "you have selected ADDITION,  "
        document.getElementById("maths").innerHTML = op1 + addition
    }

    else
    if (operator == "subtraction")  {
        op1 = "you have selected SUBTRACTION,  "
        document.getElementById("maths").innerHTML = op2 + subtraction
    }

    else
    if (operator == "multiplication")  {
        op1 = "you have selected MULTIPLICATION,  "
        document.getElementById("maths").innerHTML = op3 + multiplication
    }

    else
    if (operator == "division")  {
        op1 = "you have selected DIVISION,  "
        document.getElementById("maths").innerHTML = op4 + division
    }
    else
    if (operator == "")  {
        op1 = "you have selected nothing,  "
        document.getElementById("maths").innerHTML = op5
    }
  }
