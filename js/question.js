$("#q_type").change(onSelectChange); //select  id를 이용하여 셀렉트 변경시마다 onSelectChange함수 실행

function onSelectChange() {
  var selected = $("#q_type option:selected");
  var output = "";

  if (selected.val() == 00) {
    output = "";
  } else if (selected.val() == 01) {
    output = '<input id="q_essay" type="text" placeholder="텍스트 입력" readonly />';
  } else if (selected.val() == 02) {
    output = '<input type="radio" value="HTML">HTML';
  } else {
    output = '<input type="checkbox" name="xxx" value="yyy" checked>';
  }

  $("#q_output").html(output); //div에 output 변수에 담은 text HTML로 출력하기
}

function focusOption() {
  $("#q_selOption").focus();
}

function addSelect() {
  $("#q_selAdd").on("click", "#q_selAdd", function () {
    $("q_sel").append(' <input id="q_select" type="radio" onclick="if(this.checked){this.checked=false;focusOption()}" /><input id="q_selOption" type="text" placeholder="옵션" />');
  });
}
