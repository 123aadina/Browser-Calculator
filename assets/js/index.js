

init = () => {
   const operations = ["add", "subtract", "multiply", "divide", "modulo"]

   operations.forEach(operation => {
      const input = [

         document.querySelector(`#${operation}_1`),
         document.querySelector(`#${operation}_2`)
      ]

      const result = document.querySelector(`#${operation}_result`)

      input.forEach(field => {
         field.addEventListener("focus", e => {
            e.target.value = ""
         })
         field.addEventListener('keyup', e => {
            result.value = calculate(
               operation,
               Number(input[0].value),
               Number(input[1].value)
            )
         })
      })

   })
}


const calculate = (operation, first, second) => {

   switch (operation) {

      case "add":
         return first + second;

      case 'subtract':
         return first - second;

      case 'multiply':
         return first * second;

      case 'divide':
         if (first > 0 && second > 0) {
            return first / second;
         } else {
            return 0;
         }

      case 'modulo':
         if (first > 0 && second > 0 && first >= second) {
            return first % second;
         } else {
            return 0;
         }

      default:
         return 0;
   }
}

window.addEventListener("load", init)