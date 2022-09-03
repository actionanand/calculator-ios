(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function l(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function u(t){if(t.ep)return;t.ep=!0;const a=l(t);fetch(t.href,a)}})();const style="";function onSetUpCalculator(){const output=document.getElementById("output"),form=document.getElementById("calc_form"),operand_btns=document.querySelectorAll("button[data-type=operand]"),operator_btns=document.querySelectorAll("button[data-type=operator]");form.addEventListener("submit",n=>{n.preventDefault()});let is_operator=!1,equation=[];const remove_active=()=>{operator_btns.forEach(n=>{n.classList.remove("active")})};operand_btns.forEach(n=>{n.addEventListener("click",o=>{remove_active(),output.value=="0"?output.value=o.target.value:output.value.includes(".")?output.value=output.value+""+o.target.value.replace(".",""):is_operator?(is_operator=!1,output.value=o.target.value):output.value=output.value+""+o.target.value})}),operator_btns.forEach(btn=>{btn.addEventListener("click",e=>{switch(remove_active(),e.currentTarget.classList.add("active"),e.target.value){case"%":output.value=parseFloat(output.value)/100;break;case"invert":output.value=parseFloat(output.value)*-1;break;case"=":equation.push(output.value),output.value=eval(equation.join("")),equation=[];break;default:let last_item=equation[equation.length-1];["/","*","+","-"].includes(last_item)&&is_operator?(equation.pop(),equation.push(e.target.value)):(equation.push(output.value),equation.push(e.target.value)),is_operator=!0;break}})})}document.querySelector("#app").innerHTML=`
  <main id="main">
    <form id="calc_form">
      <header class="calc_header">
        <input
          type="text"
          disabled
          id="output"
          class="calc_output"
          value="0"
        />
      </header>
      <footer class="calc_footer">
        <div class="btn_group">
          <button
            data-type="clear"
            type="reset"
            value="clear"
            class="btn btn-grey"
          >
            AC
          </button>
          <button data-type="operator" value="invert" class="btn btn-grey">
            +/-
          </button>
          <button data-type="operator" value="%" class="btn btn-grey">
            %
          </button>
          <button data-type="operator" value="/" class="btn btn-orange">
            \xF7
          </button>
        </div>
        <div class="btn_group">
          <button
            data-type="operand"
            value="7"
            class="btn btn-dark-grey"
            id="7"
          >
            7
          </button>
          <button data-type="operand" value="8" class="btn btn-dark-grey">
            8
          </button>
          <button data-type="operand" value="9" class="btn btn-dark-grey">
            9
          </button>
          <button data-type="operator" value="*" class="btn btn-orange">
            x
          </button>
        </div>
        <div class="btn_group">
          <button data-type="operand" value="4" class="btn btn-dark-grey">
            4
          </button>
          <button data-type="operand" value="5" class="btn btn-dark-grey">
            5
          </button>
          <button data-type="operand" value="6" class="btn btn-dark-grey">
            6
          </button>
          <button data-type="operator" value="-" class="btn btn-orange">
            -
          </button>
        </div>
        <div class="btn_group">
          <button data-type="operand" value="1" class="btn btn-dark-grey">
            1
          </button>
          <button data-type="operand" value="2" class="btn btn-dark-grey">
            2
          </button>
          <button data-type="operand" value="3" class="btn btn-dark-grey">
            3
          </button>
          <button data-type="operator" value="+" class="btn btn-orange">
            +
          </button>
        </div>
        <div class="btn_group">
          <button
            data-type="operand"
            value="0"
            class="btn btn-grow btn-dark-grey"
          >
            0
          </button>
          <button data-type="operand" value="." class="btn btn-dark-grey">
            .
          </button>
          <button value="=" data-type="operator" class="btn btn-orange">
            =
          </button>
        </div>
      </footer>
    </form>
  </main>
`;onSetUpCalculator();
