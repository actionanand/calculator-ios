import './src/style.css';
import { onSetUpCalculator } from './src/initial_setup.js';

document.querySelector('#app').innerHTML = `
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
            ÷
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
`

onSetUpCalculator();
