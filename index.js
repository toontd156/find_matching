let data_array = [1, 5, 13, 2, 7, 6];
let i_want = 909;
let data_array_length = data_array.length;
let sum = 0;
let count_loop = 0;
for (let i = 0; i < data_array_length;) {
    sum = data_array[i] + data_array[count_loop];
    console.log(sum, data_array[i], data_array[count_loop]);
    if (sum === i_want) {
        console.log(data_array[i], data_array[count_loop], 'TRUE');
        break
    } else {
        if (count_loop === data_array_length - 1) {
            i++;
            count_loop = 0;
        } else {
            count_loop++;
        }
    }
    if (i === data_array_length) {
        console.log('no match FALSE');
        break;
    }
}
