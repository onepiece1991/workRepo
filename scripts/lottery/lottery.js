function gotoCP() {
    var cp1 = $('#input1').val();
    var cp2 = $('#input2').val();

    if (!cp1) {
        cp1 = 5;
    }
    if (!cp2) {
        cp2 = 2;
    }
    if (cp1 < 5) {
        alert("第一个输入框请输入大于等于5的数字");
        return;
    }
    if (cp2 < 2) {
        alert("第二个输入框请输入大于等于2的数字");
        return;
    }
    var max1 = 35;
    var max2 = 12;
    var len = cp1 + cp2;
    var arr1 = [];
    var arr2 = [];
    var new_arr1 = [];
    var new_arr2 = [];
    for (var i = 0;; i++) {
        arr1[i] = Math.ceil(Math.random() * max1);
        var items = arr1[i];
        if ($.inArray(items, new_arr1) == -1) {
            new_arr1.push(items);
        }
        if (new_arr1.length == 6) {
            break;
        }
    }
    // 排序
    sortArr(new_arr1, cp1);

    for (var j = 0;; j++) {
        arr2[j] = Math.ceil(Math.random() * max2);
        var items = arr2[j];
        if ($.inArray(items, new_arr2) == -1) {
            new_arr2.push(items);
        }
        if (new_arr2.length == cp2) {
            break;
        }
    }
    // 排序
    sortArr(new_arr2, cp2);

    for (var i = 0; i < cp1; i++) {
        var str = '<span class="red">' + new_arr1[i] + '</span>';
        $('#showCP').append(str);
    }
    for (var j = 0; j < cp2; j++) {
        var str = '<span class="blue">' + new_arr2[j] + '</span>';
        $('#showCP').append(str);
    }
    $('#showCP').append('<br/>')
}

function sortArr(arr, len) {
    for (var k = 0; k < len; k++) {
        for (var m = k + 1; m < len; m++) {
            if (arr[k] > arr[m]) {
                var s = arr[k];
                arr[k] = arr[m];
                arr[m] = s;
            }
        }
    }
}
