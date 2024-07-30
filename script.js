const showvalue = document.querySelector('.input1');
function add(input) {
    showvalue.value += input;

}
function calculate() {
    try {
    showvalue.value=eval(showvalue.value);
    }
    catch (error) {
        showvalue.value='Error';
    }


}
function allClear() {
   showvalue.value = '';
}